import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import careerData from '../data/careerData'
import { comparisonData, difficultyMeta, riskMeta } from '../data/careerComparisonData'
import { getCareerSlug } from '../utils/dataHelpers'

const MAX_CAREERS = 3
const ALL_NAMES = careerData.map((c) => c.career_name)

const ROWS = [
  { key: 'required_education', label: 'Required Education' },
  { key: 'cost_estimate',      label: 'Cost Estimate'      },
  { key: 'difficulty_level',   label: 'Difficulty Level'   },
  { key: 'time_to_earn',       label: 'Time to Earn'       },
  { key: 'average_salary_india', label: 'Avg Salary (India)'},
  { key: 'risk_level',         label: 'Risk Level'         },
]

function Badge({ value, meta }) {
  const style = meta[value]
  if (!style) return <span className="text-sm font-semibold text-ink">{value}</span>
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${style.color}`}>
      {value}
    </span>
  )
}

function CellValue({ rowKey, value }) {
  if (!value) return <span className="text-ink-3 text-sm">—</span>
  if (rowKey === 'difficulty_level') return <Badge value={value} meta={difficultyMeta} />
  if (rowKey === 'risk_level')       return <Badge value={value} meta={riskMeta} />
  return <span className="text-sm text-ink leading-relaxed">{value}</span>
}

// Dropdown for adding a career
function CareerDropdown({ selected, onAdd, onClose }) {
  const [query, setQuery] = useState('')
  const ref = useRef(null)

  useEffect(() => {
    function handle(e) {
      if (ref.current && !ref.current.contains(e.target)) onClose()
    }
    document.addEventListener('mousedown', handle)
    return () => document.removeEventListener('mousedown', handle)
  }, [onClose])

  const filtered = ALL_NAMES.filter(
    (name) =>
      !selected.includes(name) &&
      name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div ref={ref} className="absolute left-0 top-full mt-2 z-50 w-72 bg-white border border-border rounded-2xl shadow-xl overflow-hidden">
      <div className="p-3 border-b border-border">
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search careers…"
          className="w-full rounded-xl border border-border bg-bg px-3 py-2 text-sm text-ink outline-none focus:border-accent"
        />
      </div>
      <ul className="max-h-60 overflow-y-auto">
        {filtered.length === 0 ? (
          <li className="px-4 py-3 text-sm text-ink-3">No results</li>
        ) : (
          filtered.map((name) => (
            <li key={name}>
              <button
                className="w-full text-left px-4 py-2.5 text-sm text-ink hover:bg-bg hover:text-accent transition-colors cursor-pointer border-0 bg-transparent"
                onClick={() => { onAdd(name); onClose() }}
              >
                {name}
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

// Desktop: traditional table
function DesktopTable({ selected }) {
  return (
    <div className="hidden md:block overflow-x-auto rounded-2xl border border-border shadow-sm">
      <table className="w-full border-collapse bg-white">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left px-5 py-4 text-xs font-bold uppercase tracking-widest text-ink-3 bg-bg w-40 min-w-[140px]">
              Metric
            </th>
            {selected.map((name) => (
              <th key={name} className="px-5 py-4 text-left min-w-[200px]">
                <span className="block text-base font-bold text-ink leading-snug">{name}</span>
                <span className="block text-xs text-ink-3 font-normal mt-0.5">
                  {comparisonData[name]
                    ? careerData.find((c) => c.career_name === name)?.category
                    : '—'}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row, i) => (
            <tr
              key={row.key}
              className={i % 2 === 0 ? 'bg-white' : 'bg-bg/60'}
            >
              <td className="px-5 py-4 text-xs font-bold uppercase tracking-widest text-ink-3 align-top whitespace-nowrap border-r border-border">
                {row.label}
              </td>
              {selected.map((name) => {
                const data = comparisonData[name]
                return (
                  <td key={name} className="px-5 py-4 align-top">
                    <CellValue rowKey={row.key} value={data?.[row.key]} />
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Mobile: stacked cards per career
function MobileCards({ selected }) {
  return (
    <div className="md:hidden space-y-4">
      {selected.map((name) => {
        const data = comparisonData[name]
        const career = careerData.find((c) => c.career_name === name)
        return (
          <div key={name} className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden">
            <div className="px-4 py-3 bg-ink text-white">
              <span className="block text-base font-bold leading-snug">{name}</span>
              <span className="block text-xs text-white/60 mt-0.5">{career?.category}</span>
            </div>
            <dl className="divide-y divide-border">
              {ROWS.map((row) => (
                <div key={row.key} className="px-4 py-3 flex justify-between gap-4 items-start">
                  <dt className="text-xs font-bold uppercase tracking-widest text-ink-3 whitespace-nowrap pt-0.5 shrink-0">
                    {row.label}
                  </dt>
                  <dd className="text-right">
                    <CellValue rowKey={row.key} value={data?.[row.key]} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        )
      })}
    </div>
  )
}

export default function CareerComparisonPage() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState([])
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const removeCareer = (name) => setSelected((s) => s.filter((n) => n !== name))
  const addCareer    = (name) => setSelected((s) => [...s, name])

  const canAdd = selected.length < MAX_CAREERS

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main className="page-shell">

        {/* Header */}
        <section className="page-hero-panel mb-6">
          <div className="section-kicker">Career comparison</div>
          <h1 className="font-serif text-4xl md:text-5xl tracking-tight leading-tight text-ink mb-3">
            Compare careers side by side
          </h1>
          <p className="text-base text-ink-2 leading-relaxed max-w-2xl">
            Select 2–3 career paths to compare education requirements, costs, difficulty, time investment, salary, and risk — all in one view.
          </p>
        </section>

        {/* Selector */}
        <section className="page-panel mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-ink-3 mb-4">
            Selected careers ({selected.length}/{MAX_CAREERS})
          </p>

          <div className="flex flex-wrap gap-2 items-center">
            {selected.map((name) => (
              <span
                key={name}
                className="inline-flex items-center gap-2 bg-ink text-white text-sm font-semibold px-4 py-2 rounded-full"
              >
                {name}
                <button
                  onClick={() => removeCareer(name)}
                  className="bg-transparent border-0 text-white/60 hover:text-white cursor-pointer text-lg leading-none -mr-1 p-0"
                  aria-label={`Remove ${name}`}
                >
                  ×
                </button>
              </span>
            ))}

            {canAdd && (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen((v) => !v)}
                  className="inline-flex items-center gap-1.5 border border-dashed border-border-2 rounded-full px-4 py-2 text-sm font-semibold text-ink-2 hover:border-accent hover:text-accent transition-colors cursor-pointer bg-bg"
                >
                  <span className="text-lg leading-none">+</span>
                  Add career
                </button>
                {dropdownOpen && (
                  <CareerDropdown
                    selected={selected}
                    onAdd={addCareer}
                    onClose={() => setDropdownOpen(false)}
                  />
                )}
              </div>
            )}

            {selected.length > 0 && (
              <button
                onClick={() => setSelected([])}
                className="ml-auto text-xs font-semibold text-ink-3 hover:text-accent transition-colors cursor-pointer bg-transparent border-0"
              >
                Clear all
              </button>
            )}
          </div>
        </section>

        {/* Empty state */}
        {selected.length === 0 && (
          <div className="page-empty">
            <p className="font-serif text-3xl text-ink mb-2">Pick your first career</p>
            <p className="text-sm text-ink-2">Use the "Add career" button above to start comparing paths.</p>
          </div>
        )}

        {selected.length === 1 && (
          <div className="page-empty">
            <p className="font-serif text-3xl text-ink mb-2">Add one more career</p>
            <p className="text-sm text-ink-2">You need at least 2 careers to see a comparison.</p>
          </div>
        )}

        {/* Comparison table (desktop) + cards (mobile) */}
        {selected.length >= 2 && (
          <>
            <DesktopTable selected={selected} />
            <MobileCards selected={selected} />

            {/* View detail links */}
            <div className="mt-6 flex flex-wrap gap-3">
              {selected.map((name) => {
                const career = careerData.find((c) => c.career_name === name)
                if (!career) return null
                return (
                  <button
                    key={name}
                    onClick={() => navigate(`/careers/${getCareerSlug(career)}`)}
                    className="btn-secondary text-sm"
                  >
                    Full details: {name} →
                  </button>
                )
              })}
            </div>
          </>
        )}
      </main>
    </div>
  )
}

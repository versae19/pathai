import React, { useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import collegeData from '../data/collegeData'
import { getCareerNames, slugify } from '../utils/dataHelpers'

const ALL = 'All'

const BUDGET_OPTIONS = [
  { label: 'Any budget', value: ALL },
  { label: 'Under ₹5 L',    value: 'under5'  },
  { label: '₹5 L – ₹15 L', value: '5to15'   },
  { label: '₹15 L – ₹30 L',value: '15to30'  },
  { label: 'Above ₹30 L',  value: 'above30' },
]

const TIER_OPTIONS = [ALL, 'Tier 1', 'Tier 2', 'Tier 3']

function roiLabel(score) {
  if (score >= 9) return { text: 'Excellent ROI', cls: 'text-[#4f46e5] bg-[#ede9fe] border-[#ddd6fe]' }
  if (score >= 7) return { text: 'Strong ROI',    cls: 'text-[#4338ca] bg-[#eef2ff] border-[#e0e7ff]' }
  if (score >= 5) return { text: 'Good ROI',      cls: 'text-[#7B5E1A] bg-[#FDF3E7] border-[#F0D9B5]' }
  if (score >= 3) return { text: 'Moderate ROI',  cls: 'text-[#B84F1A] bg-[#FDF0EB] border-[#F5D5C5]' }
  return                 { text: 'Low ROI',        cls: 'text-[#8B1F3A] bg-[#FCEEF2] border-[#F5C8D6]' }
}

function tierBadge(tier) {
  if (tier === 'Tier 1') return 'bg-[#EEF2FF] text-[#3730A3] border border-[#C7D2FE]'
  if (tier === 'Tier 2') return 'bg-[#FDF3E7] text-[#92400E] border border-[#FDE68A]'
  return                        'bg-bg text-ink-3 border border-border'
}

function matchesBudget(college, budget) {
  if (budget === ALL) return true
  const f = college.fees_numeric
  if (budget === 'under5')  return f < 5
  if (budget === '5to15')   return f >= 5  && f < 15
  if (budget === '15to30')  return f >= 15 && f < 30
  if (budget === 'above30') return f >= 30
  return true
}

function matchesCourseFilter(college, course) {
  if (course === ALL) return true
  const q = course.toLowerCase()
  return college.courses_offered.some(c => {
    const s = c.toLowerCase()
    return s === q || q.includes(s) || s.includes(q)
  })
}

export default function CollegeExplorerPage() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [query,    setQuery]    = useState(searchParams.get('q')        || '')
  const [location, setLocation] = useState(searchParams.get('location') || ALL)
  const [course,   setCourse]   = useState(searchParams.get('course')   || ALL)
  const [budget,   setBudget]   = useState(ALL)
  const [tier,     setTier]     = useState(ALL)
  const [viewMode, setViewMode] = useState(searchParams.get('course') ? 'statewise' : 'grid')

  const locations = useMemo(() => {
    const states = collegeData.map((c) => c.location.state)
    return [ALL, ...Array.from(new Set(states)).sort()]
  }, [])

  const courses = useMemo(() => [ALL, ...getCareerNames().sort()], [])

  const updateCourse = (value) => {
    setCourse(value)
    const next = new URLSearchParams(searchParams)
    if (value === ALL) next.delete('course')
    else next.set('course', value)
    setSearchParams(next, { replace: true })
  }

  const colleges = useMemo(() => {
    const q = query.trim().toLowerCase()
    return collegeData.filter((college) => {
      const matchesQuery = !q || [
        college.college_name,
        college.location.city,
        college.location.state,
        college.entrance_exams_accepted.join(' '),
        college.courses_offered.join(' ')
      ].join(' ').toLowerCase().includes(q)
      const matchesLocation = location === ALL || college.location.state === location
      const matchesCourse   = matchesCourseFilter(college, course)
      const matchesTier     = tier     === ALL || college.tier === tier
      return matchesQuery && matchesLocation && matchesCourse && matchesTier && matchesBudget(college, budget)
    })
  }, [query, location, course, budget, tier])

  const byState = useMemo(() => {
    const map = {}
    colleges.forEach(c => {
      const s = c.location.state
      if (!map[s]) map[s] = { govt: [], pvt: [] }
      if (c.type === 'government') map[s].govt.push(c)
      else map[s].pvt.push(c)
    })
    return Object.entries(map).sort((a, b) => a[0].localeCompare(b[0]))
  }, [colleges])

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />

      <main className="explorer-shell">

        {/* Hero */}
        <section className="explorer-hero fade-up">
          <div>
            <div className="section-kicker">College explorer</div>
            <h1>Search {collegeData.length} Indian colleges</h1>
            <p>Filter by state, career path, budget, tier, and entrance exams — with placement data and ROI scores for every institution.</p>
          </div>
          <div className="explorer-search">
            <label htmlFor="college-search">Search colleges</label>
            <input
              id="college-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search IIT, AIIMS, Delhi, CLAT…"
            />
          </div>
        </section>

        {/* Filters */}
        <section className="fade-up fade-up-1 mt-5">
          <div className="page-panel grid grid-cols-2 md:grid-cols-4 gap-3">
            <div>
              <label htmlFor="location-filter" className="block text-xs font-bold uppercase tracking-widest text-ink-3 mb-2">
                Location
              </label>
              <select
                id="location-filter"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-2xl border border-border bg-bg px-3 py-2.5 text-sm text-ink outline-none focus:border-accent"
              >
                {locations.map((item) => <option key={item} value={item}>{item}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="course-filter" className="block text-xs font-bold uppercase tracking-widest text-ink-3 mb-2">
                Career / Course
              </label>
              <select
                id="course-filter"
                value={course}
                onChange={(e) => updateCourse(e.target.value)}
                className="w-full rounded-2xl border border-border bg-bg px-3 py-2.5 text-sm text-ink outline-none focus:border-accent"
              >
                {courses.map((item) => <option key={item} value={item}>{item}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="budget-filter" className="block text-xs font-bold uppercase tracking-widest text-ink-3 mb-2">
                Budget (total fees)
              </label>
              <select
                id="budget-filter"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full rounded-2xl border border-border bg-bg px-3 py-2.5 text-sm text-ink outline-none focus:border-accent"
              >
                {BUDGET_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="tier-filter" className="block text-xs font-bold uppercase tracking-widest text-ink-3 mb-2">
                Tier
              </label>
              <select
                id="tier-filter"
                value={tier}
                onChange={(e) => setTier(e.target.value)}
                className="w-full rounded-2xl border border-border bg-bg px-3 py-2.5 text-sm text-ink outline-none focus:border-accent"
              >
                {TIER_OPTIONS.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>
        </section>

        <section className="result-summary fade-up fade-up-2">
          <span>{colleges.length} colleges found</span>
          <div className="flex items-center gap-3">
            <span>
              {[
                course   !== ALL ? course   : null,
                tier     !== ALL ? tier     : null,
                budget   !== ALL ? BUDGET_OPTIONS.find((o) => o.value === budget)?.label : null,
                location !== ALL ? location : null,
              ].filter(Boolean).join(' · ') || 'All colleges'}
            </span>
            <div className="flex rounded-xl border border-border bg-bg p-0.5 ml-2">
              {[
                { value: 'statewise', label: 'By State' },
                { value: 'grid',      label: 'Grid' },
              ].map(v => (
                <button
                  key={v.value}
                  type="button"
                  onClick={() => setViewMode(v.value)}
                  className={`px-3 py-1 rounded-lg text-[11px] font-bold border-0 cursor-pointer transition-all
                    ${viewMode === v.value ? 'bg-white shadow-sm text-ink' : 'bg-transparent text-ink-3 hover:text-ink'}`}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* State-wise view */}
        {viewMode === 'statewise' && (
          <section className="fade-up fade-up-2 space-y-6 mt-2">
            {byState.length === 0 && (
              <p className="text-sm text-ink-3 text-center py-10">No colleges match the current filters.</p>
            )}
            {byState.map(([state, { govt, pvt }]) => (
              <div key={state} className="rounded-2xl border border-border bg-white overflow-hidden">
                {/* State header */}
                <div className="px-5 py-3.5 bg-bg border-b border-border flex items-center justify-between">
                  <span className="text-sm font-bold text-ink">{state}</span>
                  <span className="text-[11px] font-semibold text-ink-3">
                    {govt.length + pvt.length} institute{govt.length + pvt.length !== 1 ? 's' : ''}
                    {govt.length > 0 && ` · ${govt.length} govt`}
                    {pvt.length > 0 && ` · ${pvt.length} private`}
                  </span>
                </div>

                {/* Government colleges */}
                {govt.length > 0 && (
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-ink-3 px-5 pt-4 pb-2">Government</p>
                    <div className="divide-y divide-border">
                      {govt.map(c => {
                        const roi = roiLabel(c.roi_score)
                        return (
                          <div key={c.college_name} className="flex items-center gap-4 px-5 py-3">
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-bold text-ink leading-snug truncate">{c.college_name}</p>
                              <p className="text-[11px] text-ink-3">{c.location.city} · {c.approximate_fees}</p>
                            </div>
                            <div className="text-right shrink-0">
                              <p className="text-[10px] uppercase tracking-widest text-ink-3">Avg placement</p>
                              <p className="text-sm font-bold text-ink">{c.placement_average_salary || 'N/A'}</p>
                            </div>
                            <span className={`shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full border ${roi.cls}`}>
                              {roi.text}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Private colleges */}
                {pvt.length > 0 && (
                  <div className={govt.length > 0 ? 'border-t border-border' : ''}>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-ink-3 px-5 pt-4 pb-2">Private</p>
                    <div className="divide-y divide-border">
                      {pvt.map(c => {
                        const roi = roiLabel(c.roi_score)
                        return (
                          <div key={c.college_name} className="flex items-center gap-4 px-5 py-3">
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-bold text-ink leading-snug truncate">{c.college_name}</p>
                              <p className="text-[11px] text-ink-3">{c.location.city} · {c.approximate_fees}</p>
                            </div>
                            <div className="text-right shrink-0">
                              <p className="text-[10px] uppercase tracking-widest text-ink-3">Avg placement</p>
                              <p className="text-sm font-bold text-ink">{c.placement_average_salary || 'N/A'}</p>
                            </div>
                            <span className={`shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full border ${roi.cls}`}>
                              {roi.text}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Grid view */}
        {viewMode === 'grid' && (
        <section className="college-grid">
          {colleges.map((college, index) => {
            const roi = roiLabel(college.roi_score)
            return (
              <article
                key={college.college_name}
                className="college-card fade-up"
                style={{ animationDelay: `${Math.min(index, 10) * 35}ms` }}
              >
                {/* Header row: name + badges */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="min-w-0">
                    <h3>{college.college_name}</h3>
                    <p>{college.location.city}, {college.location.state}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    <span className={`type-pill ${college.type}`}>{college.type}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${tierBadge(college.tier)}`}>
                      {college.tier}
                    </span>
                  </div>
                </div>

                {/* Placement + ROI */}
                <div className="flex items-center justify-between gap-3 mb-3 px-3 py-2.5 rounded-xl bg-bg border border-border">
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-ink-3">Avg placement</span>
                    <span className="block text-sm font-bold text-ink">{college.placement_average_salary}</span>
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${roi.cls}`}>
                    {roi.text}
                  </span>
                </div>

                {/* Fees + admission */}
                <div className="college-meta">
                  <span>{college.admission_process}</span>
                  <span>{college.approximate_fees}</span>
                </div>

                {/* Career chips */}
                <div className="tag-row mt-4">
                  {college.courses_offered.slice(0, 5).map((item) => (
                    <button
                      key={item}
                      className="course-chip"
                      onClick={() => navigate(`/careers/${slugify(item)}`)}
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <div className="exam-line">
                  {college.entrance_exams_accepted.slice(0, 4).join(' · ')}
                </div>
              </article>
            )
          })}
        </section>
        )}
      </main>
    </div>
  )
}

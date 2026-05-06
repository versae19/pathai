import React, { useState, useMemo, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { exploreOptions, getRoadmap, ALL_CAREER_NAMES, getTenthCatalogue, getTwelfthCatalogue, getGradCatalogue } from '../utils/careerEngine'

// ── Constants ──────────────────────────────────────────────────────────────────

const EDU_OPTIONS = [
  { value: '10th',       label: '10th Complete',  sub: 'After Class 10 / SSC' },
  { value: '12th',       label: '12th Complete',  sub: 'After Class 12 / HSC' },
  { value: 'Graduation', label: 'Graduation',      sub: "Bachelor's degree done" },
]

const STREAM_12 = [
  { value: 'Science-PCM',  label: 'Science (PCM)',        sub: 'Physics · Chemistry · Maths' },
  { value: 'Science-PCB',  label: 'Science (PCB)',        sub: 'Physics · Chemistry · Biology' },
  { value: 'Science-PCMB', label: 'Science (PCMB)',       sub: 'All four sciences' },
  { value: 'Commerce',     label: 'Commerce',             sub: 'Accounts · Economics · Business' },
  { value: 'Arts',         label: 'Arts / Humanities',    sub: 'History · Civics · Literature' },
  { value: 'Vocational',   label: 'Vocational',           sub: 'Skill-based trades' },
]

const STREAM_GRAD = [
  { value: 'Engineering', label: 'Engineering / Technology', sub: '' },
  { value: 'Medical',     label: 'Medical / Paramedical',    sub: '' },
  { value: 'Commerce',    label: 'Commerce / BBA / CA',      sub: '' },
  { value: 'Arts',        label: 'Arts / Humanities / Law',  sub: '' },
  { value: 'Science',     label: 'Pure Sciences',            sub: '' },
  { value: 'Other',       label: 'Other',                    sub: '' },
]

const INTERESTS = [
  { value: 'technology', label: 'Technology' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'business',   label: 'Business' },
  { value: 'creative',   label: 'Creative Arts' },
  { value: 'finance',    label: 'Finance' },
  { value: 'government', label: 'Government' },
  { value: 'education',  label: 'Education' },
  { value: 'science',    label: 'Research / Science' },
]

const TIMELINES = ['Less than 1 year', '1–2 years', '3–5 years', 'Flexible']

const BUDGETS = [
  'Low (government colleges focus)',
  'Medium (mix of government & private)',
  'High (best private institutes)',
]

// ── Category colours ───────────────────────────────────────────────────────────

const CAT_COLORS = {
  'Engineering':      { bg: '#eff6ff', border: '#bfdbfe', text: '#1d4ed8', dot: '#3b82f6' },
  'Medical':          { bg: '#ecfdf5', border: '#a7f3d0', text: '#065f46', dot: '#10b981' },
  'Commerce':         { bg: '#fffbeb', border: '#fde68a', text: '#92400e', dot: '#f59e0b' },
  'Arts':             { bg: '#f5f3ff', border: '#ddd6fe', text: '#5b21b6', dot: '#8b5cf6' },
  'Government Jobs':  { bg: '#f8fafc', border: '#e2e8f0', text: '#334155', dot: '#64748b' },
  'Emerging Careers': { bg: '#eef2ff', border: '#c7d2fe', text: '#3730a3', dot: '#6366f1' },
}

// ── Sub-components ────────────────────────────────────────────────────────────

function OptionBtn({ label, sub, selected, onClick, small }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left rounded-2xl border transition-all duration-200 cursor-pointer
        ${small ? 'px-3 py-2.5' : 'px-4 py-3.5'}
        ${selected ? 'border-accent bg-accent-light shadow-sm' : 'border-border bg-white hover:border-border-2'}`}
    >
      <span className={`block font-semibold ${small ? 'text-xs' : 'text-sm'} ${selected ? 'text-accent' : 'text-ink'}`}>
        {label}
      </span>
      {sub && !small && <span className="block text-xs text-ink-3 mt-0.5">{sub}</span>}
    </button>
  )
}

function Chip({ label, selected, onClick }) {
  return (
    <button
      type="button"
      className={`chip ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

// ── Explore result card ────────────────────────────────────────────────────────

function ExploreCard({ career, index }) {
  const [open, setOpen] = useState(false)
  const col = CAT_COLORS[career.category] || CAT_COLORS['Emerging Careers']

  return (
    <div
      className="bg-white border border-border rounded-2xl overflow-hidden hover:border-border-2 hover:shadow-md transition-all duration-300"
      style={{ animation: 'cardIn 0.4s ease both', animationDelay: `${index * 70}ms` }}
    >
      {/* Top bar accent */}
      <div className="h-1" style={{ background: col.dot }} />

      <div className="p-5">
        {/* Badges row */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <span className="text-[11px] font-bold px-2.5 py-1 rounded-full shrink-0"
            style={{ background: col.bg, color: col.text, border: `1px solid ${col.border}` }}>
            {career.category}
          </span>
          <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#fffbeb] text-[#92400e] border border-[#fde68a] shrink-0">
            {career.salary}
          </span>
        </div>

        {/* Title + description */}
        <h3 className="text-base font-bold text-ink leading-snug mb-2">{career.career_name}</h3>
        <p className="text-xs text-ink-2 leading-relaxed line-clamp-2 mb-4">{career.description}</p>

        {/* Why suitable */}
        <div className="p-3 rounded-xl mb-4"
          style={{ background: col.bg, border: `1px solid ${col.border}` }}>
          <div className="flex items-start gap-2">
            <span className="text-sm mt-0.5 shrink-0" style={{ color: col.dot }}>✓</span>
            <p className="text-xs leading-relaxed font-medium" style={{ color: col.text }}>
              {career.why_suitable}
            </p>
          </div>
        </div>

        {/* Key Exams */}
        {career.entrance_exams.length > 0 && (
          <div className="mb-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-ink-3 mb-2">Key Exams</p>
            <div className="flex flex-wrap gap-1.5">
              {career.entrance_exams.map(e => (
                <span key={e.exam_name}
                  className="text-[11px] font-semibold px-2.5 py-1 rounded-full border border-border text-ink-2 bg-bg">
                  {e.exam_name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {career.required_skills.length > 0 && (
          <div className="mb-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-ink-3 mb-2">Core Skills</p>
            <div className="flex flex-wrap gap-1.5">
              {career.required_skills.map(s => (
                <span key={s}
                  className="text-[11px] px-2.5 py-1 rounded-full bg-bg border border-border text-ink-3">
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Next steps — toggle */}
      <div className="border-t border-border">
        <button
          type="button"
          className="w-full flex items-center justify-between px-5 py-3 text-xs font-bold text-ink-2 hover:text-ink transition-colors cursor-pointer border-0 bg-transparent"
          onClick={() => setOpen(v => !v)}
        >
          <span>Next Steps →</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {open && (
          <ol className="px-5 pb-5 space-y-2.5">
            {career.next_steps.slice(0, 4).map((step, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span
                  className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white mt-0.5"
                  style={{ background: col.dot }}>
                  {i + 1}
                </span>
                <span className="text-xs text-ink-2 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  )
}

// ── Roadmap result ────────────────────────────────────────────────────────────

const PHASE_DOTS = ['#4f46e5', '#7c3aed', '#db2777', '#ea580c', '#16a34a', '#0284c7']

const RESOURCE_ICONS = { book: '📖', course: '🎓', platform: '💻', youtube: '▶️', website: '🔗' }

function Section({ label, children }) {
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-widest text-ink-3 mb-3">{label}</p>
      {children}
    </div>
  )
}

function RoadmapResult({ roadmap }) {
  return (
    <div className="space-y-8 fade-up">

      {/* ── Career header ─────────────────────────────────────────────── */}
      <div className="rounded-2xl p-5 text-white" style={{ background: '#0d0c1a' }}>
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="font-serif text-xl font-bold leading-snug">{roadmap.target_career}</h3>
          <span className="shrink-0 text-xs font-bold px-3 py-1.5 rounded-full bg-white/10 text-white/80 whitespace-nowrap">
            {roadmap.salary}
          </span>
        </div>
        <p className="text-xs text-white/60 leading-relaxed mb-4">{roadmap.description}</p>
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="text-xs font-semibold text-white/60">⏱ {roadmap.total_duration}</span>
          <span className="text-white/20 text-xs">·</span>
          <span className="text-xs font-semibold text-white/60">📈 {roadmap.growth_scope}</span>
          {roadmap.key_exams.slice(0, 3).map(e => (
            <span key={e.exam_name} className="text-xs font-bold px-2.5 py-1 rounded-full bg-white/10 text-white/80">
              {e.exam_name}
            </span>
          ))}
        </div>
      </div>

      {/* ── Phase timeline ────────────────────────────────────────────── */}
      <Section label="Step-by-Step Roadmap">
        <div className="space-y-2">
          {roadmap.phases.map((phase, i) => (
            <div key={i} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold text-white shrink-0"
                  style={{ background: PHASE_DOTS[i % PHASE_DOTS.length] }}>
                  {i + 1}
                </div>
                {i < roadmap.phases.length - 1 && <div className="w-px flex-1 my-1.5 min-h-[12px] bg-border" />}
              </div>
              <div className="flex-1 bg-white border border-border rounded-2xl p-4 mb-2">
                <div className="flex items-start justify-between gap-2 mb-2.5">
                  <h4 className="text-sm font-bold text-ink leading-snug">{phase.phase}</h4>
                  <span className="shrink-0 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-bg border border-border text-ink-3 whitespace-nowrap">
                    {phase.duration}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {phase.actions.map((a, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="shrink-0 mt-[5px] w-1 h-1 rounded-full bg-ink-3" />
                      <span className="text-xs text-ink-2 leading-relaxed">{a}</span>
                    </li>
                  ))}
                </ul>
                {phase.exams?.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {phase.exams.map(e => (
                      <span key={e} className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-accent-light text-accent border border-accent-mid">
                        {e}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Skills to Build ───────────────────────────────────────────── */}
      {roadmap.skills && (
        <Section label="Skills to Build">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white border border-border rounded-xl p-4">
              <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2.5">Technical Skills</p>
              <div className="flex flex-wrap gap-1.5">
                {roadmap.skills.technical.map(s => (
                  <span key={s} className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-accent-light text-accent border border-accent-mid">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white border border-border rounded-xl p-4">
              <p className="text-[10px] font-bold text-ink-3 uppercase tracking-widest mb-2.5">Soft Skills</p>
              <div className="flex flex-wrap gap-1.5">
                {roadmap.skills.soft.map(s => (
                  <span key={s} className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-bg border border-border text-ink-2">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>
      )}

      {/* ── Career Ladder ─────────────────────────────────────────────── */}
      {roadmap.career_ladder?.length > 0 && (
        <Section label="Career Progression & Salary Ladder">
          <div className="bg-white border border-border rounded-xl overflow-hidden">
            {roadmap.career_ladder.map((rung, i) => (
              <div key={i}
                className={`flex items-center gap-3 px-4 py-3 ${i < roadmap.career_ladder.length - 1 ? 'border-b border-border' : ''}`}>
                <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-[10px] font-bold text-white"
                  style={{ background: PHASE_DOTS[i % PHASE_DOTS.length] }}>
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-ink leading-snug">{rung.role}</p>
                  <p className="text-[11px] text-ink-3">{rung.years}</p>
                </div>
                <span className="shrink-0 text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#fffbeb] text-[#92400e] border border-[#fde68a] whitespace-nowrap">
                  {rung.salary}
                </span>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* ── Key Exams ─────────────────────────────────────────────────── */}
      {roadmap.key_exams.length > 0 && (
        <Section label="Exams Required">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {roadmap.key_exams.map(e => (
              <div key={e.exam_name} className="bg-white border border-border rounded-xl p-3.5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-ink">{e.exam_name}</span>
                  {e.level && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-accent-light text-accent border border-accent-mid capitalize">
                      {e.level}
                    </span>
                  )}
                </div>
                {e.description && <p className="text-[11px] text-ink-3 leading-relaxed line-clamp-2">{e.description}</p>}
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* ── Resources ─────────────────────────────────────────────────── */}
      {roadmap.resources?.length > 0 && (
        <Section label="Best Resources to Use">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {roadmap.resources.map((r, i) => (
              <div key={i} className="bg-white border border-border rounded-xl p-3.5 flex gap-3">
                <span className="text-lg shrink-0 leading-none mt-0.5">{RESOURCE_ICONS[r.type] || '📌'}</span>
                <div>
                  <p className="text-xs font-bold text-ink leading-snug mb-0.5">{r.title}</p>
                  <p className="text-[11px] text-ink-3 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* ── Colleges ──────────────────────────────────────────────────── */}
      {roadmap.colleges.length > 0 && (
        <Section label="Top Colleges">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {roadmap.colleges.map((c, i) => (
              <div key={i} className="bg-white border border-border rounded-xl p-3.5">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p className="text-xs font-bold text-ink leading-snug">{c.name}</p>
                  <span className={`shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full capitalize
                    ${c.type === 'government' ? 'bg-accent-light text-accent border border-accent-mid' : 'bg-[#eef2ff] text-[#4338ca] border border-[#c7d2fe]'}`}>
                    {c.type}
                  </span>
                </div>
                <p className="text-[11px] text-ink-3 mb-1">{c.location}</p>
                {c.fees && <p className="text-[11px] font-semibold text-ink-2">{c.fees}</p>}
                {c.exams.length > 0 && (
                  <div className="mt-1.5 flex flex-wrap gap-1">
                    {c.exams.map(e => (
                      <span key={e} className="text-[10px] px-1.5 py-0.5 rounded bg-bg border border-border text-ink-3">{e}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* ── Who's Hiring ──────────────────────────────────────────────── */}
      {roadmap.companies?.length > 0 && (
        <Section label="Who's Hiring">
          <div className="flex flex-wrap gap-2">
            {roadmap.companies.map(c => (
              <span key={c} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-border text-ink-2">
                {c}
              </span>
            ))}
          </div>
        </Section>
      )}

      {/* ── Budget note ───────────────────────────────────────────────── */}
      {roadmap.budget_note && (
        <div className="bg-accent-light border border-accent-mid rounded-xl p-4">
          <p className="text-xs font-semibold text-accent">💡 {roadmap.budget_note}</p>
        </div>
      )}

      {/* ── Common Pitfalls ───────────────────────────────────────────── */}
      {roadmap.pitfalls?.length > 0 && (
        <Section label="Common Mistakes to Avoid">
          <div className="bg-white border border-border rounded-xl divide-y divide-border">
            {roadmap.pitfalls.map((p, i) => (
              <div key={i} className="flex items-start gap-3 px-4 py-3">
                <span className="shrink-0 text-sm mt-0.5">⚠️</span>
                <p className="text-xs text-ink-2 leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* ── Backup Options ────────────────────────────────────────────── */}
      {roadmap.backup_options.length > 0 && (
        <Section label="Backup / Related Careers">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {roadmap.backup_options.map((b, i) => (
              <div key={i} className="bg-white border border-border rounded-xl p-3.5">
                <p className="text-sm font-bold text-ink mb-1">{b.career_name}</p>
                <p className="text-[11px] text-ink-3 leading-relaxed mb-1.5">{b.reason}</p>
                <p className="text-[11px] font-semibold text-ink-2">{b.salary}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

    </div>
  )
}

// ── 10th Comprehensive Catalogue ─────────────────────────────────────────────

function ComprehensiveExplore({ categories, intro, streamLabel }) {
  const [openCat, setOpenCat] = useState(null)
  const [selectedCareer, setSelectedCareer] = useState(null)

  const toggleCat = id => {
    setOpenCat(p => p === id ? null : id)
    setSelectedCareer(null)
  }

  return (
    <div className="space-y-2.5 fade-up">
      <p className="text-xs text-ink-3 leading-relaxed mb-4">{intro}</p>

      {categories.map(cat => (
        <div key={cat.id} className="rounded-2xl border border-border overflow-hidden bg-white">
          {/* Category header */}
          <button
            type="button"
            className="w-full flex items-center gap-3 px-4 py-3.5 text-left transition-all cursor-pointer border-0 bg-transparent hover:bg-bg"
            style={{ borderLeft: `4px solid ${cat.color.dot}` }}
            onClick={() => toggleCat(cat.id)}
          >
            <span className="text-lg leading-none">{cat.icon}</span>
            <div className="flex-1 min-w-0">
              <span className="block text-sm font-bold text-ink leading-snug">{cat.label}</span>
              <span className="text-[11px] text-ink-3">{cat.careers.length} career paths</span>
            </div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
              className={`w-4 h-4 shrink-0 text-ink-3 transition-transform duration-200 ${openCat === cat.id ? 'rotate-180' : ''}`}>
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {openCat === cat.id && (
            <div className="border-t border-border px-4 pt-4 pb-5" style={{ background: cat.color.bg }}>
              {/* Career chips */}
              <div className="flex flex-wrap gap-2 mb-4">
                {cat.careers.map(career => {
                  const isSelected = selectedCareer?.name === career.name
                  return (
                    <button
                      key={career.name}
                      type="button"
                      className="text-xs font-semibold px-3 py-1.5 rounded-full border transition-all cursor-pointer"
                      style={isSelected
                        ? { background: cat.color.dot, borderColor: cat.color.dot, color: '#fff' }
                        : { background: '#fff', borderColor: cat.color.border, color: cat.color.text }}
                      onClick={() => setSelectedCareer(p => p?.name === career.name ? null : career)}
                    >
                      {career.name}
                    </button>
                  )
                })}
              </div>

              {/* Career detail panel */}
              {selectedCareer && (
                <div
                  key={selectedCareer.name}
                  className="bg-white rounded-xl p-4 fade-up"
                  style={{ border: `1px solid ${cat.color.border}` }}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="text-sm font-bold text-ink leading-snug">{selectedCareer.name}</h4>
                    <span
                      className="shrink-0 text-[11px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap"
                      style={{ background: cat.color.light, color: cat.color.text, border: `1px solid ${cat.color.border}` }}
                    >
                      {selectedCareer.salary}
                    </span>
                  </div>
                  <p className="text-xs text-ink-2 leading-relaxed mb-3.5">{selectedCareer.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-ink-3 mb-1.5">{streamLabel}</p>
                      <p className="text-xs font-semibold text-ink">{selectedCareer.stream}</p>
                    </div>
                    {selectedCareer.exams.length > 0 && (
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-ink-3 mb-1.5">Key Exams to Target</p>
                        <div className="flex flex-wrap gap-1">
                          {selectedCareer.exams.map(e => (
                            <span key={e}
                              className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-bg border border-border text-ink-2">
                              {e}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {!selectedCareer && (
                <p className="text-[11px] text-ink-3 italic">Tap a career above to see stream recommendation and key exams.</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

export default function CareerForm({ onCancel, compact = false, initialState = null }) {
  const navigate = useNavigate()

  const [mode, setMode] = useState(initialState?.mode || 'explore')

  // Mode A
  const [eduA, setEduA]           = useState(initialState?.eduA || '')
  const [streamA, setStreamA]     = useState(initialState?.streamA || '')
  const [interestsA, setInterestsA] = useState(initialState?.interestsA || [])
  const [resultsA, setResultsA]   = useState(null)

  // Mode B
  const [careerSearch, setCareerSearch] = useState(initialState?.targetCareer || '')
  const [targetCareer, setTargetCareer] = useState(initialState?.targetCareer || '')
  const [showDrop, setShowDrop]   = useState(false)
  const [eduB, setEduB]           = useState(initialState?.eduB || '')
  const [timeline, setTimeline]   = useState(initialState?.timeline || '')
  const [budget, setBudget]       = useState(initialState?.budget || '')
  const [resultsB, setResultsB]   = useState(null)

  const [error, setError]         = useState('')
  const resultsRef = useRef()
  const dropRef    = useRef()

  // Auto-compute when initialState is provided (arriving from compact navigation)
  useEffect(() => {
    if (!initialState) return
    if (initialState.mode === 'explore' && initialState.eduA) {
      const r = exploreOptions({ education: initialState.eduA, stream: initialState.streamA, interests: initialState.interestsA || [] })
      setResultsA(r)
    } else if (initialState.mode === 'roadmap' && initialState.targetCareer && initialState.eduB) {
      const r = getRoadmap({ targetCareer: initialState.targetCareer, currentEducation: initialState.eduB, timeline: initialState.timeline, budget: initialState.budget })
      setResultsB(r)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Close dropdown on outside click
  useEffect(() => {
    const handler = e => { if (dropRef.current && !dropRef.current.contains(e.target)) setShowDrop(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const filteredCareers = useMemo(() => {
    const q = careerSearch.trim().toLowerCase()
    if (!q) return ALL_CAREER_NAMES.slice(0, 12)
    return ALL_CAREER_NAMES.filter(n => n.toLowerCase().includes(q)).slice(0, 10)
  }, [careerSearch])

  const streamOpts = eduA === '12th' ? STREAM_12 : STREAM_GRAD

  const switchMode = m => { setMode(m); setError(''); setResultsA(null); setResultsB(null) }

  const toggleInterest = v => {
    setInterestsA(p => p.includes(v) ? p.filter(x => x !== v) : [...p, v])
    setError('')
  }

  const scrollToResults = () => setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)

  const submitExplore = () => {
    if (!eduA) { setError('Please select your education level.'); return }
    if ((eduA === '12th' || eduA === 'Graduation') && !streamA) { setError('Please select your stream / degree.'); return }
    setError('')
    if (compact) {
      navigate('/plan', { state: { formInitial: { mode: 'explore', eduA, streamA, interestsA } } })
      return
    }
    setResultsA(exploreOptions({ education: eduA, stream: streamA, interests: interestsA }))
    scrollToResults()
  }

  const submitRoadmap = () => {
    if (!targetCareer) { setError('Please select a target career.'); return }
    if (!eduB)         { setError('Please select your current education level.'); return }
    setError('')
    if (compact) {
      navigate('/plan', { state: { formInitial: { mode: 'roadmap', targetCareer, eduB, timeline, budget } } })
      return
    }
    setResultsB(getRoadmap({ targetCareer, currentEducation: eduB, timeline, budget }))
    scrollToResults()
  }

  const lbl  = 'block text-[10px] font-bold uppercase tracking-widest text-ink-3 mb-2.5'
  const sp   = compact ? 'space-y-4' : 'space-y-5'

  return (
    <div>
      {/* ── Mode toggle tabs ──────────────────────────────────────────── */}
      <div className={`flex rounded-2xl border border-border bg-bg p-1 ${compact ? 'mb-5' : 'mb-7'}`}>
        {[
          { value: 'explore', label: 'Explore Options', sub: 'I have completed X' },
          { value: 'roadmap', label: 'Get Roadmap',     sub: 'I want to become X' },
        ].map(tab => (
          <button
            key={tab.value}
            type="button"
            onClick={() => switchMode(tab.value)}
            className={`flex-1 rounded-xl border-0 cursor-pointer transition-all duration-200 text-center
              ${compact ? 'py-2.5' : 'py-3'}
              ${mode === tab.value ? 'bg-white shadow-sm' : 'bg-transparent hover:bg-white/60'}`}
          >
            <span className={`block font-bold ${compact ? 'text-xs' : 'text-sm'} ${mode === tab.value ? 'text-ink' : 'text-ink-3'}`}>
              {tab.label}
            </span>
            {!compact && (
              <span className="block text-[11px] text-ink-3 mt-0.5">{tab.sub}</span>
            )}
          </button>
        ))}
      </div>

      {/* ── MODE A: Explore Options ───────────────────────────────────── */}
      {mode === 'explore' && (
        <div className={sp}>
          <div>
            <label className={lbl}>What have you completed?</label>
            <div className="grid grid-cols-3 gap-2">
              {EDU_OPTIONS.map(o => (
                <OptionBtn key={o.value} label={o.label} sub={o.sub}
                  selected={eduA === o.value} small={compact}
                  onClick={() => { setEduA(o.value); setStreamA(''); setResultsA(null); setError('') }} />
              ))}
            </div>
          </div>

          {(eduA === '12th' || eduA === 'Graduation') && (
            <div className="fade-up">
              <label className={lbl}>{eduA === '12th' ? 'Your stream in Class 12' : 'Your degree field'}</label>
              <div className="grid grid-cols-2 gap-2">
                {streamOpts.map(o => (
                  <OptionBtn key={o.value} label={o.label} sub={o.sub}
                    selected={streamA === o.value} small={compact}
                    onClick={() => { setStreamA(o.value); setResultsA(null); setError('') }} />
                ))}
              </div>
            </div>
          )}

          <div>
            <label className={lbl}>
              Interests <span className="font-normal text-ink-3 normal-case tracking-normal">(optional — helps us rank results)</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map(o => (
                <Chip key={o.value} label={o.label}
                  selected={interestsA.includes(o.value)}
                  onClick={() => toggleInterest(o.value)} />
              ))}
            </div>
          </div>

          {error && <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700">{error}</div>}

          <button className="btn-primary w-full justify-center py-3.5 text-sm" onClick={submitExplore}>
            Find Career Options →
          </button>
        </div>
      )}

      {/* ── MODE B: Get Roadmap ───────────────────────────────────────── */}
      {mode === 'roadmap' && (
        <div className={sp}>
          {/* Career search */}
          <div>
            <label className={lbl}>I want to become a…</label>
            <div className="relative" ref={dropRef}>
              <input
                type="text"
                placeholder="Search career (e.g. Doctor, Software Engineer…)"
                value={careerSearch}
                onChange={e => {
                  setCareerSearch(e.target.value)
                  setTargetCareer('')
                  setShowDrop(true)
                  setResultsB(null)
                  setError('')
                }}
                onFocus={() => setShowDrop(true)}
                className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm text-ink focus:border-accent outline-none transition-colors"
              />
              {targetCareer && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-accent pointer-events-none">
                  ✓ {targetCareer}
                </span>
              )}
              {showDrop && !targetCareer && filteredCareers.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-border rounded-xl shadow-lg z-50 max-h-56 overflow-y-auto">
                  {filteredCareers.map(name => (
                    <button
                      key={name}
                      type="button"
                      className="w-full text-left px-4 py-2.5 text-sm text-ink hover:bg-bg transition-colors cursor-pointer border-0 bg-transparent"
                      onMouseDown={() => {
                        setTargetCareer(name)
                        setCareerSearch(name)
                        setShowDrop(false)
                        setResultsB(null)
                        setError('')
                      }}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Current education */}
          <div>
            <label className={lbl}>My current education</label>
            <div className="grid grid-cols-3 gap-2">
              {EDU_OPTIONS.map(o => (
                <OptionBtn key={o.value} label={o.label} sub={o.sub}
                  selected={eduB === o.value} small={compact}
                  onClick={() => { setEduB(o.value); setResultsB(null); setError('') }} />
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <label className={lbl}>
              Time I can invest <span className="font-normal text-ink-3 normal-case tracking-normal">(optional)</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {TIMELINES.map(t => (
                <Chip key={t} label={t} selected={timeline === t}
                  onClick={() => { setTimeline(p => p === t ? '' : t); setResultsB(null) }} />
              ))}
            </div>
          </div>

          {/* Budget — hidden in compact */}
          {!compact && (
            <div>
              <label className={lbl}>
                Budget preference <span className="font-normal text-ink-3 normal-case tracking-normal">(optional)</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {BUDGETS.map(b => (
                  <Chip key={b} label={b} selected={budget === b}
                    onClick={() => { setBudget(p => p === b ? '' : b); setResultsB(null) }} />
                ))}
              </div>
            </div>
          )}

          {error && <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700">{error}</div>}

          <button className="btn-primary w-full justify-center py-3.5 text-sm" onClick={submitRoadmap}>
            Build My Roadmap →
          </button>
        </div>
      )}

      {/* Back link */}
      {onCancel && !resultsA && !resultsB && (
        <button className="btn-secondary mt-4 text-sm" onClick={onCancel}>← Back</button>
      )}

      {/* ── Results ──────────────────────────────────────────────────── */}
      {(resultsA || resultsB) && !compact && (() => {
        const catalogue12   = eduA === '12th'         ? getTwelfthCatalogue(streamA, interestsA) : null
        const catalogueGrad = eduA === 'Graduation'   ? getGradCatalogue(streamA, interestsA)    : null
        const activeCat     = catalogue12 || catalogueGrad
        const useCatalogue  = eduA === '10th' || !!activeCat
        const catCount      = eduA === '10th' ? 12 : (activeCat?.length ?? 0)

        const intro =
          eduA === '10th'       ? 'Tap any category to browse careers. Every path listed below is achievable starting from Class 10.'
          : eduA === '12th'     ? `Comprehensive paths for ${streamA.replace(/-/g, ' ')} students — degrees, diplomas, and direct options.`
          : /* Graduation */      `All career paths available to ${streamA} graduates — roles, higher education, certifications, and government entry.`

        const streamLabel =
          eduA === '10th'       ? 'Recommended Stream (Class 11)'
          : eduA === '12th'     ? 'Degree / Programme'
          : /* Graduation */      'Next Step / Qualification'

        return (
          <div ref={resultsRef} className="mt-10 pt-8 border-t border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-bold text-ink">
                {resultsA
                  ? useCatalogue
                    ? `${catCount} career categories — tap to explore`
                    : `${resultsA.length} career paths matched`
                  : `Roadmap for ${resultsB.target_career}`}
              </span>
              <button
                type="button"
                className="ml-auto text-xs font-semibold text-ink-3 hover:text-ink bg-transparent border-0 cursor-pointer transition-colors"
                onClick={() => { setResultsA(null); setResultsB(null) }}
              >
                ← Edit
              </button>
            </div>

            {resultsA && (
              useCatalogue
                ? <ComprehensiveExplore
                    categories={eduA === '10th' ? getTenthCatalogue(interestsA) : activeCat}
                    intro={intro}
                    streamLabel={streamLabel}
                  />
                : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {resultsA.map((c, i) => <ExploreCard key={c.career_name} career={c} index={i} />)}
                  </div>
                )
            )}

            {resultsB && <RoadmapResult roadmap={resultsB} />}
          </div>
        )
      })()}
    </div>
  )
}

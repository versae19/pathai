import React, { useState, useMemo } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import careerData from '../data/careerData'
import { careerExamConfig, examRoadmaps } from '../data/examStrategyData'
import { getCareerSlug } from '../utils/dataHelpers'

// ─── Constants ────────────────────────────────────────────────────────────────

const PHASE_COLORS = {
  green:  { bg: 'bg-[#ede9fe]', border: 'border-[#ddd6fe]', dot: 'bg-[#4f46e5]', text: 'text-[#4f46e5]', badge: 'bg-[#4f46e5] text-white' },
  blue:   { bg: 'bg-[#EEF2FF]', border: 'border-[#C7D2FE]', dot: 'bg-[#3730A3]', text: 'text-[#3730A3]', badge: 'bg-[#3730A3] text-white' },
  amber:  { bg: 'bg-[#FDF3E7]', border: 'border-[#F0D9B5]', dot: 'bg-[#92400E]', text: 'text-[#92400E]', badge: 'bg-[#92400E] text-white' },
  orange: { bg: 'bg-[#FFF7ED]', border: 'border-[#FED7AA]', dot: 'bg-[#C2410C]', text: 'text-[#C2410C]', badge: 'bg-[#C2410C] text-white' },
  red:    { bg: 'bg-[#FFF1F2]', border: 'border-[#FECDD3]', dot: 'bg-[#9F1239]', text: 'text-[#9F1239]', badge: 'bg-[#9F1239] text-white' },
  purple: { bg: 'bg-[#F5F3FF]', border: 'border-[#DDD6FE]', dot: 'bg-[#5B21B6]', text: 'text-[#5B21B6]', badge: 'bg-[#5B21B6] text-white' },
}

const DIFF_COLORS = {
  'Easy':      'text-[#4f46e5] bg-[#ede9fe] border-[#ddd6fe]',
  'Medium':    'text-[#92400E] bg-[#FDF3E7] border-[#F0D9B5]',
  'Hard':      'text-[#C2410C] bg-[#FFF7ED] border-[#FED7AA]',
  'Very Hard': 'text-[#9F1239] bg-[#FFF1F2] border-[#FECDD3]',
}

const ALL_CAREERS = careerData.map((c) => c.career_name).sort()

// ─── Sub-components ───────────────────────────────────────────────────────────

function PhaseBar({ roadmap }) {
  const total = roadmap.reduce((sum, phase) => {
    const match = phase.period.match(/\d+/g)
    if (!match) return sum + 1
    const nums = match.map(Number)
    return sum + (nums.length === 2 ? nums[1] - nums[0] + 1 : 1)
  }, 0)

  return (
    <div className="flex rounded-xl overflow-hidden border border-border h-10">
      {roadmap.map((phase, i) => {
        const match = phase.period.match(/\d+/g)
        const nums = match ? match.map(Number) : [1]
        const span = nums.length === 2 ? nums[1] - nums[0] + 1 : 1
        const pct = (span / total) * 100
        const c = PHASE_COLORS[phase.color] || PHASE_COLORS.green
        return (
          <div
            key={i}
            className={`flex items-center justify-center text-[10px] font-bold ${c.badge} truncate px-1`}
            style={{ width: `${pct}%` }}
            title={`${phase.phase} — ${phase.period}`}
          >
            <span className="hidden sm:block truncate">{phase.phase}</span>
          </div>
        )
      })}
    </div>
  )
}

function PhaseLabels({ roadmap }) {
  const total = roadmap.reduce((sum, phase) => {
    const match = phase.period.match(/\d+/g)
    if (!match) return sum + 1
    const nums = match.map(Number)
    return sum + (nums.length === 2 ? nums[1] - nums[0] + 1 : 1)
  }, 0)

  return (
    <div className="flex mt-1">
      {roadmap.map((phase, i) => {
        const match = phase.period.match(/\d+/g)
        const nums = match ? match.map(Number) : [1]
        const span = nums.length === 2 ? nums[1] - nums[0] + 1 : 1
        const pct = (span / total) * 100
        return (
          <div
            key={i}
            className="text-[10px] text-ink-3 font-semibold text-center truncate px-0.5"
            style={{ width: `${pct}%` }}
          >
            {phase.period}
          </div>
        )
      })}
    </div>
  )
}

function RoadmapCard({ phase, index }) {
  const [open, setOpen] = useState(index === 0)
  const c = PHASE_COLORS[phase.color] || PHASE_COLORS.green

  return (
    <div className={`border rounded-2xl overflow-hidden ${c.border}`}>
      <button
        onClick={() => setOpen((v) => !v)}
        className={`w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer border-0 ${c.bg}`}
        aria-expanded={open}
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className={`shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold ${c.badge}`}>
            {index + 1}
          </span>
          <div className="min-w-0">
            <span className={`block text-sm font-bold ${c.text}`}>{phase.phase}</span>
            <span className="block text-xs text-ink-3">{phase.period}</span>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="hidden sm:block text-xs font-semibold text-ink-2 max-w-xs truncate">{phase.focus}</span>
          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold bg-white/60 ${c.text}`}>
            {open ? '−' : '+'}
          </span>
        </div>
      </button>

      {open && (
        <div className="px-5 py-4 bg-white border-t border-border">
          <p className="text-sm font-semibold text-ink mb-3">{phase.focus}</p>
          <ul className="space-y-2 mb-4">
            {phase.tasks.map((task, ti) => (
              <li key={ti} className="flex gap-2.5 text-sm text-ink-2">
                <span className={`mt-1 shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${c.badge}`}>✓</span>
                {task}
              </li>
            ))}
          </ul>
          <div className={`flex items-start gap-2 rounded-xl px-3 py-2.5 ${c.bg} border ${c.border}`}>
            <span className="text-base shrink-0">★</span>
            <p className="text-xs font-semibold text-ink-2"><span className={`font-bold ${c.text}`}>Milestone: </span>{phase.milestone}</p>
          </div>
        </div>
      )}
    </div>
  )
}

function BackupExamChip({ name, onClick }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-1.5 bg-bg border border-border rounded-full px-3.5 py-1.5 text-sm font-semibold text-ink-2 hover:border-accent hover:text-accent transition-colors cursor-pointer"
    >
      {name}
      <span className="text-ink-3 text-xs">→</span>
    </button>
  )
}

function SequentialChip({ name }) {
  return (
    <span className="inline-flex items-center gap-1.5 bg-[#F5F3FF] border border-[#DDD6FE] rounded-full px-3.5 py-1.5 text-sm font-semibold text-[#5B21B6]">
      {name}
      <span className="text-[10px] bg-[#5B21B6] text-white px-1.5 py-0.5 rounded-full">Next</span>
    </span>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function ExamPlannerPage() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  const slugFromUrl = searchParams.get('career')
  const initialCareer = useMemo(() => {
    if (!slugFromUrl) return ''
    const match = careerData.find((c) => getCareerSlug(c) === slugFromUrl)
    return match ? match.career_name : ''
  }, [slugFromUrl])

  const [selectedCareer, setSelectedCareer] = useState(initialCareer)

  const config  = selectedCareer ? careerExamConfig[selectedCareer] : null
  const roadmap = config ? examRoadmaps[config.primary_exam] : null

  const handleCareerChange = (name) => {
    setSelectedCareer(name)
    if (name) {
      const career = careerData.find((c) => c.career_name === name)
      if (career) setSearchParams({ career: getCareerSlug(career) }, { replace: true })
    } else {
      setSearchParams({}, { replace: true })
    }
  }

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />

      <main className="page-shell">

        {/* ── Header ── */}
        <section className="page-hero-panel mb-6 fade-up">
          <div className="section-kicker">Exam strategy planner</div>
          <h1 className="font-serif text-4xl md:text-5xl tracking-tight leading-tight text-ink mb-3">
            Build your entrance exam roadmap
          </h1>
          <p className="text-base text-ink-2 leading-relaxed max-w-2xl">
            Select a career to get a month-by-month preparation plan, exam overview, and backup strategy tailored to India's top entrance exams.
          </p>
        </section>

        {/* ── Career Selector ── */}
        <section className="page-panel mb-6 fade-up fade-up-1">
          <label htmlFor="career-select" className="block text-xs font-bold uppercase tracking-widest text-ink-3 mb-2">
            Choose a career path
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <select
              id="career-select"
              value={selectedCareer}
              onChange={(e) => handleCareerChange(e.target.value)}
              className="flex-1 rounded-2xl border border-border bg-bg px-4 py-3 text-sm text-ink outline-none focus:border-accent focus:bg-white transition-colors"
            >
              <option value="">— Select a career —</option>
              {ALL_CAREERS.map((name) => (
                <option key={name} value={name}>{name}</option>
              ))}
            </select>
            {selectedCareer && (
              <button
                onClick={() => navigate(`/careers/${getCareerSlug(careerData.find((c) => c.career_name === selectedCareer))}`)}
                className="btn-secondary shrink-0 whitespace-nowrap"
              >
                View career details →
              </button>
            )}
          </div>
        </section>

        {/* ── Empty state ── */}
        {!selectedCareer && (
          <div className="page-empty fade-up fade-up-2">
            <p className="font-serif text-3xl text-ink mb-2">No career selected</p>
            <p className="text-sm text-ink-2">Pick a career above to generate your personalised exam roadmap.</p>
          </div>
        )}

        {/* ── No config ── */}
        {selectedCareer && !config && (
          <div className="page-empty fade-up fade-up-2">
            <p className="font-serif text-2xl text-ink mb-2">Strategy data not available yet</p>
            <p className="text-sm text-ink-2">We're building strategy content for this career. Check back soon.</p>
          </div>
        )}

        {/* ── Strategy content ── */}
        {selectedCareer && config && (
          <div className="space-y-5 fade-up fade-up-2">

            {/* ── Exam overview ── */}
            <section className="bg-ink text-white rounded-[28px] p-6 md:p-8 shadow-xl">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div>
                  <span className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Primary exam</span>
                  <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-1">{config.primary_exam}</h2>
                  {roadmap && <p className="text-white/60 text-sm">{roadmap.full_name}</p>}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 shrink-0">
                  <div className="bg-white/10 border border-white/10 rounded-2xl px-4 py-3">
                    <span className="block text-xs uppercase tracking-widest text-white/45 mb-1">Prep time</span>
                    <strong className="block text-xl font-semibold text-white">{config.total_months} months</strong>
                  </div>
                  {roadmap && (
                    <>
                      <div className="bg-white/10 border border-white/10 rounded-2xl px-4 py-3">
                        <span className="block text-xs uppercase tracking-widest text-white/45 mb-1">Difficulty</span>
                        <strong className="block text-xl font-semibold text-white">{roadmap.difficulty}</strong>
                      </div>
                      <div className="bg-white/10 border border-white/10 rounded-2xl px-4 py-3 col-span-2 sm:col-span-1">
                        <span className="block text-xs uppercase tracking-widest text-white/45 mb-1">Phases</span>
                        <strong className="block text-xl font-semibold text-white">{roadmap.monthly_roadmap.length}</strong>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {roadmap && (
                <div className="mt-5 pt-5 border-t border-white/10">
                  <span className="block text-xs uppercase tracking-widest text-white/45 mb-1">Exam pattern</span>
                  <p className="text-sm text-white/80">{roadmap.exam_pattern}</p>
                  <p className="text-xs text-white/45 mt-1">Conducted by {roadmap.conducted_by}</p>
                </div>
              )}

              {/* Backup + sequential exams */}
              {(config.backup_exams.length > 0 || config.sequential_exams.length > 0) && (
                <div className="mt-5 pt-5 border-t border-white/10">
                  <div className="flex flex-wrap gap-6">
                    {config.backup_exams.length > 0 && (
                      <div>
                        <span className="block text-xs uppercase tracking-widest text-white/45 mb-2">Backup exams</span>
                        <div className="flex flex-wrap gap-2">
                          {config.backup_exams.map((exam) => (
                            <span key={exam} className="text-xs font-bold bg-white/10 border border-white/20 text-white/80 px-3 py-1.5 rounded-full">
                              {exam}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {config.sequential_exams.length > 0 && (
                      <div>
                        <span className="block text-xs uppercase tracking-widest text-white/45 mb-2">Next-stage exams</span>
                        <div className="flex flex-wrap gap-2">
                          {config.sequential_exams.map((exam) => (
                            <span key={exam} className="text-xs font-bold bg-white/10 border border-white/20 text-white/80 px-3 py-1.5 rounded-full">
                              {exam}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </section>

            {roadmap && (
              <>
                {/* ── Visual timeline bar ── */}
                <section className="bg-white border border-border rounded-2xl p-5 shadow-sm">
                  <h2 className="text-base font-bold text-ink mb-3">Preparation timeline — {config.total_months} months</h2>
                  <PhaseBar roadmap={roadmap.monthly_roadmap} />
                  <PhaseLabels roadmap={roadmap.monthly_roadmap} />
                  <div className="mt-4 flex flex-wrap gap-2">
                    {roadmap.monthly_roadmap.map((phase) => {
                      const c = PHASE_COLORS[phase.color] || PHASE_COLORS.green
                      return (
                        <span key={phase.phase} className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${c.bg} ${c.border} ${c.text}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                          {phase.phase}
                        </span>
                      )
                    })}
                  </div>
                </section>

                {/* ── Month-wise roadmap ── */}
                <section className="bg-white border border-border rounded-2xl p-5 md:p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-ink mb-5">Month-by-month roadmap</h2>
                  <div className="space-y-3">
                    {roadmap.monthly_roadmap.map((phase, index) => (
                      <RoadmapCard key={index} phase={phase} index={index} />
                    ))}
                  </div>
                </section>

                {/* ── Strategy tips + Resources (side by side on desktop) ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  <section className="bg-white border border-border rounded-2xl p-5 md:p-6 shadow-sm">
                    <h2 className="text-xl font-bold text-ink mb-4">Strategy tips</h2>
                    <ul className="space-y-3">
                      {roadmap.strategy_tips.map((tip, i) => (
                        <li key={i} className="flex gap-3 text-sm text-ink-2 leading-relaxed">
                          <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-accent-light text-accent text-[10px] font-bold flex items-center justify-center">{i + 1}</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="bg-white border border-border rounded-2xl p-5 md:p-6 shadow-sm">
                    <h2 className="text-xl font-bold text-ink mb-4">Key resources</h2>
                    <ul className="space-y-2.5">
                      {roadmap.key_resources.map((res, i) => (
                        <li key={i} className="flex gap-3 text-sm text-ink-2 leading-relaxed">
                          <span className="mt-1 shrink-0 text-accent font-bold text-base leading-none">→</span>
                          {res}
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>

                {/* ── Backup exam details ── */}
                {config.backup_exams.length > 0 && (
                  <section className="bg-white border border-border rounded-2xl p-5 md:p-6 shadow-sm">
                    <h2 className="text-xl font-bold text-ink mb-1">Backup exam strategies</h2>
                    <p className="text-sm text-ink-3 mb-5">Apply to these exams in parallel — they share syllabus overlap with your primary exam.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {config.backup_exams.map((examName) => {
                        const backupRoadmap = examRoadmaps[examName]
                        return (
                          <div key={examName} className="rounded-2xl border border-border bg-bg p-4">
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <h3 className="text-sm font-bold text-ink leading-snug">{examName}</h3>
                              {backupRoadmap && (
                                <span className={`shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full border ${DIFF_COLORS[backupRoadmap.difficulty] || ''}`}>
                                  {backupRoadmap.difficulty}
                                </span>
                              )}
                            </div>
                            {backupRoadmap ? (
                              <>
                                <p className="text-xs text-ink-3 mb-3 leading-relaxed">{backupRoadmap.exam_pattern}</p>
                                <div className="flex items-center justify-between text-xs font-semibold text-ink-2">
                                  <span>{backupRoadmap.total_months} months prep</span>
                                  <span>{backupRoadmap.monthly_roadmap.length} phases</span>
                                </div>
                              </>
                            ) : (
                              <p className="text-xs text-ink-3">Strategy available via career selection.</p>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </section>
                )}

                {/* ── Sequential exam info ── */}
                {config.sequential_exams.length > 0 && (
                  <section className="bg-[#F5F3FF] border border-[#DDD6FE] rounded-2xl p-5 md:p-6">
                    <h2 className="text-lg font-bold text-[#3730A3] mb-2">Next-stage exams</h2>
                    <p className="text-sm text-[#4338CA] mb-4">
                      After clearing {config.primary_exam}, you will progress through these stages:
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {[config.primary_exam, ...config.sequential_exams].map((exam, i) => (
                        <React.Fragment key={exam}>
                          <div className="flex items-center gap-2 bg-white border border-[#C7D2FE] rounded-xl px-4 py-2">
                            <span className="w-5 h-5 rounded-full bg-[#3730A3] text-white text-xs font-bold flex items-center justify-center">{i + 1}</span>
                            <span className="text-sm font-semibold text-[#3730A3]">{exam}</span>
                          </div>
                          {i < config.sequential_exams.length && (
                            <span className="self-center text-[#6366F1] font-bold">→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </section>
                )}
              </>
            )}

            {/* ── No roadmap fallback ── */}
            {!roadmap && config && (
              <section className="bg-white border border-border rounded-2xl p-8 shadow-sm">
                <h2 className="text-xl font-bold text-ink mb-3">Exam: {config.primary_exam}</h2>
                <p className="text-sm text-ink-2 mb-5">
                  A detailed month-by-month roadmap for this exam is being prepared. Here's what you need to know:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-bg border border-border rounded-2xl p-4">
                    <span className="block text-xs uppercase tracking-widest text-ink-3 mb-1">Recommended prep time</span>
                    <strong className="text-2xl font-semibold text-ink">{config.total_months} months</strong>
                  </div>
                  {config.backup_exams.length > 0 && (
                    <div className="bg-bg border border-border rounded-2xl p-4">
                      <span className="block text-xs uppercase tracking-widest text-ink-3 mb-2">Backup exams</span>
                      <div className="flex flex-wrap gap-2">
                        {config.backup_exams.map((e) => (
                          <span key={e} className="text-xs font-bold bg-white border border-border text-ink-2 px-3 py-1 rounded-full">{e}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )}
          </div>
        )}
      </main>
    </div>
  )
}

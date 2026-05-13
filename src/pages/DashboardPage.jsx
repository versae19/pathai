import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { generateCareerPlan, getFallbackPlan } from '../utils/anthropic'

const NAV_ITEMS = [
  { id: 'plan', label: 'My Plan', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
      <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
    </svg>
  )},
  { id: 'skills', label: 'Skill Tracker', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  )},
  { id: 'tasks', label: 'Daily Tasks', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <polyline points="9 11 12 14 22 4"/>
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
    </svg>
  )},
  { id: 'resources', label: 'Resources', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
    </svg>
  )},
]

function SkillBar({ skill, animate }) {
  const target = Math.round(Math.min(100, 100 - (skill.targetWeeks / 26) * 70 + skill.currentLevel))
  return (
    <div className="bg-bg border border-border rounded-xl p-4">
      <div className="text-sm font-semibold mb-3">{skill.name}</div>
      <div className="bg-border rounded-full h-1.5 mb-2">
        <div
          className="h-1.5 rounded-full bg-accent transition-all duration-1000"
          style={{ width: animate ? `${target}%` : '0%' }}
        />
      </div>
      <div className="flex justify-between">
        <span className="text-xs text-ink-3">Current</span>
        <span className="text-xs text-ink-3">Target: {skill.targetWeeks} weeks</span>
      </div>
    </div>
  )
}

function TaskItem({ task, checked, onToggle }) {
  return (
    <li className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 ${checked ? 'border-border opacity-50' : 'border-border bg-white hover:border-border-2'}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        className="w-4 h-4 cursor-pointer flex-shrink-0"
        style={{ accentColor: '#4f46e5' }}
      />
      <span className={`text-sm flex-1 ${checked ? 'line-through text-ink-3' : ''}`}>{task.text}</span>
      <span className={`text-xs font-bold px-2 py-1 rounded-full flex-shrink-0 ${task.type === 'today' ? 'bg-accent-light text-accent' : 'bg-gold-light text-gold'}`}>
        {task.type === 'today' ? 'Today' : 'This week'}
      </span>
    </li>
  )
}

export default function DashboardPage({ formData, planData, setPlanData }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeTab, setActiveTab] = useState('plan')
  const [loading, setLoading] = useState(true)
  const [selectedCareer, setSelectedCareer] = useState(0)
  const [checkedTasks, setCheckedTasks] = useState({})
  const [skillsAnimated, setSkillsAnimated] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const fd = formData || location.state?.formData

  useEffect(() => {
    if (!fd) { navigate('/plan'); return }
    if (planData) { setLoading(false); return }

    async function load() {
      try {
        const plan = await generateCareerPlan(fd)
        setPlanData(plan)
      } catch (e) {
        setPlanData(getFallbackPlan(fd))
      }
      setLoading(false)
    }
    load()
  }, [])

  useEffect(() => {
    if (activeTab === 'skills' && !skillsAnimated) {
      setTimeout(() => setSkillsAnimated(true), 100)
    }
  }, [activeTab])

  const toggleTask = (i) => setCheckedTasks(c => ({ ...c, [i]: !c[i] }))

  const resTypeColor = { YouTube: '#CC0000', Website: '#185FA5', 'Free Course': '#4f46e5', Community: '#C97B2A', Tool: '#534AB7' }

  if (loading) {
    return (
      <div className="min-h-screen bg-bg flex">
        <div className="w-60 bg-white border-r border-border p-5 hidden md:flex flex-col">
          <div className="font-serif text-xl mb-6 pb-4 border-b border-border">LAKSHYA</div>
          {NAV_ITEMS.map(n => (
            <div key={n.id} className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-ink-3 mb-1">{n.icon}{n.label}</div>
          ))}
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <div className="loader-ring" />
          <p className="text-ink-2 text-base">Building your personalised career plan...</p>
          <p className="text-ink-3 text-sm">Analysing Indian job market data for your profile</p>
        </div>
      </div>
    )
  }

  if (!planData) return null
  const career = planData.careers[selectedCareer]

  return (
    <div className="min-h-screen bg-bg flex">

      {/* SIDEBAR desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white/88 border-r border-border p-5 sticky top-0 h-screen overflow-y-auto flex-shrink-0">
        <div className="font-serif text-xl mb-1 cursor-pointer" onClick={() => navigate('/')}>
          LAKSHYA
        </div>
        <p className="text-xs text-ink-3 mb-5 pb-4 border-b border-border">Career Planner</p>

        {NAV_ITEMS.map(n => (
          <button
            key={n.id}
            onClick={() => setActiveTab(n.id)}
            className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium mb-1 w-full text-left transition-all duration-200 border-0 cursor-pointer ${activeTab === n.id ? 'bg-bg-2 text-ink' : 'text-ink-2 bg-transparent hover:bg-bg'}`}
          >
            {n.icon}{n.label}
          </button>
        ))}

        <div className="mt-auto pt-4 border-t border-border">
          <button
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium text-ink-2 w-full text-left hover:bg-bg transition-all border-0 bg-transparent cursor-pointer"
            onClick={() => navigate('/')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
            </svg>
            Home
          </button>
        </div>
      </aside>

      {/* MOBILE tab bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/96 border-t border-border flex z-50 backdrop-blur">
        {NAV_ITEMS.map(n => (
          <button
            key={n.id}
            onClick={() => setActiveTab(n.id)}
            className={`flex-1 flex flex-col items-center gap-1 py-3 text-xs font-medium border-0 cursor-pointer transition-colors ${activeTab === n.id ? 'text-accent bg-accent-light' : 'text-ink-3 bg-white'}`}
          >
            {n.icon}
            <span className="text-[10px]">{n.label}</span>
          </button>
        ))}
      </div>

      {/* MAIN */}
      <main className="flex-1 p-5 md:p-8 overflow-y-auto pb-24 md:pb-8">

        {/* ===== MY PLAN ===== */}
        {activeTab === 'plan' && (
          <div className="fade-up">
            <div className="mb-8">
              <h2 className="font-serif text-3xl tracking-tight">Your Career Roadmap</h2>
              <p className="text-ink-2 text-sm mt-1">{planData.greeting}</p>
            </div>

            {/* Career cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {planData.careers.map((c, i) => (
                <div
                  key={c.title}
                  onClick={() => setSelectedCareer(i)}
                  className={`rounded-2xl p-6 border-2 cursor-pointer transition-all duration-200 ${selectedCareer === i ? 'border-accent bg-accent-light' : 'border-border bg-white hover:border-border-2'}`}
                >
                  <span className="inline-block bg-accent-light text-accent text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
                    {c.tag}
                  </span>
                  <h3 className="text-lg font-bold mb-1">{c.title}</h3>
                  <p className="text-xs text-ink-3 mb-4">Expected: <strong className="text-accent text-sm">{c.salaryRange}</strong> · {c.timeline}</p>
                  <p className="text-sm text-ink-2 leading-relaxed">{c.description}</p>
                  {c.whyGood && <p className="text-xs text-accent mt-3 font-medium">✓ {c.whyGood}</p>}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
              <div className="bg-white border border-border rounded-2xl p-6">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <h3 className="text-base font-bold">Why this career fits</h3>
                  {career.matchScore !== undefined && (
                    <span className="text-xs font-bold text-accent bg-accent-light px-3 py-1 rounded-full">
                      Score {career.matchScore}
                    </span>
                  )}
                </div>
                <ul className="space-y-2">
                  {(career.whyBest || [career.whyGood]).filter(Boolean).map((reason, index) => (
                    <li key={index} className="text-sm text-ink-2 leading-relaxed flex gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-border rounded-2xl p-6">
                <h3 className="text-base font-bold mb-4">Why other options ranked lower</h3>
                <div className="space-y-3">
                  {(career.whyLessSuitableThanBest?.length
                    ? [{ career_name: career.title, why_less_suitable: career.whyLessSuitableThanBest }]
                    : planData.decisionEngine?.less_suitable_options || []
                  ).slice(0, 3).map((option) => (
                    <div key={option.career_name} className="rounded-xl bg-bg border border-border p-4">
                      <h4 className="text-sm font-bold text-ink mb-2">{option.career_name}</h4>
                      <ul className="space-y-1">
                        {option.why_less_suitable.map((reason, index) => (
                          <li key={index} className="text-xs text-ink-2 leading-relaxed">- {reason}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Roadmap */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
              <div className="bg-white border border-border rounded-2xl p-6">
                <h3 className="text-base font-bold mb-4">Entrance exams to prepare</h3>
                <div className="space-y-3">
                  {(career.entranceExams || []).slice(0, 4).map((exam) => (
                    <div key={exam.exam_name} className="rounded-xl bg-bg border border-border p-4">
                      <div className="flex items-center justify-between gap-3 mb-1">
                        <h4 className="text-sm font-bold text-ink">{exam.exam_name}</h4>
                        <span className="text-[11px] font-bold uppercase tracking-wide text-accent bg-accent-light px-2 py-1 rounded-full">
                          {exam.difficulty_level}
                        </span>
                      </div>
                      <p className="text-xs text-ink-2 leading-relaxed">{exam.short_description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-border rounded-2xl p-6">
                <h3 className="text-base font-bold mb-4">Suggested colleges</h3>
                <div className="space-y-3">
                  {(career.suggestedColleges || []).slice(0, 5).map((college) => (
                    <div key={college.college_name} className="rounded-xl bg-bg border border-border p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="text-sm font-bold text-ink leading-snug">{college.college_name}</h4>
                          <p className="text-xs text-ink-3 mt-1">{college.location} · {college.type}</p>
                        </div>
                        <span className="text-[11px] font-bold text-gold bg-gold-light px-2 py-1 rounded-full whitespace-nowrap">
                          {college.admission_process}
                        </span>
                      </div>
                      <p className="text-xs text-ink-2 mt-2">Fees: {college.approximate_fees}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white border border-border rounded-2xl p-6">
              <h3 className="text-base font-bold mb-6 flex items-center gap-2">
                <span>📍</span> Step-by-Step Roadmap — {career.title}
              </h3>
              <div>
                {career.roadmap.map((r, i) => (
                  <div key={i} className="flex gap-4 mb-5">
                    <div className="flex flex-col items-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                      {i < career.roadmap.length - 1 && <div className="w-0.5 flex-1 bg-border mt-1" />}
                    </div>
                    <div className="pb-4">
                      <div className="text-xs font-bold text-accent uppercase tracking-widest mb-1">{r.week}</div>
                      <h4 className="text-sm font-semibold mb-1">{r.title}</h4>
                      <p className="text-sm text-ink-2 leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===== SKILLS ===== */}
        {activeTab === 'skills' && (
          <div className="fade-up">
            <div className="mb-8">
              <h2 className="font-serif text-3xl tracking-tight">Skill Tracker</h2>
              <p className="text-ink-2 text-sm mt-1">Track your progress across key skills for your chosen path</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {planData.skills.map((s, i) => (
                <SkillBar key={i} skill={s} animate={skillsAnimated} />
              ))}
            </div>

            <div className="bg-accent-light border border-accent-mid rounded-2xl p-6">
              <h3 className="text-sm font-bold text-accent mb-2">📌 How to use this tracker</h3>
              <p className="text-sm text-ink-2 leading-relaxed">
                Skills develop over time with consistent daily practice. Each skill has a target timeline.
                Focus on your first skill for 4–6 weeks before moving to the next one.
                Consistency beats intensity — even 2 hours per day compounded over months creates expertise.
              </p>
            </div>
          </div>
        )}

        {/* ===== TASKS ===== */}
        {activeTab === 'tasks' && (
          <div className="fade-up">
            <div className="mb-8">
              <h2 className="font-serif text-3xl tracking-tight">Daily Tasks</h2>
              <p className="text-ink-2 text-sm mt-1">
                {Object.values(checkedTasks).filter(Boolean).length} of {planData.tasks.length} tasks completed today
              </p>
            </div>

            {/* Progress */}
            <div className="bg-white border border-border rounded-2xl p-5 mb-6">
              <div className="flex justify-between text-xs text-ink-3 mb-2">
                <span>Today's progress</span>
                <span>{Math.round((Object.values(checkedTasks).filter(Boolean).length / planData.tasks.length) * 100)}%</span>
              </div>
              <div className="bg-border rounded-full h-2">
                <div
                  className="h-2 rounded-full bg-accent transition-all duration-500"
                  style={{ width: `${(Object.values(checkedTasks).filter(Boolean).length / planData.tasks.length) * 100}%` }}
                />
              </div>
            </div>

            <ul className="space-y-2">
              {planData.tasks.map((t, i) => (
                <TaskItem key={i} task={t} checked={!!checkedTasks[i]} onToggle={() => toggleTask(i)} />
              ))}
            </ul>

            <div className="mt-6 p-4 bg-gold-light border border-amber-200 rounded-xl">
              <p className="text-sm text-gold font-semibold mb-1">💡 Pro tip</p>
              <p className="text-sm text-ink-2">Complete your "Today" tasks every single day without fail. Consistency over 3 months will transform your skills more than any single long session.</p>
            </div>
          </div>
        )}

        {/* ===== RESOURCES ===== */}
        {activeTab === 'resources' && (
          <div className="fade-up">
            <div className="mb-8">
              <h2 className="font-serif text-3xl tracking-tight">Free Resources</h2>
              <p className="text-ink-2 text-sm mt-1">Curated free learning materials for your career path — no paid courses needed</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {planData.resources.map((r, i) => (
                <div key={i} className="bg-white border border-border rounded-xl p-5 hover:border-border-2 hover:-translate-y-0.5 transition-all duration-200">
                  <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: resTypeColor[r.type] || '#4f46e5' }}>
                    {r.type}
                  </div>
                  <h4 className="text-sm font-bold mb-1">{r.title}</h4>
                  <p className="text-sm text-ink-2 mb-3 leading-relaxed">{r.desc}</p>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-accent inline-flex items-center gap-1 no-underline hover:underline"
                  >
                    Visit resource →
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-ink rounded-2xl p-6 text-white">
              <h3 className="font-serif text-xl mb-2">🎯 How to use resources effectively</h3>
              <ul className="text-sm text-white/70 space-y-1.5 leading-relaxed list-none">
                <li>→ Don't just watch — build or write something after every tutorial</li>
                <li>→ Focus on one resource at a time. Jumping between courses wastes time</li>
                <li>→ Share what you learn on LinkedIn — it builds your personal brand</li>
                <li>→ Join the communities to ask questions and find your first clients</li>
              </ul>
            </div>
          </div>
        )}

      </main>
    </div>
  )
}

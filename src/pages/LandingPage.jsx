import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import CareerForm from '../components/CareerForm'
import { useTheme } from '../context/ThemeContext'
import careerData, { careerCategories } from '../data/careerData'
import collegeData from '../data/collegeData'
import { getCareerSlug } from '../utils/dataHelpers'

const categoryCounts = careerCategories.map((cat) => ({
  category: cat,
  count: careerData.filter((c) => c.category === cat).length,
}))

// ─── Category visual config ────────────────────────────────────────────────────
const CATEGORY_STYLE = {
  'Engineering': {
    darkBg:  'linear-gradient(145deg,#06111e 0%,#0b1e38 55%,#061625 100%)',
    lightBg: 'linear-gradient(145deg,#eff6ff 0%,#dbeafe 65%,#e0f2fe 100%)',
    accent: '#3b82f6', glow: 'rgba(59,130,246,0.28)',
    textDark: '#93c5fd', textLight: '#1d4ed8',
    sub: 'JEE · GATE · B.Tech',
    icon: (color) => (
      <svg viewBox="0 0 52 52" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" className="w-full h-full">
        <rect x="13" y="13" width="26" height="26" rx="3"/>
        <rect x="20" y="20" width="12" height="12" rx="1.5"/>
        <path d="M19 6v7M26 6v7M33 6v7"/><path d="M19 39v7M26 39v7M33 39v7"/>
        <path d="M6 19h7M6 26h7M6 33h7"/><path d="M39 19h7M39 26h7M39 33h7"/>
      </svg>
    ),
  },
  'Medical': {
    darkBg:  'linear-gradient(145deg,#041510 0%,#082b1c 55%,#041210 100%)',
    lightBg: 'linear-gradient(145deg,#ecfdf5 0%,#d1fae5 65%,#f0fdf4 100%)',
    accent: '#10b981', glow: 'rgba(16,185,129,0.28)',
    textDark: '#6ee7b7', textLight: '#059669',
    sub: 'NEET · AIIMS · INI CET',
    icon: (color) => (
      <svg viewBox="0 0 52 52" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" className="w-full h-full">
        <path d="M4 26L11 26L16 14L21 38L26 20L30 30L35 26L48 26"/>
        <circle cx="26" cy="26" r="22" strokeWidth="1" strokeDasharray="3 4" opacity="0.4"/>
      </svg>
    ),
  },
  'Commerce': {
    darkBg:  'linear-gradient(145deg,#1a0a00 0%,#2d1500 55%,#1a0e00 100%)',
    lightBg: 'linear-gradient(145deg,#fffbeb 0%,#fef3c7 65%,#fff7ed 100%)',
    accent: '#f59e0b', glow: 'rgba(245,158,11,0.28)',
    textDark: '#fcd34d', textLight: '#d97706',
    sub: 'CA · MBA · Banking',
    icon: (color) => (
      <svg viewBox="0 0 52 52" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" className="w-full h-full">
        <path d="M6 46h40"/><path d="M8 46V30h8V46M22 46V20h8V46M36 46V10h8V46"/>
        <path d="M12 28L24 18L36 10" strokeDasharray="2 2.5" opacity="0.5"/>
        <circle cx="12" cy="28" r="2.5" fill={color} stroke="none"/>
        <circle cx="24" cy="18" r="2.5" fill={color} stroke="none"/>
        <circle cx="36" cy="10" r="2.5" fill={color} stroke="none"/>
      </svg>
    ),
  },
  'Arts': {
    darkBg:  'linear-gradient(145deg,#120a1f 0%,#1e1035 55%,#10091c 100%)',
    lightBg: 'linear-gradient(145deg,#fdf4ff 0%,#f3e8ff 65%,#fae8ff 100%)',
    accent: '#a855f7', glow: 'rgba(168,85,247,0.28)',
    textDark: '#d8b4fe', textLight: '#7c3aed',
    sub: 'CLAT · NID · NIFT',
    icon: (color) => (
      <svg viewBox="0 0 52 52" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" className="w-full h-full">
        <path d="M34 6L46 18L20 44C16 48 6 48 6 38L34 6z"/>
        <path d="M26 14L38 26"/>
        <circle cx="42" cy="11" r="3.5"/>
        <path d="M6 38C8 32 14 30 18 34" strokeWidth="1.4"/>
      </svg>
    ),
  },
  'Government Jobs': {
    darkBg:  'linear-gradient(145deg,#070e1a 0%,#0d1c30 55%,#06101c 100%)',
    lightBg: 'linear-gradient(145deg,#f8fafc 0%,#e2e8f0 65%,#f1f5f9 100%)',
    accent: '#64748b', glow: 'rgba(100,116,139,0.28)',
    textDark: '#94a3b8', textLight: '#475569',
    sub: 'UPSC · SSC · NDA',
    icon: (color) => (
      <svg viewBox="0 0 52 52" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" className="w-full h-full">
        <path d="M6 46h40M6 34h40"/><path d="M5 18L26 7L47 18"/>
        <line x1="12" y1="18" x2="12" y2="34"/><line x1="20" y1="18" x2="20" y2="34"/>
        <line x1="32" y1="18" x2="32" y2="34"/><line x1="40" y1="18" x2="40" y2="34"/>
        <rect x="21" y="34" width="10" height="12" rx="1"/>
      </svg>
    ),
  },
  'Emerging Careers': {
    darkBg:  'linear-gradient(145deg,#06080f 0%,#0e1225 55%,#080a16 100%)',
    lightBg: 'linear-gradient(145deg,#f5f3ff 0%,#ede9fe 65%,#eef2ff 100%)',
    accent: '#6366f1', glow: 'rgba(99,102,241,0.28)',
    textDark: '#a5b4fc', textLight: '#4f46e5',
    sub: 'AI · Data · Product',
    icon: (color) => (
      <svg viewBox="0 0 52 52" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" className="w-full h-full">
        <circle cx="26" cy="26" r="5"/>
        <circle cx="9" cy="16" r="3.5"/><circle cx="43" cy="16" r="3.5"/>
        <circle cx="9" cy="36" r="3.5"/><circle cx="43" cy="36" r="3.5"/>
        <circle cx="26" cy="5"  r="3"/><circle cx="26" cy="47" r="3"/>
        <line x1="22" y1="23" x2="12" y2="19"/><line x1="30" y1="23" x2="40" y2="19"/>
        <line x1="22" y1="29" x2="12" y2="33"/><line x1="30" y1="29" x2="40" y2="33"/>
        <line x1="26" y1="21" x2="26" y2="8"/><line x1="26" y1="31" x2="26" y2="44"/>
      </svg>
    ),
  },
}

const examNames = [...new Set(careerData.flatMap((c) => c.entrance_exams.map((e) => e.exam_name)))]

function CountUp({ target }) {
  const [count, setCount] = useState(0)
  const ref = useRef()
  const done = useRef(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !done.current) {
        done.current = true
        let cur = 0; const step = target / 60
        const t = setInterval(() => { cur += step; if (cur >= target) { setCount(target); clearInterval(t) } else setCount(Math.floor(cur)) }, 20)
      }
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])
  return <span ref={ref}>{count}</span>
}

export default function LandingPage() {
  const navigate = useNavigate()
  const { isDark } = useTheme()
  const [activeCategory, setActiveCategory] = useState('')
  const careerGridRef = useRef()

  const handleCategoryClick = (cat) => {
    const next = activeCategory === cat ? '' : cat
    setActiveCategory(next)
    if (next && careerGridRef.current) {
      setTimeout(() => careerGridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
    }
  }

  return (
    <div style={{ background: 'var(--c-bg)', minHeight: '100vh' }}>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="hero-grid" />
        <div className="hero-scan-line" />

        <div className="max-w-7xl mx-auto px-[5%] py-28 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center w-full relative z-10">
          <div>
            <div className="fade-up inline-flex items-center gap-3 px-5 py-2.5 rounded-full text-xs font-bold tracking-widest mb-10"
              style={{ background: 'var(--c-badge-bg)', border: '1px solid var(--c-badge-bdr)', color: 'var(--c-badge-text)' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--c-hl)' }} />
              India's Career Intelligence Platform
            </div>
            <h1 className="fade-up fade-up-1 font-serif tracking-tight leading-[1.06] mb-7"
              style={{ fontSize: 'clamp(3rem,6.5vw,6rem)', color: 'var(--c-text)' }}>
              Plan your career<br />
              <span className="hero-gradient-text">with intelligence.</span>
            </h1>
            <p className="fade-up fade-up-2 leading-[1.8] mb-12 max-w-lg"
              style={{ fontSize: 'clamp(1rem,1.4vw,1.2rem)', color: 'var(--c-text2)' }}>
              Lakshya maps Indian career paths to entrance exams, realistic salaries, and top colleges — so students make confident decisions before committing years of effort.
            </p>
            <div className="fade-up fade-up-3 grid grid-cols-3 gap-4 max-w-sm">
              {[[careerData.length,'Career paths'],[collegeData.length,'Colleges'],[examNames.length,'Exam routes']].map(([num,label]) => (
                <div key={label} className="stat-tile">
                  <div className="font-serif text-4xl leading-none mb-2" style={{ color: 'var(--c-stat-num)', fontVariantNumeric: 'tabular-nums' }}>
                    <CountUp target={num} />
                  </div>
                  <div className="text-xs font-semibold leading-snug" style={{ color: 'var(--c-text3)' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="fade-up fade-up-2">
            <div className="form-hero-card">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="text-xs font-bold tracking-widest uppercase" style={{ color: 'var(--c-accent)' }}>Free · 2 min</span>
                  <span className="w-1 h-1 rounded-full" style={{ background: 'var(--c-accent)' }} />
                  <span className="text-xs font-medium" style={{ color: 'var(--c-text3)' }}>No signup needed</span>
                </div>
                <h2 className="font-serif text-2xl leading-snug" style={{ color: '#1A1916' }}>Build your personalised roadmap</h2>
              </div>
              <CareerForm compact onComplete={(fd) => navigate('/dashboard', { state: { formData: fd } })} />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom,transparent,var(--c-bg))' }} />
      </section>

      {/* ── TICKER ───────────────────────────────────────────────────────────── */}
      <div className="overflow-hidden relative z-10 py-5"
        style={{ background: 'var(--c-ticker-bg)', borderTop: '1px solid var(--c-ticker-bdr)', borderBottom: '1px solid var(--c-ticker-bdr)' }}>
        <div className="marquee-track">
          {[...examNames, ...examNames].map((name, i) => (
            <span key={i} className="marquee-item">
              <span className="marquee-sep">◆</span>{name}
            </span>
          ))}
        </div>
      </div>

      {/* ── CAREER DATABASE ──────────────────────────────────────────────────── */}
      <section id="career-database" className="py-28 px-[5%] relative overflow-hidden" style={{ background: 'var(--c-bg2)' }}>
        {/* Section bg orb */}
        <div className="absolute pointer-events-none" style={{
          width: 700, height: 700, borderRadius: '50%',
          background: 'radial-gradient(circle,var(--c-orb1) 0%,transparent 60%)',
          filter: 'blur(120px)', top: -200, right: -150, opacity: 0.5,
        }} />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <div className="section-kicker-themed">Career database</div>
              <h2 className="font-serif tracking-tight leading-tight"
                style={{ fontSize: 'clamp(2.2rem,4vw,3.5rem)', color: 'var(--c-text)' }}>
                49 career paths.<br className="hidden sm:block" />
                <span className="hero-gradient-text">All mapped for India.</span>
              </h2>
            </div>
            <p className="text-sm leading-[1.8] max-w-xs lg:text-right" style={{ color: 'var(--c-text2)' }}>
              Select a field to see every career, its entrance exams, salaries, and college links.
            </p>
          </div>

          {/* ── Category cards grid ─────────────────────────────────────────── */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5">
            {categoryCounts.map((item, idx) => {
              const style = CATEGORY_STYLE[item.category]
              const active = item.category === activeCategory
              const iconColor = isDark ? style.textDark : style.textLight
              const cardBg = isDark ? style.darkBg : style.lightBg

              return (
                <button
                  key={item.category}
                  onClick={() => handleCategoryClick(item.category)}
                  className="cat-card group relative overflow-hidden text-left focus:outline-none"
                  style={{
                    background: cardBg,
                    boxShadow: active
                      ? `0 0 0 2px ${style.accent}, 0 20px 60px ${style.glow}`
                      : isDark ? '0 4px 24px rgba(0,0,0,0.4)' : '0 4px 24px rgba(0,0,0,0.08)',
                    transform: active ? 'translateY(-4px)' : '',
                    animationDelay: `${idx * 60}ms`,
                  }}
                >
                  {/* Animated glow border on active */}
                  {active && (
                    <div className="absolute inset-0 rounded-[22px] pointer-events-none"
                      style={{ boxShadow: `inset 0 0 20px ${style.glow}` }} />
                  )}

                  {/* Decorative grid inside card */}
                  <div className="absolute inset-0 pointer-events-none opacity-30"
                    style={{
                      backgroundImage: `linear-gradient(${isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)'} 1px,transparent 1px),linear-gradient(90deg,${isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)'} 1px,transparent 1px)`,
                      backgroundSize: '24px 24px',
                    }} />

                  {/* Shimmer sweep on hover */}
                  <div className="cat-card-shimmer" />

                  <div className="relative z-10 p-6 flex flex-col h-full">
                    {/* Top row */}
                    <div className="flex items-start justify-between mb-6">
                      <span className="text-xs font-bold px-3 py-1.5 rounded-full"
                        style={{
                          background: active ? style.accent : isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)',
                          color: active ? '#fff' : isDark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.45)',
                          letterSpacing: '0.04em',
                        }}>
                        {item.count} careers
                      </span>
                      {active
                        ? <span className="text-lg leading-none" style={{ color: style.accent }}>✓</span>
                        : <span className="text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            style={{ color: style.accent }}>
                            Explore →
                          </span>
                      }
                    </div>

                    {/* Icon */}
                    <div className="flex-1 flex items-center justify-center py-4">
                      <div className="cat-card-icon transition-all duration-400 group-hover:scale-110 group-hover:-translate-y-1"
                        style={{ color: iconColor, filter: active ? `drop-shadow(0 0 12px ${style.accent})` : 'none' }}>
                        {style.icon(iconColor)}
                      </div>
                    </div>

                    {/* Bottom */}
                    <div>
                      <p className="text-xs font-semibold mb-1.5 tracking-wide" style={{ color: isDark ? 'rgba(255,255,255,0.38)' : 'rgba(0,0,0,0.38)' }}>
                        {style.sub}
                      </p>
                      <h3 className="font-bold leading-tight tracking-tight" style={{ fontSize: 'clamp(1rem,1.5vw,1.15rem)', color: isDark ? '#fff' : '#061510' }}>
                        {item.category}
                      </h3>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Pointer arrow below active card */}
          {activeCategory && (
            <div className="flex justify-center mt-2 pointer-events-none">
              <div className="cat-arrow-down"
                style={{ borderTopColor: CATEGORY_STYLE[activeCategory]?.accent || 'var(--c-accent)' }} />
            </div>
          )}

          {/* ── Career catalogue ─────────────────────────────────────────────── */}
          {activeCategory && (() => {
            const style = CATEGORY_STYLE[activeCategory] || {}
            const careers = careerData.filter((c) => c.category === activeCategory)
            return (
              <div ref={careerGridRef} className="mt-6">
                {/* Section mini-header */}
                <div className="flex items-center gap-3 mb-6 pt-2">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: style.accent || 'var(--c-accent)' }} />
                  <span className="text-sm font-bold tracking-wide" style={{ color: style.accent || 'var(--c-accent)' }}>
                    {activeCategory}
                  </span>
                  <span className="text-xs font-semibold" style={{ color: 'var(--c-text3)' }}>
                    — {careers.length} career paths
                  </span>
                </div>

                <div key={activeCategory} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {careers.map((career, i) => (
                    <article
                      key={career.career_name}
                      onClick={() => navigate(`/careers/${getCareerSlug(career)}`)}
                      className="career-data-card group cursor-pointer"
                      style={{
                        animationDelay: `${i * 38}ms`,
                        animation: 'cardIn 0.4s ease both',
                        '--cat-accent': style.accent || '#4f46e5',
                        '--cat-glow': style.glow || 'rgba(27,107,74,0.2)',
                      }}
                    >
                      {/* Left accent bar */}
                      <div className="career-data-bar" style={{ background: style.accent || 'var(--c-accent)' }} />

                      <div className="career-data-inner">
                        {/* Header */}
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <h3 className="text-base font-bold leading-snug" style={{ color: 'var(--c-text)' }}>
                            {career.career_name}
                          </h3>
                          <span className="text-xs font-bold shrink-0 px-2.5 py-1 rounded-full"
                            style={{ background: isDark ? 'rgba(245,158,11,0.12)' : 'rgba(245,158,11,0.1)', color: isDark ? '#fcd34d' : '#d97706', border: `1px solid ${isDark ? 'rgba(245,158,11,0.22)' : 'rgba(245,158,11,0.18)'}` }}>
                            {career.average_salary_india}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-xs leading-[1.75] mb-4 line-clamp-2" style={{ color: 'var(--c-text2)' }}>
                          {career.description}
                        </p>

                        {/* Skill tags */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {career.required_skills.slice(0, 3).map((s) => (
                            <span key={s} className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                              style={{ background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)', color: 'var(--c-text2)', border: '1px solid var(--c-border)' }}>
                              {s}
                            </span>
                          ))}
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid var(--c-border)' }}>
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: style.accent, opacity: 0.7 }} />
                            <span className="text-xs font-semibold" style={{ color: 'var(--c-text3)' }}>
                              {career.entrance_exams[0]?.exam_name || '—'}
                            </span>
                          </div>
                          <span className="text-xs font-bold transition-all duration-200 group-hover:translate-x-0.5"
                            style={{ color: style.accent }}>
                            Details →
                          </span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <button className="btn-glow" onClick={() => navigate('/careers')}>
                    Open full career explorer →
                  </button>
                </div>
              </div>
            )
          })()}
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-28 px-[5%] relative overflow-hidden" style={{ background: 'var(--c-bg)' }}>
        <div className="how-orb" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="section-kicker-themed">How it works</div>
            <h2 className="font-serif tracking-tight" style={{ fontSize: 'clamp(2.2rem,4vw,3.5rem)', color: 'var(--c-text)' }}>
              Three steps to clarity.
            </h2>
            <p className="mt-4 max-w-md mx-auto" style={{ color: 'var(--c-text2)', lineHeight: '1.8' }}>
              From your profile to a full career roadmap in under 2 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <div className="hidden md:block absolute top-[52px] left-[22%] right-[22%] h-px"
              style={{ background: 'linear-gradient(90deg,transparent,var(--c-accent-bdr) 30%,var(--c-accent-bdr) 70%,transparent)' }} />
            {[
              { num:'01', title:'Profile', desc:'Tell us your class, stream, interests, and goals. No account needed — just 2 minutes.',
                icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
              { num:'02', title:'Match', desc:'Lakshya scores 49 career paths against your profile using real exam, salary, and college data.',
                icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
              { num:'03', title:'Plan', desc:'Get a week-by-week action plan with exam timelines, skill targets, and college shortlists.',
                icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="M8 14h.01M12 14h.01M16 14h.01"/></svg> },
            ].map(({ num, title, desc, icon }) => (
              <div key={num} className="how-step-card">
                <div className="flex items-start justify-between mb-6">
                  <div className="how-step-icon">{icon}</div>
                  <span className="font-serif leading-none select-none" style={{ fontSize:'3.5rem', color:'var(--c-step-num)' }}>{num}</span>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color:'var(--c-text)', letterSpacing:'-0.01em' }}>{title}</h3>
                <p className="text-sm leading-[1.8]" style={{ color:'var(--c-text2)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="relative py-28 px-[5%] overflow-hidden" style={{ background: 'var(--c-bg2)' }}>
        <div className="cta-orb" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="section-kicker-themed mb-8">Get started</div>
          <h2 className="font-serif tracking-tight leading-[1.06] mb-6"
            style={{ fontSize:'clamp(2.5rem,5vw,5rem)', color:'var(--c-text)' }}>
            Your roadmap is<br /><span className="hero-gradient-text">waiting.</span>
          </h2>
          <p className="text-lg leading-[1.8] mb-12 mx-auto max-w-md" style={{ color:'var(--c-text2)' }}>
            Join thousands of Indian students who've mapped their future with Lakshya. Free, fast, and built for India.
          </p>
          <div className="flex flex-wrap gap-5 justify-center">
            <button className="btn-glow text-base px-10 py-4" onClick={() => navigate('/plan')}>Build my roadmap →</button>
            <button onClick={() => navigate('/careers')}
              className="text-base px-10 py-4 rounded-2xl font-semibold transition-all duration-200 cursor-pointer"
              style={{ background:'var(--c-surface)', color:'var(--c-text)', border:'1px solid var(--c-border2)' }}>
              Browse careers
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────────── */}
      <footer style={{ background:'var(--c-footer-bg)', borderTop:'1px solid var(--c-footer-bdr)' }}>
        <div className="max-w-7xl mx-auto px-[5%] py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="font-serif text-3xl mb-4" style={{ color:'var(--c-footer-text)' }}>
                LAKSHYA
              </div>
              <p className="text-sm leading-[1.8] max-w-xs" style={{ color:'var(--c-footer-muted)' }}>
                Career intelligence for Indian students. Map your path from school to career in minutes.
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color:'var(--c-footer-muted)' }}>Explore</p>
              <div className="space-y-3">
                {[['Careers','/careers'],['Colleges','/colleges'],['Compare','/compare'],['Exam Planner','/exam-planner']].map(([label,path]) => (
                  <button key={label} onClick={() => navigate(path)}
                    className="block text-sm font-medium transition-colors duration-200 cursor-pointer border-0 bg-transparent p-0 footer-link"
                    style={{ color:'var(--c-footer-link)' }}>{label}</button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color:'var(--c-footer-muted)' }}>Plan</p>
              <div className="space-y-3">
                {[['Build my roadmap','/plan'],['My Dashboard','/dashboard']].map(([label,path]) => (
                  <button key={label} onClick={() => navigate(path)}
                    className="block text-sm font-medium transition-colors duration-200 cursor-pointer border-0 bg-transparent p-0 footer-link"
                    style={{ color:'var(--c-footer-link)' }}>{label}</button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8"
            style={{ borderTop:'1px solid var(--c-footer-bdr)' }}>
            <p className="text-xs" style={{ color:'var(--c-footer-muted)' }}>© 2025 Lakshya · Made for Indian students</p>
            <p className="text-xs" style={{ color:'var(--c-footer-muted)' }}>{careerData.length} paths · {collegeData.length} colleges · {examNames.length} exams</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

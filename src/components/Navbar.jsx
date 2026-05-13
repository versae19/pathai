import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { isDark, toggleTheme } = useTheme()

  const isHome = location.pathname === '/'
  const useDarkStyle = isHome && !scrolled && isDark
  const useLightHomeStyle = isHome && !scrolled && !isDark

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 300)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const getBg = () => {
    if (isDark) return useDarkStyle ? 'rgba(8,15,29,0.72)' : 'rgba(8,15,29,0.94)'
    if (useLightHomeStyle) return 'rgba(248,250,252,0.82)'
    return 'rgba(248,250,252,0.94)'
  }

  const getBorder = () => {
    if (isHome && !scrolled) return '1px solid transparent'
    return isDark
      ? '1px solid rgba(148,163,184,0.18)'
      : '1px solid rgba(15,23,42,0.08)'
  }

  const logoColor = useDarkStyle ? '#fff' : 'var(--c-text)'
  const linkColor = useDarkStyle ? 'rgba(255,255,255,0.7)' : 'var(--c-text2)'
  const toggleColor = useDarkStyle ? 'rgba(255,255,255,0.55)' : 'var(--c-text3)'

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] h-[72px] transition-all duration-500"
      style={{ background: getBg(), backdropFilter: 'blur(18px)', borderBottom: getBorder() }}
    >
      <div
        className="text-xl font-extrabold tracking-[0.18em] cursor-pointer select-none transition-colors duration-300"
        style={{ color: logoColor }}
        onClick={() => navigate('/')}
      >
        LAKSHYA
      </div>

      <div className="flex items-center gap-5">
        {[
          ['Careers', () => navigate('/careers')],
          ['Colleges', () => navigate('/colleges')],
          ['Compare', () => navigate('/compare')],
          ['Exam Planner', () => navigate('/exam-planner')],
          ['Method', () => scrollTo('how-it-works')],
        ].map(([label, action]) => (
          <button
            key={label}
            onClick={action}
            className="hidden md:block text-sm font-semibold transition-all duration-200 bg-transparent border-0 cursor-pointer hover:opacity-100"
            style={{ color: linkColor, opacity: 0.85 }}
          >
            {label}
          </button>
        ))}

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-200 border cursor-pointer"
          style={{
            color: toggleColor,
            background: useDarkStyle ? 'rgba(255,255,255,0.07)' : 'var(--c-surface)',
            borderColor: useDarkStyle ? 'rgba(255,255,255,0.1)' : 'var(--c-border)',
          }}
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
        </button>

        <button
          className="btn-primary text-sm px-5 py-2.5"
          style={useDarkStyle ? { background: '#dd6b2f', boxShadow: '0 0 24px rgba(221,107,47,0.24)' } : {}}
          onClick={() => navigate('/plan')}
        >
          Start free
        </button>
      </div>
    </nav>
  )
}

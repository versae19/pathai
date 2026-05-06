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
    if (useDarkStyle) return 'rgba(4,4,18,0.6)'
    if (useLightHomeStyle) return 'rgba(246,245,255,0.65)'
    if (scrolled && isDark) return 'rgba(6,6,24,0.97)'
    if (scrolled) return 'rgba(250,250,255,0.97)'
    return 'rgba(250,250,255,0.75)'
  }

  const getBorder = () => {
    if (!scrolled) return '1px solid transparent'
    return useDarkStyle || isDark
      ? '1px solid rgba(255,255,255,0.07)'
      : '1px solid rgba(0,0,0,0.07)'
  }

  const logoColor = useDarkStyle ? '#fff' : 'var(--c-text)'
  const linkColor = useDarkStyle ? 'rgba(255,255,255,0.7)' : 'var(--c-text2)'
  const toggleColor = useDarkStyle ? 'rgba(255,255,255,0.55)' : 'var(--c-text3)'

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] h-[68px] transition-all duration-500"
      style={{ background: getBg(), backdropFilter: 'blur(20px)', borderBottom: getBorder() }}
    >
      <div
        className="font-serif text-2xl tracking-tight cursor-pointer select-none transition-colors duration-300"
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
            className="hidden md:block text-sm font-medium transition-all duration-200 bg-transparent border-0 cursor-pointer hover:opacity-100"
            style={{ color: linkColor, opacity: 0.85 }}
          >
            {label}
          </button>
        ))}

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 border cursor-pointer"
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
          style={useDarkStyle ? { background: '#4f46e5', boxShadow: '0 0 24px rgba(99,102,241,0.45)' } : {}}
          onClick={() => navigate('/plan')}
        >
          Start Free →
        </button>
      </div>
    </nav>
  )
}

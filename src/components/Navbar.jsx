import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
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

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] h-[60px] transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(250,250,248,0.94)' : 'rgba(250,250,248,0.7)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid #E2E0D8' : '1px solid transparent'
      }}
    >
      <div
        className="font-serif text-2xl tracking-tight cursor-pointer select-none"
        onClick={() => navigate('/')}
      >
        Path<span className="text-accent">AI</span>
      </div>

      <div className="flex items-center gap-6">
        <button
          onClick={() => navigate('/careers')}
          className="hidden md:block text-sm text-ink-2 font-medium hover:text-ink transition-colors bg-transparent border-0 cursor-pointer"
        >
          Careers
        </button>
        <button
          onClick={() => navigate('/colleges')}
          className="hidden md:block text-sm text-ink-2 font-medium hover:text-ink transition-colors bg-transparent border-0 cursor-pointer"
        >
          Colleges
        </button>
        <button
          onClick={() => scrollTo('how-it-works')}
          className="hidden md:block text-sm text-ink-2 font-medium hover:text-ink transition-colors bg-transparent border-0 cursor-pointer"
        >
          Method
        </button>
        <button
          className="btn-primary text-sm px-4 py-2"
          onClick={() => navigate('/plan')}
        >
          Start Free →
        </button>
      </div>
    </nav>
  )
}

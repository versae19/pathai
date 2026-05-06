import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import CareerForm from '../components/CareerForm'
import careerData, { careerCategories } from '../data/careerData'
import collegeData from '../data/collegeData'
import { getCareerSlug } from '../utils/dataHelpers'

const categoryCounts = careerCategories.map((category) => ({
  category,
  count: careerData.filter((career) => career.category === category).length
}))

const CATEGORY_META = {
  'Engineering': {
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80',
    fallback: '#1e3a5f',
    sub: 'JEE · GATE · B.Tech',
  },
  'Medical': {
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=80',
    fallback: '#134e2c',
    sub: 'NEET · AIIMS · PG',
  },
  'Commerce': {
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    fallback: '#7c2d12',
    sub: 'CA · MBA · Banking',
  },
  'Arts': {
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80',
    fallback: '#4a1942',
    sub: 'Law · Design · Media',
  },
  'Government Jobs': {
    image: 'https://images.unsplash.com/photo-1568385247005-0a4ca6754afd?auto=format&fit=crop&w=800&q=80',
    fallback: '#1e293b',
    sub: 'UPSC · SSC · Defence',
  },
  'Emerging Careers': {
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
    fallback: '#1e1b4b',
    sub: 'AI · Data · Product',
  },
}

const spotlightCareers = [
  'AI/ML Engineer',
  'Doctor',
  'Chartered Accountant',
  'Lawyer',
  'Data Scientist',
  'Product Manager'
].map((name) => careerData.find((career) => career.career_name === name)).filter(Boolean)


const examNames = new Set(careerData.flatMap((career) => career.entrance_exams.map((exam) => exam.exam_name)))

export default function LandingPage() {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('')

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />

      <section className="hero-surface relative pt-28 pb-16 px-[5%] overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-start w-full">
          <div className="lg:pt-4">
            <div className="fade-up inline-flex items-center gap-2 bg-white border border-border text-ink-2 text-xs font-bold px-4 py-2 rounded-full mb-7 tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent" />
              India-focused career, exam, and college intelligence
            </div>

            <h1 className="fade-up fade-up-1 font-serif text-5xl md:text-6xl tracking-tight leading-[1.02] mb-6 text-ink">
              Plan a career with the colleges, exams, and skills behind it.
            </h1>

            <p className="fade-up fade-up-2 text-lg text-ink-2 mb-9 leading-relaxed">
              PathAI maps Indian career paths to entrance exams, realistic entry salaries, and relevant colleges, so students can compare options before committing years of effort.
            </p>

            <div className="fade-up fade-up-3 grid grid-cols-3 gap-3 max-w-sm">
              {[
                [careerData.length, 'Career paths'],
                [collegeData.length, 'Colleges'],
                [examNames.size, 'Exam routes']
              ].map(([num, label]) => (
                <div key={label} className="metric-tile">
                  <div className="font-serif text-3xl leading-none text-ink">{num}</div>
                  <div className="text-xs font-semibold text-ink-3 mt-2">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-up fade-up-2">
            <div className="bg-white border border-border rounded-3xl shadow-lg p-6 md:p-8">
              <div className="mb-5">
                <p className="text-xs font-bold text-accent tracking-wide uppercase mb-1">Free career planner</p>
                <h2 className="font-serif text-xl text-ink leading-snug">Build your personalised roadmap</h2>
              </div>
              <CareerForm
                compact
                onComplete={(fd) => navigate('/dashboard', { state: { formData: fd } })}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="career-database" className="py-20 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="section-kicker">Career database</div>
          <div className="section-heading-row">
            <h2 className="h2">Compare career paths across India</h2>
            <p>Filter-ready records with skills, salary ranges, growth scope, entrance exams, and college links.</p>
          </div>

          {/* Photo category cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
            {categoryCounts.map((item) => {
              const meta = CATEGORY_META[item.category] || { image: '', fallback: '#1e293b', sub: '' }
              const active = item.category === activeCategory
              return (
                <button
                  key={item.category}
                  onClick={() => setActiveCategory((c) => c === item.category ? '' : item.category)}
                  className="category-photo-btn relative overflow-hidden rounded-2xl h-44 md:h-52 text-left group transition-all duration-300 focus:outline-none"
                  style={{
                    backgroundColor: meta.fallback,
                    boxShadow: active ? '0 0 0 3px #1B6B4A, 0 8px 32px rgba(27,107,74,0.25)' : '0 2px 12px rgba(0,0,0,0.10)',
                    transform: active ? 'scale(1.02)' : '',
                  }}
                >
                  {/* Background image */}
                  <img
                    src={meta.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    style={{ opacity: active ? 0.55 : 0.45 }}
                  />

                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(160deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.82) 100%)',
                    }}
                  />

                  {/* Active tint */}
                  {active && (
                    <div className="absolute inset-0" style={{ background: 'rgba(27,107,74,0.22)' }} />
                  )}

                  {/* Content */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-between">
                    {/* Top row */}
                    <div className="flex justify-between items-start">
                      <span
                        className="text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm transition-all duration-200"
                        style={{
                          background: active ? 'rgba(27,107,74,0.85)' : 'rgba(255,255,255,0.18)',
                          color: '#fff',
                        }}
                      >
                        {item.count} careers
                      </span>
                      {active && (
                        <span className="text-white text-base" style={{ lineHeight: 1 }}>✓</span>
                      )}
                    </div>

                    {/* Bottom text */}
                    <div>
                      <p className="text-xs mb-1.5 font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>
                        {meta.sub}
                      </p>
                      <h3 className="text-white text-lg font-bold leading-tight tracking-tight">
                        {item.category}
                      </h3>
                      <p
                        className="category-explore-label text-xs mt-1.5 font-semibold transition-all duration-200"
                        style={{
                          color: active ? '#6ee7b7' : 'rgba(255,255,255,0.5)',
                          opacity: active ? 1 : 0,
                          transform: active ? 'translateY(0)' : 'translateY(4px)',
                        }}
                      >
                        {active ? 'Showing results ↓' : 'Tap to explore →'}
                      </p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Animated career catalogue — only visible when a category is selected */}
          {activeCategory && (
            <>
              <div key={activeCategory} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-8">
                {careerData
                  .filter((c) => c.category === activeCategory)
                  .map((career, i) => (
                    <article
                      key={career.career_name}
                      className="directory-card cursor-pointer"
                      style={{ animationDelay: `${i * 45}ms`, animation: 'cardIn 0.35s ease both' }}
                      onClick={() => navigate(`/careers/${getCareerSlug(career)}`)}
                    >
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span className="category-badge">{career.category}</span>
                        <span className="salary-badge">{career.average_salary_india}</span>
                      </div>
                      <h3>{career.career_name}</h3>
                      <p>{career.description}</p>
                      <div className="tag-row">
                        {career.required_skills.slice(0, 3).map((skill) => <span key={skill}>{skill}</span>)}
                      </div>
                      <div className="exam-stack">
                        {career.entrance_exams.slice(0, 2).map((exam) => (
                          <div key={exam.exam_name}>
                            <strong>{exam.exam_name}</strong>
                            <span>{exam.exam_level} · {exam.difficulty_level}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 flex items-center gap-1 text-xs font-bold text-accent">
                        View full details <span aria-hidden="true">→</span>
                      </div>
                    </article>
                  ))}
              </div>

              <div className="mt-8 text-center">
                <button className="btn-primary" onClick={() => navigate('/careers')}>
                  Open full career explorer
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </>
          )}
        </div>
      </section>


      <section id="how-it-works" className="py-20 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="section-kicker">How PathAI helps</div>
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10">
            <div>
              <h2 className="h2">From confusion to a practical roadmap</h2>
              <p className="text-ink-2 leading-relaxed">
                The planner combines student preferences with structured career, exam, and college data. The result is a roadmap that is easier to compare, explain, and act on.
              </p>
            </div>
            <div className="process-grid">
              {[
                ['01', 'Profile', 'Capture education, interests, skills, time, and income goals.'],
                ['02', 'Match', 'Compare career paths using exams, salaries, skills, and growth scope.'],
                ['03', 'Plan', 'Generate a weekly roadmap with tasks, resources, and skill milestones.']
              ].map(([num, title, desc]) => (
                <div key={num} className="process-card">
                  <span>{num}</span>
                  <strong>{title}</strong>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="px-[5%] py-16 bg-bg">
        <div className="cta-panel">
          <div>
            <h2>Build your India-ready career roadmap</h2>
            <p>Get matched with career options, exam routes, skills, and learning milestones in minutes.</p>
          </div>
          <button onClick={() => navigate('/plan')}>Start planning</button>
        </div>
      </div>

      <footer className="bg-ink py-10 px-[5%]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="font-serif text-2xl text-white">Path<span className="text-accent">AI</span></div>
          <p className="text-white/45 text-sm">AI Career Planner for Indian students · Career, college, and exam data</p>
        </div>
      </footer>
    </div>
  )
}

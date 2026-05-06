import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import CareerForm from '../components/CareerForm'
import careerData, { careerCategories } from '../data/careerData'
import collegeData from '../data/collegeData'

const categoryCounts = careerCategories.map((category) => ({
  category,
  count: careerData.filter((career) => career.category === category).length
}))

const spotlightCareers = [
  'AI/ML Engineer',
  'Doctor',
  'Chartered Accountant',
  'Lawyer',
  'Data Scientist',
  'Product Manager'
].map((name) => careerData.find((career) => career.career_name === name)).filter(Boolean)

const featuredColleges = [
  'Indian Institute of Technology Bombay',
  'AIIMS Delhi',
  'Indian Institute of Management Ahmedabad',
  'National Law School of India University',
  'National Institute of Design Ahmedabad',
  'Indian Statistical Institute'
].map((name) => collegeData.find((college) => college.college_name === name)).filter(Boolean)

const examNames = new Set(careerData.flatMap((career) => career.entrance_exams.map((exam) => exam.exam_name)))

export default function LandingPage() {
  const navigate = useNavigate()

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

          <div className="category-strip">
            {categoryCounts.map((item) => (
              <div key={item.category} className="category-stat">
                <span>{item.category}</span>
                <strong>{item.count}</strong>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-8">
            {spotlightCareers.map((career) => (
              <article key={career.career_name} className="directory-card">
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
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button className="btn-primary" onClick={() => navigate('/careers')}>
              Open full career explorer
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      <section id="college-network" className="py-20 px-[5%] bg-bg-2">
        <div className="max-w-7xl mx-auto">
          <div className="section-kicker">College network</div>
          <div className="section-heading-row">
            <h2 className="h2">Top colleges linked to careers</h2>
            <p>Each college record includes location, admission route, fees, accepted exams, type, and career paths.</p>
          </div>

          <div className="college-grid">
            {featuredColleges.map((college) => (
              <article key={college.college_name} className="college-card">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3>{college.college_name}</h3>
                    <p>{college.location.city}, {college.location.state}</p>
                  </div>
                  <span className={`type-pill ${college.type}`}>{college.type}</span>
                </div>
                <div className="college-meta">
                  <span>{college.admission_process}</span>
                  <span>{college.approximate_fees}</span>
                </div>
                <div className="tag-row mt-4">
                  {college.courses_offered.slice(0, 4).map((course) => <span key={course}>{course}</span>)}
                </div>
                <div className="exam-line">
                  {college.entrance_exams_accepted.slice(0, 3).join(' · ')}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button className="btn-secondary bg-white" onClick={() => navigate('/colleges')}>
              Open college explorer
            </button>
          </div>
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

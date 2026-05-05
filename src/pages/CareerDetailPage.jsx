import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { findCareerBySlug, getCollegesForCareer, getCareerSlug } from '../utils/dataHelpers'

function ExamAccordion({ exam, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="exam-accordion">
      <button onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        <div>
          <strong>{exam.exam_name}</strong>
          <span>{exam.exam_level} · {exam.difficulty_level}</span>
        </div>
        <span className="accordion-icon">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="exam-body fade-up">
          <p>{exam.short_description}</p>
          <dl>
            <div>
              <dt>Eligibility</dt>
              <dd>{exam.eligibility}</dd>
            </div>
            <div>
              <dt>Conducted by</dt>
              <dd>{exam.conducted_by}</dd>
            </div>
          </dl>
        </div>
      )}
    </div>
  )
}

export default function CareerDetailPage() {
  const { careerSlug } = useParams()
  const navigate = useNavigate()
  const career = findCareerBySlug(careerSlug)

  if (!career) {
    return (
      <div className="min-h-screen bg-bg">
        <Navbar />
        <main className="explorer-shell">
          <div className="empty-state">
            <h1>Career not found</h1>
            <p>The career path you opened is not available in the database.</p>
            <button onClick={() => navigate('/careers')}>Back to careers</button>
          </div>
        </main>
      </div>
    )
  }

  const colleges = getCollegesForCareer(career.career_name)

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />

      <main className="detail-shell">
        <button className="back-link" onClick={() => navigate('/careers')}>← Back to careers</button>

        <section className="detail-hero fade-up">
          <div>
            <span className="category-badge">{career.category}</span>
            <h1>{career.career_name}</h1>
            <p>{career.description}</p>
          </div>
          <div className="detail-stat-panel">
            <div>
              <span>Entry salary</span>
              <strong>{career.average_salary_india}</strong>
            </div>
            <div>
              <span>Entrance exams</span>
              <strong>{career.entrance_exams.length}</strong>
            </div>
            <div>
              <span>Linked colleges</span>
              <strong>{colleges.length}</strong>
            </div>
          </div>
        </section>

        <section className="detail-grid">
          <div className="detail-main">
            <article className="detail-section fade-up fade-up-1">
              <h2>Skills required</h2>
              <div className="skill-cloud">
                {career.required_skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </article>

            <article className="detail-section fade-up fade-up-2">
              <h2>Growth scope</h2>
              <p>{career.growth_scope}</p>
            </article>

            <article className="detail-section fade-up fade-up-3">
              <h2>Entrance exams</h2>
              <div className="space-y-3">
                {career.entrance_exams.map((exam, index) => (
                  <ExamAccordion key={exam.exam_name} exam={exam} defaultOpen={index === 0} />
                ))}
              </div>
            </article>
          </div>

          <aside className="detail-side fade-up fade-up-2">
            <div className="side-card mb-4">
              <h2>Exam strategy planner</h2>
              <p>Get a month-by-month preparation roadmap, backup exams, and key resources for {career.career_name}.</p>
              <button
                className="detail-link w-full justify-center mt-4"
                onClick={() => navigate(`/exam-planner?career=${getCareerSlug(career)}`)}
              >
                Plan exam strategy
                <span aria-hidden="true">→</span>
              </button>
            </div>
            <div className="side-card">
              <h2>Top linked colleges</h2>
              <p>Filtered from colleges that offer courses aligned with {career.career_name}.</p>
              <div className="linked-college-list">
                {colleges.slice(0, 8).map((college) => (
                  <button
                    key={college.college_name}
                    onClick={() => navigate(`/colleges?course=${encodeURIComponent(career.career_name)}&q=${encodeURIComponent(college.college_name)}`)}
                  >
                    <strong>{college.college_name}</strong>
                    <span>{college.location.city}, {college.location.state} · {college.type}</span>
                  </button>
                ))}
              </div>
              {colleges.length === 0 && <p className="text-sm text-ink-3">No linked colleges yet.</p>}
              <button className="detail-link w-full justify-center mt-5" onClick={() => navigate(`/colleges?course=${encodeURIComponent(career.career_name)}`)}>
                Explore all colleges
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </aside>
        </section>
      </main>
    </div>
  )
}


import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { findCareerBySlug, getCollegesForCareer, getCareerSlug } from '../utils/dataHelpers'
import { getEngineeringRich } from '../data/engineeringRichData'

const PG_EXAMS = new Set([
  'GATE', 'NEET PG', 'NEET MDS', 'INI CET', 'GPAT',
  'CAT', 'XAT', 'GMAT', 'IIT JAM', 'ISI Admission Test', 'CEED', 'TISSNET',
  'CA Intermediate', 'CA Final', 'CS Executive', 'CS Professional', 'CFA', 'FRM',
  'B.Ed Entrance Exams', 'CTET', 'TET',
  'UPSC CSE', 'UPSC ESE', 'RBI Assistant', 'IBPS PO', 'IBPS Clerk',
  'SBI PO', 'SBI Clerk', 'RRB ALP', 'RRB JE', 'RRB NTPC', 'SSC CGL',
  'AFCAT', 'CDS', 'INET',
])

function splitExams(exams) {
  const ug = exams.filter((e) => !PG_EXAMS.has(e.exam_name))
  const pg = exams.filter((e) => PG_EXAMS.has(e.exam_name))
  return { ug, pg }
}

const CATEGORY_SUBJECTS = {
  'Medical & Health': ['Biology', 'Chemistry', 'Physics', 'Mathematics'],
  'Law & Legal': ['Political Science', 'History', 'English', 'Logical Reasoning'],
  'Design & Architecture': ['Fine Arts', 'Mathematics', 'Physics', 'Drawing'],
  'Commerce & Finance': ['Mathematics', 'Economics', 'Accountancy', 'Business Studies'],
  'Arts & Humanities': ['History', 'English', 'Political Science', 'Sociology'],
  'Science & Research': ['Physics', 'Chemistry', 'Biology', 'Mathematics'],
  'Media & Communication': ['English', 'General Knowledge', 'Logical Reasoning', 'Current Affairs'],
  'Sports & Fitness': ['Physical Education', 'Biology', 'Psychology', 'Mathematics'],
  'Hospitality & Tourism': ['English', 'General Knowledge', 'Geography', 'Economics'],
  'Education & Teaching': ['English', 'Mathematics', 'Psychology', 'General Knowledge'],
  'Agriculture & Environment': ['Biology', 'Chemistry', 'Geography', 'Physics'],
  'Government & Civil Services': ['General Studies', 'History', 'Geography', 'Mathematics'],
}

function getCoreSubjects(career) {
  return CATEGORY_SUBJECTS[career.category] || ['Mathematics', 'English', 'General Knowledge', 'Logical Reasoning']
}

function ExamAccordion({ exam, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="exam-accordion">
      <button onClick={() => setOpen((v) => !v)} aria-expanded={open}>
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
            <div><dt>Eligibility</dt><dd>{exam.eligibility}</dd></div>
            <div><dt>Conducted by</dt><dd>{exam.conducted_by}</dd></div>
          </dl>
        </div>
      )}
    </div>
  )
}

// ─── Engineering 360° detail ─────────────────────────────────────────────────
function EngineeringDetail({ career, rich, colleges, navigate }) {
  return (
    <main className="detail-shell">
      <button className="back-link" onClick={() => navigate('/careers')}>← Back to careers</button>

      {/* ── Hero banner ── */}
      <section
        className="eng-hero fade-up"
        style={{ background: rich.gradient }}
      >
        <div className="eng-hero-content">
          <span className="eng-emoji">{rich.emoji}</span>
          <div>
            <span className="eng-category-badge">Engineering &amp; Technology</span>
            <h1 className="eng-title">{career.career_name}</h1>
            <p className="eng-tagline">{rich.tagline}</p>
          </div>
        </div>
        <div className="eng-hero-stats">
          <div className="eng-stat">
            <span>Entry salary</span>
            <strong>{career.average_salary_india}</strong>
          </div>
          <div className="eng-stat">
            <span>Entrance exams</span>
            <strong>{career.entrance_exams.length}</strong>
          </div>
          <div className="eng-stat">
            <span>Work mode</span>
            <strong>{rich.work_type}</strong>
          </div>
        </div>
      </section>

      <section className="detail-grid" style={{ marginTop: '2rem' }}>
        <div className="detail-main">

          {/* ── About ── */}
          <article className="detail-section fade-up fade-up-1">
            <h2>About the career</h2>
            <p style={{ lineHeight: '1.75', color: 'var(--ink-2, #374151)' }}>{rich.about}</p>
          </article>

          {/* ── What you'll learn ── */}
          <article className="detail-section fade-up fade-up-2">
            <h2>What you'll learn</h2>
            <div className="learn-grid">
              {rich.what_you_learn.map((item) => (
                <div key={item.title} className="learn-card">
                  <span className="learn-icon">{item.icon}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* ── Skills required ── */}
          <article className="detail-section fade-up fade-up-2">
            <h2>Skills you'll attain</h2>
            <div className="skill-cloud">
              {career.required_skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </article>

          {/* ── Day in the life ── */}
          <article className="detail-section fade-up fade-up-3">
            <h2>A day in the life</h2>
            <ol className="day-list">
              {rich.day_in_life.map((item, i) => (
                <li key={i}>
                  <span className="day-num">{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </article>

          {/* ── Top companies ── */}
          <article className="detail-section fade-up fade-up-3">
            <h2>Top companies hiring</h2>
            <div className="company-cloud">
              {rich.top_companies.map((c) => (
                <span key={c} className="company-chip">{c}</span>
              ))}
            </div>
          </article>

          {/* ── Salary ladder ── */}
          <article className="detail-section fade-up fade-up-4">
            <h2>Salary ladder</h2>
            <div className="salary-table">
              {rich.salary_ladder.map((rung, i) => (
                <div key={rung.role} className="salary-row">
                  <div className="salary-rung-num">{i + 1}</div>
                  <div className="salary-info">
                    <strong>{rung.role}</strong>
                    <span className="salary-years">{rung.years}</span>
                  </div>
                  <div className="salary-amount">{rung.salary}</div>
                </div>
              ))}
            </div>
          </article>

          {/* ── Growth scope ── */}
          <article className="detail-section fade-up fade-up-4">
            <h2>Growth scope</h2>
            <p style={{ lineHeight: '1.75', color: 'var(--ink-2, #374151)' }}>{career.growth_scope}</p>
          </article>

          {/* ── Work environment ── */}
          <article className="detail-section fade-up fade-up-4">
            <h2>Work environment</h2>
            <div className="work-env-card">
              <span className="work-env-badge">{rich.work_type}</span>
              <p>{rich.work_desc}</p>
            </div>
          </article>

          {/* ── Entrance exams ── */}
          <article className="detail-section fade-up fade-up-5">
            <h2>Entrance exams</h2>
            <div className="space-y-3">
              {splitExams(career.entrance_exams).ug.map((exam, i) => (
                <ExamAccordion key={exam.exam_name} exam={exam} defaultOpen={i === 0} />
              ))}
            </div>
          </article>
        </div>

        {/* ── Sidebar ── */}
        <aside className="detail-side fade-up fade-up-2">
          <div className="side-card mb-4">
            <h2>Core skills required</h2>
            <div className="core-subject-list">
              {rich.core_subjects.map((s) => <span key={s}>{s}</span>)}
            </div>
            <p className="core-subject-nudge">Don't have these skills yet? Don't worry — ace it with our exam strategy plan.</p>
            <button
              className="detail-link w-full justify-center mt-4"
              onClick={() => navigate(`/exam-planner?career=${getCareerSlug(career)}`)}
            >
              Plan exam strategy
              <span aria-hidden="true">→</span>
            </button>
          </div>

          <div className="side-card">
            <h2>Check out colleges</h2>
            <p>Check out government sites to find out about colleges offering {career.career_name}.</p>
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
            <a
              href="https://www.aicte.gov.in/education/institutions"
              target="_blank"
              rel="noopener noreferrer"
              className="detail-link w-full justify-center mt-5 no-underline"
            >
              Explore all colleges
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </aside>
      </section>
    </main>
  )
}

// ─── Standard detail (non-engineering) ───────────────────────────────────────
function StandardDetail({ career, colleges, navigate }) {
  return (
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
              {splitExams(career.entrance_exams).ug.map((exam, i) => (
                <ExamAccordion key={exam.exam_name} exam={exam} defaultOpen={i === 0} />
              ))}
            </div>
          </article>
        </div>

        <aside className="detail-side fade-up fade-up-2">
          <div className="side-card mb-4">
            <h2>Core skills required</h2>
            <div className="core-subject-list">
              {getCoreSubjects(career).map((s) => <span key={s}>{s}</span>)}
            </div>
            <p className="core-subject-nudge">Don't have these skills yet? Don't worry — ace it with our exam strategy plan.</p>
            <button
              className="detail-link w-full justify-center mt-4"
              onClick={() => navigate(`/exam-planner?career=${getCareerSlug(career)}`)}
            >
              Plan exam strategy
              <span aria-hidden="true">→</span>
            </button>
          </div>
          <div className="side-card">
            <h2>Check out colleges</h2>
            <p>Check out government sites to find out about colleges offering {career.career_name}.</p>
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
  )
}

// ─── Page root ────────────────────────────────────────────────────────────────
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
  const isEngineering = career.category === 'Engineering'
  const rich = isEngineering ? getEngineeringRich(career.career_name) : null

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      {isEngineering
        ? <EngineeringDetail career={career} rich={rich} colleges={colleges} navigate={navigate} />
        : <StandardDetail career={career} colleges={colleges} navigate={navigate} />
      }
    </div>
  )
}

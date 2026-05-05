import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import careerData, { careerCategories } from '../data/careerData'
import { getCareerSlug, getCollegesForCareer } from '../utils/dataHelpers'
import {
  ALL_FILTER,
  INTEREST_OPTIONS,
  SALARY_GOALS,
  TIME_OPTIONS,
  recommendCareers
} from '../utils/recommendations'

export default function CareerExplorerPage() {
  const navigate = useNavigate()
  const [category, setCategory] = useState(ALL_FILTER)
  const [query, setQuery] = useState('')
  const [interests, setInterests] = useState([])
  const [salaryGoal, setSalaryGoal] = useState('')
  const [timeAvailability, setTimeAvailability] = useState('')

  const smartFiltersActive = interests.length > 0 || salaryGoal || timeAvailability

  const toggleInterest = (interest) => {
    setInterests((current) =>
      current.includes(interest)
        ? current.filter((item) => item !== interest)
        : [...current, interest]
    )
  }

  const careers = useMemo(() => {
    return recommendCareers({
      careers: careerData,
      query,
      category,
      interests,
      salaryGoal,
      timeAvailability
    })
  }, [category, query, interests, salaryGoal, timeAvailability])

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />

      <main className="explorer-shell">
        <section className="explorer-hero fade-up">
          <div>
            <div className="section-kicker">Career explorer</div>
            <h1>Browse {careerData.length} Indian career paths</h1>
            <p>Compare categories, skills, salary ranges, exams, and linked colleges before choosing a roadmap.</p>
          </div>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => navigate('/compare')}
              className="btn-secondary self-start"
            >
              Compare careers
            </button>
          </div>
          <div className="explorer-search">
            <label htmlFor="career-search">Search careers</label>
            <input
              id="career-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by career, skill, or category"
            />
          </div>
        </section>

        <section className="filter-bar fade-up fade-up-1" aria-label="Career category filters">
          {[ALL_FILTER, ...careerCategories].map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={category === item ? 'active' : ''}
            >
              {item}
            </button>
          ))}
        </section>

        <section className="smart-filter-panel fade-up fade-up-2">
          <div className="smart-filter-header">
            <div>
              <h2>Smart recommendations</h2>
              <p>Rank careers by your interests, salary target, and available learning time.</p>
            </div>
            {smartFiltersActive && (
              <button
                onClick={() => {
                  setInterests([])
                  setSalaryGoal('')
                  setTimeAvailability('')
                }}
              >
                Reset
              </button>
            )}
          </div>

          <div className="smart-filter-grid">
            <div className="smart-filter-group md:col-span-2">
              <label>Interests</label>
              <div className="smart-chip-row">
                {INTEREST_OPTIONS.map((interest) => (
                  <button
                    key={interest}
                    onClick={() => toggleInterest(interest)}
                    className={interests.includes(interest) ? 'active' : ''}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>

            <div className="smart-filter-group">
              <label htmlFor="salary-goal">Salary goal</label>
              <select id="salary-goal" value={salaryGoal} onChange={(event) => setSalaryGoal(event.target.value)}>
                <option value="">Any salary goal</option>
                {SALARY_GOALS.map((goal) => <option key={goal} value={goal}>{goal}</option>)}
              </select>
            </div>

            <div className="smart-filter-group">
              <label htmlFor="time-availability">Time availability</label>
              <select id="time-availability" value={timeAvailability} onChange={(event) => setTimeAvailability(event.target.value)}>
                <option value="">Any time availability</option>
                {TIME_OPTIONS.map((time) => <option key={time} value={time}>{time}</option>)}
              </select>
            </div>
          </div>
        </section>

        <section className="result-summary fade-up fade-up-2">
          <span>{careers.length} careers found</span>
          <span>{smartFiltersActive ? 'Sorted by match score' : category === ALL_FILTER ? 'All categories' : category}</span>
        </section>

        <section className="explorer-grid">
          {careers.map((career, index) => {
            const linkedColleges = getCollegesForCareer(career.career_name)
            return (
              <article
                key={career.career_name}
                className="directory-card fade-up"
                style={{ animationDelay: `${Math.min(index, 10) * 35}ms` }}
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
                <div className="card-footer-line">
                  <span>{career.entrance_exams.length} exams</span>
                  <span>{linkedColleges.length} colleges</span>
                </div>
                {smartFiltersActive && (
                  <div className="match-strip">
                    <strong>{career.recommendation_score} match score</strong>
                    <span>{career.match_reasons?.[0] || 'Relevant career path'}</span>
                  </div>
                )}
                <button
                  className="detail-link"
                  onClick={() => navigate(`/careers/${getCareerSlug(career)}`)}
                >
                  View details
                  <span aria-hidden="true">→</span>
                </button>
              </article>
            )
          })}
        </section>
      </main>
    </div>
  )
}

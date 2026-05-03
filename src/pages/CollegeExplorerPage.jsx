import React, { useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import collegeData from '../data/collegeData'
import { getCareerNames, slugify } from '../utils/dataHelpers'

const ALL = 'All'

export default function CollegeExplorerPage() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [location, setLocation] = useState(searchParams.get('location') || ALL)
  const [course, setCourse] = useState(searchParams.get('course') || ALL)

  const locations = useMemo(() => {
    const states = collegeData.map((college) => college.location.state)
    return [ALL, ...Array.from(new Set(states)).sort()]
  }, [])

  const courses = useMemo(() => [ALL, ...getCareerNames().sort()], [])

  const updateCourse = (value) => {
    setCourse(value)
    const next = new URLSearchParams(searchParams)
    if (value === ALL) next.delete('course')
    else next.set('course', value)
    setSearchParams(next, { replace: true })
  }

  const colleges = useMemo(() => {
    const q = query.trim().toLowerCase()
    return collegeData.filter((college) => {
      const matchesQuery = !q || [
        college.college_name,
        college.location.city,
        college.location.state,
        college.entrance_exams_accepted.join(' '),
        college.courses_offered.join(' ')
      ].join(' ').toLowerCase().includes(q)
      const matchesLocation = location === ALL || college.location.state === location
      const matchesCourse = course === ALL || college.courses_offered.includes(course)
      return matchesQuery && matchesLocation && matchesCourse
    })
  }, [query, location, course])

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />

      <main className="explorer-shell">
        <section className="explorer-hero fade-up">
          <div>
            <div className="section-kicker">College explorer</div>
            <h1>Search {collegeData.length} Indian colleges</h1>
            <p>Filter colleges by state, career path, admission route, accepted entrance exams, and fees.</p>
          </div>
          <div className="explorer-search">
            <label htmlFor="college-search">Search colleges</label>
            <input
              id="college-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search IIT, AIIMS, Delhi, CLAT..."
            />
          </div>
        </section>

        <section className="college-filter-panel fade-up fade-up-1">
          <div>
            <label htmlFor="location-filter">Location</label>
            <select id="location-filter" value={location} onChange={(event) => setLocation(event.target.value)}>
              {locations.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="course-filter">Course / career</label>
            <select id="course-filter" value={course} onChange={(event) => updateCourse(event.target.value)}>
              {courses.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </div>
        </section>

        <section className="result-summary fade-up fade-up-2">
          <span>{colleges.length} colleges found</span>
          <span>{course === ALL ? 'All courses' : course}</span>
        </section>

        <section className="college-grid">
          {colleges.map((college, index) => (
            <article
              key={college.college_name}
              className="college-card fade-up"
              style={{ animationDelay: `${Math.min(index, 10) * 35}ms` }}
            >
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
                {college.courses_offered.slice(0, 5).map((item) => (
                  <button
                    key={item}
                    className="course-chip"
                    onClick={() => navigate(`/careers/${slugify(item)}`)}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div className="exam-line">
                {college.entrance_exams_accepted.slice(0, 4).join(' · ')}
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}


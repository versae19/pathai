import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import FormPage from './pages/FormPage'
import DashboardPage from './pages/DashboardPage'
import CareerExplorerPage from './pages/CareerExplorerPage'
import CareerDetailPage from './pages/CareerDetailPage'
import CareerComparisonPage from './pages/CareerComparisonPage'
import ExamPlannerPage from './pages/ExamPlannerPage'
import CollegeExplorerPage from './pages/CollegeExplorerPage'

export default function App() {
  const [planData, setPlanData] = useState(null)
  const [formData, setFormData] = useState(null)

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/careers" element={<CareerExplorerPage />} />
      <Route path="/careers/:careerSlug" element={<CareerDetailPage />} />
      <Route path="/compare" element={<CareerComparisonPage />} />
      <Route path="/exam-planner" element={<ExamPlannerPage />} />
      <Route path="/colleges" element={<CollegeExplorerPage />} />
      <Route
        path="/plan"
        element={<FormPage onComplete={(fd) => setFormData(fd)} />}
      />
      <Route
        path="/dashboard"
        element={<DashboardPage formData={formData} planData={planData} setPlanData={setPlanData} />}
      />
    </Routes>
  )
}

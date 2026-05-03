import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import FormPage from './pages/FormPage'
import DashboardPage from './pages/DashboardPage'

export default function App() {
  const [planData, setPlanData] = useState(null)
  const [formData, setFormData] = useState(null)

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
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

import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import CareerForm from '../components/CareerForm'

export default function FormPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const initialState = location.state?.formInitial || null

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <div className="max-w-3xl mx-auto px-5 pt-24 pb-20">
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl tracking-tight text-ink mb-2">
            Find your path
          </h1>
          <p className="text-sm text-ink-2">
            Explore career options based on your education, or get a step-by-step roadmap for your dream career.
          </p>
        </div>
        <CareerForm
          onCancel={() => navigate('/')}
          initialState={initialState}
        />
      </div>
    </div>
  )
}

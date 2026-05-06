import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import CareerForm from '../components/CareerForm'

export default function FormPage({ onComplete }) {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <div className="max-w-2xl mx-auto px-5 pt-24 pb-16">
        <CareerForm onComplete={onComplete} onCancel={() => navigate('/')} />
      </div>
    </div>
  )
}

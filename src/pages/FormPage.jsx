import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

const INTERESTS = ['Technology & coding', 'Design & creativity', 'Writing & content', 'Business & marketing', 'Finance & trading', 'Teaching & education', 'Healthcare', 'Video & media', 'Photography', 'Gaming & animation']
const EDU_OPTIONS = ['School (10th/12th)', 'College student', 'Recent graduate', 'Working professional', 'Dropout / Gap year']
const INCOME_OPTIONS = ['₹15,000–30,000/month', '₹30,000–60,000/month', '₹60,000–1,00,000/month', '₹1,00,000+ per month']
const TIME_OPTIONS = ['1–2 hours/day', '3–4 hours/day', '5–6 hours/day', 'Full time (8+ hours)']
const WORK_OPTIONS = ['Freelancing / independent work', 'Remote job at a company', 'Full-time office job', 'My own business/startup']

function Chip({ label, selected, onClick, multi }) {
  return (
    <button
      type="button"
      className={`chip ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default function FormPage({ onComplete }) {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    age: '', education: '', city: '',
    interests: [], skills: '',
    income: '', time: '', workStyle: '',
    context: ''
  })

  const showError = (msg) => setErrors({ msg })
  const clearErr = () => setErrors({})

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }))
  const toggleInterest = (v) => {
    setForm(f => ({
      ...f,
      interests: f.interests.includes(v) ? f.interests.filter(x => x !== v) : [...f.interests, v]
    }))
  }

  const validate = () => {
    if (step === 1) {
      if (!form.age || isNaN(form.age)) return 'Please enter a valid age.'
      if (!form.education) return 'Please select your education level.'
    }
    if (step === 2) {
      if (form.interests.length === 0) return 'Please select at least one interest.'
    }
    if (step === 3) {
      if (!form.income) return 'Please select your income goal.'
      if (!form.time) return 'Please select your daily time availability.'
      if (!form.workStyle) return 'Please select your preferred work style.'
    }
    return null
  }

  const next = () => {
    const err = validate()
    if (err) { showError(err); return }
    clearErr()
    setStep(s => s + 1)
  }

  const submit = () => {
    clearErr()
    const fd = {
      ...form,
      interests: form.interests.join(', ')
    }
    onComplete(fd)
    navigate('/dashboard', { state: { formData: fd } })
  }

  const dots = [1, 2, 3, 4]

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <div className="max-w-2xl mx-auto px-5 pt-24 pb-16">

        {/* Progress dots */}
        <div className="flex gap-2 mb-10">
          {dots.map(d => (
            <div key={d} className="h-1 flex-1 rounded-full transition-all duration-300"
              style={{ background: d <= step ? '#1B6B4A' : '#E2E0D8' }} />
          ))}
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="fade-up">
            <div className="section-label">Step 1 of 4</div>
            <h2 className="font-serif text-4xl tracking-tight mb-2">About you</h2>
            <p className="text-ink-2 text-sm mb-8">Tell us a bit about yourself so we can personalise your plan.</p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Your age</label>
                <input
                  type="number" min="14" max="40"
                  className="w-full px-4 py-3 rounded-xl border border-border text-base font-sans bg-white text-ink focus:border-accent outline-none transition-colors"
                  placeholder="e.g. 19"
                  value={form.age}
                  onChange={e => set('age', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-3">Education level</label>
                <div className="flex flex-wrap gap-2">
                  {EDU_OPTIONS.map(o => (
                    <Chip key={o} label={o} selected={form.education === o} onClick={() => set('education', o)} />
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">City / State</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-border text-base font-sans bg-white text-ink focus:border-accent outline-none transition-colors"
                  placeholder="e.g. Patna, Bihar"
                  value={form.city}
                  onChange={e => set('city', e.target.value)}
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="fade-up">
            <div className="section-label">Step 2 of 4</div>
            <h2 className="font-serif text-4xl tracking-tight mb-2">Your interests</h2>
            <p className="text-ink-2 text-sm mb-8">Select all areas you enjoy or are curious about.</p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-3">Areas of interest (pick all that apply)</label>
                <div className="flex flex-wrap gap-2">
                  {INTERESTS.map(o => (
                    <Chip key={o} label={o} selected={form.interests.includes(o)} onClick={() => toggleInterest(o)} multi />
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Skills you already have</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-border text-base font-sans bg-white text-ink focus:border-accent outline-none transition-colors"
                  placeholder="e.g. MS Excel, Canva, English writing, basic coding..."
                  value={form.skills}
                  onChange={e => set('skills', e.target.value)}
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="fade-up">
            <div className="section-label">Step 3 of 4</div>
            <h2 className="font-serif text-4xl tracking-tight mb-2">Goals & time</h2>
            <p className="text-ink-2 text-sm mb-8">Help us understand what you want to achieve.</p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-3">Monthly income goal (₹)</label>
                <div className="flex flex-wrap gap-2">
                  {INCOME_OPTIONS.map(o => (
                    <Chip key={o} label={o} selected={form.income === o} onClick={() => set('income', o)} />
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-3">Hours available per day for learning</label>
                <div className="flex flex-wrap gap-2">
                  {TIME_OPTIONS.map(o => (
                    <Chip key={o} label={o} selected={form.time === o} onClick={() => set('time', o)} />
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-3">Preferred work style</label>
                <div className="flex flex-wrap gap-2">
                  {WORK_OPTIONS.map(o => (
                    <Chip key={o} label={o} selected={form.workStyle === o} onClick={() => set('workStyle', o)} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div className="fade-up">
            <div className="section-label">Step 4 of 4</div>
            <h2 className="font-serif text-4xl tracking-tight mb-2">Anything else?</h2>
            <p className="text-ink-2 text-sm mb-8">Optional — share anything specific you want PathAI to know.</p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Additional context (optional)</label>
                <textarea
                  className="w-full px-4 py-3 rounded-xl border border-border text-base font-sans bg-white text-ink focus:border-accent outline-none transition-colors resize-none"
                  rows={4}
                  placeholder="e.g. I failed engineering, I have a laptop but no internet at home, I want to support my family..."
                  value={form.context}
                  onChange={e => set('context', e.target.value)}
                />
              </div>

              <div className="bg-accent-light border border-accent-mid rounded-xl p-5">
                <p className="text-sm font-semibold text-accent mb-1">🤖 Your AI career plan is ready to generate</p>
                <p className="text-sm text-ink-2">PathAI will analyse your profile and create a personalised roadmap with 2 career paths, a weekly plan, skills to learn, and free resources.</p>
              </div>
            </div>
          </div>
        )}

        {/* Error */}
        {errors.msg && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
            {errors.msg}
          </div>
        )}

        {/* Nav buttons */}
        <div className="flex justify-between items-center mt-8">
          <button
            className="btn-secondary"
            onClick={() => step === 1 ? navigate('/') : setStep(s => s - 1)}
          >
            ← Back
          </button>
          {step < 4
            ? <button className="btn-primary" onClick={next}>Continue →</button>
            : <button className="btn-primary" onClick={submit}>Generate My Plan ✦</button>
          }
        </div>
      </div>
    </div>
  )
}

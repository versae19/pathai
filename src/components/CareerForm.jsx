import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// ─── Static data ───────────────────────────────────────────────────────────────

const CLASS_OPTIONS = ['8', '9', '10', '11', '12', 'Graduate', 'Post-Graduate']
const BOARD_OPTIONS = ['CBSE', 'ICSE', 'State Board', 'IB', 'Other']

const STREAM_OPTIONS = [
  { value: 'Science-PCM',     label: 'Science – PCM',     sub: 'Physics, Chemistry, Mathematics' },
  { value: 'Science-PCB',     label: 'Science – PCB',     sub: 'Physics, Chemistry, Biology' },
  { value: 'Science-PCMB',    label: 'Science – PCMB',    sub: 'All sciences, maximum flexibility' },
  { value: 'Commerce',        label: 'Commerce',           sub: 'Accounts, Economics, Business Studies' },
  { value: 'Arts/Humanities', label: 'Arts / Humanities',  sub: 'History, Civics, Literature, Sociology' },
  { value: 'Vocational',      label: 'Vocational',         sub: 'Skill-based trades and applied courses' },
]

const DEGREE_OPTIONS = ['Engineering', 'Medical', 'Commerce', 'Arts', 'Law', 'Other']

const SUBJECT_OPTIONS = [
  'Mathematics', 'Science (PCM)', 'Science (PCB)', 'Computer Science',
  'English & Literature', 'Social Studies', 'Arts & Drawing',
  'Commerce Basics', 'Music & Performing Arts', 'Sports & Fitness',
]

const STREAM_CHIPS = {
  'Science-PCM':     ['Engineering', 'Architecture', 'Defence (NDA)', 'Data Science', 'Pure Sciences'],
  'Science-PCB':     ['Medical (MBBS)', 'Dentistry', 'Pharmacy', 'Biotech', 'Nursing', 'Veterinary'],
  'Science-PCMB':    ['Engineering', 'Medical (MBBS)', 'Architecture', 'Dentistry', 'Pharmacy', 'Biotech', 'Data Science', 'Nursing', 'Pure Sciences'],
  'Commerce':        ['CA / CMA', 'MBA', 'Banking & Finance', 'Economics', 'Law'],
  'Arts/Humanities': ['Law (CLAT)', 'Journalism', 'Design', 'Psychology', 'Teaching', 'Civil Services (UPSC)'],
  'Vocational':      ['Hospitality & Tourism', 'Fashion Design', 'Digital Marketing', 'IT & Coding', 'Agriculture', 'Healthcare Allied', 'Animation & VFX'],
}

const DEGREE_CHIPS = {
  'Engineering': ['Data Science', 'Product Management', 'Civil Services (UPSC)', 'MBA / Management', 'M.Tech Research', 'Cybersecurity'],
  'Medical':     ['Clinical Medicine (PG)', 'Public Health', 'Healthcare Management', 'Medical Education', 'Pharma Research'],
  'Commerce':    ['CA / CMA', 'Investment Banking', 'MBA', 'Economics Research', 'Banking & Finance', 'Corporate Law'],
  'Arts':        ['Law (CLAT)', 'Journalism', 'Psychology', 'Teaching', 'Civil Services (UPSC)', 'Social Work'],
  'Law':         ['Litigation', 'Corporate Law', 'Civil Services (UPSC)', 'Legal Research', 'Journalism'],
  'Other':       ['MBA', 'Civil Services (UPSC)', 'Teaching', 'Digital Marketing', 'Banking & Finance', 'Entrepreneurship'],
}

const SUBJECT_TO_CAREERS = {
  'Mathematics':              ['Engineering', 'Data Science', 'Banking & Finance', 'Economics', 'Architecture'],
  'Science (PCM)':            ['Engineering', 'Data Science', 'Architecture', 'Defence (NDA)', 'Pure Sciences'],
  'Science (PCB)':            ['Medical (MBBS)', 'Nursing', 'Pharmacy', 'Biotech', 'Veterinary'],
  'Computer Science':         ['Engineering', 'Data Science', 'Cybersecurity', 'Animation & VFX'],
  'English & Literature':     ['Journalism', 'Law', 'Teaching', 'Psychology'],
  'Social Studies':           ['Civil Services (UPSC)', 'Teaching', 'Journalism', 'Law'],
  'Arts & Drawing':           ['Design', 'Architecture', 'Animation & VFX', 'Fashion Design'],
  'Commerce Basics':          ['Banking & Finance', 'CA / CMA', 'MBA', 'Economics'],
  'Music & Performing Arts':  ['Journalism', 'Teaching', 'Animation & VFX'],
  'Sports & Fitness':         ['Healthcare Allied', 'Defence (NDA)', 'Teaching', 'Physiotherapy'],
}

const LOWER_GENERAL_CHIPS = [
  'Engineering', 'Medical (MBBS)', 'Data Science', 'Design',
  'Law', 'Teaching', 'MBA / Management', 'Banking & Finance',
  'Civil Services (UPSC)', 'Journalism', 'Healthcare Allied', 'Animation & VFX',
]

const GOAL_OPTIONS = [
  'Job Security', 'High Income', 'Creative Work',
  'Helping People', 'Government Job', 'Abroad Opportunities',
]

const CAREER_CHIP_TO_INTEREST = {
  'Engineering':            'Technology & coding',
  'Architecture':           'Design & creativity',
  'Defence (NDA)':          'Teaching & education',
  'Data Science':           'Technology & coding',
  'Pure Sciences':          'Technology & coding',
  'IT & Coding':            'Technology & coding',
  'Cybersecurity':          'Technology & coding',
  'M.Tech Research':        'Technology & coding',
  'Product Management':     'Business & marketing',
  'Medical (MBBS)':         'Healthcare',
  'Dentistry':              'Healthcare',
  'Pharmacy':               'Healthcare',
  'Biotech':                'Technology & coding',
  'Nursing':                'Healthcare',
  'Veterinary':             'Healthcare',
  'Healthcare Allied':      'Healthcare',
  'Physiotherapy':          'Healthcare',
  'Clinical Medicine (PG)': 'Healthcare',
  'Public Health':          'Healthcare',
  'Healthcare Management':  'Healthcare',
  'Medical Education':      'Healthcare',
  'Pharma Research':        'Healthcare',
  'CA / CMA':               'Finance & trading',
  'MBA':                    'Business & marketing',
  'MBA / Management':       'Business & marketing',
  'Banking & Finance':      'Finance & trading',
  'Economics':              'Finance & trading',
  'Economics Research':     'Finance & trading',
  'Investment Banking':     'Finance & trading',
  'Law':                    'Writing & content',
  'Law (CLAT)':             'Writing & content',
  'Corporate Law':          'Writing & content',
  'Legal Research':         'Writing & content',
  'Litigation':             'Writing & content',
  'Journalism':             'Writing & content',
  'Design':                 'Design & creativity',
  'Fashion Design':         'Design & creativity',
  'Animation & VFX':        'Gaming & animation',
  'Psychology':             'Teaching & education',
  'Teaching':               'Teaching & education',
  'Civil Services (UPSC)':  'Teaching & education',
  'Social Work':            'Teaching & education',
  'Hospitality & Tourism':  'Business & marketing',
  'Digital Marketing':      'Business & marketing',
  'Agriculture':            'Teaching & education',
  'Entrepreneurship':       'Business & marketing',
}

const STREAM_TO_INTERESTS = {
  'Science-PCM':     ['Technology & coding'],
  'Science-PCB':     ['Healthcare'],
  'Science-PCMB':    ['Technology & coding', 'Healthcare'],
  'Commerce':        ['Business & marketing', 'Finance & trading'],
  'Arts/Humanities': ['Writing & content', 'Teaching & education'],
  'Vocational':      ['Design & creativity', 'Business & marketing'],
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function deriveInterestsForEngine(form) {
  const out = new Set()
  ;(STREAM_TO_INTERESTS[form.stream] || []).forEach((i) => out.add(i))
  ;(form.careerInterests || []).forEach((c) => { if (CAREER_CHIP_TO_INTEREST[c]) out.add(CAREER_CHIP_TO_INTEREST[c]) })
  if ((form.goals || []).includes('Government Job'))   out.add('Teaching & education')
  if ((form.goals || []).includes('Creative Work'))    out.add('Design & creativity')
  if ((form.goals || []).includes('Helping People'))   out.add('Healthcare')
  if ((form.subjectInterests || []).some((s) => ['Mathematics', 'Science (PCM)', 'Computer Science'].includes(s))) out.add('Technology & coding')
  if ((form.subjectInterests || []).some((s) => s === 'Science (PCB)')) out.add('Healthcare')
  if ((form.subjectInterests || []).some((s) => s.includes('Commerce'))) out.add('Business & marketing')
  return [...out]
}

function deriveEducation(form) {
  if (['8', '9', '10'].includes(form.currentClass)) return 'School (10th/12th)'
  if (['11', '12'].includes(form.currentClass))     return 'School (10th/12th)'
  if (form.currentClass === 'Graduate')             return 'College student'
  if (form.currentClass === 'Post-Graduate')        return 'Recent graduate'
  return 'College student'
}

function deriveIncome(goals) {
  if (!goals?.length) return '₹30,000–60,000/month'
  if (goals.includes('High Income') || goals.includes('Abroad Opportunities')) return '₹1,00,000+ per month'
  return '₹30,000–60,000/month'
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function Chip({ label, selected, onClick }) {
  return (
    <button type="button" className={`chip ${selected ? 'selected' : ''}`} onClick={onClick}>
      {label}
    </button>
  )
}

function StreamCard({ option, selected, onClick, compact }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left rounded-2xl border px-4 transition-all duration-200 cursor-pointer ${
        compact ? 'py-3' : 'py-4'
      } ${selected ? 'border-accent bg-accent-light shadow-sm' : 'border-border bg-white hover:border-border-2'}`}
    >
      <span className={`block font-bold mb-0.5 ${compact ? 'text-xs' : 'text-sm'} ${selected ? 'text-accent' : 'text-ink'}`}>
        {option.label}
      </span>
      {option.sub && (
        <span className="block text-xs text-ink-3">{option.sub}</span>
      )}
    </button>
  )
}

function FilledByButton({ label, value, current, onClick, compact }) {
  const active = current === value
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-1 rounded-2xl border text-center transition-all duration-200 cursor-pointer ${
        compact ? 'px-3 py-3' : 'px-5 py-5'
      } ${active ? 'bg-ink text-white border-ink shadow-md' : 'bg-white text-ink border-border hover:border-border-2'}`}
    >
      <span className={`block mb-1 ${compact ? 'text-xl' : 'text-2xl'}`}>{value === 'student' ? '🎓' : '👨‍👩‍👧'}</span>
      <span className={`block font-bold ${compact ? 'text-xs' : 'text-sm'}`}>{label}</span>
    </button>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function CareerForm({ onComplete, onCancel, compact = false }) {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    filledBy: '',
    currentClass: '',
    board: '',
    stream: '',
    subjectInterests: [],
    degreeType: '',
    careerInterests: [],
    city: '',
    goals: [],
    context: '',
  })

  const set = (key, val) => { setForm((f) => ({ ...f, [key]: val })); setError('') }
  const toggle = (key, val) =>
    setForm((f) => ({
      ...f,
      [key]: f[key].includes(val) ? f[key].filter((x) => x !== val) : [...f[key], val],
    }))

  const isLower = ['8', '9', '10'].includes(form.currentClass)
  const isUpper = ['11', '12'].includes(form.currentClass)
  const isGrad  = ['Graduate', 'Post-Graduate'].includes(form.currentClass)

  const getCareerChips = () => {
    if (isUpper) return STREAM_CHIPS[form.stream] || []
    if (isGrad)  return DEGREE_CHIPS[form.degreeType] || LOWER_GENERAL_CHIPS
    if (isLower) {
      if (!form.subjectInterests.length) return LOWER_GENERAL_CHIPS
      const chips = [...new Set(form.subjectInterests.flatMap((s) => SUBJECT_TO_CAREERS[s] || []))]
      return chips.length >= 3 ? chips : LOWER_GENERAL_CHIPS
    }
    return []
  }

  const step2Label = isUpper ? 'Stream & Subjects' : isGrad ? 'Degree Type' : 'Subject Interests'
  const filledByLabel = form.filledBy === 'parent' ? "your child's" : 'your'

  const validate = () => {
    if (step === 1) {
      if (!form.filledBy)     return 'Please select who is filling this form.'
      if (!form.currentClass) return 'Please select the current class.'
      if (!form.board)        return 'Please select the school/college board.'
    }
    if (step === 2) {
      if (isUpper && !form.stream)                       return 'Please select a stream.'
      if (isGrad  && !form.degreeType)                   return 'Please select a degree type.'
      if (isLower && form.subjectInterests.length === 0) return 'Please select at least one subject interest.'
    }
    if (step === 3 && form.careerInterests.length === 0) return 'Please select at least one career interest.'
    if (step === 4 && form.goals.length === 0)           return 'Please select at least one goal.'
    return ''
  }

  const next = () => {
    const err = validate()
    if (err) { setError(err); return }
    setError('')
    setStep((s) => s + 1)
  }

  const back = () => { setError(''); setStep((s) => s - 1) }

  const submit = () => {
    const err = validate()
    if (err) { setError(err); return }

    const interests = deriveInterestsForEngine(form)
    const fd = {
      filledBy: form.filledBy, currentClass: form.currentClass, board: form.board,
      stream: form.stream, subjectInterests: form.subjectInterests, degreeType: form.degreeType,
      careerInterests: form.careerInterests, city: form.city, goals: form.goals, context: form.context,
      education: deriveEducation(form),
      interests: interests.join(', '),
      income: deriveIncome(form.goals),
      skills: '', time: '', workStyle: '', age: '',
    }

    onComplete?.(fd)
    navigate('/dashboard', { state: { formData: fd } })
  }

  const careerChips = getCareerChips()
  const sp = compact ? 'space-y-4' : 'space-y-7'
  const h2Cls = compact ? 'font-serif text-2xl tracking-tight mb-1' : 'font-serif text-4xl tracking-tight mb-2'
  const descCls = compact ? 'text-ink-2 text-xs mb-5' : 'text-ink-2 text-sm mb-8'
  const labelCls = compact ? 'block text-xs font-semibold mb-2' : 'block text-sm font-semibold mb-3'

  return (
    <div>
      {/* Progress bar */}
      <div className={`flex gap-1.5 ${compact ? 'mb-5' : 'mb-10'}`}>
        {[1, 2, 3, 4].map((d) => (
          <div
            key={d}
            className="h-1 flex-1 rounded-full transition-all duration-300"
            style={{ background: d <= step ? '#1B6B4A' : '#E2E0D8' }}
          />
        ))}
      </div>

      {/* ── STEP 1 ── */}
      {step === 1 && (
        <div className="fade-up">
          {!compact && <div className="section-label">Step 1 of 4</div>}
          <h2 className={h2Cls}>About you</h2>
          <p className={descCls}>Who is filling this and the current stage of education.</p>

          <div className={sp}>
            <div>
              <label className={labelCls}>Who is filling this form?</label>
              <div className="flex gap-3">
                <FilledByButton compact={compact} label="Student" value="student" current={form.filledBy} onClick={() => set('filledBy', 'student')} />
                <FilledByButton compact={compact} label="Parent / Guardian" value="parent" current={form.filledBy} onClick={() => set('filledBy', 'parent')} />
              </div>
            </div>

            <div>
              <label className={labelCls}>
                {form.filledBy === 'parent' ? "Child's current class" : 'Current class'}
              </label>
              <div className="flex flex-wrap gap-2">
                {CLASS_OPTIONS.map((cls) => (
                  <Chip key={cls} label={cls} selected={form.currentClass === cls} onClick={() => set('currentClass', cls)} />
                ))}
              </div>
            </div>

            {form.currentClass && (
              <div className="fade-up">
                <label className={labelCls}>
                  {isGrad ? 'University board / affiliation' : `${form.filledBy === 'parent' ? "Child's school" : 'School'} board`}
                </label>
                <div className="flex flex-wrap gap-2">
                  {BOARD_OPTIONS.map((b) => (
                    <Chip key={b} label={b} selected={form.board === b} onClick={() => set('board', b)} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── STEP 2 ── */}
      {step === 2 && (
        <div className="fade-up">
          {!compact && <div className="section-label">Step 2 of 4</div>}
          <h2 className={h2Cls}>{step2Label}</h2>
          <p className={descCls}>
            {isUpper && `Select ${filledByLabel} stream in Class ${form.currentClass}.`}
            {isLower && `Pick the subjects ${filledByLabel} most interested in.`}
            {isGrad  && `Select ${filledByLabel} degree type to show relevant career options.`}
          </p>

          {isUpper && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {STREAM_OPTIONS.map((opt) => (
                <StreamCard compact={compact} key={opt.value} option={opt} selected={form.stream === opt.value} onClick={() => set('stream', opt.value)} />
              ))}
            </div>
          )}

          {isLower && (
            <div className="flex flex-wrap gap-2">
              {SUBJECT_OPTIONS.map((s) => (
                <Chip key={s} label={s} selected={form.subjectInterests.includes(s)} onClick={() => toggle('subjectInterests', s)} />
              ))}
            </div>
          )}

          {isGrad && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {DEGREE_OPTIONS.map((deg) => (
                <StreamCard compact={compact} key={deg} option={{ value: deg, label: deg, sub: '' }} selected={form.degreeType === deg} onClick={() => set('degreeType', deg)} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── STEP 3 ── */}
      {step === 3 && (
        <div className="fade-up">
          {!compact && <div className="section-label">Step 3 of 4</div>}
          <h2 className={h2Cls}>Career interests</h2>
          <p className={descCls}>Select the career paths {filledByLabel} drawn towards. Pick all that feel right.</p>

          <div className={sp}>
            {careerChips.length > 0 ? (
              <div>
                <label className={labelCls}>Career areas (pick all that apply)</label>
                <div className="flex flex-wrap gap-2">
                  {careerChips.map((c) => (
                    <Chip key={c} label={c} selected={form.careerInterests.includes(c)} onClick={() => toggle('careerInterests', c)} />
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-sm text-ink-3 bg-bg border border-border rounded-xl p-4">
                Please go back and complete Step 2 to see career suggestions.
              </p>
            )}

            <div>
              <label className={labelCls}>
                City / State <span className="font-normal text-ink-3">(optional)</span>
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-border text-base font-sans bg-white text-ink focus:border-accent outline-none transition-colors"
                placeholder="e.g. Patna, Bihar"
                value={form.city}
                onChange={(e) => set('city', e.target.value)}
              />
            </div>
          </div>
        </div>
      )}

      {/* ── STEP 4 ── */}
      {step === 4 && (
        <div className="fade-up">
          {!compact && <div className="section-label">Step 4 of 4</div>}
          <h2 className={h2Cls}>Goals & priorities</h2>
          <p className={descCls}>What matters most? This helps PathAI tailor {filledByLabel} career plan.</p>

          <div className={sp}>
            <div>
              <label className={labelCls}>What matters most? (pick all that apply)</label>
              <div className="flex flex-wrap gap-2">
                {GOAL_OPTIONS.map((g) => (
                  <Chip key={g} label={g} selected={form.goals.includes(g)} onClick={() => toggle('goals', g)} />
                ))}
              </div>
            </div>

            <div>
              <label className={labelCls}>
                Anything else PathAI should know? <span className="font-normal text-ink-3">(optional)</span>
              </label>
              <textarea
                className="w-full px-4 py-3 rounded-xl border border-border text-base font-sans bg-white text-ink focus:border-accent outline-none transition-colors resize-none"
                rows={compact ? 3 : 4}
                placeholder="e.g. I want to stay in my state, family prefers government jobs…"
                value={form.context}
                onChange={(e) => set('context', e.target.value)}
              />
            </div>

            <div className="bg-accent-light border border-accent-mid rounded-xl p-4">
              <p className={`font-semibold text-accent mb-1 ${compact ? 'text-xs' : 'text-sm'}`}>
                Your AI career plan is ready to generate
              </p>
              <p className={`text-ink-2 ${compact ? 'text-xs' : 'text-sm'}`}>
                PathAI will analyse {filledByLabel} profile and create a personalised roadmap with matched career paths, a weekly action plan, and exam guidance.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Navigation */}
      <div className={`flex justify-between items-center ${compact ? 'mt-5' : 'mt-8'}`}>
        {step === 1 ? (
          onCancel
            ? <button className="btn-secondary" onClick={onCancel}>← Back</button>
            : <div />
        ) : (
          <button className="btn-secondary" onClick={back}>← Back</button>
        )}
        {step < 4
          ? <button className="btn-primary" onClick={next}>Continue →</button>
          : <button className="btn-primary" onClick={submit}>Generate My Plan ✦</button>
        }
      </div>
    </div>
  )
}

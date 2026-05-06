import { careerDecisionEngine } from './recommendations.js'

// Anthropic API utility - Lakshya
const API_KEY = import.meta.env?.VITE_ANTHROPIC_API_KEY

const uniqueBy = (items, getKey) => {
  const seen = new Set()
  return items.filter((item) => {
    const key = getKey(item)
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

const toPlanCareer = (career, index, aiCareer = {}) => ({
  title: career.career_name,
  career_name: career.career_name,
  category: career.category,
  tag: index === 0 ? 'Best Match' : index === 1 ? 'Strong Alternative' : 'Worth Exploring',
  description: aiCareer.description || career.description,
  salaryRange: career.average_salary_india,
  average_salary_india: career.average_salary_india,
  timeline: aiCareer.timeline || '6-12 months to build job-ready foundations',
  whyGood: aiCareer.whyGood || career.match_reasons[0] || career.growth_scope,
  matchScore: career.match_score,
  whyBest: career.why_best || [],
  whyLessSuitableThanBest: career.why_less_suitable_than_rank_1 || [],
  requiredSkills: career.required_skills,
  entranceExams: career.entrance_exams.map((exam) => ({
    exam_name: exam.exam_name,
    eligibility: exam.eligibility,
    exam_level: exam.exam_level,
    conducted_by: exam.conducted_by,
    difficulty_level: exam.difficulty_level,
    short_description: exam.short_description
  })),
  suggestedColleges: career.suggested_colleges,
  roadmap: aiCareer.roadmap?.length ? aiCareer.roadmap : buildFallbackRoadmap(career),
  databaseSource: true
})

const buildFallbackRoadmap = (career) => [
  {
    week: 'Week 1-2',
    title: 'Understand the path',
    desc: `Study what ${career.career_name} professionals do in India, review salary expectations, and shortlist the entrance exams or portfolio route needed.`
  },
  {
    week: 'Month 1',
    title: 'Build core skills',
    desc: `Focus on ${career.required_skills.slice(0, 2).join(' and ')}. Create a weekly study routine based on your available time.`
  },
  {
    week: 'Month 2-3',
    title: 'Practice with proof',
    desc: `Complete projects, mock tests, case work, or practical assignments that prove your ability in ${career.career_name}.`
  },
  {
    week: 'Month 4-6',
    title: 'Apply and improve',
    desc: 'Apply for internships, colleges, exams, or entry-level roles. Track feedback and improve your portfolio or exam preparation plan.'
  }
]

const buildPrompt = (formData, decision) => `You are an expert Indian career counsellor.

Use ONLY the provided rule-based Career Decision Engine results. Do not invent new career suggestions.
Generate roadmap content for these exact 3 careers and keep output as valid JSON only.

Student Profile:
- Age: ${formData.age}
- Education: ${formData.education}
- City: ${formData.city}
- Interests: ${formData.interests}
- Current Skills: ${formData.skills}
- Monthly Income Goal: ${formData.income}
- Daily Time Available: ${formData.time}
- Work Style Preference: ${formData.workStyle}
- Additional Context: ${formData.context || 'none'}

Career Decision Engine Result:
${JSON.stringify({
  engine: decision.engine,
  inputs_used: decision.inputs_used,
  top_careers: decision.topCareers.map((career) => ({
  career_name: career.career_name,
  category: career.category,
    rank: career.rank,
    match_score: career.match_score,
  description: career.description,
  required_skills: career.required_skills,
  average_salary_india: career.average_salary_india,
  growth_scope: career.growth_scope,
    why_best: career.why_best,
    why_less_suitable_than_rank_1: career.why_less_suitable_than_rank_1,
  entrance_exams: career.entrance_exams.map((exam) => ({
    exam_name: exam.exam_name,
    difficulty_level: exam.difficulty_level,
    short_description: exam.short_description
  })),
  suggested_colleges: career.suggested_colleges.slice(0, 4),
  match_reasons: career.match_reasons
  })),
  less_suitable_options: decision.lessSuitableOptions
}, null, 2)}

Return ONLY this JSON structure:
{
  "greeting": "One personalised sentence for the student",
  "careers": [
    {
      "title": "Must exactly match database career_name",
      "description": "2 concise sentences using the database career",
      "timeline": "realistic Indian timeline",
      "whyGood": "specific reason based on profile",
      "roadmap": [
        { "week": "Week 1-2", "title": "Phase title", "desc": "specific actionable tasks" },
        { "week": "Month 1", "title": "Phase title", "desc": "specific actionable tasks" },
        { "week": "Month 2-3", "title": "Phase title", "desc": "specific actionable tasks" },
        { "week": "Month 4-6", "title": "Phase title", "desc": "specific actionable tasks and exam/college/job milestone" }
      ]
    }
  ],
  "skills": [
    { "name": "Skill from the selected careers", "currentLevel": 0, "targetWeeks": 6 }
  ],
  "tasks": [
    { "text": "Specific task for today", "type": "today", "category": "Learning" }
  ],
  "resources": [
    { "type": "YouTube", "title": "Free resource name", "desc": "How it helps", "url": "https://example.com" }
  ]
}

Guidelines:
- Include exactly 3 careers in the same order as the database matches.
- Career suggestions must exactly match the rule-based top_careers list.
- Do not change rankings, scores, exams, or colleges.
- Optimize for Indian students, realistic timelines, entrance exams, colleges, internships, and low-cost resources.
- Keep resources free or audit-friendly.
- Do not include markdown, comments, or extra text.`

const normalizeAiPlan = (aiPlan, decision, formData) => {
  const matchedCareers = decision.topCareers
  const aiCareers = Array.isArray(aiPlan?.careers) ? aiPlan.careers : []
  const skills = uniqueBy([...(aiPlan?.skills || []), ...buildFallbackSkills(matchedCareers)], (skill) => skill.name).slice(0, 6)
  const tasks = uniqueBy([...(aiPlan?.tasks || []), ...buildFallbackTasks(matchedCareers)], (task) => task.text).slice(0, 6)
  const resources = uniqueBy([...(aiPlan?.resources || []), ...buildFallbackResources()], (resource) => `${resource.type}-${resource.title}`).slice(0, 6)

  return {
    greeting: aiPlan?.greeting || `Based on your interests in ${formData.interests}, these are the strongest database-backed career matches for you.`,
    careers: matchedCareers.map((career, index) => {
      const aiCareer = aiCareers.find((item) => item.title === career.career_name || item.career_name === career.career_name) || aiCareers[index]
      return toPlanCareer(career, index, aiCareer)
    }),
    skills,
    tasks,
    resources,
    decisionEngine: {
      engine: decision.engine,
      inputs_used: decision.inputs_used,
      top_careers: decision.topCareers.map((career) => ({
        career_name: career.career_name,
        rank: career.rank,
        score: career.match_score,
        why_best: career.why_best,
        why_less_suitable_than_rank_1: career.why_less_suitable_than_rank_1
      })),
      less_suitable_options: decision.lessSuitableOptions
    },
    source: 'career_database_plus_ai'
  }
}

const buildFallbackSkills = (matchedCareers) =>
  uniqueBy(matchedCareers.flatMap((career) => career.required_skills), (skill) => skill)
    .slice(0, 6)
    .map((skill, index) => ({ name: skill, currentLevel: index === 0 ? 10 : 0, targetWeeks: 6 + index * 4 }))

const buildFallbackTasks = (matchedCareers) => [
  { text: `Read about ${matchedCareers[0].career_name} and write down why it fits your interests`, type: 'today', category: 'Clarity' },
  { text: `Review the first entrance exam: ${matchedCareers[0].entrance_exams[0]?.exam_name || 'your target exam'}`, type: 'today', category: 'Exam' },
  { text: `Shortlist 5 colleges from the suggested college list for ${matchedCareers[0].career_name}`, type: 'week', category: 'College' },
  { text: `Practise one core skill: ${matchedCareers[0].required_skills[0]}`, type: 'week', category: 'Skill' },
  { text: 'Create a weekly timetable based on your daily time availability', type: 'week', category: 'Planning' }
]

const buildFallbackResources = () => [
  { type: 'Website', title: 'National Career Service', desc: 'Explore Indian job roles and career information', url: 'https://www.ncs.gov.in' },
  { type: 'Free Course', title: 'SWAYAM', desc: 'Free and low-cost Indian online courses from recognised institutions', url: 'https://swayam.gov.in' },
  { type: 'Website', title: 'NTA Exams', desc: 'Official updates for major Indian entrance exams conducted by NTA', url: 'https://nta.ac.in' },
  { type: 'Website', title: 'AICTE Internship Portal', desc: 'Find internships and early practical exposure', url: 'https://internship.aicte-india.org' },
  { type: 'Tool', title: 'LinkedIn', desc: 'Research professionals, colleges, internships, and entry-level roles', url: 'https://www.linkedin.com' }
]

export async function generateCareerPlan(formData) {
  const decision = careerDecisionEngine(formData, 3)

  if (!API_KEY || API_KEY === 'your_anthropic_api_key_here') {
    throw new Error('NO_API_KEY')
  }

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true'
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 3500,
      messages: [{ role: 'user', content: buildPrompt(formData, decision) }]
    })
  })

  if (!response.ok) throw new Error(`API_ERROR_${response.status}`)

  const data = await response.json()
  const raw = data.content?.map((block) => block.text || '').join('')
  const clean = raw.replace(/```json|```/g, '').trim()
  return normalizeAiPlan(JSON.parse(clean), decision, formData)
}

export function getFallbackPlan(formData) {
  const decision = careerDecisionEngine(formData, 3)
  return normalizeAiPlan(null, decision, formData)
}

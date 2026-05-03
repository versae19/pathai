import careerData from '../data/careerData.js'
import collegeData from '../data/collegeData.js'

export const ALL_FILTER = 'All'

export const INTEREST_OPTIONS = [
  'Technology & coding',
  'Design & creativity',
  'Writing & content',
  'Business & marketing',
  'Finance & trading',
  'Teaching & education',
  'Healthcare',
  'Video & media',
  'Photography',
  'Gaming & animation'
]

export const SALARY_GOALS = [
  '₹15,000–30,000/month',
  '₹30,000–60,000/month',
  '₹60,000–1,00,000/month',
  '₹1,00,000+ per month'
]

export const TIME_OPTIONS = [
  '1–2 hours/day',
  '3–4 hours/day',
  '5–6 hours/day',
  'Full time (8+ hours)'
]

const CATEGORY_BY_INTEREST = {
  'Technology & coding': ['Engineering', 'Emerging Careers'],
  'Design & creativity': ['Arts', 'Emerging Careers'],
  'Writing & content': ['Arts', 'Emerging Careers'],
  'Business & marketing': ['Commerce', 'Emerging Careers'],
  'Finance & trading': ['Commerce'],
  'Teaching & education': ['Arts', 'Government Jobs'],
  Healthcare: ['Medical'],
  'Video & media': ['Arts', 'Emerging Careers'],
  Photography: ['Arts'],
  'Gaming & animation': ['Arts', 'Emerging Careers']
}

const CAREER_KEYWORDS = {
  'Software Engineer': ['coding', 'programming', 'technology', 'web', 'app', 'javascript', 'software'],
  'AI/ML Engineer': ['ai', 'machine learning', 'python', 'automation', 'math', 'data'],
  'Data Scientist': ['data', 'analytics', 'statistics', 'python', 'excel', 'sql'],
  'Digital Marketer': ['marketing', 'business', 'social media', 'content', 'ads', 'freelance'],
  'UI/UX Designer': ['design', 'figma', 'creativity', 'apps', 'websites', 'product'],
  'Graphic Designer': ['design', 'canva', 'creative', 'visual', 'branding', 'social media'],
  Doctor: ['medical', 'healthcare', 'biology', 'doctor', 'hospital', 'patient'],
  Nurse: ['healthcare', 'patient', 'hospital', 'care', 'medical'],
  'Chartered Accountant': ['commerce', 'accounting', 'tax', 'finance', 'audit'],
  'Investment Banker': ['finance', 'business', 'investment', 'excel', 'money'],
  Lawyer: ['law', 'argument', 'reading', 'writing', 'public speaking'],
  Teacher: ['teaching', 'education', 'mentor', 'school', 'explain'],
  'IAS Officer': ['government', 'upsc', 'policy', 'public service', 'leadership'],
  'Defence Officer': ['defence', 'army', 'fitness', 'leadership', 'discipline'],
  'Cybersecurity Analyst': ['security', 'hacking', 'networking', 'technology', 'linux'],
  'Cloud Engineer': ['cloud', 'devops', 'linux', 'networking', 'technology'],
  'Product Manager': ['business', 'startup', 'product', 'strategy', 'technology'],
  'Hotel Manager': ['hospitality', 'travel', 'management', 'communication', 'service'],
  'Fashion Designer': ['fashion', 'design', 'creative', 'clothes', 'styling'],
  'Animation and VFX Artist': ['animation', 'video', 'media', 'gaming', 'creative'],
  Journalist: ['writing', 'media', 'news', 'content', 'research'],
  Psychologist: ['psychology', 'counselling', 'people', 'mental health', 'empathy']
}

const CATEGORY_KEYWORDS = {
  Engineering: ['technology', 'coding', 'tech', 'software', 'math', 'physics', 'building', 'engineering', 'robotics', 'machines'],
  Medical: ['healthcare', 'biology', 'doctor', 'medical', 'patient', 'hospital', 'nursing', 'medicine', 'fitness'],
  Commerce: ['business', 'finance', 'trading', 'commerce', 'money', 'accounting', 'banking', 'management', 'startup'],
  Arts: ['design', 'creativity', 'writing', 'content', 'teaching', 'media', 'psychology', 'law', 'journalism'],
  'Government Jobs': ['government', 'upsc', 'ssc', 'railway', 'defence', 'public service', 'stable job', 'policy'],
  'Emerging Careers': ['ai', 'data', 'digital', 'marketing', 'remote', 'freelance', 'cloud', 'cybersecurity', 'product']
}

const HIGH_INCOME_CAREERS = new Set([
  'AI/ML Engineer',
  'Data Scientist',
  'Software Engineer',
  'Product Manager',
  'Investment Banker',
  'Management Consultant',
  'Doctor',
  'Chartered Accountant'
])

const QUICK_START_CAREERS = new Set([
  'Digital Marketer',
  'Graphic Designer',
  'UI/UX Designer',
  'Journalist',
  'Hotel Manager',
  'Animation and VFX Artist',
  'Medical Lab Technologist'
])

const LONG_PREP_CATEGORIES = new Set(['Engineering', 'Medical', 'Government Jobs'])

const normalize = (value) => String(value || '').toLowerCase().trim()

const uniqueBy = (items, getKey) => {
  const seen = new Set()
  return items.filter((item) => {
    const key = getKey(item)
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

const tokenize = (query) =>
  normalize(query)
    .split(/[^a-z0-9+]+/i)
    .map((token) => token.trim())
    .filter((token) => token.length > 1)

const getCareerSearchText = (career) => [
  career.career_name,
  career.category,
  career.description,
  career.required_skills.join(' '),
  career.growth_scope,
  career.average_salary_india,
  career.entrance_exams.map((exam) => exam.exam_name).join(' ')
].join(' ').toLowerCase()

const getProfileSearchText = (profile = {}) => [
  parseInterestList(profile.interests).join(' '),
  profile.skills,
  profile.salaryGoal || profile.income,
  profile.timeAvailability || profile.time,
  profile.education,
  profile.context
].filter(Boolean).join(' ').toLowerCase()

const parseInterestList = (interests) => {
  if (Array.isArray(interests)) return interests.filter(Boolean)
  return String(interests || '').split(',').map((interest) => interest.trim()).filter(Boolean)
}

const getSuggestedColleges = (careerName, limit = 5) =>
  collegeData
    .filter((college) => college.courses_offered.includes(careerName))
    .sort((a, b) => {
      if (a.type !== b.type) return a.type === 'government' ? -1 : 1
      return a.college_name.localeCompare(b.college_name)
    })
    .slice(0, limit)
    .map((college) => ({
      college_name: college.college_name,
      location: `${college.location.city}, ${college.location.state}`,
      admission_process: college.admission_process,
      entrance_exams_accepted: college.entrance_exams_accepted,
      approximate_fees: college.approximate_fees,
      type: college.type
    }))

export function searchCareers(careers, query) {
  const tokens = tokenize(query)
  if (!tokens.length) return careers

  return careers.filter((career) => {
    const searchText = getCareerSearchText(career)
    return tokens.every((token) => searchText.includes(token))
  })
}

export function scoreCareer(career, profile = {}) {
  const interests = parseInterestList(profile.interests)
  const profileText = getProfileSearchText(profile)

  const preferredCategories = interests.flatMap((interest) => CATEGORY_BY_INTEREST[interest] || [])
  const salaryGoal = normalize(profile.salaryGoal || profile.income)
  const timeAvailability = normalize(profile.timeAvailability || profile.time)
  const reasons = []
  let score = 0

  if (preferredCategories.includes(career.category)) {
    score += 35
    reasons.push(`Matches ${career.category}`)
  }

  for (const keyword of CATEGORY_KEYWORDS[career.category] || []) {
    if (profileText.includes(keyword)) score += 4
  }

  for (const keyword of CAREER_KEYWORDS[career.career_name] || []) {
    if (profileText.includes(keyword)) {
      score += 10
      reasons.push(`Matches keyword: ${keyword}`)
    }
  }

  for (const skill of career.required_skills) {
    if (profileText.includes(skill.toLowerCase())) {
      score += 8
      reasons.push(`Uses ${skill}`)
    }
  }

  if (salaryGoal.includes('1,00,000') || salaryGoal.includes('100000')) {
    if (HIGH_INCOME_CAREERS.has(career.career_name)) {
      score += 18
      reasons.push('Fits a higher salary goal')
    } else if (career.average_salary_india.includes('8') || career.average_salary_india.includes('10') || career.average_salary_india.includes('12')) {
      score += 8
    }
  } else if (salaryGoal.includes('15,000') || salaryGoal.includes('30,000')) {
    if (QUICK_START_CAREERS.has(career.career_name)) {
      score += 14
      reasons.push('Can start with a lighter entry barrier')
    }
  } else if (salaryGoal) {
    score += 5
  }

  if (timeAvailability.includes('1') || timeAvailability.includes('2')) {
    if (QUICK_START_CAREERS.has(career.career_name)) {
      score += 12
      reasons.push('Works with limited daily time')
    }
    if (LONG_PREP_CATEGORIES.has(career.category)) score -= 6
  } else if (timeAvailability.includes('full') || timeAvailability.includes('8')) {
    if (LONG_PREP_CATEGORIES.has(career.category) || HIGH_INCOME_CAREERS.has(career.career_name)) {
      score += 10
      reasons.push('Enough time for deeper preparation')
    }
  } else if (timeAvailability) {
    score += 5
  }

  return {
    score: Math.max(0, score),
    reasons: uniqueBy(reasons, (reason) => reason).slice(0, 3)
  }
}

const buildBestReasons = (career, profile, scoreReasons) => {
  const reasons = [...scoreReasons]
  const salaryGoal = normalize(profile.salaryGoal || profile.income)
  const timeAvailability = normalize(profile.timeAvailability || profile.time)

  if (salaryGoal.includes('1,00,000') && HIGH_INCOME_CAREERS.has(career.career_name)) {
    reasons.push(`${career.career_name} has a stronger long-term salary ceiling for your income goal.`)
  }

  if ((timeAvailability.includes('1') || timeAvailability.includes('2')) && QUICK_START_CAREERS.has(career.career_name)) {
    reasons.push('It can be explored with smaller daily learning blocks.')
  }

  if ((timeAvailability.includes('full') || timeAvailability.includes('8')) && LONG_PREP_CATEGORIES.has(career.category)) {
    reasons.push('Your available time supports deeper exam or college preparation.')
  }

  if (!reasons.length) reasons.push(`It is the strongest rule-based match from the current career database.`)

  return uniqueBy(reasons, (reason) => reason).slice(0, 3)
}

const buildLessSuitableReasons = (career, profile, topCareer) => {
  const interests = parseInterestList(profile.interests)
  const preferredCategories = interests.flatMap((interest) => CATEGORY_BY_INTEREST[interest] || [])
  const salaryGoal = normalize(profile.salaryGoal || profile.income)
  const timeAvailability = normalize(profile.timeAvailability || profile.time)
  const profileText = getProfileSearchText(profile)
  const reasons = []

  if (!preferredCategories.includes(career.category)) {
    reasons.push(`It is less aligned with your selected interests than ${topCareer.career_name}.`)
  }

  if (salaryGoal.includes('1,00,000') && !HIGH_INCOME_CAREERS.has(career.career_name)) {
    reasons.push('It may take longer to reach your high income goal from entry level.')
  }

  if ((timeAvailability.includes('1') || timeAvailability.includes('2')) && LONG_PREP_CATEGORIES.has(career.category)) {
    reasons.push('It usually needs heavier exam preparation than your current daily time allows.')
  }

  const directKeywordMatch = (CAREER_KEYWORDS[career.career_name] || []).some((keyword) => profileText.includes(keyword))
  if (!directKeywordMatch) {
    reasons.push('Your profile has fewer direct skill or keyword matches for this path.')
  }

  if (!reasons.length) {
    reasons.push(`It scored lower than ${topCareer.career_name} on the current interest, salary, and time rules.`)
  }

  return uniqueBy(reasons, (reason) => reason).slice(0, 2)
}

export function recommendCareers({
  careers = careerData,
  query = '',
  category = ALL_FILTER,
  interests = [],
  salaryGoal = '',
  timeAvailability = '',
  skills = '',
  education = '',
  context = '',
  limit
} = {}) {
  const filtered = searchCareers(careers, query).filter((career) => category === ALL_FILTER || career.category === category)

  const ranked = filtered
    .map((career) => {
      const match = scoreCareer(career, { interests, salaryGoal, timeAvailability, skills, education, context })
      return {
        ...career,
        recommendation_score: match.score,
        match_reasons: match.reasons,
        suggested_colleges: getSuggestedColleges(career.career_name)
      }
    })
    .sort((a, b) => b.recommendation_score - a.recommendation_score || a.career_name.localeCompare(b.career_name))

  return typeof limit === 'number' ? ranked.slice(0, limit) : ranked
}

export function matchCareersToProfile(formData, limit = 3) {
  return recommendCareers({
    interests: formData.interests,
    salaryGoal: formData.income,
    timeAvailability: formData.time,
    education: formData.education,
    context: formData.context,
    skills: formData.skills,
    limit
  }).map((career) => ({
    ...career,
    match_score: career.recommendation_score
  }))
}

export function careerDecisionEngine(formData, limit = 3) {
  const profile = {
    interests: formData.interests,
    salaryGoal: formData.income,
    timeAvailability: formData.time,
    education: formData.education,
    skills: formData.skills,
    context: formData.context
  }

  const ranked = recommendCareers({
    interests: profile.interests,
    salaryGoal: profile.salaryGoal,
    timeAvailability: profile.timeAvailability,
    skills: profile.skills,
    education: profile.education,
    context: profile.context
  })

  const topCareers = ranked.slice(0, limit)
  const topCareer = topCareers[0]
  const lessSuitableOptions = ranked.slice(limit, limit + 4).map((career) => ({
    career_name: career.career_name,
    category: career.category,
    score: career.recommendation_score,
    why_less_suitable: buildLessSuitableReasons(career, profile, topCareer)
  }))

  return {
    engine: 'rule_based_scoring_v1',
    inputs_used: {
      interests: parseInterestList(profile.interests),
      salary_goal: profile.salaryGoal || '',
      time_availability: profile.timeAvailability || '',
      education: profile.education || ''
    },
    topCareers: topCareers.map((career, index) => ({
      ...career,
      rank: index + 1,
      match_score: career.recommendation_score,
      why_best: buildBestReasons(career, profile, career.match_reasons || []),
      why_less_suitable_than_rank_1: index === 0 ? [] : buildLessSuitableReasons(career, profile, topCareer)
    })),
    lessSuitableOptions
  }
}

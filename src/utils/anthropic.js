// Anthropic API utility — PathAI
const API_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY

export async function generateCareerPlan(formData) {
  const prompt = `You are an expert Indian career counsellor. Based on this student's profile, generate a highly personalised career plan in JSON format.

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

Return ONLY a valid JSON object (no markdown, no backticks, no extra text) with this exact structure:
{
  "greeting": "One personalised sentence acknowledging their background and goals",
  "careers": [
    {
      "title": "Career title",
      "tag": "Best Match",
      "description": "2 sentences about this path and why it suits this student",
      "salaryRange": "₹XX,000 – ₹XX,000/month",
      "timeline": "X–Y months to first income",
      "whyGood": "One sentence on why this fits their profile",
      "roadmap": [
        { "week": "Week 1–2", "title": "Phase title", "desc": "Specific actionable tasks" },
        { "week": "Month 1", "title": "Phase title", "desc": "Specific tasks" },
        { "week": "Month 2–3", "title": "Phase title", "desc": "Specific tasks" },
        { "week": "Month 4–6", "title": "Phase title", "desc": "Specific tasks and income milestones" }
      ]
    },
    {
      "title": "Second career option",
      "tag": "Alternative",
      "description": "2 sentences",
      "salaryRange": "₹XX,000 – ₹XX,000/month",
      "timeline": "X–Y months to first income",
      "whyGood": "One sentence",
      "roadmap": [
        { "week": "Week 1–2", "title": "Phase title", "desc": "Tasks" },
        { "week": "Month 1", "title": "Phase title", "desc": "Tasks" },
        { "week": "Month 2–3", "title": "Phase title", "desc": "Tasks" },
        { "week": "Month 4–6", "title": "Phase title", "desc": "Tasks" }
      ]
    }
  ],
  "skills": [
    { "name": "Core skill", "currentLevel": 5, "targetWeeks": 6 },
    { "name": "Skill name", "currentLevel": 0, "targetWeeks": 10 },
    { "name": "Skill name", "currentLevel": 0, "targetWeeks": 14 },
    { "name": "Skill name", "currentLevel": 0, "targetWeeks": 18 },
    { "name": "Advanced skill", "currentLevel": 0, "targetWeeks": 22 }
  ],
  "tasks": [
    { "text": "Specific task for today", "type": "today", "category": "Learning" },
    { "text": "Another today task", "type": "today", "category": "Practice" },
    { "text": "Weekly task 1", "type": "week", "category": "Building" },
    { "text": "Weekly task 2", "type": "week", "category": "Networking" },
    { "text": "Weekly task 3", "type": "week", "category": "Income" }
  ],
  "resources": [
    { "type": "YouTube", "title": "Channel name", "desc": "What you will learn", "url": "https://youtube.com/@channel" },
    { "type": "Website", "title": "Site name", "desc": "How to use it", "url": "https://site.com" },
    { "type": "Free Course", "title": "Course name", "desc": "What it teaches", "url": "https://platform.com" },
    { "type": "Community", "title": "Community name", "desc": "How it helps", "url": "https://community.com" },
    { "type": "Tool", "title": "Free tool name", "desc": "How to use for this career", "url": "https://tool.com" }
  ]
}

Guidelines: Focus on realistic Indian income, free resources only, prioritise remote/freelance for Tier-2 cities, give specific actionable tasks.`

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
      max_tokens: 2000,
      messages: [{ role: 'user', content: prompt }]
    })
  })

  if (!response.ok) throw new Error(`API_ERROR_${response.status}`)

  const data = await response.json()
  const raw = data.content?.map(b => b.text || '').join('')
  const clean = raw.replace(/```json|```/g, '').trim()
  return JSON.parse(clean)
}

export function getFallbackPlan(formData) {
  const i = (formData.interests || '').toLowerCase()
  let c1, c2

  if (i.includes('design') || i.includes('creat')) {
    c1 = { title: 'UI/UX Designer', tag: 'Best Match', description: 'Design digital interfaces for apps and websites. High demand with strong freelance opportunities on Fiverr and Upwork.', salaryRange: '₹30,000 – ₹80,000/month', timeline: '4–6 months to first income', whyGood: 'Design suits creative thinkers and pays well with zero coding required.', roadmap: [{ week: 'Week 1–2', title: 'Design fundamentals', desc: 'Study colour theory and typography. Watch The Futur and AJ&Smart on YouTube daily.' }, { week: 'Month 1', title: 'Master Figma', desc: 'Complete free Figma tutorials. Redesign 2 existing apps as practice. Join Figma Community.' }, { week: 'Month 2–3', title: 'Build portfolio', desc: 'Create 5 case studies — 3 redesigns + 2 original. Host on Behance and a free portfolio site.' }, { week: 'Month 4–6', title: 'First clients', desc: 'Create Fiverr gig. Start at ₹5,000/project. Target Indian startups on LinkedIn.' }] }
    c2 = { title: 'Graphic Designer', tag: 'Quick Income', description: 'Create logos and social media visuals for small businesses. Fastest path to income with Canva skills.', salaryRange: '₹15,000 – ₹40,000/month', timeline: '2–3 months to first income', whyGood: 'Lower barrier to entry — Canva skills alone can get you paying clients quickly.', roadmap: [{ week: 'Week 1–2', title: 'Canva mastery', desc: 'Master Canva Pro. Watch logo design tutorials. Design 5 mock brands for practice.' }, { week: 'Month 1', title: 'Portfolio samples', desc: 'Design 20 mock projects: logos, social posts, brochures. Create your own brand as demo.' }, { week: 'Month 2–3', title: 'First Fiverr orders', desc: 'List gig starting at ₹500. Do first 10 at low price to build reviews quickly.' }, { week: 'Month 4–6', title: 'Scale rates', desc: 'Add Illustrator skills. Move to ₹2,000–5,000/project. Reach local businesses directly.' }] }
  } else if (i.includes('tech') || i.includes('cod')) {
    c1 = { title: 'Frontend Web Developer', tag: 'Best Match', description: 'Build websites using HTML, CSS, and JavaScript. Highest income ceiling with excellent remote job prospects in India.', salaryRange: '₹40,000 – ₹1,20,000/month', timeline: '6–8 months to first job', whyGood: 'Tech skills have the best long-term income growth and are learnable entirely for free.', roadmap: [{ week: 'Week 1–2', title: 'HTML & CSS', desc: 'Complete freeCodeCamp HTML/CSS. Build a simple webpage. Code daily for minimum 2 hours.' }, { week: 'Month 1', title: 'JavaScript basics', desc: 'Learn JS on freeCodeCamp. Build: calculator, to-do app, quiz game.' }, { week: 'Month 2–3', title: 'React.js', desc: 'Learn React via Codevolution on YouTube. Build a full project with an API integration.' }, { week: 'Month 4–6', title: 'Job applications', desc: 'Apply on Internshala and LinkedIn. Build 3 portfolio projects. Start Fiverr for quick income.' }] }
    c2 = { title: 'Data Analyst', tag: 'Alternative', description: 'Analyse business data using Excel, SQL, and Python. In demand across all sectors — not just tech.', salaryRange: '₹35,000 – ₹90,000/month', timeline: '5–7 months to first job', whyGood: 'Data skills are wanted in banking, retail, healthcare — not just IT companies.', roadmap: [{ week: 'Week 1–2', title: 'Excel mastery', desc: 'Master pivot tables, VLOOKUP, charts. Practice with free datasets from Kaggle.' }, { week: 'Month 1', title: 'SQL fundamentals', desc: 'Complete free SQL on Mode Analytics. Practice on HackerRank SQL challenges daily.' }, { week: 'Month 2–3', title: 'Python for data', desc: 'Learn pandas on YouTube. Complete one end-to-end analysis on a Kaggle dataset.' }, { week: 'Month 4–6', title: 'Job prep', desc: 'Build 3 data projects. Apply on Naukri and LinkedIn for analyst roles.' }] }
  } else {
    c1 = { title: 'Content Writer + SEO', tag: 'Best Match', description: 'Write blogs and web content for clients worldwide. One of the easiest high-income careers to start with just a laptop and internet.', salaryRange: '₹20,000 – ₹60,000/month', timeline: '2–3 months to first income', whyGood: 'Writing is the fastest path to freelance income with almost zero investment required.', roadmap: [{ week: 'Week 1–2', title: 'Writing & SEO basics', desc: 'Read Neil Patel blog. Write one 800-word article per day. Focus on clarity and structure.' }, { week: 'Month 1', title: 'Build portfolio', desc: 'Publish 10 articles on Medium. Cover 3–4 niches. Learn keyword research with free Google tools.' }, { week: 'Month 2–3', title: 'First clients', desc: 'Apply on ProBlogger and iWriter. Submit 10 pitches per day. Offer first 3 articles at low cost.' }, { week: 'Month 4–6', title: 'Scale income', desc: 'Raise to ₹1–3/word. Add social media writing. Get 2–3 retainer clients.' }] }
    c2 = { title: 'Digital Marketing', tag: 'Alternative', description: 'Run social media and ad campaigns for businesses. Every small business in India needs digital marketing help right now.', salaryRange: '₹25,000 – ₹70,000/month', timeline: '3–4 months to first income', whyGood: 'High demand locally — every Tier-2 city business wants to go digital.', roadmap: [{ week: 'Week 1–2', title: 'Marketing basics', desc: 'Complete Google Digital Garage course. Learn Facebook Ads on Meta Blueprint (both free).' }, { week: 'Month 1', title: 'Hands-on practice', desc: 'Offer free social media management to a local business. Track and document all results.' }, { week: 'Month 2–3', title: 'Paid campaigns', desc: 'Run ₹500 test campaigns on Google and Meta Ads. Document results for your portfolio.' }, { week: 'Month 4–6', title: 'First paying clients', desc: 'Charge ₹8,000–15,000/month per client. Use referrals from free work to find paid clients.' }] }
  }

  return {
    greeting: `Here's your personalised career plan based on your interests in ${formData.interests} and goal of reaching ${formData.income}.`,
    careers: [c1, c2],
    skills: [
      { name: 'Core Technical Skill', currentLevel: 10, targetWeeks: 6 },
      { name: 'Portfolio Building', currentLevel: 5, targetWeeks: 10 },
      { name: 'Client Communication', currentLevel: 15, targetWeeks: 14 },
      { name: 'Freelance Pitching', currentLevel: 0, targetWeeks: 18 },
      { name: 'Advanced Specialisation', currentLevel: 0, targetWeeks: 24 }
    ],
    tasks: [
      { text: 'Watch one tutorial video (30–60 min) on your core skill and take notes', type: 'today', category: 'Learning' },
      { text: 'Practise by building or writing something new — not just watching', type: 'today', category: 'Practice' },
      { text: 'Research 3 potential clients or job listings and save them', type: 'week', category: 'Income' },
      { text: 'Add one new piece to your portfolio or practice folder', type: 'week', category: 'Portfolio' },
      { text: 'Join one relevant online community (Discord, Reddit, or Facebook Group)', type: 'week', category: 'Networking' }
    ],
    resources: [
      { type: 'YouTube', title: 'FreeCodeCamp', desc: 'High-quality free coding and tech tutorials', url: 'https://youtube.com/@freecodecamp' },
      { type: 'Free Course', title: 'Google Digital Garage', desc: 'Free digital skills courses with Google certificates', url: 'https://learndigital.withgoogle.com/digitalgarage' },
      { type: 'Website', title: 'Coursera (Audit Mode)', desc: 'Audit top university courses entirely for free', url: 'https://coursera.org' },
      { type: 'Community', title: 'r/freelance_forhire', desc: 'Find your first clients and get freelancer advice', url: 'https://reddit.com/r/freelance_forhire' },
      { type: 'Tool', title: 'Canva Free Plan', desc: 'Design portfolios and social posts for free', url: 'https://canva.com' }
    ]
  }
}

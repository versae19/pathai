import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

const FEATURES = [
  { icon: '🎯', bg: '#E8F5EE', title: 'Personalised for India', desc: 'Career paths built around the Indian job market — including freelancing, remote work, and high-demand skills.' },
  { icon: '📈', bg: '#FDF3E7', title: 'Income-first planning', desc: 'Set your monthly income goal and get a realistic timeline to reach it, with milestones at every stage.' },
  { icon: '🗺️', bg: '#EEF2FF', title: 'Weekly action plan', desc: 'Break your career goal into daily and weekly tasks so you always know exactly what to do next.' },
  { icon: '📚', bg: '#FFF0F0', title: 'Free resources only', desc: 'Curated YouTube channels, websites, and tools. Zero paid courses required to get started.' },
  { icon: '💡', bg: '#E8F5EE', title: 'Skill progression', desc: 'Track your progress from beginner to intermediate to advanced with visual progress bars.' },
  { icon: '🤖', bg: '#F5F0FF', title: 'Real AI, not templates', desc: 'Powered by Claude AI — every career plan is unique to you, not a copy-paste template.' },
]

const TESTIMONIALS = [
  { quote: 'I was a B.Com student with no idea about tech. PathAI suggested UI/UX and gave me a 6-month plan. I landed my first ₹35,000/month freelance project within 5 months.', name: 'Priya Mehta', meta: 'UI/UX Freelancer, Pune', initials: 'PM', bg: '#E8F5EE', color: '#1B6B4A' },
  { quote: 'Class 12 dropout here. PathAI showed me content writing → SEO → Digital Marketing path. Now earning ₹28k/month remotely from a Tier-2 city. Life changed completely.', name: 'Rahul Kumar', meta: 'Digital Marketer, Patna', initials: 'RK', bg: '#FDF3E7', color: '#C97B2A' },
  { quote: 'Engineering student who hated coding. PathAI suggested data analytics instead. The weekly task plan kept me on track. Placed at ₹6 LPA before final year exams.', name: 'Ananya Singh', meta: 'Data Analyst, Bengaluru', initials: 'AS', bg: '#EEF2FF', color: '#534AB7' },
]

const FAQS = [
  { q: 'Is PathAI free to use?', a: 'Yes, generating your career plan is completely free. You get access to your full roadmap, skill tracker, and daily tasks without any payment.' },
  { q: 'I\'m from a small city — will this work for me?', a: 'Absolutely. PathAI specifically focuses on remote-friendly and freelance career paths where your city doesn\'t limit your income. Many resources work from anywhere in India.' },
  { q: 'Do I need to know coding?', a: 'No. PathAI suggests careers across design, content, business, and marketing too. We match you to paths that suit your background, not what sounds impressive.' },
  { q: 'How accurate is the income data?', a: 'Income ranges are based on real Indian freelance and job market data. We show realistic ranges, not best-case scenarios.' },
  { q: 'Can I regenerate my plan later?', a: 'Yes. You can go back, update your form answers, and generate a fresh plan anytime. Your goals may change — your roadmap can too.' },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border py-5">
      <button
        className="w-full text-left flex justify-between items-center bg-transparent border-0 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="text-base font-semibold text-ink pr-4">{q}</span>
        <span className="text-2xl font-light text-ink-3 flex-shrink-0 transition-transform duration-200" style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
      </button>
      <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: open ? '200px' : '0' }}>
        <p className="text-sm text-ink-2 leading-relaxed pt-3">{a}</p>
      </div>
    </div>
  )
}

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 px-[5%] overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(232,245,238,0.8) 0%, transparent 70%)' }} />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(253,243,231,0.6) 0%, transparent 70%)' }} />

        <div className="max-w-5xl relative z-10">
          <div className="fade-up inline-flex items-center gap-2 bg-accent-light border border-accent-mid text-accent text-xs font-bold px-4 py-2 rounded-full mb-7 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            India's First AI Career Planner
          </div>

          <h1 className="fade-up fade-up-1 font-serif text-5xl md:text-7xl tracking-tight leading-[1.05] mb-6 text-ink">
            Confused About<br />
            Your Career? Get a<br />
            <em className="text-accent not-italic">Clear Roadmap</em><br />
            in Minutes
          </h1>

          <p className="fade-up fade-up-2 text-lg text-ink-2 max-w-xl mb-10 leading-relaxed font-light">
            Tell us your interests, goals, and available time. Our AI builds a personalised step-by-step career plan built for the Indian job market.
          </p>

          <div className="fade-up fade-up-3 flex flex-wrap gap-4">
            <button className="btn-primary text-base px-7 py-3.5" onClick={() => navigate('/plan')}>
              Start Planning Free →
            </button>
            <button
              className="btn-secondary text-base px-6 py-3.5"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See how it works
            </button>
          </div>

          <div className="fade-up fade-up-4 flex flex-wrap gap-10 mt-14">
            {[['12,000+', 'Students helped'], ['₹40k–2L', 'Monthly income range'], ['3 min', 'To get your roadmap']].map(([num, lbl]) => (
              <div key={lbl}>
                <div className="font-serif text-3xl tracking-tight text-ink">{num}</div>
                <div className="text-sm text-ink-3 font-medium mt-0.5">{lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-20 px-[5%]">
        <div className="max-w-5xl mx-auto">
          <div className="section-label">Process</div>
          <h2 className="h2">Three steps to<br />career clarity</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { num: '01', title: 'Tell us about yourself', desc: 'Share your education, interests, current skills, and how much you want to earn. It takes under 3 minutes.' },
              { num: '02', title: 'AI builds your roadmap', desc: 'Our AI analyses the Indian job market and generates a personalised plan with real income benchmarks and timelines.' },
              { num: '03', title: 'Learn, track, and earn', desc: 'Follow your daily tasks, track skills, and access free resources. Progress from beginner to earning — step by step.' },
            ].map(s => (
              <div key={s.num} className="card hover:border-border-2 hover:-translate-y-0.5 transition-all duration-300">
                <div className="font-serif text-5xl text-bg-3 leading-none mb-4 italic">{s.num}</div>
                <h3 className="text-lg font-semibold mb-2 text-ink">{s.title}</h3>
                <p className="text-sm text-ink-2 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 px-[5%] bg-bg-2">
        <div className="max-w-5xl mx-auto">
          <div className="section-label">Benefits</div>
          <h2 className="h2">Everything you need<br />to launch your career</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {FEATURES.map(f => (
              <div key={f.title} className="card">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4" style={{ background: f.bg }}>{f.icon}</div>
                <h3 className="text-base font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-ink-2 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-[5%]">
        <div className="max-w-5xl mx-auto">
          <div className="section-label">Stories</div>
          <h2 className="h2">Students who found<br />their path</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="card rounded-3xl">
                <div className="text-gold text-sm mb-3">★★★★★</div>
                <blockquote className="font-serif text-base leading-relaxed text-ink mb-5 italic">"{t.quote}"</blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0"
                    style={{ background: t.bg, color: t.color }}>{t.initials}</div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-ink-3">{t.meta}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-[5%] bg-bg-2">
        <div className="max-w-5xl mx-auto">
          <div className="section-label text-center">FAQ</div>
          <h2 className="h2 text-center">Common questions</h2>
          <div className="max-w-2xl mx-auto mt-10">
            {FAQS.map(f => <FAQItem key={f.q} {...f} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="mx-[5%] mb-20">
        <div className="bg-ink rounded-3xl px-8 md:px-16 py-16 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight mb-4">
            Your career clarity is<br />3 minutes away
          </h2>
          <p className="text-white/60 text-base mb-8">Join 12,000+ Indian students who stopped guessing and started growing.</p>
          <button
            className="bg-white text-ink px-8 py-4 rounded-xl text-base font-semibold hover:bg-accent-light hover:text-accent transition-all duration-200 cursor-pointer border-0"
            onClick={() => navigate('/plan')}
          >
            Start Planning Free — It's Free →
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-ink py-12 px-[5%] text-center">
        <div className="font-serif text-2xl text-white mb-3">Path<span className="text-accent">AI</span></div>
        <p className="text-white/50 text-sm">AI Career Planner for Indian Students · Built with ❤️ in India</p>
        <p className="text-white/30 text-xs mt-3">© 2025 PathAI · Privacy · Terms</p>
      </footer>
    </div>
  )
}

# PathAI — AI Career Planner for Indian Students

A complete, production-ready AI-powered career planning website built for Indian students. Get personalised career roadmaps, skill trackers, and daily tasks — powered by Claude AI.

---

## 🚀 Live Preview

After setup, visit: `http://localhost:3000`

---

## 📁 Folder Structure

```
pathai/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Navbar.jsx          # Sticky navigation bar
│   ├── pages/
│   │   ├── LandingPage.jsx     # Full landing page (hero, features, FAQ, CTA)
│   │   ├── FormPage.jsx        # 4-step career input form
│   │   └── DashboardPage.jsx   # AI output dashboard (plan, skills, tasks, resources)
│   ├── utils/
│   │   └── anthropic.js        # Claude API integration + fallback plan
│   ├── App.jsx                 # Router + state management
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles + Tailwind
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .env.example                # Copy to .env and add your API key
└── .gitignore
```

---

## ⚙️ Setup Instructions

### Step 1 — Install Node.js
Download and install Node.js (v18 or higher) from: https://nodejs.org

Verify installation:
```bash
node --version   # Should show v18+
npm --version
```

### Step 2 — Install dependencies
```bash
cd pathai
npm install
```

### Step 3 — Set up environment variables
```bash
cp .env.example .env
```

Open `.env` and add your Anthropic API key:
```
VITE_ANTHROPIC_API_KEY=sk-ant-api03-your-key-here
```

Get your API key from: https://console.anthropic.com

> **Note:** If you don't add an API key, the app will still work — it falls back to a high-quality pre-built career plan. Add a real key for fully personalised AI-generated plans.

### Step 4 — Start the development server
```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## 🌐 Deployment

### Deploy to Vercel (Recommended — Free)

**Option A: Via Vercel CLI**
```bash
npm install -g vercel
vercel
```
Follow prompts. When asked for environment variables, add:
- Key: `VITE_ANTHROPIC_API_KEY`
- Value: your API key

**Option B: Via Vercel Dashboard**
1. Push your code to GitHub
2. Go to https://vercel.com and sign up (free)
3. Click "New Project" → Import your GitHub repo
4. In "Environment Variables", add `VITE_ANTHROPIC_API_KEY`
5. Click Deploy — your site will be live in ~2 minutes

### Deploy to Netlify (Alternative)
```bash
npm run build
# Upload the dist/ folder to https://netlify.com/drop
```
Or connect your GitHub repo at https://app.netlify.com
Set environment variable `VITE_ANTHROPIC_API_KEY` in Site Settings → Environment Variables.

---

## 🔑 Environment Variables

| Variable | Required | Description |
|---|---|---|
| `VITE_ANTHROPIC_API_KEY` | Optional* | Your Claude API key from console.anthropic.com |

*The app works without an API key using the built-in fallback plan generator.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend Framework | React 18 |
| Styling | Tailwind CSS 3 |
| Routing | React Router v6 |
| Build Tool | Vite 5 |
| AI API | Anthropic Claude (claude-sonnet-4-20250514) |
| Fonts | Instrument Serif + DM Sans (Google Fonts) |
| Deployment | Vercel / Netlify |

---

## ✨ Features

- **Landing Page** — Hero section, How it works, Feature grid, Testimonials, FAQ accordion, CTA
- **4-Step Form** — Age, education, city, interests (multi-select), skills, income goal, time, work style
- **AI Career Dashboard** — 2 personalised career paths, salary ranges, timelines
- **Step-by-Step Roadmap** — Weekly/monthly action plan for each career
- **Skill Tracker** — Animated progress bars for key skills
- **Daily Tasks** — Checkbox tasks with today/weekly classification + progress bar
- **Free Resources** — Curated YouTube, websites, courses, and communities
- **Smart Fallback** — If API is unavailable, shows a relevant pre-built plan
- **Mobile Responsive** — Bottom tab navigation on mobile, sidebar on desktop

---

## 🎨 Customisation

### Change brand name
Search and replace `PathAI` with your brand name in:
- `src/components/Navbar.jsx`
- `src/pages/LandingPage.jsx`
- `src/pages/DashboardPage.jsx`
- `index.html` (title tag)

### Change accent colour
In `tailwind.config.js`, update the `accent` color:
```js
colors: {
  accent: '#1B6B4A',  // Change this to your colour
}
```

Also update `#1B6B4A` in `src/index.css` (loader ring and focus states).

### Add Firebase Auth (optional)
1. `npm install firebase`
2. Create a Firebase project at https://console.firebase.google.com
3. Add to `.env`:
```
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_PROJECT_ID=your_project
```
4. Create `src/utils/firebase.js` with your config
5. Wrap App.jsx with Firebase AuthProvider

---

## 📱 Adding to Resume

This project demonstrates:
- React 18 component architecture
- Tailwind CSS responsive design
- REST API integration (Anthropic Claude)
- State management with React hooks
- React Router for SPA navigation
- Production deployment on Vercel/Netlify
- Mobile-first UI design

---

## 📄 License

MIT — free to use, modify, and deploy commercially.

---

Built with ❤️ in India · Powered by Claude AI

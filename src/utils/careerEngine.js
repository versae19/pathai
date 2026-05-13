import careerData from '../data/careerData.js'
import collegeData from '../data/collegeData.js'

export const ALL_CAREER_NAMES = [...new Set(careerData.map(c => c.career_name))].sort()

// ── Comprehensive catalogue for Class 10 students ─────────────────────────────

export const TENTH_CATALOGUE = [
  {
    id: 'engineering',
    label: 'Engineering & Technology',
    icon: '⚙️',
    color: { bg: '#eff6ff', border: '#bfdbfe', text: '#1d4ed8', dot: '#3b82f6', light: '#dbeafe' },
    interests: ['technology', 'science'],
    careers: [
      // Core branches
      { name: 'Computer Science Engineer', stream: 'B.Tech CSE — 4 yrs', exams: ['JEE Main', 'BITSAT', 'State CETs'], salary: '₹6–30 LPA', desc: 'Algorithms, AI, data systems, and software — highest-demand branch in India.' },
      { name: 'Information Technology Engineer', stream: 'B.Tech IT — 4 yrs', exams: ['JEE Main', 'State CETs'], salary: '₹5–25 LPA', desc: 'Networking, databases, cloud infrastructure, and enterprise software systems.' },
      { name: 'Mechanical Engineer', stream: 'B.Tech Mechanical — 4 yrs', exams: ['JEE Main', 'GATE', 'BITSAT'], salary: '₹4–15 LPA', desc: 'Design machines, engines, thermal systems, and manufacturing processes.' },
      { name: 'Civil Engineer', stream: 'B.Tech Civil — 4 yrs', exams: ['JEE Main', 'GATE', 'State CETs'], salary: '₹4–12 LPA', desc: 'Plan and build roads, bridges, dams, and urban infrastructure.' },
      { name: 'Electrical Engineer', stream: 'B.Tech Electrical — 4 yrs', exams: ['JEE Main', 'GATE'], salary: '₹5–14 LPA', desc: 'Work on power grids, motors, control systems, and electrical equipment.' },
      { name: 'Electronics and Communication Engineer', stream: 'B.Tech ECE — 4 yrs', exams: ['JEE Main', 'BITSAT', 'GATE'], salary: '₹4–18 LPA', desc: 'Design telecom networks, embedded chips, and electronic devices.' },
      { name: 'Chemical Engineer', stream: 'B.Tech Chemical — 4 yrs', exams: ['JEE Main', 'GATE', 'State CETs'], salary: '₹5–16 LPA', desc: 'Design industrial processes for pharma, petroleum, and specialty chemicals.' },
      // Emerging & specialised branches
      { name: 'Artificial Intelligence & ML Engineer', stream: 'B.Tech AI/ML — 4 yrs', exams: ['JEE Main', 'BITSAT'], salary: '₹8–35 LPA', desc: 'Build intelligent systems — machine learning, deep learning, and neural networks.' },
      { name: 'Data Science Engineer', stream: 'B.Tech Data Science — 4 yrs', exams: ['JEE Main', 'State CETs'], salary: '₹7–28 LPA', desc: 'Mine and model large datasets to drive business and research decisions.' },
      { name: 'Cybersecurity Engineer', stream: 'B.Tech Cybersecurity — 4 yrs', exams: ['JEE Main', 'BITSAT'], salary: '₹6–25 LPA', desc: 'Protect digital infrastructure, networks, and data from cyber threats.' },
      { name: 'Cloud Computing Engineer', stream: 'B.Tech Cloud/DevOps — 4 yrs', exams: ['JEE Main', 'State CETs'], salary: '₹6–28 LPA', desc: 'Build and manage cloud platforms — AWS, Azure, GCP — for millions of users.' },
      { name: 'Internet of Things (IoT) Engineer', stream: 'B.Tech IoT — 4 yrs', exams: ['JEE Main', 'State CETs'], salary: '₹5–20 LPA', desc: 'Connect physical devices to the internet — smart homes, factories, and cities.' },
      { name: 'Robotics & Automation Engineer', stream: 'B.Tech Robotics — 4 yrs', exams: ['JEE Main', 'JEE Advanced'], salary: '₹6–22 LPA', desc: 'Design intelligent robots for manufacturing, surgery, and exploration.' },
      { name: 'Aerospace Engineer', stream: 'B.Tech Aerospace — 4 yrs', exams: ['JEE Main', 'IIST Admission Test'], salary: '₹6–20 LPA', desc: 'Design aircraft and spacecraft — work with ISRO, HAL, DRDO, or airlines.' },
      { name: 'Biotechnology Engineer', stream: 'B.Tech Biotechnology — 4 yrs', exams: ['JEE Main', 'CUET', 'ICAR-AIEEA'], salary: '₹4–18 LPA', desc: 'Combine biology and engineering to develop vaccines, medicines, and bio-fuels.' },
      { name: 'Biomedical Engineer', stream: 'B.Tech Biomedical — 4 yrs', exams: ['JEE Main', 'CUET'], salary: '₹4–15 LPA', desc: 'Build MRI machines, prosthetics, and diagnostic equipment for hospitals.' },
      { name: 'Metallurgical & Materials Engineer', stream: 'B.Tech Metallurgy — 4 yrs', exams: ['JEE Main', 'GATE'], salary: '₹5–18 LPA', desc: 'Develop metals, alloys, ceramics, and composites for aerospace, auto, and defence.' },
      { name: 'Mining Engineer', stream: 'B.Tech Mining — 4 yrs', exams: ['JEE Main', 'GATE'], salary: '₹6–20 LPA', desc: 'Design safe extraction of coal, iron ore, and minerals for Indian industry.' },
      { name: 'Petroleum Engineer', stream: 'B.Tech Petroleum — 4 yrs', exams: ['JEE Main', 'ONGC Recruitment'], salary: '₹8–25 LPA', desc: 'Work in oil & gas exploration and refinery operations with ONGC, BPCL.' },
      { name: 'Environmental Engineer', stream: 'B.Tech Environmental — 4 yrs', exams: ['JEE Main', 'GATE'], salary: '₹4–12 LPA', desc: 'Engineer solutions for pollution control, water treatment, and climate impact.' },
      { name: 'Agricultural Engineer', stream: 'B.Tech Agriculture Engineering — 4 yrs', exams: ['JEE Main', 'ICAR-AIEEA'], salary: '₹4–12 LPA', desc: 'Develop irrigation systems, farm machinery, and agri-tech for Indian farming.' },
      { name: 'Food Technology Engineer', stream: 'B.Tech Food Technology — 4 yrs', exams: ['JEE Main', 'ICAR', 'CUET'], salary: '₹4–14 LPA', desc: 'Design food processing, preservation, and safety systems for the FMCG industry.' },
      { name: 'Textile Engineer', stream: 'B.Tech Textile — 4 yrs', exams: ['JEE Main', 'State CETs'], salary: '₹3–12 LPA', desc: 'Develop fabrics, fibres, and manufacturing processes for India\'s textile industry.' },
      { name: 'Automobile / Automotive Engineer', stream: 'B.Tech Automobile — 4 yrs', exams: ['JEE Main', 'State CETs'], salary: '₹4–16 LPA', desc: 'Design vehicles, EV systems, and drivetrains for Tata, Maruti, and global OEMs.' },
      { name: 'Naval Architecture & Marine Engineer', stream: 'B.Tech Naval Arch — 4 yrs', exams: ['JEE Main', 'IMU CET'], salary: '₹5–20 LPA', desc: 'Design ships, submarines, and offshore platforms for the Indian Navy and merchant fleet.' },
      { name: 'Instrumentation & Control Engineer', stream: 'B.Tech Instrumentation — 4 yrs', exams: ['JEE Main', 'GATE'], salary: '₹5–16 LPA', desc: 'Design sensors, measurement systems, and control instruments for industry.' },
      { name: 'Industrial & Production Engineer', stream: 'B.Tech Industrial Engineering — 4 yrs', exams: ['JEE Main', 'GATE'], salary: '₹4–14 LPA', desc: 'Optimise manufacturing systems and supply chains for maximum efficiency.' },
      { name: 'Structural Engineer', stream: 'B.Tech Civil / Structural — 4 yrs', exams: ['JEE Main', 'GATE'], salary: '₹5–15 LPA', desc: 'Ensure buildings, bridges, and dams can safely withstand loads and earthquakes.' },
      { name: 'Electrical & Electronics Engineer', stream: 'B.Tech EEE — 4 yrs', exams: ['JEE Main', 'GATE'], salary: '₹5–16 LPA', desc: 'Combine electrical power systems with consumer electronics design.' },
      { name: 'Renewable Energy Engineer', stream: 'B.Tech Renewable Energy — 4 yrs', exams: ['JEE Main', 'State CETs'], salary: '₹5–18 LPA', desc: 'Design solar, wind, and hydrogen energy systems for a sustainable India.' },
      { name: 'Nuclear Engineer', stream: 'B.Tech Nuclear Engineering — 4 yrs', exams: ['JEE Advanced', 'BARC Exam'], salary: '₹7–22 LPA', desc: 'Work on nuclear reactors and radiation technology at BARC, NPCIL, or DAE.' },
      { name: 'Geotechnical / Geomatics Engineer', stream: 'B.Tech Geo Engineering — 4 yrs', exams: ['JEE Main', 'GATE'], salary: '₹4–14 LPA', desc: 'Study earth materials for construction — tunnels, foundations, and landslide control.' },
      { name: 'Polymer / Plastic Technology Engineer', stream: 'B.Tech Polymer — 4 yrs', exams: ['JEE Main', 'State CETs'], salary: '₹4–14 LPA', desc: 'Develop polymers and plastics for packaging, electronics, and automotive use.' },
      { name: 'Ceramic & Glass Technology Engineer', stream: 'B.Tech Ceramics — 4 yrs', exams: ['JEE Main', 'State CETs'], salary: '₹4–12 LPA', desc: 'Create advanced ceramics for semiconductors, aerospace, and medical applications.' },
      { name: 'Paint & Coatings Technology Engineer', stream: 'B.Tech Paint Technology — 4 yrs', exams: ['JEE Main', 'State CETs'], salary: '₹4–12 LPA', desc: 'Formulate industrial coatings, paints, and surface treatments for various industries.' },
      { name: 'Game / AR / VR Developer (Engineering)', stream: 'B.Tech CSE / Game Dev — 4 yrs', exams: ['JEE Main', 'NID DAT'], salary: '₹4–20 LPA', desc: 'Build immersive games and virtual reality experiences for entertainment and training.' },
    ],
  },
  {
    id: 'medical',
    label: 'Medical & Healthcare',
    icon: '🏥',
    color: { bg: '#ecfdf5', border: '#a7f3d0', text: '#065f46', dot: '#10b981', light: '#d1fae5' },
    interests: ['healthcare', 'science'],
    careers: [
      { name: 'Doctor', stream: 'Science (PCB)', exams: ['NEET-UG'], salary: '₹6–50+ LPA', desc: 'Diagnose and treat patients — the most respected healthcare profession in India.' },
      { name: 'Dentist', stream: 'Science (PCB)', exams: ['NEET-UG'], salary: '₹4–20 LPA', desc: 'Specialize in oral health, dental surgery, and orthodontics.' },
      { name: 'Pharmacist', stream: 'Science (PCB/PCM)', exams: ['GPAT', 'State Pharmacy Entrance'], salary: '₹3–12 LPA', desc: 'Develop and dispense medicines; work in hospitals, retail, and R&D.' },
      { name: 'Nurse', stream: 'Science (PCB)', exams: ['AIIMS BSc Nursing', 'JIPMER Nursing'], salary: '₹3–10 LPA', desc: 'Provide direct patient care in hospitals, clinics, and home settings.' },
      { name: 'Physiotherapist', stream: 'Science (PCB)', exams: ['NEET-UG', 'State Entrance'], salary: '₹3–12 LPA', desc: 'Restore movement and manage pain through physical rehabilitation.' },
      { name: 'Veterinarian', stream: 'Science (PCB)', exams: ['ICAR-AIEEA'], salary: '₹4–15 LPA', desc: 'Treat animals and work in husbandry, wildlife conservation, and research.' },
      { name: 'Ayurvedic Doctor (BAMS)', stream: 'Science (PCB)', exams: ['NEET-UG'], salary: '₹3–12 LPA', desc: 'Practice traditional Indian medicine alongside modern healthcare.' },
      { name: 'Medical Lab Technologist', stream: 'Science (PCB)', exams: ['CUET', 'State Entrance'], salary: '₹3–10 LPA', desc: 'Perform diagnostic tests that help doctors make accurate decisions.' },
      { name: 'Dietitian / Nutritionist', stream: 'Science (PCB)', exams: ['CUET', 'State Entrance'], salary: '₹3–10 LPA', desc: 'Help people manage health through evidence-based diet planning.' },
      { name: 'Optometrist', stream: 'Science (PCB)', exams: ['State Entrance'], salary: '₹3–8 LPA', desc: 'Diagnose and treat vision disorders; prescribe corrective lenses.' },
      { name: 'Radiographer / Radiologist Tech', stream: 'Science (PCB/PCM)', exams: ['CUET', 'State Entrance'], salary: '₹4–15 LPA', desc: 'Operate MRI, X-ray, and CT imaging equipment for diagnosis.' },
      { name: 'Biotechnologist', stream: 'Science (PCB/PCMB)', exams: ['JEE Main', 'CUET', 'ICAR'], salary: '₹4–18 LPA', desc: 'Create medicines, vaccines, and engineered crops using biology.' },
    ],
  },
  {
    id: 'finance',
    label: 'Finance & Commerce',
    icon: '💰',
    color: { bg: '#fffbeb', border: '#fde68a', text: '#92400e', dot: '#f59e0b', light: '#fef3c7' },
    interests: ['finance', 'business'],
    careers: [
      { name: 'Chartered Accountant', stream: 'Commerce', exams: ['CA Foundation', 'CA Intermediate', 'CA Final'], salary: '₹7–30+ LPA', desc: 'The gold standard of Indian accounting — auditing, taxation, and advisory.' },
      { name: 'Company Secretary', stream: 'Commerce', exams: ['CS Foundation', 'CS Executive', 'CS Professional'], salary: '₹5–20 LPA', desc: 'Ensure corporate legal compliance and governance in companies.' },
      { name: 'Investment Banker', stream: 'Commerce / Any', exams: ['CAT/GMAT (MBA)', 'CFA'], salary: '₹10–60+ LPA', desc: 'Help companies raise capital, merge, and list on stock exchanges.' },
      { name: 'Financial Analyst', stream: 'Commerce', exams: ['CFA', 'CAT (MBA)'], salary: '₹5–20 LPA', desc: 'Analyze financial data to guide investment and business decisions.' },
      { name: 'Actuary', stream: 'Commerce / Science (PCM)', exams: ['IAI Actuarial Exams'], salary: '₹8–40 LPA', desc: 'Use advanced maths to assess financial risk for insurance firms.' },
      { name: 'Banking Professional', stream: 'Commerce / Any', exams: ['IBPS PO', 'SBI PO', 'RBI Grade B'], salary: '₹5–15 LPA', desc: 'Build a career in public or private sector banking and finance.' },
      { name: 'Economist', stream: 'Commerce / Arts', exams: ['CUET', 'CAT', 'IES'], salary: '₹6–20 LPA', desc: 'Analyze economic trends to advise governments and corporations.' },
      { name: 'Stock Market Analyst', stream: 'Commerce', exams: ['NISM Certifications', 'CFA'], salary: '₹4–25 LPA', desc: 'Research equities and help investors build wealth through markets.' },
    ],
  },
  {
    id: 'law-govt',
    label: 'Law & Government Services',
    icon: '⚖️',
    color: { bg: '#f8fafc', border: '#e2e8f0', text: '#334155', dot: '#64748b', light: '#f1f5f9' },
    interests: ['government', 'education'],
    careers: [
      { name: 'IAS Officer', stream: 'Any (Arts preferred)', exams: ['UPSC Civil Services'], salary: '₹8–20 LPA', desc: 'The most prestigious civil service — shape national and state policy.' },
      { name: 'IPS Officer', stream: 'Any', exams: ['UPSC Civil Services'], salary: '₹8–18 LPA', desc: 'Lead law enforcement and criminal investigation as a police officer.' },
      { name: 'Lawyer', stream: 'Any (Humanities ideal)', exams: ['CLAT', 'AILET'], salary: '₹4–50+ LPA', desc: 'Represent clients in court and draft contracts, laws, and agreements.' },
      { name: 'Defence Officer', stream: 'Science (PCM) / Any', exams: ['NDA', 'CDS'], salary: '₹7–20 LPA + perks', desc: 'Serve the nation in the Army, Navy, or Air Force as a commissioned officer.' },
      { name: 'Judiciary / Judge', stream: 'Any (Law degree needed)', exams: ['Judicial Services Exam'], salary: '₹10–30 LPA', desc: 'Adjudicate disputes and interpret laws at district and high courts.' },
      { name: 'Foreign Service Officer (IFS)', stream: 'Any', exams: ['UPSC Civil Services'], salary: '₹8–20 LPA', desc: 'Represent India abroad as a diplomat and shape foreign policy.' },
      { name: 'Income Tax / GST Officer', stream: 'Any', exams: ['SSC CGL', 'UPSC'], salary: '₹5–12 LPA', desc: 'Ensure tax compliance and investigate financial fraud for the government.' },
      { name: 'Railway Officer', stream: 'Engineering / Any', exams: ['RRB JE', 'RRB NTPC', 'UPSC IRPS'], salary: '₹5–15 LPA', desc: "Manage India's largest rail network in operations, engineering, or admin." },
      { name: 'Public Policy Analyst', stream: 'Any (Social Sciences preferred)', exams: ['CAT/GRE (PG)', 'TISS Entrance'], salary: '₹6–25 LPA', desc: 'Design and evaluate government programs at think tanks and policy bodies.' },
    ],
  },
  {
    id: 'creative-design',
    label: 'Creative Arts & Design',
    icon: '🎨',
    color: { bg: '#f5f3ff', border: '#ddd6fe', text: '#5b21b6', dot: '#8b5cf6', light: '#ede9fe' },
    interests: ['creative'],
    careers: [
      { name: 'Fashion Designer', stream: 'Any (Arts preferred)', exams: ['NIFT Entrance', 'NID DAT', 'Pearl Academy'], salary: '₹4–20 LPA', desc: 'Create clothing, accessories, and collections for fashion brands.' },
      { name: 'Graphic Designer', stream: 'Any', exams: ['NID DAT', 'UCEED'], salary: '₹3–15 LPA', desc: 'Design visual communication for print, digital, and brand identities.' },
      { name: 'UI/UX Designer', stream: 'Any (tech is an advantage)', exams: ['NID DAT', 'UCEED', 'Self-learn'], salary: '₹5–22 LPA', desc: 'Design intuitive digital products that millions of people use daily.' },
      { name: 'Industrial / Product Designer', stream: 'Any', exams: ['NID DAT', 'UCEED'], salary: '₹5–18 LPA', desc: 'Design everyday objects — from furniture to consumer electronics.' },
      { name: 'Interior Designer', stream: 'Any', exams: ['NID DAT', 'NIFT', 'State Colleges'], salary: '₹3–18 LPA', desc: 'Transform spaces into beautiful, functional environments.' },
      { name: 'Architect', stream: 'Science (PCM)', exams: ['JEE Paper 2 (B.Arch)', 'NATA'], salary: '₹4–20 LPA', desc: 'Design buildings and urban spaces that define how cities look and feel.' },
      { name: 'Jewellery Designer', stream: 'Any', exams: ['NIFT', 'NID', 'Gem & Jewellery Institutes'], salary: '₹3–15 LPA', desc: 'Create gold, silver, and gemstone ornaments for brands and retail.' },
      { name: 'Textile / Apparel Designer', stream: 'Any', exams: ['NIFT Entrance', 'NID DAT'], salary: '₹3–12 LPA', desc: 'Design fabrics, prints, and materials for fashion and home décor.' },
      { name: 'Illustrator / Comic Artist', stream: 'Any', exams: ['NID DAT', 'Portfolio-based admission'], salary: '₹3–15 LPA', desc: 'Create illustrations for books, media, games, and digital content.' },
    ],
  },
  {
    id: 'media-film',
    label: 'Media, Film & Photography',
    icon: '🎬',
    color: { bg: '#fff7ed', border: '#fed7aa', text: '#9a3412', dot: '#ea580c', light: '#ffedd5' },
    interests: ['creative'],
    careers: [
      { name: 'Film Director', stream: 'Any', exams: ['FTII Entrance', 'SRFTI Entrance'], salary: '₹5–Unlimited', desc: 'Direct feature films, OTT series, short films, and commercials.' },
      { name: 'Cinematographer / DOP', stream: 'Any', exams: ['FTII Entrance', 'SRFTI Entrance'], salary: '₹5–30+ LPA', desc: 'Shoot and light films, series, and ads as a Director of Photography.' },
      { name: 'Photographer', stream: 'Any', exams: ['Portfolio-based', 'NID DAT'], salary: '₹3–20 LPA', desc: 'Capture fashion, wildlife, weddings, journalism, and fine art photographs.' },
      { name: 'Screenwriter / Script Writer', stream: 'Any (Arts ideal)', exams: ['FTII', 'NSD', 'Writing Fellowships'], salary: '₹4–25+ LPA', desc: 'Write stories, dialogues, and scripts for films, series, and OTT platforms.' },
      { name: 'Video Editor', stream: 'Any', exams: ['Certificate courses (self-learn)'], salary: '₹3–15 LPA', desc: 'Cut and assemble footage into compelling films and digital content.' },
      { name: 'Sound Designer / Music Producer', stream: 'Any', exams: ['KM Music Conservatory', 'Berklee Online'], salary: '₹3–20 LPA', desc: 'Create soundtracks, background scores, and audio effects for media.' },
      { name: 'Documentary Filmmaker', stream: 'Any', exams: ['FTII', 'AJK MCRC'], salary: '₹3–15 LPA', desc: 'Tell real stories through documentary films for festivals and OTT.' },
      { name: 'Animation and VFX Artist', stream: 'Any (tech advantage)', exams: ['MAAC / Arena Animation', 'NID DAT'], salary: '₹4–18 LPA', desc: 'Create CGI and visual effects for films, games, and streaming content.' },
      { name: 'Journalist', stream: 'Any (Arts ideal)', exams: ['IIMC', 'AJK MCRC', 'State Mass Comm Entrance'], salary: '₹3–18 LPA', desc: 'Report news, investigate stories, and inform the public through media.' },
      { name: 'Advertising Creative Director', stream: 'Any', exams: ['MICA', 'NID', 'Portfolio-based'], salary: '₹6–30 LPA', desc: 'Lead brand campaigns and creative strategy for agencies and companies.' },
    ],
  },
  {
    id: 'science-research',
    label: 'Science & Research',
    icon: '🔬',
    color: { bg: '#ecfeff', border: '#a5f3fc', text: '#164e63', dot: '#06b6d4', light: '#cffafe' },
    interests: ['science', 'technology'],
    careers: [
      { name: 'Data Scientist', stream: 'Science (PCM)', exams: ['JEE Main', 'CUET'], salary: '₹6–25 LPA', desc: 'Extract insights from data using statistics, machine learning, and Python.' },
      { name: 'Space Scientist (ISRO)', stream: 'Science (PCM)', exams: ['JEE Main', 'IIST Admission', 'ISRO Recruitment'], salary: '₹7–20 LPA', desc: 'Work on satellite missions and rocket design at ISRO and DRDO.' },
      { name: 'Agricultural Scientist', stream: 'Science (PCB/PCMB)', exams: ['ICAR-AIEEA'], salary: '₹4–15 LPA', desc: 'Develop new crop varieties and sustainable farming methods.' },
      { name: 'Marine Biologist', stream: 'Science (PCB)', exams: ['CUET', 'JNU Entrance'], salary: '₹4–15 LPA', desc: 'Study ocean ecosystems, marine life, and aquatic conservation.' },
      { name: 'Forensic Scientist', stream: 'Science (PCB/PCM)', exams: ['CUET', 'CBI/Police Recruitment'], salary: '₹4–14 LPA', desc: 'Analyze crime scene evidence to assist law enforcement agencies.' },
      { name: 'Environmental Scientist', stream: 'Science (PCB/PCM)', exams: ['CUET', 'JNU', 'State Universities'], salary: '₹4–15 LPA', desc: 'Study and solve problems like climate change, pollution, and deforestation.' },
      { name: 'Food Technologist', stream: 'Science (PCB/PCM)', exams: ['ICAR', 'CUET'], salary: '₹3–12 LPA', desc: 'Develop, test, and improve food products for safety and quality.' },
      { name: 'Nuclear Scientist / Physicist', stream: 'Science (PCM)', exams: ['JEST', 'JEE Advanced', 'BARC Recruitment'], salary: '₹7–20 LPA', desc: 'Research nuclear energy and quantum phenomena at BARC or TIFR.' },
      { name: 'Geologist', stream: 'Science (PCM)', exams: ['CUET', 'IIT JAM'], salary: '₹4–18 LPA', desc: "Study the earth's structure, minerals, and natural disaster patterns." },
    ],
  },
  {
    id: 'performing-arts',
    label: 'Performing Arts & Entertainment',
    icon: '🎭',
    color: { bg: '#fdf2f8', border: '#f9a8d4', text: '#9d174d', dot: '#ec4899', light: '#fce7f3' },
    interests: ['creative'],
    careers: [
      { name: 'Actor (Theatre / Film / OTT)', stream: 'Any', exams: ['NSD Entrance', 'FTII Acting', 'Film School Auditions'], salary: '₹3–Unlimited', desc: 'Perform on stage, screen, or digital platforms as a professional actor.' },
      { name: 'Classical Dancer', stream: 'Any', exams: ['Sangeet Natak Akademi', 'University Auditions'], salary: '₹3–15 LPA', desc: 'Master Bharatanatyam, Kathak, Odissi, or Manipuri for stage and film.' },
      { name: 'Contemporary / Bollywood Dancer', stream: 'Any', exams: ['Dance Academy Admissions', 'Auditions'], salary: '₹3–20 LPA', desc: 'Perform in films, music videos, reality shows, and live events.' },
      { name: 'Singer / Vocalist', stream: 'Any', exams: ['Sangeet Mahavidyalaya', 'Reality Show Auditions'], salary: '₹3–Unlimited', desc: 'Perform classical, Bollywood, folk, or independent music professionally.' },
      { name: 'Musician / Instrumentalist', stream: 'Any', exams: ['Gandharva Mahavidyalaya', 'Trinity College Exams'], salary: '₹3–20 LPA', desc: 'Play instruments in concerts, recordings, film scores, and live events.' },
      { name: 'Stand-up Comedian', stream: 'Any', exams: ['Open Mics', 'Comedy Club Nights'], salary: '₹3–Unlimited', desc: 'Perform comedy sets, develop original material, and build an audience.' },
      { name: 'Theatre Director / Artist', stream: 'Any', exams: ['NSD Entrance', 'State Drama School Entrance'], salary: '₹3–15 LPA', desc: 'Act in or direct stage productions for theatre companies and festivals.' },
      { name: 'Choreographer', stream: 'Any', exams: ['Dance Academy Diploma', 'Portfolio Auditions'], salary: '₹4–20 LPA', desc: 'Design dance sequences for films, events, and performance companies.' },
    ],
  },
  {
    id: 'sports-fitness',
    label: 'Sports & Fitness',
    icon: '🏆',
    color: { bg: '#f0fdf4', border: '#bbf7d0', text: '#14532d', dot: '#16a34a', light: '#dcfce7' },
    interests: ['healthcare'],
    careers: [
      { name: 'Professional Cricketer', stream: 'Any', exams: ['State U-19 Trials', 'NCA Academy Selection'], salary: '₹5–Unlimited', desc: 'Play district, state, and national cricket aiming for the Indian team.' },
      { name: 'Football / Hockey Player', stream: 'Any', exams: ['SAI Academy Trials', 'I-League / Hockey India Selection'], salary: '₹3–20 LPA', desc: "Pursue a career in India's growing football and hockey leagues." },
      { name: 'Tennis / Badminton Player', stream: 'Any', exams: ['AITA / BAI Academy Trials'], salary: '₹4–Unlimited', desc: 'Compete at national and international tournaments, aiming for grand titles.' },
      { name: 'Athlete (Track & Field)', stream: 'Any', exams: ['SAI NIS Academy', 'State Athletics Championships'], salary: '₹3–15 LPA', desc: 'Compete in sprints, throws, jumps, or marathons at national level and Olympics.' },
      { name: 'Sports Coach / Trainer', stream: 'Any', exams: ['NIS Patiala Diploma', 'NSNIS Coaching Certificate'], salary: '₹3–15 LPA', desc: 'Train athletes at academies, schools, and professional sports franchises.' },
      { name: 'Sports Physiotherapist', stream: 'Science (PCB)', exams: ['NEET-UG', 'State Physiotherapy Entrance'], salary: '₹4–15 LPA', desc: 'Treat sports injuries and keep athletes in peak physical condition.' },
      { name: 'Yoga Instructor / Wellness Coach', stream: 'Any', exams: ['QCI Yoga Certification', 'AYUSH Ministry Courses'], salary: '₹3–15 LPA', desc: 'Teach yoga and wellness to individuals, corporates, and retreat centres.' },
      { name: 'Sports Journalist / Commentator', stream: 'Any', exams: ['IIMC', 'AJK MCRC'], salary: '₹4–18 LPA', desc: 'Cover sports events, analyse matches, and commentate for TV or digital media.' },
    ],
  },
  {
    id: 'education-social',
    label: 'Education & Social Impact',
    icon: '📚',
    color: { bg: '#fefce8', border: '#fef08a', text: '#713f12', dot: '#ca8a04', light: '#fef9c3' },
    interests: ['education', 'government'],
    careers: [
      { name: 'Teacher', stream: 'Any', exams: ['CTET', 'State TET', 'B.Ed Entrance'], salary: '₹3–10 LPA', desc: 'Inspire future generations in primary or secondary school classrooms.' },
      { name: 'College Professor / Researcher', stream: 'Any (Subject Expertise)', exams: ['UGC NET', 'SET'], salary: '₹5–20 LPA', desc: 'Teach and conduct research at colleges, universities, and research institutes.' },
      { name: 'Psychologist', stream: 'Any (Arts/Science)', exams: ['CUET', 'State PG Entrance'], salary: '₹4–18 LPA', desc: 'Help people manage mental health, career choices, and personal challenges.' },
      { name: 'Social Worker', stream: 'Any', exams: ['TISS Entrance', 'CUET'], salary: '₹3–12 LPA', desc: 'Drive community development and grassroots change through NGOs and government.' },
      { name: 'Special Educator', stream: 'Any', exams: ['RCI Registration', 'B.Ed Special Education'], salary: '₹3–8 LPA', desc: 'Teach and support children with learning disabilities and special needs.' },
    ],
  },
  {
    id: 'hospitality-culinary',
    label: 'Hospitality, Travel & Culinary',
    icon: '🍽️',
    color: { bg: '#fff1f2', border: '#fecdd3', text: '#881337', dot: '#f43f5e', light: '#ffe4e6' },
    interests: ['business', 'creative'],
    careers: [
      { name: 'Chef / Culinary Artist', stream: 'Any', exams: ['NCHM JEE', 'Private Culinary School Entrance'], salary: '₹3–20 LPA', desc: 'Create cuisine in hotels, restaurants, and as an independent food professional.' },
      { name: 'Hotel Manager', stream: 'Any', exams: ['NCHM JEE', 'IHM Entrance'], salary: '₹5–25 LPA', desc: 'Lead operations at luxury hotels and global hospitality chains.' },
      { name: 'Travel & Tourism Professional', stream: 'Any', exams: ['NCHM JEE', 'State Tourism Courses'], salary: '₹3–15 LPA', desc: 'Plan travel experiences and manage tour companies or tourism boards.' },
      { name: 'Airline Cabin Crew', stream: 'Any (English proficiency required)', exams: ['Airline Recruitment / Selection Process'], salary: '₹4–12 LPA', desc: 'Ensure passenger safety and comfort on domestic and international flights.' },
      { name: 'Event Planner / Manager', stream: 'Any', exams: ['Hotel Management Entrance', 'Event Management Degree'], salary: '₹3–18 LPA', desc: 'Organize weddings, corporate events, concerts, and large-scale gatherings.' },
      { name: 'Pastry Chef / Baker', stream: 'Any', exams: ['IHM Entrance', 'Culinary School Admission'], salary: '₹3–12 LPA', desc: 'Create pastries, cakes, and desserts for bakeries, hotels, and private clients.' },
      { name: 'Food Stylist / Food Content Creator', stream: 'Any', exams: ['No formal exam — portfolio/skill-based'], salary: '₹3–20 LPA', desc: 'Style and photograph food for brands, cookbooks, and digital platforms.' },
    ],
  },
  {
    id: 'digital-emerging',
    label: 'Digital & Emerging Careers',
    icon: '🚀',
    color: { bg: '#eef2ff', border: '#c7d2fe', text: '#3730a3', dot: '#6366f1', light: '#e0e7ff' },
    interests: ['technology', 'business', 'creative'],
    careers: [
      { name: 'Content Creator / YouTuber', stream: 'Any', exams: ['No formal exam — platform-based'], salary: '₹3–Unlimited', desc: 'Build an audience on YouTube, Instagram, or podcasts and monetise content.' },
      { name: 'Digital Marketer', stream: 'Any', exams: ['Google / Meta / HubSpot Certifications'], salary: '₹4–18 LPA', desc: 'Grow brands through SEO, social media, paid ads, and email campaigns.' },
      { name: 'AI/ML Engineer', stream: 'Science (PCM)', exams: ['JEE Main', 'BITSAT'], salary: '₹8–30 LPA', desc: 'Build intelligent systems using machine learning and deep learning models.' },
      { name: 'Cybersecurity Analyst', stream: 'Science (PCM)', exams: ['JEE Main', 'CEH Certification'], salary: '₹6–25 LPA', desc: 'Protect companies and government systems from hackers and cyber threats.' },
      { name: 'Cloud Engineer', stream: 'Science (PCM)', exams: ['JEE Main', 'AWS / Azure Certifications'], salary: '₹6–28 LPA', desc: 'Build and manage cloud infrastructure powering apps used by millions.' },
      { name: 'Game Developer', stream: 'Science (PCM) / Any', exams: ['JEE Main', 'NID', 'MAAC'], salary: '₹4–20 LPA', desc: 'Design and build video games for PC, mobile, and consoles.' },
      { name: 'Blockchain / Web3 Developer', stream: 'Science (PCM)', exams: ['JEE Main', 'Online Certifications'], salary: '₹8–35 LPA', desc: 'Build decentralised applications and smart contracts for fintech and tech.' },
      { name: 'E-commerce / D2C Entrepreneur', stream: 'Any', exams: ['CAT/MBA (optional)', 'Self-start'], salary: '₹3–Unlimited', desc: 'Launch or scale an online business selling products or services directly.' },
      { name: 'UX Researcher', stream: 'Any', exams: ['MICA', 'NID', 'Psychology Degree'], salary: '₹5–20 LPA', desc: 'Research how users think and feel to improve digital products and interfaces.' },
      { name: 'Podcast Host / Radio Presenter', stream: 'Any', exams: ['IIMC', 'Mass Comm Entrance', 'Self-start'], salary: '₹3–15 LPA', desc: 'Host audio shows covering news, culture, tech, and entertainment.' },
    ],
  },
]

export function getTenthCatalogue(interests = []) {
  if (!interests.length) return TENTH_CATALOGUE
  return [...TENTH_CATALOGUE].sort((a, b) => {
    const sa = a.interests.filter(i => interests.includes(i)).length
    const sb = b.interests.filter(i => interests.includes(i)).length
    return sb - sa
  })
}

// ── Comprehensive catalogue for Class 12 students (stream-specific) ───────────

const PCM_CATEGORIES = [
  {
    id: 'engineering-pcm',
    label: 'Engineering (B.Tech / BE)',
    icon: '⚙️',
    color: { bg: '#eff6ff', border: '#bfdbfe', text: '#1d4ed8', dot: '#3b82f6', light: '#dbeafe' },
    interests: ['technology', 'science'],
    careers: [
      { name: 'Computer Science Engineer', stream: 'B.Tech CS/IT — 4 years', exams: ['JEE Main', 'JEE Advanced', 'BITSAT'], salary: '₹6–30 LPA', desc: 'Study DSA, OS, networks, and AI to build software at scale. Highest-demand engineering branch.' },
      { name: 'Mechanical Engineer', stream: 'B.Tech Mechanical — 4 years', exams: ['JEE Main', 'BITSAT', 'State CETs'], salary: '₹4–15 LPA', desc: 'Design machines, engines, thermal systems, and manufacturing processes.' },
      { name: 'Civil Engineer', stream: 'B.Tech Civil — 4 years', exams: ['JEE Main', 'State CETs'], salary: '₹4–12 LPA', desc: 'Build roads, bridges, dams, and urban infrastructure.' },
      { name: 'Electrical Engineer', stream: 'B.Tech EE — 4 years', exams: ['JEE Main', 'State CETs'], salary: '₹5–14 LPA', desc: 'Work on power grids, motors, and electrical control systems.' },
      { name: 'Electronics and Communication Engineer', stream: 'B.Tech ECE — 4 years', exams: ['JEE Main', 'BITSAT'], salary: '₹4–18 LPA', desc: 'Design communication networks, embedded systems, and semiconductor chips.' },
      { name: 'Aerospace Engineer', stream: 'B.Tech Aerospace — 4 years', exams: ['JEE Main', 'IIST Admission Test'], salary: '₹6–20 LPA', desc: 'Design aircraft and spacecraft — work with ISRO, HAL, or DRDO.' },
      { name: 'Chemical Engineer', stream: 'B.Tech Chemical — 4 years', exams: ['JEE Main', 'State CETs'], salary: '₹5–16 LPA', desc: 'Design industrial processes for pharma, oil refining, and materials.' },
      { name: 'Robotics & Automation Engineer', stream: 'B.Tech Robotics/Mechatronics — 4 years', exams: ['JEE Main', 'JEE Advanced'], salary: '₹6–22 LPA', desc: 'Build intelligent machines combining mechanics, electronics, and software.' },
      { name: 'Biomedical Engineer', stream: 'B.Tech Biomedical — 4 years', exams: ['JEE Main', 'CUET'], salary: '₹4–15 LPA', desc: 'Build medical devices, prosthetics, and diagnostic equipment for hospitals.' },
      { name: 'Environmental Engineer', stream: 'B.Tech Environmental — 4 years', exams: ['JEE Main', 'State CETs'], salary: '₹4–12 LPA', desc: 'Solve pollution, wastewater, and climate engineering challenges.' },
      { name: 'Petroleum Engineer', stream: 'B.Tech Petroleum/Mining — 4 years', exams: ['JEE Main', 'ONGC Recruitment'], salary: '₹8–25 LPA', desc: 'Work in oil, gas, and mineral extraction with ONGC and private firms.' },
    ],
  },
  {
    id: 'architecture-design-pcm',
    label: 'Architecture & Design',
    icon: '🏛️',
    color: { bg: '#f5f3ff', border: '#ddd6fe', text: '#5b21b6', dot: '#8b5cf6', light: '#ede9fe' },
    interests: ['creative', 'technology'],
    careers: [
      { name: 'Architect', stream: 'B.Arch — 5 years', exams: ['JEE Paper 2 (B.Arch)', 'NATA'], salary: '₹4–20 LPA', desc: 'Design buildings and urban spaces — PCM is required for B.Arch at IITs/NITs.' },
      { name: 'Urban / Town Planner', stream: 'B.Plan — 4 years', exams: ['JEE Paper 2', 'NATA', 'CUET'], salary: '₹5–18 LPA', desc: 'Plan cities, smart urban infrastructure, and transport networks.' },
      { name: 'UI/UX Designer', stream: 'B.Des Product Design — 4 years', exams: ['UCEED', 'NID DAT'], salary: '₹5–22 LPA', desc: 'Design intuitive digital products and interfaces used by millions.' },
      { name: 'Industrial / Product Designer', stream: 'B.Des Industrial Design — 4 years', exams: ['NID DAT', 'UCEED'], salary: '₹5–18 LPA', desc: 'Design physical products — from consumer electronics to vehicles.' },
      { name: 'Landscape Architect', stream: 'B.Arch / B.LA — 4–5 years', exams: ['JEE Paper 2', 'NATA'], salary: '₹4–15 LPA', desc: 'Design parks, campuses, and outdoor public environments.' },
    ],
  },
  {
    id: 'bsc-pcm',
    label: 'B.Sc Science Degrees',
    icon: '🔭',
    color: { bg: '#ecfeff', border: '#a5f3fc', text: '#164e63', dot: '#06b6d4', light: '#cffafe' },
    interests: ['science', 'technology'],
    careers: [
      { name: 'B.Sc Physics (Hons)', stream: 'B.Sc Physics — 3 years', exams: ['CUET', 'IISER Aptitude Test', 'JNU Entrance'], salary: '₹4–15 LPA', desc: 'Study quantum mechanics, optics, and electromagnetism — gateway to research or teaching.' },
      { name: 'B.Sc Mathematics (Hons)', stream: 'B.Sc Mathematics — 3 years', exams: ['CUET', 'IISER Aptitude Test', 'CMI Entrance'], salary: '₹5–20 LPA', desc: 'Master pure and applied maths — leads to Data Science, Finance, or Research.' },
      { name: 'B.Sc Statistics', stream: 'B.Sc Statistics — 3 years', exams: ['CUET', 'ISI Entrance', 'CMI Entrance'], salary: '₹5–20 LPA', desc: 'Build skills in data analysis, probability, and statistical modelling.' },
      { name: 'B.Sc Computer Science', stream: 'B.Sc CS — 3 years', exams: ['CUET', 'DU / State University Entrance'], salary: '₹4–18 LPA', desc: 'Study programming, algorithms, and databases — lower fees than B.Tech.' },
      { name: 'B.Sc Electronics', stream: 'B.Sc Electronics — 3 years', exams: ['CUET', 'State University Entrance'], salary: '₹4–12 LPA', desc: 'Study circuit design, embedded systems, and signal processing.' },
      { name: 'BS Research (IISER / IISc)', stream: 'BS / BS-MS Dual Degree — 5 years', exams: ['IISER Aptitude Test', 'KVPY / JEE Main'], salary: '₹8–25 LPA', desc: "India's top science institutes — rigorous research degree for future scientists." },
    ],
  },
  {
    id: 'research-isro-pcm',
    label: 'Research, ISRO & Space Science',
    icon: '🚀',
    color: { bg: '#eef2ff', border: '#c7d2fe', text: '#3730a3', dot: '#6366f1', light: '#e0e7ff' },
    interests: ['science', 'technology'],
    careers: [
      { name: 'Space Scientist (ISRO)', stream: 'B.Tech / IIST Degree → ISRO Scientist', exams: ['JEE Main', 'IIST Admission Test', 'ISRO Recruitment Exam'], salary: '₹7–20 LPA', desc: 'Work on satellite launches, rocket design, and planetary exploration at ISRO.' },
      { name: 'Nuclear Scientist (BARC)', stream: 'B.Tech/B.Sc Physics → BARC', exams: ['JEE Advanced', 'GATE', 'BARC OCES'], salary: '₹7–20 LPA', desc: 'Research nuclear energy, reactor design, and radiation physics at BARC.' },
      { name: 'Data Scientist', stream: 'B.Tech CS / B.Sc Maths → Data Science', exams: ['JEE Main', 'CUET'], salary: '₹6–30 LPA', desc: 'Build AI models and extract insights from datasets using Python and ML.' },
      { name: 'Geologist / Geophysicist', stream: 'B.Sc Geology — 3 years', exams: ['CUET', 'IIT JAM'], salary: '₹4–18 LPA', desc: "Study the earth's crust, minerals, and seismic activity." },
      { name: 'Meteorologist', stream: 'B.Sc Meteorology / Atmospheric Science', exams: ['CUET', 'IMD Recruitment'], salary: '₹5–12 LPA', desc: 'Forecast weather and study climate systems at IMD and research bodies.' },
    ],
  },
  {
    id: 'defence-pcm',
    label: 'Defence Services',
    icon: '🎖️',
    color: { bg: '#f8fafc', border: '#e2e8f0', text: '#334155', dot: '#64748b', light: '#f1f5f9' },
    interests: ['government'],
    careers: [
      { name: 'Defence Officer', stream: 'NDA → Army / Navy / Air Force — 3 years + training (PCM mandatory)', exams: ['NDA Exam (UPSC)', 'SSB Interview'], salary: '₹7–20 LPA + perks', desc: 'Join the Army, Navy, or Air Force as a commissioned officer via NDA after Class 12 — PCM opens all three branches.' },
      { name: 'Indian Navy (Sailor / MR)', stream: 'Navy Sailor / MR Recruitment', exams: ['Navy MR / SSR Exam', 'NDA Exam'], salary: '₹4–18 LPA + perks', desc: 'Serve in the Indian Navy as a sailor — non-officer technical route for PCM students.' },
    ],
  },
  {
    id: 'diploma-pcm',
    label: 'Diploma & Short-Track Paths',
    icon: '📜',
    color: { bg: '#fefce8', border: '#fef08a', text: '#713f12', dot: '#ca8a04', light: '#fef9c3' },
    interests: ['technology'],
    careers: [
      { name: 'Polytechnic Diploma (Lateral Entry)', stream: '3-year Diploma → B.Tech 2nd Year Lateral', exams: ['State Polytechnic Entrance', 'Lateral Entry Test'], salary: '₹3–10 LPA', desc: 'Practical 3-year diploma allowing direct entry to B.Tech 2nd year.' },
      { name: 'Web / App Developer (Bootcamp)', stream: '6-month Coding Bootcamp', exams: ['No entrance — portfolio-based'], salary: '₹4–18 LPA', desc: 'Build full-stack apps in 6 months and enter the tech industry quickly.' },
      { name: 'Animation & VFX (Diploma)', stream: 'MAAC / Arena / State Institute', exams: ['Institute Entrance / Portfolio'], salary: '₹3–15 LPA', desc: 'Create CGI and visual effects for films, ads, and games.' },
      { name: 'Automobile / EV Technician (Diploma)', stream: 'Diploma Automobile Engineering', exams: ['State Polytechnic Entrance'], salary: '₹3–10 LPA', desc: 'Work in automotive service, electric vehicles, and manufacturing.' },
    ],
  },
  {
    id: 'sports-fitness-pcm',
    label: 'Sports & Fitness',
    icon: '🏆',
    color: { bg: '#f0fdf4', border: '#bbf7d0', text: '#14532d', dot: '#16a34a', light: '#dcfce7' },
    interests: ['healthcare'],
    careers: [
      { name: 'Professional Cricketer', stream: 'State Cricket Academy + Any degree optional', exams: ['State U-19 Trials', 'NCA Academy Selection'], salary: '₹5–Unlimited', desc: 'Play district, state, and national cricket aiming for the Indian team and IPL.' },
      { name: 'Football / Hockey Player', stream: 'SAI / Club Academy + Any degree', exams: ['SAI Academy Trials', 'I-League / Hockey India Trials'], salary: '₹3–20 LPA', desc: "Pursue a professional career in India's growing football and hockey leagues." },
      { name: 'Tennis / Badminton Player', stream: 'AITA / BAI Academy + Any degree', exams: ['AITA / BAI Academy Trials'], salary: '₹4–Unlimited', desc: 'Compete at national and international tournaments, aiming for grand titles.' },
      { name: 'Athlete (Track & Field)', stream: 'SAI NIS Academy + B.Sc Physical Education', exams: ['SAI NIS Academy', 'State Athletics Championships'], salary: '₹3–15 LPA', desc: 'Compete in sprints, throws, jumps, and marathons at national level.' },
      { name: 'Sports Coach / Trainer', stream: 'NIS Patiala Diploma / B.Sc Physical Education', exams: ['NIS Patiala Diploma', 'NSNIS Coaching Certificate'], salary: '₹3–15 LPA', desc: 'Train athletes at academies, schools, and professional sports franchises.' },
      { name: 'Sports Physiotherapist', stream: 'NEET-UG → BPT — 4.5 years', exams: ['NEET-UG', 'State Physiotherapy Entrance'], salary: '₹4–15 LPA', desc: 'Treat sports injuries and keep athletes in peak physical condition.' },
      { name: 'Yoga Instructor / Wellness Coach', stream: 'QCI Yoga Certification + Any degree', exams: ['QCI Yoga Certification', 'AYUSH Ministry Courses'], salary: '₹3–15 LPA', desc: 'Teach yoga and wellness to individuals, corporates, and retreat centres.' },
      { name: 'Sports Journalist / Commentator', stream: 'BJMC / BA Mass Comm → Sports Coverage', exams: ['IIMC Entrance', 'State Mass Comm Entrance'], salary: '₹4–18 LPA', desc: 'Cover sports events, analyse matches, and commentate for TV or digital media.' },
    ],
  },
  {
    id: 'education-social-pcm',
    label: 'Education & Social Impact',
    icon: '📚',
    color: { bg: '#fefce8', border: '#fef08a', text: '#713f12', dot: '#ca8a04', light: '#fef9c3' },
    interests: ['education', 'government'],
    careers: [
      { name: 'Teacher', stream: 'B.Sc + B.Ed — 2 years', exams: ['CTET', 'State TET', 'B.Ed Entrance'], salary: '₹3–10 LPA', desc: 'Teach Science or Maths at secondary schools — PCM opens teaching roles in core subjects.' },
      { name: 'College Professor / Researcher', stream: 'M.Sc / M.Tech → UGC NET → Assistant Professor', exams: ['UGC NET', 'SET', 'GATE', 'CSIR NET'], salary: '₹5–20 LPA', desc: 'Teach and conduct research at colleges and universities after UGC NET.' },
      { name: 'Psychologist', stream: 'BA / BSc Psychology + MA Psychology — 5 years', exams: ['CUET', 'State PG Entrance'], salary: '₹4–18 LPA', desc: 'Help people manage mental health, career choices, and personal challenges.' },
      { name: 'Social Worker', stream: 'BSW → MSW at TISS — 5 years', exams: ['TISS Entrance', 'CUET'], salary: '₹3–12 LPA', desc: 'Drive community development and grassroots change through NGOs.' },
      { name: 'Special Educator', stream: 'B.Ed Special Education — 2 years (after any degree)', exams: ['RCI Registration', 'B.Ed Special Education'], salary: '₹3–8 LPA', desc: 'Teach and support children with learning disabilities and special needs.' },
    ],
  },
  {
    id: 'hospitality-culinary-pcm',
    label: 'Hospitality, Travel & Culinary',
    icon: '🍽️',
    color: { bg: '#fff1f2', border: '#fecdd3', text: '#881337', dot: '#f43f5e', light: '#ffe4e6' },
    interests: ['business', 'creative'],
    careers: [
      { name: 'Hotel Manager', stream: 'BHM / IHM Diploma — 3–4 years', exams: ['NCHM JEE', 'IHM Entrance'], salary: '₹5–25 LPA', desc: 'Lead operations at luxury hotels and global hospitality chains.' },
      { name: 'Chef / Culinary Artist', stream: 'Diploma Culinary Arts (IHM) — 1–3 years', exams: ['NCHM JEE', 'IHM Entrance'], salary: '₹3–20 LPA', desc: 'Create cuisine in top hotels, restaurants, and as an independent food professional.' },
      { name: 'Travel & Tourism Professional', stream: 'B.Sc Tourism / BHM — 3 years', exams: ['NCHM JEE', 'State Tourism Courses'], salary: '₹3–15 LPA', desc: 'Plan travel experiences and manage tour companies or tourism boards.' },
      { name: 'Airline Cabin Crew', stream: 'Airline-specific training (any degree)', exams: ['Airline Recruitment'], salary: '₹4–12 LPA', desc: 'Ensure passenger safety and comfort on domestic and international flights.' },
      { name: 'Event Planner / Manager', stream: 'BHM / Event Management Degree — 3 years', exams: ['NCHM JEE', 'Hotel Management Entrance'], salary: '₹3–18 LPA', desc: 'Plan and execute weddings, corporate events, and large-scale gatherings.' },
      { name: 'Pastry Chef / Baker', stream: 'Culinary Arts Diploma (IHM) — 1–2 years', exams: ['IHM Entrance', 'Culinary School Admission'], salary: '₹3–12 LPA', desc: 'Create pastries, cakes, and desserts for bakeries, hotels, and private clients.' },
      { name: 'Food Stylist / Food Content Creator', stream: 'Culinary / Photography / Mass Comm — self-start', exams: ['No formal exam — portfolio / skill-based'], salary: '₹3–20 LPA', desc: 'Style and photograph food for brands, cookbooks, and digital platforms.' },
    ],
  },
  {
    id: 'digital-emerging-pcm',
    label: 'Digital & Emerging Careers',
    icon: '🚀',
    color: { bg: '#eef2ff', border: '#c7d2fe', text: '#3730a3', dot: '#6366f1', light: '#e0e7ff' },
    interests: ['technology', 'business', 'creative'],
    careers: [
      { name: 'AI/ML Engineer', stream: 'B.Tech CS / AI — 4 years → AI/ML specialisation', exams: ['JEE Main', 'BITSAT'], salary: '₹8–30 LPA', desc: 'Build intelligent systems using machine learning and deep learning models.' },
      { name: 'Cybersecurity Analyst', stream: 'B.Tech CS → CEH / OSCP Certification', exams: ['JEE Main', 'CEH Certification'], salary: '₹6–25 LPA', desc: 'Protect companies and government systems from hackers and cyber threats.' },
      { name: 'Cloud Engineer', stream: 'B.Tech CS / ECE → AWS / Azure Certifications', exams: ['JEE Main', 'AWS / Azure Certifications'], salary: '₹6–28 LPA', desc: 'Build and manage cloud infrastructure powering apps used by millions.' },
      { name: 'Game Developer', stream: 'B.Tech CS / B.Des → Game Development', exams: ['JEE Main', 'MAAC / Arena Animation Admission'], salary: '₹4–20 LPA', desc: 'Design and build video games for PC, mobile, and consoles.' },
      { name: 'Blockchain / Web3 Developer', stream: 'B.Tech CS → Solidity / Web3 Certifications', exams: ['JEE Main', 'Online Certifications'], salary: '₹8–35 LPA', desc: 'Build decentralised applications and smart contracts for fintech and tech.' },
      { name: 'Content Creator / YouTuber', stream: 'Self-start on YouTube / Instagram (any degree)', exams: ['No formal exam — platform-based'], salary: '₹3–Unlimited', desc: 'Build an audience on YouTube, Instagram, or podcasts and monetise content.' },
      { name: 'Digital Marketer', stream: 'BBA / B.Tech + Google / Meta Certifications', exams: ['Google / Meta / HubSpot Certifications'], salary: '₹4–18 LPA', desc: 'Grow brands through SEO, social media, paid ads, and email campaigns.' },
      { name: 'E-commerce / D2C Entrepreneur', stream: 'B.Tech / BBA → Self-start with execution', exams: ['No formal exam — execution-based'], salary: '₹3–Unlimited', desc: 'Launch or scale an online business selling products or services directly.' },
      { name: 'UX Researcher', stream: 'B.Des / B.Tech + Psychology / HCI', exams: ['UCEED', 'NID DAT'], salary: '₹5–20 LPA', desc: 'Research how users think and feel to improve digital products and interfaces.' },
      { name: 'Podcast Host / Radio Presenter', stream: 'BJMC / Mass Comm or self-start podcast', exams: ['IIMC Entrance', 'Mass Comm Entrance'], salary: '₹3–15 LPA', desc: 'Host audio shows covering tech, culture, and entertainment.' },
    ],
  },
]

const PCB_CATEGORIES = [
  {
    id: 'medical-pcb',
    label: 'Medical Degrees (NEET-UG)',
    icon: '🏥',
    color: { bg: '#ecfdf5', border: '#a7f3d0', text: '#065f46', dot: '#10b981', light: '#d1fae5' },
    interests: ['healthcare', 'science'],
    careers: [
      { name: 'Doctor', stream: 'MBBS — 5.5 years (incl. internship)', exams: ['NEET-UG'], salary: '₹6–50+ LPA', desc: 'Become a doctor via MBBS at a government or private medical college.' },
      { name: 'Dentist', stream: 'BDS — 5 years', exams: ['NEET-UG'], salary: '₹4–20 LPA', desc: 'Specialize in oral health, dental surgery, and orthodontics.' },
      { name: 'Ayurvedic Doctor (BAMS)', stream: 'BAMS — 5.5 years', exams: ['NEET-UG'], salary: '₹3–12 LPA', desc: 'Practice Ayurveda — traditional Indian medicine recognised by AYUSH Ministry.' },
      { name: 'Homoeopathic Doctor (BHMS)', stream: 'BHMS — 5.5 years', exams: ['NEET-UG'], salary: '₹3–10 LPA', desc: 'Practice homoeopathy at hospitals, clinics, and private practice.' },
      { name: 'Siddha / Unani Doctor (BUMS)', stream: 'BUMS — 5.5 years', exams: ['NEET-UG'], salary: '₹3–10 LPA', desc: 'Practice AYUSH systems of medicine — government hospitals and private clinics.' },
      { name: 'Veterinarian', stream: 'BVSc & AH — 5 years', exams: ['ICAR-AIEEA'], salary: '₹4–15 LPA', desc: 'Treat animals and work in livestock management, wildlife, and food safety.' },
    ],
  },
  {
    id: 'nursing-allied-pcb',
    label: 'Nursing & Allied Health Sciences',
    icon: '💊',
    color: { bg: '#f0fdf4', border: '#bbf7d0', text: '#14532d', dot: '#16a34a', light: '#dcfce7' },
    interests: ['healthcare'],
    careers: [
      { name: 'Nurse', stream: 'BSc Nursing — 4 years', exams: ['AIIMS BSc Nursing', 'JIPMER Nursing', 'State Nursing Entrance'], salary: '₹3–10 LPA', desc: 'Direct patient care role with strong demand in India and for overseas nursing jobs.' },
      { name: 'Physiotherapist', stream: 'BPT — 4.5 years', exams: ['NEET-UG (some states)', 'State BPT Entrance'], salary: '₹3–12 LPA', desc: 'Rehabilitate patients with physical therapy, sports injuries, and neurological cases.' },
      { name: 'Pharmacist', stream: 'B.Pharm — 4 years', exams: ['GPAT', 'State Pharmacy Entrance'], salary: '₹3–12 LPA', desc: 'Develop and dispense medicines — work in hospitals, retail chains, and R&D labs.' },
      { name: 'Medical Lab Technologist', stream: 'BMLT — 3 years', exams: ['CUET', 'State Paramedical Entrance'], salary: '₹3–10 LPA', desc: 'Perform blood tests, biopsies, and diagnostics in hospitals and pathology labs.' },
      { name: 'Radiographer / Radiologist Tech', stream: 'BSc Medical Imaging / Radiology — 3 years', exams: ['CUET', 'State Entrance'], salary: '₹4–15 LPA', desc: 'Operate MRI, CT, and X-ray machines for patient diagnosis.' },
      { name: 'Optometrist', stream: 'B.Optom — 4 years', exams: ['State Optometry Entrance'], salary: '₹3–8 LPA', desc: 'Diagnose and treat vision disorders and prescribe corrective lenses.' },
      { name: 'Occupational Therapist (BOT)', stream: 'BOT — 4.5 years', exams: ['State Entrance'], salary: '₹3–10 LPA', desc: 'Help patients regain daily living skills after injury, stroke, or disability.' },
      { name: 'Dietitian / Nutritionist', stream: 'BSc Nutrition & Dietetics — 3 years', exams: ['CUET', 'State Entrance'], salary: '₹3–10 LPA', desc: 'Plan therapeutic diets for hospital patients and wellness clients.' },
    ],
  },
  {
    id: 'bsc-life-pcb',
    label: 'B.Sc Life Science Degrees',
    icon: '🔬',
    color: { bg: '#ecfeff', border: '#a5f3fc', text: '#164e63', dot: '#06b6d4', light: '#cffafe' },
    interests: ['science'],
    careers: [
      { name: 'BSc Biology / Zoology / Botany', stream: 'BSc Life Sciences — 3 years', exams: ['CUET', 'DU / Central University Entrance'], salary: '₹3–12 LPA', desc: 'Foundational degree leading to research, teaching, or further specialisation.' },
      { name: 'BSc Biotechnology', stream: 'BSc Biotechnology — 3 years', exams: ['CUET', 'State University Entrance'], salary: '₹4–18 LPA', desc: 'Apply biology to create medicines, vaccines, and genetically improved crops.' },
      { name: 'BSc Microbiology', stream: 'BSc Microbiology — 3 years', exams: ['CUET', 'State Entrance'], salary: '₹3–12 LPA', desc: 'Study bacteria, viruses, and fungi for pharma, food safety, and research labs.' },
      { name: 'BSc Biochemistry', stream: 'BSc Biochemistry — 3 years', exams: ['CUET', 'State Entrance'], salary: '₹3–12 LPA', desc: 'Study chemical processes in living organisms — gateway to pharma research.' },
      { name: 'BSc Genetics', stream: 'BSc Genetics — 3 years', exams: ['CUET', 'State Entrance'], salary: '₹4–15 LPA', desc: 'Study heredity, genomics, and genetic engineering techniques.' },
      { name: 'BS Research at IISER (Biology)', stream: 'BS-MS Dual Degree — 5 years', exams: ['IISER Aptitude Test', 'KVPY / JEE'], salary: '₹8–25 LPA', desc: 'Rigorous 5-year research degree at IISER for careers in science or academia.' },
    ],
  },
  {
    id: 'agriculture-env-pcb',
    label: 'Agriculture, Food & Environment',
    icon: '🌾',
    color: { bg: '#f0fdf4', border: '#bbf7d0', text: '#14532d', dot: '#16a34a', light: '#dcfce7' },
    interests: ['science'],
    careers: [
      { name: 'Agricultural Scientist', stream: 'BSc Agriculture — 4 years', exams: ['ICAR-AIEEA'], salary: '₹4–15 LPA', desc: 'Develop crop varieties and farming systems at ICAR, state agri-universities.' },
      { name: 'Food Technologist', stream: 'BSc / BTech Food Technology', exams: ['ICAR-AIEEA', 'CUET'], salary: '₹3–12 LPA', desc: 'Develop and improve food products for taste, safety, and shelf life.' },
      { name: 'Environmental Scientist', stream: 'BSc Environmental Science — 3 years', exams: ['CUET', 'JNU Entrance'], salary: '₹4–15 LPA', desc: 'Study pollution, ecology, and climate change — work with NGOs and government.' },
      { name: 'Forestry Officer', stream: 'BSc Forestry — 4 years', exams: ['ICAR-AIEEA', 'State Forest Service Exam'], salary: '₹4–12 LPA', desc: 'Manage forests and biodiversity for state forest departments and WWF.' },
      { name: 'Marine Biologist', stream: 'BSc Marine Biology — 3 years', exams: ['CUET', 'JNU Entrance'], salary: '₹4–15 LPA', desc: 'Study ocean ecosystems, fisheries, and aquatic conservation.' },
    ],
  },
  {
    id: 'paramedical-pcb',
    label: 'Paramedical Diploma Courses',
    icon: '📋',
    color: { bg: '#fff7ed', border: '#fed7aa', text: '#9a3412', dot: '#ea580c', light: '#ffedd5' },
    interests: ['healthcare'],
    careers: [
      { name: 'GNM Nursing (Diploma)', stream: 'GNM Diploma — 3 years', exams: ['State GNM Entrance'], salary: '₹2.5–8 LPA', desc: 'Shorter path to nursing practice in hospitals and community health centres.' },
      { name: 'Operation Theatre Tech (Diploma)', stream: 'Diploma OT Technology — 2 years', exams: ['State Paramedical Entrance'], salary: '₹2.5–8 LPA', desc: 'Assist surgeons in OT — manage instruments, anaesthesia support, and sterility.' },
      { name: 'ECG / Cardiac Tech (Diploma)', stream: 'Diploma Cardiac Technology — 2 years', exams: ['State Paramedical Entrance'], salary: '₹3–9 LPA', desc: 'Operate ECG, echocardiogram, and cardiac monitoring equipment in ICUs.' },
      { name: 'Dialysis Technician (Diploma)', stream: 'Diploma Dialysis Technology — 2 years', exams: ['State Paramedical Entrance'], salary: '₹3–9 LPA', desc: 'Operate kidney dialysis machines for patients in renal care units.' },
      { name: 'Dental Hygienist / Tech (Diploma)', stream: 'Diploma Dental Hygiene — 2 years', exams: ['State Dental Council Entrance'], salary: '₹2.5–7 LPA', desc: 'Assist dentists with cleanings, X-rays, and patient education.' },
      { name: 'Emergency Medical Technician (EMT)', stream: 'EMT Certification / Diploma', exams: ['State EMS Board Exam'], salary: '₹2.5–8 LPA', desc: 'Provide emergency pre-hospital care as first responder in ambulances.' },
    ],
  },
  {
    id: 'defence-pcb',
    label: 'Defence Services',
    icon: '🎖️',
    color: { bg: '#f8fafc', border: '#e2e8f0', text: '#334155', dot: '#64748b', light: '#f1f5f9' },
    interests: ['government'],
    careers: [
      { name: 'Defence Officer', stream: 'NDA → Army / Navy (any stream)', exams: ['NDA Exam (UPSC)', 'SSB Interview'], salary: '₹7–20 LPA + perks', desc: 'Join the Army, Navy, or Air Force as a commissioned officer via NDA after Class 12.' },
      { name: 'Military Nursing Service (MNS)', stream: 'BSc Military Nursing — 4 years', exams: ['MNS Entrance Exam'], salary: '₹5–15 LPA + perks', desc: 'Serve as a military nurse in Army hospitals — a prestigious service role.' },
      { name: 'Indian Navy (Sailor / MR)', stream: 'Navy Sailor Recruitment', exams: ['Navy MR / SSR Exam', 'NDA Exam'], salary: '₹4–18 LPA + perks', desc: 'Serve in the Indian Navy in technical or general duty sailor roles.' },
    ],
  },
  {
    id: 'sports-fitness-pcb',
    label: 'Sports & Fitness',
    icon: '🏆',
    color: { bg: '#f0fdf4', border: '#bbf7d0', text: '#14532d', dot: '#16a34a', light: '#dcfce7' },
    interests: ['healthcare'],
    careers: [
      { name: 'Sports Physiotherapist', stream: 'NEET-UG → BPT — 4.5 years', exams: ['NEET-UG', 'State Physiotherapy Entrance'], salary: '₹4–15 LPA', desc: 'Treat sports injuries and keep athletes in peak physical condition — PCB is the ideal stream.' },
      { name: 'Sports Coach / Trainer', stream: 'NIS Patiala Diploma / B.Sc Physical Education', exams: ['NIS Patiala Diploma', 'NSNIS Coaching Certificate'], salary: '₹3–15 LPA', desc: 'Train athletes at academies, schools, and professional sports franchises.' },
      { name: 'Yoga Instructor / Wellness Coach', stream: 'QCI Yoga Certification + Any degree', exams: ['QCI Yoga Certification', 'AYUSH Ministry Courses'], salary: '₹3–15 LPA', desc: 'Teach yoga and wellness to individuals, corporates, and retreat centres.' },
      { name: 'Professional Cricketer', stream: 'State Cricket Academy + Any degree optional', exams: ['State U-19 Trials', 'NCA Academy Selection'], salary: '₹5–Unlimited', desc: 'Play district, state, and national cricket aiming for the Indian team and IPL.' },
      { name: 'Athlete (Track & Field)', stream: 'SAI NIS Academy + B.Sc Physical Education', exams: ['SAI NIS Academy', 'State Athletics Championships'], salary: '₹3–15 LPA', desc: 'Compete in sprints, throws, jumps, and marathons at national level.' },
      { name: 'Football / Hockey Player', stream: 'SAI / Club Academy + Any degree', exams: ['SAI Academy Trials', 'I-League / Hockey India Trials'], salary: '₹3–20 LPA', desc: "Pursue a professional career in India's growing football and hockey leagues." },
      { name: 'Tennis / Badminton Player', stream: 'AITA / BAI Academy + Any degree', exams: ['AITA / BAI Academy Trials'], salary: '₹4–Unlimited', desc: 'Compete at national and international tournaments, aiming for grand titles.' },
      { name: 'Sports Journalist / Commentator', stream: 'BJMC / BA Mass Comm → Sports Coverage', exams: ['IIMC Entrance', 'State Mass Comm Entrance'], salary: '₹4–18 LPA', desc: 'Cover sports events, analyse matches, and commentate for TV or digital media.' },
    ],
  },
  {
    id: 'education-social-pcb',
    label: 'Education & Social Impact',
    icon: '📚',
    color: { bg: '#fefce8', border: '#fef08a', text: '#713f12', dot: '#ca8a04', light: '#fef9c3' },
    interests: ['education', 'government'],
    careers: [
      { name: 'Teacher', stream: 'B.Sc (PCB) + B.Ed — 2 years', exams: ['CTET', 'State TET', 'B.Ed Entrance'], salary: '₹3–10 LPA', desc: 'Teach Biology, Chemistry, or Science at secondary schools.' },
      { name: 'College Professor / Researcher', stream: 'M.Sc → UGC NET / CSIR NET → Assistant Professor', exams: ['UGC NET', 'CSIR NET', 'SET'], salary: '₹5–20 LPA', desc: 'Teach and conduct research at colleges and universities after NET.' },
      { name: 'Psychologist', stream: 'BA / BSc Psychology + MA Psychology — 5 years', exams: ['CUET', 'State PG Entrance'], salary: '₹4–18 LPA', desc: 'Help people manage mental health, career choices, and personal challenges.' },
      { name: 'Social Worker', stream: 'BSW → MSW at TISS — 5 years', exams: ['TISS Entrance', 'CUET'], salary: '₹3–12 LPA', desc: 'Drive community development and grassroots change through NGOs.' },
      { name: 'Special Educator', stream: 'B.Ed Special Education — 2 years (after any degree)', exams: ['RCI Registration', 'B.Ed Special Education'], salary: '₹3–8 LPA', desc: 'Teach and support children with learning disabilities and special needs.' },
    ],
  },
  {
    id: 'hospitality-culinary-pcb',
    label: 'Hospitality, Travel & Culinary',
    icon: '🍽️',
    color: { bg: '#fff1f2', border: '#fecdd3', text: '#881337', dot: '#f43f5e', light: '#ffe4e6' },
    interests: ['business', 'creative'],
    careers: [
      { name: 'Hotel Manager', stream: 'BHM / IHM Diploma — 3–4 years', exams: ['NCHM JEE', 'IHM Entrance'], salary: '₹5–25 LPA', desc: 'Lead operations at luxury hotels and global hospitality chains.' },
      { name: 'Chef / Culinary Artist', stream: 'Diploma Culinary Arts (IHM) — 1–3 years', exams: ['NCHM JEE', 'IHM Entrance'], salary: '₹3–20 LPA', desc: 'Create cuisine in top hotels, restaurants, and as an independent food professional.' },
      { name: 'Travel & Tourism Professional', stream: 'B.Sc Tourism / BHM — 3 years', exams: ['NCHM JEE', 'State Tourism Courses'], salary: '₹3–15 LPA', desc: 'Plan travel experiences and manage tour companies or tourism boards.' },
      { name: 'Airline Cabin Crew', stream: 'Airline-specific training (any degree)', exams: ['Airline Recruitment'], salary: '₹4–12 LPA', desc: 'Ensure passenger safety and comfort on domestic and international flights.' },
      { name: 'Event Planner / Manager', stream: 'BHM / Event Management Degree — 3 years', exams: ['NCHM JEE', 'Hotel Management Entrance'], salary: '₹3–18 LPA', desc: 'Plan and execute weddings, corporate events, and large-scale gatherings.' },
      { name: 'Pastry Chef / Baker', stream: 'Culinary Arts Diploma (IHM) — 1–2 years', exams: ['IHM Entrance', 'Culinary School Admission'], salary: '₹3–12 LPA', desc: 'Create pastries, cakes, and desserts for bakeries, hotels, and private clients.' },
      { name: 'Food Stylist / Food Content Creator', stream: 'Culinary / Photography / Mass Comm — self-start', exams: ['No formal exam — portfolio / skill-based'], salary: '₹3–20 LPA', desc: 'Style and photograph food for brands, cookbooks, and digital platforms.' },
    ],
  },
  {
    id: 'digital-emerging-pcb',
    label: 'Digital & Emerging Careers',
    icon: '🚀',
    color: { bg: '#eef2ff', border: '#c7d2fe', text: '#3730a3', dot: '#6366f1', light: '#e0e7ff' },
    interests: ['technology', 'business', 'creative'],
    careers: [
      { name: 'Content Creator / YouTuber', stream: 'Self-start on YouTube / Instagram (any degree)', exams: ['No formal exam — platform-based'], salary: '₹3–Unlimited', desc: 'Build an audience on YouTube, Instagram, or podcasts and monetise content.' },
      { name: 'Digital Marketer', stream: 'BBA / Any degree + Google / Meta Certifications', exams: ['Google / Meta / HubSpot Certifications'], salary: '₹4–18 LPA', desc: 'Grow brands through SEO, social media, paid ads, and email campaigns.' },
      { name: 'E-commerce / D2C Entrepreneur', stream: 'Self-start with product and execution focus', exams: ['No formal exam — execution-based'], salary: '₹3–Unlimited', desc: 'Launch or scale an online business selling products or services directly.' },
      { name: 'UX Researcher', stream: 'B.Des / BA Psychology + HCI focus', exams: ['MICA Entrance', 'NID DAT'], salary: '₹5–20 LPA', desc: 'Research how users think and feel to improve digital products and interfaces.' },
      { name: 'Podcast Host / Radio Presenter', stream: 'BJMC / Mass Comm or self-start podcast', exams: ['IIMC Entrance', 'Mass Comm Entrance'], salary: '₹3–15 LPA', desc: 'Host audio shows covering health, wellness, culture, and entertainment.' },
      { name: 'Game Developer', stream: 'B.Tech CS / B.Des → Game Development', exams: ['JEE Main', 'MAAC / Arena Animation Admission'], salary: '₹4–20 LPA', desc: 'Design and build video games for PC, mobile, and consoles.' },
      { name: 'Cybersecurity Analyst', stream: 'B.Tech CS → CEH Certification', exams: ['JEE Main', 'CEH Certification'], salary: '₹6–25 LPA', desc: 'Protect companies and government systems from hackers and cyber threats.' },
      { name: 'AI/ML Engineer', stream: 'B.Tech CS / B.Sc → AI/ML specialisation', exams: ['JEE Main', 'BITSAT'], salary: '₹8–30 LPA', desc: 'Build intelligent systems using machine learning and deep learning models.' },
      { name: 'Blockchain / Web3 Developer', stream: 'B.Tech CS → Solidity / Web3 Certifications', exams: ['JEE Main', 'Online Certifications'], salary: '₹8–35 LPA', desc: 'Build decentralised applications and smart contracts for fintech and tech.' },
      { name: 'Cloud Engineer', stream: 'B.Tech CS / ECE → AWS / Azure Certifications', exams: ['JEE Main', 'AWS / Azure Certifications'], salary: '₹6–28 LPA', desc: 'Build and manage cloud infrastructure powering apps used by millions.' },
    ],
  },
]

const COMMERCE_CATEGORIES = [
  {
    id: 'professional-commerce',
    label: 'Professional Certifications (CA / CS / CMA)',
    icon: '📊',
    color: { bg: '#fffbeb', border: '#fde68a', text: '#92400e', dot: '#f59e0b', light: '#fef3c7' },
    interests: ['finance', 'business'],
    careers: [
      { name: 'Chartered Accountant', stream: 'CA Foundation → CA Intermediate → CA Final', exams: ['CA Foundation', 'CA Intermediate', 'CA Final'], salary: '₹7–30+ LPA', desc: "India's gold standard accounting credential — audit, taxation, and advisory." },
      { name: 'Company Secretary', stream: 'CS Foundation → CS Executive → CS Professional', exams: ['CS Foundation', 'CS Executive', 'CS Professional'], salary: '₹5–20 LPA', desc: 'Ensure corporate compliance, governance, and legal secretarial work.' },
      { name: 'Cost & Management Accountant (CMA)', stream: 'CMA Foundation → CMA Intermediate → CMA Final', exams: ['CMA Foundation', 'CMA Intermediate', 'CMA Final'], salary: '₹5–18 LPA', desc: 'Manage cost accounting and financial strategy for manufacturing and service firms.' },
    ],
  },
  {
    id: 'business-mgmt-commerce',
    label: 'Business & Management Degrees',
    icon: '💼',
    color: { bg: '#eef2ff', border: '#c7d2fe', text: '#3730a3', dot: '#6366f1', light: '#e0e7ff' },
    interests: ['business', 'finance'],
    careers: [
      { name: 'BBA (Bachelor of Business Admin)', stream: 'BBA — 3 years', exams: ['IPMAT', 'DU JAT', 'SET / Christ University'], salary: '₹4–20 LPA (post-MBA)', desc: 'Core business degree covering marketing, finance, HR, and operations.' },
      { name: 'Integrated MBA at IIM (5-Year)', stream: 'BBA+MBA at IIM — 5 years (IPM)', exams: ['IPMAT (IIM Indore/Rohtak/Jammu)', 'NPAT', 'SET'], salary: '₹10–50 LPA', desc: 'Join IIM directly after Class 12 — skip CAT and enter the top MBA programme.' },
      { name: 'B.Com Honours', stream: 'B.Com (Hons) — 3 years', exams: ['CUET', 'DU Entrance', 'State CET'], salary: '₹4–18 LPA', desc: 'Core commerce degree covering accounting, economics, taxation, and law.' },
      { name: 'BMS (Business Management Studies)', stream: 'BMS — 3 years', exams: ['DU Entrance', 'Mumbai University CET'], salary: '₹4–15 LPA', desc: 'Practical business programme covering strategy, marketing, and entrepreneurship.' },
      { name: 'Hotel Manager', stream: 'BHM — 3–4 years', exams: ['NCHM JEE', 'IHM State Entrance'], salary: '₹5–25 LPA', desc: 'Build a global career in luxury hospitality, cruise lines, and resort management.' },
      { name: 'BBA in Digital Marketing / Fintech', stream: 'BBA (Specialised) — 3 years', exams: ['IPMAT', 'NMIMS NPAT'], salary: '₹5–20 LPA', desc: 'Specialised BBA programmes for emerging sectors like fintech and digital marketing.' },
    ],
  },
  {
    id: 'finance-banking-commerce',
    label: 'Finance, Banking & Insurance',
    icon: '🏦',
    color: { bg: '#fffbeb', border: '#fde68a', text: '#92400e', dot: '#f59e0b', light: '#fef3c7' },
    interests: ['finance'],
    careers: [
      { name: 'Investment Banker', stream: 'BBA/B.Com → MBA Finance → Investment Banking', exams: ['IPMAT', 'CAT / GMAT (MBA)', 'CFA'], salary: '₹10–60+ LPA', desc: 'Help companies raise capital, merge, and list on stock exchanges.' },
      { name: 'Financial Analyst', stream: 'B.Com / BBA → MBA / CFA', exams: ['CAT (MBA)', 'CFA Exams'], salary: '₹5–20 LPA', desc: 'Analyse financial data and guide investment decisions for corporations.' },
      { name: 'Actuary', stream: 'B.Sc Statistics / B.Com → IAI Exams', exams: ['IAI Actuarial Exams'], salary: '₹8–40 LPA', desc: 'Use advanced maths to price insurance policies and manage financial risk.' },
      { name: 'Banking Professional', stream: 'B.Com / BBA', exams: ['IBPS PO', 'SBI PO', 'RBI Grade B'], salary: '₹5–15 LPA', desc: 'Build a career in nationalised banks, private banks, or RBI.' },
      { name: 'Stock Market Analyst', stream: 'B.Com / BBA + NISM Certifications', exams: ['NISM Certifications', 'CFA Exams'], salary: '₹4–25 LPA', desc: 'Trade securities and research stocks for individuals and institutions.' },
    ],
  },
  {
    id: 'law-commerce',
    label: 'Law & Legal Careers',
    icon: '⚖️',
    color: { bg: '#f8fafc', border: '#e2e8f0', text: '#334155', dot: '#64748b', light: '#f1f5f9' },
    interests: ['government', 'business'],
    careers: [
      { name: 'Lawyer', stream: 'BA LLB / BBA LLB — 5 years', exams: ['CLAT', 'AILET', 'LSAT India'], salary: '₹6–50+ LPA', desc: 'Commerce background gives a huge advantage in corporate, tax, and banking law.' },
      { name: 'IAS Officer', stream: 'BBA LLB / B.Com → UPSC Civil Services', exams: ['UPSC Civil Services'], salary: '₹8–20 LPA', desc: 'Commerce graduates with Economics or Law backgrounds are consistently competitive in UPSC.' },
      { name: 'Judiciary / Judge', stream: 'BA LLB → Judicial Services Exam', exams: ['Judicial Services Exam'], salary: '₹10–30 LPA', desc: 'Adjudicate civil and criminal cases at district and session courts.' },
    ],
  },
  {
    id: 'economics-commerce',
    label: 'Economics & Data Careers',
    icon: '📈',
    color: { bg: '#ecfdf5', border: '#a7f3d0', text: '#065f46', dot: '#10b981', light: '#d1fae5' },
    interests: ['science', 'finance'],
    careers: [
      { name: 'Economist', stream: 'BA/BSc Economics — 3 years', exams: ['CUET', 'DSE Entrance', 'JNU Entrance'], salary: '₹6–20 LPA', desc: 'Analyse markets and policy — opens doors to RBI, NITI Aayog, and academia.' },
      { name: 'Data Analyst / Business Analyst', stream: 'B.Com / BBA + Excel/Python/SQL skills', exams: ['No formal entrance — skill-based'], salary: '₹4–18 LPA', desc: 'Extract insights from business data to drive decisions for companies.' },
      { name: 'Econometrician / Statistician', stream: 'BSc Statistics / Economics — 3 years', exams: ['ISI Entrance', 'CUET'], salary: '₹6–20 LPA', desc: 'Apply statistical models to economic and financial datasets.' },
    ],
  },
  {
    id: 'govt-commerce',
    label: 'Government Services & PSU',
    icon: '🏛️',
    color: { bg: '#f5f3ff', border: '#ddd6fe', text: '#5b21b6', dot: '#8b5cf6', light: '#ede9fe' },
    interests: ['government'],
    careers: [
      { name: 'IAS Officer', stream: 'B.Com / BBA → UPSC Civil Services', exams: ['UPSC Civil Services'], salary: '₹8–20 LPA', desc: 'Commerce graduates are fully eligible for UPSC — choose Economics or Commerce as optional.' },
      { name: 'SSC CGL Officer', stream: 'Any graduation', exams: ['SSC CGL'], salary: '₹5–12 LPA', desc: 'Join Income Tax, Enforcement Directorate, or GST departments.' },
      { name: 'Banking Professional', stream: 'B.Com / BBA', exams: ['IBPS PO', 'RBI Grade B', 'NABARD'], salary: '₹6–16 LPA', desc: 'Join nationalised banks, RBI, or NABARD in officer-grade positions.' },
    ],
  },
  {
    id: 'digital-entrepreneur-commerce',
    label: 'Entrepreneurship & Digital Business',
    icon: '🚀',
    color: { bg: '#eef2ff', border: '#c7d2fe', text: '#3730a3', dot: '#6366f1', light: '#e0e7ff' },
    interests: ['business', 'technology'],
    careers: [
      { name: 'Startup Founder / Entrepreneur', stream: 'Any degree + execution', exams: ['No formal exam — pitch and network'], salary: '₹0–Unlimited', desc: 'Build a company from scratch — commerce education accelerates your path.' },
      { name: 'E-commerce / D2C Entrepreneur', stream: 'BBA / B.Com + Digital Skills', exams: ['No formal exam'], salary: '₹4–Unlimited', desc: 'Sell products via your own brand or established marketplaces like Flipkart/Amazon.' },
      { name: 'Digital Marketer', stream: 'BBA / B.Com + Certifications', exams: ['Google / Meta / HubSpot Certifications'], salary: '₹4–18 LPA', desc: 'Grow brands through SEO, paid ads, social media, and email campaigns.' },
      { name: 'Product Manager', stream: 'BBA / B.Tech → MBA at IIM/ISB', exams: ['IPMAT', 'CAT / GMAT'], salary: '₹10–40 LPA', desc: "Own a product's strategy and roadmap at a tech company or startup." },
      { name: 'Content Creator / YouTuber', stream: 'Self-start on YouTube / Instagram (any degree)', exams: ['No formal exam — platform-based'], salary: '₹3–Unlimited', desc: 'Build an audience on YouTube, Instagram, or podcasts and monetise content.' },
      { name: 'Blockchain / Web3 Developer', stream: 'BBA + Solidity / Web3 Certifications', exams: ['Online Certifications'], salary: '₹8–35 LPA', desc: 'Build DeFi protocols and smart contracts — finance background is a strong asset.' },
      { name: 'UX Researcher', stream: 'BBA / BA Psychology + design thinking', exams: ['MICA Entrance', 'NID DAT'], salary: '₹5–20 LPA', desc: 'Research how users think and feel to improve digital products and interfaces.' },
      { name: 'Podcast Host / Radio Presenter', stream: 'BJMC / Mass Comm or self-start podcast', exams: ['IIMC Entrance', 'Mass Comm Entrance'], salary: '₹3–15 LPA', desc: 'Host audio shows covering finance, business, culture, and entertainment.' },
      { name: 'Game Developer', stream: 'B.Tech CS / B.Des → Game Development', exams: ['JEE Main', 'MAAC / Arena Animation Admission'], salary: '₹4–20 LPA', desc: 'Design and build video games for PC, mobile, and consoles.' },
    ],
  },
  {
    id: 'sports-fitness-commerce',
    label: 'Sports & Fitness',
    icon: '🏆',
    color: { bg: '#f0fdf4', border: '#bbf7d0', text: '#14532d', dot: '#16a34a', light: '#dcfce7' },
    interests: ['healthcare'],
    careers: [
      { name: 'Professional Cricketer', stream: 'State Cricket Academy + Any degree optional', exams: ['State U-19 Trials', 'NCA Academy Selection'], salary: '₹5–Unlimited', desc: 'Play district, state, and national cricket aiming for the Indian team and IPL.' },
      { name: 'Sports Coach / Trainer', stream: 'NIS Patiala Diploma / B.Sc Physical Education', exams: ['NIS Patiala Diploma', 'NSNIS Coaching Certificate'], salary: '₹3–15 LPA', desc: 'Train athletes at academies, schools, and professional sports franchises.' },
      { name: 'Yoga Instructor / Wellness Coach', stream: 'QCI Yoga Certification + Any degree', exams: ['QCI Yoga Certification', 'AYUSH Ministry Courses'], salary: '₹3–15 LPA', desc: 'Teach yoga and wellness to individuals, corporates, and retreat centres.' },
      { name: 'Sports Journalist / Commentator', stream: 'BJMC / BA Mass Comm → Sports Coverage', exams: ['IIMC Entrance', 'State Mass Comm Entrance'], salary: '₹4–18 LPA', desc: 'Cover sports events, analyse matches, and commentate for TV or digital media.' },
      { name: 'Athlete (Track & Field)', stream: 'SAI NIS Academy + Any degree optional', exams: ['SAI NIS Academy', 'State Athletics Championships'], salary: '₹3–15 LPA', desc: 'Compete in sprints, throws, jumps, and marathons at national level.' },
      { name: 'Football / Hockey Player', stream: 'SAI / Club Academy + Any degree', exams: ['SAI Academy Trials', 'I-League / Hockey India Trials'], salary: '₹3–20 LPA', desc: "Pursue a professional career in India's growing football and hockey leagues." },
      { name: 'Tennis / Badminton Player', stream: 'AITA / BAI Academy + Any degree', exams: ['AITA / BAI Academy Trials'], salary: '₹4–Unlimited', desc: 'Compete at national and international tournaments, aiming for grand titles.' },
      { name: 'Sports Physiotherapist', stream: 'State BPT Entrance → BPT — 4.5 years', exams: ['State Physiotherapy Entrance', 'NEET-UG (some states)'], salary: '₹4–15 LPA', desc: 'Treat sports injuries and keep athletes in peak physical condition.' },
    ],
  },
  {
    id: 'education-social-commerce',
    label: 'Education & Social Impact',
    icon: '📚',
    color: { bg: '#fefce8', border: '#fef08a', text: '#713f12', dot: '#ca8a04', light: '#fef9c3' },
    interests: ['education', 'government'],
    careers: [
      { name: 'Teacher', stream: 'B.Com / BBA + B.Ed — 2 years', exams: ['CTET', 'State TET', 'B.Ed Entrance'], salary: '₹3–10 LPA', desc: 'Teach Commerce, Economics, or Maths at secondary schools.' },
      { name: 'College Professor / Researcher', stream: 'M.Com / MBA → UGC NET → Assistant Professor', exams: ['UGC NET', 'SET'], salary: '₹5–20 LPA', desc: 'Teach Commerce and Economics at college level and pursue academic research.' },
      { name: 'Psychologist', stream: 'BA Psychology + MA Psychology — 5 years', exams: ['CUET', 'State PG Entrance'], salary: '₹4–18 LPA', desc: 'Help people manage mental health, career choices, and personal challenges.' },
      { name: 'Social Worker', stream: 'BSW → MSW at TISS — 5 years', exams: ['TISS Entrance', 'CUET'], salary: '₹3–12 LPA', desc: 'Drive community development and grassroots change through NGOs.' },
      { name: 'Special Educator', stream: 'BA + B.Ed Special Education — 2 years', exams: ['RCI Registration', 'B.Ed Special Education'], salary: '₹3–8 LPA', desc: 'Teach and support children with learning disabilities and special needs.' },
    ],
  },
  {
    id: 'hospitality-culinary-commerce',
    label: 'Hospitality, Travel & Culinary',
    icon: '🍽️',
    color: { bg: '#fff1f2', border: '#fecdd3', text: '#881337', dot: '#f43f5e', light: '#ffe4e6' },
    interests: ['business', 'creative'],
    careers: [
      { name: 'Hotel Manager', stream: 'BHM — 3–4 years / MBA Hospitality', exams: ['NCHM JEE', 'IHM Entrance'], salary: '₹5–25 LPA', desc: 'Lead operations at luxury hotels and global hospitality chains.' },
      { name: 'Travel & Tourism Professional', stream: 'BA Tourism / BHM — 3 years', exams: ['NCHM JEE', 'State Tourism Courses'], salary: '₹3–15 LPA', desc: 'Plan travel experiences and manage tour companies or tourism boards.' },
      { name: 'Event Planner / Manager', stream: 'BHM / Event Management Degree — 3 years', exams: ['NCHM JEE', 'Hotel Management Entrance'], salary: '₹3–18 LPA', desc: 'Plan and execute weddings, corporate events, and large-scale gatherings.' },
      { name: 'Airline Cabin Crew', stream: 'Airline-specific training (any degree)', exams: ['Airline Recruitment'], salary: '₹4–12 LPA', desc: 'Ensure passenger safety and comfort on domestic and international flights.' },
      { name: 'Chef / Culinary Artist', stream: 'Diploma Culinary Arts (IHM) — 1–3 years', exams: ['NCHM JEE', 'IHM Entrance'], salary: '₹3–20 LPA', desc: 'Create cuisine in top hotels, restaurants, and as an independent food professional.' },
      { name: 'Pastry Chef / Baker', stream: 'Culinary Arts Diploma — Pastry Specialisation', exams: ['IHM Entrance', 'Culinary School Admission'], salary: '₹3–12 LPA', desc: 'Create pastries, cakes, and desserts for bakeries, hotels, and private clients.' },
      { name: 'Food Stylist / Food Content Creator', stream: 'Culinary / Photography — self-start', exams: ['No formal exam — portfolio / skill-based'], salary: '₹3–20 LPA', desc: 'Style and photograph food for brands, cookbooks, and digital platforms.' },
    ],
  },
]

const ARTS_CATEGORIES = [
  {
    id: 'law-arts',
    label: 'Law & Legal Careers',
    icon: '⚖️',
    color: { bg: '#f8fafc', border: '#e2e8f0', text: '#334155', dot: '#64748b', light: '#f1f5f9' },
    interests: ['government'],
    careers: [
      { name: 'Lawyer', stream: 'BA LLB — 5 years', exams: ['CLAT', 'AILET', 'LSAT India'], salary: '₹4–50+ LPA', desc: 'Arts/Humanities is the ideal base for law — strong demand in litigation and corporate law.' },
      { name: 'IAS Officer', stream: 'BA LLB / BA Poly Sci → UPSC Civil Services', exams: ['UPSC Civil Services'], salary: '₹8–20 LPA', desc: 'Arts + Law is a powerful combination for UPSC — constitutional law is directly tested.' },
      { name: 'Judiciary / Judge', stream: 'BA LLB → Judicial Services Exam', exams: ['Judicial Services Exam (state)'], salary: '₹10–30 LPA', desc: 'Adjudicate civil and criminal cases at district courts.' },
      { name: 'Public Policy Analyst', stream: 'BA LLB / BA Poly Sci → Policy Career', exams: ['CLAT', 'TISS Entrance'], salary: '₹6–25 LPA', desc: 'Design and evaluate government programmes at think tanks and advisory bodies.' },
    ],
  },
  {
    id: 'civil-services-arts',
    label: 'Civil Services & Government',
    icon: '🏛️',
    color: { bg: '#f5f3ff', border: '#ddd6fe', text: '#5b21b6', dot: '#8b5cf6', light: '#ede9fe' },
    interests: ['government', 'education'],
    careers: [
      { name: 'IAS Officer', stream: 'BA (History/Geography/PolSci) → UPSC', exams: ['UPSC Civil Services'], salary: '₹8–20 LPA', desc: 'Humanities subjects align perfectly with UPSC GS papers and most optional subjects.' },
      { name: 'IPS Officer', stream: 'Any BA → UPSC', exams: ['UPSC Civil Services'], salary: '₹8–18 LPA', desc: 'Lead law enforcement — IPS is allocated based on rank and preference in UPSC.' },
      { name: 'Foreign Service Officer (IFS)', stream: 'BA History / International Relations → UPSC', exams: ['UPSC Civil Services'], salary: '₹8–20 LPA', desc: 'Represent India abroad as a diplomat — Humanities is the strongest base.' },
      { name: 'State PSC Officer', stream: 'Any BA → State PSC Exam', exams: ['State PSC Prelims & Mains'], salary: '₹5–15 LPA', desc: 'Join state administrative or police service through State Public Service Commission.' },
      { name: 'SSC CGL Officer', stream: 'Any graduation', exams: ['SSC CGL'], salary: '₹5–12 LPA', desc: 'Join central government departments — Income Tax, CBI, Customs, or Audit.' },
    ],
  },
  {
    id: 'journalism-arts',
    label: 'Journalism, Media & Mass Communication',
    icon: '🎙️',
    color: { bg: '#fff7ed', border: '#fed7aa', text: '#9a3412', dot: '#ea580c', light: '#ffedd5' },
    interests: ['creative', 'education'],
    careers: [
      { name: 'Journalist', stream: 'BA Journalism / BJMC — 3 years', exams: ['IIMC Entrance', 'AJK MCRC Entrance', 'State Mass Comm Entrance'], salary: '₹3–18 LPA', desc: 'Report news for print, TV, digital, and radio newsrooms.' },
      { name: 'Film Director', stream: 'BJMC / FTII Film Direction Course', exams: ['FTII Entrance', 'SRFTI Entrance'], salary: '₹5–Unlimited', desc: 'Direct feature films, OTT series, and documentaries for national and global audiences.' },
      { name: 'Documentary Filmmaker', stream: 'BJMC / FTII / AJK MCRC', exams: ['FTII Entrance', 'AJK MCRC Entrance'], salary: '₹3–15 LPA', desc: 'Tell real-world stories through documentary films for OTT platforms and festivals.' },
      { name: 'Screenwriter / Script Writer', stream: 'BA English / FTII Screenwriting — 3 years', exams: ['FTII Entrance', 'NSD', 'Writing Fellowships'], salary: '₹4–25+ LPA', desc: 'Write scripts and stories for films, OTT series, and digital platforms.' },
      { name: 'Advertising Creative Director', stream: 'BA Mass Comm / MICA — 3 years', exams: ['MICA Entrance (MICAT)', 'XIC Entrance'], salary: '₹6–30 LPA', desc: 'Lead brand campaigns and creative strategy for agencies and companies.' },
    ],
  },
  {
    id: 'social-sciences-arts',
    label: 'Social Sciences & Research',
    icon: '🌍',
    color: { bg: '#ecfeff', border: '#a5f3fc', text: '#164e63', dot: '#06b6d4', light: '#cffafe' },
    interests: ['education', 'science'],
    careers: [
      { name: 'Psychologist', stream: 'BA / BSc Psychology — 3 years', exams: ['CUET', 'DU / Central University Entrance'], salary: '₹4–18 LPA', desc: 'Help people manage mental health, career choices, and personal challenges.' },
      { name: 'Social Worker', stream: 'BA Social Work / TISS — 3 years', exams: ['TISS Entrance', 'CUET'], salary: '₹3–12 LPA', desc: 'Drive community development and grassroots change through NGOs and government.' },
      { name: 'Economist', stream: 'BA / BSc Economics — 3 years', exams: ['CUET', 'DSE Entrance', 'JNU Entrance'], salary: '₹6–20 LPA', desc: 'Analyse markets and economic policy for RBI, NITI Aayog, and academia.' },
      { name: 'Public Policy Analyst', stream: 'BA Political Science → MA Public Policy', exams: ['CUET', 'JNU Entrance', 'TISS Entrance'], salary: '₹5–20 LPA', desc: 'Design and evaluate government programmes at think tanks and policy bodies.' },
      { name: 'Archaeologist / Historian', stream: 'BA History / Archaeology — 3 years', exams: ['CUET', 'ASI Recruitment'], salary: '₹3–12 LPA', desc: "Study and preserve India's cultural heritage at ASI and universities." },
    ],
  },
  {
    id: 'performing-creative-arts',
    label: 'Fine Arts, Design & Performing Arts',
    icon: '🎭',
    color: { bg: '#fdf2f8', border: '#f9a8d4', text: '#9d174d', dot: '#ec4899', light: '#fce7f3' },
    interests: ['creative'],
    careers: [
      { name: 'Visual Artist / Painter (BFA)', stream: 'BFA Fine Arts — 4 years', exams: ['BHU Fine Arts Entrance', 'Central University Fine Arts'], salary: '₹3–15 LPA', desc: 'Create paintings, sculptures, and installations for galleries, brands, and media.' },
      { name: 'Actor / Theatre Practitioner', stream: 'BA Theatre / NSD Acting Course', exams: ['NSD Entrance', 'FTII Acting', 'Regional Drama Schools'], salary: '₹3–Unlimited', desc: 'Perform on stage, screen, and OTT — Humanities builds expressive range.' },
      { name: 'Graphic Designer', stream: 'BFA / NID / NIFT — 4 years', exams: ['NID DAT', 'NIFT Entrance', 'UCEED'], salary: '₹3–15 LPA', desc: 'Create visual identities, illustrations, and digital content for brands.' },
      { name: 'Illustrator / Comic Artist', stream: 'BFA / NID — 4 years', exams: ['NID DAT', 'Portfolio-based admission'], salary: '₹3–15 LPA', desc: 'Create illustrations for books, media, games, and digital content.' },
      { name: 'Fashion Designer', stream: 'B.Des Fashion Design — 4 years', exams: ['NIFT Entrance', 'NID DAT'], salary: '₹4–20 LPA', desc: 'Design clothing and accessories — Arts students have a natural head start.' },
    ],
  },
  {
    id: 'education-arts',
    label: 'Education, Teaching & Social Work',
    icon: '📚',
    color: { bg: '#fefce8', border: '#fef08a', text: '#713f12', dot: '#ca8a04', light: '#fef9c3' },
    interests: ['education'],
    careers: [
      { name: 'Teacher', stream: 'BA + B.Ed (3+2 or 4-year integrated B.Ed)', exams: ['CTET', 'State TET', 'B.Ed Entrance'], salary: '₹3–10 LPA', desc: 'Teach History, Geography, Civics, or Languages at schools.' },
      { name: 'College Professor / Researcher', stream: 'BA + MA + UGC NET → Assistant Professor', exams: ['UGC NET', 'SET'], salary: '₹5–20 LPA', desc: 'Teach Humanities at college level and pursue academic research.' },
      { name: 'Social Worker', stream: 'BA Social Work / BSW → MSW at TISS', exams: ['TISS Entrance', 'CUET'], salary: '₹3–12 LPA', desc: 'Drive community development and grassroots change at NGOs and government.' },
      { name: 'Special Educator', stream: 'BA + B.Ed Special Education — 2 years', exams: ['RCI Registration', 'B.Ed Special Education'], salary: '₹3–8 LPA', desc: 'Teach and support children with learning disabilities and special needs.' },
    ],
  },
  {
    id: 'languages-arts',
    label: 'Languages, Literature & Translation',
    icon: '📖',
    color: { bg: '#fff1f2', border: '#fecdd3', text: '#881337', dot: '#f43f5e', light: '#ffe4e6' },
    interests: ['creative', 'education'],
    careers: [
      { name: 'Translator / Interpreter', stream: 'BA Languages (Hindi / English / Foreign Language)', exams: ['MEA Translator Recruitment', 'DOPT Language Exam'], salary: '₹4–18 LPA', desc: 'Translate documents and interpret for governments, MNCs, and UN bodies.' },
      { name: 'Author / Novelist', stream: 'BA English / Creative Writing — 3 years', exams: ['No formal entrance — manuscript-based'], salary: '₹3–Unlimited', desc: 'Write fiction, non-fiction, or poetry for publishers and digital platforms.' },
      { name: 'Foreign Language Expert', stream: 'BA Foreign Language (French/German/Japanese/Spanish)', exams: ['JNU Entrance', 'DU Entrance', 'DELF / JLPT / Goethe Tests'], salary: '₹5–20 LPA', desc: 'Use fluency in foreign languages for diplomacy, MNCs, or language teaching.' },
    ],
  },
  {
    id: 'sports-fitness-arts',
    label: 'Sports & Fitness',
    icon: '🏆',
    color: { bg: '#f0fdf4', border: '#bbf7d0', text: '#14532d', dot: '#16a34a', light: '#dcfce7' },
    interests: ['healthcare'],
    careers: [
      { name: 'Professional Cricketer', stream: 'State Cricket Academy + BA degree optional', exams: ['State U-19 Trials', 'NCA Academy Selection'], salary: '₹5–Unlimited', desc: 'Play district, state, and national cricket aiming for the Indian team and IPL.' },
      { name: 'Football / Hockey Player', stream: 'SAI / Club Academy + BA degree', exams: ['SAI Academy Trials', 'I-League / Hockey India Trials'], salary: '₹3–20 LPA', desc: "Pursue a professional career in India's growing football and hockey leagues." },
      { name: 'Tennis / Badminton Player', stream: 'AITA / BAI Academy + BA degree', exams: ['AITA / BAI Academy Trials'], salary: '₹4–Unlimited', desc: 'Compete at national and international tournaments, aiming for grand titles.' },
      { name: 'Athlete (Track & Field)', stream: 'SAI NIS Academy + BA Physical Education', exams: ['SAI NIS Academy', 'State Athletics Championships'], salary: '₹3–15 LPA', desc: 'Compete in sprints, throws, jumps, and marathons at national level.' },
      { name: 'Sports Coach / Trainer', stream: 'NIS Patiala Diploma / BA Physical Education', exams: ['NIS Patiala Diploma', 'NSNIS Coaching Certificate'], salary: '₹3–15 LPA', desc: 'Train athletes at academies, schools, and professional sports franchises.' },
      { name: 'Yoga Instructor / Wellness Coach', stream: 'QCI Yoga Certification + BA degree', exams: ['QCI Yoga Certification', 'AYUSH Ministry Courses'], salary: '₹3–15 LPA', desc: 'Teach yoga and wellness to individuals, corporates, and retreat centres.' },
      { name: 'Sports Journalist / Commentator', stream: 'BJMC / BA Mass Comm → Sports Coverage', exams: ['IIMC Entrance', 'State Mass Comm Entrance'], salary: '₹4–18 LPA', desc: 'Cover sports events, analyse matches, and commentate for TV or digital media.' },
      { name: 'Sports Physiotherapist', stream: 'State BPT Entrance → BPT — 4.5 years', exams: ['State Physiotherapy Entrance'], salary: '₹4–15 LPA', desc: 'Treat sports injuries and keep athletes in peak physical condition.' },
    ],
  },
  {
    id: 'hospitality-culinary-arts',
    label: 'Hospitality, Travel & Culinary',
    icon: '🍽️',
    color: { bg: '#fff1f2', border: '#fecdd3', text: '#881337', dot: '#f43f5e', light: '#ffe4e6' },
    interests: ['business', 'creative'],
    careers: [
      { name: 'Hotel Manager', stream: 'BHM — 3–4 years / BA + PG Diploma Hospitality', exams: ['NCHM JEE', 'IHM Entrance'], salary: '₹5–25 LPA', desc: 'Lead operations at luxury hotels and global hospitality chains.' },
      { name: 'Travel & Tourism Professional', stream: 'BA Tourism / BHM — 3 years', exams: ['NCHM JEE', 'State Tourism Courses'], salary: '₹3–15 LPA', desc: 'Plan travel experiences and manage tour companies or tourism boards.' },
      { name: 'Event Planner / Manager', stream: 'BHM / Event Management Degree — 3 years', exams: ['NCHM JEE', 'Hotel Management Entrance'], salary: '₹3–18 LPA', desc: 'Plan and execute weddings, corporate events, and large-scale gatherings.' },
      { name: 'Airline Cabin Crew', stream: 'Airline-specific training (BA any stream)', exams: ['Airline Recruitment'], salary: '₹4–12 LPA', desc: 'Ensure passenger safety and comfort on domestic and international flights.' },
      { name: 'Chef / Culinary Artist', stream: 'Diploma Culinary Arts (IHM) — 1–3 years', exams: ['NCHM JEE', 'IHM Entrance'], salary: '₹3–20 LPA', desc: 'Create cuisine in top hotels, restaurants, and as an independent food professional.' },
      { name: 'Pastry Chef / Baker', stream: 'Culinary Arts Diploma — Pastry Specialisation', exams: ['IHM Entrance', 'Culinary School Admission'], salary: '₹3–12 LPA', desc: 'Create pastries, cakes, and desserts for bakeries, hotels, and private clients.' },
      { name: 'Food Stylist / Food Content Creator', stream: 'Culinary / Photography / Mass Comm — self-start', exams: ['No formal exam — portfolio / skill-based'], salary: '₹3–20 LPA', desc: 'Style and photograph food for brands, cookbooks, and digital platforms.' },
    ],
  },
  {
    id: 'digital-emerging-arts',
    label: 'Digital & Emerging Careers',
    icon: '🚀',
    color: { bg: '#eef2ff', border: '#c7d2fe', text: '#3730a3', dot: '#6366f1', light: '#e0e7ff' },
    interests: ['technology', 'business', 'creative'],
    careers: [
      { name: 'Content Creator / YouTuber', stream: 'Self-start on YouTube / Instagram (BA any stream)', exams: ['No formal exam — platform-based'], salary: '₹3–Unlimited', desc: 'Build an audience on YouTube, Instagram, or podcasts and monetise content.' },
      { name: 'Podcast Host / Radio Presenter', stream: 'BJMC / BA Mass Comm or self-start podcast', exams: ['IIMC Entrance', 'Mass Comm Entrance'], salary: '₹3–15 LPA', desc: 'Host audio shows covering culture, politics, entertainment, and storytelling.' },
      { name: 'Digital Marketer', stream: 'BA + Google / Meta Certifications (self-paced)', exams: ['Google / Meta / HubSpot Certifications'], salary: '₹4–18 LPA', desc: 'Grow brands through SEO, social media, paid ads, and email campaigns.' },
      { name: 'Advertising Creative Director', stream: 'BA Mass Comm / MICA — 3 years', exams: ['MICA Entrance (MICAT)', 'XIC Entrance'], salary: '₹6–30 LPA', desc: 'Lead brand campaigns and creative strategy for agencies and companies.' },
      { name: 'UX Researcher', stream: 'BA Psychology / Sociology + UX Bootcamp', exams: ['Portfolio / Bootcamp Admission'], salary: '₹5–20 LPA', desc: 'Research how users think and feel to improve digital products and interfaces.' },
      { name: 'E-commerce / D2C Entrepreneur', stream: 'BA + Self-start with digital execution', exams: ['No formal exam — execution-based'], salary: '₹3–Unlimited', desc: 'Launch or scale an online business selling products or services directly.' },
      { name: 'Graphic Designer', stream: 'BFA / NID / Self-learn Design Tools', exams: ['NID DAT', 'NIFT Entrance', 'UCEED'], salary: '₹3–15 LPA', desc: 'Create visual identities, illustrations, and digital content for brands.' },
      { name: 'Screenwriter / Script Writer', stream: 'BA English / FTII Screenwriting — 3 years', exams: ['FTII Entrance', 'NSD', 'Writing Fellowships'], salary: '₹4–25+ LPA', desc: 'Write scripts and stories for films, OTT series, and digital platforms.' },
      { name: 'Game Developer', stream: 'BA + Game Dev Bootcamp / MAAC / Arena Animation', exams: ['MAAC / Arena Animation Admission'], salary: '₹4–20 LPA', desc: 'Design and build video games for PC, mobile, and consoles.' },
      { name: 'Blockchain / Web3 Developer', stream: 'BA + Solidity / Web3 Online Certification', exams: ['Online Certifications'], salary: '₹8–35 LPA', desc: 'Build decentralised applications and smart contracts for fintech and tech.' },
    ],
  },
]

const VOCATIONAL_CATEGORIES = [
  {
    id: 'technical-vocational',
    label: 'Technical Trades & Diploma Courses',
    icon: '🔧',
    color: { bg: '#eff6ff', border: '#bfdbfe', text: '#1d4ed8', dot: '#3b82f6', light: '#dbeafe' },
    interests: ['technology'],
    careers: [
      { name: 'Polytechnic Diploma Engineering', stream: '3-year Diploma → B.Tech 2nd Year Lateral Entry', exams: ['State Polytechnic Entrance', 'Lateral Entry Test'], salary: '₹3–10 LPA', desc: 'Practical diploma that allows direct entry to B.Tech 2nd year.' },
      { name: 'Automobile / EV Technician (ITI)', stream: 'ITI Automobile — 2 years', exams: ['State ITI Entrance'], salary: '₹3–10 LPA', desc: 'Service and repair cars, trucks, and electric vehicles.' },
      { name: 'Electrician / Wireman (ITI)', stream: 'ITI Electrician — 2 years', exams: ['State ITI Entrance'], salary: '₹3–8 LPA', desc: 'Handle electrical installations in residential, commercial, and industrial settings.' },
      { name: 'IT / Computer Hardware Tech (ITI)', stream: 'ITI COPA — 1 year', exams: ['State ITI Entrance'], salary: '₹3–10 LPA', desc: 'Maintain computers, networks, and IT infrastructure for businesses.' },
      { name: 'Web Developer (Certificate Course)', stream: 'Self-learn / 6-month Bootcamp', exams: ['No formal entrance — portfolio-based'], salary: '₹3–15 LPA', desc: 'Build websites and web apps — strong freelance and employment demand.' },
    ],
  },
  {
    id: 'hospitality-vocational',
    label: 'Hospitality, Culinary & Tourism',
    icon: '🍽️',
    color: { bg: '#fff1f2', border: '#fecdd3', text: '#881337', dot: '#f43f5e', light: '#ffe4e6' },
    interests: ['business', 'creative'],
    careers: [
      { name: 'Hotel Manager', stream: 'BHM / Diploma Hotel Management — 3–4 years', exams: ['NCHM JEE', 'IHM Entrance'], salary: '₹5–25 LPA', desc: 'Lead operations at luxury hotels and global hospitality chains.' },
      { name: 'Chef / Culinary Artist', stream: 'Diploma Culinary Arts (IHM) — 1–3 years', exams: ['NCHM JEE', 'IHM Entrance'], salary: '₹3–20 LPA', desc: 'Create cuisine in top hotels, restaurants, and as an independent food professional.' },
      { name: 'Event Planner / Manager', stream: 'BHM / Event Management Degree', exams: ['NCHM JEE', 'Hotel Management Entrance'], salary: '₹3–18 LPA', desc: 'Plan and execute weddings, corporate events, concerts, and large-scale gatherings.' },
      { name: 'Travel & Tourism Professional', stream: 'BA/Diploma Tourism & Travel Management', exams: ['NCHM JEE', 'State Tourism Entrance'], salary: '₹3–15 LPA', desc: 'Manage travel experiences, tour operations, and tourism boards.' },
      { name: 'Airline Cabin Crew', stream: 'Airline-specific training programme', exams: ['Airline Recruitment'], salary: '₹4–12 LPA', desc: 'Ensure passenger safety and comfort on domestic and international flights.' },
      { name: 'Pastry Chef / Baker', stream: 'Diploma Culinary Arts — Pastry Specialisation', exams: ['IHM Entrance', 'Culinary School Admission'], salary: '₹3–12 LPA', desc: 'Create pastries, cakes, and desserts for bakeries, hotels, and private clients.' },
    ],
  },
  {
    id: 'healthcare-vocational',
    label: 'Healthcare Support Roles',
    icon: '💊',
    color: { bg: '#ecfdf5', border: '#a7f3d0', text: '#065f46', dot: '#10b981', light: '#d1fae5' },
    interests: ['healthcare'],
    careers: [
      { name: 'ANM (Auxiliary Nurse Midwife)', stream: 'ANM Diploma — 2 years', exams: ['State ANM Entrance'], salary: '₹2–7 LPA', desc: 'Community health worker role in primary health centres and rural areas.' },
      { name: 'GNM (General Nursing & Midwifery)', stream: 'GNM Diploma — 3 years', exams: ['State GNM Entrance'], salary: '₹2.5–8 LPA', desc: 'Work as a nurse in hospitals, maternity homes, and community health.' },
      { name: 'Pharmacy Assistant (D.Pharm)', stream: 'D.Pharm Diploma — 2 years', exams: ['State Pharmacy CET'], salary: '₹2.5–8 LPA', desc: 'Dispense medicines and assist pharmacists at hospitals and retail pharmacies.' },
      { name: 'Dental Assistant (Diploma)', stream: 'Diploma Dental Hygiene — 2 years', exams: ['State Dental Council Entrance'], salary: '₹2.5–7 LPA', desc: 'Support dentists with procedures, patient prep, and clinical hygiene.' },
    ],
  },
  {
    id: 'beauty-wellness-vocational',
    label: 'Beauty, Wellness & Fitness',
    icon: '💆',
    color: { bg: '#fdf2f8', border: '#f9a8d4', text: '#9d174d', dot: '#ec4899', light: '#fce7f3' },
    interests: ['creative', 'healthcare'],
    careers: [
      { name: 'Cosmetologist / Hair Stylist', stream: 'Diploma Cosmetology (VLCC / Lakme Academy) — 1–2 years', exams: ['Institute Admission'], salary: '₹2.5–12 LPA', desc: 'Provide hair, skin, and beauty services at salons, film sets, and fashion shows.' },
      { name: 'Makeup Artist', stream: 'Professional Makeup Diploma — 6–12 months', exams: ['Institute Admission / Portfolio'], salary: '₹3–20 LPA', desc: 'Work in weddings, fashion shows, film sets, and TV productions.' },
      { name: 'Yoga Instructor / Wellness Coach', stream: 'QCI Yoga Certification / Fitness Diploma', exams: ['QCI Yoga Certification', 'ACE / ISSA Fitness Certification'], salary: '₹3–15 LPA', desc: 'Train clients at gyms, yoga studios, and corporate wellness programmes.' },
    ],
  },
  {
    id: 'sports-fitness-vocational',
    label: 'Sports & Fitness',
    icon: '🏆',
    color: { bg: '#f0fdf4', border: '#bbf7d0', text: '#14532d', dot: '#16a34a', light: '#dcfce7' },
    interests: ['healthcare'],
    careers: [
      { name: 'Professional Cricketer', stream: 'State Cricket Academy + Certificate / Diploma optional', exams: ['State U-19 Trials', 'NCA Academy Selection'], salary: '₹5–Unlimited', desc: 'Play district, state, and national cricket aiming for the Indian team and IPL.' },
      { name: 'Football / Hockey Player', stream: 'SAI / Club Academy + any diploma', exams: ['SAI Academy Trials', 'I-League / Hockey India Trials'], salary: '₹3–20 LPA', desc: "Pursue a professional career in India's growing football and hockey leagues." },
      { name: 'Tennis / Badminton Player', stream: 'AITA / BAI Academy + any diploma', exams: ['AITA / BAI Academy Trials'], salary: '₹4–Unlimited', desc: 'Compete at national and international tournaments, aiming for grand titles.' },
      { name: 'Athlete (Track & Field)', stream: 'SAI NIS Academy + Diploma Physical Education', exams: ['SAI NIS Academy', 'State Athletics Championships'], salary: '₹3–15 LPA', desc: 'Compete in sprints, throws, jumps, and marathons at national level.' },
      { name: 'Sports Coach / Trainer', stream: 'NIS Patiala Diploma / Diploma Physical Education', exams: ['NIS Patiala Diploma', 'NSNIS Coaching Certificate'], salary: '₹3–15 LPA', desc: 'Train athletes at academies, schools, and professional sports franchises.' },
      { name: 'Yoga Instructor / Wellness Coach', stream: 'QCI Yoga Certification + Fitness Diploma', exams: ['QCI Yoga Certification', 'AYUSH Ministry Courses'], salary: '₹3–15 LPA', desc: 'Teach yoga and wellness to individuals, corporates, and retreat centres.' },
      { name: 'Sports Journalist / Commentator', stream: 'Diploma Mass Comm / Journalism → Sports Coverage', exams: ['State Mass Comm Entrance'], salary: '₹4–18 LPA', desc: 'Cover sports events, analyse matches, and commentate for TV or digital media.' },
      { name: 'Sports Physiotherapist', stream: 'State BPT Entrance → BPT — 4.5 years', exams: ['State Physiotherapy Entrance'], salary: '₹4–15 LPA', desc: 'Treat sports injuries and keep athletes in peak physical condition.' },
    ],
  },
  {
    id: 'education-social-vocational',
    label: 'Education & Social Impact',
    icon: '📚',
    color: { bg: '#fefce8', border: '#fef08a', text: '#713f12', dot: '#ca8a04', light: '#fef9c3' },
    interests: ['education', 'government'],
    careers: [
      { name: 'Teacher', stream: 'Diploma in Education (D.Ed) — 2 years', exams: ['CTET', 'State TET', 'D.Ed Entrance'], salary: '₹3–10 LPA', desc: 'Teach at primary or secondary schools — D.Ed is the shortest route to teaching.' },
      { name: 'Special Educator', stream: 'Diploma Special Education — 1–2 years (RCI approved)', exams: ['RCI Registration'], salary: '₹3–8 LPA', desc: 'Teach and support children with learning disabilities and special needs.' },
      { name: 'Social Worker', stream: 'Certificate / Diploma Social Work → BSW lateral entry', exams: ['NGO / Government Recruitment'], salary: '₹3–12 LPA', desc: 'Drive community development and grassroots change through NGOs and government.' },
      { name: 'Psychologist', stream: 'BA Psychology + MA Psychology (lateral entry via CUET)', exams: ['CUET', 'State PG Entrance'], salary: '₹4–18 LPA', desc: 'Help people manage mental health, career choices, and personal challenges.' },
      { name: 'College Professor / Researcher', stream: 'Diploma → Degree (lateral) → MA → UGC NET', exams: ['UGC NET', 'SET'], salary: '₹5–20 LPA', desc: 'Teach at college level after upgrading qualifications through lateral entry.' },
    ],
  },
  {
    id: 'digital-emerging-vocational',
    label: 'Digital & Emerging Careers',
    icon: '🚀',
    color: { bg: '#eef2ff', border: '#c7d2fe', text: '#3730a3', dot: '#6366f1', light: '#e0e7ff' },
    interests: ['technology', 'business', 'creative'],
    careers: [
      { name: 'Content Creator / YouTuber', stream: 'Self-start on YouTube / Instagram (any background)', exams: ['No formal exam — platform-based'], salary: '₹3–Unlimited', desc: 'Build an audience on YouTube, Instagram, or podcasts and monetise content.' },
      { name: 'Digital Marketer', stream: 'Google / Meta Certifications + short course (3–6 months)', exams: ['Google / Meta / HubSpot Certifications'], salary: '₹4–18 LPA', desc: 'Grow brands through SEO, social media, paid ads, and email campaigns.' },
      { name: 'Web Developer (Certificate Course)', stream: 'Self-learn / 6-month Bootcamp', exams: ['No formal entrance — portfolio-based'], salary: '₹3–15 LPA', desc: 'Build websites and web apps — strong freelance and employment demand.' },
      { name: 'E-commerce / D2C Entrepreneur', stream: 'Self-start with basic digital skills + any diploma', exams: ['No formal exam — execution-based'], salary: '₹3–Unlimited', desc: 'Launch or scale an online business selling products or services directly.' },
      { name: 'Podcast Host / Radio Presenter', stream: 'Diploma Mass Comm / Self-start podcast', exams: ['Mass Comm Institute Admission'], salary: '₹3–15 LPA', desc: 'Host audio shows covering culture, entertainment, and local topics.' },
      { name: 'Graphic Designer', stream: 'Diploma Graphic Design (MAAC / Arena / NIMS) — 1 year', exams: ['Institute Admission'], salary: '₹3–15 LPA', desc: 'Create visual identities, illustrations, and digital content for brands.' },
      { name: 'Game Developer', stream: 'Diploma Game Design — MAAC / Arena Animation — 1–2 years', exams: ['MAAC / Arena Animation Admission'], salary: '₹4–20 LPA', desc: 'Design and build video games for PC, mobile, and consoles.' },
      { name: 'Blockchain / Web3 Developer', stream: 'ITI / Diploma CS + Solidity / Web3 Online Certification', exams: ['Online Certifications'], salary: '₹8–35 LPA', desc: 'Build decentralised applications and smart contracts — high-paying tech path.' },
    ],
  },
]

const TWELFTH_CATALOGUE_MAP = {
  'Science-PCM':  PCM_CATEGORIES,
  'Science-PCB':  PCB_CATEGORIES,
  'Science-PCMB': [...PCM_CATEGORIES, ...PCB_CATEGORIES],
  'Commerce':     COMMERCE_CATEGORIES,
  'Arts':         ARTS_CATEGORIES,
  'Vocational':   VOCATIONAL_CATEGORIES,
}

export function getTwelfthCatalogue(stream, interests = []) {
  const cats = TWELFTH_CATALOGUE_MAP[stream] || ARTS_CATEGORIES
  if (!interests.length) return cats
  return [...cats].sort((a, b) => {
    const sa = a.interests.filter(i => interests.includes(i)).length
    const sb = b.interests.filter(i => interests.includes(i)).length
    return sb - sa
  })
}

// ── Comprehensive catalogue for Graduation students (degree-field-specific) ───

const GRAD_ENGINEERING = [
  {
    id: 'tech-roles-eng',
    label: 'Tech Industry Roles',
    icon: '💻',
    color: { bg: '#eff6ff', border: '#bfdbfe', text: '#1d4ed8', dot: '#3b82f6', light: '#dbeafe' },
    interests: ['technology', 'science'],
    careers: [
      { name: 'Software Engineer', stream: 'Direct employment — B.Tech CS/IT/ECE', exams: ['No exam — coding interview (DSA, LLD)'], salary: '₹6–30 LPA', desc: 'Build products at tech companies, startups, or IT services firms.' },
      { name: 'Data Scientist / ML Engineer', stream: 'Upskill with Python, SQL, ML → direct roles', exams: ['No formal exam — Kaggle portfolio + interviews'], salary: '₹8–30 LPA', desc: 'Build models and extract insights — B.Tech is the strongest entry path.' },
      { name: 'Cloud / DevOps Engineer', stream: 'AWS / Azure / GCP Certification → roles', exams: ['AWS SAA / Azure AZ-900 / GCP ACE Certifications'], salary: '₹8–28 LPA', desc: 'Deploy and manage scalable infrastructure on the cloud.' },
      { name: 'Cybersecurity Analyst', stream: 'CEH / CISSP Certification → security roles', exams: ['CEH', 'CompTIA Security+', 'OSCP'], salary: '₹6–25 LPA', desc: 'Protect companies from cyber threats — very high demand post-2020.' },
      { name: 'Full Stack Developer', stream: 'React/Node.js/Django portfolio → direct roles', exams: ['No formal exam — portfolio-based hiring'], salary: '₹5–22 LPA', desc: 'Build end-to-end web applications for startups and product companies.' },
      { name: 'Mobile App Developer', stream: 'Flutter / React Native / Swift → direct roles', exams: ['No formal exam — play store portfolio'], salary: '₹5–20 LPA', desc: 'Build Android and iOS apps for companies or as an independent developer.' },
      { name: 'Product Manager', stream: 'B.Tech + 2–3 years exp → PM roles / MBA', exams: ['No formal exam — case interviews; MBA via CAT/GMAT is preferred'], salary: '₹12–45 LPA', desc: "Own a product's roadmap and vision at a tech company or startup." },
      { name: 'Blockchain / Web3 Developer', stream: 'Solidity / Rust / Web3.js certification', exams: ['No formal exam — GitHub portfolio'], salary: '₹10–40 LPA', desc: 'Build decentralised apps, DeFi protocols, and smart contracts.' },
    ],
  },
  {
    id: 'higher-edu-eng',
    label: 'Higher Education (M.Tech / MS / MBA)',
    icon: '🎓',
    color: { bg: '#eef2ff', border: '#c7d2fe', text: '#3730a3', dot: '#6366f1', light: '#e0e7ff' },
    interests: ['technology', 'science'],
    careers: [
      { name: 'M.Tech at IIT / NIT (via GATE)', stream: 'M.Tech — 2 years (full scholarship in IITs)', exams: ['GATE'], salary: '₹8–25 LPA (post M.Tech)', desc: 'Deepen technical expertise; GATE score also opens PSU recruitments.' },
      { name: 'MS Abroad (US / Germany / Canada)', stream: 'MS in CS / ECE / DS — 1.5–2 years abroad', exams: ['GRE', 'TOEFL / IELTS'], salary: '₹25–80 LPA (on return or foreign posting)', desc: 'Top global MS programmes — Stanford, CMU, TU Munich. Strong ROI for tech roles.' },
      { name: 'MBA at IIM (via CAT)', stream: 'MBA — 2 years at IIM Ahmedabad / B / C', exams: ['CAT (target 99+ percentile for IIM A/B/C)'], salary: '₹20–60 LPA', desc: 'Transition to consulting, product management, or business leadership.' },
      { name: 'PhD / Research (IISc / IIT)', stream: 'PhD — 4–6 years; research stipend ₹35–75K/month', exams: ['GATE', 'CSIR-NET', 'JEST'], salary: '₹8–25 LPA (research/academia)', desc: 'Pursue fundamental research at TIFR, IISc, IIT — ideal for academia or R&D.' },
      { name: 'MCA (Master of Computer Applications)', stream: 'MCA — 2 years (govt / private)', exams: ['NIMCET', 'State MCA Entrance', 'CUET PG'], salary: '₹6–18 LPA', desc: 'Advanced software skills — good option for non-CS B.Tech or B.Sc CS graduates.' },
    ],
  },
  {
    id: 'govt-psu-eng',
    label: 'Government Services & PSU',
    icon: '🏛️',
    color: { bg: '#f8fafc', border: '#e2e8f0', text: '#334155', dot: '#64748b', light: '#f1f5f9' },
    interests: ['government'],
    careers: [
      { name: 'PSU Engineer (ONGC / BHEL / NTPC / PGCIL)', stream: 'Direct PSU recruitment via GATE score', exams: ['GATE'], salary: '₹8–20 LPA + perks', desc: 'Join top PSUs — ONGC, BHEL, NTPC, PGCIL use GATE scores for direct selection.' },
      { name: 'IES / ESE Officer (Union PSC)', stream: 'Engineering Services Examination', exams: ['UPSC ESE / IES Exam'], salary: '₹8–20 LPA', desc: 'Elite engineering cadre running railways, defence, telecom, and public works.' },
      { name: 'IAS / IPS Officer (UPSC)', stream: 'UPSC Civil Services — engineering graduates are competitive', exams: ['UPSC Civil Services Prelims + Mains'], salary: '₹8–20 LPA', desc: 'Engineers top UPSC year after year — strong analytical base helps.' },
      { name: 'Defence Officer (CDS / AFCAT)', stream: 'CDS for Army/Navy; AFCAT for Air Force', exams: ['CDS Exam (UPSC)', 'AFCAT Exam', 'SSB Interview'], salary: '₹7–20 LPA + perks', desc: 'Serve as a commissioned officer after graduation via CDS or AFCAT.' },
      { name: 'ISRO / DRDO Scientist-Engineer', stream: 'ISRO Scientist/Engineer SC via GATE or direct exam', exams: ['ISRO Recruitment Exam', 'DRDO CEPTAM', 'GATE'], salary: '₹7–20 LPA', desc: 'Work on space missions, defence tech, and cutting-edge R&D at ISRO / DRDO.' },
      { name: 'Railway Officer (RRB JE/SSE)', stream: 'RRB Junior Engineer / Senior Section Engineer', exams: ['RRB JE / SSE Exam'], salary: '₹5–15 LPA', desc: "Manage India's railway infrastructure in the technical engineering cadre." },
    ],
  },
  {
    id: 'research-startup-eng',
    label: 'Research, Startups & Entrepreneurship',
    icon: '🚀',
    color: { bg: '#ecfeff', border: '#a5f3fc', text: '#164e63', dot: '#06b6d4', light: '#cffafe' },
    interests: ['technology', 'science'],
    careers: [
      { name: 'Startup Founder (Tech)', stream: 'Self-start — validate idea, build MVP, raise funding', exams: ['No formal exam — pitch decks and traction'], salary: '₹0–Unlimited', desc: 'Build a tech startup — engineering background is the most common founder profile.' },
      { name: 'BARC Scientific Officer', stream: 'BARC OCES/DGFS programme for B.Tech graduates', exams: ['BARC OCES Exam (GATE-linked)', 'GATE'], salary: '₹8–20 LPA', desc: 'Research nuclear energy, reactor design, and radiation physics at BARC, Mumbai.' },
      { name: 'Deep Tech Researcher (TIFR / IISc)', stream: 'Research Associate / PhD at TIFR, IISc, IISER', exams: ['CSIR-NET', 'JEST', 'JGEEBILS'], salary: '₹6–20 LPA', desc: 'Conduct fundamental research in quantum computing, nanotechnology, and physics.' },
      { name: 'Management Consultant (MBA → Consulting)', stream: 'MBA at IIM → McKinsey / BCG / Bain / Big 4', exams: ['CAT / GMAT', 'Firm Interviews (case study rounds)'], salary: '₹20–60 LPA', desc: 'Solve complex business problems — engineers are highly sought by top consultancies.' },
    ],
  },
]

const GRAD_MEDICAL = [
  {
    id: 'pg-clinical-med',
    label: 'PG Clinical Specialisation (NEET-PG)',
    icon: '🏥',
    color: { bg: '#ecfdf5', border: '#a7f3d0', text: '#065f46', dot: '#10b981', light: '#d1fae5' },
    interests: ['healthcare', 'science'],
    careers: [
      { name: 'MD General Medicine', stream: 'MD (Doctor of Medicine) — 3 years', exams: ['NEET-PG', 'INI CET'], salary: '₹15–60+ LPA', desc: 'Specialize in internal medicine — highest-demand MD branch in India.' },
      { name: 'MS Surgery', stream: 'MS General Surgery — 3 years', exams: ['NEET-PG', 'INI CET'], salary: '₹15–80+ LPA', desc: 'Perform operations across laparoscopy, trauma, GI, and general surgery.' },
      { name: 'MD Paediatrics', stream: 'MD Paediatrics — 3 years', exams: ['NEET-PG', 'INI CET'], salary: '₹12–50 LPA', desc: 'Specialize in child health — growing demand in tier-2 and tier-3 cities.' },
      { name: 'MD Radiology', stream: 'MD Radiology — 3 years', exams: ['NEET-PG', 'INI CET'], salary: '₹18–80+ LPA', desc: 'Interpret imaging — among the highest-earning medical specializations.' },
      { name: 'MS Orthopaedics', stream: 'MS Orthopaedics — 3 years', exams: ['NEET-PG', 'INI CET'], salary: '₹15–70+ LPA', desc: 'Treat bone, joint, and sports injuries — high surgical volume and earnings.' },
      { name: 'MD Psychiatry', stream: 'MD Psychiatry — 3 years', exams: ['NEET-PG', 'INI CET'], salary: '₹12–40 LPA', desc: 'Address India\'s growing mental health crisis — rising demand and scope.' },
      { name: 'DNB (National Board) Specialization', stream: 'DNB — 3 years at accredited hospitals', exams: ['NEET-PG', 'DNB CET'], salary: '₹12–60+ LPA', desc: 'Alternative to MD/MS — allows training in private super-speciality hospitals.' },
      { name: 'DM / MCh Super-Speciality', stream: 'DM (Medical) or MCh (Surgical) — 3 years', exams: ['NEET-SS', 'INI SS'], salary: '₹20–100+ LPA', desc: 'Elite super-specialisations like Neurology, Cardiology, Neurosurgery, Urology.' },
    ],
  },
  {
    id: 'public-health-research-med',
    label: 'Public Health, Research & Global Health',
    icon: '🌍',
    color: { bg: '#ecfeff', border: '#a5f3fc', text: '#164e63', dot: '#06b6d4', light: '#cffafe' },
    interests: ['healthcare', 'science'],
    careers: [
      { name: 'MPH (Master of Public Health)', stream: 'MPH — 2 years at TISS, AIIMS, Sree Chitra, or abroad', exams: ['TISS Entrance', 'AIIMS MPH Entrance', 'GRE (abroad)'], salary: '₹8–25 LPA', desc: 'Lead disease surveillance, policy, and population health programmes.' },
      { name: 'MD Community Medicine', stream: 'MD Community Medicine — 3 years', exams: ['NEET-PG'], salary: '₹8–20 LPA', desc: 'Drive public health programmes at district health departments and WHO.' },
      { name: 'Clinical Research Associate', stream: 'Clinical Research Certification / MBA Pharma', exams: ['ACRP Certification', 'ICH-GCP Training'], salary: '₹6–18 LPA', desc: 'Manage clinical trials for pharma and biotech companies.' },
      { name: 'Research Scientist (ICMR / DST)', stream: 'Research Fellow / Scientist at ICMR, DBT', exams: ['ICMR JRF Exam', 'DBT BET'], salary: '₹7–18 LPA', desc: 'Conduct medical and biomedical research at India\'s top research institutes.' },
    ],
  },
  {
    id: 'hospital-mgmt-pharma-med',
    label: 'Hospital Management, Pharma & MedTech',
    icon: '🏢',
    color: { bg: '#f5f3ff', border: '#ddd6fe', text: '#5b21b6', dot: '#8b5cf6', light: '#ede9fe' },
    interests: ['business', 'healthcare'],
    careers: [
      { name: 'Hospital Administrator / Medical Director', stream: 'MBA Healthcare Management — 2 years', exams: ['CAT / GMAT', 'TISS Entrance', 'XLRI Entrance'], salary: '₹12–40 LPA', desc: 'Lead hospital operations, strategy, and quality at corporate hospital chains.' },
      { name: 'Medical Science Liaison (Pharma)', stream: 'MSL role at pharma — MBBS is preferred', exams: ['Company Recruitment Process'], salary: '₹10–30 LPA', desc: 'Bridge between pharma companies and doctors — scientific communication role.' },
      { name: 'Medical Device Sales & Marketing', stream: 'MBA Marketing / Direct Pharma Sales role', exams: ['Company Recruitment'], salary: '₹8–25 LPA', desc: 'Market surgical robots, diagnostic equipment, and implants to hospitals.' },
      { name: 'Pharma R&D Scientist', stream: 'MSc Pharmacology / PhD → Pharma R&D', exams: ['GATE', 'GPAT'], salary: '₹8–25 LPA', desc: 'Develop new drugs and therapies at domestic and multinational pharma companies.' },
    ],
  },
  {
    id: 'govt-intl-med',
    label: 'Government Services & International Practice',
    icon: '🎖️',
    color: { bg: '#fefce8', border: '#fef08a', text: '#713f12', dot: '#ca8a04', light: '#fef9c3' },
    interests: ['government', 'healthcare'],
    careers: [
      { name: 'Railway Medical Service (RMS)', stream: 'Central Health Services / Railway Medical', exams: ['UPSC CMS Exam'], salary: '₹8–18 LPA', desc: 'Join Indian Railways as a medical officer across zones.' },
      { name: 'UPSC Civil Services (IAS/IPS)', stream: 'UPSC — medical graduates are successful', exams: ['UPSC Civil Services Prelims + Mains'], salary: '₹8–20 LPA', desc: 'Medical graduates crack UPSC with public health policy as a key strength.' },
      { name: 'USMLE (Practice in USA)', stream: 'USMLE Steps 1, 2 CK, 2 CS → US Residency', exams: ['USMLE Step 1', 'USMLE Step 2 CK', 'USMLE Step 3'], salary: '₹60–200+ LPA (US salary)', desc: 'Qualify for US medical residency and eventually practice as a physician in America.' },
      { name: 'PLAB (Practice in UK)', stream: 'PLAB 1 + PLAB 2 → GMC Registration', exams: ['PLAB 1 & 2 (GMC, UK)'], salary: '₹35–120 LPA (UK salary)', desc: 'Qualify for NHS registration and practice as a doctor in the United Kingdom.' },
    ],
  },
]

const GRAD_COMMERCE = [
  {
    id: 'finance-investment-comm',
    label: 'Finance, Investment & Banking',
    icon: '📈',
    color: { bg: '#fffbeb', border: '#fde68a', text: '#92400e', dot: '#f59e0b', light: '#fef3c7' },
    interests: ['finance', 'business'],
    careers: [
      { name: 'Investment Banker', stream: 'MBA Finance at IIM / ISB → Investment Bank', exams: ['CAT / GMAT', 'CFA (supplement)'], salary: '₹15–60+ LPA', desc: 'Help companies raise capital, go public, and execute mergers — top finance career.' },
      { name: 'CFA Charterholder', stream: 'CFA Level 1 → Level 2 → Level 3 (3 exams)', exams: ['CFA Level 1', 'CFA Level 2', 'CFA Level 3'], salary: '₹8–35 LPA', desc: 'Gold standard of investment analysis — highly respected in equity research and asset management.' },
      { name: 'Equity Research Analyst', stream: 'B.Com / BBA + CFA → Research Analyst', exams: ['CFA Exams', 'NISM Certifications'], salary: '₹6–25 LPA', desc: 'Analyse companies and recommend buy/sell to investors and fund managers.' },
      { name: 'FRM (Financial Risk Manager)', stream: 'FRM Part 1 + Part 2 exam series', exams: ['FRM Part 1', 'FRM Part 2 (GARP)'], salary: '₹8–30 LPA', desc: 'Manage market, credit, and operational risk at banks and financial institutions.' },
      { name: 'Actuary', stream: 'IAI Actuarial Papers — 15 exams over 4–7 years', exams: ['IAI Actuarial Exam Series'], salary: '₹10–45 LPA', desc: 'Use advanced maths to price insurance and manage financial risk — rare skill, very high pay.' },
      { name: 'Banking Officer (RBI / SBI)', stream: 'B.Com / BBA → IBPS / SBI PO / RBI Grade B', exams: ['RBI Grade B', 'SBI PO', 'IBPS PO'], salary: '₹6–18 LPA', desc: 'Join central bank, nationalised banks, or private banks in officer-grade roles.' },
    ],
  },
  {
    id: 'professional-certs-comm',
    label: 'Professional Certifications (CA / CS / CMA)',
    icon: '📊',
    color: { bg: '#ecfdf5', border: '#a7f3d0', text: '#065f46', dot: '#10b981', light: '#d1fae5' },
    interests: ['finance'],
    careers: [
      { name: 'CA Final (Chartered Accountant)', stream: 'CA Intermediate → Articleship → CA Final', exams: ['CA Intermediate (if not cleared)', 'CA Final'], salary: '₹8–30+ LPA', desc: 'Complete the CA journey — graduates can skip CA Foundation if Commerce background.' },
      { name: 'CS Professional (Company Secretary)', stream: 'CS Executive → CS Professional', exams: ['CS Executive (if not cleared)', 'CS Professional'], salary: '₹6–20 LPA', desc: 'Complete the CS qualification for corporate secretarial and compliance roles.' },
      { name: 'CMA Final (Cost Accountant)', stream: 'CMA Intermediate → CMA Final', exams: ['CMA Intermediate', 'CMA Final (ICMAI)'], salary: '₹6–18 LPA', desc: 'Complete CMA for cost management roles in manufacturing and services.' },
    ],
  },
  {
    id: 'mba-management-comm',
    label: 'MBA & Management Education',
    icon: '💼',
    color: { bg: '#eef2ff', border: '#c7d2fe', text: '#3730a3', dot: '#6366f1', light: '#e0e7ff' },
    interests: ['business'],
    careers: [
      { name: 'MBA at IIM (via CAT)', stream: 'MBA — 2 years at IIM Ahmedabad / B / C', exams: ['CAT (target 95–99 percentile)'], salary: '₹20–60 LPA', desc: 'Premier management education — opens consulting, finance, and leadership roles.' },
      { name: 'PGDM at ISB Hyderabad', stream: 'PGP — 1 year at ISB', exams: ['GMAT (700+ target)', 'GRE'], salary: '₹25–70 LPA', desc: "India's top 1-year MBA — ideal for those with 3–5 years of experience." },
      { name: 'MBA Abroad (US / UK / Europe)', stream: 'MBA — 1.5–2 years at top global B-school', exams: ['GMAT (700+)', 'TOEFL / IELTS'], salary: '₹35–100 LPA', desc: 'Wharton, LBS, INSEAD — global MBA for international career ambitions.' },
      { name: 'Management Consultant (Post-MBA)', stream: 'MBA → McKinsey / BCG / Bain / Big 4', exams: ['CAT / GMAT', 'Case Interviews'], salary: '₹20–60 LPA', desc: 'Solve complex business problems for top companies across industries.' },
    ],
  },
  {
    id: 'govt-law-comm',
    label: 'Government, Law & Cross-Discipline',
    icon: '⚖️',
    color: { bg: '#f8fafc', border: '#e2e8f0', text: '#334155', dot: '#64748b', light: '#f1f5f9' },
    interests: ['government', 'finance'],
    careers: [
      { name: 'IAS / IPS Officer (UPSC)', stream: 'UPSC — Commerce optional (Economics) is strong', exams: ['UPSC Civil Services Prelims + Mains'], salary: '₹8–20 LPA', desc: 'Commerce graduates top UPSC consistently with Economics or Commerce optional.' },
      { name: 'SEBI / IRDAI Officer', stream: 'SEBI Grade A / IRDAI Officer', exams: ['SEBI Grade A Exam', 'IRDAI Assistant Manager Exam'], salary: '₹8–18 LPA', desc: 'Regulate securities markets (SEBI) or insurance sector (IRDAI) from within.' },
      { name: 'Corporate Lawyer (3-Year LLB)', stream: '3-year LLB at NLU / Law School after graduation', exams: ['CLAT PG', 'DU LLB Entrance', 'State Law Entrance'], salary: '₹8–50+ LPA', desc: 'Commerce + LLB is a powerful combination for tax, corporate, and banking law.' },
      { name: 'SSC CGL (Income Tax / Audit)', stream: 'SSC CGL — any graduation', exams: ['SSC CGL Exam'], salary: '₹5–12 LPA', desc: 'Join Central Government in Income Tax, Audit, or Customs departments.' },
    ],
  },
  {
    id: 'entrepreneur-digital-comm',
    label: 'Entrepreneurship & Digital Business',
    icon: '🚀',
    color: { bg: '#f5f3ff', border: '#ddd6fe', text: '#5b21b6', dot: '#8b5cf6', light: '#ede9fe' },
    interests: ['business', 'technology'],
    careers: [
      { name: 'Fintech Startup Founder', stream: 'Self-start with domain knowledge in finance + tech', exams: ['No formal exam — traction and funding'], salary: '₹0–Unlimited', desc: 'Build fintech products in payments, lending, or wealth management.' },
      { name: 'E-commerce / D2C Brand', stream: 'Launch brand on Meesho / Amazon / own website', exams: ['No formal exam — execution-based'], salary: '₹4–Unlimited', desc: 'Sell products online — Commerce background helps manage accounts and logistics.' },
      { name: 'CA Practice (Own Firm)', stream: 'Post CA qualification → own CA firm', exams: ['CA Final'], salary: '₹6–50+ LPA', desc: 'Start your own chartered accountancy practice serving SMEs and corporates.' },
      { name: 'Digital Marketer / Growth Manager', stream: 'Certifications + execution portfolio', exams: ['Google Analytics', 'Meta Blueprint', 'HubSpot Certs (free)'], salary: '₹5–20 LPA', desc: 'Drive customer acquisition and revenue growth through digital channels.' },
    ],
  },
]

const GRAD_ARTS = [
  {
    id: 'civil-services-arts-grad',
    label: 'Civil Services & Government (Primary Path)',
    icon: '🏛️',
    color: { bg: '#f5f3ff', border: '#ddd6fe', text: '#5b21b6', dot: '#8b5cf6', light: '#ede9fe' },
    interests: ['government', 'education'],
    careers: [
      { name: 'IAS Officer (UPSC)', stream: 'Full-time UPSC prep — 12–18 months', exams: ['UPSC CSE Prelims', 'UPSC CSE Mains', 'Personality Test'], salary: '₹8–20 LPA', desc: "Humanities graduates dominate UPSC — your subjects overlap directly with the syllabus." },
      { name: 'IPS Officer (UPSC)', stream: 'UPSC Civil Services — IPS allocation by rank', exams: ['UPSC Civil Services (same exam as IAS)'], salary: '₹8–18 LPA', desc: 'Lead law enforcement — IPS is allocated based on rank and service preference.' },
      { name: 'IFS Officer (Indian Foreign Service)', stream: 'UPSC Civil Services — highest-demand among Arts grads', exams: ['UPSC Civil Services'], salary: '₹8–20 LPA', desc: 'Represent India abroad as a diplomat — international relations and history are key.' },
      { name: 'State PSC Officer', stream: 'State PSC — 6–12 months preparation', exams: ['State PSC Prelims & Mains'], salary: '₹5–15 LPA', desc: 'Serve in state administration or police through State Public Service Commission.' },
      { name: 'SSC CGL / CHSL Officer', stream: 'SSC exams — any graduation', exams: ['SSC CGL', 'SSC CHSL'], salary: '₹5–12 LPA', desc: 'Join central government in Income Tax, CBI, Customs, or audit roles.' },
    ],
  },
  {
    id: 'law-arts-grad',
    label: 'Law & Legal Practice',
    icon: '⚖️',
    color: { bg: '#f8fafc', border: '#e2e8f0', text: '#334155', dot: '#64748b', light: '#f1f5f9' },
    interests: ['government'],
    careers: [
      { name: 'Lawyer / Advocate (3-Year LLB)', stream: '3-year LLB at NLU or reputed law school', exams: ['CLAT PG', 'DU LLB Entrance', 'State Law University Entrance'], salary: '₹5–50+ LPA', desc: 'Your Arts degree gives a strong advantage in Constitutional, Criminal, and International law.' },
      { name: 'LLM (Master of Laws)', stream: 'LLM — 1 year (post LLB)', exams: ['LLM Entrance Exam', 'CLAT PG'], salary: '₹8–40 LPA', desc: 'Specialize in Human Rights, International Law, Corporate Law, or IPR.' },
      { name: 'LLM Abroad (UK / US)', stream: 'LLM at Oxford, LSE, Columbia, Harvard', exams: ['LSAT', 'IELTS / TOEFL'], salary: '₹25–80 LPA', desc: 'International law qualifications open doors to UN, global law firms, and diplomacy.' },
      { name: 'Judiciary / District Judge', stream: 'BA LLB → Judicial Services Exam', exams: ['State Judicial Services Exam'], salary: '₹10–30 LPA', desc: 'Adjudicate cases at district courts after passing the state judicial services exam.' },
    ],
  },
  {
    id: 'media-journalism-arts-grad',
    label: 'Journalism, Media & Content',
    icon: '🎙️',
    color: { bg: '#fff7ed', border: '#fed7aa', text: '#9a3412', dot: '#ea580c', light: '#ffedd5' },
    interests: ['creative', 'education'],
    careers: [
      { name: 'Senior Journalist / Editor', stream: 'BA Journalism + MA Journalism or direct experience', exams: ['IIMC PG Diploma', 'AJK MCRC MA', 'State Mass Comm PG'], salary: '₹6–25 LPA', desc: 'Lead editorial teams at print, digital, or broadcast news organisations.' },
      { name: 'Screenwriter / Content Strategist', stream: 'Writing portfolio + FTII / NSD course', exams: ['FTII Screenwriting Entrance', 'Portfolio-based'], salary: '₹5–25+ LPA', desc: 'Write scripts for OTT platforms like Netflix, Amazon Prime, and SonyLIV.' },
      { name: 'Political / Policy Journalist', stream: 'BA Poly Sci + journalism experience', exams: ['IIMC Entrance', 'Press Accreditation'], salary: '₹6–20 LPA', desc: 'Cover Parliament, state assemblies, and government policy for top newsrooms.' },
      { name: 'Digital Content Creator', stream: 'Self-start — YouTube / podcast / newsletter', exams: ['No formal exam — audience and traction'], salary: '₹4–Unlimited', desc: 'Build an audience on digital platforms covering history, politics, or culture.' },
    ],
  },
  {
    id: 'social-sciences-grad',
    label: 'Social Sciences, Research & Policy',
    icon: '🌍',
    color: { bg: '#ecfeff', border: '#a5f3fc', text: '#164e63', dot: '#06b6d4', light: '#cffafe' },
    interests: ['education', 'science'],
    careers: [
      { name: 'MA / MSc (Higher Education)', stream: 'MA Psychology / Economics / Sociology / History — 2 years', exams: ['CUET PG', 'JNU Entrance', 'DU Entrance'], salary: '₹4–18 LPA', desc: 'Deepen expertise for research, academia, or specialised policy roles.' },
      { name: 'PhD Researcher', stream: 'PhD — 4–6 years at JNU / DU / Hyderabad / Abroad', exams: ['UGC NET JRF', 'State University Entrance'], salary: '₹6–20 LPA (academia)', desc: 'Conduct original research and contribute to knowledge in your field.' },
      { name: 'Public Policy Analyst', stream: 'MA Public Policy at TISS, NLSIU, ISI, or abroad', exams: ['TISS Entrance', 'GRE (abroad)'], salary: '₹7–25 LPA', desc: 'Design and evaluate government programmes at think tanks and policy bodies.' },
      { name: 'Social Worker / Development Professional', stream: 'MSW at TISS / XISS — 2 years', exams: ['TISS Entrance', 'XISS Entrance'], salary: '₹4–15 LPA', desc: 'Drive community development at NGOs, UN agencies, and government programmes.' },
      { name: 'Psychologist / Counsellor', stream: 'MA/MSc Psychology → RCI Registration or M.Phil', exams: ['CUET PG', 'RCI Registration'], salary: '₹5–20 LPA', desc: 'Provide therapy, counselling, and mental health support in schools and clinics.' },
    ],
  },
  {
    id: 'teaching-academia-arts-grad',
    label: 'Teaching & Academia',
    icon: '📚',
    color: { bg: '#fefce8', border: '#fef08a', text: '#713f12', dot: '#ca8a04', light: '#fef9c3' },
    interests: ['education'],
    careers: [
      { name: 'College Lecturer (UGC NET)', stream: 'UGC NET → Assistant Professor', exams: ['UGC NET', 'State SET'], salary: '₹6–18 LPA', desc: 'Teach and research at colleges and universities after clearing UGC NET.' },
      { name: 'School Teacher (B.Ed)', stream: 'BA + B.Ed (2 years) → CTET / State TET', exams: ['B.Ed Entrance', 'CTET', 'State TET'], salary: '₹3–10 LPA', desc: 'Teach Humanities subjects — Civics, History, Geography — at secondary schools.' },
      { name: 'PhD → Academic Career', stream: 'PhD (4–6 years) → Postdoc → Professor', exams: ['UGC JRF / CSIR NET', 'University Entrance'], salary: '₹8–25 LPA', desc: 'Build an academic career through PhD and postdoctoral research.' },
    ],
  },
  {
    id: 'management-transition-arts-grad',
    label: 'Management & Business Transition',
    icon: '💼',
    color: { bg: '#ecfdf5', border: '#a7f3d0', text: '#065f46', dot: '#10b981', light: '#d1fae5' },
    interests: ['business', 'government'],
    careers: [
      { name: 'MBA at IIM (via CAT)', stream: 'MBA — 2 years at IIM / XLRI / FMS / IIFT', exams: ['CAT (target 85–99 percentile)'], salary: '₹15–50 LPA', desc: 'Transition from Humanities to business — MBA accepts graduates from all disciplines.' },
      { name: 'HR Manager (MBA HR)', stream: 'MBA HR at XLRI / TISS / XIM', exams: ['XAT (XLRI)', 'TISS Entrance', 'CAT'], salary: '₹8–25 LPA', desc: 'Lead people strategy, talent acquisition, and organisational development.' },
      { name: 'NGO Programme Manager', stream: 'MSW / MBA NPM → programme management', exams: ['TISS Entrance', 'IRMA Entrance'], salary: '₹5–18 LPA', desc: 'Manage development programmes at national and international NGOs.' },
    ],
  },
]

const GRAD_SCIENCE = [
  {
    id: 'research-academia-sci',
    label: 'Research & Higher Education',
    icon: '🔬',
    color: { bg: '#ecfeff', border: '#a5f3fc', text: '#164e63', dot: '#06b6d4', light: '#cffafe' },
    interests: ['science', 'technology'],
    careers: [
      { name: 'MSc at IIT / IISc (via JAM)', stream: 'MSc — 2 years at IIT, IISc, IISER, NIT', exams: ['IIT JAM', 'CUET PG'], salary: '₹6–20 LPA (post-MSc)', desc: 'Advance your science foundation before a PhD or industry role.' },
      { name: 'PhD at IISc / IIT / TIFR', stream: 'PhD — 4–6 years; stipend ₹37–54K/month', exams: ['CSIR-NET JRF', 'GATE', 'JEST', 'JGEEBILS'], salary: '₹8–25 LPA (academia/research)', desc: 'Conduct world-class research in physics, chemistry, biology, or maths.' },
      { name: 'Postdoc Abroad (US / EU / UK)', stream: 'Postdoctoral Research — 2–3 years abroad', exams: ['No exam — research portfolio and recommendations'], salary: '₹20–50 LPA (foreign stipend)', desc: 'Work at MIT, Oxford, Max Planck, or Caltech as a postdoctoral researcher.' },
      { name: 'IISER / IISER Postdoc / Faculty', stream: 'Faculty / Research Scientist at IISER, NII, NCBS', exams: ['DST / DBT Fellowships', 'Position Advertisement'], salary: '₹8–20 LPA', desc: 'Build an academic science career at one of India\'s research institutes.' },
    ],
  },
  {
    id: 'govt-research-sci',
    label: 'Government Research Bodies',
    icon: '🚀',
    color: { bg: '#eef2ff', border: '#c7d2fe', text: '#3730a3', dot: '#6366f1', light: '#e0e7ff' },
    interests: ['science', 'government'],
    careers: [
      { name: 'ISRO Scientist / Engineer', stream: 'ISRO Scientist/Engineer SC or through IIST', exams: ['ISRO Recruitment Exam', 'IIST Admission', 'GATE'], salary: '₹7–20 LPA', desc: 'Work on satellite missions and rocket science at ISRO.' },
      { name: 'DRDO Scientist', stream: 'DRDO Scientist B via CEPTAM or GATE', exams: ['DRDO CEPTAM Exam', 'GATE'], salary: '₹7–18 LPA', desc: 'Develop defence technology — missiles, electronics, materials, and AI.' },
      { name: 'BARC Scientific Officer', stream: 'BARC OCES Programme for BSc/MSc graduates', exams: ['OCES/DGFS Exam', 'GATE'], salary: '₹8–20 LPA', desc: 'Research nuclear energy, radiation safety, and advanced materials at BARC.' },
      { name: 'Meteorologist (IMD)', stream: 'BSc Meteorology / Physics → IMD Scientist', exams: ['IMD Recruitment Exam', 'CUET PG'], salary: '₹6–15 LPA', desc: 'Study weather and climate systems at the India Meteorological Department.' },
      { name: 'Agricultural Scientist (ICAR)', stream: 'BSc Agriculture / Botany → ICAR JRF / ARS', exams: ['ICAR JRF', 'ICAR ARS NET'], salary: '₹7–18 LPA', desc: 'Develop new crop varieties and farming systems at ICAR institutes.' },
    ],
  },
  {
    id: 'industry-sci',
    label: 'Industry Roles & Career Transition',
    icon: '🏭',
    color: { bg: '#f0fdf4', border: '#bbf7d0', text: '#14532d', dot: '#16a34a', light: '#dcfce7' },
    interests: ['science', 'technology'],
    careers: [
      { name: 'Data Scientist (Transition)', stream: 'Python + ML certifications → Data Science roles', exams: ['No formal exam — Coursera / fast.ai + portfolio'], salary: '₹6–25 LPA', desc: 'BSc Maths/Statistics is the strongest base for data science — upskill with Python.' },
      { name: 'Pharma / Biotech R&D Scientist', stream: 'MSc Chemistry / Biology → Pharma R&D', exams: ['GATE', 'Company Recruitment'], salary: '₹5–20 LPA', desc: 'Develop new molecules, vaccines, and diagnostics at domestic and global pharma firms.' },
      { name: 'Environmental Consultant', stream: 'BSc/MSc Environmental Science → EIA/EMP roles', exams: ['GATE', 'MoEF Consultant Registration'], salary: '₹5–18 LPA', desc: 'Prepare Environmental Impact Assessments for infrastructure and industrial projects.' },
      { name: 'Food Technologist / Quality Analyst', stream: 'BSc Food Tech / Chemistry → FSSAI-linked roles', exams: ['ICAR', 'GATE', 'FSSAI Recruitment'], salary: '₹4–14 LPA', desc: 'Ensure food safety, develop products, and manage quality at food companies.' },
    ],
  },
  {
    id: 'teaching-management-sci',
    label: 'Teaching, MBA & Cross-Field',
    icon: '🎓',
    color: { bg: '#fefce8', border: '#fef08a', text: '#713f12', dot: '#ca8a04', light: '#fef9c3' },
    interests: ['education', 'business'],
    careers: [
      { name: 'College Lecturer / Professor (UGC NET)', stream: 'UGC NET / CSIR-NET → Assistant Professor', exams: ['CSIR-NET', 'UGC NET', 'SET'], salary: '₹6–18 LPA', desc: 'Teach science at colleges and universities with UGC NET qualification.' },
      { name: 'MBA at IIM / ISB (Transition)', stream: 'MBA — 2 years at IIM / ISB via CAT / GMAT', exams: ['CAT', 'GMAT'], salary: '₹15–50 LPA', desc: 'Transition to business, consulting, or product management after a science degree.' },
      { name: 'UPSC Civil Services', stream: 'UPSC — science graduates are competitive', exams: ['UPSC CSE Prelims + Mains'], salary: '₹8–20 LPA', desc: 'Science graduates do well in UPSC — CSAT and science optional papers are an advantage.' },
      { name: 'School Teacher (B.Ed)', stream: 'BSc + B.Ed → CTET / State TET', exams: ['B.Ed Entrance', 'CTET', 'State TET'], salary: '₹3–10 LPA', desc: 'Teach Science, Maths, or Chemistry at secondary schools across India.' },
    ],
  },
]

const GRAD_OTHER = [
  {
    id: 'tech-transition-other',
    label: 'Technology Transition (Any Degree)',
    icon: '💻',
    color: { bg: '#eff6ff', border: '#bfdbfe', text: '#1d4ed8', dot: '#3b82f6', light: '#dbeafe' },
    interests: ['technology'],
    careers: [
      { name: 'Full Stack Developer (Bootcamp)', stream: '6-month coding bootcamp or self-learn', exams: ['No formal exam — GitHub portfolio + coding interview'], salary: '₹4–18 LPA', desc: 'Break into tech from any background — 6 months of focused self-learning is proven.' },
      { name: 'Data Analyst', stream: 'Excel + Python/SQL + Power BI certificate course', exams: ['Google Data Analytics Cert (Coursera)', 'IBM Data Science Cert'], salary: '₹4–16 LPA', desc: 'Analyse business data — high demand in e-commerce, banking, and consulting.' },
      { name: 'Digital Marketer', stream: 'Free Google / Meta / HubSpot certifications', exams: ['Google Analytics', 'Meta Blueprint', 'HubSpot Certifications'], salary: '₹4–18 LPA', desc: 'Grow brands through SEO, paid ads, and social media — any background works.' },
      { name: 'UI/UX Designer', stream: 'Figma + design portfolio (self-learn or Coursera)', exams: ['No formal exam — portfolio-based hiring'], salary: '₹5–22 LPA', desc: 'Design digital products — creativity and empathy matter more than degree.' },
      { name: 'Content Creator / YouTuber', stream: 'Self-start on YouTube / Instagram / podcast', exams: ['No formal exam — audience growth'], salary: '₹3–Unlimited', desc: 'Build a niche audience and monetize through ads, brand deals, and digital products.' },
    ],
  },
  {
    id: 'management-govt-other',
    label: 'Management & Government Services',
    icon: '🏛️',
    color: { bg: '#f5f3ff', border: '#ddd6fe', text: '#5b21b6', dot: '#8b5cf6', light: '#ede9fe' },
    interests: ['business', 'government'],
    careers: [
      { name: 'MBA at IIM / Top B-School', stream: 'MBA — 2 years at IIM / XLRI / FMS via CAT', exams: ['CAT', 'XAT', 'GMAT'], salary: '₹15–50 LPA', desc: 'Any graduation qualifies for MBA — the best all-rounder career investment.' },
      { name: 'IAS / IPS Officer (UPSC)', stream: 'UPSC Civil Services — any graduation', exams: ['UPSC CSE Prelims + Mains + Interview'], salary: '₹8–20 LPA', desc: 'Any graduation degree qualifies for UPSC — 6 general attempts are allowed.' },
      { name: 'Banking Officer (IBPS / SBI PO)', stream: 'IBPS PO or SBI PO — any graduation', exams: ['IBPS PO', 'SBI PO', 'RBI Grade B'], salary: '₹5–16 LPA', desc: 'Join public or private sector banking — competitive with good job security.' },
      { name: 'SSC CGL Officer', stream: 'SSC CGL — any graduation', exams: ['SSC CGL Exam'], salary: '₹5–12 LPA', desc: 'Join central government in Income Tax, CBI, Customs, or audit departments.' },
      { name: 'Defence Officer (CDS)', stream: 'CDS — any graduation for OTA / Navy / Air Force', exams: ['CDS Exam (UPSC)', 'SSB Interview'], salary: '₹7–18 LPA + perks', desc: 'Join the Army, Navy, or Air Force as an officer after graduation via CDS.' },
    ],
  },
  {
    id: 'professional-upskill-other',
    label: 'Professional Certifications & Upskilling',
    icon: '🎓',
    color: { bg: '#fefce8', border: '#fef08a', text: '#713f12', dot: '#ca8a04', light: '#fef9c3' },
    interests: ['education', 'business'],
    careers: [
      { name: 'B.Ed (School Teacher)', stream: 'B.Ed — 2 years → CTET / State TET', exams: ['B.Ed Entrance', 'CTET', 'State TET'], salary: '₹3–10 LPA', desc: 'Become a school teacher — any graduation qualifies for B.Ed.' },
      { name: 'LLB 3-Year (Law Degree)', stream: '3-year LLB at NLU / Law College', exams: ['CLAT PG', 'DU LLB Entrance', 'State Law Entrance'], salary: '₹5–40+ LPA', desc: 'Earn a law degree from any graduation — adds massive value in any field.' },
      { name: 'Hotel Management (NCHM JEE)', stream: 'BHM / PG Diploma Hotel Management', exams: ['NCHM JEE', 'State IHM Entrance'], salary: '₹4–20 LPA', desc: 'Build a career in hospitality — NCHM JEE is open to graduates for PG diploma.' },
      { name: 'Event Manager / Wedding Planner', stream: 'Diploma Event Management / Self-start', exams: ['No formal exam — portfolio and experience'], salary: '₹4–20 LPA', desc: 'Organise weddings, corporate events, and large-scale gatherings.' },
    ],
  },
  {
    id: 'entrepreneurship-other',
    label: 'Entrepreneurship & Self-Employment',
    icon: '🚀',
    color: { bg: '#ecfdf5', border: '#a7f3d0', text: '#065f46', dot: '#10b981', light: '#d1fae5' },
    interests: ['business'],
    careers: [
      { name: 'Startup Founder', stream: 'Validate idea → MVP → funding → scale', exams: ['No formal exam — execution and traction'], salary: '₹0–Unlimited', desc: 'Build a company in any domain — any graduation background is a valid foundation.' },
      { name: 'Freelancer / Consultant', stream: 'Domain expertise + freelance platforms (Upwork, Toptal)', exams: ['No formal exam — portfolio'], salary: '₹3–30 LPA', desc: 'Offer specialized services — writing, design, code, consulting — as a freelancer.' },
      { name: 'E-commerce / Amazon Seller', stream: 'Self-start on Amazon, Flipkart, Meesho', exams: ['No formal exam'], salary: '₹3–Unlimited', desc: 'Sell products online — one of the lowest-barrier businesses to start.' },
      { name: 'Yoga / Wellness Coach', stream: 'QCI Yoga Certification or Wellness Diploma', exams: ['QCI Yoga Certification', 'AYUSH Ministry Courses'], salary: '₹3–15 LPA', desc: 'Teach yoga, fitness, or wellness independently — growing market.' },
    ],
  },
]

const GRAD_CATALOGUE_MAP = {
  'Engineering': GRAD_ENGINEERING,
  'Medical':     GRAD_MEDICAL,
  'Commerce':    GRAD_COMMERCE,
  'Arts':        GRAD_ARTS,
  'Science':     GRAD_SCIENCE,
  'Other':       GRAD_OTHER,
}

export function getGradCatalogue(degreeField, interests = []) {
  const cats = GRAD_CATALOGUE_MAP[degreeField] || GRAD_OTHER
  if (!interests.length) return cats
  return [...cats].sort((a, b) => {
    const sa = a.interests.filter(i => interests.includes(i)).length
    const sb = b.interests.filter(i => interests.includes(i)).length
    return sb - sa
  })
}

// ── Stream → eligible categories ───────────────────────────────────────────────

const STREAM_CATEGORIES = {
  // 12th streams
  'Science-PCM':     ['Engineering', 'Emerging Careers'],
  'Science-PCB':     ['Medical'],
  'Science-PCMB':    ['Engineering', 'Medical', 'Emerging Careers'],
  'Commerce':        ['Commerce', 'Emerging Careers'],
  'Arts':            ['Arts', 'Government Jobs'],
  'Vocational':      ['Emerging Careers', 'Arts'],
  // Graduation degrees
  'Engineering':     ['Engineering', 'Emerging Careers', 'Commerce'],
  'Medical-Grad':    ['Medical'],
  'Commerce-Grad':   ['Commerce', 'Emerging Careers'],
  'Arts-Grad':       ['Arts', 'Government Jobs'],
  'Science-Grad':    ['Engineering', 'Emerging Careers', 'Medical'],
  'Other-Grad':      ['Emerging Careers', 'Commerce'],
}

// ── Interest keyword → boost score for these career names ─────────────────────

const INTEREST_BOOSTS = {
  technology:   ['Software Engineer', 'AI/ML Engineer', 'Data Scientist', 'Cybersecurity Analyst', 'Cloud Engineer', 'Robotics Engineer', 'Electronics and Communication Engineer'],
  healthcare:   ['Doctor', 'Dentist', 'Nurse', 'Pharmacist', 'Physiotherapist', 'Veterinarian', 'Medical Lab Technologist', 'Biotechnologist'],
  business:     ['Management Consultant', 'Product Manager', 'Hotel Manager', 'Economist', 'Company Secretary', 'Banking Professional'],
  creative:     ['Graphic Designer', 'UI/UX Designer', 'Fashion Designer', 'Animation and VFX Artist', 'Architect', 'Journalist'],
  finance:      ['Chartered Accountant', 'Investment Banker', 'Financial Analyst', 'Actuary', 'Banking Professional'],
  government:   ['IAS Officer', 'IPS Officer', 'Defence Officer', 'SSC CGL Officer', 'Railway Officer', 'Public Policy Analyst'],
  education:    ['Teacher', 'Psychologist', 'Social Worker', 'Public Policy Analyst'],
  science:      ['Agricultural Scientist', 'Biotechnologist', 'Chemical Engineer', 'Renewable Energy Engineer', 'Food Technologist'],
}

// ── Why-suitable text per (education + stream + career) ───────────────────────

function whySuitable(career, education, stream) {
  const cat = career.category
  const name = career.career_name

  if (stream === 'Science-PCM' || stream === 'Science-PCMB') {
    if (cat === 'Engineering') return 'Your PCM background makes you directly eligible for JEE/BITSAT — the primary gateway into engineering colleges.'
    if (name === 'Architect') return 'PCM students can appear for JEE Paper 2 (B.Arch) and NATA to enter architecture programmes.'
  }
  if (stream === 'Science-PCB' || stream === 'Science-PCMB') {
    if (cat === 'Medical') return 'With PCB in Class 12, you can directly appear for NEET-UG — the single entrance for all medical careers.'
    if (name === 'Biotechnologist') return 'PCB gives you the biology foundation to pursue B.Sc/B.Tech Biotechnology at IITs, NITs, and central universities.'
  }
  if (stream === 'Commerce') {
    if (cat === 'Commerce') return 'Your Commerce stream provides a direct academic head-start for CA, banking, and finance professional exams.'
  }
  if (stream === 'Arts') {
    if (cat === 'Arts') return 'Humanities builds the analytical and communication skills that are essential in this field.'
    if (cat === 'Government Jobs') return 'UPSC, SSC, and judicial service exams are strongly suited to Arts students — your subjects overlap directly with their syllabus.'
  }
  if (education === 'Graduation') {
    if (cat === 'Emerging Careers') return 'Graduates can enter this field quickly with targeted online certifications and a portfolio — no additional entrance exam needed in most cases.'
    if (cat === 'Government Jobs') return 'You are already eligible to sit for UPSC and SSC exams. A 1–2 year focussed preparation is the typical path from here.'
    return 'Being a graduate puts you ahead — you can directly target postgraduate programmes or industry entry roles.'
  }
  if (education === '10th') {
    return `${name} is a strong long-term goal. Choosing the right stream in Class 11 is the next critical step that unlocks this career.`
  }

  if (career.growth_scope?.toLowerCase().includes('high')) return 'This field has consistently high and growing demand in India across sectors.'
  return `${name} has a clear entrance exam pathway and strong college infrastructure in India.`
}

// ── Next steps per career and education level ─────────────────────────────────

const STEPS = {
  'Software Engineer': {
    '10th':       ['Choose Science-PCM in Class 11', 'Prepare for JEE Main (or BITSAT/State CETs)', 'Complete B.Tech CS/IT — intern from Year 2', 'Build a GitHub portfolio and target placements'],
    '12th':       ['Prepare for JEE Main / BITSAT / State CETs', 'Secure B.Tech CS/IT admission', 'Build projects and a GitHub portfolio', 'Target campus placements or GATE for higher study'],
    'Graduation': ['Complete a coding bootcamp if non-CS (6 months)', 'Build 2–3 full-stack projects', 'Practice DSA on LeetCode', 'Apply via AMCAT/campus portals or startup job boards'],
  },
  'Doctor': {
    '10th':       ['Choose Science-PCB in Class 11', 'Prepare for NEET-UG (target 550+)', 'Complete MBBS (5.5 years including internship)', 'Prepare for NEET-PG for specialisation'],
    '12th':       ['Prepare for NEET-UG — target 550+ score', 'Secure MBBS in a government medical college', 'Complete 5.5-year MBBS + rural internship', 'Appear for NEET-PG to specialise'],
    'Graduation': ['Verify NEET-UG eligibility (age limit applies)', 'Intensive 6-month NEET preparation if not yet cleared', 'Complete MBBS; then NEET-PG for specialisation', 'Consider MPH or Hospital Management as an alternative'],
  },
  'IAS Officer': {
    '10th':       ['Any stream works — Humanities is most aligned', 'Complete graduation (minimum UPSC eligibility)', 'Start NCERT reading from Class 11 itself', 'Begin focused UPSC preparation after degree'],
    '12th':       ['Complete any graduation degree', 'Begin UPSC prep in Year 2 of graduation', 'Study NCERT + standard books (Laxmikanth, Bipin Chandra)', 'Attempt Prelims in final year or after graduation'],
    'Graduation': ['Dedicate 8–10 hours daily to UPSC prep', 'Cover GS Papers 1–4 + optional subject systematically', 'Attempt UPSC Prelims (up to 6 general attempts)', 'Clear Mains + Personality Test for final selection'],
  },
  'Chartered Accountant': {
    '10th':       ['Choose Commerce stream in Class 11', 'Register with ICAI for CA Foundation after Class 12', 'Clear CA Intermediate and do 3-year articleship', 'Clear CA Final to become a qualified CA'],
    '12th':       ['Register with ICAI and clear CA Foundation', 'Study 8 CA Intermediate papers across 2 groups', 'Complete 3-year mandatory articleship at a CA firm', 'Clear CA Final in the last year of articleship'],
    'Graduation': ['Commerce/Law graduates can skip Foundation and join CA Intermediate directly', 'Clear CA Intermediate and register for articleship', 'Complete 3-year articleship + CA Final simultaneously', 'Target Big 4 firms or corporate finance roles post-qualification'],
  },
  'Lawyer': {
    '10th':       ['Any stream works; Humanities is ideal', 'Prepare for CLAT / AILET after Class 12', 'Complete 5-year integrated BA LLB at a top NLU', 'Intern at courts or law firms every summer; enroll with Bar Council'],
    '12th':       ['Prepare for CLAT (for NLUs) or AILET (NLU Delhi)', 'Complete 5-year BA LLB at an NLU or reputed law school', 'Do moot courts, internships at courts/law firms', 'Enroll with State Bar Council after degree'],
    'Graduation': ['Appear for CLAT PG or state law entrances for 3-year LLB', 'Use your graduation subject as an advantage (tech-law, commerce-law)', 'Intern at corporate law firms during the degree', 'Enroll with State Bar Council and choose litigation or corporate law'],
  },
  'Data Scientist': {
    '10th':       ['Choose Science-PCM in Class 11', 'Pursue B.Tech CS/B.Sc Statistics or Maths', 'Learn Python, SQL, and data visualisation tools', 'Build and publish 2–3 data projects on GitHub/Kaggle'],
    '12th':       ['Target JEE/BITSAT for B.Tech CS or B.Sc Maths/Stats', 'Learn Python, Pandas, and Scikit-learn during graduation', 'Complete Kaggle competitions and data projects', 'Apply for analyst/data science internships in Year 3'],
    'Graduation': ['Learn Python + SQL + ML (Coursera, fast.ai)', 'Build 2 end-to-end ML projects on Kaggle', 'Earn Google Data Analytics or IBM Data Science certification', 'Apply to analytics/data science roles at startups or consulting firms'],
  },
  'IPS Officer': {
    '10th':       ['Any stream is eligible for UPSC', 'Complete graduation from any discipline', 'Prepare for UPSC Civil Services — IPS is allocated through the same exam as IAS', 'Maintain high physical fitness from early on'],
    '12th':       ['Complete graduation from any discipline', 'Begin UPSC prep in final year of graduation', 'Study GS Papers 1–4 and choose an optional subject', 'Clear Prelims + Mains + SSB-style Personality Test'],
    'Graduation': ['Begin UPSC Civil Services preparation immediately', 'Target IPS allocation based on rank and preference in the UPSC merit list', 'Maintain physical fitness — IPS has stricter fitness standards than IAS', 'Attempt Prelims; you have up to 6 general attempts'],
  },
  'Defence Officer': {
    '10th':       ['Science-PCM recommended; any stream accepted for NDA (PCM required for Army/Air Force tech)', 'Appear for NDA Exam after Class 12', 'Clear SSB (Services Selection Board) interviews', 'Maintain high physical fitness from Class 10 itself'],
    '12th':       ['Appear for NDA Exam (conducted by UPSC) — PCM required for Air Force and Navy tech', 'Clear SSB interview (5 days)', 'Shortlisted candidates join NDA Pune for 3 years', 'Commissioned as a Lieutenant after training'],
    'Graduation': ['Apply for CDS (Combined Defence Services) — for Army, Navy (General duty), Air Force after graduation', 'Clear written exam + SSB interview', 'Join OTA Chennai (Army) or NDA/INA/AFA for respective service', 'Short Service Commission (10 years) or Permanent Commission (full career)'],
  },
  'Digital Marketer': {
    '10th':       ['Any stream works; Commerce or Arts is helpful', 'Learn basics of social media, SEO, and content creation now', 'Pursue BBA, B.Com, or a mass communication degree', 'Get certified on Google Ads, Meta Blueprint, and HubSpot (free)'],
    '12th':       ['Pursue BBA, B.Com, or BA Mass Communication', 'Learn Google Ads, SEO, Meta Ads, and email marketing', 'Freelance for small businesses to build a portfolio', 'Get certified: Google Analytics, HubSpot Inbound, Meta Blueprint'],
    'Graduation': ['Get certified: Google Analytics, Meta Blueprint, HubSpot (all free)', 'Run real campaigns for a small business or NGO', 'Apply for digital marketing internships at agencies', 'Target marketing roles at D2C brands, startups, or agencies'],
  },
  'Fashion Designer': {
    '10th':       ['Any stream; Arts with drawing is ideal', 'Prepare for NIFT, NID, or Pearl Academy entrance exams', 'Complete B.Des or B.FTech (4 years)', 'Build a portfolio of sketches, garments, and collections'],
    '12th':       ['Prepare for NIFT entrance (Design Ability Test + GAT + Situation Test)', 'Also target NID (NID DAT) and Pearl Academy', 'Complete B.Des Fashion Design (4 years)', 'Intern at fashion houses, textile firms, or retail brands'],
    'Graduation': ['Pursue PG Diploma in Fashion Design at NIFT or Pearl Academy', 'Build a strong portfolio immediately', 'Assist senior designers and intern at boutiques', 'Launch your label or join an established fashion house'],
  },
  'Management Consultant': {
    '10th':       ['Any stream; Science or Commerce most common base', 'Complete graduation (any discipline)', 'Clear CAT/XAT for MBA from IIM/XLRI', 'Join McKinsey, BCG, Bain, or top Indian consulting firms'],
    '12th':       ['Pursue BBA, B.Tech, or any honours degree', 'Clear CAT/XAT after graduation for MBA admission', 'Excel at case study interviews (use Case in Point, Victor Cheng)', 'Target IIM placements for top consulting firms'],
    'Graduation': ['Clear CAT (target 99+ percentile for IIM Ahmedabad/B/C)', 'Practise 50+ case studies before interviews', 'Network with consultants on LinkedIn and attend firm events', 'Join McKinsey, BCG, Bain, or Big 4 strategy practices'],
  },
}

const defaultSteps = (career, education) => {
  const exams = (career.entrance_exams || []).slice(0, 2).map(e => e.exam_name)
  if (education === '10th') return [
    'Choose the stream in Class 11 that best supports this career',
    exams.length ? `Prepare for ${exams.join(' / ')}` : 'Research the entrance exams required',
    `Complete the undergraduate degree in ${career.required_education || 'the relevant field'}`,
    'Build hands-on skills through internships and projects',
  ]
  if (education === '12th') return [
    exams.length ? `Prepare for ${exams.join(' / ')}` : 'Apply directly based on Class 12 marks',
    `Secure admission to a relevant undergraduate programme`,
    'Pursue internships from Year 2 onwards',
    'Build a portfolio or competitive track record',
  ]
  return [
    exams.length ? `Clear ${exams.join(' / ')} for advanced roles` : 'Upskill with online certifications',
    'Gain 1–2 years of entry-level experience',
    'Pursue relevant postgraduate study or professional certification',
    'Build a network through LinkedIn and industry events',
  ]
}

// ── MODE A: Explore Options ────────────────────────────────────────────────────

export function exploreOptions({ education, stream, interests = [] }) {
  const streamKey = education === 'Graduation' && stream ? stream + '-Grad' : stream
  const primaryCats = STREAM_CATEGORIES[streamKey] || STREAM_CATEGORIES[stream] || []
  const eligibleCats = education === '10th'
    ? ['Engineering', 'Medical', 'Commerce', 'Arts', 'Government Jobs', 'Emerging Careers']
    : primaryCats.length
      ? [...new Set([...primaryCats, 'Emerging Careers'])]
      : ['Engineering', 'Medical', 'Commerce', 'Arts', 'Government Jobs', 'Emerging Careers']

  const scored = careerData
    .filter(c => eligibleCats.includes(c.category))
    .map(c => {
      let score = 0
      // Primary category weight
      if (primaryCats[0] && c.category === primaryCats[0]) score += 40
      else if (primaryCats.includes(c.category)) score += 25
      // Interest boosts
      interests.forEach(i => {
        if (INTEREST_BOOSTS[i]?.includes(c.career_name)) score += 30
      })
      // Growth scope bonus
      if (c.growth_scope?.toLowerCase().includes('high')) score += 8
      return { ...c, _score: score }
    })
    .sort((a, b) => b._score - a._score || a.career_name.localeCompare(b.career_name))

  // Pick top 7, ensuring at most 3 per category
  const catCount = {}
  const result = []
  for (const career of scored) {
    const n = catCount[career.category] || 0
    if (n < 3) { result.push(career); catCount[career.category] = n + 1 }
    if (result.length >= 7) break
  }
  // Pad to 5 if needed
  for (const career of scored) {
    if (result.length >= 5) break
    if (!result.find(r => r.career_name === career.career_name)) result.push(career)
  }

  return result.map(career => ({
    career_name: career.career_name,
    category:    career.category,
    description: career.description,
    salary:      career.average_salary_india,
    growth_scope: career.growth_scope,
    required_skills: (career.required_skills || []).slice(0, 4),
    why_suitable: whySuitable(career, education, stream),
    next_steps:   (STEPS[career.career_name]?.[education]) || defaultSteps(career, education),
    entrance_exams: (career.entrance_exams || []).slice(0, 3).map(e => ({
      exam_name:         e.exam_name,
      level:             e.level,
      short_description: e.short_description,
    })),
  }))
}

// ── MODE B: Roadmap Templates ─────────────────────────────────────────────────

const ROADMAPS = {
  'Software Engineer': {
    from10th: [
      { phase: 'Science Foundation', duration: '2 years', actions: ['Choose Science-PCM in Class 11', 'Focus on Mathematics (crucial for JEE)', 'Start basic Python or C++ programming', 'Use NPTEL or freeCodeCamp for early exposure'], exams: [] },
      { phase: 'JEE / Entrance Prep', duration: '1–2 years', actions: ['Prepare for JEE Main (+ BITSAT, State CETs as backups)', 'Solve previous papers and join a coaching course', 'Build first projects: a to-do app or simple website'], exams: ['JEE Main', 'BITSAT', 'State CETs'] },
      { phase: 'B.Tech (CS / IT)', duration: '4 years', actions: ['Study DSA, OS, DBMS, and Networking thoroughly', 'Intern at tech companies from Year 2', 'Contribute to open-source on GitHub', 'Prepare for campus placements in Year 4'], exams: ['GATE (optional, for PSU/M.Tech)'] },
      { phase: 'First Role & Growth', duration: 'Ongoing', actions: ['Join as a Junior Developer at a startup or IT firm', 'Specialise: web, mobile, ML, or cloud', 'Target 15–20+ LPA roles after 3–5 years of experience'], exams: [] },
    ],
    from12th: [
      { phase: 'JEE / Entrance Exam', duration: '6–12 months', actions: ['Focus on JEE Main; also prepare BITSAT, State CETs', 'Aim for NITs, IIITs, or state engineering colleges', 'Practise 30–50 problems daily in weak areas'], exams: ['JEE Main', 'BITSAT', 'State CETs'] },
      { phase: 'B.Tech (CS / IT)', duration: '4 years', actions: ['Master DSA, system design, and core CS subjects', 'Intern from Year 2 and build a GitHub portfolio', 'Prepare for placements in Year 4'], exams: ['GATE (optional)'] },
      { phase: 'Career Launch', duration: 'Ongoing', actions: ['Start at an IT services firm or product startup', 'Build 15–20+ LPA earning potential in 3–5 years'], exams: [] },
    ],
    fromGrad: [
      { phase: 'Skill Bridge', duration: '3–6 months', actions: ['Complete an intensive coding bootcamp if non-CS', 'Build 2–3 full-stack portfolio projects', 'Practice DSA on LeetCode (Easy → Medium → Hard)'], exams: [] },
      { phase: 'Land First Role', duration: '2–4 months', actions: ['Apply to IT services companies (TCS, Infosys, Wipro)', 'Target startups via LinkedIn and AngelList', 'Prepare for coding interviews (FAANG-style rounds)'], exams: [] },
      { phase: 'Grow & Specialise', duration: 'Ongoing', actions: ['Choose a stack: web, mobile, cloud, or ML', 'Certify: AWS, Azure, or GCP for cloud roles', 'Target Senior Developer in 3–5 years (15–25 LPA)'], exams: [] },
    ],
    backups: ['Data Scientist', 'Cloud Engineer', 'Cybersecurity Analyst', 'Product Manager'],
  },

  'Doctor': {
    from10th: [
      { phase: 'Science Foundation', duration: '2 years', actions: ['Choose Science-PCB in Class 11', 'Focus on Biology and Chemistry (NEET core)', 'Use NCERT + Trueman Biology + DC Pandey', 'Aim for 90%+ in Class 12 Boards'], exams: [] },
      { phase: 'NEET-UG Preparation', duration: '1–2 years', actions: ['Target 550+ in NEET-UG for government MBBS seats', 'Practise 100+ MCQs daily', 'Attempt 5–6 full mock tests per month', 'Join Allen, Aakash, or PW NEET course'], exams: ['NEET-UG', 'JIPMER', 'AIIMS BSc Nursing (if backup)'] },
      { phase: 'MBBS', duration: '5.5 years', actions: ['Complete 4.5-year MBBS + 1-year rural internship', 'Focus on clinical subjects: Medicine, Surgery, Obs & Gynae', 'Register with State Medical Council after internship'], exams: ['MBBS university exams'] },
      { phase: 'PG / Specialisation', duration: '3 years', actions: ['Prepare for NEET-PG during final MBBS year', 'Target MD/MS at a government college', 'Choose specialisation: Surgery, Paediatrics, Radiology, etc.'], exams: ['NEET-PG', 'INI CET'] },
    ],
    from12th: [
      { phase: 'NEET-UG Preparation', duration: '6–12 months', actions: ['Revise NCERT Biology and Chemistry thoroughly', 'Attempt 150+ MCQs daily', 'Join a NEET test series (Allen, Aakash, or PW)'], exams: ['NEET-UG'] },
      { phase: 'MBBS', duration: '5.5 years', actions: ['Complete MBBS + 1-year internship', 'Register with State Medical Council'], exams: ['MBBS university exams'] },
      { phase: 'PG Specialisation', duration: '3 years', actions: ['Prepare for NEET-PG from final year of MBBS', 'Target MD/MS or DNB'], exams: ['NEET-PG', 'INI CET'] },
    ],
    fromGrad: [
      { phase: 'Verify NEET Eligibility', duration: '1 month', actions: ['MBBS requires Class 12 PCB + NEET-UG regardless of graduation', 'Check age limit: 25 years general / 30 years reserved', 'If eligible, proceed with intensive NEET prep'], exams: [] },
      { phase: 'NEET-UG Crash Course', duration: '6–12 months', actions: ['Intensive NEET Biology revision using NCERT', 'Use Unacademy or PW for focused coaching', 'Target a government MBBS seat'], exams: ['NEET-UG'] },
      { phase: 'MBBS + PG', duration: '8.5 years', actions: ['Complete MBBS (5.5 years)', 'Prepare for NEET-PG and specialise'], exams: ['NEET-PG'] },
    ],
    backups: ['Dentist', 'Pharmacist', 'Physiotherapist', 'Medical Lab Technologist'],
  },

  'Chartered Accountant': {
    from10th: [
      { phase: 'Commerce Foundation', duration: '2 years', actions: ['Choose Commerce stream in Class 11', 'Focus on Accountancy — it is the CA core', 'Register for CA Foundation with ICAI (can study alongside Class 11–12)'], exams: [] },
      { phase: 'CA Foundation', duration: '4–6 months after 12th', actions: ['Study 4 papers: Accounts, Business Laws, Economics, Maths', 'ICAI exams held in June and December', 'Clear in first attempt to stay on the fastest track'], exams: ['CA Foundation'] },
      { phase: 'CA Intermediate + Articleship', duration: '2–3 years', actions: ['Study 8 papers across 2 groups', 'Begin 3-year articleship at a CA firm after clearing at least one group', 'Learn auditing, taxation, and financial reporting on the job'], exams: ['CA Intermediate Group 1 & 2'] },
      { phase: 'CA Final', duration: '6–12 months', actions: ['Attempt CA Final in the last year of articleship', 'Clear 8 advanced papers across 2 groups', 'Get ICAI membership and join a Big 4 or top corporate (₹7–15 LPA)'], exams: ['CA Final'] },
    ],
    from12th: [
      { phase: 'CA Foundation', duration: '4–6 months', actions: ['Register with ICAI immediately after Class 12', 'Study 4 Foundation papers and appear in the next ICAI window'], exams: ['CA Foundation'] },
      { phase: 'CA Intermediate + Articleship', duration: '2–3 years', actions: ['Clear CA Intermediate exams (8 papers, 2 groups)', 'Start 3-year articleship at a CA firm', 'Balance study and practical training'], exams: ['CA Intermediate'] },
      { phase: 'CA Final', duration: '6–12 months', actions: ['Attempt CA Final in the last year of articleship', 'Specialise in audit, tax, or advisory'], exams: ['CA Final'] },
    ],
    fromGrad: [
      { phase: 'Entry Route', duration: '1 month', actions: ['Commerce/Law/Economics graduates: direct entry into CA Intermediate (Foundation waived)', 'Engineering/other graduates: must clear CA Foundation first', 'Register with ICAI and begin immediately'], exams: ['CA Intermediate (direct) or CA Foundation'] },
      { phase: 'CA Intermediate + Articleship', duration: '2–3 years', actions: ['Clear 8 Intermediate papers', 'Complete 3-year articleship simultaneously'], exams: ['CA Intermediate'] },
      { phase: 'CA Final + Membership', duration: '6–12 months', actions: ['Clear CA Final during last year of articleship', 'Earn ICAI membership and target Big 4 or corporate finance roles'], exams: ['CA Final'] },
    ],
    backups: ['Financial Analyst', 'Company Secretary', 'Investment Banker', 'Banking Professional'],
  },

  'IAS Officer': {
    from10th: [
      { phase: 'Strong Academic Base', duration: '2–6 years', actions: ['Any stream in Class 11–12 (Humanities most aligned)', 'Complete any graduation degree', 'Read NCERT books from Class 6–12 across core subjects'], exams: [] },
      { phase: 'Graduation + Early Prep', duration: '3 years', actions: ['Complete any honours graduation', 'Start UPSC prep from Year 2 of degree', 'Read The Hindu daily; subscribe to Vision IAS / Insights'], exams: [] },
      { phase: 'UPSC Prelims', duration: '12–18 months', actions: ['Study GS Papers 1–4 systematically', 'Attempt 6–10 mock tests per month', 'Clear Paper 1 (GS) + Paper 2 (CSAT)'], exams: ['UPSC Prelims'] },
      { phase: 'Mains + Personality Test', duration: '6 months', actions: ['Write 10 answers daily for Mains practice', 'Choose optional subject wisely (Sociology, PSIR, or Geography most popular)', 'Clear all 9 Mains papers + 25-min Interview board'], exams: ['UPSC Mains', 'UPSC Personality Test'] },
    ],
    from12th: [
      { phase: 'Complete Graduation', duration: '3 years', actions: ['Any graduation degree is accepted', 'Start NCERT reading from Year 1', 'Develop newspaper reading habit from Day 1'], exams: [] },
      { phase: 'UPSC Prelims', duration: '12–18 months', actions: ['Full-time UPSC prep after graduation', 'Focus on GS syllabus and choose an optional subject', 'Join a test series for regular mock testing'], exams: ['UPSC Prelims'] },
      { phase: 'Mains + Interview', duration: '6 months', actions: ['Daily answer writing practice', 'Clear 9 Mains papers + Personality Test'], exams: ['UPSC Mains', 'UPSC Personality Test'] },
    ],
    fromGrad: [
      { phase: 'Full-Time Preparation', duration: '12–18 months', actions: ['Dedicate 8–10 hours daily to UPSC preparation', 'Cover all 4 GS papers + chosen optional subject', 'Read The Hindu daily and maintain topic-wise notes', 'Join Vision IAS, Insights, or ForumIAS test series'], exams: ['UPSC Prelims'] },
      { phase: 'Mains + Personality Test', duration: '6 months', actions: ['10 answer-writes daily (250 words each)', 'Prepare a strong DAF (Detailed Application Form)', 'Join mock interview programme', 'You get 6 general attempts (9 OBC, unlimited SC/ST)'], exams: ['UPSC Mains', 'UPSC Personality Test'] },
    ],
    backups: ['IPS Officer', 'Public Policy Analyst', 'Defence Officer', 'Management Consultant'],
  },

  'Lawyer': {
    from10th: [
      { phase: 'School Foundation', duration: '2 years', actions: ['Humanities stream recommended (Political Science, History)', 'Join debate and moot court clubs', 'Start reading CLAT prep books from Class 11'], exams: [] },
      { phase: 'CLAT / AILET Prep', duration: '6–12 months', actions: ['Prepare for CLAT for top NLUs; AILET for NLU Delhi', 'Focus on English, Legal Reasoning, GK, and Maths', 'Attempt 3 mock tests per week in final months'], exams: ['CLAT', 'AILET', 'LSAT India'] },
      { phase: '5-Year BA LLB', duration: '5 years', actions: ['Study Constitutional Law, CPC, CrPC, IPC, and Contracts', 'Intern at courts, law firms, or NGOs every summer', 'Participate in moot courts and legal aid clinics'], exams: ['AIBE (All India Bar Examination)'] },
      { phase: 'Career Launch', duration: 'Ongoing', actions: ['Enroll with a State Bar Council to practise', 'Choose litigation, corporate law, or public sector law', 'Consider LLM for specialisation or global opportunities'], exams: [] },
    ],
    from12th: [
      { phase: 'CLAT Preparation', duration: '6–12 months', actions: ['Target CLAT for NLUs and AILET for NLU Delhi', 'Prepare 3–4 hours daily in final months'], exams: ['CLAT', 'AILET', 'LSAT India'] },
      { phase: '5-Year LLB', duration: '5 years', actions: ['Complete integrated BA LLB', 'Intern at law firms or courts every semester break', 'Publish articles and win moot courts for a strong CV'], exams: ['AIBE'] },
      { phase: 'Practice', duration: 'Ongoing', actions: ['Start as a junior advocate or law firm associate', 'Specialise in corporate, criminal, or constitutional law'], exams: [] },
    ],
    fromGrad: [
      { phase: '3-Year LLB Entrance', duration: '3–6 months', actions: ['Appear for CLAT PG, DU LLB entrance, or state law entrances', 'Your graduation subject (tech, commerce, science) is a big advantage in specialised law'], exams: ['CLAT PG', 'DU LLB Entrance', 'State Law Entrances'] },
      { phase: '3-Year LLB', duration: '3 years', actions: ['Focus on corporate law, IP law, or constitutional law', 'Intern at corporate law firms for associate-track entry', 'Build a strong academic record'], exams: ['AIBE'] },
      { phase: 'Specialise', duration: 'Ongoing', actions: ['Join a corporate law firm as an associate', 'Consider LLM abroad (UK/US) for global roles', 'Target in-house counsel at top companies'], exams: [] },
    ],
    backups: ['Journalist', 'Psychologist', 'IAS Officer', 'Public Policy Analyst'],
  },

  'Data Scientist': {
    from10th: [
      { phase: 'Science-PCM Base', duration: '2 years', actions: ['Choose Science-PCM in Class 11', 'Focus on Maths (statistics and calculus are core for data science)', 'Start Python basics on freeCodeCamp or NPTEL'], exams: [] },
      { phase: 'Degree Entrance', duration: '6–12 months', actions: ['Target JEE Main for B.Tech CS/IT at NITs/IITs', 'Alternatively, B.Sc Maths/Statistics at a strong central university (via CUET)', 'Choose a degree with strong Maths and programming content'], exams: ['JEE Main', 'CUET'] },
      { phase: 'Undergraduate Degree', duration: '3–4 years', actions: ['Study Statistics, Machine Learning, and Python deeply', 'Complete Kaggle competitions and data projects', 'Intern at analytics or product companies in Year 3', 'Build a public portfolio on GitHub and Kaggle'], exams: [] },
      { phase: 'First Role & Growth', duration: 'Ongoing', actions: ['Join as a Data Analyst or Junior Data Scientist', 'Move to Data Scientist roles in 2–3 years (₹8–18 LPA)', 'Target product companies, consulting firms, or fintech'], exams: [] },
    ],
    from12th: [
      { phase: 'Degree Entrance', duration: '6–12 months', actions: ['Target JEE Main for B.Tech CS or B.Sc Maths/Stats via CUET', 'Alternatively apply to BITS Pilani or Ashoka University'], exams: ['JEE Main', 'CUET', 'BITSAT'] },
      { phase: 'Undergraduate + Skill Build', duration: '3–4 years', actions: ['Study Python, SQL, Statistics, and ML algorithms', 'Build 2–3 end-to-end data projects on Kaggle', 'Intern at analytics or data-driven firms'], exams: [] },
      { phase: 'Career Entry', duration: 'Ongoing', actions: ['Join as a Data Analyst and transition to Data Scientist in 2 years', 'Earn Google Data Analytics or IBM DS certification as a supplement'], exams: [] },
    ],
    fromGrad: [
      { phase: 'Upskilling', duration: '3–6 months', actions: ['Complete Python, SQL, and ML basics on Coursera (IBM DS or Google DA certification)', 'Build 2 Kaggle projects and publish on GitHub', 'Learn Power BI or Tableau for visualisation'], exams: [] },
      { phase: 'First Role', duration: '2–4 months', actions: ['Apply to Data Analyst roles (entry point to Data Scientist)', 'Target consulting firms, e-commerce companies, and fintech startups', 'Transition to Data Scientist title in 18–24 months'], exams: [] },
    ],
    backups: ['Software Engineer', 'AI/ML Engineer', 'Financial Analyst', 'Management Consultant'],
  },
}

function buildGenericRoadmap(career, education) {
  const exams = (career.entrance_exams || []).slice(0, 3).map(e => e.exam_name)
  const phases = []

  if (education === '10th') {
    phases.push({
      phase: 'Choose the Right Stream',
      duration: '2 years',
      actions: [
        'Select the Class 11–12 stream best aligned to this career',
        'Build subject foundations with NCERT textbooks',
        'Research entrance exams and set a target college list',
      ],
      exams: [],
    })
  }
  if (education === '10th' || education === '12th') {
    if (exams.length) phases.push({
      phase: 'Entrance Examination',
      duration: '6–18 months',
      actions: [
        `Prepare for ${exams.slice(0, 2).join(' and ')}`,
        'Join coaching or use structured online resources',
        'Attempt mock tests every 2–3 weeks',
        'Maintain 6–8 hours of daily focused study',
      ],
      exams,
    })
    phases.push({
      phase: `Undergraduate Degree`,
      duration: '3–4 years',
      actions: [
        'Secure admission to a reputed college in the relevant field',
        'Pursue internships from Year 2 onwards',
        'Join relevant student clubs and competitions',
        'Build a portfolio, publication, or project track record',
      ],
      exams: [],
    })
  }
  if (education === 'Graduation') {
    phases.push({
      phase: 'Skill Bridging',
      duration: '3–6 months',
      actions: [
        'Identify skill gaps between your current degree and the target career',
        'Take online courses (NPTEL, Coursera, Udemy) to fill gaps',
        'Build 1–2 portfolio projects to demonstrate relevant skills',
        'Connect with professionals in this field on LinkedIn',
      ],
      exams: exams.length ? exams : [],
    })
  }
  phases.push({
    phase: 'Career Launch',
    duration: 'Ongoing',
    actions: [
      `Apply for entry-level ${career.career_name} roles`,
      'Build 3–5 years of experience for a senior position',
      `Target ${career.average_salary_india} and grow from there`,
      'Stay updated via professional associations and workshops',
    ],
    exams: [],
  })
  return phases
}

function getBackups(career) {
  return careerData
    .filter(c =>
      c.category === career.category &&
      c.career_name !== career.career_name
    )
    .slice(0, 4)
    .map(c => ({
      career_name: c.career_name,
      category:    c.category,
      salary:      c.average_salary_india,
      reason:      `Same field as ${career.career_name} — shares similar academic and exam pathways.`,
    }))
}

function getColleges(career) {
  const examNames = new Set((career.entrance_exams || []).map(e => e.exam_name))
  return collegeData
    .filter(c =>
      c.courses_offered?.includes(career.career_name) ||
      (c.entrance_exams_accepted || []).some(e => examNames.has(e))
    )
    .sort((a, b) => (a.type === 'government' ? -1 : 1))
    .slice(0, 6)
    .map(c => ({
      name:     c.college_name,
      location: `${c.location?.city}, ${c.location?.state}`,
      type:     c.type,
      fees:     c.approximate_fees,
      exams:    (c.entrance_exams_accepted || []).slice(0, 3),
    }))
}

// ── MODE B: Get Roadmap ────────────────────────────────────────────────────────

// ── Rich data: skills / career ladder / resources / companies / pitfalls ──────

const RICH_DATA = {
  'Software Engineer': {
    skills: {
      technical: ['Data Structures & Algorithms', 'System Design', 'SQL + NoSQL Databases', 'Python / Java / Go (one core language)', 'REST APIs & Microservices', 'Git & Version Control', 'Cloud Basics (AWS / GCP / Azure)'],
      soft: ['Problem-solving mindset', 'Code communication via PR reviews', 'Continuous self-learning', 'Debugging patience under pressure'],
    },
    career_ladder: [
      { role: 'Intern / Fresher Developer', years: '0–1 yr', salary: '₹4–8 LPA' },
      { role: 'Software Engineer I', years: '1–3 yrs', salary: '₹8–18 LPA' },
      { role: 'Software Engineer II', years: '3–6 yrs', salary: '₹18–30 LPA' },
      { role: 'Senior Engineer / Tech Lead', years: '6–10 yrs', salary: '₹30–60 LPA' },
      { role: 'Staff / Principal / EM', years: '10+ yrs', salary: '₹50–100+ LPA' },
    ],
    resources: [
      { type: 'platform', title: 'LeetCode', desc: 'Master DSA — essential for placement interviews at all product companies' },
      { type: 'course', title: 'CS50 by Harvard (free)', desc: 'Best free CS fundamentals course available online — start here' },
      { type: 'book', title: 'Cracking the Coding Interview', desc: 'Classic prep guide for FAANG-style technical interviews' },
      { type: 'youtube', title: 'Neetcode / Striver (YouTube)', desc: 'Best free DSA roadmaps — highly structured and popular among students' },
      { type: 'website', title: 'System Design Primer (GitHub)', desc: 'Free system design guide used by engineers globally — must-read for seniors' },
    ],
    companies: ['Google', 'Microsoft', 'Amazon', 'Flipkart', 'Swiggy', 'Razorpay', 'Zepto', 'Atlassian', 'Adobe', 'Walmart Labs', 'TCS', 'Infosys'],
    pitfalls: [
      'Grinding DSA without studying system design — seniors care far more about design than puzzles',
      'Staying in IT services firms too long without building product or startup skills',
      'Skipping communication: technical writing, PR reviews, and documentation matter as much as code quality',
      'No public GitHub portfolio — open-source contributions and personal projects are your real resume',
    ],
  },

  'Doctor': {
    skills: {
      technical: ['Clinical examination and history-taking', 'Differential diagnosis', 'Common procedures (IV access, suturing, catheterisation)', 'Drug pharmacology and prescribing', 'Interpreting labs, ECGs, and imaging', 'Emergency protocols — ACLS, BLS'],
      soft: ['Empathy and patient communication', 'Decision-making under time pressure', 'Attention to detail in notes and prescriptions', 'Resilience through 36-hour duty shifts'],
    },
    career_ladder: [
      { role: 'MBBS Intern', years: 'Internship year', salary: 'Stipend ₹15–30K/month' },
      { role: 'Junior Resident (PG)', years: 'PG Year 1–3', salary: 'Stipend ₹55–85K/month' },
      { role: 'Senior Resident / Consultant', years: '3–8 yrs post-PG', salary: '₹15–45 LPA' },
      { role: 'Specialist Consultant', years: '8–15 yrs', salary: '₹30–80 LPA' },
      { role: 'Super-Specialist / HOD', years: '15+ yrs', salary: '₹50–150+ LPA' },
    ],
    resources: [
      { type: 'book', title: "Harrison's Principles of Internal Medicine", desc: 'The bible of medicine — essential for MBBS and PG preparation' },
      { type: 'platform', title: 'Marrow / PW NEET-PG', desc: 'Best platforms for structured NEET-PG preparation and question banks' },
      { type: 'youtube', title: 'Dr. Najeeb Lectures (YouTube)', desc: 'World-famous free medical lecture series — anatomy to pharmacology' },
      { type: 'book', title: "Gray's Anatomy", desc: 'Standard anatomy reference — use alongside dissection practicals' },
      { type: 'platform', title: 'AIIMS Previous Papers', desc: 'Essential for INI CET prep — AIIMS papers are the toughest benchmark' },
    ],
    companies: ['AIIMS', 'PGIMER', 'Apollo Hospitals', 'Fortis', 'Medanta', 'Max Healthcare', 'Manipal Hospitals', 'Armed Forces Medical Services', 'WHO / UNICEF Health Programmes'],
    pitfalls: [
      'Not taking mock tests seriously — NEET is purely MCQ-based and time management is a separate skill',
      'Memorising without clinical application — modern MCQs test reasoning and case-based thinking',
      'Skipping internship postings: ward exposure builds skills no textbook or coaching can replace',
      'Not specialising: general practitioners earn a fraction of what MD/MS specialists earn at the same experience level',
    ],
  },

  'Chartered Accountant': {
    skills: {
      technical: ['Financial accounting (Ind AS / IFRS)', 'Direct Tax (Income Tax Act) & Indirect Tax (GST)', 'Auditing standards (SA series)', 'Corporate law and SEBI regulations', 'Financial modelling and analysis', 'ERP systems — SAP, Tally, QuickBooks'],
      soft: ['Analytical rigour and accuracy', 'Client communication and management', 'Time management across multiple client engagements', 'Professional integrity and ethics'],
    },
    career_ladder: [
      { role: 'CA Articleship', years: '3 yrs (concurrent)', salary: 'Stipend ₹2–15K/month' },
      { role: 'CA Fresher (Big 4 / Firm)', years: '0–2 yrs post-CA', salary: '₹7–15 LPA' },
      { role: 'Senior Associate / Asst Manager', years: '2–5 yrs', salary: '₹12–22 LPA' },
      { role: 'Manager / Senior Manager', years: '5–10 yrs', salary: '₹20–40 LPA' },
      { role: 'Partner / CFO / Finance Head', years: '10+ yrs', salary: '₹40–100+ LPA' },
    ],
    resources: [
      { type: 'platform', title: 'ICAI Study Material (SM)', desc: 'Always start with official ICAI SM — most exam questions are directly SM-based' },
      { type: 'platform', title: 'ICAI Mock Test Papers (MTP / RTP)', desc: 'Solve every MTP and RTP paper — they predict actual exam patterns' },
      { type: 'youtube', title: 'CA Wallah by PW (YouTube)', desc: 'Free and structured CA Foundation + Intermediate lectures — hugely popular' },
      { type: 'book', title: 'Vinod Gupta SM — Direct Tax', desc: 'Standard reference for CA Final DT paper — used by most top rankers' },
      { type: 'platform', title: 'ICAI e-Learning Portal', desc: 'Official ICAI portal with recorded lectures — free for registered students' },
    ],
    companies: ['Deloitte', 'PwC', 'EY', 'KPMG', 'Grant Thornton', 'BDO', 'Infosys', 'Reliance Industries', 'Tata Group', 'HDFC Bank', 'SEBI', 'RBI', 'Own CA Practice'],
    pitfalls: [
      'Relying only on coaching notes and skipping ICAI SM/PM — exam questions directly come from official materials',
      'Poor articleship firm: a Big 4 or top-tier firm articleship creates a permanent salary and network advantage',
      'Attempting both groups together too early — most toppers recommend clearing one group at a time',
      'Ignoring GST and Ind AS: they carry the highest marks in Intermediate and Final papers now',
    ],
  },

  'IAS Officer': {
    skills: {
      technical: ['NCERT foundation across all subjects (Class 6–12)', 'Current affairs — national and international', 'Answer writing (250-word GS and essay format)', 'Optional subject depth', 'Map reading and geography', 'Government policy and schemes'],
      soft: ['Structured articulation of complex issues', 'Calm under exam pressure across 3 days of Mains', 'Self-discipline over 1–2 years of solo preparation', 'Empathy for ground-level governance'],
    },
    career_ladder: [
      { role: 'IAS Probationer (LBSNAA)', years: 'Year 1 training', salary: '₹56,100/month' },
      { role: 'SDM / Joint Collector', years: 'Year 2–5', salary: '₹56K–1 Lakh/month' },
      { role: 'District Collector / DM', years: 'Year 6–12', salary: '₹78K–1.18 Lakh/month' },
      { role: 'Secretary to State Govt', years: 'Year 12–20', salary: '₹1.18–2.24 Lakh/month' },
      { role: 'Secretary GoI / Cabinet Secy', years: '20+ yrs', salary: '₹2.25 Lakh/month (Apex)' },
    ],
    resources: [
      { type: 'book', title: 'M. Laxmikanth — Indian Polity', desc: 'The most essential UPSC book — covers GS Paper 2 polity in full' },
      { type: 'book', title: 'Bipin Chandra — Modern India', desc: 'Standard history reference for GS Paper 1 modern Indian history section' },
      { type: 'platform', title: 'Vision IAS / Insights on India', desc: 'Top UPSC coaching platforms — excellent test series and current affairs PDFs' },
      { type: 'youtube', title: 'StudyIQ IAS (YouTube)', desc: 'Free daily current affairs and GS topic explanations — used by lakhs of aspirants' },
      { type: 'platform', title: 'ForumIAS', desc: 'Community + mock interview platform — best for Mains answer writing practice' },
    ],
    companies: ['Indian Administrative Service cadre', 'State Government departments', 'Central Government Ministries', 'NITI Aayog', 'UN / World Bank deputation', 'DM / Collector Office'],
    pitfalls: [
      'Starting with Mains books before finishing all NCERTs — a weak foundation leads to shallow GS understanding',
      'Not writing 10 answers daily from Month 3 — answer writing speed and structure are exam-deciding skills',
      'Changing the optional subject mid-preparation — it costs 4–6 months every single time',
      'Over-consuming news while under-revising static syllabus — UPSC tests depth of analysis, not breadth of reading',
    ],
  },

  'Lawyer': {
    skills: {
      technical: ['Legal research (SCC Online, Manupatra, Indian Kanoon)', 'Drafting (plaints, petitions, contracts, agreements)', 'Procedural law (CPC, CrPC, Evidence Act)', 'Substantive law (IPC, Contracts, Companies Act, Constitution)', 'Moot court and oral advocacy', 'Legal analysis and interpretation'],
      soft: ['Persuasive written and oral communication', 'Attention to detail in document review', 'Negotiation and client management', 'Professional ethics and confidentiality'],
    },
    career_ladder: [
      { role: 'Junior Advocate / Intern', years: '0–3 yrs', salary: '₹10–30K/month (litigation)' },
      { role: 'Associate at Law Firm', years: '1–4 yrs', salary: '₹6–15 LPA (corporate)' },
      { role: 'Senior Associate', years: '4–7 yrs', salary: '₹12–25 LPA' },
      { role: 'Principal Associate / Counsel', years: '7–12 yrs', salary: '₹25–55 LPA' },
      { role: 'Partner / Senior Advocate', years: '12+ yrs', salary: '₹50–200+ LPA' },
    ],
    resources: [
      { type: 'platform', title: 'SCC Online / Manupatra', desc: 'Essential legal databases — read landmark judgements throughout LLB' },
      { type: 'platform', title: 'Indian Kanoon (free)', desc: 'Free database for HC and SC judgements — use it daily' },
      { type: 'book', title: 'Ratanlal & Dhirajlal — Law of Crimes', desc: 'Standard reference for IPC and criminal law used in Indian courts' },
      { type: 'book', title: 'Avtar Singh — Contract and Specific Relief', desc: 'Best Indian contract law textbook — mandatory for NLU students' },
      { type: 'platform', title: 'CLAT Previous Papers (10 years)', desc: 'Solve all past CLAT papers for legal reasoning and reading comprehension' },
    ],
    companies: ['AZB & Partners', 'Cyril Amarchand Mangaldas', 'Shardul Amarchand', 'Trilegal', 'J Sagar Associates', 'Khaitan & Co', 'In-house at Tata / Reliance / HDFC', 'Supreme Court Bar', 'High Court Bars'],
    pitfalls: [
      'Not interning seriously during LLB — top law firms hire almost exclusively from strong internship records',
      'Avoiding litigation experience: even corporate lawyers need to understand how courts and judges actually function',
      'Not publishing case notes or articles: academic visibility significantly affects NLU placement outcomes',
      "Choosing a low-ranked law school thinking all LLBs are equal — NLU brand opens doors that others simply cannot",
    ],
  },

  'Data Scientist': {
    skills: {
      technical: ['Python (Pandas, NumPy, Scikit-learn, PyTorch)', 'SQL — joins, window functions, aggregations', 'Machine Learning (regression, trees, clustering, neural nets)', 'Data visualisation (Matplotlib, Seaborn, Tableau)', 'Statistics and probability', 'Feature engineering and model evaluation', 'Git and collaborative development'],
      soft: ['Translating data insights into business decisions', 'Storytelling with data (not just charts)', 'Cross-functional collaboration with product and engineering', 'Intellectual curiosity and hypothesis thinking'],
    },
    career_ladder: [
      { role: 'Data Analyst / Junior DS', years: '0–2 yrs', salary: '₹4–9 LPA' },
      { role: 'Data Scientist I', years: '1–3 yrs', salary: '₹8–18 LPA' },
      { role: 'Senior Data Scientist', years: '3–6 yrs', salary: '₹16–30 LPA' },
      { role: 'Lead DS / ML Manager', years: '6–10 yrs', salary: '₹28–50 LPA' },
      { role: 'Director of Data / CDO', years: '10+ yrs', salary: '₹50–100+ LPA' },
    ],
    resources: [
      { type: 'platform', title: 'Kaggle', desc: 'Best place to practice with real datasets and compete to build portfolio' },
      { type: 'course', title: 'fast.ai — Practical Deep Learning (free)', desc: 'Top-down practical ML course — better than most paid offerings' },
      { type: 'book', title: 'Hands-On ML — Aurélien Géron', desc: 'The single best ML book for practitioners — covers theory and code both' },
      { type: 'youtube', title: 'Krish Naik / StatQuest (YouTube)', desc: 'Krish for applied DS in Hindi; StatQuest for statistics and ML concepts' },
      { type: 'course', title: 'Google Data Analytics (Coursera, free audit)', desc: 'Good structured entry-point for absolute beginners — free to audit' },
    ],
    companies: ['Amazon', 'Flipkart', 'PhonePe', 'Razorpay', 'HDFC Bank', 'Swiggy', 'McKinsey Analytics', 'Mu Sigma', 'Fractal Analytics', 'Tiger Analytics', 'Walmart Global Tech', 'Microsoft'],
    pitfalls: [
      'Skipping SQL while focusing only on ML: most DS interviews start with SQL and business case questions',
      'No public portfolio: a well-documented Kaggle or GitHub profile matters more than any certificate',
      'Applying to Data Scientist roles without DA experience: nearly no company hires fresh graduates directly as DS',
      'Treating DS as just Python scripting: business problem framing and communication are 50% of the actual job',
    ],
  },
}

const CATEGORY_RICH_FALLBACK = {
  'Engineering': {
    skills: { technical: ['Mathematics and problem-solving', 'CAD / simulation tools', 'Project management', 'Domain-specific software'], soft: ['Teamwork on large projects', 'Analytical thinking', 'Documentation', 'Communication with non-technical stakeholders'] },
    career_ladder: [{ role: 'Graduate Engineer Trainee', years: '0–1 yr', salary: '₹3–6 LPA' }, { role: 'Engineer', years: '1–4 yrs', salary: '₹5–12 LPA' }, { role: 'Senior Engineer', years: '4–8 yrs', salary: '₹10–20 LPA' }, { role: 'Lead / Manager', years: '8+ yrs', salary: '₹18–40 LPA' }],
    resources: [{ type: 'platform', title: 'NPTEL (free IIT lectures)', desc: 'Free engineering courses from IIT professors — use for GATE prep too' }, { type: 'platform', title: 'GATE Official Syllabus + PYQs', desc: 'Previous year GATE papers are the best study guide for the exam' }],
    companies: ['L&T', 'Tata Projects', 'BHEL', 'ONGC', 'NTPC', 'Reliance Industries', 'Mahindra', 'JSW Steel', 'DLF', 'Godrej'],
    pitfalls: ['Not appearing for GATE — it unlocks PSU jobs worth ₹8–20 LPA regardless of specialisation', 'Skipping internships: engineering is a practical field and project experience is mandatory for good placements'],
  },
  'Medical': {
    skills: { technical: ['Clinical skills and procedures', 'Pharmacology and prescribing', 'Medical record documentation', 'Diagnostic reasoning'], soft: ['Empathy and patient trust-building', 'Calm decision-making', 'Interdisciplinary teamwork', 'Ethical practice'] },
    career_ladder: [{ role: 'Intern / Junior Doctor', years: '0–2 yrs', salary: 'Stipend ₹15–30K/month' }, { role: 'Medical Officer', years: '2–5 yrs', salary: '₹5–12 LPA' }, { role: 'Specialist / Consultant', years: '5–12 yrs', salary: '₹15–50 LPA' }, { role: 'Senior Consultant / HOD', years: '12+ yrs', salary: '₹40–100+ LPA' }],
    resources: [{ type: 'platform', title: 'Marrow / DAMS', desc: 'Top NEET-PG preparation platforms used by PG aspirants' }, { type: 'youtube', title: 'Dr. Najeeb Lectures (YouTube)', desc: 'Free, world-class medical lectures from basic science to clinical medicine' }],
    companies: ['AIIMS', 'Apollo', 'Fortis', 'Medanta', 'Max Hospitals', 'Government Medical Colleges', 'Armed Forces Medical Services'],
    pitfalls: ['Skipping specialisation (PG): MBBS alone limits earning potential significantly in today\'s healthcare sector', 'Underestimating NEET-PG difficulty: start preparing from Year 3 of MBBS, not the final year'],
  },
  'Commerce': {
    skills: { technical: ['Accounting and financial reporting', 'Taxation (Income Tax + GST)', 'Business law and compliance', 'MS Excel and financial tools'], soft: ['Numerical accuracy', 'Client communication', 'Business acumen', 'Deadline management'] },
    career_ladder: [{ role: 'Accounts Executive / Analyst', years: '0–2 yrs', salary: '₹3–7 LPA' }, { role: 'Senior Analyst / Associate', years: '2–5 yrs', salary: '₹6–15 LPA' }, { role: 'Manager', years: '5–10 yrs', salary: '₹12–25 LPA' }, { role: 'Senior Manager / CFO', years: '10+ yrs', salary: '₹25–80 LPA' }],
    resources: [{ type: 'platform', title: 'ICAI SM & PM', desc: 'Official ICAI study materials are the primary source for CA exams' }, { type: 'youtube', title: 'CA Wallah / Unacademy CA (YouTube)', desc: 'Free structured CA lectures for Foundation, Intermediate, and Final' }],
    companies: ['Deloitte', 'PwC', 'EY', 'KPMG', 'HDFC Bank', 'ICICI Bank', 'Infosys', 'Reliance', 'Tata Group', 'McKinsey', 'Own CA/CS Practice'],
    pitfalls: ['Skipping professional certifications: B.Com alone limits growth — CA, CFA, or CS is almost mandatory for senior roles', 'Not understanding that Big 4 articleship quality determines your first 5 years of salary trajectory'],
  },
  'Arts': {
    skills: { technical: ['Research and writing', 'Critical analysis', 'Legal or policy drafting', 'Public speaking and advocacy'], soft: ['Communication and persuasion', 'Empathy and cultural awareness', 'Curiosity and lifelong learning', 'Structured thinking'] },
    career_ladder: [{ role: 'Junior Officer / Researcher', years: '0–2 yrs', salary: '₹3–7 LPA' }, { role: 'Officer / Senior Researcher', years: '2–6 yrs', salary: '₹6–15 LPA' }, { role: 'Senior Officer / Manager', years: '6–12 yrs', salary: '₹12–25 LPA' }, { role: 'Director / IAS-level Officer', years: '12+ yrs', salary: '₹20–50+ LPA' }],
    resources: [{ type: 'book', title: 'Laxmikanth — Indian Polity', desc: 'The single most important UPSC book — every Arts student must read this' }, { type: 'platform', title: 'Vision IAS / Insights on India', desc: 'Best structured UPSC preparation — test series and current affairs' }],
    companies: ['Government of India / State Governments', 'NGOs and UN Agencies', 'Media Houses', 'Law Firms', 'Universities and Research Institutes', 'Think Tanks'],
    pitfalls: ['Dismissing commerce or technology crossover: Arts graduates who pick up quantitative skills earn significantly more', 'Not doing UPSC prep seriously: civil services is the most high-ROI career path for most Arts graduates'],
  },
  'Government Jobs': {
    skills: { technical: ['Government procedures and noting/drafting', 'Policy analysis', 'Data interpretation', 'Relevant domain knowledge per department'], soft: ['Integrity and accountability', 'Communication at multiple levels', 'Time management', 'Patience in bureaucratic processes'] },
    career_ladder: [{ role: 'Group C / Junior Officer', years: '0–3 yrs', salary: '₹3–8 LPA' }, { role: 'Group B / Officer', years: '3–8 yrs', salary: '₹6–14 LPA' }, { role: 'Senior Officer / Manager', years: '8–15 yrs', salary: '₹12–25 LPA' }, { role: 'Joint Secretary / Director', years: '15+ yrs', salary: '₹20–40 LPA' }],
    resources: [{ type: 'platform', title: 'Vision IAS / Insights on India', desc: 'Best UPSC preparation platforms for CSE and state PSC' }, { type: 'platform', title: 'Adda247 / Testbook', desc: 'Best platforms for SSC CGL, IBPS, and other competitive exam prep' }],
    companies: ['Government of India', 'State Governments', 'PSUs (ONGC, BHEL, NTPC)', 'RBI, SEBI, NABARD', 'Indian Army / Navy / Air Force'],
    pitfalls: ['Preparing for too many exams simultaneously — focus on 1–2 exams and master them', 'Underestimating the cutoff: government exams are intensely competitive with lakhs of applicants'],
  },
  'Emerging Careers': {
    skills: { technical: ['Digital tools and platforms', 'Data analysis basics', 'Content creation or coding', 'Online portfolio building'], soft: ['Adaptability and self-learning', 'Personal branding', 'Networking on LinkedIn', 'Delivering results with autonomy'] },
    career_ladder: [{ role: 'Fresher / Trainee', years: '0–1 yr', salary: '₹3–6 LPA' }, { role: 'Junior Specialist', years: '1–3 yrs', salary: '₹5–12 LPA' }, { role: 'Specialist / Senior', years: '3–6 yrs', salary: '₹10–22 LPA' }, { role: 'Lead / Manager', years: '6+ yrs', salary: '₹20–45 LPA' }],
    resources: [{ type: 'platform', title: 'Coursera / Udemy', desc: 'Best online learning platforms for emerging career skills and certifications' }, { type: 'platform', title: 'LinkedIn Learning', desc: 'Short professional skill courses with a LinkedIn certificate' }],
    companies: ['Startups', 'Tech Unicorns (Swiggy, Zepto, PhonePe)', 'E-commerce Platforms', 'Digital Agencies', 'MNCs with digital teams', 'Freelance / Self-employment'],
    pitfalls: ['Collecting certifications without building real projects: a portfolio beats certificates in every emerging career', 'Neglecting LinkedIn: 70% of emerging career jobs are filled through referrals and profile visibility'],
  },
}

function getRichData(career) {
  return RICH_DATA[career.career_name] || CATEGORY_RICH_FALLBACK[career.category] || CATEGORY_RICH_FALLBACK['Emerging Careers']
}

export function getRoadmap({ targetCareer, currentEducation, timeline, budget }) {
  const career = careerData.find(c => c.career_name === targetCareer)
  if (!career) return null

  const tpl = ROADMAPS[targetCareer]
  const eduKey = currentEducation === '10th' ? 'from10th' : currentEducation === '12th' ? 'from12th' : 'fromGrad'
  const phases = tpl?.[eduKey] || buildGenericRoadmap(career, currentEducation)

  const namedBackups = (tpl?.backups || [])
    .map(name => careerData.find(c => c.career_name === name))
    .filter(Boolean)
    .map(c => ({ career_name: c.career_name, category: c.category, salary: c.average_salary_india, reason: `Shares academic pathway and entrance exams with ${targetCareer}.` }))

  const backups = [...namedBackups, ...getBackups(career)]
    .filter((c, i, arr) => arr.findIndex(x => x.career_name === c.career_name) === i)
    .slice(0, 4)

  const totalMonths = phases.reduce((sum, p) => {
    const m = p.duration.match(/(\d+)/)
    if (!m) return sum
    return sum + (parseInt(m[1]) * (p.duration.toLowerCase().includes('year') ? 12 : 1))
  }, 0)
  const totalYears = Math.ceil(totalMonths / 12)

  let budgetNote = null
  if (budget === 'Low (government colleges focus)') budgetNote = 'Focus on government colleges and apply for Central Sector Scholarship, NSP, and state merit scholarships to minimise cost.'
  else if (budget === 'High (best private institutes)') budgetNote = 'Private institutes and coaching centres are available at higher fees — budget ₹2–15 LPA depending on the college type.'

  const rich = getRichData(career)

  return {
    target_career:  targetCareer,
    category:       career.category,
    description:    career.description,
    salary:         career.average_salary_india,
    growth_scope:   career.growth_scope,
    total_duration: totalYears > 0 ? `~${totalYears} year${totalYears > 1 ? 's' : ''} from ${currentEducation}` : 'Path varies',
    phases,
    key_exams: (career.entrance_exams || []).map(e => ({
      exam_name:   e.exam_name,
      level:       e.level,
      description: e.short_description,
    })),
    colleges:       getColleges(career),
    backup_options: backups,
    budget_note:    budgetNote,
    skills:         rich.skills,
    career_ladder:  rich.career_ladder,
    resources:      rich.resources,
    companies:      rich.companies,
    pitfalls:       rich.pitfalls,
  }
}

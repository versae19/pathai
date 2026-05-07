export const careerCategories = [
  'Engineering',
  'Medical',
  'Commerce',
  'Arts',
  'Government Jobs',
  'Emerging Careers'
]

export const entranceExamDetails = {
  'JEE Main': {
    exam_name: 'JEE Main',
    eligibility: 'Class 12 or equivalent with Physics, Chemistry, and Mathematics; candidates must meet current NTA attempt and year-of-passing rules.',
    exam_level: 'national',
    conducted_by: 'National Testing Agency (NTA)',
    difficulty_level: 'hard',
    short_description: 'Primary entrance exam for NITs, IIITs, GFTIs, and many engineering colleges; also used to qualify for JEE Advanced.'
  },
  'JEE Advanced': {
    exam_name: 'JEE Advanced',
    eligibility: 'Top qualifying candidates from JEE Main who satisfy age, attempt, and Class 12 criteria.',
    exam_level: 'national',
    conducted_by: 'One of the IITs on a rotational basis under the Joint Admission Board',
    difficulty_level: 'hard',
    short_description: 'Highly competitive entrance exam for undergraduate programs at IITs.'
  },
  BITSAT: {
    exam_name: 'BITSAT',
    eligibility: 'Class 12 with Physics, Chemistry, Mathematics, and English, meeting the minimum aggregate criteria set by BITS Pilani.',
    exam_level: 'university',
    conducted_by: 'Birla Institute of Technology and Science, Pilani',
    difficulty_level: 'hard',
    short_description: 'Computer-based entrance exam for admission to BITS Pilani campuses.'
  },
  VITEEE: {
    exam_name: 'VITEEE',
    eligibility: 'Class 12 or equivalent with Physics, Chemistry, and Mathematics/Biology as per chosen program.',
    exam_level: 'university',
    conducted_by: 'Vellore Institute of Technology',
    difficulty_level: 'medium',
    short_description: 'University-level entrance exam for B.Tech admissions at VIT campuses.'
  },
  'State CETs': {
    exam_name: 'State CETs',
    eligibility: 'Class 12 with required science subjects and domicile/category rules as defined by the respective state.',
    exam_level: 'state',
    conducted_by: 'Respective state CET cells and technical education departments',
    difficulty_level: 'medium',
    short_description: 'State-level engineering entrance exams used for admission to government and private colleges within the state.'
  },
  GATE: {
    exam_name: 'GATE',
    eligibility: 'Final-year or completed undergraduate degree in engineering, technology, science, architecture, or approved equivalent fields.',
    exam_level: 'national',
    conducted_by: 'IISc Bengaluru and IITs on behalf of the National Coordination Board',
    difficulty_level: 'hard',
    short_description: 'Graduate-level exam used for M.Tech admissions, PSU recruitment, and research opportunities.'
  },
  'NEET UG': {
    exam_name: 'NEET UG',
    eligibility: 'Class 12 or equivalent with Physics, Chemistry, Biology/Biotechnology, and English as per NMC/NTA rules.',
    exam_level: 'national',
    conducted_by: 'National Testing Agency (NTA)',
    difficulty_level: 'hard',
    short_description: 'Single national entrance exam for MBBS, BDS, AYUSH, and several allied medical programs in India.'
  },
  'NEET PG': {
    exam_name: 'NEET PG',
    eligibility: 'MBBS degree with completed or completing compulsory internship and valid medical registration.',
    exam_level: 'national',
    conducted_by: 'National Board of Examinations in Medical Sciences (NBEMS)',
    difficulty_level: 'hard',
    short_description: 'Postgraduate medical entrance exam for MD, MS, and PG diploma seats.'
  },
  'INI CET': {
    exam_name: 'INI CET',
    eligibility: 'MBBS/BDS degree with internship completion as per Institute of National Importance requirements.',
    exam_level: 'national',
    conducted_by: 'All India Institute of Medical Sciences (AIIMS), New Delhi',
    difficulty_level: 'hard',
    short_description: 'Entrance exam for postgraduate medical seats at AIIMS, JIPMER, NIMHANS, PGIMER, and other institutes of national importance.'
  },
  'NEET MDS': {
    exam_name: 'NEET MDS',
    eligibility: 'BDS degree with completed internship and valid dental registration.',
    exam_level: 'national',
    conducted_by: 'National Board of Examinations in Medical Sciences (NBEMS)',
    difficulty_level: 'hard',
    short_description: 'National entrance exam for postgraduate dental programs in India.'
  },
  'AIIMS BSc Nursing': {
    exam_name: 'AIIMS BSc Nursing',
    eligibility: 'Class 12 with Physics, Chemistry, Biology, and English, meeting AIIMS eligibility and category rules.',
    exam_level: 'national',
    conducted_by: 'All India Institute of Medical Sciences (AIIMS), New Delhi',
    difficulty_level: 'medium',
    short_description: 'Entrance exam for B.Sc Nursing admission at AIIMS institutes.'
  },
  'JIPMER Nursing': {
    exam_name: 'JIPMER Nursing',
    eligibility: 'Class 12 with required science subjects and eligibility rules notified for the nursing program.',
    exam_level: 'national',
    conducted_by: 'Jawaharlal Institute of Postgraduate Medical Education and Research',
    difficulty_level: 'medium',
    short_description: 'Entrance route for nursing programs offered through JIPMER or applicable national admission processes.'
  },
  'State Nursing Entrance Exams': {
    exam_name: 'State Nursing Entrance Exams',
    eligibility: 'Class 12 with Biology or relevant science subjects as defined by the respective state nursing authority.',
    exam_level: 'state',
    conducted_by: 'Respective state nursing councils or examination boards',
    difficulty_level: 'medium',
    short_description: 'State-level entrance exams for B.Sc Nursing, GNM, and related nursing programs.'
  },
  GPAT: {
    exam_name: 'GPAT',
    eligibility: 'Bachelor degree in Pharmacy or final-year B.Pharm candidates as per exam rules.',
    exam_level: 'national',
    conducted_by: 'National Board of Examinations in Medical Sciences (NBEMS)',
    difficulty_level: 'medium',
    short_description: 'Entrance exam used for M.Pharm admissions and scholarship eligibility at participating institutions.'
  },
  CUET: {
    exam_name: 'CUET',
    eligibility: 'Class 12 for undergraduate programs or relevant bachelor degree for postgraduate programs, depending on the course.',
    exam_level: 'national',
    conducted_by: 'National Testing Agency (NTA)',
    difficulty_level: 'medium',
    short_description: 'Common entrance test for admission to many central, state, deemed, and private universities.'
  },
  'State Pharmacy Entrance Exams': {
    exam_name: 'State Pharmacy Entrance Exams',
    eligibility: 'Class 12 with Physics, Chemistry, and Mathematics/Biology, depending on state and course rules.',
    exam_level: 'state',
    conducted_by: 'Respective state CET cells or technical education boards',
    difficulty_level: 'medium',
    short_description: 'State-level exams for D.Pharm, B.Pharm, and related pharmacy admissions.'
  },
  'State Paramedical Entrance Exams': {
    exam_name: 'State Paramedical Entrance Exams',
    eligibility: 'Class 12 with science subjects as specified for physiotherapy or allied health programs.',
    exam_level: 'state',
    conducted_by: 'Respective state medical or paramedical education boards',
    difficulty_level: 'medium',
    short_description: 'Entrance exams for physiotherapy, lab technology, radiology, and allied health courses.'
  },
  'CA Foundation': {
    exam_name: 'CA Foundation',
    eligibility: 'Class 12 passed or appearing candidates registered with ICAI under current CA Foundation rules.',
    exam_level: 'national',
    conducted_by: 'Institute of Chartered Accountants of India (ICAI)',
    difficulty_level: 'medium',
    short_description: 'Entry-level exam for the Chartered Accountancy course.'
  },
  'CA Intermediate': {
    exam_name: 'CA Intermediate',
    eligibility: 'CA Foundation qualified candidates or eligible graduates through the direct entry route.',
    exam_level: 'national',
    conducted_by: 'Institute of Chartered Accountants of India (ICAI)',
    difficulty_level: 'hard',
    short_description: 'Second stage of the CA qualification focused on accounting, taxation, auditing, and corporate laws.'
  },
  'CA Final': {
    exam_name: 'CA Final',
    eligibility: 'CA Intermediate qualified candidates who meet practical training requirements.',
    exam_level: 'national',
    conducted_by: 'Institute of Chartered Accountants of India (ICAI)',
    difficulty_level: 'hard',
    short_description: 'Final professional exam for becoming a Chartered Accountant in India.'
  },
  CSEET: {
    exam_name: 'CSEET',
    eligibility: 'Class 12 passed or appearing candidates, subject to ICSI rules and exemptions.',
    exam_level: 'national',
    conducted_by: 'Institute of Company Secretaries of India (ICSI)',
    difficulty_level: 'medium',
    short_description: 'Entry-level test for the Company Secretary course.'
  },
  'CS Executive': {
    exam_name: 'CS Executive',
    eligibility: 'CSEET qualified candidates or eligible graduates under ICSI rules.',
    exam_level: 'national',
    conducted_by: 'Institute of Company Secretaries of India (ICSI)',
    difficulty_level: 'medium',
    short_description: 'Intermediate stage of the Company Secretary qualification.'
  },
  'CS Professional': {
    exam_name: 'CS Professional',
    eligibility: 'Candidates who have cleared CS Executive and meet ICSI training requirements.',
    exam_level: 'national',
    conducted_by: 'Institute of Company Secretaries of India (ICSI)',
    difficulty_level: 'hard',
    short_description: 'Final stage for becoming a qualified Company Secretary.'
  },
  CAT: {
    exam_name: 'CAT',
    eligibility: 'Bachelor degree with minimum marks as specified by IIMs; final-year students may also apply.',
    exam_level: 'national',
    conducted_by: 'Indian Institutes of Management (IIMs)',
    difficulty_level: 'hard',
    short_description: 'Premier MBA entrance exam for IIMs and many top business schools.'
  },
  XAT: {
    exam_name: 'XAT',
    eligibility: 'Bachelor degree in any discipline; final-year students may apply as per XLRI rules.',
    exam_level: 'national',
    conducted_by: 'XLRI Jamshedpur',
    difficulty_level: 'hard',
    short_description: 'National MBA entrance exam accepted by XLRI and many other management institutes.'
  },
  GMAT: {
    exam_name: 'GMAT',
    eligibility: 'No fixed academic eligibility by the exam body; business schools set their own admission requirements.',
    exam_level: 'national',
    conducted_by: 'Graduate Management Admission Council (GMAC)',
    difficulty_level: 'hard',
    short_description: 'Standardized management entrance test accepted by many Indian and international business schools.'
  },
  CFA: {
    exam_name: 'CFA',
    eligibility: 'Bachelor degree, final-year graduation, or qualifying professional work experience as per CFA Institute rules.',
    exam_level: 'national',
    conducted_by: 'CFA Institute',
    difficulty_level: 'hard',
    short_description: 'Professional finance qualification valued for investment research, portfolio management, and financial analysis.'
  },
  'IBPS PO': {
    exam_name: 'IBPS PO',
    eligibility: 'Graduate degree in any discipline with age and nationality criteria as per IBPS notification.',
    exam_level: 'national',
    conducted_by: 'Institute of Banking Personnel Selection (IBPS)',
    difficulty_level: 'medium',
    short_description: 'Recruitment exam for probationary officer roles in participating public sector banks.'
  },
  'IBPS Clerk': {
    exam_name: 'IBPS Clerk',
    eligibility: 'Graduate degree in any discipline with age and language requirements as per IBPS notification.',
    exam_level: 'national',
    conducted_by: 'Institute of Banking Personnel Selection (IBPS)',
    difficulty_level: 'medium',
    short_description: 'Recruitment exam for clerical cadre roles in public sector banks.'
  },
  'SBI PO': {
    exam_name: 'SBI PO',
    eligibility: 'Graduate degree in any discipline with age criteria as notified by State Bank of India.',
    exam_level: 'national',
    conducted_by: 'State Bank of India',
    difficulty_level: 'hard',
    short_description: 'Recruitment exam for probationary officer roles at State Bank of India.'
  },
  'SBI Clerk': {
    exam_name: 'SBI Clerk',
    eligibility: 'Graduate degree in any discipline with age and local language criteria as notified by SBI.',
    exam_level: 'national',
    conducted_by: 'State Bank of India',
    difficulty_level: 'medium',
    short_description: 'Recruitment exam for junior associate/customer support roles at SBI.'
  },
  'RBI Assistant': {
    exam_name: 'RBI Assistant',
    eligibility: 'Graduate degree with minimum marks, age criteria, and language requirements as notified by RBI.',
    exam_level: 'national',
    conducted_by: 'Reserve Bank of India',
    difficulty_level: 'medium',
    short_description: 'Recruitment exam for assistant roles in RBI offices.'
  },
  FRM: {
    exam_name: 'FRM',
    eligibility: 'No strict academic eligibility for registration; certification requires passing exams and relevant work experience.',
    exam_level: 'national',
    conducted_by: 'Global Association of Risk Professionals (GARP)',
    difficulty_level: 'hard',
    short_description: 'Professional certification for financial risk management careers.'
  },
  CLAT: {
    exam_name: 'CLAT',
    eligibility: 'Class 12 for undergraduate law programs or LLB degree for postgraduate law programs, with minimum marks as notified.',
    exam_level: 'national',
    conducted_by: 'Consortium of National Law Universities',
    difficulty_level: 'hard',
    short_description: 'Common law entrance exam for National Law Universities and other participating law schools.'
  },
  AILET: {
    exam_name: 'AILET',
    eligibility: 'Class 12 for BA LLB or relevant law degree for LLM/PhD programs, as per NLU Delhi rules.',
    exam_level: 'university',
    conducted_by: 'National Law University Delhi',
    difficulty_level: 'hard',
    short_description: 'Entrance exam for law programs at National Law University Delhi.'
  },
  'LSAT India': {
    exam_name: 'LSAT India',
    eligibility: 'Class 12 for undergraduate law or graduation for postgraduate law, depending on institute requirements.',
    exam_level: 'national',
    conducted_by: 'Law School Admission Council (LSAC)',
    difficulty_level: 'medium',
    short_description: 'Law aptitude test accepted by multiple private law colleges in India.'
  },
  'CUET Law': {
    exam_name: 'CUET Law',
    eligibility: 'Class 12 or graduation depending on the law program and university-specific requirements.',
    exam_level: 'national',
    conducted_by: 'National Testing Agency (NTA)',
    difficulty_level: 'medium',
    short_description: 'CUET-based entrance route for law programs at participating universities.'
  },
  'IIMC Entrance Exam': {
    exam_name: 'IIMC Entrance Exam',
    eligibility: 'Bachelor degree or final-year graduation for postgraduate journalism and mass communication programs.',
    exam_level: 'national',
    conducted_by: 'Indian Institute of Mass Communication or the notified admission authority',
    difficulty_level: 'medium',
    short_description: 'Entrance route for journalism, advertising, PR, and communication programs at IIMC.'
  },
  'University Journalism Entrance Exams': {
    exam_name: 'University Journalism Entrance Exams',
    eligibility: 'Class 12 for undergraduate programs or bachelor degree for postgraduate programs, depending on university rules.',
    exam_level: 'university',
    conducted_by: 'Individual universities and media institutes',
    difficulty_level: 'medium',
    short_description: 'Institute-specific entrance exams for journalism and mass communication courses.'
  },
  'University Entrance Exams': {
    exam_name: 'University Entrance Exams',
    eligibility: 'Eligibility depends on the course level and university, usually Class 12 for UG and bachelor degree for PG.',
    exam_level: 'university',
    conducted_by: 'Individual universities',
    difficulty_level: 'medium',
    short_description: 'University-specific entrance exams for psychology, humanities, and related programs.'
  },
  TISSNET: {
    exam_name: 'TISSNET',
    eligibility: 'Bachelor degree from a recognized university for postgraduate programs, subject to current admission rules.',
    exam_level: 'university',
    conducted_by: 'Tata Institute of Social Sciences',
    difficulty_level: 'medium',
    short_description: 'Entrance route historically associated with TISS postgraduate programs in social sciences and related fields.'
  },
  'NID DAT': {
    exam_name: 'NID DAT',
    eligibility: 'Class 12 for B.Des or bachelor degree for M.Des, with age and program rules set by NID.',
    exam_level: 'national',
    conducted_by: 'National Institute of Design',
    difficulty_level: 'hard',
    short_description: 'Design aptitude test for admission to NID design programs.'
  },
  UCEED: {
    exam_name: 'UCEED',
    eligibility: 'Class 12 passed or appearing candidates who meet age and attempt limits as notified.',
    exam_level: 'national',
    conducted_by: 'IIT Bombay',
    difficulty_level: 'hard',
    short_description: 'Entrance exam for undergraduate design programs at IITs and other participating institutes.'
  },
  'NIFT Entrance Exam': {
    exam_name: 'NIFT Entrance Exam',
    eligibility: 'Class 12 for undergraduate design/fashion programs or graduation for postgraduate programs, as per NIFT rules.',
    exam_level: 'national',
    conducted_by: 'National Institute of Fashion Technology',
    difficulty_level: 'medium',
    short_description: 'Entrance exam for fashion design, communication design, fashion technology, and management programs at NIFT.'
  },
  CTET: {
    exam_name: 'CTET',
    eligibility: 'Teacher education qualification such as D.El.Ed/B.Ed with academic criteria depending on paper level.',
    exam_level: 'national',
    conducted_by: 'Central Board of Secondary Education (CBSE)',
    difficulty_level: 'medium',
    short_description: 'Teacher eligibility test for central government schools and many private schools.'
  },
  TET: {
    exam_name: 'TET',
    eligibility: 'Teacher training qualification and academic criteria as defined by the respective state.',
    exam_level: 'state',
    conducted_by: 'Respective state education boards',
    difficulty_level: 'medium',
    short_description: 'State teacher eligibility test for primary and upper-primary teaching roles.'
  },
  'B.Ed Entrance Exams': {
    exam_name: 'B.Ed Entrance Exams',
    eligibility: 'Bachelor degree with minimum marks as required by the university or state admission authority.',
    exam_level: 'state',
    conducted_by: 'State universities or state admission authorities',
    difficulty_level: 'medium',
    short_description: 'Entrance exams for Bachelor of Education programs required for many school teaching roles.'
  },
  'UPSC CSE': {
    exam_name: 'UPSC CSE',
    eligibility: 'Bachelor degree from a recognized university, with age and attempt limits based on category.',
    exam_level: 'national',
    conducted_by: 'Union Public Service Commission (UPSC)',
    difficulty_level: 'hard',
    short_description: 'Civil Services Examination for IAS, IPS, IFS, IRS, and other central services.'
  },
  'SSC CGL': {
    exam_name: 'SSC CGL',
    eligibility: 'Bachelor degree from a recognized university with age criteria depending on post.',
    exam_level: 'national',
    conducted_by: 'Staff Selection Commission (SSC)',
    difficulty_level: 'medium',
    short_description: 'Combined Graduate Level exam for Group B and Group C posts in central government departments.'
  },
  'RRB NTPC': {
    exam_name: 'RRB NTPC',
    eligibility: 'Class 12 or graduation depending on post, with age and medical standards as notified.',
    exam_level: 'national',
    conducted_by: 'Railway Recruitment Boards (RRBs)',
    difficulty_level: 'medium',
    short_description: 'Recruitment exam for non-technical popular category posts in Indian Railways.'
  },
  'RRB JE': {
    exam_name: 'RRB JE',
    eligibility: 'Diploma or engineering degree in relevant discipline with age and medical criteria as notified.',
    exam_level: 'national',
    conducted_by: 'Railway Recruitment Boards (RRBs)',
    difficulty_level: 'medium',
    short_description: 'Recruitment exam for junior engineer and technical supervisory posts in Indian Railways.'
  },
  'RRB ALP': {
    exam_name: 'RRB ALP',
    eligibility: 'Matriculation plus ITI/diploma or equivalent technical qualification as per railway notification.',
    exam_level: 'national',
    conducted_by: 'Railway Recruitment Boards (RRBs)',
    difficulty_level: 'medium',
    short_description: 'Recruitment exam for assistant loco pilot roles in Indian Railways.'
  },
  'UPSC ESE': {
    exam_name: 'UPSC ESE',
    eligibility: 'Engineering degree in relevant branch with age criteria as notified by UPSC.',
    exam_level: 'national',
    conducted_by: 'Union Public Service Commission (UPSC)',
    difficulty_level: 'hard',
    short_description: 'Engineering Services Examination for technical officer roles in government engineering services.'
  },
  NDA: {
    exam_name: 'NDA',
    eligibility: 'Class 12 passed or appearing candidates meeting age, nationality, and physical standards.',
    exam_level: 'national',
    conducted_by: 'Union Public Service Commission (UPSC)',
    difficulty_level: 'hard',
    short_description: 'Entrance exam for National Defence Academy and Naval Academy officer training.'
  },
  CDS: {
    exam_name: 'CDS',
    eligibility: 'Graduate degree with program-specific requirements for IMA, OTA, INA, and AFA.',
    exam_level: 'national',
    conducted_by: 'Union Public Service Commission (UPSC)',
    difficulty_level: 'hard',
    short_description: 'Combined Defence Services exam for officer entry after graduation.'
  },
  AFCAT: {
    exam_name: 'AFCAT',
    eligibility: 'Graduate degree with branch-specific academic, age, and physical standards.',
    exam_level: 'national',
    conducted_by: 'Indian Air Force',
    difficulty_level: 'medium',
    short_description: 'Air Force Common Admission Test for flying and ground duty officer branches.'
  },
  INET: {
    exam_name: 'INET',
    eligibility: 'Graduate or engineering qualification with branch-specific age and physical standards.',
    exam_level: 'national',
    conducted_by: 'Indian Navy',
    difficulty_level: 'medium',
    short_description: 'Indian Navy entrance route for selected officer entries when notified.'
  },
  'IIT JAM': {
    exam_name: 'IIT JAM',
    eligibility: 'Bachelor degree with required subjects and minimum marks as specified by participating institutes.',
    exam_level: 'national',
    conducted_by: 'IITs on a rotational basis',
    difficulty_level: 'hard',
    short_description: 'Entrance exam for M.Sc and other postgraduate science programs at IITs and IISc.'
  },
  'No mandatory entrance exam': {
    exam_name: 'No mandatory entrance exam',
    eligibility: 'Skills, portfolio, internships, certifications, or degree requirements vary by employer and course.',
    exam_level: 'university',
    conducted_by: 'Not applicable',
    difficulty_level: 'easy',
    short_description: 'Many roles in this path can be entered through skills, projects, internships, or direct hiring instead of one fixed entrance exam.'
  },
  NATA: {
    exam_name: 'NATA',
    eligibility: 'Class 12 with required mathematics and aggregate criteria as notified for architecture admissions.',
    exam_level: 'national',
    conducted_by: 'Council of Architecture',
    difficulty_level: 'medium',
    short_description: 'National Aptitude Test in Architecture used for admission to B.Arch programs across India.'
  },
  'JEE Main Paper 2': {
    exam_name: 'JEE Main Paper 2',
    eligibility: 'Class 12 or equivalent with Mathematics and other criteria specified by NTA.',
    exam_level: 'national',
    conducted_by: 'National Testing Agency (NTA)',
    difficulty_level: 'medium',
    short_description: 'Entrance paper used for architecture and planning admissions in participating institutions.'
  },
  CEED: {
    exam_name: 'CEED',
    eligibility: 'Completed degree, diploma, or postgraduate qualification as per IIT Bombay CEED rules.',
    exam_level: 'national',
    conducted_by: 'IIT Bombay',
    difficulty_level: 'hard',
    short_description: 'Common Entrance Examination for Design used for postgraduate design admissions.'
  },
  'NCHM JEE': {
    exam_name: 'NCHM JEE',
    eligibility: 'Class 12 or equivalent with English as a subject, subject to age and eligibility rules.',
    exam_level: 'national',
    conducted_by: 'National Testing Agency (NTA)',
    difficulty_level: 'medium',
    short_description: 'Entrance exam for hotel management and hospitality programs at IHMs and participating institutes.'
  },
  'ICAR AIEEA': {
    exam_name: 'ICAR AIEEA',
    eligibility: 'Class 12 for undergraduate agriculture programs or relevant bachelor degree for postgraduate programs.',
    exam_level: 'national',
    conducted_by: 'Indian Council of Agricultural Research or the notified admission authority',
    difficulty_level: 'medium',
    short_description: 'Entrance route for agriculture, allied sciences, dairy, and related programs.'
  },
  'ISI Admission Test': {
    exam_name: 'ISI Admission Test',
    eligibility: 'Eligibility varies by program, generally Class 12 for undergraduate and bachelor degree for postgraduate programs.',
    exam_level: 'national',
    conducted_by: 'Indian Statistical Institute',
    difficulty_level: 'hard',
    short_description: 'Highly selective entrance test for statistics, mathematics, data science, and quantitative programs.'
  }
}

const buildEntranceExams = (examNames) => examNames.map((examName) => entranceExamDetails[examName])

export const careerData = [
  {
    career_name: 'Software Engineer',
    category: 'Engineering',
    description: 'Software engineers build web, mobile, and backend systems used by businesses and consumers. This path suits students who enjoy coding, problem solving, and continuous learning.',
    required_skills: ['Programming', 'Data Structures', 'Algorithms', 'Git', 'System Design Basics'],
    average_salary_india: 'INR 4-8 LPA',
    growth_scope: 'Strong demand across startups, IT services, SaaS, fintech, and global remote roles.',
    entrance_exams: buildEntranceExams(['JEE Main', 'JEE Advanced', 'BITSAT', 'VITEEE', 'State CETs']),
    top_colleges: []
  },
  {
    career_name: 'Mechanical Engineer',
    category: 'Engineering',
    description: 'Mechanical engineers design, test, and maintain machines, manufacturing systems, vehicles, and industrial equipment. It is a broad engineering career with opportunities in core industry and product companies.',
    required_skills: ['Engineering Drawing', 'CAD', 'Thermodynamics', 'Manufacturing Processes', 'Problem Solving'],
    average_salary_india: 'INR 3-6 LPA',
    growth_scope: 'Good scope in EV, robotics, aerospace, manufacturing automation, and public sector units.',
    entrance_exams: buildEntranceExams(['JEE Main', 'JEE Advanced', 'BITSAT', 'State CETs', 'GATE']),
    top_colleges: []
  },
  {
    career_name: 'Civil Engineer',
    category: 'Engineering',
    description: 'Civil engineers plan and supervise construction of roads, bridges, buildings, water systems, and urban infrastructure. It is ideal for students interested in design, field work, and large public projects.',
    required_skills: ['Structural Analysis', 'AutoCAD', 'Surveying', 'Project Management', 'Estimation'],
    average_salary_india: 'INR 3-5 LPA',
    growth_scope: 'Stable demand through infrastructure, real estate, smart cities, and government projects.',
    entrance_exams: buildEntranceExams(['JEE Main', 'JEE Advanced', 'State CETs', 'GATE']),
    top_colleges: []
  },
  {
    career_name: 'Electronics and Communication Engineer',
    category: 'Engineering',
    description: 'ECE engineers work on circuits, telecom systems, embedded devices, sensors, and communication networks. The field connects hardware with software and is useful for IoT, 5G, and chip design careers.',
    required_skills: ['Circuit Design', 'Embedded Systems', 'Signal Processing', 'C Programming', 'VLSI Basics'],
    average_salary_india: 'INR 3.5-7 LPA',
    growth_scope: 'Growing opportunities in semiconductors, IoT, 5G networks, automotive electronics, and defense tech.',
    entrance_exams: buildEntranceExams(['JEE Main', 'JEE Advanced', 'BITSAT', 'State CETs', 'GATE']),
    top_colleges: []
  },
  {
    career_name: 'AI/ML Engineer',
    category: 'Engineering',
    description: 'AI/ML engineers build machine learning models and intelligent features for software products. This path requires strong programming, mathematics, and experimentation skills.',
    required_skills: ['Python', 'Machine Learning', 'Deep Learning', 'Statistics', 'MLOps Basics'],
    average_salary_india: 'INR 6-12 LPA',
    growth_scope: 'High growth across product companies, healthcare AI, finance, automation, and generative AI applications.',
    entrance_exams: buildEntranceExams(['JEE Main', 'JEE Advanced', 'BITSAT', 'GATE']),
    top_colleges: []
  },
  {
    career_name: 'Doctor',
    category: 'Medical',
    description: 'Doctors diagnose illnesses, treat patients, and guide long-term health decisions. It is a demanding but highly respected career that requires medical college, internships, and lifelong learning.',
    required_skills: ['Biology', 'Clinical Reasoning', 'Patient Communication', 'Ethics', 'Decision Making'],
    average_salary_india: 'INR 6-12 LPA',
    growth_scope: 'Excellent long-term scope through specialization, hospitals, private practice, telemedicine, and public health.',
    entrance_exams: buildEntranceExams(['NEET UG', 'NEET PG', 'INI CET']),
    top_colleges: []
  },
  {
    career_name: 'Dentist',
    category: 'Medical',
    description: 'Dentists diagnose and treat oral health problems including teeth, gums, and jaw conditions. The career combines medical knowledge, precision work, and patient care.',
    required_skills: ['Dental Anatomy', 'Manual Dexterity', 'Patient Care', 'Diagnosis', 'Clinic Management'],
    average_salary_india: 'INR 3-6 LPA',
    growth_scope: 'Good scope in private clinics, cosmetic dentistry, orthodontics, implants, and hospital dental departments.',
    entrance_exams: buildEntranceExams(['NEET UG', 'NEET MDS']),
    top_colleges: []
  },
  {
    career_name: 'Nurse',
    category: 'Medical',
    description: 'Nurses provide patient care, monitor recovery, administer medicines, and support doctors in treatment. It is a practical healthcare career with strong demand in India and abroad.',
    required_skills: ['Patient Care', 'Clinical Procedures', 'Communication', 'Emergency Response', 'Documentation'],
    average_salary_india: 'INR 2.5-5 LPA',
    growth_scope: 'High demand in hospitals, home healthcare, critical care, global nursing roles, and healthcare management.',
    entrance_exams: buildEntranceExams(['AIIMS BSc Nursing', 'JIPMER Nursing', 'State Nursing Entrance Exams']),
    top_colleges: []
  },
  {
    career_name: 'Pharmacist',
    category: 'Medical',
    description: 'Pharmacists understand medicines, dosages, drug interactions, and safe dispensing practices. They work in retail pharmacies, hospitals, pharma companies, and clinical research.',
    required_skills: ['Pharmacology', 'Chemistry', 'Drug Safety', 'Inventory Management', 'Patient Counselling'],
    average_salary_india: 'INR 2.5-5 LPA',
    growth_scope: 'Growing scope in pharma manufacturing, clinical research, regulatory affairs, and healthcare retail chains.',
    entrance_exams: buildEntranceExams(['GPAT', 'CUET', 'State Pharmacy Entrance Exams']),
    top_colleges: []
  },
  {
    career_name: 'Physiotherapist',
    category: 'Medical',
    description: 'Physiotherapists help patients recover movement, manage pain, and rebuild strength after injury or illness. The career is suited for students interested in anatomy, fitness, and rehabilitation.',
    required_skills: ['Anatomy', 'Exercise Therapy', 'Manual Therapy', 'Assessment', 'Patient Motivation'],
    average_salary_india: 'INR 2.5-5 LPA',
    growth_scope: 'Good growth in sports rehab, hospitals, private clinics, elderly care, and wellness centers.',
    entrance_exams: buildEntranceExams(['CUET', 'NEET UG', 'State Paramedical Entrance Exams']),
    top_colleges: []
  },
  {
    career_name: 'Chartered Accountant',
    category: 'Commerce',
    description: 'Chartered accountants manage auditing, taxation, accounting, compliance, and financial advisory work. It is one of India’s most respected commerce careers with strong earning potential.',
    required_skills: ['Accounting', 'Taxation', 'Auditing', 'Financial Reporting', 'Analytical Thinking'],
    average_salary_india: 'INR 6-10 LPA',
    growth_scope: 'Excellent scope in audit firms, corporates, consulting, finance leadership, and independent practice.',
    entrance_exams: buildEntranceExams(['CA Foundation', 'CA Intermediate', 'CA Final']),
    top_colleges: []
  },
  {
    career_name: 'Company Secretary',
    category: 'Commerce',
    description: 'Company secretaries handle corporate governance, legal compliance, board processes, and company law matters. The role is important in listed companies, startups, and legal advisory firms.',
    required_skills: ['Company Law', 'Compliance', 'Corporate Governance', 'Documentation', 'Communication'],
    average_salary_india: 'INR 4-7 LPA',
    growth_scope: 'Strong scope in corporate legal teams, listed companies, consulting firms, and governance advisory.',
    entrance_exams: buildEntranceExams(['CSEET', 'CS Executive', 'CS Professional']),
    top_colleges: []
  },
  {
    career_name: 'Investment Banker',
    category: 'Commerce',
    description: 'Investment bankers help companies raise capital, handle mergers, value businesses, and structure financial deals. It is a competitive career requiring strong finance, Excel, and communication skills.',
    required_skills: ['Financial Modelling', 'Valuation', 'Excel', 'Accounting', 'Presentation Skills'],
    average_salary_india: 'INR 8-15 LPA',
    growth_scope: 'High earning scope in banks, boutique advisory firms, private equity, venture capital, and corporate finance.',
    entrance_exams: buildEntranceExams(['CAT', 'XAT', 'GMAT', 'CFA']),
    top_colleges: []
  },
  {
    career_name: 'Banking Professional',
    category: 'Commerce',
    description: 'Banking professionals work in retail banking, loans, operations, relationship management, and financial services. It offers structured career growth and stable employment options.',
    required_skills: ['Numeracy', 'Customer Service', 'Banking Products', 'Sales', 'Risk Awareness'],
    average_salary_india: 'INR 3-6 LPA',
    growth_scope: 'Stable scope across public banks, private banks, NBFCs, fintech firms, and wealth management.',
    entrance_exams: buildEntranceExams(['IBPS PO', 'IBPS Clerk', 'SBI PO', 'SBI Clerk', 'RBI Assistant']),
    top_colleges: []
  },
  {
    career_name: 'Financial Analyst',
    category: 'Commerce',
    description: 'Financial analysts study business performance, budgets, investments, and market trends to support decision making. This path is suitable for students who like numbers, research, and business strategy.',
    required_skills: ['Excel', 'Financial Analysis', 'Accounting', 'Data Interpretation', 'Business Communication'],
    average_salary_india: 'INR 4-8 LPA',
    growth_scope: 'Good growth in corporates, consulting, startups, equity research, fintech, and FP&A teams.',
    entrance_exams: buildEntranceExams(['CAT', 'CUET', 'CFA', 'FRM']),
    top_colleges: []
  },
  {
    career_name: 'Lawyer',
    category: 'Arts',
    description: 'Lawyers advise clients, draft legal documents, argue cases, and work on civil, criminal, corporate, or constitutional matters. The career rewards research, reasoning, and persuasive communication.',
    required_skills: ['Legal Research', 'Writing', 'Argumentation', 'Critical Thinking', 'Client Communication'],
    average_salary_india: 'INR 3-8 LPA',
    growth_scope: 'Strong scope in litigation, corporate law, judiciary preparation, policy, compliance, and legal tech.',
    entrance_exams: buildEntranceExams(['CLAT', 'AILET', 'LSAT India', 'CUET Law']),
    top_colleges: []
  },
  {
    career_name: 'Journalist',
    category: 'Arts',
    description: 'Journalists research, verify, write, and present news across digital, print, TV, and audio platforms. The field suits curious students who enjoy communication, public affairs, and storytelling.',
    required_skills: ['Reporting', 'Writing', 'Research', 'Interviewing', 'Media Ethics'],
    average_salary_india: 'INR 2.5-5 LPA',
    growth_scope: 'Growing opportunities in digital media, video journalism, newsletters, podcasts, and independent reporting.',
    entrance_exams: buildEntranceExams(['CUET', 'IIMC Entrance Exam', 'University Journalism Entrance Exams']),
    top_colleges: []
  },
  {
    career_name: 'Psychologist',
    category: 'Arts',
    description: 'Psychologists study human behavior and support people with emotional, educational, workplace, or clinical challenges. It requires higher education and supervised training for specialized practice.',
    required_skills: ['Psychological Assessment', 'Counselling Basics', 'Research Methods', 'Empathy', 'Ethics'],
    average_salary_india: 'INR 3-6 LPA',
    growth_scope: 'Rising demand in mental health, schools, hospitals, HR, sports psychology, and online counselling.',
    entrance_exams: buildEntranceExams(['CUET', 'University Entrance Exams', 'TISSNET']),
    top_colleges: []
  },
  {
    career_name: 'Graphic Designer',
    category: 'Arts',
    description: 'Graphic designers create visual assets for brands, social media, advertisements, packaging, and digital products. It is a portfolio-led career where skills and work samples matter strongly.',
    required_skills: ['Visual Design', 'Typography', 'Color Theory', 'Canva', 'Adobe Photoshop'],
    average_salary_india: 'INR 2.5-5 LPA',
    growth_scope: 'Good freelance and job scope in agencies, startups, creator brands, marketing teams, and UI design.',
    entrance_exams: buildEntranceExams(['NID DAT', 'UCEED', 'NIFT Entrance Exam', 'CUET']),
    top_colleges: []
  },
  {
    career_name: 'Teacher',
    category: 'Arts',
    description: 'Teachers help students learn academic subjects, life skills, and exam preparation through structured instruction. The profession offers social impact, stability, and options in schools, coaching, and online education.',
    required_skills: ['Subject Knowledge', 'Communication', 'Lesson Planning', 'Classroom Management', 'Assessment'],
    average_salary_india: 'INR 2.5-5 LPA',
    growth_scope: 'Stable demand in schools, coaching institutes, edtech, online tutoring, and competitive exam mentoring.',
    entrance_exams: buildEntranceExams(['CTET', 'TET', 'B.Ed Entrance Exams', 'CUET']),
    top_colleges: []
  },
  {
    career_name: 'IAS Officer',
    category: 'Government Jobs',
    description: 'IAS officers manage administration, public policy, development programs, and district-level governance. It is one of India’s most prestigious public service careers.',
    required_skills: ['General Studies', 'Decision Making', 'Leadership', 'Writing', 'Public Administration'],
    average_salary_india: 'INR 6.7-8 LPA',
    growth_scope: 'Excellent influence and growth through district administration, state departments, central ministries, and policy roles.',
    entrance_exams: buildEntranceExams(['UPSC CSE']),
    top_colleges: []
  },
  {
    career_name: 'IPS Officer',
    category: 'Government Jobs',
    description: 'IPS officers lead police forces, maintain law and order, and manage internal security responsibilities. The career requires physical fitness, leadership, and strong ethical judgement.',
    required_skills: ['Leadership', 'Law Awareness', 'Crisis Management', 'Physical Fitness', 'Investigation Basics'],
    average_salary_india: 'INR 6.7-8 LPA',
    growth_scope: 'Strong scope in policing, intelligence, central armed police organizations, and national security roles.',
    entrance_exams: buildEntranceExams(['UPSC CSE']),
    top_colleges: []
  },
  {
    career_name: 'SSC CGL Officer',
    category: 'Government Jobs',
    description: 'SSC CGL recruits graduates into central government departments for inspector, assistant, auditor, and officer roles. It is popular for stable jobs with structured promotions.',
    required_skills: ['Quantitative Aptitude', 'Reasoning', 'English', 'General Awareness', 'Exam Strategy'],
    average_salary_india: 'INR 4-7 LPA',
    growth_scope: 'Stable growth in central ministries, tax departments, audit offices, and administrative roles.',
    entrance_exams: buildEntranceExams(['SSC CGL']),
    top_colleges: []
  },
  {
    career_name: 'Railway Officer',
    category: 'Government Jobs',
    description: 'Railway officers and staff manage operations, engineering, accounts, safety, and customer services in Indian Railways. The sector offers many roles for graduates, engineers, and diploma holders.',
    required_skills: ['Technical Knowledge', 'Operations Management', 'Reasoning', 'Numeracy', 'Discipline'],
    average_salary_india: 'INR 3.5-7 LPA',
    growth_scope: 'Good scope through departmental promotions, technical cadres, operations, and railway management roles.',
    entrance_exams: buildEntranceExams(['RRB NTPC', 'RRB JE', 'RRB ALP', 'UPSC ESE']),
    top_colleges: []
  },
  {
    career_name: 'Defence Officer',
    category: 'Government Jobs',
    description: 'Defence officers serve in the Army, Navy, or Air Force and lead teams in national security roles. The career demands discipline, physical fitness, leadership, and commitment.',
    required_skills: ['Leadership', 'Physical Fitness', 'Discipline', 'General Awareness', 'Teamwork'],
    average_salary_india: 'INR 6-10 LPA',
    growth_scope: 'Excellent growth through command roles, specialist branches, training institutions, and post-service leadership careers.',
    entrance_exams: buildEntranceExams(['NDA', 'CDS', 'AFCAT', 'INET']),
    top_colleges: []
  },
  {
    career_name: 'Data Scientist',
    category: 'Emerging Careers',
    description: 'Data scientists use statistics, programming, and machine learning to extract insights and build predictive models. The role is valuable in tech, finance, healthcare, ecommerce, and consulting.',
    required_skills: ['Python', 'Statistics', 'Machine Learning', 'SQL', 'Data Visualization'],
    average_salary_india: 'INR 6-12 LPA',
    growth_scope: 'Very strong growth as companies adopt AI, analytics, personalization, and automation.',
    entrance_exams: buildEntranceExams(['JEE Main', 'CUET', 'GATE', 'IIT JAM']),
    top_colleges: []
  },
  {
    career_name: 'Digital Marketer',
    category: 'Emerging Careers',
    description: 'Digital marketers grow brands using SEO, social media, paid ads, email, analytics, and content strategy. It is a practical career with job, freelance, and agency opportunities.',
    required_skills: ['SEO', 'Social Media Marketing', 'Google Ads', 'Analytics', 'Copywriting'],
    average_salary_india: 'INR 3-6 LPA',
    growth_scope: 'High demand from startups, agencies, local businesses, ecommerce brands, and creators.',
    entrance_exams: buildEntranceExams(['No mandatory entrance exam', 'CUET']),
    top_colleges: []
  },
  {
    career_name: 'Cybersecurity Analyst',
    category: 'Emerging Careers',
    description: 'Cybersecurity analysts protect systems, networks, and data from attacks and security risks. This career suits students who enjoy technology, investigation, and defensive problem solving.',
    required_skills: ['Networking', 'Linux Basics', 'Security Tools', 'Risk Assessment', 'Incident Response'],
    average_salary_india: 'INR 4-8 LPA',
    growth_scope: 'Fast growth due to rising cyber threats, fintech adoption, cloud systems, and compliance requirements.',
    entrance_exams: buildEntranceExams(['JEE Main', 'CUET', 'GATE', 'No mandatory entrance exam']),
    top_colleges: []
  },
  {
    career_name: 'UI/UX Designer',
    category: 'Emerging Careers',
    description: 'UI/UX designers create user-friendly digital products through research, wireframes, prototypes, and interface design. The career blends creativity, psychology, business, and technology.',
    required_skills: ['User Research', 'Wireframing', 'Figma', 'Visual Design', 'Usability Testing'],
    average_salary_india: 'INR 4-8 LPA',
    growth_scope: 'Strong scope in product companies, startups, design agencies, SaaS, fintech, and freelance work.',
    entrance_exams: buildEntranceExams(['UCEED', 'NID DAT', 'NIFT Entrance Exam', 'No mandatory entrance exam']),
    top_colleges: []
  },
  {
    career_name: 'Cloud Engineer',
    category: 'Emerging Careers',
    description: 'Cloud engineers deploy, maintain, and secure applications on platforms such as AWS, Azure, and Google Cloud. The role supports modern software teams and large-scale infrastructure.',
    required_skills: ['Linux', 'Networking', 'Cloud Platforms', 'Docker Basics', 'Automation'],
    average_salary_india: 'INR 5-10 LPA',
    growth_scope: 'High growth as companies migrate infrastructure, data platforms, and applications to the cloud.',
    entrance_exams: buildEntranceExams(['JEE Main', 'CUET', 'GATE', 'No mandatory entrance exam']),
    top_colleges: []
  },
  {
    career_name: 'Aerospace Engineer',
    category: 'Engineering',
    description: 'Aerospace engineers design aircraft, spacecraft, satellites, and propulsion systems. India’s space, aviation, and defense sectors make this a strong path for students who enjoy physics and advanced engineering.',
    required_skills: ['Aerodynamics', 'Fluid Mechanics', 'CAD', 'Propulsion Basics', 'Simulation'],
    average_salary_india: 'INR 5-9 LPA',
    growth_scope: 'Growing scope in ISRO-linked suppliers, aviation, drones, defense manufacturing, and private space startups.',
    entrance_exams: buildEntranceExams(['JEE Main', 'JEE Advanced', 'GATE']),
    top_colleges: []
  },
  {
    career_name: 'Chemical Engineer',
    category: 'Engineering',
    description: 'Chemical engineers work on processes for chemicals, fuels, food, pharmaceuticals, and materials. The career combines chemistry, physics, mathematics, and industrial production.',
    required_skills: ['Process Design', 'Chemistry', 'Thermodynamics', 'Safety', 'Plant Operations'],
    average_salary_india: 'INR 3.5-7 LPA',
    growth_scope: 'Stable scope in pharma, energy, specialty chemicals, FMCG, materials, and environmental engineering.',
    entrance_exams: buildEntranceExams(['JEE Main', 'JEE Advanced', 'State CETs', 'GATE']),
    top_colleges: []
  },
  {
    career_name: 'Architect',
    category: 'Engineering',
    description: 'Architects design buildings, campuses, interiors, and urban spaces while balancing function, safety, and aesthetics. It suits students interested in design, mathematics, drawing, and built environments.',
    required_skills: ['Design Thinking', 'Sketching', 'AutoCAD', 'Building Materials', 'Spatial Planning'],
    average_salary_india: 'INR 3-6 LPA',
    growth_scope: 'Good scope in architecture firms, real estate, urban planning, sustainable design, and independent practice.',
    entrance_exams: buildEntranceExams(['NATA', 'JEE Main Paper 2', 'UCEED']),
    top_colleges: []
  },
  {
    career_name: 'Robotics Engineer',
    category: 'Engineering',
    description: 'Robotics engineers build automated machines, industrial robots, drones, and intelligent hardware systems. The career blends mechanical design, electronics, control systems, and programming.',
    required_skills: ['Mechatronics', 'Python/C++', 'Embedded Systems', 'Control Systems', 'CAD'],
    average_salary_india: 'INR 4-8 LPA',
    growth_scope: 'High growth in manufacturing automation, drones, warehouse robotics, medical devices, and research labs.',
    entrance_exams: buildEntranceExams(['JEE Main', 'JEE Advanced', 'GATE']),
    top_colleges: []
  },
  {
    career_name: 'Renewable Energy Engineer',
    category: 'Engineering',
    description: 'Renewable energy engineers work on solar, wind, battery, grid, and clean-energy systems. The role supports India’s transition toward sustainable power and energy efficiency.',
    required_skills: ['Electrical Systems', 'Energy Modelling', 'Solar Design', 'Project Planning', 'Data Analysis'],
    average_salary_india: 'INR 4-7 LPA',
    growth_scope: 'Strong growth in solar companies, EV infrastructure, green hydrogen, consulting, and climate-tech startups.',
    entrance_exams: buildEntranceExams(['JEE Main', 'JEE Advanced', 'GATE']),
    top_colleges: []
  },
  {
    career_name: 'Veterinarian',
    category: 'Medical',
    description: 'Veterinarians diagnose and treat animals, support livestock health, and work in public health, dairy, and animal welfare. This path is important in rural India, dairy industries, and pet healthcare.',
    required_skills: ['Animal Anatomy', 'Diagnosis', 'Surgery Basics', 'Pharmacology', 'Empathy'],
    average_salary_india: 'INR 4-7 LPA',
    growth_scope: 'Good scope in government veterinary services, dairy, animal hospitals, research, and private pet clinics.',
    entrance_exams: buildEntranceExams(['NEET UG', 'ICAR AIEEA', 'State Paramedical Entrance Exams']),
    top_colleges: []
  },
  {
    career_name: 'Medical Lab Technologist',
    category: 'Medical',
    description: 'Medical lab technologists perform diagnostic tests on blood, tissue, and other samples. They are essential to hospitals, pathology labs, diagnostics chains, and medical research.',
    required_skills: ['Lab Procedures', 'Microbiology', 'Biochemistry', 'Quality Control', 'Reporting'],
    average_salary_india: 'INR 2.5-5 LPA',
    growth_scope: 'Growing demand through diagnostic labs, hospitals, preventive healthcare, and clinical research.',
    entrance_exams: buildEntranceExams(['CUET', 'State Paramedical Entrance Exams', 'NEET UG']),
    top_colleges: []
  },
  {
    career_name: 'Biotechnologist',
    category: 'Medical',
    description: 'Biotechnologists use biology, genetics, and lab methods to develop products for healthcare, agriculture, food, and industry. The path suits students who enjoy biology with research and technology.',
    required_skills: ['Molecular Biology', 'Genetics', 'Lab Techniques', 'Data Analysis', 'Research Methods'],
    average_salary_india: 'INR 3-6 LPA',
    growth_scope: 'Good scope in pharma, vaccines, diagnostics, agriculture biotech, research labs, and higher studies.',
    entrance_exams: buildEntranceExams(['CUET', 'NEET UG', 'IIT JAM', 'GATE']),
    top_colleges: []
  },
  {
    career_name: 'Actuary',
    category: 'Commerce',
    description: 'Actuaries use mathematics, statistics, and finance to measure risk for insurance, pensions, and investment products. It is a specialized high-skill commerce career with strong analytical depth.',
    required_skills: ['Statistics', 'Probability', 'Finance', 'Excel', 'Risk Modelling'],
    average_salary_india: 'INR 5-9 LPA',
    growth_scope: 'Strong scope in insurance, consulting, reinsurance, analytics, and risk management teams.',
    entrance_exams: buildEntranceExams(['ISI Admission Test', 'CUET', 'No mandatory entrance exam']),
    top_colleges: []
  },
  {
    career_name: 'Economist',
    category: 'Commerce',
    description: 'Economists study markets, policy, inflation, trade, employment, and development trends. This career is useful in research institutions, consulting, public policy, finance, and analytics.',
    required_skills: ['Economics', 'Statistics', 'Research', 'Data Interpretation', 'Policy Analysis'],
    average_salary_india: 'INR 4-8 LPA',
    growth_scope: 'Good scope in think tanks, government bodies, consulting firms, banks, analytics, and higher research.',
    entrance_exams: buildEntranceExams(['CUET', 'ISI Admission Test', 'IIT JAM']),
    top_colleges: []
  },
  {
    career_name: 'Management Consultant',
    category: 'Commerce',
    description: 'Management consultants solve business problems related to growth, operations, cost, and strategy. The role is competitive and suits students with strong communication and analytical skills.',
    required_skills: ['Problem Solving', 'Business Analysis', 'Excel', 'Presentation Skills', 'Market Research'],
    average_salary_india: 'INR 8-18 LPA',
    growth_scope: 'High growth in consulting firms, corporate strategy, startups, private equity support, and leadership roles.',
    entrance_exams: buildEntranceExams(['CAT', 'XAT', 'GMAT']),
    top_colleges: []
  },
  {
    career_name: 'Fashion Designer',
    category: 'Arts',
    description: 'Fashion designers create apparel, textiles, accessories, and visual collections for brands or independent labels. It is a creative career driven by portfolio quality, trend awareness, and production knowledge.',
    required_skills: ['Sketching', 'Textile Knowledge', 'Pattern Making', 'Trend Research', 'Branding'],
    average_salary_india: 'INR 3-6 LPA',
    growth_scope: 'Good scope in fashion houses, retail brands, costume design, styling, entrepreneurship, and exports.',
    entrance_exams: buildEntranceExams(['NIFT Entrance Exam', 'NID DAT', 'CUET']),
    top_colleges: []
  },
  {
    career_name: 'Animation and VFX Artist',
    category: 'Arts',
    description: 'Animation and VFX artists create motion graphics, 3D assets, effects, and visual storytelling for films, games, ads, and OTT content. The field rewards portfolio strength and software skills.',
    required_skills: ['Storyboarding', '3D Modelling', 'After Effects', 'Maya/Blender', 'Visual Storytelling'],
    average_salary_india: 'INR 3-6 LPA',
    growth_scope: 'Growing scope in OTT, gaming, advertising, edtech, film studios, and global remote production work.',
    entrance_exams: buildEntranceExams(['NID DAT', 'UCEED', 'No mandatory entrance exam']),
    top_colleges: []
  },
  {
    career_name: 'Social Worker',
    category: 'Arts',
    description: 'Social workers support communities through welfare programs, counselling, development projects, and rights-based interventions. The career fits students interested in public service and social impact.',
    required_skills: ['Community Work', 'Counselling Basics', 'Documentation', 'Empathy', 'Program Coordination'],
    average_salary_india: 'INR 2.5-5 LPA',
    growth_scope: 'Stable scope in NGOs, CSR teams, public health projects, international development, and government schemes.',
    entrance_exams: buildEntranceExams(['CUET', 'TISSNET', 'University Entrance Exams']),
    top_colleges: []
  },
  {
    career_name: 'Public Policy Analyst',
    category: 'Government Jobs',
    description: 'Public policy analysts research social, economic, legal, and governance issues to support better policy decisions. They work with think tanks, governments, consulting firms, and development organizations.',
    required_skills: ['Policy Research', 'Data Analysis', 'Writing', 'Economics Basics', 'Stakeholder Mapping'],
    average_salary_india: 'INR 4-8 LPA',
    growth_scope: 'Rising scope in think tanks, government advisory, CSR, climate policy, social impact, and consulting.',
    entrance_exams: buildEntranceExams(['CUET', 'CLAT', 'TISSNET', 'UPSC CSE']),
    top_colleges: []
  },
  {
    career_name: 'Agricultural Scientist',
    category: 'Government Jobs',
    description: 'Agricultural scientists improve crops, soil, irrigation, seeds, and farm productivity through research and field programs. This path is important for India’s rural economy and food security.',
    required_skills: ['Agronomy', 'Soil Science', 'Research Methods', 'Data Collection', 'Field Work'],
    average_salary_india: 'INR 4-7 LPA',
    growth_scope: 'Good scope in ICAR institutes, agri-tech startups, seed companies, government departments, and research roles.',
    entrance_exams: buildEntranceExams(['ICAR AIEEA', 'CUET', 'GATE']),
    top_colleges: []
  },
  {
    career_name: 'Hotel Manager',
    category: 'Emerging Careers',
    description: 'Hotel managers oversee hospitality operations including guest services, food and beverage, housekeeping, events, and revenue. The role suits students with service mindset and operational discipline.',
    required_skills: ['Hospitality Operations', 'Communication', 'Customer Service', 'Team Management', 'Revenue Awareness'],
    average_salary_india: 'INR 3-6 LPA',
    growth_scope: 'Good scope in hotels, resorts, airlines, cruise lines, event firms, and hospitality startups.',
    entrance_exams: buildEntranceExams(['NCHM JEE', 'CUET', 'No mandatory entrance exam']),
    top_colleges: []
  },
  {
    career_name: 'Product Manager',
    category: 'Emerging Careers',
    description: 'Product managers decide what digital products should be built, why they matter, and how teams should prioritize them. The role blends business, user research, analytics, and technology.',
    required_skills: ['Product Thinking', 'User Research', 'Analytics', 'Communication', 'Roadmapping'],
    average_salary_india: 'INR 8-18 LPA',
    growth_scope: 'High growth in startups, SaaS, fintech, consumer apps, ecommerce, and AI product teams.',
    entrance_exams: buildEntranceExams(['CAT', 'GMAT', 'No mandatory entrance exam']),
    top_colleges: []
  },
  {
    career_name: 'Food Technologist',
    category: 'Emerging Careers',
    description: 'Food technologists work on food processing, quality, safety, packaging, and product development. The career supports FMCG, dairy, nutrition, exports, and food startups.',
    required_skills: ['Food Chemistry', 'Quality Control', 'Microbiology', 'Processing Methods', 'Regulatory Basics'],
    average_salary_india: 'INR 3-6 LPA',
    growth_scope: 'Growing scope in FMCG, dairy, packaged foods, nutrition brands, food safety labs, and entrepreneurship.',
    entrance_exams: buildEntranceExams(['ICAR AIEEA', 'CUET', 'State CETs']),
    top_colleges: []
  },

  // ── Engineering catalogue additions ──────────────────────────────────────

  {
    career_name: 'Computer Science Engineer',
    category: 'Engineering',
    description: 'Computer science engineers study algorithms, operating systems, computer networks, databases, and software architecture. It is the broadest and most in-demand engineering branch, leading to roles in product companies, startups, and research labs.',
    required_skills: ['Data Structures & Algorithms', 'Programming (C++/Java/Python)', 'Operating Systems', 'DBMS', 'Computer Networks'],
    average_salary_india: 'INR 6-30 LPA',
    growth_scope: 'Extremely high demand across product companies, SaaS, fintech, AI, cloud, gaming, and global remote roles.',
    entrance_exams: buildEntranceExams(['JEE Main', 'JEE Advanced', 'BITSAT', 'VITEEE', 'State CETs']),
    top_colleges: []
  },
  {
    career_name: 'Information Technology Engineer',
    category: 'Engineering',
    description: 'IT engineers work on networking, cloud infrastructure, enterprise software, and system administration. This branch is closely linked to CSE but leans more toward applied systems and business technology.',
    required_skills: ['Networking', 'Cloud Basics', 'Database Administration', 'Scripting', 'Cybersecurity Basics'],
    average_salary_india: 'INR 5-25 LPA',
    growth_scope: 'Strong demand in IT services, cloud, telecom, enterprise software, and managed services companies.',
    entrance_exams: buildEntranceExams(['JEE Main', 'BITSAT', 'VITEEE', 'State CETs']),
    top_colleges: []
  },
  {
    career_name: 'Electrical Engineer',
    category: 'Engineering',
    description: 'Electrical engineers design and maintain power systems, motors, transformers, control equipment, and electrical installations. The branch is fundamental to energy, manufacturing, railways, and smart grids.',
    required_skills: ['Circuit Theory', 'Power Systems', 'Electrical Machines', 'Control Systems', 'PLC Programming'],
    average_salary_india: 'INR 5-14 LPA',
    growth_scope: 'Stable demand in power utilities, EV industry, railways, defence, and heavy manufacturing PSUs.',
    entrance_exams: buildEntranceExams(['JEE Main', 'JEE Advanced', 'GATE', 'State CETs', 'UPSC ESE']),
    top_colleges: []
  },
  {
    career_name: 'Artificial Intelligence & ML Engineer',
    category: 'Engineering',
    description: 'AI & ML engineers build intelligent systems — recommendation engines, image recognition, NLP models, and autonomous agents. This is the fastest-growing specialisation in software engineering today.',
    required_skills: ['Python', 'Machine Learning', 'Deep Learning', 'Linear Algebra', 'PyTorch / TensorFlow'],
    average_salary_india: 'INR 8-35 LPA',
    growth_scope: 'Exceptional growth across product companies, fintech, healthcare AI, autonomous systems, and GenAI startups.',
    entrance_exams: buildEntranceExams(['JEE Main', 'JEE Advanced', 'BITSAT', 'GATE']),
    top_colleges: []
  },
  {
    career_name: 'Data Science Engineer',
    category: 'Engineering',
    description: 'Data science engineers build data pipelines, machine learning models, and analytics platforms. They bridge raw data collection with business insight generation at scale.',
    required_skills: ['Python / R', 'SQL', 'Statistics', 'Machine Learning', 'Data Visualization'],
    average_salary_india: 'INR 7-28 LPA',
    growth_scope: 'High demand in e-commerce, banking, healthcare, logistics, media, and every data-driven industry.',
    entrance_exams: buildEntranceExams(['JEE Main', 'GATE', 'State CETs']),
    top_colleges: []
  },
  {
    career_name: 'Cybersecurity Engineer',
    category: 'Engineering',
    description: 'Cybersecurity engineers design and implement security systems to protect networks, applications, and data from attacks. They work on firewalls, intrusion detection, vulnerability testing, and incident response.',
    required_skills: ['Networking', 'Linux', 'Ethical Hacking', 'Cryptography', 'SIEM Tools'],
    average_salary_india: 'INR 6-25 LPA',
    growth_scope: 'Very high growth driven by rising cyber attacks, BFSI compliance, government security mandates, and cloud adoption.',
    entrance_exams: buildEntranceExams(['JEE Main', 'GATE', 'State CETs']),
    top_colleges: []
  },
  {
    career_name: 'Cloud Computing Engineer',
    category: 'Engineering',
    description: 'Cloud computing engineers design, deploy, and manage cloud infrastructure on platforms like AWS, Azure, and GCP. The role includes DevOps, CI/CD pipelines, and scalable architecture for software products.',
    required_skills: ['Linux', 'AWS / Azure / GCP', 'Docker & Kubernetes', 'Terraform', 'CI/CD'],
    average_salary_india: 'INR 6-28 LPA',
    growth_scope: 'Exceptional growth as every company — from startups to enterprises — migrates to the cloud.',
    entrance_exams: buildEntranceExams(['JEE Main', 'GATE', 'State CETs']),
    top_colleges: []
  },
  {
    career_name: 'Internet of Things (IoT) Engineer',
    category: 'Engineering',
    description: 'IoT engineers connect physical devices — sensors, machines, appliances — to the internet and cloud platforms. They build smart home systems, industrial IoT, healthcare monitors, and smart city infrastructure.',
    required_skills: ['Embedded C', 'Raspberry Pi / Arduino', 'MQTT Protocol', 'Cloud Integration', 'Circuit Design'],
    average_salary_india: 'INR 5-20 LPA',
    growth_scope: 'Growing rapidly in smart manufacturing, healthcare, agriculture, logistics, smart cities, and consumer electronics.',
    entrance_exams: buildEntranceExams(['JEE Main', 'BITSAT', 'GATE', 'State CETs']),
    top_colleges: []
  },
  {
    career_name: 'Robotics & Automation Engineer',
    category: 'Engineering',
    description: 'Robotics and automation engineers design intelligent machines for manufacturing, surgery, warehousing, and exploration. The field merges mechanical design, electronics, control systems, and AI.',
    required_skills: ['Mechatronics', 'ROS (Robot OS)', 'Python / C++', 'Control Systems', 'Computer Vision'],
    average_salary_india: 'INR 6-22 LPA',
    growth_scope: 'Fast growing in EV manufacturing, warehouse automation, defence drones, surgical robots, and agri-tech.',
    entrance_exams: buildEntranceExams(['JEE Main', 'JEE Advanced', 'GATE']),
    top_colleges: []
  },
  {
    career_name: 'Biotechnology Engineer',
    category: 'Engineering',
    description: 'Biotechnology engineers combine biology, genetics, and engineering to develop vaccines, medicines, biofuels, and genetically modified crops. They work in pharma, agri-biotech, diagnostics, and research labs.',
    required_skills: ['Molecular Biology', 'Genetic Engineering', 'Bioprocess Engineering', 'Lab Techniques', 'Bioinformatics'],
    average_salary_india: 'INR 4-18 LPA',
    growth_scope: 'Growing scope in pharma, vaccines, crop biotech, diagnostics, biofuels, and higher studies abroad.',
    entrance_exams: buildEntranceExams(['JEE Main', 'ICAR AIEEA', 'GATE', 'CUET']),
    top_colleges: []
  },
  {
    career_name: 'Biomedical Engineer',
    category: 'Engineering',
    description: 'Biomedical engineers develop medical devices, imaging systems, prosthetics, and hospital equipment. They work at the intersection of medicine and engineering, improving patient care through technology.',
    required_skills: ['Anatomy Basics', 'Signal Processing', 'Medical Imaging', 'Electronics', 'Regulatory Standards'],
    average_salary_india: 'INR 4-15 LPA',
    growth_scope: 'Growing scope in medical device companies, hospital equipment, wearables, diagnostics, and research institutions.',
    entrance_exams: buildEntranceExams(['JEE Main', 'GATE', 'CUET', 'State CETs']),
    top_colleges: []
  },
  {
    career_name: 'Metallurgical & Materials Engineer',
    category: 'Engineering',
    description: 'Metallurgical and materials engineers study and develop metals, alloys, ceramics, polymers, and composites for use in aerospace, automotive, defence, and construction industries.',
    required_skills: ['Material Science', 'Thermodynamics', 'Corrosion Engineering', 'Quality Testing', 'Process Metallurgy'],
    average_salary_india: 'INR 5-18 LPA',
    growth_scope: 'Strong demand in steel plants, ISRO, DRDO, aerospace, automotive, and materials research labs.',
    entrance_exams: buildEntranceExams(['JEE Main', 'JEE Advanced', 'GATE', 'UPSC ESE']),
    top_colleges: []
  },
  {
    career_name: 'Mining Engineer',
    category: 'Engineering',
    description: 'Mining engineers design safe and efficient methods for extracting coal, iron ore, gold, and other minerals from the earth. They work in underground and open-cast mines, ensuring safety, compliance, and productivity.',
    required_skills: ['Geology Basics', 'Blasting Techniques', 'Mine Planning', 'Safety Regulations', 'Surveying'],
    average_salary_india: 'INR 6-20 LPA',
    growth_scope: 'Steady demand in Coal India, NMDC, SCCL, private mining companies, and mineral exploration firms.',
    entrance_exams: buildEntranceExams(['JEE Main', 'JEE Advanced', 'GATE', 'UPSC ESE']),
    top_colleges: []
  },
  {
    career_name: 'Petroleum Engineer',
    category: 'Engineering',
    description: 'Petroleum engineers work on exploration, drilling, and extraction of oil and natural gas. They work with ONGC, BPCL, Reliance, and global energy companies on offshore and onshore projects.',
    required_skills: ['Reservoir Engineering', 'Drilling Operations', 'Fluid Mechanics', 'Geology', 'Simulation Software'],
    average_salary_india: 'INR 8-25 LPA',
    growth_scope: 'High salaries in oil & gas sector with scope in ONGC, IOCL, private refineries, and international projects.',
    entrance_exams: buildEntranceExams(['JEE Main', 'JEE Advanced', 'GATE', 'State CETs']),
    top_colleges: []
  },
  {
    career_name: 'Environmental Engineer',
    category: 'Engineering',
    description: 'Environmental engineers develop solutions for pollution control, water treatment, waste management, and climate resilience. They work with government agencies, environmental consultancies, and industries.',
    required_skills: ['Environmental Science', 'Water Treatment', 'Air Quality Management', 'GIS Tools', 'EIA Reports'],
    average_salary_india: 'INR 4-12 LPA',
    growth_scope: 'Growing demand in pollution control boards, green infrastructure, climate consulting, and ESG compliance.',
    entrance_exams: buildEntranceExams(['JEE Main', 'GATE', 'State CETs', 'CUET']),
    top_colleges: []
  },
  {
    career_name: 'Agricultural Engineer',
    category: 'Engineering',
    description: 'Agricultural engineers design irrigation systems, farm machinery, storage facilities, and agri-tech solutions for Indian farming. They help modernise agriculture for efficiency and sustainability.',
    required_skills: ['Soil Science', 'Irrigation Design', 'Farm Machinery', 'GIS & Remote Sensing', 'Agri-tech'],
    average_salary_india: 'INR 4-12 LPA',
    growth_scope: 'Good scope in government agri departments, agri-tech startups, irrigation boards, and international aid organisations.',
    entrance_exams: buildEntranceExams(['JEE Main', 'ICAR AIEEA', 'GATE', 'State CETs']),
    top_colleges: []
  },
  {
    career_name: 'Food Technology Engineer',
    category: 'Engineering',
    description: 'Food technology engineers apply engineering principles to food processing, preservation, packaging, and safety. They work in FMCG companies, food labs, dairy plants, and beverage industries.',
    required_skills: ['Food Science', 'Processing Technology', 'Quality Assurance', 'Microbiology', 'Packaging Design'],
    average_salary_india: 'INR 4-14 LPA',
    growth_scope: 'Growing scope in Nestle, ITC, Amul, packaged food startups, export units, and government food testing labs.',
    entrance_exams: buildEntranceExams(['JEE Main', 'ICAR AIEEA', 'GATE', 'State CETs']),
    top_colleges: []
  },
  {
    career_name: 'Textile Engineer',
    category: 'Engineering',
    description: "Textile engineers develop fibres, fabrics, and manufacturing processes for India's massive textile and apparel industry. They work in mills, garment factories, and technical textiles for medical and defence uses.",
    required_skills: ['Fibre Science', 'Weaving Technology', 'Dyeing & Finishing', 'Quality Testing', 'Garment Tech'],
    average_salary_india: 'INR 3-12 LPA',
    growth_scope: 'Scope in mills, technical textiles, fashion industry, medical textiles, export units, and government schemes.',
    entrance_exams: buildEntranceExams(['JEE Main', 'GATE', 'State CETs']),
    top_colleges: []
  },
  {
    career_name: 'Automobile / Automotive Engineer',
    category: 'Engineering',
    description: "Automotive engineers design vehicles, drivetrains, EV systems, and safety features. India's auto sector — Tata, Maruti, Mahindra, and global OEMs — employs tens of thousands of automotive engineers.",
    required_skills: ['Vehicle Dynamics', 'CAD/CAM', 'IC Engines', 'EV Systems', 'Manufacturing Processes'],
    average_salary_india: 'INR 4-16 LPA',
    growth_scope: 'Strong growth in EV transition, two-wheeler electrification, automotive software, and global R&D centres in India.',
    entrance_exams: buildEntranceExams(['JEE Main', 'GATE', 'State CETs']),
    top_colleges: []
  },
  {
    career_name: 'Naval Architecture & Marine Engineer',
    category: 'Engineering',
    description: 'Naval architects and marine engineers design ships, submarines, offshore platforms, and port facilities. They work for the Indian Navy, Coast Guard, shipping companies, and shipyards.',
    required_skills: ['Ship Design', 'Fluid Mechanics', 'Structural Analysis', 'Marine Propulsion', 'Stability Calculations'],
    average_salary_india: 'INR 5-20 LPA',
    growth_scope: 'Scope in Indian Navy, Mazagon Dock, L&T Shipbuilding, Coast Guard, and global shipping companies.',
    entrance_exams: buildEntranceExams(['JEE Main', 'JEE Advanced', 'GATE']),
    top_colleges: []
  },
  {
    career_name: 'Instrumentation & Control Engineer',
    category: 'Engineering',
    description: 'Instrumentation engineers design sensors, measurement systems, process control equipment, and automation instruments for oil refineries, chemical plants, and manufacturing units.',
    required_skills: ['Process Control', 'PLC / SCADA', 'Sensors & Transducers', 'Signal Conditioning', 'Calibration'],
    average_salary_india: 'INR 5-16 LPA',
    growth_scope: 'Good scope in oil refineries, chemical plants, power stations, ISRO, DRDO, and process automation companies.',
    entrance_exams: buildEntranceExams(['JEE Main', 'GATE', 'State CETs', 'UPSC ESE']),
    top_colleges: []
  },
  {
    career_name: 'Industrial & Production Engineer',
    category: 'Engineering',
    description: 'Industrial engineers optimise manufacturing systems, supply chains, inventory, and workforce productivity. They are central to making factories efficient, safe, and cost-effective.',
    required_skills: ['Operations Research', 'Lean Manufacturing', 'Six Sigma', 'Supply Chain', 'Simulation'],
    average_salary_india: 'INR 4-14 LPA',
    growth_scope: 'Broad scope in manufacturing, logistics, FMCG, automotive, e-commerce operations, and management consulting.',
    entrance_exams: buildEntranceExams(['JEE Main', 'GATE', 'State CETs']),
    top_colleges: []
  },
  {
    career_name: 'Structural Engineer',
    category: 'Engineering',
    description: 'Structural engineers ensure that buildings, bridges, towers, and dams can safely carry loads without failure. They work on everything from residential housing to large-scale infrastructure projects.',
    required_skills: ['Structural Analysis', 'AutoCAD / STAAD Pro', 'Concrete Design', 'Steel Design', 'Earthquake Engineering'],
    average_salary_india: 'INR 5-15 LPA',
    growth_scope: 'Strong demand in real estate, government infrastructure, bridges, metro projects, and consulting firms.',
    entrance_exams: buildEntranceExams(['JEE Main', 'GATE', 'State CETs', 'UPSC ESE']),
    top_colleges: []
  },
  {
    career_name: 'Electrical & Electronics Engineer',
    category: 'Engineering',
    description: 'EEE engineers combine power systems with consumer electronics, spanning power plants, motors, control systems, and embedded products. They work across energy, manufacturing, and product companies.',
    required_skills: ['Electrical Machines', 'Power Electronics', 'Embedded Systems', 'Control Systems', 'Circuit Design'],
    average_salary_india: 'INR 5-16 LPA',
    growth_scope: 'Good scope in power utilities, EV tech, consumer electronics, ISRO, DRDO, and smart grid companies.',
    entrance_exams: buildEntranceExams(['JEE Main', 'GATE', 'State CETs', 'UPSC ESE']),
    top_colleges: []
  },
  {
    career_name: 'Renewable Energy Engineer',
    category: 'Engineering',
    description: 'Renewable energy engineers design and deploy solar, wind, hydro, and green hydrogen energy systems. They support India\'s transition to clean energy through technical design, project management, and grid integration.',
    required_skills: ['Solar PV Design', 'Wind Systems', 'Grid Integration', 'Energy Auditing', 'Project Management'],
    average_salary_india: 'INR 5-18 LPA',
    growth_scope: 'Strong growth in solar EPC, green hydrogen, energy storage, climate-tech startups, and government energy projects.',
    entrance_exams: buildEntranceExams(['JEE Main', 'JEE Advanced', 'GATE']),
    top_colleges: []
  },
  {
    career_name: 'Nuclear Engineer',
    category: 'Engineering',
    description: 'Nuclear engineers work on nuclear reactors, radiation safety, isotope production, and nuclear medicine applications. India\'s growing nuclear power programme through NPCIL and BARC offers strong career options.',
    required_skills: ['Nuclear Physics', 'Reactor Theory', 'Radiation Safety', 'Thermal Hydraulics', 'Material Science'],
    average_salary_india: 'INR 7-22 LPA',
    growth_scope: 'Scope in BARC, NPCIL, ISRO, nuclear medicine, and emerging advanced reactor programmes in India.',
    entrance_exams: buildEntranceExams(['JEE Advanced', 'GATE']),
    top_colleges: []
  },
  {
    career_name: 'Geotechnical / Geomatics Engineer',
    category: 'Engineering',
    description: 'Geotechnical engineers study soil and rock to design safe foundations for buildings, tunnels, dams, and roads. Geomatics engineers use GPS, GIS, and remote sensing to map and survey land.',
    required_skills: ['Soil Mechanics', 'Rock Mechanics', 'GIS & Remote Sensing', 'Foundation Design', 'Surveying'],
    average_salary_india: 'INR 4-14 LPA',
    growth_scope: 'Scope in construction, smart cities, highway projects, mining, disaster management, and space agencies.',
    entrance_exams: buildEntranceExams(['JEE Main', 'GATE', 'State CETs']),
    top_colleges: []
  },
  {
    career_name: 'Polymer / Plastic Technology Engineer',
    category: 'Engineering',
    description: 'Polymer engineers develop and process plastics, rubbers, and synthetic materials for packaging, automotive, medical, and electronics industries. They work on sustainable bioplastics and recycling technologies.',
    required_skills: ['Polymer Chemistry', 'Moulding Processes', 'Material Testing', 'Compounding', 'Quality Assurance'],
    average_salary_india: 'INR 4-14 LPA',
    growth_scope: 'Scope in FMCG packaging, automotive, medical devices, and fast-growing sustainable materials startups.',
    entrance_exams: buildEntranceExams(['JEE Main', 'GATE', 'State CETs']),
    top_colleges: []
  },
  {
    career_name: 'Ceramic & Glass Technology Engineer',
    category: 'Engineering',
    description: 'Ceramic engineers develop advanced ceramics and glass products for semiconductors, aerospace, biomedical implants, and construction. India\'s ceramics industry — tiles, glass, refractories — is a growing sector.',
    required_skills: ['Materials Science', 'Sintering & Firing', 'Characterisation Techniques', 'Quality Testing', 'Process Design'],
    average_salary_india: 'INR 4-12 LPA',
    growth_scope: 'Scope in semiconductor companies, aerospace materials, tile & glass industries, and advanced materials research.',
    entrance_exams: buildEntranceExams(['JEE Main', 'GATE', 'State CETs']),
    top_colleges: []
  },
  {
    career_name: 'Paint & Coatings Technology Engineer',
    category: 'Engineering',
    description: 'Paint technology engineers formulate paints, varnishes, industrial coatings, and surface treatments for automotive, construction, and protective applications. They work with companies like Asian Paints, Berger, and Kansai Nerolac.',
    required_skills: ['Chemistry', 'Rheology', 'Formulation Science', 'Application Techniques', 'Quality Control'],
    average_salary_india: 'INR 4-12 LPA',
    growth_scope: 'Scope in decorative paints, automotive coatings, industrial protective coatings, and R&D labs.',
    entrance_exams: buildEntranceExams(['JEE Main', 'GATE', 'State CETs']),
    top_colleges: []
  },
  {
    career_name: 'Game / AR / VR Developer (Engineering)',
    category: 'Engineering',
    description: 'Game and AR/VR engineers build immersive experiences — video games, augmented reality apps, virtual reality training simulations — for entertainment, education, defence, and healthcare.',
    required_skills: ['Unity / Unreal Engine', 'C# / C++', '3D Mathematics', 'Graphics Programming', 'UX for Immersive Media'],
    average_salary_india: 'INR 4-20 LPA',
    growth_scope: 'Growing scope in gaming studios, AR/VR startups, metaverse platforms, training simulators, and global gaming companies.',
    entrance_exams: buildEntranceExams(['JEE Main', 'BITSAT', 'State CETs']),
    top_colleges: []
  }
]

export default careerData

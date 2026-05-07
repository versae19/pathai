// Rich 360° data for Education & Social Impact careers
// Used by CareerDetailPage when career.category === 'Education'

export const educationRichData = {

  'Teacher': {
    emoji: '📚', gradient: 'linear-gradient(135deg,#78350f 0%,#d97706 50%,#fbbf24 100%)',
    tagline: 'Inspire the next generation in classrooms, coaching centres, and online platforms',
    about: "Teachers are the backbone of India's education system, working in government schools, private schools, coaching institutes, and online education platforms. The career offers stability, social respect, and meaningful work. With edtech booming, teachers now reach thousands of students online — making teaching both impactful and financially rewarding.\n\nThe path requires a B.Ed qualification and clearing CTET or state TET for government school positions. Private schools recruit directly. Edtech platforms like BYJU's, PhysicsWallah, and Unacademy hire subject experts who can teach at scale — creating career tracks that combine the intellectual satisfaction of teaching with competitive salaries.",
    what_you_learn: [
      { icon: '📖', title: 'Subject Mastery', desc: 'Deepen expertise in your chosen subject — Mathematics, Science, History, Languages, or Commerce — through your undergraduate degree.' },
      { icon: '🎓', title: 'B.Ed & Pedagogy', desc: 'Complete Bachelor of Education to learn lesson planning, child psychology, assessment design, and classroom management techniques.' },
      { icon: '📝', title: 'CTET / State TET Preparation', desc: 'Clear central or state teacher eligibility test — Child Development & Pedagogy and subject-specific content are the two key papers.' },
      { icon: '💻', title: 'Digital Teaching Tools', desc: 'Build skills in Google Classroom, Zoom, content creation for YouTube, and edtech platforms for effective online and blended teaching.' },
      { icon: '📊', title: 'Student Assessment & Feedback', desc: 'Design formative and summative assessments, track student progress, and give constructive feedback that drives learning outcomes.' },
      { icon: '🌐', title: 'Edtech & Online Teaching', desc: 'Create recorded video courses, conduct live sessions, and build a student base on platforms like Unacademy, Vedantu, or your own channel.' },
    ],
    day_in_life: [
      'Arrive at school at 7:30 AM — review daily lesson plans and prepare teaching materials',
      'Conduct classroom sessions from 8:30 AM — teaching, asking questions, addressing doubts',
      'Evaluate assignments, grade papers, and track student progress after school hours',
      'Parent-teacher interaction, department meetings, or curriculum planning in the afternoon',
      'Online teaching session or preparation for next day\'s lessons in the evening',
    ],
    top_companies: ['Kendriya Vidyalaya Sangathan (KVS)', 'Navodaya Vidyalaya Samiti (NVS)', "BYJU'S (edtech)", 'Unacademy', 'Vedantu', 'PhysicsWallah', 'Delhi Public School Society', 'Ryan International Group', 'Ekalavya Schools (Tribal Ministry)', 'State Education Departments', 'Allen Career Institute', 'Infinity Learn', 'Aakash Educational Services'],
    salary_ladder: [
      { role: 'Private School Teacher (Entry)', salary: '2.5-4 LPA', years: '0-2 yrs' },
      { role: 'Government School Teacher', salary: '4-7 LPA', years: '0-3 yrs' },
      { role: 'Senior Teacher / Department Head', salary: '7-12 LPA', years: '5-10 yrs' },
      { role: 'Principal / Vice Principal', salary: '12-20 LPA', years: '10+ yrs' },
      { role: 'Top Educator (Online / Coaching)', salary: '20 L - 1 Cr+', years: '5+ yrs' },
    ],
    work_type: 'School + Coaching + Online', work_desc: "Teachers follow a structured school calendar with peak hours during morning sessions and marking work in the afternoon. School holidays align with academic calendars. Online teachers have more flexible schedules but must produce content consistently. Edtech roles combine teaching with content creation.",
    core_subjects: ['Child Development & Pedagogy', 'Subject Specialisation', 'Curriculum Design', 'Educational Psychology'],
    stream_note: 'Teaching is open to graduates from any stream. Your subject specialisation determines what you teach — arts, science, commerce, or languages are all valid paths.',
  },

  'College Professor / Researcher': {
    emoji: '🎓', gradient: 'linear-gradient(135deg,#312e81 0%,#4338ca 50%,#7c3aed 100%)',
    tagline: "Teach, research, and push the boundaries of knowledge at India's universities",
    about: "College professors and researchers teach undergraduate and postgraduate students, conduct academic research, and publish papers at colleges, central universities, IITs, IIMs, and research institutions. India's higher education system employs hundreds of thousands of faculty members, and UGC NET cleared candidates are eligible for Assistant Professor positions nationwide.\n\nThe path requires a master degree with 55%+ marks, UGC NET qualification for lectureship eligibility, and ideally a PhD for tenure-track positions. JRF (Junior Research Fellowship) provides a monthly stipend during doctoral research. India's research landscape is growing significantly, with CSIR, ICMR, and DST funding increasingly ambitious research programs.",
    what_you_learn: [
      { icon: '📖', title: 'Master Degree & Specialisation', desc: 'Complete MA/MSc/MCom with 55%+ marks in your subject — the mandatory eligibility for Assistant Professor positions.' },
      { icon: '📝', title: 'UGC NET Preparation', desc: 'Study Paper I (Teaching & Research Aptitude) and Paper II (subject-specific) for national-level lectureship qualification.' },
      { icon: '🔬', title: 'Research Methodology', desc: 'Learn quantitative and qualitative research methods, statistical analysis (SPSS, R), and academic writing conventions.' },
      { icon: '📚', title: 'Academic Publishing', desc: 'Write research papers for UGC-listed or Scopus-indexed journals — publication record drives promotion and grant eligibility.' },
      { icon: '🎓', title: 'PhD Research', desc: 'Enroll in PhD with JRF funding — publish 2-3 papers, present at conferences, and build a research portfolio over 4-6 years.' },
      { icon: '💡', title: 'Curriculum & Course Design', desc: 'Develop syllabi, design Bloom\'s taxonomy-based lesson plans, and create engaging evaluation methods for university students.' },
    ],
    day_in_life: [
      'Undergraduate or postgraduate lecture from 9:00 AM — 1-2 hours of classroom teaching',
      'Research work: data collection, literature review, or writing journal paper',
      'Student consultations, thesis guidance, or departmental meeting in the afternoon',
      'Review assignments, grade papers, or prepare course materials for next week',
      'Research writing, conference paper preparation, or collaborative project work in the evening',
    ],
    top_companies: ['Indian Institutes of Technology (IITs)', 'Indian Institutes of Management (IIMs)', 'TISS (Tata Institute of Social Sciences)', 'Delhi University Colleges', 'JNU (Jawaharlal Nehru University)', 'BHU (Banaras Hindu University)', 'Hyderabad University', 'Christ University / Symbiosis', 'Manipal Academy of Higher Education', 'State Universities (Autonomous)', 'CSIR / ICMR Research Labs', 'IISER Institutes', 'UGC Funded Research Projects'],
    salary_ladder: [
      { role: 'Guest Lecturer / Ad-hoc', salary: '4-6 LPA', years: '0-2 yrs' },
      { role: 'Assistant Professor', salary: '7-14 LPA', years: '0-5 yrs' },
      { role: 'Associate Professor', salary: '14-22 LPA', years: '5-12 yrs' },
      { role: 'Professor', salary: '22-35 LPA', years: '12+ yrs' },
      { role: 'Senior Professor / Department Head', salary: '35-50 LPA', years: '15+ yrs' },
    ],
    work_type: 'Campus + Research Lab + Remote (Research)', work_desc: 'College professors balance teaching (8-12 hours/week) with research, administration, and student guidance. Semester breaks involve intensive research work. Research-active faculty attend national and international conferences. Central university positions include government benefits and accommodation on campus.',
    core_subjects: ['Research Methodology', 'Subject Expertise', 'Academic Writing', 'Statistical Analysis'],
    stream_note: 'College professorships are open to graduates from any stream with a master degree and UGC NET. Your subject determines your teaching and research domain.',
  },

  'Psychologist': {
    emoji: '🧠', gradient: 'linear-gradient(135deg,#9d174d 0%,#db2777 50%,#f472b6 100%)',
    tagline: 'Support minds, heal emotions, and transform how people think and live',
    about: "Psychologists study human behaviour and provide assessment, counselling, and therapeutic support for individuals with emotional, academic, clinical, and workplace challenges. India's growing mental health awareness — driven by conversations around anxiety, burnout, and relationships — has significantly increased demand for trained psychologists in schools, hospitals, HR departments, and private practice.\n\nThe path requires a BA/BSc Psychology, followed by MA/MSc for clinical or counselling specialisation, and RCI registration for clinical practice. TISS Mumbai, NIMHANS Bengaluru, and Delhi University are the most respected training institutions. Online therapy platforms have dramatically expanded the market for qualified counsellors.",
    what_you_learn: [
      { icon: '🧠', title: 'Psychology Foundations', desc: 'Study clinical, developmental, social, and organisational psychology through your 3-year bachelor degree.' },
      { icon: '🤝', title: 'Counselling Theory & Practice', desc: 'Learn Person-Centred Therapy, CBT, REBT, and other counselling frameworks through postgraduate coursework and supervised placements.' },
      { icon: '📊', title: 'Psychological Assessment', desc: 'Administer and interpret standardised psychometric tests for intelligence, personality, anxiety, depression, and learning difficulties.' },
      { icon: '🔬', title: 'Research Methods & Statistics', desc: 'Design research studies, collect data ethically, and use SPSS or R for statistical analysis in academic or applied psychology.' },
      { icon: '🌐', title: 'Online Therapy Platforms', desc: 'Build a private practice or join platforms like YourDost, iCall, or Wysa for scalable online counselling and therapy services.' },
      { icon: '🏅', title: 'Specialisation Track', desc: 'Choose a clinical niche — child psychology, sports psychology, neuropsychology, or trauma therapy — for differentiated expertise.' },
    ],
    day_in_life: [
      'Case review and session preparation from 9:00 AM — reviewing client notes and therapeutic goals',
      'Client sessions: 50-minute therapy or counselling appointments (4-6 clients per day)',
      'Documentation: update clinical notes, progress reports, and treatment plans after sessions',
      'Assessment sessions: psychological testing or career counselling interviews in the afternoon',
      'Supervision, continuing education, or research review in the late afternoon or evening',
    ],
    top_companies: ['NIMHANS Bengaluru', 'AIIMS Psychiatry Department', 'iCall (TISS)', 'Vandrevala Foundation', 'YourDost', 'Wysa (AI + Human Therapy)', 'InnerHour / Practo Mental Health', 'Corporate HR / EAP Providers', 'School Counselling Programs (KVS, NVS)', 'Mann Deshi Foundation', 'National Institute of Mental Health', 'Private Therapy Centres', 'Sports Federations (Sports Psychologist)'],
    salary_ladder: [
      { role: 'Junior Counsellor / Intern', salary: '3-5 LPA', years: '0-2 yrs' },
      { role: 'School / Corporate Counsellor', salary: '5-10 LPA', years: '2-5 yrs' },
      { role: 'Clinical Psychologist', salary: '10-18 LPA', years: '4-8 yrs' },
      { role: 'Senior Psychologist', salary: '18-30 LPA', years: '8+ yrs' },
      { role: 'Private Practice / Senior Consultant', salary: '30-60 LPA+', years: '10+ yrs' },
    ],
    work_type: 'Clinic + Hospital + School + Online', work_desc: 'Psychologists typically see 4-8 clients per day in private practice or institutional settings. School counsellors follow school hours. Clinical psychologists in hospitals work in multidisciplinary teams. Online therapy platforms offer flexible scheduling. Emotional labour is significant — regular supervision and self-care are essential.',
    core_subjects: ['Clinical Psychology', 'Counselling Theory', 'Psychological Assessment', 'Research Methods'],
    stream_note: 'Psychology careers are open to students from arts, science, or any stream at bachelor level. Passion for human behaviour and commitment to supervised training matter more than stream choice.',
  },

  'Social Worker': {
    emoji: '🤝', gradient: 'linear-gradient(135deg,#14532d 0%,#15803d 50%,#22c55e 100%)',
    tagline: 'Drive social change, uplift communities, and make policies that matter',
    about: "Social workers support communities through welfare programs, development projects, counselling, rights advocacy, and grassroots interventions. They work with NGOs, government departments, international agencies (UNICEF, UNDP), CSR programs, and hospitals. The career is meaningful, socially impactful, and increasingly recognised by government and corporates through mandatory CSR and social impact investments.\n\nTISS Mumbai's MSW program is India's gold standard — alumni lead major development organisations worldwide. XISS Ranchi, Jamia Millia, and CUSAT also offer strong programs. The field rewards fieldwork commitment, strong documentation skills, and genuine empathy.",
    what_you_learn: [
      { icon: '🏘️', title: 'Community Development Methods', desc: 'Learn participatory research, needs assessment, community mobilisation, and rights-based approaches to social work.' },
      { icon: '📋', title: 'Programme Management', desc: 'Design, implement, and monitor development programmes using logical framework analysis and M&E (monitoring and evaluation) tools.' },
      { icon: '✍️', title: 'Grant Writing & Documentation', desc: 'Write compelling grant proposals, case studies, progress reports, and impact assessments for donors and government bodies.' },
      { icon: '🤝', title: 'Counselling Basics', desc: 'Provide basic counselling support in community settings — active listening, referral pathways, and crisis intervention techniques.' },
      { icon: '🌐', title: 'Policy & Advocacy', desc: 'Understand government welfare schemes, rights-based legislation, and how to advocate for communities in policy processes.' },
      { icon: '📊', title: 'Data Collection & Research', desc: 'Conduct baseline surveys, focus group discussions, and qualitative research to measure impact and guide programme decisions.' },
    ],
    day_in_life: [
      'Field visit to community beneficiaries from 8:30 AM — case assessment and documentation',
      'NGO programme meeting: progress update, planning next week\'s activities',
      'Report writing: field notes, case files, and monitoring reports for donor compliance',
      'Beneficiary counselling session or government coordination meeting in the afternoon',
      'Donor reporting, grant compliance, or grant proposal writing in the evening',
    ],
    top_companies: ['TISS (Training + Employment)', 'Pratham NGO', 'CRY (Child Rights and You)', 'UNICEF India', 'UNDP India', 'HelpAge India', 'Oxfam India', 'Save the Children India', 'IRMA (Institute of Rural Management)', 'Aga Khan Foundation India', 'Corporate CSR Divisions', 'Ministry of Social Justice & Empowerment', 'World Bank Social Development Team'],
    salary_ladder: [
      { role: 'Field Worker / Community Worker', salary: '2.5-4 LPA', years: '0-2 yrs' },
      { role: 'Programme Officer', salary: '4-8 LPA', years: '2-5 yrs' },
      { role: 'Senior Programme Manager', salary: '8-15 LPA', years: '5-10 yrs' },
      { role: 'Director / Country Head (NGO)', salary: '15-30 LPA', years: '10+ yrs' },
      { role: 'UN / Multilateral Agency Role', salary: '30-60 LPA+', years: '8+ yrs' },
    ],
    work_type: 'Field + NGO Office + Government + International', work_desc: 'Social workers spend significant time in the field — visiting communities, conducting assessments, and implementing programmes. Office time involves report writing, coordination calls, and grant compliance. Senior roles involve more strategy, fundraising, and stakeholder management.',
    core_subjects: ['Social Work Theory', 'Community Development', 'Programme Management', 'Research & M&E'],
    stream_note: 'Social work is open to graduates from any stream. The field values empathy, fieldwork commitment, and social awareness above academic background.',
  },

  'Special Educator': {
    emoji: '💛', gradient: 'linear-gradient(135deg,#92400e 0%,#d97706 50%,#fbbf24 100%)',
    tagline: 'Unlock potential in every learner — regardless of how they learn',
    about: "Special educators work with children who have intellectual disabilities, autism spectrum disorders, hearing or visual impairment, learning disabilities, or cerebral palsy. They design Individualised Education Plans (IEPs), work in inclusive classrooms, special schools, rehabilitation centres, and NGOs. India's RPWD Act 2016 mandates inclusive education, creating growing demand for qualified special educators in mainstream schools.\n\nThe path requires a D.Ed or B.Ed in Special Education from an RCI-approved institution, followed by mandatory Rehabilitation Council of India (RCI) registration. KVS and NVS have dedicated Special Educator positions. International agencies like UNICEF support inclusion programs across developing countries.",
    what_you_learn: [
      { icon: '📋', title: 'IEP Development', desc: 'Design and implement Individualised Education Plans aligned to each child\'s unique learning profile and developmental goals.' },
      { icon: '🌐', title: 'Assistive Technology', desc: 'Learn AAC (Augmentative and Alternative Communication), Braille, sign language basics, and digital accessibility tools for diverse learners.' },
      { icon: '🧩', title: 'Disability-specific Pedagogy', desc: 'Master teaching approaches for intellectual disability, autism, hearing impairment, visual impairment, and learning disabilities.' },
      { icon: '🤝', title: 'Behaviour Management', desc: 'Apply Applied Behaviour Analysis (ABA), Positive Behaviour Support, and sensory integration strategies for challenging behaviours.' },
      { icon: '👨‍👩‍👧', title: 'Family Counselling', desc: 'Guide parents on home strategies, advocate for children\'s rights in schools, and facilitate family-professional partnerships.' },
      { icon: '🏛️', title: 'Inclusive Education Practices', desc: 'Train regular school teachers in Universal Design for Learning (UDL) and resource room models for inclusive classroom support.' },
    ],
    day_in_life: [
      'Review IEPs and prepare sensory materials or adaptive teaching aids from 8:30 AM',
      'Individual or small-group teaching sessions tailored to each child\'s IEP goals',
      'Inclusion support in mainstream classroom as a resource teacher before lunch',
      'Parent counselling session or IEP review meeting with parents and therapists',
      'Documentation: update child records, progress notes, and therapy coordination in the afternoon',
    ],
    top_companies: ['Kendriya Vidyalaya Special Educator Posts', 'Navodaya Vidyalaya Special Educator', 'The Spastics Society of India (Vidya Sagar)', 'Ummeed Child Development Centre', 'Action for Autism (NAS India)', 'Tamana (Special Needs School)', 'SPARSH India Foundation', 'NIEPID (National Institute)', 'Sarva Shiksha Abhiyan Resource Teachers', 'Private Inclusive Schools (Indus, Pathways)', 'UNICEF Education Teams', 'Rehabilitation Centres (state-run)', 'Early Intervention Centres'],
    salary_ladder: [
      { role: 'Special Educator (Entry)', salary: '3-4.5 LPA', years: '0-2 yrs' },
      { role: 'Experienced Special Educator', salary: '4.5-8 LPA', years: '2-5 yrs' },
      { role: 'Resource Teacher / Department Lead', salary: '8-12 LPA', years: '5-8 yrs' },
      { role: 'Senior Educator / Program Head', salary: '12-18 LPA', years: '8+ yrs' },
      { role: 'NGO Director / Policy Consultant', salary: '18-28 LPA', years: '10+ yrs' },
    ],
    work_type: 'School + Clinic + NGO + Home Programs', work_desc: 'Special educators follow school hours at inclusive or special schools. Clinic-based roles involve planned therapy sessions and parent consultations. NGO roles include field visits, training workshops, and programme monitoring. The work is emotionally fulfilling but demands patience, adaptability, and strong family engagement skills.',
    core_subjects: ['Special Education Methods', 'Child Development', 'IEP Planning', 'Behaviour Management'],
    stream_note: 'Special education is open to graduates from any stream who complete an RCI-approved B.Ed Special Education program. RCI registration is mandatory for professional practice.',
  },

}

export function getEducationRich(careerName) {
  return educationRichData[careerName] || {
    emoji: '📚', gradient: 'linear-gradient(135deg,#78350f 0%,#fbbf24 100%)',
    tagline: 'Shape minds and create impact through education and social work.',
    about: careerName + ' is a rewarding career in the education and social impact sector, offering meaningful opportunities across India.',
    what_you_learn: [], day_in_life: [], top_companies: [], salary_ladder: [],
    work_type: 'Field / Classroom / Community', work_desc: 'Education and social impact careers involve direct work with people in schools, communities, and organisations.',
    core_subjects: ['Education', 'Social Sciences'],
    stream_note: 'Education and social impact careers are open to graduates from any academic stream.',
  }
}

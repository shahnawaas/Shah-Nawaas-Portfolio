export const contact = {
  email: 'shahnu2109@gmail.com',
  phone: '+91 8778487141',
  github: 'https://github.com/shahnawaas',
  linkedin: 'https://www.linkedin.com/in/shah-nawaas',
} as const

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
] as const

export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'Angular', 'HTML5', 'CSS3', 'Responsive Web Design'],
  },
  {
    category: 'Backend',
    items: ['FastAPI', 'Spring Boot', 'Node.js', 'REST APIs', 'SQLAlchemy', 'Pydantic'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    category: 'AI / Machine Learning',
    items: [
      'TensorFlow',
      'Keras',
      'PyTorch',
      'Scikit-Learn',
      'Pandas',
      'NumPy',
      'OpenCV',
      'NLP',
      'Computer Vision',
      'Deep Learning',
      'Anomaly Detection',
      'Isolation Forest',
      'Autoencoders',
    ],
    featured: true,
  },
  {
    category: 'Cloud & Deployment',
    items: ['Render', 'Neon PostgreSQL', 'Git', 'GitHub Actions'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Postman', 'Swagger', 'Streamlit', 'Power BI', 'Jupyter Notebook', 'Google Colab', 'VS Code'],
  },
] as const

export const projects = [
  {
    index: '01',
    title: 'AI-Based Anomaly Detection System',
    category: 'AI / CYBERSECURITY',
    tech: 'Python · Scikit-Learn · TensorFlow · Keras · Streamlit',
    description: 'Unsupervised ML pipeline combining Isolation Forest and Autoencoder models on the KDD Cup 1999 dataset to detect anomalous network traffic without labeled attack data.',
    details: [
      'Preprocessing across 41 network attributes with encoding, normalization and noise reduction.',
      'Evaluated with Precision, Recall, F1-Score and Accuracy.',
      'Real-time Streamlit application for live anomaly prediction.',
    ],
    visual: 'signal',
  },
  {
    index: '02',
    title: 'Inventory Order Management System',
    category: 'BACKEND / SYSTEMS',
    tech: 'FastAPI · PostgreSQL · SQLAlchemy · Pydantic · Render · Neon',
    description: 'Production-oriented REST backend designed to prevent overselling during concurrent purchase requests.',
    details: [
      'Row-level locking with SELECT FOR UPDATE / with_for_update().',
      'Idempotency keys prevent duplicate order creation.',
      'Swagger and Postman validation.',
      'Deployed with Neon PostgreSQL.',
    ],
    visual: 'api',
  },
  {
    index: '03',
    title: 'Shopping Mall Management System',
    category: 'FULL STACK / QA',
    tech: 'Spring Boot · Angular · PostgreSQL · REST APIs · Postman',
    description: 'Full-stack retail management application with 15+ RESTful endpoints for customer and store data.',
    details: [
      'Angular frontend integrated with Spring Boot APIs.',
      'End-to-end QA using Postman.',
      'Identified and resolved 10+ critical API defects.',
      'Sub-200ms response times.',
      'Contract-driven integration.',
    ],
    visual: 'dashboard',
  },
  {
    index: '04',
    title: 'Responsive Restaurant Web Application',
    category: 'FRONTEND / PERFORMANCE',
    tech: 'React.js · JavaScript · HTML5 · CSS3 · CSS Grid',
    description: 'Responsive React application focused on performance and cross-browser compatibility.',
    details: [
      'Lazy loading and CSS Grid auto-fill layouts.',
      'Safari/iOS rendering fixes with -webkit- fallbacks.',
      'Structured QA across Chrome, Firefox, Safari and mobile viewports.',
    ],
    visual: 'layout',
  },
] as const

export const experience = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Unistrix IT Solutions',
    period: 'Jan 2026 — May 2026',
    description: 'Developed and maintained full-stack web applications using React.js, FastAPI, Spring Boot and SQL. Built REST APIs, assisted with relational database design, implemented frontend/backend features, and performed debugging, testing and deployment tasks across the SDLC.',
  },
  {
    role: 'Web Development & Digital Marketing Intern',
    company: 'Evoulth Digital Pvt Ltd',
    period: 'Jan 2023 — Jun 2023',
    description: 'Delivered 5+ end-to-end client web projects, applying QA validation and adapting to evolving requirements. Collaborated on data-driven social media campaigns using Google Analytics and Google product tools.',
  },
] as const

export const coursework = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'Database Management Systems',
  'Operating Systems',
  'Computer Networks',
  'Software Engineering',
  'Machine Learning',
  'Artificial Intelligence',
] as const

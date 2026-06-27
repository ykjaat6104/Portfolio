export const personalInfo = {
  name: "Yash Kumar Kalirawan",
  initials: "YKK",
  title: "AI & Backend Developer",
  tagline: "AI & Backend Developer · RAG & Multi-Agent Systems · Python & React",
  description:
    "A passionate AI and Backend Developer crafting intelligent, cloud-ready applications. I turn complex problems into elegant, functional software with a focus on LLMs, RAG systems, and scalable architectures. Currently building multi-agent systems and AI-driven solutions.",
  email: "kalirawan2004yash@gmail.com",
  phone: "+91-8595665453",
  location: "India",
  linkedin: "yashkalirawan1981",
  github: "ykjaat6104",
  available: true,
  stats: {
    Projects: "10",
    Followers: "6",
    "Open to Work": "Now",
  },
  highlights: [
    { icon: "🤖", title: "AI & LLMs", sub: "RAG, LangGraph, CrewAI, Gemini" },
    { icon: "⚡", title: "Backend Systems", sub: "FastAPI, Python, REST APIs, Celery" },
    { icon: "🧠", title: "Multi-Agent AI", sub: "LangGraph Orchestration, Agents" },
    { icon: "🛡️", title: "Cloud & DevOps", sub: "Docker, PostgreSQL, Nginx, Redis" },
  ],
};

export const skills = [
  {
    name: "Languages",
    items: [
      { name: "Python", level: 90 },
      { name: "C++", level: 78 },
      { name: "JavaScript", level: 85 },
      { name: "SQL", level: 80 },
      { name: "TypeScript", level: 82 },  
      { name: "PHP", level: 40 },
    ],
  },
  {
    name: "Frameworks & Libraries",
    items: [
      { name: "FastAPI", level: 90 },
      { name: "Flask", level: 75 },
      { name: "React.js", level: 85 },
      { name: "Node.js", level: 78 },
      { name: "LangChain", level: 88 },
      { name: "LangGraph", level: 85 },
      { name: "CrewAI", level: 82 },
      { name: "TensorFlow", level: 70 },
    ],
  },
  {
    name: "AI / ML",
    items: [
      { name: "LLMs", level: 90 },
      { name: "RAG Systems", level: 88 },
      { name: "Prompt Engineering", level: 92 },
      { name: "Embeddings", level: 85 },
      { name: "Vector Databases", level: 85 },
      { name: "n8n", level: 78 },
      { name: "Numpy", level: 85 },
      { name: "Pandas", level: 85 },
      { name: "PyTorch", level: 70 },
      { name: "Scikit-learn", level: 75 },
      { name: "Seaborn", level: 75 },  
    ],
  },
  {
    name: "DevOps & Tools",
    items: [
      { name: "Docker", level: 82 },
      { name: "Kubernetes", level: 70 },
      { name: "Git", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 78 },
      { name: "REST APIs", level: 90 },
      { name: "Figma", level: 65 },
      { name: "Redis", level: 75 },
    ],
  },
  {
    name: "CS Fundamentals",
    items: [
      { name: "DSA", level: 80 },
      { name: "OOPs", level: 85 },
      { name: "Operating Systems", level: 75 },
      { name: "System Design", level: 78 },
      { name: "Data Analysis", level: 82 },
    ],
  },
];

export const experience = [
  {
    date: "Nov 2025 – Jan 2026",
    role: "Artificial Intelligence Intern",
    company: "InnovateLoop Solutions · Remote",
    description: [
      "Developed and deployed LLM-powered applications using Gemini/OpenAI APIs for real-world use cases, achieving 40% faster response times through optimized prompt strategies.",
      "Built end-to-end RAG pipelines with ChromaDB vector databases enabling context-aware question answering over 10,000+ document pages.",
      "Processed and analyzed large-scale datasets including PDF, OCR, and unstructured text for AI-driven insights and document intelligence.",
    ],
    tags: ["Python", "Gemini", "RAG", "LLMs", "ChromaDB", "FastAPI"],
  },
  {
    date: "Apr 2025 – Jun 2025",
    role: "Frontend Web Developer",
    company: "GradHorizon · Remote",
    description: [
      "Developed responsive and user-friendly web interfaces using React.js, HTML, CSS, and JavaScript, ensuring consistent performance across different screen sizes and devices.",
      "Converted Figma design mockups into pixel-perfect, reusable React components while following modern UI/UX and component-based development practices.",
      "Integrated REST APIs to dynamically fetch and render data on the frontend, improving application interactivity and overall user experience.",
    ],
    tags: ["React", "JavaScript", "REST APIs", "Figma", "CSS"],
  },
];

// ─── 6 Featured Projects (shown on main portfolio page) ───────────────────────
export const featuredProjects = [
  {
    icon: "🛡️",
    title: "ClaimSense",
    desc: "Multi-agent AI insurance claim auditing platform with OCR ingestion, hybrid RAG policy retrieval, LangGraph-powered multi-agent debate (Policy Analyst, Data Miner, Fraud Auditor, Judge), and fraud/risk scoring. Generates PDF/DOCX reports with a React dashboard.",
    tech: ["CrewAI", "FastAPI", "LangGraph", "Gemini", "ChromaDB", "PostgreSQL", "OCR", "React", "Docker"],
    github: "https://github.com/ykjaat6104/ClaimSense---A-Multi-Agent-Insurance-Claim-Auditing-Crew-System",
    live: "https://claim-sense-multi-agent-insurance.vercel.app",
    stars: 1,
  },
  {
    icon: "🏥",
    title: "CuraWeave",
    desc: "Multi-tenant AI-powered clinic management platform with dual portals (Doctor & Patient). Features LangGraph-powered symptom triage, automated scheduling, Celery + Redis async tasks, Stripe billing, and Docker deployment.",
    tech: ["LangGraph", "FastAPI", "Gemini", "PostgreSQL", "Celery", "Redis", "Docker", "React", "TypeScript"],
    github: "https://github.com/ykjaat6104/CuraWeave",
    live: null,
    stars: 1,
  },
  {
    icon: "🛒",
    title: "OpiumVerse",
    desc: "Modern cinematic e-commerce platform with responsive UI, immersive landing experience, JWT-based authentication, product listing, filtering, cart management, wishlist, reviews, and product comparison features.",
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript", "PHP APIs", "JWT"],
    github: "https://github.com/ykjaat6104",
    live: null,
    stars: 1,
  },
  {
    icon: "⚖️",
    title: "AI Legal Policy & Document Analyzer",
    desc: "AI-powered legal document analysis tool that ingests PDF/DOCX/TXT, performs intelligent clause retrieval and risk analysis using vector search (ChromaDB) and Google Gemini. Features web UI, REST API, and CLI interfaces.",
    tech: ["Python", "FastAPI", "LangChain", "Gemini", "ChromaDB", "Docker"],
    github: "https://github.com/ykjaat6104/AI-Legal-Policy-and-Document-Analyzer",
    live: "https://ykjaat6104-ai-legal-policy-and-document-analyzer.hf.space",
    stars: 2,
  },
  {
    icon: "📊",
    title: "LLM Cost & Token Efficiency Analysis",
    desc: "Comprehensive analysis of token usage, latency, and cost patterns across different LLM configurations and prompt strategies. Identified optimizations reducing token consumption by 35% while maintaining response quality.",
    tech: ["Python", "OpenAI API", "Data Analysis", "Jupyter", "Pandas"],
    github: "https://github.com/ykjaat6104/LLM-Cost-and-Token-Efficiency-Analysis",
    live: null,
    stars: 3,
  },
  {
    icon: "🏛️",
    title: "PastPortals-AI",
    desc: "AI-powered museum guide enabling users to explore historical content through intelligent question-answering. Integrates Google Gemini AI with retrieval-augmented approach using historical documents. Features multilingual support, voice interaction, and interactive timelines.",
    tech: ["React", "Flask", "Google Gemini", "LangChain", "REST APIs"],
    github: "https://github.com/ykjaat6104/PastPortals-AI",
    live: null,
    stars: 2,
  },
];

// ─── All remaining projects (shown via "More Projects" → GitHub) ──────────────
export const moreProjects = [
  {
    icon: "🔮",
    title: "PastPortals-V2",
    desc: "Next-generation version of PastPortals with enhanced RAG pipeline, improved document processing, and expanded cultural heritage dataset for deeper historical exploration.",
    tech: ["Python", "LangChain", "Gemini", "ChromaDB", "FastAPI"],
    github: "https://github.com/ykjaat6104/Past-Portals-V2",
    live: null,
    stars: 1,
  },
  {
    icon: "📅",
    title: "LinkedIn Automation Scheduler",
    desc: "Automated LinkedIn posting and scheduling workflow using n8n to streamline professional content publishing. Implements triggers, conditional logic, and API integrations for automated post scheduling.",
    tech: ["n8n", "REST APIs", "JavaScript", "Automation"],
    github: "https://github.com/ykjaat6104",
    live: null,
    stars: 0,
  },
  {
    icon: "📄",
    title: "AI-Powered Resume Builder",
    desc: "Intelligent resume builder using AI to help users create professional, ATS-friendly resumes with smart content suggestions, real-time previews, and multiple template options.",
    tech: ["JavaScript", "React", "AI", "CSS", "Node.js"],
    github: "https://github.com/ykjaat6104/AI-Powered-Resume-Builder",
    live: null,
    stars: 0,
  },
  {
    icon: "📈",
    title: "Hyperliquid Sentiment Analysis",
    desc: "Quantitative analysis of Bitcoin market sentiment (Fear/Greed Index) impact on trader behavior on Hyperliquid DEX. Analyzed 200K+ real trades from 32 traders over 2+ years using Python data analysis.",
    tech: ["Python", "Pandas", "NumPy", "Data Analysis", "Jupyter"],
    github: "https://github.com/ykjaat6104/Hyperliquid-Sentiment-and-Behavioral-Analysis",
    live: null,
    stars: 0,
  },
];

export const education = [
  {
    icon: "🎓",
    degree: "Bachelor of Technology, Computer Science & Engineering",
    school: "KCC Institute of Technology and Management, Greater Noida, U.P.",
    board: "Dr. APJ Abdul Kalam Technical University, Lucknow",
    year: "Sep 2022 – July 2026",
    score: "CGPA: 7.4",
  },
  {
    icon: "🏫",
    degree: "Senior Secondary (Class XII) – Science (PCM)",
    school: "Mother Khazani Convent School,Bakhtawarpur, Delhi - 36",
    board: "Central Board of Secondary Education (CBSE)",
    year: "2022",
    score: "Percentage: 77.7%",
  },
  {
    icon: "📚",
    degree: "Secondary (Class X)",
    school: "Central Board of Secondary Education (CBSE)",
    board: "",
    year: "2020",
    score: "Percentage: 88.7%",
  },
];

export const publication = {
  title: "PAST PORTALS: AI Powered Multimodal RAG-Based Approach for Cultural Heritage Interpretation",
  journal: "International Research Journal of Modernization in Engineering Technology and Science (IRJMETS)",
  volume: "Vol. 07, Issue 12, December 2025",
  doi: "10.56726/IRJMETS87503",
  link: "https://doi.org/10.56726/IRJMETS87503",
  description:
    "This research proposes a multimodal Retrieval-Augmented Generation (RAG) framework for cultural heritage interpretation by integrating large language models with structured historical documents, visual data, and voice-based interaction. The system improves contextual understanding and reduces hallucinations by grounding responses in retrieved knowledge, and serves as the academic foundation for the PastPortals-AI project.",
};

export const contactInfo = [
  {
    icon: "fas fa-envelope",
    label: "Email",
    value: "kalirawan2004yash@gmail.com",
    href: "mailto:kalirawan2004yash@gmail.com",
  },
  {
    icon: "fas fa-phone",
    label: "Phone",
    value: "+91-8595665453",
    href: "tel:+918595665453",
  },
  {
    icon: "fas fa-map-marker-alt",
    label: "Location",
    value: "India",
    href: null,
  },
  {
    icon: "fas fa-circle",
    label: "Status",
    value: "Open to Opportunities & Freelance",
    href: null,
    dot: true,
  },
];

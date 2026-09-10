export const personalInfo = {
  name: "Raihan Nur Ramadhan Sundana",
  shortName: "Raihan Sundana",
  location: "Bandung, West Java, Indonesia",
  email: "raihannurramadhan4@gmail.com",
  role: "Computer Engineering graduate focused on software development and cybersecurity.",
  summary:
    "I build web applications, solve technical problems, and explore cybersecurity through malware analysis and machine learning.",
  resume: "/documents/resume.pdf",
  resumeAvailable: true,
};

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/raihannur/" },
  { label: "GitHub", href: "https://github.com/Hanskuy" },
  { label: "Email", href: `mailto:${personalInfo.email}` },
];

export const projects = [
  {
    id: "airmalysis",
    title: "AirMalysis",
    subtitle: "Malware Classification System in an Air-Gapped Environment",
    description:
      "Built a Windows PE malware classification system using Cuckoo3 Sandbox and machine learning in an air-gapped environment.",
    technologies: [
      "Python",
      "Linux",
      "Cuckoo3 Sandbox",
      "XGBoost",
      "Machine Learning",
      "Malware Analysis",
    ],
    metrics: [
      { value: "93.94%", label: "Benign vs Malware Classification Accuracy" },
      { value: "73.88%", label: "Malware Family Classification Accuracy" },
      { value: "16", label: "Malware Families" },
    ],
    workflow: [
      "Windows PE Sample",
      "Cuckoo3 Sandbox",
      "Dynamic Analysis",
      "Behavioral Data",
      "Data Preparation",
      "Machine Learning",
      "Classification",
    ],
    image: "/images/airmalysis-analysis-result.png",
    imageAlt:
      "AirMalysis malware analysis result showing CVSS score, malware classification, family, confidence, and file information.",
    demoUrl: "https://www.youtube.com/watch?v=wWrqxlFdIW4&t=3s",
    demoEmbedUrl: "https://www.youtube-nocookie.com/embed/wWrqxlFdIW4?start=3",
  },
  {
    id: "egrc",
    title: "EGRC Web Application",
    subtitle: "Enterprise Governance, Risk and Compliance",
    context: "Full Stack Developer Internship at Perumda Air Minum Tirta Raharja",
    description:
      "Contributed to an internal EGRC application, resolving frontend and backend issues and implementing improvements based on internal requirements.",
    technologies: [
      "PHP",
      "JavaScript",
      "CodeIgniter",
      "SQL",
      "MySQL",
      "HTML",
      "CSS",
      "Git",
    ],
    highlight: "50+ bugs resolved",
  },
  {
    id: "research",
    title: "Automated Malware Behavioral Dataset Construction",
    subtitle: "Cybersecurity Research",
    description:
      "Academic research on automated malware behavioral dataset construction using Cuckoo3 Sandbox in an air-gapped environment.",
    technologies: [
      "Dynamic Malware Analysis",
      "Cuckoo3 Sandbox",
      "Behavioral Datasets",
      "Data Preparation",
      "Cybersecurity",
    ],
    image: "/images/malware-dataset-pipeline.png",
    imageAlt:
      "Dataset construction pipeline from MalwareBazaar sample collection through Cuckoo3 analysis to a structured CSV dataset.",
    publicationType: "Conference Paper",
    publicationTitle:
      "Automated Construction of Malware Behavior Datasets Using Cuckoo3 Sandbox in an Air-Gap Environment",
    publicationRole: "Author & Presenter, EECSI 2026",
  },
];

export const experience = {
  company: "Perumda Air Minum Tirta Raharja",
  location: "Cimahi, Indonesia",
  role: "Full Stack Developer Intern",
  period: "June 2025 - September 2025",
  context: "Enterprise Governance, Risk and Compliance web application",
  responsibilities: [
    "Developed and maintained frontend and backend functionality for the EGRC web application.",
    "Analyzed, debugged, and resolved more than 50 frontend and backend bugs.",
    "Implemented feature improvements based on internal requirements.",
    "Collaborated across teams and participated in code review and documentation.",
  ],
};

export const skillGroups = [
  {
    label: "Development",
    items: [
      "Python",
      "PHP",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "HTML",
      "CSS",
      "CodeIgniter",
      "SQL",
      "MySQL",
      "Git",
    ],
  },
  {
    label: "Security",
    items: [
      "Linux",
      "Computer Networking",
      "Cybersecurity",
      "Malware Analysis",
      "Cuckoo3 Sandbox",
      "DevSecOps",
    ],
  },
  {
    label: "Data / Machine Learning",
    items: ["Machine Learning", "XGBoost", "Data Preparation"],
  },
];

export const education = {
  institution: "Telkom University",
  degree: "Bachelor of Computer Engineering",
  period: "September 2022 - July 2026",
  gpa: "3.38 / 4.00",
  capstone:
    "Malware Family Classification Using Machine Learning in Air-Gapped Environments",
  publicationTitle:
    "Automated Construction of Malware Behavior Datasets Using Cuckoo3 Sandbox in an Air-Gap Environment",
  publicationType: "Conference Paper",
  publicationRole: "Author & Presenter, EECSI 2026",
  lab: "i-SMILE Laboratory",
  field: "Intelligent System and Machine Learning",
  labPeriod: "November - December 2023",
};

export const organization = {
  name: "Telkom University Badminton Club",
  role: "Active Member, later Logistics Coordinator",
  period: "2022 - 2026",
  summary:
    "Participated as an active member before taking on logistics coordination responsibilities. Managed equipment, venue permits, attendance, event logistics, budgets, and expenditure records while coordinating with committees and members.",
  strengths: [
    "Team Coordination",
    "Communication",
    "Event Management",
    "Budget Management",
  ],
};

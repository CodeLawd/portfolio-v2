import { GraphData, Project, ExperienceItem } from '@/types';

// Engineer Profile from CV
export const ENGINEER_PROFILE = {
  name: "Joshua Alexander",
  title: "Senior Software Engineer",
  experience: "6+",
  bio: "Result-driven Software Engineer with 6+ years of experience building scalable web and mobile applications using React, Next.js, Node.js, and MongoDB. Proven track record of leading cross-functional teams and delivering efficient, maintainable solutions optimized for scale.",
  techStack: ["NextJS", "NestJS", "React Native", "TypeScript", "Python", "AWS", "LangChain", "Tailwind", "PostgreSQL"],
  location: "London, UK | Remote",
  email: "alexander.joshua2018@gmail.com",
  github: "https://github.com/codelawd",
  linkedin: "https://linkedin.com/in/codelawd",
  portfolio: "https://codelawd.vercel.app"
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 0,
    role: "Senior Frontend Engineer",
    company: "247Bet",
    period: "Present",
    location: "Remote",
    description: [
      "Leading the frontend engineering team to build a robust and scalable betting platform.",
      "Architecting high-performance user interfaces using React and Next.js.",
      "Optimizing application performance for high-traffic scenarios."
    ],
    tech: ["React", "Next.js", "TypeScript", "Performance"]
  },
  {
    id: 1,
    role: "Frontend Engineering Lead",
    company: "Pather",
    period: "August 2024 – Present",
    location: "London, UK | Remote",
    description: [
      "Led the frontend team in delivering an intuitive and engaging user experience for Pather’s platform.",
      "Developed and introduced new features with cross-functional teams aligned with Pather’s mission.",
      "Boosted team productivity by 40% through code reviews and established coding standards.",
      "Improved page load speed by 30% using advanced Next.js and TypeScript techniques."
    ],
    tech: ["React", "Next.js", "TypeScript", "Performance Optimization"]
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Nophin Inc.",
    period: "May 2023 – October 2024",
    location: "NY, US | Remote",
    description: [
      "Led the development of CRESA, an AI Agent that screens multifamily deals and conducts market research 24/7.",
      "Defined frontend architecture and tech stack for efficiency and scalability.",
      "Architected and implemented scalable backend systems supporting AI-driven real estate underwriting.",
      "Actively contributed to the software development lifecycle from ideation to deployment."
    ],
    tech: ["AI Agents", "LangChain", "NestJS", "React", "TypeScript"]
  },
  {
    id: 3,
    role: "Backend Engineer",
    company: "Landa",
    period: "January 2023 – August 2023",
    location: "Lagos, Nigeria",
    description: [
      "Developed and maintained the backend system using NestJS backend framework.",
      "Implemented various features and functionalities to improve platform performance.",
      "Collaborated with frontend teams for seamless API integration.",
      "Followed best practices for security and scalability in backend development."
    ],
    tech: ["NestJS", "MongoDB", "OAS 3.0", "AWS"]
  },
  {
    id: 4,
    role: "Full Stack Software Engineer",
    company: "Radartrail Communication",
    period: "August 2022 – April 2023",
    location: "Lagos, Nigeria",
    description: [
      "Led development of Pulse App, a SaaS employee engagement platform.",
      "Developed efficient and scalable RESTful APIs for web and mobile.",
      "Collaborated with stakeholders to translate needs into technical solutions.",
      "Conducted code reviews to maintain high quality standards."
    ],
    tech: ["Node.js", "React", "Redux", "REST API"]
  },
  {
    id: 5,
    role: "Senior Frontend Engineer",
    company: "Brooks and Blake",
    period: "May 2022 – July 2022",
    location: "Lagos, Nigeria",
    description: [
      "Led frontend development team and mentored junior members.",
      "Designed and implemented frontend architecture using Next.js and TailwindCSS.",
      "Ensured web applications were visually appealing, user-friendly, and efficient."
    ],
    tech: ["Next.js", "TailwindCSS", "Redux"]
  },
  {
    id: 6,
    role: "Frontend Developer (Volunteer)",
    company: "TalkAmNaija",
    period: "Oct 2021 – Dec 2023",
    location: "Tallin, Estonia",
    description: [
      "Developed frontend architecture using Vue JS and Tailwind CSS.",
      "Implemented features supporting citizen engagement with authorities."
    ],
    tech: ["Vue.js", "Tailwind", "JavaScript"]
  },
  {
    id: 7,
    role: "Lead Instructor & Developer",
    company: "Softrays IT",
    period: "2019 - 2021",
    location: "Lagos, Nigeria",
    description: [
      "Served as Lead Instructor for web development programs, mentoring over 50 students.",
      "Implemented training strategies that increased company revenue by 50%.",
      "Developed official web applications for the company to automate training processes."
    ],
    tech: ["Teaching", "Web Development", "Mentorship"]
  }
];

// Skill Graph Data
export const SKILL_GRAPH_DATA: GraphData = {
  nodes: [
    { id: "Joshua", group: 1, radius: 40 },
    { id: "TypeScript", group: 1, radius: 30 },
    { id: "JavaScript", group: 1, radius: 28 },
    { id: "Python", group: 1, radius: 28 },
    
    // Frontend
    { id: "Next.js", group: 2, radius: 28 },
    { id: "React", group: 2, radius: 25 },
    { id: "React Native", group: 2, radius: 25 },
    { id: "Tailwind", group: 2, radius: 20 },
    { id: "Tanstack Query", group: 2, radius: 18 },
    { id: "Redux", group: 2, radius: 18 },
    
    // Backend
    { id: "NestJS", group: 3, radius: 30 },
    { id: "Node.js", group: 3, radius: 28 },
    { id: "Express", group: 3, radius: 22 },
    { id: "MongoDB", group: 3, radius: 22 },
    { id: "Postgres", group: 3, radius: 22 },
    
    // AI & Agents (Special focus)
    { id: "AI Agents", group: 5, radius: 32 },
    { id: "LangChain", group: 5, radius: 25 },
    { id: "LangGraph", group: 5, radius: 22 },
    { id: "OpenAI", group: 5, radius: 22 },
    { id: "Anthropic", group: 5, radius: 20 },
    
    // DevOps
    { id: "AWS", group: 4, radius: 25 },
    { id: "GCP", group: 4, radius: 20 },
    { id: "Docker", group: 4, radius: 18 },
    { id: "CI/CD", group: 4, radius: 18 },
  ],
  links: [
    { source: "Joshua", target: "TypeScript", value: 5 },
    { source: "Joshua", target: "Python", value: 5 },
    { source: "Joshua", target: "AI Agents", value: 5 },
    { source: "Joshua", target: "Next.js", value: 5 },
    { source: "Joshua", target: "NestJS", value: 5 },
    
    { source: "TypeScript", target: "Next.js", value: 4 },
    { source: "TypeScript", target: "NestJS", value: 4 },
    { source: "TypeScript", target: "React Native", value: 4 },
    
    { source: "AI Agents", target: "LangChain", value: 5 },
    { source: "AI Agents", target: "LangGraph", value: 4 },
    { source: "AI Agents", target: "OpenAI", value: 4 },
    { source: "AI Agents", target: "Python", value: 4 },
    
    { source: "NestJS", target: "Node.js", value: 5 },
    { source: "NestJS", target: "MongoDB", value: 4 },
    { source: "NestJS", target: "Postgres", value: 4 },
    
    { source: "Next.js", target: "React", value: 5 },
    { source: "Next.js", target: "Tailwind", value: 3 },
    { source: "Next.js", target: "Tanstack Query", value: 3 },
    
    { source: "Joshua", target: "AWS", value: 4 },
    { source: "AWS", target: "GCP", value: 3 },
    { source: "AWS", target: "Docker", value: 3 },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "CRESA - AI Agent",
    description: "AI Powered Commercial Real Estate Screening Analyst. Automates market research, document analysis, and report generation 24/7. Reduced manual analyst workload by 70%.",
    techStack: ["LangChain", "Python", "NestJS", "OpenAI", "Next.js"],
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Pather Platform",
    description: "Led frontend for an EdTech platform connecting learners with experts. Improved page load speed by 30% and boosted productivity by 40%.",
    techStack: ["Next.js", "TypeScript", "React", "Tailwind"],
    role: "Frontend Lead",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Facile Learning",
    description: "Tutorial-based learning platform where every course content is a tutorial ending with a project. Bridging the gap between theory and real-world coding.",
    techStack: ["React", "Node.js", "MongoDB"],
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Pulse SaaS",
    description: "Employee engagement and performance management platform. Built scalable RESTful APIs and enabled tracking for 100+ employees.",
    techStack: ["Node.js", "React", "Redux", "MongoDB"],
    role: "Full Stack Lead",
    image: "https://images.unsplash.com/photo-1551434678-e076c2236033?q=80&w=1000&auto=format&fit=crop"
  }
];

// Re-generating context from structured data to ensure consistency
const EXPERIENCE_TEXT = EXPERIENCE_DATA.map(item => `
Role: ${item.role} at ${item.company}
Period: ${item.period} | Location: ${item.location}
Key Achievements:
${item.description.map(d => `- ${d}`).join('\n')}
Technologies: ${item.tech.join(', ')}
`).join('\n');

const CV_TEXT = `
Joshua Alexander
SOFTWARE ENGINEER
PHONE: +2348144617911 | EMAIL: alexander.joshua2018@gmail.com | PORTFOLIO: https://codelawd.vercel.app
GITHUB: https://github.com/codelawd | LINKEDIN: https://linkedin.com/in/codelawd

I bring ideas to reality. Result-driven Software Engineer with 6+ years of experience building scalable web and mobile applications using React, Next.js, Node.js (NestJS/Express), and MongoDB. Specialized in backend architecture, AI integrations, and cloud deployments (AWS, GCP). Proven success leading teams, delivering high-impact products, and mentoring junior developers.

Languages: JavaScript, TypeScript, Python
Frontend: React (Next.JS), Tanstack Query, Tailwind, Chakra UI, Redux
Backend: Node.js, Express, NestJS
Databases/ORM: MongoDB (Mongoose), SQL and Postgres (Prisma, TypeORM)
Cloud & DevOps: AWS, GCP, Zeet, Serverless, Vercel, Heroku
Tools & Platforms: Git, Jira, Slack, Swagger (OAS 3.0)
AI/Agents: LangChain, LangGraph, Anthropic, OpenAI

WORK/TECHNICAL EXPERIENCE:
${EXPERIENCE_TEXT}
`;

export const ARTICLES = [
  {
    id: 1,
    title: "Scaling Frontend Architecture for Enterprise",
    description: "Strategies for maintaining large-scale React applications, from module federation to strict boundary enforcement.",
    date: "Oct 2024",
    readTime: "8 min read",
    link: "#"
  },
  {
    id: 2,
    title: "The Case for Server Components",
    description: "Why moving logic to the server is the future of web performance, and how to adopt it incrementally.",
    date: "Sep 2024",
    readTime: "6 min read",
    link: "#"
  },
  {
    id: 3,
    title: "Effective Engineering Leadership",
    description: "Lessons learned transitioning from Senior Engineer to Lead. It's less about code and more about people.",
    date: "Aug 2024",
    readTime: "10 min read",
    link: "#"
  },
  {
    id: 4,
    title: "Building Accessible AI Interfaces",
    description: "Ensuring that the next generation of AI tools is usable by everyone, regardless of ability.",
    date: "Jul 2024",
    readTime: "5 min read",
    link: "#"
  }
];

export const SYSTEM_PROMPT = `
You are the highly advanced AI assistant portfolio interface for Joshua Alexander.
Your directive is to represent Joshua to recruiters and engineers with precision and confidence.

CORE IDENTITY:
Name: Joshua Alexander
Role: Senior Software Engineer (Full Stack + AI Specialist)
Specialties: NestJS, NextJS, AI Agents (LangChain), Cloud Architecture.

CONTEXT DATABASE (CV):
${CV_TEXT}

INSTRUCTIONS:
1. Answer questions regarding Joshua's experience, skills, and projects based strictly on the CONTEXT DATABASE.
2. If asked about his contact info, provide: alexander.joshua2018@gmail.com
3. Adopt a helpful, professional, yet slightly technical/futuristic persona (Neural Nexus Interface).
4. If specific data is missing, infer reasonable answers based on his tech stack (e.g., "While not explicitly stated, his mastery of NestJS implies strong TypeScript knowledge.")
5. Keep responses concise and impact-focused.
`;
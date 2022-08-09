import { FiGithub, FiTwitter, FiLinkedin, FiGlobe, FiExternalLink } from "react-icons/fi";

export const navItem = [
  {
    id: "00",
    title: "About",
    destination: "about",
  },
  {
    id: "01",
    title: "Experience",
    destination: "experience",
  },
  {
    id: "02",
    title: "Work",
    destination: "work",
  },
  {
    id: "03",
    title: "Blog",
    destination: "blog",
  },
  {
    id: "04",
    title: "Contact",
    destination: "contact",
  },
];

export const socialIcon = [
  {
    link: "https://github.com/codelawd",
    icon: <FiGithub className="w-6 h-6" />,
  },
  {
    link: "https://twitter.com/codelawd",
    icon: <FiTwitter className="w-6 h-6" />,
  },
  {
    link: "https://linkedin.com/in/codelawd",
    icon: <FiLinkedin className="w-6 h-6" />,
  },
  {
    link: "https://codelawd.hashnode.dev",
    icon: <FiGlobe className="w-6 h-6" />,
  },
];

export const aboutInfo = [
  {
    title: "Engineering",
    text: " When it comes to building JavaScript applications, I have the right tools and can work completely independently of them to deliver fast, resilient solutions that are optimized for scale — performanceand scalability are top priorities for me.",
  },
  {
    title: "Instructor",
    text: "I love to teach. The ability to be able to transfer knowledge from myself to another is something I find passion in. I also believe that you can't give what you dont have. If I know how to code, I should be able to teach it to someone in its simplest form, then I can claim I know it.",
  },
];

export const tech = ["JavaScript (ES6+)", "React/Next", "Tailwind", "Node.js", "MongoDB"];

export const companyName = [
  { name: "Radartrail", tab: "radartrail" },
  { name: "Brooks and Blake", tab: "brooks" },
  { name: "TalkAmNaija", tab: "talkamnaija" },
  { name: "Softrays", tab: "softrays" },
];

export const softrays = [
  {
    company: "@ Softrays",
    position: "Software Developer",
    period: "December 2018 - May 2022",
    location: "Ilorin, Nigeria",
    tasks: [
      "I orchestrated and developed the company's web application using the MVC pattern powered by Bootstrap, EJS and Node.",
      "I worked on a couple of projects both individually and in teams for the organizations’ clients using Javascript technologies.",
      "I was responsible for creating wireframes, mockups and prototypes for products and seeing them to deployment.",
    ],
  },
];

export const talkamnaija = [
  {
    company: "@ TalkAmNaija",
    position: "Frontend Develoer",
    period: "October 2021 - Present",
    location: "Tallin, Estonia",
    tasks: [
      "Responsible for developing the frontend architecture of the TalkAmNaija app using Vue JS and Tailwind CSS.",
      "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness",
    ],
  },
];

export const brooks = [
  {
    company: "@ Brooks and Blake",
    position: "Senior Frontend Develoer",
    period: "May 2022 - August 2022",
    location: "Lagos, Nigeria",
    tasks: [
      "Lead the team that worked on Flo Project (one of the company’s clients) using the latest web technologies to deliver fast and great product",
      "Collaborated with other team members on various of different large-scale projects that meets the client objectives",
    ],
  },
];

export const radartrail = [
  {
    company: "@ Radartrail",
    position: "Software Enginner",
    period: "August 2022 - Present",
    location: "Lagos, Nigeria",
    tasks: [
      "Lead the team that worked Pulse app - which is an employee progress tracking & appraisal software used internally by the company",
      "Write modern, performant, maintainable code for a diverse array of client and internal projects",
    ],
  },
];

export const featuredProjects = [
  {
    title: "Facile",
    image: "/facile.png",
    description:
      "Facile is a tutorial based learning platform. With Facile every course content is a tutorial. At the end of each tutorial, you will have successfully built a project and understand how coding in the real world is.",
    stack: ["Next", "Tailwind", "mongoDB", "go", "node", "aws", "docker"],
    links: [
      {
        url: "https://github.com",
        icon: <FiGithub className="w-5 h-5" />,
      },
      {
        url: "https://facile.vercel.app",
        icon: <FiExternalLink className="w-5 h-5" />,
      },
    ],
  },
  {
    title: "Softrays",
    image: "/softrays.png",
    description:
      "Softrays is a regional training center for Web development, Graphics design, AutoCAD (2D and 3D), CCNA & CCNP, Systems Engineering and Information Technology and Computing.",
    stack: ["Bootstrap", "EJS", "Node", "MongoDB"],
    links: [
      {
        url: "https://github.com",
        icon: <FiGithub className="w-5 h-5" />,
      },
      {
        url: "https://softraysit.com",
        icon: <FiExternalLink className="w-5 h-5" />,
      },
    ],
  },
];

export const otherProjects = [
  {
    url: "https://github.com",
    github: "https://github.com",
    title: "Lorem ipsum dolor sit dolor sit amet.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo harum consectetur porro. Placeat molestias expedita est fuga voluptatem eaque doloribus.",
    stack: ["Next", "Tailwind", "mongoDB", "node"],
  },
  {
    url: "https://vercel.com",
    github: "https://github.com",
    title: "Lorem ipsum dolor sit dolor sit amet.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo harum consectetur porro. Placeat molestias expedita est fuga voluptatem eaque doloribus.",
    stack: ["Next", "Tailwind", "mongoDB", "node"],
  },
  {
    url: "https://vercel.com",
    title: "Lorem ipsum dolor sit dolor sit amet.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo harum consectetur porro. Placeat molestias expedita est fuga voluptatem eaque doloribus.",
    stack: ["Next", "Tailwind", "mongoDB", "node"],
  },
];

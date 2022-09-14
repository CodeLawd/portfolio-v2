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

export const tech = ["NextJS (React)", "React Native", "Tailwind", "Node.js (Express)", "MongoDB (Mongoose)"];

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
    stack: ["Next", "Tailwind", "mongoDB", "go", "node"],
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
  // {
  //   title: "Personal Portfolio",
  //   image: "/personal.png",
  //   description: "Second iteration of my personal website. Built with a NextJS and Tailwind",
  //   stack: ["NextJS", "Tailwind", "Framer motion"],
  //   links: [
  //     {
  //       url: "https://github.com",
  //       icon: <FiGithub className="w-5 h-5" />,
  //     },
  //     {
  //       url: "https://codelawd.vercel.app",
  //       icon: <FiExternalLink className="w-5 h-5" />,
  //     },
  //   ],
  // },
];

export const otherProjects = [
  {
    url: "https://sme.radartrail.com/",
    github: "#",
    title: "Radartrail SME Platform",
    description: "Second iteration of my personal website. Built with a NextJS and Tailwind.",
    stack: ["NextJS", "Tailwind", "Framer Motion"],
  },
  {
    url: "https://codelawd.vercel.app",
    github: "https://github.com/CodeLawd/portfolio-v2",
    title: "Personal Portfolio V2",
    description: "Second iteration of my personal website. Built with a NextJS and Tailwind.",
    stack: ["NextJS", "Tailwind", "Framer Motion"],
  },
  {
    url: "https://codelawd-v1.vercel.app/",
    github: "https://github.com/CodeLawd/personal-portfolio-reactjs-and-sanity",
    title: "Personal Portfolio V1",
    description:
      "The first iteration of my personal website. Built this while mastering React. This is a full stack portfolio built using my knowledge of React, Sass and Sanity.io (unified content platform that powers better digital experiences).",
    stack: ["React", "SCSS", "Sanity.io", "Framer Motion"],
  },
  {
    url: "https://codelawd.github.io/candycrush/",
    github: "https://codelawd.github.io/candycrush/",
    title: "Candy Crush Saga",
    description:
      "This is a simple candy crush game built with JavaScript. Built this project in 2020 while teaching some set of student about JavaScript in a coding bootcamp. I had a lot of fun building this from scratch.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    url: "https://codelawd.github.io/easybank/",
    github: "https://github.com/CodeLawd/easybank",
    title: "Easybank Landing Page.",
    description:
      "This is the Easybank Langing Page challenge on frontendmentor. Built this way back 2019 when I was trying to master Bootstrap. I had a lot of fun building out this great project.",
    stack: ["HTML", "CSS", "Bootstrap"],
  },
  {
    url: "https://codelawd.github.io/tindog/",
    github: "https://github.com/CodeLawd/tindog",
    title: "Tindog Landing Page.",
    description:
      "This is a project I built back in 2019. I built this project while teaching some set of student responsive design with HTML, CSS and Bootstrap.",
    stack: ["HTML", "CSS", "Bootstrap"],
  },
];

import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiGlobe,
  FiExternalLink,
} from "react-icons/fi";

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

export const tech = [
  "NextJS (React)",
  "React Native",
  "Tailwind",
  "Node.js (Express, Nest)",
  "MongoDB (Mongoose)",
];

export const companyName = [
  { name: "247Bet", tab: "247bet" },
  { name: "Pather", tab: "pather" },
  { name: "Nophin", tab: "nophin" },
  { name: "Landa", tab: "landa" },
  { name: "Radartrail", tab: "radartrail" },
  { name: "Brooks and Blake", tab: "brooks" },
  { name: "TalkAmNaija", tab: "talkamnaija" },
  { name: "Softrays", tab: "softrays" },
];

export const bet247 = {
  company: "@ 247Bet",
  position: "Senior Frontend Engineer",
  period: "August 2025 - Present",
  location: "Lagos State, Nigeria | On-site",
  tasks: [
    "Building the 247Bet web and mobile apps from scratch, shaping the product's look, feel, and ensuring optimal performance.",
    "Guide the frontend team and mentor junior developers while keeping the codebase scalable and creative.",
    "Implement modern frontend architecture using React.js and related technologies for web and mobile platforms.",
    "Establish best practices and coding standards to ensure high-quality, maintainable code across the team.",
  ],
};

export const pather = {
  company: "@ Pather",
  position: "Frontend Engineering Lead",
  period: "August 2024 - April 2025",
  location: "London, United Kingdom | Remote",
  tasks: [
    "Led the frontend team in delivering an intuitive and engaging user experience for Pather's platform, where learners could connect with industry experts to advance their skills.",
    "Assigned tasks, conducted code reviews, and established coding standards that built a culture of excellence, boosting team productivity by 40% and accelerating feature delivery.",
    "Advanced cutting-edge front-end technologies, including React, Next.js, and TypeScript, for better performance, accessibility, and scalability of the platform.",
    "Achieved a 30% improvement in page load speed through optimization and best practices implementation.",
  ],
};

export const nophin = {
  company: "@ Nophin",
  position: "Software Engineer",
  period: "May 2023 - October 2024",
  location: "New York, USA | Remote",
  tasks: [
    "Frontend Lead: Defined the frontend architecture and technology stack to ensure efficiency and scalability.",
    "Established coding standards and best practices for consistent and maintainable code.",
    "Cultivated a collaborative and innovative team environment to deliver high-quality frontend experiences.",
    "Architect, design, and implement scalable and efficient backend systems and APIs to support the company's AI-driven commercial real estate underwriting platform",
    "Implemented CI/CD pipeline using Serverless, AWS and Git.",
    "Develop and maintain robust, reliable, and secure backend services using technologies such as TypeScript and Nest.js.",
    "Followed best practices for security and scalability in the backend development process.",
  ],
};

export const landa = {
  company: "@ Landa",
  position: "Backend Engineer",
  period: "January 2023 - August 2023",
  location: "Contract",
  tasks: [
    "Developed and maintained the backend system using NestJS backend framework.",
    "Implemented various features and functionalities to improve platform performance and user experience.",
    "Utilized MongoDB for data storage and management, including creating and optimizing database schemas.",
    "Implemented documentation for API endpoints utilizing the OpenAPI Specification (OAS) 3.0 and Swagger tool.",
    "Implemented CI/CD pipeline using Serverless, AWS and Git.",
    "Collaborated with the front-end development team to ensure seamless integration of the backend with the front-end.",
    "Followed best practices for security and scalability in the backend development process.",
  ],
};

export const softrays = {
  company: "@ Softrays",
  position: "Software Developer",
  period: "December 2018 - May 2022",
  location: "Ilorin, Nigeria",
  tasks: [
    "Developed and maintained the company's web application using the MVC pattern, utilizing technologies such as Bootstrap, EJS, and Node.",
    "Worked on various projects individually and as part of a team, using Javascript technologies to deliver high-quality solutions for clients.",
    "Created wireframes, mockups, and prototypes for products and oversaw their deployment, ensuring that projects were delivered on time and to high standards.",
    "Trained over 100 students in core programming concepts, web accessibility, and scalable web application development, emphasizing the importance of building reusable components and designing user-friendly interfaces.",
  ],
};

export const talkamnaija = {
  company: "@ TalkAmNaija",
  position: "Frontend Developer",
  period: "October 2021 - Present",
  location: "Tallin, Estonia",
  tasks: [
    "Developing the frontend architecture of the TalkAmNaija platform using Vue JS and Tailwind CSS.",
    "Collaborating with the team to design and implement features that support the platform's goal of enabling citizen engagement with authorities.",
    "Ensuring that the platform is user-friendly and accessible to users of all levels of technical proficiency.",
    "Participating in code reviews and other team-wide processes to ensure that the platform is of high quality and meets the needs of its users.",
    "Contribute to the ongoing development and evolution of the platform, working to improve its functionality and user experience.",
    "Help to support the overall mission of the platform by enabling citizens to more effectively engage with authorities and report societal issues.",
  ],
};

export const brooks = {
  company: "@ Brooks and Blake",
  position: "Senior Frontend Developer",
  period: "May 2022 - August 2022",
  location: "Lagos, Nigeria",
  tasks: [
    "Led the frontend development team, providing guidance and support to junior team members as needed.",
    "Designed and implemented the frontend architecture of web applications, using technologies such as React (NextJS), TailwindCSS, Redux.",
    "Collaborated with the design and back-end development teams to ensure that web applications were visually appealing, user-friendly, and efficient.",
    "Participated in code reviews and provided feedback to improve the quality and efficiency of the codebase. ",
    "Stayed up-to-date with the latest developments in frontend development and applied this knowledge to your work to ensure that the company's web applications were cutting-edge and competitive.",
  ],
};

export const radartrail = {
  company: "@ Radartrail",
  position: "Software Engineer",
  period: "August 2022 - Present",
  location: "Lagos, Nigeria",
  tasks: [
    "Led the development of the Pulse App, a SASS employee engagement and performance management platform.",
    "Develop RESTful APIs for web and mobile applications, ensuring that they are efficient, scalable, and maintainable.",
    "Work with clients to understand their needs and requirements, and translate those into technical solutions",
    "Work closely with project managers and other stakeholders to ensure that projects are delivered on time and to high standards.",
    "Collaborate with team members to design and implement solutions that meet the needs of clients",
    "Conducted code reviews and made updates to improve efficiency and maintain high quality standards.",
  ],
};

export const featuredProjects = [
  {
    title: "Facile",
    image: "/facile.png",
    status: "ongoing",
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
    status: "completed",
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
    url: "http://bold-nu.vercel.app/",
    github: "#",
    title: "Boldo Landing page",
    description:
      "Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.",
    stack: ["NextJS", "Tailwind", "Framer Motion"],
  },
  {
    url: "http://josh-airbnb.vercel.app/",
    github: "#",
    title: "Airbnb Landing page",
    description:
      "This is the landing page of the Airbnb Platform. I built this while taking a React assesement for a job I applied for.",
    stack: ["NextJS", "Tailwind", "Framer Motion"],
  },
  {
    url: "https://sme.radartrail.com/",
    github: "#",
    title: "Radartrail SME Platform",
    description:
      "This is the SME platform for Radartrail. Clients/Customers can choose a plan that suites their business needs.",
    stack: ["NextJS", "Tailwind", "Framer Motion"],
  },
  {
    url: "https://codelawd.vercel.app",
    github: "https://github.com/CodeLawd/portfolio-v2",
    title: "Personal Portfolio V2",
    description:
      "Second iteration of my personal website. Built with a NextJS and Tailwind.",
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
  // {
  //   url: "https://codelawd.github.io/candycrush/",
  //   github: "https://codelawd.github.io/candycrush/",
  //   title: "Candy Crush Saga",
  //   description:
  //     "This is a simple candy crush game built with JavaScript. Built this project in 2020 while teaching some set of student about JavaScript in a coding bootcamp. I had a lot of fun building this from scratch.",
  //   stack: ["HTML", "CSS", "JavaScript"],
  // },
  // {
  //   url: "https://codelawd.github.io/easybank/",
  //   github: "https://github.com/CodeLawd/easybank",
  //   title: "Easybank Landing Page.",
  //   description:
  //     "This is the Easybank Langing Page challenge on frontendmentor. Built this way back 2019 when I was trying to master Bootstrap. I had a lot of fun building out this great project.",
  //   stack: ["HTML", "CSS", "Bootstrap"],
  // },
  // {
  //   url: "https://codelawd.github.io/tindog/",
  //   github: "https://github.com/CodeLawd/tindog",
  //   title: "Tindog Landing Page.",
  //   description:
  //     "This is a project I built back in 2019. I built this project while teaching some set of student responsive design with HTML, CSS and Bootstrap.",
  //   stack: ["HTML", "CSS", "Bootstrap"],
  // },
];

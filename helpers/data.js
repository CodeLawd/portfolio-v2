import { FiGithub, FiTwitter, FiLinkedin, FiGlobe } from "react-icons/fi";

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

export const workPlace = [
  {
    company: "@ Softrays",
    position: "Software Develoer",
    period: "December 2018 - May 2022",
    tasks: [
      "The ability to be able to transfer knowledge from myself to another is something I find passion in. I also believe that you can't give what you dont have.",
      "The ability to be able to transfer knowledge from myself to another is something I find passion in. I also believe that you can't give what you dont have.",
      "The ability to be able to transfer knowledge from myself to another is something I find passion in. I also believe that you can't give what you dont have.",
    ],
  },
];

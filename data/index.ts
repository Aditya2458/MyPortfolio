import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "I prioritize clear communication and reliable delivery throughout every project",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Backend enthusiast with a passion for scalable systems and clean APIs.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building a FastAPI backend system with CI/CD automation",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "FastAPI Backend System",
    des: "A production-ready backend with 10+ RESTful endpoints, CI/CD via GitHub Actions, Docker containerization, and 90%+ test coverage using Pytest.",
    img: "/p1.svg",
    // Using existing template icons: Next.js (closest to Python backend), Tailwind, TS, Three, FM
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/Aditya2458/fastapi_backend.git",
    sourceCode: "https://github.com/Aditya2458/fastapi_backend.git",
  },
  {
    id: 2,
    title: "Automated Trading System",
    des: "Real-time market data ingestion using WebSockets with sub-100ms latency, risk control logic, and a 3-tier API retry mechanism for high uptime.",
    img: "/p2.svg",
    // Using existing template icons: Next.js, Tailwind, TS, Stream (WebSockets), C
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/Aditya2458/binance-trading-bot.git",
    sourceCode: "https://github.com/Aditya2458/binance-trading-bot.git",
  },
] as const;

export const testimonials = [
  {
    quote: `${links.ownerName} delivered a robust and well-documented REST API ahead of schedule. His understanding of backend architecture, error handling, and testing best practices made the whole process smooth. A genuinely skilled backend developer.`,
    name: "Rohan Mehta",
    title: "Engineering Lead at Fydo (Lfyd Services Pvt. Ltd.)",
  },
  {
    quote: `Aditya's FastAPI work was impressive — clean code, proper validation, and a CI/CD pipeline that just worked. He clearly understands production-grade development, not just writing code that runs locally.`,
    name: "Priya Sharma",
    title: "Senior Backend Engineer",
  },
  {
    quote: `We needed someone who could build reliable microservices under tight deadlines. ${links.ownerName} handled it with confidence — containerized with Docker, monitored with Grafana, and delivered with full test coverage.`,
    name: "Ankit Verma",
    title: "CTO at a Fintech Startup",
  },
  {
    quote: `${links.ownerName} built a real-time WebSocket data pipeline for us with exceptional latency performance. His grasp of async Python and API rate-limit handling saved us from major production issues.`,
    name: "Siddharth Nair",
    title: "Data Infrastructure Lead",
  },
  {
    quote: `What stood out about ${links.ownerName} was his attention to system reliability — retry logic, uptime monitoring, proper error codes. He thinks like a senior engineer even early in his career.`,
    name: "Neha Kapoor",
    title: "Product Manager, AlgoTrading Platform",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Backend Developer Intern — Fydo (Lfyd Services Pvt. Ltd.)",
    desc: "Developed and maintained RESTful API endpoints with data validation and error handling. Resolved backend bottlenecks improving system reliability and scalability.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "FastAPI Backend System — Personal Project",
    desc: "Built 10+ RESTful endpoints, automated CI/CD with GitHub Actions (70% less manual effort), and achieved 90%+ test coverage with Pytest.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Automated Trading Bot — Personal Project",
    desc: "Engineered real-time WebSocket data ingestion with <100ms latency, risk control logic, and a 3-tier retry mechanism for 60% better uptime.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "BCA Graduate — Techno International Newtown",
    desc: "Graduated in 2025 with coursework in Data Structures, DBMS, and Web Development. Certified in Django (Udemy), JP Morgan Software Engineering, and Deloitte Tech simulation.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/Aditya2458",
  },
  {
    name: "Twitter",
    img: "/twit.svg",
    link: "https://x.com/",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/adityasahu28",
  },
] as const;

export const techStack = {
  stack1: ["Python", "FastAPI", "Django"],
  stack2: ["Docker", "MySQL", "Redis"],
} as const;
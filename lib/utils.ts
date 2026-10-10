import { FaGithub, FaYoutube } from "react-icons/fa6";

export const navItems = [
  {
    name: "Home",
    link: "hero",
  },
  {
    name: "About",
    link: "about",
  },
  {
    name: "Profile",
    link: "profile",
  },
  {
    name: "Projects",
    link: "projects",
  },
  {
    name: "Contact",
    link: "contact",
  },
];

export const contacts = [
  {
    name: "Mail",
    link: "mailto:chrysayita@gmail.com",
  },
  {
    name: "Fiverr",
    link: "https://www.fiverr.com/users/chrysyt",
  },
  {
    name: "Instagram",
    link: "https://instagram.com/_creative_ambition",
  },
  {
    name: "Facebook",
    link: "https://web.facebook.com/share/g/NY81ZaaMtJ6qrrPm/",
  },
];

export const socials = [
  {
    name: "Github",
    Icon: FaGithub,
    link: "https://github.com/creativeambition/",
  },
  {
    name: "YouTube",
    Icon: FaYoutube,
    link: "https://youtube.com/@creative-ambition/",
  },
];

export const FrontEndSkills = [
  {
    name: "TypeScript",
    img: "/assets/StackLogos/typescript.svg",
  },
];
export const BackEndSkills = [
  {
    name: "Node",
    img: "/assets/StackLogos/node.png",
  },
  {
    name: "Next",
    img: "/assets/StackLogos/next.png",
  },
  {
    name: "Strapi",
    img: "/assets/StackLogos/strapi.png",
  },
];
export const dbSkills = [
  {
    name: "Postgres",
    img: "/assets/StackLogos/postgres.png",
  },
  {
    name: "Mongo DB",
    img: "/assets/StackLogos/mongo.png",
  },
  {
    name: "Redis",
    img: "/assets/StackLogos/redis.svg",
  },
];
export const otherSkills = [
  {
    name: "Git",
    img: "/assets/StackLogos/git.png",
  },
  {
    name: "GitHub",
    img: "/assets/StackLogos/github.svg",
  },
  {
    name: "AWS",
    img: "/assets/StackLogos/aws-white.png",
  },
  {
    name: "Google Cloud",
    img: "/assets/StackLogos/gcp.png",
  },
  {
    name: "Docker",
    img: "/assets/StackLogos/docker.svg",
  },
  {
    name: "Linux / Shell",
    img: "/assets/StackLogos/linux.svg",
  },
];
export const testingSkills = [
  {
    name: "Playwright",
    img: "/assets/StackLogos/playwright.svg",
  },
];
export const mlSkills = [
  {
    name: "Python",
    img: "/assets/StackLogos/python.svg",
  },
  {
    name: "PyTorch",
    img: "/assets/StackLogos/pytorch.svg",
  },
  {
    name: "TensorFlow",
    img: "/assets/StackLogos/tensorflow.svg",
  },
  {
    name: "scikit-learn",
    img: "/assets/StackLogos/scikitlearn.svg",
  },
];
export const aiEngineeringSkills = [
  {
    name: "Hugging Face",
    img: "/assets/StackLogos/huggingface.svg",
  },
  {
    name: "LangChain",
    img: "/assets/StackLogos/langchain.svg",
  },
];

// `link` is optional; cards fall back to the GitHub profile.
export const projects: {
  title: string;
  techs: string[];
  thumbnail: string;
  description: string;
  link?: string;
}[] = [
  // Thumbnails for the first five are generated placeholders; swap in screenshots.
  {
    title: "Newhorizn",
    techs: [],
    thumbnail: "/assets/ProjectThumbnails/newhorizn.svg",
    description: "Find and book accommodations",
  },
  {
    title: "Dome",
    techs: [],
    thumbnail: "/assets/ProjectThumbnails/dome.svg",
    description:
      "Course management & timetabling for students, lecturers and staff",
  },
  {
    title: "SumurAI",
    techs: ["/assets/StackLogos/huggingface.svg"],
    thumbnail: "/assets/ProjectThumbnails/sumurai.svg",
    description:
      "AI chatbot running inference on the DeepSeek R1 model via Hugging Face",
  },
  {
    title: "Flaura",
    techs: [],
    thumbnail: "/assets/ProjectThumbnails/flaura.svg",
    description: "Automatic payment disbursements",
  },
  {
    title: "GTM-Copilot",
    techs: [],
    thumbnail: "/assets/ProjectThumbnails/gtm-copilot.svg",
    description: "Go-to-market copilot for solo founders",
  },
  {
    title: "La Ultimate Collection",
    techs: [
      "/assets/StackLogos/astro.png",
      "/assets/StackLogos/sass.png",
      "/assets/StackLogos/next.png",
      "/assets/StackLogos/supabase.png",
    ],
    thumbnail: "/assets/ProjectThumbnails/LUC.webp",
    description: "E-commerce app",
  },
  {
    title: "Movilla",
    techs: [
      "/assets/StackLogos/react.png",
      "/assets/StackLogos/sass.png",
      "/assets/StackLogos/firebase.png",
    ],
    thumbnail: "/assets/ProjectThumbnails/movilla.webp",
    description: "Movie & TV streaming web app powered by TMDB",
  },
  {
    title: "Revo.Wallet",
    techs: [
      "/assets/StackLogos/html.png",
      "/assets/StackLogos/sass.png",
      "/assets/StackLogos/js.png",
    ],
    thumbnail: "/assets/ProjectThumbnails/revo.webp",
    description: "FinTech SaaS landing page",
  },
  {
    title: "Infinity-Readers Club",
    techs: [
      "/assets/StackLogos/solidjs.png",
      "/assets/StackLogos/sass.png",
      "/assets/StackLogos/supabase.png",
      "/assets/StackLogos/firebase.png",
    ],
    thumbnail: "/assets/ProjectThumbnails/e-book.webp",
    description: "E-book web app",
  },
];

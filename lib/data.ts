export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  featured: boolean;
  link?: string;
  github?: string;
  image?: string;
  complexity: number;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'tools' | 'other';
  icon?: string;
}

// Updated portfolio meta
export const portfolio = {
  name: "Walid Hamyani",
  title: "Web Developer & Designer",
  bio: `
    I'm a Web Developer venturing into full-stack, a Brand Identity Designer using Figma & Affinity Designer,
    and a Digital Marketer blending tech with strategies for engagement.

    I craft digital experiences that strengthen brand strategies and nurture customer loyalty with
    steady step-by-step growth, for individuals and businesses.
  `,
  email: "hamyaniw@gmail.com",
  github: "https://github.com/shin-102",
  linkedin: "https://www.linkedin.com/in/walid-hamyani-shin102",
  instagram: "https://www.instagram.com/yourusername", // replace if updated
};


export const projects: Project[] = [
  {
    id: "decipher-agency",
    title: "Decipher Agency | Digital Marketing",
    description: "Digital marketing agency specializing in Brand Identity, Marketing Strategies, and Web Development.",
    tags: ["React", "TailwindCSS"],
    featured: true,
    complexity: 8,
    link: "https://decipher-agency.com",
    image: "https://v1.screenshot.11ty.dev/https%3A%2F%2Fdecipher-agency.com/large/",
  },
  {
    id: "voiturelink",
    title: "VoitureLink | Car Rental Management System",
    description: "SaaS platform for car rental management.",
    tags: ["React", "TailwindCSS", "TypeScript", "TanStack Query", "Radix UI primitives", "NestJS", "Prisma", "PostgreSQL", "Puppeteer"],
    featured: true,
    complexity: 10,
    link: "https://voiturelink.com",
    image: "https://res.cloudinary.com/dpotig7bw/image/upload/v1771380337/www.voiturelink.com_2026-02_VoitureLink_cdx2dq.png",
  },
  {
    id: "a3rab-ecommerce",
    title: "A3rab E-commerce",
    description: "Modern shopping experience with dynamic filtering and Sanity CMS integration.",
    tags: ["React", "TailwindCSS", "Sanity"],
    featured: false,
    complexity: 9,
    link: "https://a3rab.vercel.app",
    image: "https://v1.screenshot.11ty.dev/https%3A%2F%2Fa3rab.vercel.app/large/",
  },
  {
    id: "99-barber",
    title: "99 Barber Website",
    description: "Sleek, high-performance web application for a modern barber shop.",
    tags: ["React", "TailwindCSS"],
    featured: false,
    complexity: 8,
    link: "https://99barber.netlify.app/",
    image: "https://v1.screenshot.11ty.dev/https%3A%2F%2F99barber.netlify.app/large/",
  },
  {
    id: "mc-lixus",
    title: "MC Lixus Website",
    description: "Official website for a construction materials manufacturing plant.",
    tags: ["React", "TailwindCSS"],
    featured: false,
    complexity: 8,
    link: "https://mc-lixus.netlify.app/",
    image: "https://v1.screenshot.11ty.dev/https%3A%2F%2Fmc-lixus.netlify.app/large/",
  },
  {
    id: "locadev-rent",
    title: "Locadev Rent Car",
    description: "Vehicle booking platform with fleet management and responsive design.",
    tags: ["HTML", "TailwindCSS", "JavaScript"],
    featured: false,
    complexity: 7,
    github: "https://github.com/shin-102/LocaDeV",
    link: "https://shin-102.github.io/LocaDeV/",
    image: "https://v1.screenshot.11ty.dev/https%3A%2F%2Fshin-102.github.io%2FLocaDeV%2F/large/",
  },
  {
    id: "optique-demarco",
    title: "Optique Demarco",
    description: "Elegant optical shop interface featuring a digital frame catalogue.",
    tags: ["HTML", "TailwindCSS"],
    featured: false,
    complexity: 6,
    link: "https://optique-demarco.vercel.app",
    image: "https://v1.screenshot.11ty.dev/https%3A%2F%2Foptique-demarco.vercel.app/large/",
  },
  {
    id: "alphabet-landing",
    title: "Alphabet Landing Page",
    description: "High-conversion capture page designed to maximize lead engagement.",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: false,
    complexity: 6,
    link: "https://decipher-agency.github.io/Alphabet/",
    image: "https://v1.screenshot.11ty.dev/https%3A%2F%2Fdecipher-agency.github.io%2FAlphabet%2F/large",
  },
  {
    id: "b-salha-poster",
    title: "B. SALHA Products Poster",
    description: "Promotional poster design for mass distribution products in Marjane supermarkets.",
    tags: ["Print Design", "Advertising", "Branding"],
    featured: false,
    complexity: 5,
    link: "https://drive.google.com/drive/folders/1B6Px1KBGN0yXUoObUbRsosSxgr8s0lHH?usp=sharing",
    image: "https://res.cloudinary.com/dpotig7bw/image/upload/v1769890674/Shoe_Poster_-_2_gukdr9.png",
  },
  {
    id: "amag-branding",
    title: "Amag Branding",
    description: "Complete visual identity overhaul for a garment manufacturing factory.",
    tags: ["Logo", "Branding", "Corporate Identity"],
    featured: false,
    complexity: 5,
    link: "https://res.cloudinary.com/dpotig7bw/image/upload/v1769300756/AMAG_hgg2js.png",
    image: "https://res.cloudinary.com/dpotig7bw/image/upload/v1769300756/AMAG_hgg2js.png",
  },
  {
    id: "aqua-fit-branding",
    title: "Waves Aqua Resort Brand",
    description: "Design of physical assets including billboards, apparel, and advertising posters.",
    tags: ["Apparel", "Print", "Marketing"],
    featured: false,
    complexity: 5,
    image: "https://res.cloudinary.com/dpotig7bw/image/upload/v1769300540/Group_30_psivru.png",
  },
  {
    id: "omri-compta",
    title: "OMRI Compta",
    description: "Professional showcase website for an accounting firm.",
    tags: ["HTML", "Bootstrap"],
    featured: false,
    complexity: 5,
    link: "https://shin-102.github.io/Omri-Compta/",
    image: "https://v1.screenshot.11ty.dev/https%3A%2F%2Fshin-102.github.io%2FOmri-Compta%2F/large/",
  },
];


export const experiences: Experience[] = [
  {
    company: "Freelance Web & Digital Marketing",
    position: "Digital Marketing Freelancer",
    period: "Nov 2022 – Feb 2023",
    description: `
      Website development from design (Figma) to hosting and coding to enhance online presence.
      Visual brand identity design including social media kits and print resources.
    `,
  },
  {
    company: "Waves Aqua Resort",
    position: "Graphic Designer & Marketing Assistant",
    period: "May 2024 – Jun 2024",
    description: `
      Redesigned visual elements to improve brand consistency.
      Social media trends research and campaign planning.
      Created content inventory for affiliate accounts using Affinity Designer.
    `,
  },
];


export const skills: Skill[] = [
  // Web Development / Frontend
  { name: "React", category: "frontend", icon: "/icons/react.png" },
  { name: "TypeScript", category: "frontend", icon: "/icons/TypeScript.png" },
  { name: "Tailwind CSS", category: "frontend", icon: "/icons/Tailwind CSS.png" },
  // { name: "Bootstrap", category: "frontend", icon: "/icons/BootstrapLogo.png" },
  // { name: "Sass", category: "frontend", icon: "/icons/Sass.png" },

  // Web Development / Backend
  { name: "Node.js", category: "backend", icon: "/icons/Node.js.png" },
  // { name: "Express.js", category: "backend", icon: "/icons/Express.png" },
  { name: "Nest.js", category: "backend", icon: "/icons/Nest.js.png" },
  { name: "Prisma", category: "backend", icon: "/icons/prisma-svgrepo-com.png" },
  { name: "PostgreSQL", category: "backend", icon: "/icons/PostgresSQL.png" },
  // { name: "Deno", category: "backend", icon: "/icons/Deno.png" },
  // { name: "MongoDB", category: "backend", icon: "/icons/MongoDB.png" },

  // Design Skills
  { name: "Figma", category: "design", icon: "/icons/FigLogo.png" },
  { name: "Affinity Designer", category: "design", icon: "/icons/Affinity_Designer_2-logo.png" },
  { name: "Affinity Photo", category: "design", icon: "/icons/Affinity_Photo_V2_icon.svg.png" },
  { name: "Adobe Photoshop", category: "design", icon: "/icons/Photoshop.png" },
  { name: "Adobe Illustrator", category: "design", icon: "/icons/Illustrator.png" },
  { name: "Adobe Lightroom", category: "design", icon: "/icons/Photoshop lightroom.png" },
  { name: "Adobe Express", category: "design", icon: "/icons/Adobe-Express-Logo-PNG-1.png" },
  { name: "Canva", category: "design", icon: "/icons/CanvaSVG.png" },

  // Tools & Workflow
  { name: "Vite", category: "tools", icon: "/icons/Vite.js.png" },
  // { name: "Git", category: "tools", icon: "/icons/GitSVG.png" },
  // { name: "GitHub", category: "tools", icon: "/icons/GithubLogo.png" },
  // { name: "Vercel", category: "tools", icon: "/icons/Vercel.png" },
  { name: "Bash", category: "tools", icon: "/icons/Bash.png" },
  // { name: "Fedora Linux", category: "tools", icon: "/icons/Fedora.png" },
  // { name: "VS Code", category: "tools", icon: "/icons/Visual Studio Code (VS Code).png" },

  // Marketing / Other
  // { name: "DaVinci Resolve", category: "other", icon: "/icons/DaVinci_Resolve_Studio.png" },
  // { name: "CapCut", category: "other", icon: "/icons/Capcut-logo.png" },
  { name: "WordPress", category: "other", icon: "/icons/WordPress.png" },
  { name: "Shopify", category: "other", icon: "/icons/Shopify.png" },
  // { name: "Trello", category: "other", icon: "/icons/Trello.png" },
  // { name: "Jira", category: "other", icon: "/icons/Jira.png" },
  // { name: "Meta Business", category: "other", icon: "/icons/meta-12361.png" },
  // { name: "Google Analytics", category: "other", icon: "/icons/Logo_Google_Analytics.png" },
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(p => p.featured);
};

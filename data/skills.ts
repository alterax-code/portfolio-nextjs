export type Skill = {
  name: string;
  usedIn: string;
};

export type SkillDomain = {
  id: string;
  titleFr: string;
  titleEn: string;
  skills: Skill[];
};

export const skillDomains: SkillDomain[] = [
  {
    id: "frontend",
    titleFr: "Frontend & Web",
    titleEn: "Frontend & Web",
    skills: [
      { name: "HTML5 / CSS3",      usedIn: "Portfolio, Stage Plaoweb" },
      { name: "JavaScript (ES6+)", usedIn: "Portfolio, VOLT" },
      { name: "React",             usedIn: "Portfolio" },
      { name: "Next.js",           usedIn: "Portfolio" },
      { name: "Tailwind CSS",      usedIn: "Portfolio" },
    ],
  },
  {
    id: "backend",
    titleFr: "Backend & Bases de données",
    titleEn: "Backend & Databases",
    skills: [
      { name: "Node.js",       usedIn: "VOLT, Portfolio" },
      { name: "PHP / Symfony", usedIn: "Stage Plaoweb" },
      { name: "Python (web)",  usedIn: "PrankGuard" },
      { name: "MySQL / SQL",   usedIn: "Stage Plaoweb" },
      { name: "API REST",      usedIn: "VOLT, Portfolio" },
    ],
  },
  {
    id: "data",
    titleFr: "Data Science & Python",
    titleEn: "Data Science & Python",
    skills: [
      { name: "Python",           usedIn: "PrankGuard, Optimisation 5G" },
      { name: "Machine Learning", usedIn: "Optimisation 5G" },
      { name: "Pandas / NumPy",   usedIn: "Optimisation 5G" },
      { name: "Algorithmes",      usedIn: "Optimisation 5G, Compétition EPITECH" },
    ],
  },
  {
    id: "systems",
    titleFr: "Langages Système & Game Dev",
    titleEn: "Systems & Game Dev",
    skills: [
      { name: "Rust",            usedIn: "VOLT" },
      { name: "Java",            usedIn: "Fist of Steel" },
      { name: "C / C++",         usedIn: "Projets EPITECH" },
      { name: "LibGDX / Pygame", usedIn: "Fist of Steel, Jeu Pygame" },
    ],
  },
  {
    id: "tools",
    titleFr: "Outils & DevOps",
    titleEn: "Tools & DevOps",
    skills: [
      { name: "Git / GitHub",   usedIn: "Tous projets" },
      { name: "Docker",         usedIn: "VOLT" },
      { name: "Linux / Bash",   usedIn: "VOLT, Serveur" },
      { name: "VS Code",        usedIn: "Tous projets" },
      { name: "Vercel / CI-CD", usedIn: "Portfolio" },
    ],
  },
];

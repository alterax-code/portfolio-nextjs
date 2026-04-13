export type Skill = {
  name: string;
  level: number; // 0–100
  labelFr: string;
  labelEn: string;
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
    titleFr: "Développement Frontend",
    titleEn: "Frontend Development",
    skills: [
      { name: "HTML5 / CSS3",      level: 85, labelFr: "Avancé",        labelEn: "Advanced" },
      { name: "JavaScript (ES6+)", level: 80, labelFr: "Avancé",        labelEn: "Advanced" },
      { name: "React",             level: 65, labelFr: "Intermédiaire",  labelEn: "Intermediate" },
      { name: "Next.js",           level: 60, labelFr: "Intermédiaire",  labelEn: "Intermediate" },
      { name: "Tailwind CSS",      level: 60, labelFr: "Intermédiaire",  labelEn: "Intermediate" },
    ],
  },
  {
    id: "backend",
    titleFr: "Développement Backend",
    titleEn: "Backend Development",
    skills: [
      { name: "Node.js",        level: 70, labelFr: "Intermédiaire+", labelEn: "Intermediate+" },
      { name: "PHP / Symfony",  level: 65, labelFr: "Intermédiaire",  labelEn: "Intermediate" },
      { name: "Python (web)",   level: 60, labelFr: "Intermédiaire",  labelEn: "Intermediate" },
      { name: "MySQL / SQL",    level: 70, labelFr: "Intermédiaire+", labelEn: "Intermediate+" },
      { name: "API REST",       level: 75, labelFr: "Avancé",         labelEn: "Advanced" },
    ],
  },
  {
    id: "data",
    titleFr: "Data Science & Python",
    titleEn: "Data Science & Python",
    skills: [
      { name: "Python",          level: 80, labelFr: "Avancé",       labelEn: "Advanced" },
      { name: "Machine Learning",level: 40, labelFr: "Débutant+",    labelEn: "Beginner+" },
      { name: "Pandas / NumPy",  level: 55, labelFr: "Intermédiaire",labelEn: "Intermediate" },
      { name: "Algorithmes",     level: 80, labelFr: "Avancé",       labelEn: "Advanced" },
    ],
  },
  {
    id: "systems",
    titleFr: "Langages Système & Game Dev",
    titleEn: "Systems & Game Dev",
    skills: [
      { name: "Rust",            level: 70, labelFr: "Intermédiaire+", labelEn: "Intermediate+" },
      { name: "Java",            level: 70, labelFr: "Intermédiaire+", labelEn: "Intermediate+" },
      { name: "C / C++",         level: 40, labelFr: "Débutant+",      labelEn: "Beginner+" },
      { name: "LibGDX / Pygame", level: 60, labelFr: "Intermédiaire",  labelEn: "Intermediate" },
    ],
  },
  {
    id: "tools",
    titleFr: "Outils & Méthodes",
    titleEn: "Tools & Methods",
    skills: [
      { name: "Git / GitHub",   level: 80, labelFr: "Avancé",       labelEn: "Advanced" },
      { name: "Docker",         level: 40, labelFr: "Débutant+",    labelEn: "Beginner+" },
      { name: "Linux / Bash",   level: 60, labelFr: "Intermédiaire",labelEn: "Intermediate" },
      { name: "VS Code",        level: 85, labelFr: "Avancé",       labelEn: "Advanced" },
      { name: "Vercel / CI-CD", level: 55, labelFr: "Intermédiaire",labelEn: "Intermediate" },
    ],
  },
];

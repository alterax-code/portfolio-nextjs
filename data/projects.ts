export type Project = {
  id: string;
  title: string;
  stack: string;
  tags: string[];
  date: string;
  github: string;
  descriptionFr: string;
  descriptionEn: string;
  imagePlaceholder: string;
};

export const projects: Project[] = [
  {
    id: "volt",
    title: "VOLT — Langage de programmation",
    stack: "Rust",
    tags: ["Rust", "Bytecode VM", "Compilateur", "CLI"],
    date: "2025",
    github: "https://github.com/alterax-code/volt",
    descriptionFr:
      "Langage de scripting custom construit entièrement en Rust. Comprend un lexer, un parser, un compilateur bytecode et une machine virtuelle. Supporte les pipelines de données, les fonctions, les variables typées. Inclut un web playground interactif pour tester le langage en ligne.",
    descriptionEn:
      "Custom scripting language built entirely in Rust. Includes a lexer, parser, bytecode compiler and virtual machine. Supports data pipelines, functions, typed variables. Features an interactive web playground for online testing.",
    imagePlaceholder: "#1A0A0A",
  },
  {
    id: "opti5g",
    title: "Optimisation 5G — Placement d'antennes",
    stack: "Python / C++",
    tags: ["Python", "C++", "Algorithmes", "Métaheuristiques", "Compétition"],
    date: "2025",
    github: "https://github.com/alterax-code/5g-optimization",
    descriptionFr:
      "Algorithmes d'optimisation pour le placement d'antennes 5G développés pour une compétition EPITECH. Implémentation de recuit simulé, algorithmes génétiques et autres métaheuristiques. Tests sur plusieurs jeux de données (suburbia, epitech, isogrid, manhattan). Résultat : 5e place nationale.",
    descriptionEn:
      "Optimization algorithms for 5G antenna placement developed for an EPITECH competition. Implementation of simulated annealing, genetic algorithms and other metaheuristics. Tested on multiple datasets (suburbia, epitech, isogrid, manhattan). Result: 5th place nationally.",
    imagePlaceholder: "#0A0A1A",
  },
  {
    id: "prankguard",
    title: "PrankGuard — Sécurité Windows",
    stack: "Python",
    tags: ["Python", "OpenCV", "Sécurité", "Windows", "USB"],
    date: "2025",
    github: "https://github.com/alterax-code/prankguard",
    descriptionFr:
      "Application de sécurité Windows avec reconnaissance faciale (OpenCV), gestion des périphériques USB, blocage réseau automatique. Détection d'intrusion en temps réel avec alertes. Interface utilisateur pour la configuration des règles de sécurité.",
    descriptionEn:
      "Windows security application featuring facial recognition (OpenCV), USB device management, automatic network blocking. Real-time intrusion detection with alerts. User interface for security rule configuration.",
    imagePlaceholder: "#0A1A0A",
  },
  {
    id: "fist-of-steel",
    title: "Fist of Steel: Marvin's Vengeance",
    stack: "Java / LibGDX",
    tags: ["Java", "LibGDX", "Game Dev", "2D", "Équipe"],
    date: "2025",
    github: "https://github.com/alterax-code/fist-of-steel",
    descriptionFr:
      "Jeu 2D complet développé en équipe avec LibGDX. Système de sprites animé, intégration de cartes Tiled, intelligence artificielle des ennemis, gestion audio complète, système de menus et de sauvegardes. Projet structuré avec architecture MVC.",
    descriptionEn:
      "Complete 2D game developed as a team project using LibGDX. Features animated sprite system, Tiled map integration, enemy AI, full audio management, menu and save systems. Structured with MVC architecture.",
    imagePlaceholder: "#1A0A1A",
  },
  {
    id: "job-board",
    title: "Job Board — Plateforme emploi",
    stack: "Node.js / React / MySQL",
    tags: ["Node.js", "React", "MySQL", "WebSocket", "REST API"],
    date: "2024-2025",
    github: "https://github.com/alterax-code/job-board",
    descriptionFr:
      "Plateforme de recherche d'emploi complète avec authentification, publication d'offres, candidatures, messagerie en temps réel (WebSocket). API REST avec Node.js/Express, frontend React, base de données MySQL. CRUD complet avec gestion de rôles.",
    descriptionEn:
      "Complete job search platform with authentication, job posting, applications, real-time messaging (WebSocket). REST API with Node.js/Express, React frontend, MySQL database. Full CRUD with role management.",
    imagePlaceholder: "#1A1A0A",
  },
  {
    id: "portfolio",
    title: "Portfolio — Ce site",
    stack: "Next.js / React / TypeScript",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Vercel"],
    date: "2026",
    github: "https://github.com/alterax-code/portfolio",
    descriptionFr:
      "Portfolio professionnel construit avec Next.js et déployé sur Vercel. Thème dark/rouge custom, carrousels interactifs, site bilingue FR/EN, formulaire de contact fonctionnel, responsive design. Déploiement continu via GitHub.",
    descriptionEn:
      "Professional portfolio built with Next.js and deployed on Vercel. Custom dark/red theme, interactive carousels, bilingual FR/EN, working contact form, responsive design. Continuous deployment via GitHub.",
    imagePlaceholder: "#1A0A0A",
  },
  {
    id: "recettes",
    title: "Site de recettes de cuisine",
    stack: "PHP / MySQL",
    tags: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    date: "2024",
    github: "https://github.com/alterax-code/recettes",
    descriptionFr:
      "Application web permettant de créer, partager et découvrir des recettes de cuisine. Authentification complète, CRUD, upload d'images, interface responsive. Premier projet full stack.",
    descriptionEn:
      "Web application for creating, sharing and discovering recipes. Full authentication, CRUD, image upload, responsive interface. First full stack project.",
    imagePlaceholder: "#0A1A1A",
  },
];

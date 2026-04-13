export type TimelineEntry = {
  id: string;
  date: string;
  eventFr: string;
  eventEn: string;
};

export const timelineEntries: TimelineEntry[] = [
  {
    id: "autoformation",
    date: "2023",
    eventFr: "Début de l'autoformation en développement web",
    eventEn: "Started self-teaching web development",
  },
  {
    id: "titre-pro",
    date: "2024",
    eventFr: "Obtention du Titre Pro Développeur Web et Web Mobile (RNCP 5)",
    eventEn: "Earned Professional Web Developer certification (RNCP Level 5)",
  },
  {
    id: "epitech",
    date: "Sept 2024",
    eventFr: "Entrée à EPITECH Paris — MSc Pro Data Science",
    eventEn: "Enrolled at EPITECH Paris — MSc Pro Data Science",
  },
  {
    id: "premiers-projets",
    date: "2024–2025",
    eventFr: "Premiers projets : site recettes PHP, jeu Pygame, portfolio HTML",
    eventEn: "First projects: PHP recipe site, Pygame game, HTML portfolio",
  },
  {
    id: "projets-avances",
    date: "2025",
    eventFr: "Projets avancés : VOLT (Rust), Fist of Steel (Java), PrankGuard, 5G",
    eventEn: "Advanced projects: VOLT (Rust), Fist of Steel (Java), PrankGuard, 5G",
  },
  {
    id: "competition-5g",
    date: "2025",
    eventFr: "5e place nationale — Compétition algorithmique EPITECH",
    eventEn: "5th place nationally — EPITECH algorithmic competition",
  },
  {
    id: "portfolio-nextjs",
    date: "2026",
    eventFr: "Migration portfolio Next.js, email pro, recherche alternance",
    eventEn: "Next.js portfolio migration, pro email, apprenticeship search",
  },
];

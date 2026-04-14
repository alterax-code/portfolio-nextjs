export type TimelineEntry = {
  id: string;
  date: string;
  eventFr: string;
  eventEn: string;
};

export const timelineEntries: TimelineEntry[] = [
  {
    id: "autoformation",
    date: "Janv. 2024",
    eventFr: "Autoformation — Début de l'apprentissage du développement web en autodidacte",
    eventEn: "Self-learning — Started learning web development on my own",
  },
  {
    id: "prepavenir",
    date: "Sept. 2024",
    eventFr: "Formation Prépavenir Franconville — BTS Développeur Web",
    eventEn: "Prépavenir training in Franconville — Web Developer program",
  },
  {
    id: "premiers-projets",
    date: "Mars — Mai 2025",
    eventFr: "Premiers projets : site recettes PHP, jeu Pygame, portfolio HTML",
    eventEn: "First projects: recipes site PHP, Pygame game, HTML portfolio",
  },
  {
    id: "stage-plaoweb",
    date: "Mars — Juin 2025",
    eventFr: "Stage développeur web chez Plaoweb — Site de gestion de recettes",
    eventEn: "Web developer internship at Plaoweb — Recipe management site",
  },
  {
    id: "titre-pro",
    date: "Juil. 2025",
    eventFr: "Obtention du Titre Professionnel Développeur Web et Web Mobile (RNCP 5)",
    eventEn: "Earned Professional Web & Mobile Developer certification (RNCP Level 5)",
  },
  {
    id: "epitech",
    date: "Sept. 2025",
    eventFr: "Entrée à EPITECH Paris — Cursus MSc Pro Data Science (promo 2028)",
    eventEn: "Joined EPITECH Paris — MSc Pro Data Science program (class of 2028)",
  },
  {
    id: "projets-avances",
    date: "Sept. 2025 — Aujourd'hui",
    eventFr: "Projets avancés : Fist of Steel (Java), PrankGuard, Optimisation 5G",
    eventEn: "Advanced projects: Fist of Steel (Java), PrankGuard, 5G Optimization",
  },
  {
    id: "competition-5g",
    date: "Janv. 2026",
    eventFr: "5e place nationale — Compétition algorithmique EPITECH (Optimisation 5G)",
    eventEn: "5th place nationally — EPITECH algorithmic competition (5G Optimization)",
  },
  {
    id: "portfolio-nextjs",
    date: "Mars — Avril 2026",
    eventFr: "Migration portfolio Next.js, email pro, recherche alternance",
    eventEn: "Portfolio migration to Next.js, professional email, internship search",
  },
];

export type Lang = "fr" | "en";

export const translations = {
  fr: {
    nav: {
      about:    "À propos",
      skills:   "Compétences",
      projects: "Projets",
      timeline: "Parcours",
      contact:  "Contact",
    },
    hero: {
      name:        "Lucas Jacob",
      title:       "Développeur Full Stack & Data Science",
      subtitle:    "Étudiant MSc Data Science — EPITECH Paris",
      downloadCv:  "Télécharger mon CV",
      viewCv:      "Voir mon CV",
    },
    about: {
      sectionTitle: "À propos",
      bio: [
        "Après un parcours atypique passant par différents secteurs, je me suis orienté vers le développement informatique par passion pour la création de solutions techniques. Autodidacte dans un premier temps, j'ai obtenu un Titre Professionnel Développeur Web et Web Mobile (RNCP niveau 5) avant d'intégrer EPITECH Paris en MSc Data Science (promo 2028).",
        "Aujourd'hui, je maîtrise un stack technique polyvalent couvrant le développement web full stack (React, Node.js, PHP/Symfony), les langages système (Rust, Java, C++), et la data science (Python, Machine Learning). Je suis actuellement en recherche d'une alternance en développement full stack, data engineering ou IA.",
        "Ce qui me distingue : ma capacité à apprendre rapidement, mon parcours de reconversion qui prouve ma détermination, et mes projets personnels ambitieux (création d'un langage de programmation en Rust, jeu 2D complet en Java, application de sécurité Windows).",
      ],
      profileCard: {
        name:       "Lucas JACOB",
        title:      "Développeur Full Stack & Data Science",
        formation:  "MSc Data Science — EPITECH Paris",
        status:     "Alternance 2025–2028",
        github:     "github.com/alterax-code",
        linkedin:   "linkedin.com/in/jcb-dev/",
      },
    },
    skills: {
      sectionTitle: "Compétences",
    },
    projects: {
      sectionTitle: "Projets",
      viewOnGithub: "Voir sur GitHub",
      githubStars:  "GitHub Stars",
    },
    timeline: {
      sectionTitle: "Parcours",
    },
    contact: {
      sectionTitle:  "Contact",
      intro:         "Un projet, une opportunité ou juste envie d'échanger ? Envoyez-moi un message.",
      firstName:     "Prénom",
      lastName:      "Nom",
      email:         "Email",
      subject:       "Sujet",
      message:       "Message",
      send:          "Envoyer",
      sending:       "Envoi en cours…",
      successTitle:  "Message envoyé !",
      successMsg:    "Merci, je vous répondrai dans les plus brefs délais.",
      errorMsg:      "Une erreur est survenue. Veuillez réessayer.",
      placeholders: {
        firstName: "Votre prénom",
        lastName:  "Votre nom",
        email:     "votre@email.com",
        subject:   "Objet de votre message",
        message:   "Votre message…",
      },
    },
    cvModal: {
      title:    "CV — Lucas Jacob",
      download: "Télécharger le PDF",
      close:    "Fermer",
    },
    footer: {
      copyright: "© 2026 Lucas Jacob. Tous droits réservés.",
      builtWith:  "Construit avec Next.js & déployé sur Vercel",
    },
    aria: {
      openMenu:       "Ouvrir le menu",
      closeMenu:      "Fermer le menu",
      toggleLanguage: "Changer la langue",
      prevSlide:      "Slide précédent",
      nextSlide:      "Slide suivant",
      openCvModal:    "Aperçu du CV",
      closeCvModal:   "Fermer l'aperçu du CV",
      githubLink:     "Voir le projet sur GitHub",
    },
  },

  en: {
    nav: {
      about:    "About",
      skills:   "Skills",
      projects: "Projects",
      timeline: "Journey",
      contact:  "Contact",
    },
    hero: {
      name:        "Lucas Jacob",
      title:       "Full Stack Developer & Data Science",
      subtitle:    "MSc Data Science Student — EPITECH Paris",
      downloadCv:  "Download my CV",
      viewCv:      "View my CV",
    },
    about: {
      sectionTitle: "About",
      bio: [
        "After an unconventional career path through various industries, I transitioned into software development driven by a genuine passion for building technical solutions. Initially self-taught, I earned a Professional Web Developer certification (French RNCP Level 5) before joining EPITECH Paris for an MSc in Data Science (class of 2028).",
        "Today, I work with a versatile tech stack spanning full stack web development (React, Node.js, PHP/Symfony), systems programming (Rust, Java, C++), and data science (Python, Machine Learning). I am currently seeking an apprenticeship in full stack development, data engineering, or AI.",
        "What sets me apart: fast learning ability, a career change that proves determination, and ambitious personal projects (built a programming language in Rust, a complete 2D game in Java, a Windows security application).",
      ],
      profileCard: {
        name:       "Lucas JACOB",
        title:      "Full Stack Developer & Data Science",
        formation:  "MSc Data Science — EPITECH Paris",
        status:     "Apprenticeship 2025–2028",
        github:     "github.com/alterax-code",
        linkedin:   "linkedin.com/in/jcb-dev/",
      },
    },
    skills: {
      sectionTitle: "Skills",
    },
    projects: {
      sectionTitle: "Projects",
      viewOnGithub: "View on GitHub",
      githubStars:  "GitHub Stars",
    },
    timeline: {
      sectionTitle: "Journey",
    },
    contact: {
      sectionTitle:  "Contact",
      intro:         "A project, an opportunity, or just want to chat? Send me a message.",
      firstName:     "First name",
      lastName:      "Last name",
      email:         "Email",
      subject:       "Subject",
      message:       "Message",
      send:          "Send",
      sending:       "Sending…",
      successTitle:  "Message sent!",
      successMsg:    "Thank you, I will get back to you as soon as possible.",
      errorMsg:      "An error occurred. Please try again.",
      placeholders: {
        firstName: "Your first name",
        lastName:  "Your last name",
        email:     "your@email.com",
        subject:   "Subject of your message",
        message:   "Your message…",
      },
    },
    cvModal: {
      title:    "CV — Lucas Jacob",
      download: "Download PDF",
      close:    "Close",
    },
    footer: {
      copyright: "© 2026 Lucas Jacob. All rights reserved.",
      builtWith:  "Built with Next.js & deployed on Vercel",
    },
    aria: {
      openMenu:       "Open menu",
      closeMenu:      "Close menu",
      toggleLanguage: "Switch language",
      prevSlide:      "Previous slide",
      nextSlide:      "Next slide",
      openCvModal:    "Preview CV",
      closeCvModal:   "Close CV preview",
      githubLink:     "View project on GitHub",
    },
  },
} as const;

export type Translations = typeof translations;

"use client";

import { useLang } from "@/contexts/LangContext";
import { useInView } from "@/hooks/useInView";
import { projects, type Project } from "@/data/projects";
import EmblaCarousel from "@/components/EmblaCarousel";
import { ExternalLink } from "lucide-react";

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ProjectCard({
  project,
  lang,
}: {
  project: Project;
  lang: "fr" | "en";
}) {
  const description =
    lang === "fr" ? project.descriptionFr : project.descriptionEn;

  return (
    <div className="card p-6 h-full flex flex-col gap-4">
      {/* Color bar */}
      <div
        className="w-full h-1 rounded-full"
        style={{
          background: "linear-gradient(90deg, #8B0000, #DC143C)",
        }}
      />

      {/* Header */}
      <div className="flex flex-col gap-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-bold text-text-light leading-tight">
            {project.title}
          </h3>
          <span
            className="text-xs shrink-0 mt-0.5"
            style={{ color: "#DC143C" }}
          >
            {project.date}
          </span>
        </div>
        <p className="text-xs font-medium" style={{ color: "rgba(220,20,60,0.7)" }}>
          {project.stack}
        </p>
      </div>

      {/* Description */}
      <p className="text-text-secondary text-sm leading-relaxed flex-1">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span key={tag} className="tech-tag">
            {tag}
          </span>
        ))}
      </div>

      {/* GitHub link */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-xs font-medium mt-auto transition-all duration-200"
        style={{ color: "#BBBBBB" }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.color = "#DC143C";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.color = "#BBBBBB";
        }}
        aria-label={`${project.title} — GitHub`}
      >
        <GithubIcon size={14} />
        {lang === "fr" ? "Voir sur GitHub" : "View on GitHub"}
        <ExternalLink size={11} style={{ opacity: 0.6 }} />
      </a>
    </div>
  );
}

export default function Projects() {
  const { t, lang } = useLang();
  const { ref: sectionRef, inView } = useInView(0.1);

  return (
    <section
      id="projects"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className={`py-16 px-4 section-fade ${inView ? "visible" : ""}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="mb-8 text-center">
          <h2 className="section-title">
            {t.projects.sectionTitle === "Projets" ? (
              <>P<span>rojets</span></>
            ) : (
              <>P<span>rojects</span></>
            )}
          </h2>
          <div
            className="mx-auto mt-3 h-1 w-16 rounded-full"
            style={{ background: "linear-gradient(90deg, #8B0000, #DC143C)" }}
          />
        </div>

        {/* Carousel */}
        <div className="px-6">
          <EmblaCarousel loop={false}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} lang={lang} />
            ))}
          </EmblaCarousel>
        </div>
      </div>
    </section>
  );
}

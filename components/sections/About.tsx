"use client";

import Image from "next/image";
import { GraduationCap, Briefcase } from "lucide-react";

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
import { useLang } from "@/contexts/LangContext";
import { useInView } from "@/hooks/useInView";

export default function About() {
  const { t } = useLang();
  const { ref: sectionRef, inView } = useInView(0.1);

  return (
    <section
      id="about"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className={`py-16 px-4 section-fade ${inView ? "visible" : ""}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="mb-8 text-center">
          <h2 className="section-title">
            {t.about.sectionTitle === "À propos" ? (
              <>À <span>propos</span></>
            ) : (
              <>A<span>bout</span></>
            )}
          </h2>
          <div
            className="mx-auto mt-3 h-1 w-16 rounded-full"
            style={{ background: "linear-gradient(90deg, #8B0000, #DC143C)" }}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left — Bio */}
          <div className="space-y-5">
            {t.about.bio.map((paragraph, i) => (
              <p
                key={i}
                className="text-text-secondary leading-relaxed text-base"
                style={{
                  transitionDelay: inView ? `${i * 100}ms` : "0ms",
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Right — Profile card */}
          <div
            className="card p-8 flex flex-col items-center text-center gap-5"
            style={{ animationDelay: "200ms" }}
          >
            {/* Photo */}
            <div
              className="relative w-32 h-32 rounded-full overflow-hidden ring-2 flex-shrink-0"
              style={{
                boxShadow: "0 0 0 2px #DC143C, 0 0 20px rgba(220,20,60,0.3)",
                background: "linear-gradient(135deg, #1a0000, #2a0a0a)",
              }}
            >
              <Image
                src="/images/profile.png"
                alt="Lucas Jacob"
                fill
                className="object-cover"
                sizes="128px"
                priority
              />
            </div>

            {/* Name */}
            <div>
              <h3 className="text-xl font-bold text-text-light">
                Lucas{" "}
                <span style={{ color: "#DC143C" }}>JACOB</span>
              </h3>
              <p className="text-text-secondary text-sm mt-1">
                {t.about.profileCard.title}
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-col gap-2 w-full">
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm"
                style={{ background: "rgba(220,20,60,0.1)", border: "1px solid rgba(220,20,60,0.2)" }}
              >
                <GraduationCap size={15} style={{ color: "#DC143C", flexShrink: 0 }} aria-hidden="true" />
                <span className="text-text-secondary text-xs">
                  {t.about.profileCard.formation}
                </span>
              </div>
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm"
                style={{ background: "rgba(220,20,60,0.1)", border: "1px solid rgba(220,20,60,0.2)" }}
              >
                <Briefcase size={15} style={{ color: "#DC143C", flexShrink: 0 }} aria-hidden="true" />
                <span className="text-text-secondary text-xs">
                  {t.about.profileCard.status}
                </span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3 mt-1">
              <a
                href="https://github.com/alterax-code"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200"
                style={{
                  border: "1px solid rgba(220,20,60,0.3)",
                  color: "#BBBBBB",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#DC143C";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#DC143C";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(220,20,60,0.3)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#BBBBBB";
                }}
                aria-label="GitHub alterax-code"
              >
                <GithubIcon size={14} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/jcb-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200"
                style={{
                  border: "1px solid rgba(220,20,60,0.3)",
                  color: "#BBBBBB",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#DC143C";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#DC143C";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(220,20,60,0.3)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#BBBBBB";
                }}
                aria-label="LinkedIn jcb-dev"
              >
                <LinkedinIcon size={14} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

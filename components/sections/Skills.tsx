"use client";

import { useLang } from "@/contexts/LangContext";
import { useInView } from "@/hooks/useInView";
import { skillDomains, type SkillDomain } from "@/data/skills";
import EmblaCarousel from "@/components/EmblaCarousel";

function SkillCard({
  domain,
  lang,
}: {
  domain: SkillDomain;
  lang: "fr" | "en";
}) {
  const usedInLabel = lang === "fr" ? "Utilisé dans" : "Used in";

  return (
    <div className="card p-6 h-full flex flex-col gap-4">
      <h3 className="text-base font-bold" style={{ color: "#DC143C" }}>
        {lang === "fr" ? domain.titleFr : domain.titleEn}
      </h3>
      <div className="flex flex-col gap-3 flex-1">
        {domain.skills.map((skill) => (
          <div key={skill.name} className="flex flex-col gap-0.5">
            <span className="text-text-light text-sm font-medium">
              {skill.name}
            </span>
            <span className="text-xs" style={{ color: "rgba(187,187,187,0.55)" }}>
              {usedInLabel} : {skill.usedIn}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { t, lang } = useLang();
  const { ref: sectionRef, inView } = useInView(0.1);

  return (
    <section
      id="skills"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className={`py-16 px-4 section-fade ${inView ? "visible" : ""}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="mb-8 text-center">
          <h2 className="section-title">
            {t.skills.sectionTitle === "Compétences" ? (
              <>C<span>ompétences</span></>
            ) : (
              <>S<span>kills</span></>
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
            {skillDomains.map((domain) => (
              <SkillCard
                key={domain.id}
                domain={domain}
                lang={lang}
              />
            ))}
          </EmblaCarousel>
        </div>
      </div>
    </section>
  );
}

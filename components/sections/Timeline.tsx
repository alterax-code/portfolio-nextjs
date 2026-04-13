"use client";

import { useLang } from "@/contexts/LangContext";
import { useInView } from "@/hooks/useInView";
import { timelineEntries } from "@/data/timeline";

export default function Timeline() {
  const { t, lang } = useLang();
  const { ref: sectionRef, inView } = useInView(0.1);

  return (
    <section
      id="timeline"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className={`py-24 px-4 section-fade ${inView ? "visible" : ""}`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section title */}
        <div className="mb-16 text-center">
          <h2 className="section-title">
            {t.timeline.sectionTitle === "Parcours" ? (
              <>P<span>arcours</span></>
            ) : (
              <>J<span>ourney</span></>
            )}
          </h2>
          <div
            className="mx-auto mt-3 h-1 w-16 rounded-full"
            style={{ background: "linear-gradient(90deg, #8B0000, #DC143C)" }}
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — hidden on mobile, centered on md+ */}
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, #DC143C 10%, #DC143C 90%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-8">
            {timelineEntries.map((entry, i) => {
              const isRight = i % 2 === 0;
              return (
                <div
                  key={entry.id}
                  className="relative flex items-center md:grid md:grid-cols-2 gap-4 md:gap-8"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`,
                  }}
                >
                  {/* Dot */}
                  <div
                    className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 z-10 shrink-0"
                    style={{
                      background: "#DC143C",
                      boxShadow: "0 0 8px rgba(220,20,60,0.6)",
                    }}
                    aria-hidden="true"
                  />

                  {/* Left slot (desktop only — odd entries) */}
                  <div className={`hidden md:flex justify-end ${isRight ? "" : "order-first"}`}>
                    {!isRight && (
                      <div
                        className="card px-5 py-4 max-w-xs text-right"
                        style={{ animationDelay: `${i * 80}ms` }}
                      >
                        <span
                          className="text-xs font-bold block mb-1"
                          style={{ color: "#DC143C" }}
                        >
                          {entry.date}
                        </span>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          {lang === "fr" ? entry.eventFr : entry.eventEn}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Right slot */}
                  <div className={`pl-10 md:pl-0 ${isRight ? "md:col-start-2" : "md:col-start-2"}`}>
                    {/* Mobile: always show. Desktop: show only on right-side entries */}
                    <div className="md:hidden card px-5 py-4">
                      <span
                        className="text-xs font-bold block mb-1"
                        style={{ color: "#DC143C" }}
                      >
                        {entry.date}
                      </span>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {lang === "fr" ? entry.eventFr : entry.eventEn}
                      </p>
                    </div>
                    {isRight && (
                      <div className="hidden md:block card px-5 py-4 max-w-xs">
                        <span
                          className="text-xs font-bold block mb-1"
                          style={{ color: "#DC143C" }}
                        >
                          {entry.date}
                        </span>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          {lang === "fr" ? entry.eventFr : entry.eventEn}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

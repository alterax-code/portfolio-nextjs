"use client";

import { useState, useEffect, useRef } from "react";
import { Download, Eye } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import ParticleCanvas from "@/components/ParticleCanvas";

type HeroProps = {
  onOpenCvModal: () => void;
};

const FULL_NAME = "Lucas Jacob";
const TYPING_DELAY_MS = 100;
const TYPING_START_MS = 400;

export default function Hero({ onOpenCvModal }: HeroProps) {
  const { t } = useLang();
  const [displayed, setDisplayed] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    indexRef.current = 0;
    setDisplayed("");
    let timerId: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (indexRef.current < FULL_NAME.length) {
        indexRef.current++;
        setDisplayed(FULL_NAME.slice(0, indexRef.current));
        timerId = setTimeout(tick, TYPING_DELAY_MS);
      }
    };

    timerId = setTimeout(tick, TYPING_START_MS);
    return () => clearTimeout(timerId);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[55vh] flex items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 55%, rgba(139,0,0,0.18) 0%, transparent 65%), #0A0A0A",
      }}
    >
      {/* Particle background */}
      <ParticleCanvas />

      {/* Decorative blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(220,20,60,0.06)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(139,0,0,0.08)" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto section-fade visible">
        {/* Name */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 tracking-tight"
          style={{ minHeight: "1.2em" }}
        >
          <span className="text-text-light">{displayed}</span>
          <span className="typing-cursor" aria-hidden="true" />
        </h1>

        {/* Title */}
        <p
          className="text-lg sm:text-xl font-semibold mb-2 glow-text"
          style={{ color: "#DC143C" }}
        >
          {t.hero.title}
        </p>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-text-secondary mb-5">
          {t.hero.subtitle}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/documents/CV_Jacob_Lucas.pdf"
            download
            className="btn-primary w-full sm:w-auto justify-center"
          >
            <Download size={18} aria-hidden="true" />
            {t.hero.downloadCv}
          </a>

          <button
            onClick={onOpenCvModal}
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg font-semibold border-2 transition-all duration-300 flex items-center justify-center gap-2"
            style={{ borderColor: "#DC143C", color: "#DC143C" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.background =
                "rgba(220,20,60,0.1)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.background =
                "transparent")
            }
            aria-label={t.aria.openCvModal}
          >
            <Eye size={18} aria-hidden="true" />
            {t.hero.viewCv}
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        aria-hidden="true"
      >
        <div
          className="w-px h-10"
          style={{
            background:
              "linear-gradient(180deg, #DC143C 0%, transparent 100%)",
            animation: "glowPulse 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}

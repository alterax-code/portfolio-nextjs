"use client";

import { useLang } from "@/contexts/LangContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer
      className="py-8 px-4 text-center"
      style={{ borderTop: "1px solid rgba(220,20,60,0.15)" }}
    >
      <p className="text-text-secondary text-sm">{t.footer.copyright}</p>
      <p className="text-xs mt-1" style={{ color: "rgba(187,187,187,0.5)" }}>
        {t.footer.builtWith}
      </p>
    </footer>
  );
}

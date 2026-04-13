"use client";

import { useEffect, useRef } from "react";
import { Download, X } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

type CvModalProps = {
  onClose: () => void;
};

export default function CvModal({ onClose }: CvModalProps) {
  const { t } = useLang();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    el.showModal();

    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  }, [onClose]);

  const handleBackdrop = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdrop}
      className="fixed inset-0 m-0 w-full h-full max-w-none max-h-none p-0 bg-transparent"
      style={{ animation: "dialogShow 0.25s ease" }}
      aria-label={t.cvModal.title}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 flex items-center justify-center p-4"
        style={{ background: "rgba(0,0,0,0.85)" }}
      >
        {/* Panel */}
        <div
          className="relative flex flex-col w-full max-w-3xl rounded-xl overflow-hidden"
          style={{
            background: "#111",
            border: "1px solid rgba(220,20,60,0.3)",
            maxHeight: "90vh",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-5 py-3 shrink-0"
            style={{ borderBottom: "1px solid rgba(220,20,60,0.2)" }}
          >
            <span className="text-text-light text-sm font-semibold">
              {t.cvModal.title}
            </span>
            <div className="flex items-center gap-3">
              <a
                href="/documents/CV_Jacob_Lucas.pdf"
                download
                className="flex items-center gap-1.5 text-xs font-medium transition-colors duration-200"
                style={{ color: "#DC143C" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "#FF1A4B")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "#DC143C")
                }
              >
                <Download size={14} aria-hidden="true" />
                {t.cvModal.download}
              </a>
              <button
                onClick={onClose}
                className="flex items-center justify-center w-7 h-7 rounded-md transition-colors duration-200"
                style={{ color: "#BBBBBB" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "rgba(220,20,60,0.15)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#DC143C";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "transparent";
                  (e.currentTarget as HTMLButtonElement).style.color = "#BBBBBB";
                }}
                aria-label={t.aria.closeCvModal}
              >
                <X size={16} aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* PDF iframe */}
          <iframe
            src="/documents/CV_Jacob_Lucas.pdf"
            title={t.cvModal.title}
            className="w-full flex-1"
            style={{ minHeight: "70vh", border: "none" }}
          />
        </div>
      </div>
    </dialog>
  );
}

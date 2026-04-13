"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        <Hero onOpenCvModal={() => setCvModalOpen(true)} />
        {/* CvModal — Phase 11 */}
        {cvModalOpen && (
          <dialog
            open
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.8)" }}
          >
            <div className="card p-8 text-center">
              <p className="text-text-light mb-4">CV Modal — Phase 11</p>
              <button
                className="btn-primary"
                onClick={() => setCvModalOpen(false)}
              >
                Fermer
              </button>
            </div>
          </dialog>
        )}
      </main>
    </>
  );
}

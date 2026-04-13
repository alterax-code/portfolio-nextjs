"use client";

import { useActionState } from "react";
import { useLang } from "@/contexts/LangContext";
import { useInView } from "@/hooks/useInView";
import { sendContact, type ContactState } from "@/app/actions/contact";
import { Send } from "lucide-react";

const initialState: ContactState = { status: "idle" };

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = true,
  textarea = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const base =
    "w-full px-4 py-2.5 rounded-lg text-sm text-text-light bg-transparent outline-none transition-all duration-200";
  const style = {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(220,20,60,0.2)",
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-text-secondary text-sm font-medium">{label}</label>
      {textarea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          required={required}
          rows={5}
          className={base}
          style={style}
          onFocus={(e) => {
            (e.currentTarget as HTMLTextAreaElement).style.borderColor = "#DC143C";
            (e.currentTarget as HTMLTextAreaElement).style.boxShadow =
              "0 0 0 1px rgba(220,20,60,0.3)";
          }}
          onBlur={(e) => {
            (e.currentTarget as HTMLTextAreaElement).style.borderColor =
              "rgba(220,20,60,0.2)";
            (e.currentTarget as HTMLTextAreaElement).style.boxShadow = "none";
          }}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          className={base}
          style={style}
          onFocus={(e) => {
            (e.currentTarget as HTMLInputElement).style.borderColor = "#DC143C";
            (e.currentTarget as HTMLInputElement).style.boxShadow =
              "0 0 0 1px rgba(220,20,60,0.3)";
          }}
          onBlur={(e) => {
            (e.currentTarget as HTMLInputElement).style.borderColor =
              "rgba(220,20,60,0.2)";
            (e.currentTarget as HTMLInputElement).style.boxShadow = "none";
          }}
        />
      )}
    </div>
  );
}

export default function Contact() {
  const { t } = useLang();
  const { ref: sectionRef, inView } = useInView(0.1);
  const [state, formAction, isPending] = useActionState(sendContact, initialState);

  return (
    <section
      id="contact"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className={`py-24 px-4 section-fade ${inView ? "visible" : ""}`}
    >
      <div className="max-w-2xl mx-auto">
        {/* Section title */}
        <div className="mb-12 text-center">
          <h2 className="section-title">
            {t.contact.sectionTitle === "Contact" ? (
              <>C<span>ontact</span></>
            ) : (
              <>C<span>ontact</span></>
            )}
          </h2>
          <div
            className="mx-auto mt-3 h-1 w-16 rounded-full"
            style={{ background: "linear-gradient(90deg, #8B0000, #DC143C)" }}
          />
          <p className="text-text-secondary text-sm mt-4">{t.contact.intro}</p>
        </div>

        {/* Success state */}
        {state.status === "success" ? (
          <div
            className="card p-8 text-center"
            style={{ border: "1px solid rgba(220,20,60,0.4)" }}
          >
            <p className="text-xl font-bold text-text-light mb-2">
              {t.contact.successTitle}
            </p>
            <p className="text-text-secondary">{t.contact.successMsg}</p>
          </div>
        ) : (
          <form action={formAction} className="card p-8 flex flex-col gap-5">
            {/* Error banner */}
            {state.status === "error" && (
              <p
                className="text-sm px-4 py-2 rounded-lg"
                style={{
                  background: "rgba(220,20,60,0.1)",
                  border: "1px solid rgba(220,20,60,0.3)",
                  color: "#DC143C",
                }}
              >
                {t.contact.errorMsg}
              </p>
            )}

            {/* Name row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field
                label={t.contact.firstName}
                name="firstName"
                placeholder={t.contact.placeholders.firstName}
              />
              <Field
                label={t.contact.lastName}
                name="lastName"
                placeholder={t.contact.placeholders.lastName}
              />
            </div>

            <Field
              label={t.contact.email}
              name="email"
              type="email"
              placeholder={t.contact.placeholders.email}
            />
            <Field
              label={t.contact.subject}
              name="subject"
              placeholder={t.contact.placeholders.subject}
            />
            <Field
              label={t.contact.message}
              name="message"
              placeholder={t.contact.placeholders.message}
              textarea
            />

            <button
              type="submit"
              disabled={isPending}
              className="btn-primary self-end disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Send size={16} aria-hidden="true" />
              {isPending ? t.contact.sending : t.contact.send}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

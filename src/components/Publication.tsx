import { useState } from "react";
import { publication } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";

export default function Publication() {
  const ref = useReveal();
  const [open, setOpen] = useState(false);

  return (
    <section
      id="publication"
      className="section-padding"
      style={{ textAlign: "center" }}
      ref={ref}
    >
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        <div className="section-badge">Research</div>
        <h2 className="section-title">
          <span className="gradient-text">Publication</span>
        </h2>
        <p className="section-sub" style={{ marginBottom: "3rem" }}>
          Peer-reviewed research published in an international journal.
        </p>

        <div
          style={{
            borderRadius: "1.25rem",
            padding: "2rem",
            background: "#1d0a12",
            border: "1px solid rgba(224,90,71,0.15)",
            textAlign: "left",
            cursor: "pointer",
            transition: "box-shadow 0.25s ease",
            position: "relative",
            overflow: "hidden",
          }}
          onClick={() => setOpen(!open)}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 30px rgba(224,90,71,0.12)"}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = "none"}
        >
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, #4a0e1c, #E05A47)" }} />

          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.75rem" }}>
                <span style={{ fontSize: "1.3rem" }}>📄</span>
                <span
                  style={{
                    padding: "0.25rem 0.7rem",
                    borderRadius: "999px",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    background: "rgba(224,90,71,0.08)",
                    border: "1px solid rgba(224,90,71,0.2)",
                    color: "#E05A47",
                    fontFamily: '"Cormorant Garamond", sans-serif',
                  }}
                >
                  Published
                </span>
              </div>
              <h3 style={{ fontFamily: '"Cormorant Garamond", sans-serif', fontWeight: 700, fontSize: "1.4rem", color: "#F5E6D3", lineHeight: 1.5, marginBottom: "0.6rem" }}>
                {publication.title}
              </h3>
              <p style={{ fontSize: "1.1rem", color: "#E05A47", fontWeight: 500 }}>
                {publication.journal} · {publication.volume}
              </p>
            </div>
            <svg
              width="20" height="20"
              style={{ flexShrink: 0, marginTop: "0.25rem", color: "#E05A47", transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s ease" }}
              fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {open && (
            <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(224,90,71,0.12)", animation: "fadeUp 0.3s ease" }}>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.85, color: "#b89598", marginBottom: "1.25rem" }}>
                {publication.description}
              </p>
              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", fontWeight: 600, color: "#E05A47", textDecoration: "none" }}
                onClick={e => e.stopPropagation()}
              >
                DOI: {publication.doi}
                <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

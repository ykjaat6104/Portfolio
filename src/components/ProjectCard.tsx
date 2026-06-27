import { useRef, useState } from "react";

type Project = {
  icon: string;
  title: string;
  desc: string;
  tech: string[];
  github: string;
  live: string | null;
  stars: number;
};

export default function ProjectCard({ p }: { p: Project }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouse = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    setTilt({ x: ((y - cy) / cy) * -5, y: ((x - cx) / cx) * 5 });
  };

  const handleLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div className="border-beam-wrapper" style={{ height: "100%" }}>
      <div
        ref={cardRef}
        className="project-card"
        style={{
          background: "#1d0a12",
          /* border removed — wrapper gap + background acts as the border */
          borderRadius: "calc(1rem - 1.5px)",
          overflow: "hidden",
          textAlign: "left",
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(${tilt.x !== 0 ? "-6px" : "0"})`,
          transition: tilt.x === 0 ? "all 0.3s ease" : "none",
          boxShadow: tilt.x !== 0 ? "0 20px 40px rgba(0,0,0,0.4)" : "none",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
        onMouseMove={handleMouse}
        onMouseLeave={handleLeave}
      >
        <div style={{ padding: "1.5rem 1.5rem 1rem", position: "relative", flexGrow: 1 }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #4a0e1c, #E05A47)" }} />
          <div
            style={{
              width: "3rem",
              height: "3rem",
              borderRadius: "0.75rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.25rem",
              marginBottom: "1rem",
              background: "linear-gradient(135deg, #4a0e1c, #E05A47)",
              boxShadow: "0 4px 15px rgba(224,90,71,0.25)",
            }}
          >
            {p.icon}
          </div>
          <h3 style={{ fontFamily: '"Cormorant Garamond", sans-serif', fontSize: "1.45rem", fontWeight: 700, marginBottom: "0.5rem", color: "#F5E6D3" }}>
            {p.title}
          </h3>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.625, color: "#b89598", margin: 0 }}>
            {expanded ? p.desc : p.desc.length > 100 ? p.desc.slice(0, 100) + "..." : p.desc}
          </p>
          {p.desc.length > 100 && (
            <button
              onClick={() => setExpanded(!expanded)}
              style={{
                fontSize: "0.9rem",
                fontWeight: 600,
                marginTop: "0.25rem",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: "#E05A47",
                padding: 0,
              }}
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          )}
        </div>
        <div style={{ padding: "1rem 1.5rem 1.5rem", borderTop: "1px solid rgba(224,90,71,0.1)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", marginBottom: "1rem" }}>
            {p.tech.map((t) => (
              <span
                key={t}
                style={{
                  padding: "0.125rem 0.5rem",
                  borderRadius: "9999px",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  background: "rgba(224,90,71,0.08)",
                  border: "1px solid rgba(224,90,71,0.15)",
                  color: "#ff7a66",
                }}
              >
                {t}
              </span>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.875rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  textDecoration: "none",
                  color: "#b89598",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E05A47")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#b89598")}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                Code
              </a>
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "0.875rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    textDecoration: "none",
                    color: "#b89598",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#E05A47")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#b89598")}
                >
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                  Live Demo
                </a>
              )}
            </div>
            {p.stars > 0 && (
              <span style={{ display: "flex", alignItems: "center", gap: "0.25rem", fontSize: "0.75rem", color: "#b89598" }}>
                <svg width="14" height="14" style={{ color: "#E05A47" }} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                {p.stars}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import { useReveal } from "../hooks/useReveal";
import { experience } from "../data/portfolio";

export default function Experience() {
  const ref = useReveal();

  return (
    <section
      id="experience"
      style={{ padding: "6rem 1.5rem", position: "relative", zIndex: 1, background: "#14060c", textAlign: "center" }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(224,90,71,0.35), transparent)" }} />

      <div style={{ maxWidth: "860px", margin: "0 auto" }} ref={ref}>
        <div className="section-badge">Career Journey</div>
        <h2 className="section-title">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <p className="section-sub" style={{ marginBottom: "4rem" }}>
          Professional experience that shaped my technical and analytical thinking.
        </p>

        {/* Timeline */}
        <div style={{ position: "relative", textAlign: "left" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "1.25rem",
              top: 0,
              bottom: 0,
              width: "2px",
              background: "linear-gradient(to bottom, #4a0e1c, rgba(74,14,28,0.2))",
              borderRadius: "2px",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", paddingLeft: "3.5rem" }}>
            {experience.map((exp, i) => (
              <div
                key={i}
                style={{
                  position: "relative",
                  opacity: 0,
                  animation: `fadeUp 0.6s ${i * 0.15}s ease forwards`,
                }}
              >
                {/* Timeline dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "-2.35rem",
                    top: "0.4rem",
                    width: "14px",
                    height: "14px",
                    borderRadius: "50%",
                    background: "#4a0e1c",
                    border: "2px solid #E05A47",
                    boxShadow: "0 0 12px rgba(224,90,71,0.5)",
                    zIndex: 2,
                  }}
                />

                <div
                  style={{
                    borderRadius: "1.25rem",
                    padding: "1.75rem",
                    background: "#1d0a12",
                    border: "1px solid rgba(224,90,71,0.1)",
                    transition: "box-shadow 0.25s ease",
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(224,90,71,0.12)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = "none"}
                >
                  {/* Date badge */}
                  <span
                    style={{
                      display: "inline-block",
                      fontFamily: '"Cormorant Garamond", sans-serif',
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "#E05A47",
                      padding: "0.3rem 0.85rem",
                      background: "rgba(224,90,71,0.08)",
                      border: "1px solid rgba(224,90,71,0.2)",
                      borderRadius: "999px",
                      marginBottom: "0.9rem",
                    }}
                  >
                    {exp.date}
                  </span>

                  <h3 style={{ fontFamily: '"Cormorant Garamond", sans-serif', fontWeight: 700, fontSize: "1.1rem", color: "#F5E6D3", marginBottom: "0.35rem" }}>
                    {exp.role}
                  </h3>
                  <p style={{ fontSize: "0.88rem", fontWeight: 500, color: "#ff7a66", marginBottom: "1rem" }}>
                    {exp.company}
                  </p>

                  <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                    {exp.description.map((d, j) => (
                      <li
                        key={j}
                        style={{ fontSize: "0.9rem", color: "#b89598", lineHeight: 1.75, paddingLeft: "1.25rem", position: "relative" }}
                      >
                        <span style={{ position: "absolute", left: 0, color: "#E05A47", fontWeight: 700 }}>▸</span>
                        {d}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "1.25rem" }}>
                    {exp.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          padding: "0.28rem 0.75rem",
                          borderRadius: "999px",
                          fontSize: "0.75rem",
                          fontWeight: 500,
                          background: "rgba(224,90,71,0.07)",
                          border: "1px solid rgba(224,90,71,0.18)",
                          color: "#ff7a66",
                          fontFamily: '"Cormorant Garamond", sans-serif',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

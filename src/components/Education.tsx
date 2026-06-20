import { education } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";

export default function Education() {
  const ref = useReveal();

  return (
    <section
      id="education"
      style={{ padding: "6rem 1.5rem", position: "relative", zIndex: 1, textAlign: "center" }}
    >
      <div style={{ maxWidth: "860px", margin: "0 auto" }} ref={ref}>
        <div className="section-badge">Academic Background</div>
        <h2 className="section-title">
          My <span className="gradient-text">Education</span>
        </h2>
        <p className="section-sub" style={{ marginBottom: "3.5rem" }}>
          A strong academic foundation in computer science and engineering.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {education.map((edu, i) => (
            <div
              key={i}
              style={{
                borderRadius: "1.25rem",
                padding: "1.75rem",
                background: "#1d0a12",
                border: "1px solid rgba(224,90,71,0.1)",
                textAlign: "left",
                display: "flex",
                alignItems: "flex-start",
                gap: "1.25rem",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 30px rgba(224,90,71,0.12)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  background: "linear-gradient(135deg, #4a0e1c, #E05A47)",
                  flexShrink: 0,
                }}
              >
                {edu.icon}
              </div>

              {/* Text */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{ fontFamily: '"Cormorant Garamond", sans-serif', fontWeight: 700, fontSize: "1.4rem", color: "#F5E6D3", marginBottom: "0.3rem", lineHeight: 1.3 }}>
                  {edu.degree}
                </h3>
                <p style={{ fontSize: "0.9rem", fontWeight: 500, color: "#ff7a66", marginBottom: "0.2rem" }}>
                  {edu.school}
                </p>
                {edu.board && (
                  <p style={{ fontSize: "0.8rem", color: "#b89598", marginBottom: "0.6rem" }}>{edu.board}</p>
                )}
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap", marginTop: "0.6rem" }}>
                  <span
                    style={{
                      padding: "0.28rem 0.85rem",
                      borderRadius: "999px",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      background: "rgba(224,90,71,0.08)",
                      border: "1px solid rgba(224,90,71,0.2)",
                      color: "#ff7a66",
                      fontFamily: '"Cormorant Garamond", sans-serif',
                    }}
                  >
                    {edu.score}
                  </span>
                  <span style={{ fontSize: "0.95rem", color: "#b89598", fontWeight: 500 }}>{edu.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

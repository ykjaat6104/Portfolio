import { personalInfo } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";

export default function About() {
  const { name, highlights, description } = personalInfo;
  const ref = useReveal();

  return (
    <section
      id="about"
      style={{ padding: "6rem 1.5rem", position: "relative", zIndex: 1, background: "#14060c", textAlign: "center" }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(224,90,71,0.4), transparent)" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }} ref={ref}>
        <div className="section-badge">About Me</div>
        <h2 className="section-title">
          Who is <span className="gradient-text">{name.split(" ")[0]}</span>?
        </h2>
        <p className="section-sub" style={{ marginBottom: "1rem" }}>
          {description}
        </p>
        <p className="section-sub" style={{ marginBottom: "3.5rem", fontSize: "1.1rem" }}>
          Dedicated to crafting AI-powered software that is both powerful and elegant — with hands-on experience in LLM-powered applications, RAG pipelines, and scalable backend systems.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {highlights.map((h, i) => (
            <div
              key={i}
              className="float-hover"
              style={{
                borderRadius: "1.25rem",
                padding: "1.5rem 1.5rem",
                background: "#1d0a12",
                border: "1px solid rgba(224,90,71,0.1)",
                textAlign: "left",
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  fontSize: "1.1 rem",
                  lineHeight: 1,
                  flexShrink: 0,
                  marginTop: "0.1rem",
                }}
              >
                {h.icon}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: '"Cormorant Garamond", sans-serif',
                    fontWeight: 700,
                    fontSize: "1.1 rem",
                    color: "#F5E6D3",
                    marginBottom: "0.35rem",
                  }}
                >
                  {h.title}
                </div>
                <div style={{ fontSize: "1rem", color: "#b89598", lineHeight: 1.5 }}>
                  {h.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

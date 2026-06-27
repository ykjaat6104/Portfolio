import { featuredProjects } from "../data/portfolio";
import ProjectCard from "./ProjectCard";
import { personalInfo } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";

export default function Projects() {
  const ref = useReveal();

  return (
    <section
      id="projects"
      ref={ref}
      className="section-padding"
      style={{ background: "#14060c", textAlign: "center" }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(224,90,71,0.35), transparent)" }} />
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="section-badge">Portfolio</div>
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-sub" style={{ marginBottom: "4rem" }}>
          Real-world AI and backend applications built with modern technologies.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem", marginBottom: "4rem" }}>
          {featuredProjects.map((p, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <ProjectCard p={p} />
            </div>
          ))}
        </div>

        <div className="reveal" style={{ display: "flex", justifyContent: "center" }}>
          <a
            href={`https://github.com/${personalInfo.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              background: "rgba(224,90,71,0.08)",
              border: "1px solid rgba(224,90,71,0.3)",
              color: "#F5E6D3",
              padding: "0.85rem 2.5rem",
              borderRadius: "999px",
              fontWeight: 600,
              fontFamily: '"Cormorant Garamond", sans-serif',
              fontSize: "0.95rem",
              textDecoration: "none",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #4a0e1c, #E05A47)";
              (e.currentTarget as HTMLElement).style.borderColor = "#E05A47";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(224,90,71,0.3)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "rgba(224,90,71,0.08)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(224,90,71,0.3)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            More Projects
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

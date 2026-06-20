import { skills } from "../data/portfolio";

const skillIcons: Record<string, string> = {
  Languages: "💻",
  "Frameworks & Libraries": "⚛️",
  "AI / ML": "🧠",
  "DevOps & Tools": "🛠️",
  "CS Fundamentals": "📐",
};

function SkillRing({ name, level }: { name: string; level: number }) {
  const R = 38;
  const circ = 2 * Math.PI * R;
  const offset = circ - (circ * level) / 100;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.6rem",
        padding: "1.25rem 0.75rem",
        borderRadius: "1rem",
        background: "#1d0a12",
        border: "1px solid rgba(224,90,71,0.1)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        cursor: "default",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(224,90,71,0.18)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* SVG ring with percentage INSIDE the svg */}
      <svg width="90" height="90" viewBox="0 0 90 90">
        {/* Defs */}
        <defs>
          <linearGradient id={`sg-${name.replace(/\s/g, "")}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4a0e1c" />
            <stop offset="100%" stopColor="#E05A47" />
          </linearGradient>
        </defs>
        {/* Background track */}
        <circle cx="45" cy="45" r={R} fill="none" stroke="rgba(224,90,71,0.1)" strokeWidth="5.5" />
        {/* Progress arc — rotated so it starts at the top */}
        <circle
          cx="45"
          cy="45"
          r={R}
          fill="none"
          stroke={`url(#sg-${name.replace(/\s/g, "")})`}
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          transform="rotate(-90 45 45)"
          style={{ transition: "stroke-dashoffset 1.4s ease" }}
        />
        {/* Percentage text centred inside the ring */}
        <text
          x="45"
          y="45"
          textAnchor="middle"
          dominantBaseline="central"
          fill="#F5E6D3"
          fontSize="17"
          fontWeight="700"
          fontFamily='"Cormorant Garamond", sans-serif'
        >
          {level}%
        </text>
      </svg>

      {/* Skill name */}
      <span
        style={{
          fontSize: "0.95rem",
          fontWeight: 500,
          color: "#b89598",
          textAlign: "center",
          lineHeight: 1.3,
          fontFamily: '"Inter", sans-serif',
        }}
      >
        {name}
      </span>
    </div>
  );
}

export default function Skills() {
  return (  
    <section
      id="skills"
      style={{ padding: "6rem 1.5rem", position: "relative", zIndex: 1, textAlign: "center" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="section-badge">Technical Skills</div>
        <h2 className="section-title">
          My <span className="gradient-text">Expertise</span>
        </h2>
        <p className="section-sub" style={{ marginBottom: "4rem" }}>
          A diverse skill set built through hands-on projects, professional experience,
          and continuous learning.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
          {skills.map((cat) => (
            <div key={cat.name}>
              {/* Category heading */}
              <h3
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontFamily: '"Cormorant Garamond", sans-serif',
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "#E05A47",
                  marginBottom: "1.5rem",
                  padding: "0.35rem 1rem",
                  background: "rgba(224,90,71,0.07)",
                  border: "1px solid rgba(224,90,71,0.18)",
                  borderRadius: "900px",
                }}
              >
                <span>{skillIcons[cat.name] || "📦"}</span>
                {cat.name}
              </h3>

              {/* Skills grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))",
                  gap: "1rem",
                  maxWidth: "900px",
                  margin: "0 160px",
                }}
              >
                {cat.items.map((s) => (
                  <SkillRing key={s.name} name={s.name} level={s.level} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

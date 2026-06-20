import { useEffect, useRef, useState } from "react";
import { personalInfo } from "../data/portfolio";

function WineParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * w,
      y: h + Math.random() * 100,
      size: Math.random() * 3.5 + 1.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: -(Math.random() * 0.45 + 0.15),
      opacity: Math.random() * 0.28 + 0.04,
      hue: Math.random() * 20 + 350,
    }));

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.x += p.speedX + Math.sin(p.y * 0.01) * 0.15;
        p.y += p.speedY;
        if (p.y < -20 || p.x < -20 || p.x > w + 20) {
          p.x = Math.random() * w;
          p.y = h + Math.random() * 50;
          p.opacity = Math.random() * 0.28 + 0.04;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 70%, 55%, ${p.opacity})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }} />;
}

const githubIcon = "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z";
const linkedinIcon = "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z";
const emailIcon = "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z";

export default function Hero() {
  const { name, tagline, description, stats, github, linkedin, email } = personalInfo;
  const [counts, setCounts] = useState({ Projects: 0, Followers: 0 });
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const dur = 1400;
          const start = performance.now();
          const anim = (now: number) => {
            const p = Math.min((now - start) / dur, 1);
            setCounts({ Projects: Math.floor(p * 18), Followers: Math.floor(p * 6) });
            if (p < 1) requestAnimationFrame(anim);
          };
          requestAnimationFrame(anim);
          obs.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const socials = [
    { href: `https://github.com/${github}`, d: githubIcon, stroke: false, label: "GitHub" },
    { href: `https://linkedin.com/in/${linkedin}`, d: linkedinIcon, stroke: false, label: "LinkedIn" },
    { href: `mailto:${email}`, d: emailIcon, stroke: true, label: "Email" },
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
        padding: "7rem 1.5rem 4rem",
      }}
    >
      <WineParticles />

      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "3rem",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
        className="hero-grid"
      >
        {/* ── LEFT: Text Content ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

          {/* Status badge */}
          <div style={{ animation: "fadeUp 0.7s ease both" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(224,90,71,0.08)",
                border: "1px solid rgba(224,90,71,0.28)",
                color: "#E05A47",
                padding: "0.4rem 1rem",
                borderRadius: "999px",
                fontSize: "0.78rem",
                fontWeight: 600,
                fontFamily: '"Cormorant Garamond", sans-serif',
                letterSpacing: "0.05em",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#E05A47",
                  animation: "pulse-dot 2s infinite",
                  flexShrink: 0,
                }}
              />
              Available for Opportunities
            </span>
          </div>

          {/* Name */}
          <h1
            style={{
              fontFamily: '"Cormorant Garamond", sans-serif',
              fontWeight: 800,
              fontSize: "clamp(2.3rem, 4.6vw, 5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#F5E6D3",
              animation: "fadeUp 0.7s 0.1s ease both",
            }}
          >
            {name.split(" ")[0]}{" "}
            <span className="gradient-text">{name.split(" ").slice(1).join(" ")}</span>
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontFamily: '"Cormorant Garamond", sans-serif',
              fontSize: "clamp(1.15rem, 2vw, 1.45rem)",
              fontWeight: 500,
              color: "#b89598",
              lineHeight: 1.6,
              animation: "fadeUp 0.7s 0.2s ease both",
            }}
          >
            {tagline}
          </p>

          {/* Description */}
          <p
            style={{
              fontSize: "0.97rem",
              color: "#b89598",
              lineHeight: 1.85,
              maxWidth: "520px",
              animation: "fadeUp 0.7s 0.3s ease both",
            }}
          >
            {description}
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              animation: "fadeUp 0.7s 0.4s ease both",
            }}
          >
            <a
              href="#projects"
              style={{
                background: "linear-gradient(135deg, #4a0e1c, #E05A47)",
                color: "#F5E6D3",
                padding: "0.75rem 2rem",
                borderRadius: "999px",
                fontWeight: 700,
                fontFamily: '"Cormorant Garamond", sans-serif',
                fontSize: "0.9rem",
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(224,90,71,0.3)",
                transition: "all 0.2s ease",
                display: "inline-block",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(224,90,71,0.5)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(224,90,71,0.3)";
              }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              style={{
                border: "1px solid rgba(224,90,71,0.3)",
                color: "#F5E6D3",
                padding: "0.75rem 2rem",
                borderRadius: "999px",
                fontWeight: 600,
                fontFamily: '"Cormorant Garamond", sans-serif',
                fontSize: "0.9rem",
                textDecoration: "none",
                background: "rgba(255,255,255,0.03)",
                transition: "all 0.25s ease",
                display: "inline-block",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "#E05A47";
                (e.currentTarget as HTMLElement).style.color = "#E05A47";
                (e.currentTarget as HTMLElement).style.background = "rgba(224,90,71,0.08)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(224,90,71,0.3)";
                (e.currentTarget as HTMLElement).style.color = "#F5E6D3";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
              }}
            >
              Get In Touch
            </a>
          </div>

          {/* Social Icons */}
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              animation: "fadeUp 0.7s 0.5s ease both",
            }}
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  border: "1px solid rgba(224,90,71,0.22)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255,255,255,0.02)",
                  color: "#b89598",
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                  flexShrink: 0,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#E05A47";
                  (e.currentTarget as HTMLElement).style.color = "#E05A47";
                  (e.currentTarget as HTMLElement).style.background = "rgba(224,90,71,0.1)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(224,90,71,0.22)";
                  (e.currentTarget as HTMLElement).style.color = "#b89598";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill={s.stroke ? "none" : "currentColor"} stroke={s.stroke ? "currentColor" : "none"} strokeWidth={s.stroke ? 2 : 0}>
                  <path d={s.d} strokeLinecap={s.stroke ? "round" : undefined} strokeLinejoin={s.stroke ? "round" : undefined} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Stats Card ── */}
        <div ref={statRef} style={{ animation: "fadeIn 1s 0.5s ease both" }}>
          <div
            style={{
              borderRadius: "1.5rem",
              padding: "2.5rem",
              background: "linear-gradient(135deg, #1d0a12, #281018)",
              border: "1px solid rgba(224,90,71,0.18)",
              boxShadow: "0 0 60px rgba(224,90,71,0.12), 0 20px 60px rgba(0,0,0,0.5)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #E05A47, transparent)" }} />

            {/* Avatar */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "1.75rem", gap: "0.75rem" }}>
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #4a0e1c, #E05A47)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: '"Cormorant Garamond", sans-serif',
                  fontWeight: 800,
                  fontSize: "1.6rem",
                  color: "#F5E6D3",
                  flexShrink: 0,
                }}
              >
                YK
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: '"Cormorant Garamond", sans-serif', fontWeight: 700, fontSize: "1rem", color: "#F5E6D3" }}>
                  Yash Kumar Kalirawan
                </div>
                <div style={{ fontSize: "0.8rem", color: "#E05A47", marginTop: "0.25rem", fontWeight: 500 }}>
                  AI &amp; Backend Developer
                </div>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: "1px", background: "rgba(224,90,71,0.12)", marginBottom: "1.75rem" }} />

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.5rem" }}>
              {Object.entries(stats).map(([key, val]) => (
                <div key={key} style={{ textAlign: "center", padding: "0.75rem 0.5rem" }}>
                  <div
                    style={{
                      fontFamily: '"Cormorant Garamond", sans-serif',
                      fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
                      fontWeight: 800,
                      background: "linear-gradient(135deg, #E05A47, #ff7a66)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {key === "Projects" ? `${counts.Projects}+` : key === "Followers" ? counts.Followers : val}
                  </div>
                  <div
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "#b89598",
                      marginTop: "0.3rem",
                      fontFamily: '"Cormorant Garamond", sans-serif',
                    }}
                  >
                    {key}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Responsive grid CSS */}
      <style>{`
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
            gap: 5rem !important;
          }
        }
      `}</style>
    </section>
  );
}

import { useState } from "react";
import { contactInfo, personalInfo } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";

const githubPath = "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z";
const linkedinPath = "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z";
const emailPath = "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z";

const inputBase: React.CSSProperties = {
  width: "100%",
  borderRadius: "10px",
  padding: "0.75rem 1rem",
  fontSize: "0.9rem",
  outline: "none",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(224,90,71,0.15)",
  color: "#F5E6D3",
  fontFamily: '"Inter", sans-serif',
  transition: "border-color 0.2s, box-shadow 0.2s",
};

const labelBase: React.CSSProperties = {
  display: "block",
  fontSize: "0.72rem",
  fontWeight: 700,
  textTransform: "uppercase" as const,
  letterSpacing: "0.12em",
  color: "#b89598",
  marginBottom: "0.5rem",
  fontFamily: '"Cormorant Garamond", sans-serif',
};


export default function Contact() {
  const ref = useReveal();
  const { linkedin, github } = personalInfo;
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject || "Portfolio Contact")}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setTimeout(() => setStatus("sent"), 500);
    setTimeout(() => setStatus("idle"), 3000);
  };

  const focusStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "#E05A47";
    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(224,90,71,0.1)";
  };
  const blurStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "rgba(224,90,71,0.15)";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <section
      id="contact"
      style={{ padding: "6rem 1.5rem", position: "relative", zIndex: 1, background: "#14060c", textAlign: "center" }}
      ref={ref}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(224,90,71,0.35), transparent)" }} />
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="section-badge">Get In Touch</div>
        <h2 className="section-title">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="section-sub" style={{ marginBottom: "3.5rem" }}>
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </p>

        {/* 2-col layout via inline flex */}
        <div
          style={{
            display: "flex",
            gap: "3rem",
            textAlign: "left",
            flexWrap: "wrap",
          }}
        >
          {/* Left column */}
          <div style={{ flex: "1 1 280px", minWidth: "260px" }}>
            <h3 style={{ fontFamily: '"Cormorant Garamond", sans-serif', fontWeight: 700, fontSize: "1.35rem", color: "#F5E6D3", marginBottom: "0.85rem", lineHeight: 1.3 }}>
              Let's build something amazing together
            </h3>
            <p style={{ fontSize: "0.93rem", color: "#b89598", lineHeight: 1.85, marginBottom: "2rem" }}>
              Whether you need an AI-powered application, backend system, or full-stack solution — I'm here to help turn your ideas into reality.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "1.75rem" }}>
              {contactInfo.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    borderRadius: "12px",
                    padding: "1rem",
                    background: "#1d0a12",
                    border: "1px solid rgba(224,90,71,0.1)",
                    transition: "transform 0.2s ease",
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "translateX(4px)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "translateX(0)"}
                >
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "linear-gradient(135deg, #4a0e1c, #E05A47)",
                      flexShrink: 0,
                      fontSize: "0.95rem",
                    }}
                  >
                    <i className={item.icon} style={{ color: "#F5E6D3" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.7rem", fontWeight: 600, color: "#b89598", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: '"Cormorant Garamond", sans-serif' }}>
                      {item.label}
                    </div>
                    {item.href ? (
                      <a href={item.href} style={{ fontSize: "0.88rem", fontWeight: 600, color: "#F5E6D3", textDecoration: "none" }}>
                        {item.value}
                      </a>
                    ) : (
                      <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "#F5E6D3", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        {item.dot && (
                          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#E05A47", animation: "pulse-dot 2s infinite", flexShrink: 0 }} />
                        )}
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div style={{ display: "flex", gap: "0.65rem" }}>
              {[
                { href: `https://github.com/${github}`, d: githubPath, stroke: false, label: "GitHub" },
                { href: `https://linkedin.com/in/${linkedin}`, d: linkedinPath, stroke: false, label: "LinkedIn" },
                { href: `mailto:${personalInfo.email}`, d: emailPath, stroke: true, label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#1d0a12",
                    border: "1px solid rgba(224,90,71,0.12)",
                    color: "#b89598",
                    textDecoration: "none",
                    transition: "all 0.22s ease",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = "#E05A47";
                    (e.currentTarget as HTMLElement).style.borderColor = "#E05A47";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = "#b89598";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(224,90,71,0.12)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill={s.stroke ? "none" : "currentColor"} stroke={s.stroke ? "currentColor" : "none"} strokeWidth={s.stroke ? 2 : 0}>
                    <path d={s.d} strokeLinecap={s.stroke ? "round" : undefined} strokeLinejoin={s.stroke ? "round" : undefined} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right column: Form */}
          <div
            style={{
              flex: "1 1 300px",
              minWidth: "280px",
              borderRadius: "1.25rem",
              padding: "2rem",
              background: "#1d0a12",
              border: "1px solid rgba(224,90,71,0.12)",
            }}
          >
            <h3 style={{ fontFamily: '"Cormorant Garamond", sans-serif', fontWeight: 700, fontSize: "1.1rem", color: "#F5E6D3", marginBottom: "1.5rem" }}>
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              {(["name", "email", "subject"] as const).map((field) => (
                <div key={field}>
                  <label style={labelBase}>
                    {field === "name" ? "Your Name" : field === "email" ? "Email Address" : "Subject"}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    placeholder={field === "name" ? "John Doe" : field === "email" ? "john@example.com" : "Project Collaboration"}
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    required={field !== "subject"}
                    style={inputBase}
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                  />
                </div>
              ))}
              <div>
                <label style={labelBase}>Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  style={{ ...inputBase, resize: "vertical" }}
                  onFocus={focusStyle}
                  onBlur={blurStyle}
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  width: "100%",
                  padding: "0.9rem",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #4a0e1c, #E05A47)",
                  color: "#F5E6D3",
                  fontFamily: '"Cormorant Garamond", sans-serif',
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  border: "none",
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  opacity: status === "sending" ? 0.7 : 1,
                  transition: "all 0.2s ease",
                  letterSpacing: "0.02em",
                }}
                onMouseEnter={e => status !== "sending" && ((e.currentTarget as HTMLElement).style.transform = "translateY(-2px)")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.transform = "translateY(0)")}
              >
                {status === "sending" ? "⏳ Sending..." : status === "sent" ? "✓ Message Sent!" : "✈ Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((s) => {
        const el = s as HTMLElement;
        if (window.scrollY >= el.offsetTop - 160) current = s.id;
      });
      setActive(current);

      const pct =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;
      const bar = document.getElementById("scrollProgress");
      if (bar) bar.style.width = pct + "%";
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <div id="scrollProgress" />
      <nav
        className={`fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-6 md:px-16 py-4 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(13,2,6,0.85)] backdrop-blur-xl border-b border-[rgba(224,90,71,0.12)]"
            : "bg-transparent"
        }`}
      >
        <a
          href="#home"
          className="font-space font-extrabold text-2xl gradient-text tracking-tight no-underline"
        >
          YK<span style={{ color: "#E05A47", WebkitTextFillColor: "#E05A47" }}>.</span>
        </a>

        <ul className="hidden md:flex gap-10 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-space text-xs font-semibold uppercase tracking-[0.12em] transition-colors duration-300 no-underline"
                style={{ color: active === l.href.slice(1) ? "#E05A47" : "#b89598" }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:kalirawan2004yash@gmail.com"
          className="hidden md:inline-block bg-gradient-to-r from-[#4a0e1c] to-[#E05A47] text-[#F5E6D3] px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(224,90,71,0.4)] hover:-translate-y-0.5 no-underline"
        >
          Hire Me
        </a>

        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[1.5px] bg-[#F5E6D3] rounded transition-all duration-300 ${open ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block w-6 h-[1.5px] bg-[#F5E6D3] rounded transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[1.5px] bg-[#F5E6D3] rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>

        {open && (
          <div className="absolute top-full left-0 right-0 bg-[rgba(13,2,6,0.97)] backdrop-blur-xl border-b border-[rgba(224,90,71,0.12)] p-6 md:hidden flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-space text-sm font-semibold uppercase tracking-[0.1em] no-underline"
                style={{ color: active === l.href.slice(1) ? "#E05A47" : "#b89598" }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="mailto:kalirawan2004yash@gmail.com"
              className="bg-gradient-to-r from-[#4a0e1c] to-[#E05A47] text-[#F5E6D3] px-5 py-2.5 rounded-full text-sm font-semibold text-center mt-2 no-underline"
            >
              Hire Me
            </a>
          </div>
        )}
      </nav>
    </>
  );
}

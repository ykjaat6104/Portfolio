import { personalInfo } from "../data/portfolio";

export default function Footer() {
  return (
    <footer
      className="py-10 text-center text-sm relative z-1"
      style={{
        borderTop: "1px solid rgba(224,90,71,0.1)",
        color: "#a38487",
      }}
    >
      <p>
        Designed & Built with <span style={{ color: "#E05A47" }}>&#9829;</span> by{" "}
        <span style={{ color: "#ff7a66", fontWeight: 600 }}>{personalInfo.name.split(" ")[0]}</span>{" "}
        &copy; 2026 All Rights Reserved
      </p>
      <p className="mt-2 text-xs" style={{ color: "#a38487" }}>
        {personalInfo.location} &middot; {personalInfo.email}
      </p>
    </footer>
  );
}

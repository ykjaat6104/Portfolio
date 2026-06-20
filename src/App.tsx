import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Publication from "./components/Publication";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <div className="noise-overlay" />
      <div
        className="orb"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(224,90,71,0.08) 0%, transparent 70%)",
          top: -150,
          left: -150,
          animation: "orb1move 12s ease-in-out infinite alternate",
        }}
      />
      <div
        className="orb"
        style={{
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(74,14,28,0.15) 0%, transparent 70%)",
          bottom: "10%",
          right: -100,
          animation: "orb2move 10s ease-in-out infinite alternate",
        }}
      />
      <div
        className="orb"
        style={{
          width: 300,
          height: 300,
          background: "radial-gradient(circle, rgba(224,90,71,0.06) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          animation: "orb3move 14s ease-in-out infinite alternate",
        }}
      />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Publication />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

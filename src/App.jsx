import { useState, useEffect, useRef } from "react";

const Avatar = ({ size = 60, image, style = {} }) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: "50%",
      overflow: "hidden",
      border: "3px solid white",
      boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
      flexShrink: 0,
      ...style,
    }}
  >
    {image ? (
      <img
        src={image}
        alt="avatar"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    ) : null}
  </div>
);

export default function Elementum() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sectionRefs = useRef([]);

  const MagneticButton = ({ children, className = "", style = {} }) => {
    const btnRef = useRef(null);

    const handleMouseMove = (e) => {
      const btn = btnRef.current;
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    };

    const handleMouseLeave = () => {
      const btn = btnRef.current;
      btn.style.transform = "translate(0px, 0px)";
    };

    return (
      <button
        ref={btnRef}
        className={`magnetic-btn ${className}`}
        style={{
          padding: "14px 28px",
          borderRadius: "50px",
          border: "none",
          cursor: "pointer",
          background: "#111",
          color: "#fff",
          fontWeight: 600,
          ...style,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </button>
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((sec) => {
      if (sec) observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heroAvatars = [
  {
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    size: 100,
    bottom: "60px",
    left: "3%",
  },
  {
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    size: 100,
    bottom: "150px",
    left: "17%",
  },
  {
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    size: 100,
    bottom: "70px",
    left: "30%",
  },
  {
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    size: 100,
    bottom: "60px",
    right: "8%",
  },
  {
    img: "https://randomuser.me/api/portraits/women/23.jpg",
    size: 100,
    bottom: "145px",
    right: "21%",
  },
  {
    img: "https://randomuser.me/api/portraits/men/55.jpg",
    size: 100,
    bottom: "55px",
    right: "35%",
  },
];

  return (
    <>
      <style>{`
      @media (max-width: 768px) {
  h1, h2, h3,  span, a {
    color: #111 !important;
  }
}
      @media (max-width: 768px) {
  .section::before,
  .section::after {
    display: none !important;
  }
}
      @media (max-width: 768px) {
  .section div {
    z-index: auto !important;
  }

  .section {
    position: relative;
  }
}
      @media (max-width: 768px) {
  .section {
    opacity: 1 !important;
    transform: none !important;
  }
      

  .section * {
    color: #111 !important;
  }
}
        @import url('https://fonts.googleapis.com/css2?family=Courgette&family=Space+Grotesk:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap');

        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        body {
          background: #fff;
          overflow-x: hidden;
        }

        @keyframes waveFloat {
          0%   { transform: translateY(0px) translateX(0px); }
          25%  { transform: translateY(-14px) translateX(6px); }
          50%  { transform: translateY(0px) translateX(12px); }
          75%  { transform: translateY(14px) translateX(6px); }
          100% { transform: translateY(0px) translateX(0px); }
        }

        @keyframes floatBlob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -40px) scale(1.1); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* NAV */
        .nav-bar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(12px);
          transition: box-shadow 0.3s;
        }

        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-links {
          display: flex;
          gap: 32px;
          align-items: center;
        }

        .nav-link {
          color: #111;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          font-family: 'Space Grotesk', sans-serif;
          transition: color 0.2s;
          white-space: nowrap;
        }
        .nav-link:hover { color: #7c6bff; }

        .hamburger {
          background: none;
          border: none;
          cursor: pointer;
          display: none;
          flex-direction: column;
          gap: 5px;
          padding: 4px;
        }

        .hamburger span {
          display: block;
          height: 2px;
          background: #111;
          border-radius: 2px;
          transition: all 0.3s;
        }

        /* MOBILE MENU */
        .mobile-menu {
          display: none;
          position: fixed;
          top: 56px; left: 0; right: 0;
          background: rgba(255,255,255,0.98);
          backdrop-filter: blur(12px);
          padding: 20px 24px 28px;
          z-index: 99;
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
          flex-direction: column;
          gap: 0;
        }

        .mobile-menu.open { display: flex; }

        .mobile-menu a {
          display: block;
          padding: 14px 0;
          border-bottom: 1px solid #f0f0f0;
          color: #111;
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
          font-family: 'Space Grotesk', sans-serif;
        }

        /* SECTION ANIMATIONS */
        .section {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.9s cubic-bezier(0.2, 0.8, 0.2, 1);
          will-change: transform, opacity;
        }
        .section.show {
          opacity: 1;
          transform: translateY(0);
        }

        .section .services-row {
          opacity: 0;
          transform: translateY(20px);
        }
        .section.show .services-row {
          animation: rowFadeUp 0.6s ease forwards;
        }
        .section.show .services-row:nth-child(1) { animation-delay: 0.1s; }
        .section.show .services-row:nth-child(2) { animation-delay: 0.2s; }
        .section.show .services-row:nth-child(3) { animation-delay: 0.3s; }

        @keyframes rowFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* SHARED */
        .highlighted-word { display: inline-block; background: #c8f5a0; padding: 0 10px; border-radius: 999px; }
        .highlighted-word-pink { display: inline-block; background: #f5c8e8; padding: 0 10px; border-radius: 999px; }
        .highlighted-word-yellow { display: inline-block; background: #fff3a0; padding: 0 8px; border-radius: 999px; }

        .read-more-link {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 13px; font-weight: 600; color: #111;
          text-decoration: none; border-bottom: 1.5px solid #111;
          padding-bottom: 2px; font-family: 'Space Grotesk', sans-serif;
        }

        .text-lift {
          display: inline-block;
          transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), text-shadow 0.35s ease;
        }
        .text-lift:hover {
          transform: translateY(-4px) scale(1.02);
          text-shadow: 0 10px 22px rgba(0,0,0,0.12);
        }

        .card-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          will-change: transform;
        }
        .card-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .magnetic-btn {
          display: inline-flex; align-items: center; justify-content: center;
          transition: transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
          will-change: transform;
          font-family: 'Space Grotesk', sans-serif;
        }

        /* SERVICES ROW */
        .services-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 0;
          border-bottom: 1px solid #e8e8e8;
          cursor: pointer;
          transition: background 0.2s;
          gap: 20px;
        }
        .services-row:hover {
          background: #f9f9f9;
          padding-left: 12px; padding-right: 12px;
          margin: 0 -12px;
          border-radius: 12px;
        }

        .services-arrow {
          width: 40px; height: 40px;
          border-radius: 50%;
          border: 1.5px solid #111;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s;
          flex-shrink: 0;
        }
        .services-row:hover .services-arrow { background: #111; color: #fff; }

        /* TESTIMONIAL */
        .testimonial-card {
          background: #f4f4f0;
          border-radius: 20px;
          padding: 32px;
          position: relative;
        }

        /* FOOTER */
        .footer-link {
          color: #555; text-decoration: none; font-size: 13px;
          line-height: 2.2; transition: color 0.2s; display: block;
          font-family: 'Space Grotesk', sans-serif;
        }
        .footer-link:hover { color: #111; }

        /* GRID HELPERS */
        .two-col {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 48px;
          align-items: center;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          margin-bottom: 40px;
        }

        /* FLOATING AVATARS */
        .floating-avatar-group {
          display: block;
        }

        /* HERO FLOATING AVATARS */
        .hero-floating-avatars {
          display: block;
        }

        /* TESTIMONIAL LAYOUT */
        .testimonial-layout {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 300px;
        }

        /* ========================
           RESPONSIVE BREAKPOINTS
        ======================== */
        @media (max-width: 900px) {
          .nav-links { display: none; }
          .hamburger { display: flex; }

          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
          }

          .floating-avatar-group { display: none; }
          .hero-floating-avatars { display: none; }
          .testimonial-layout { min-height: unset; }
        }

        @media (max-width: 600px) {
          .nav-inner { padding: 0 16px; height: 52px; }
          .two-col { gap: 28px; }
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 24px; }
          .testimonial-card { padding: 20px 16px; }
          .services-row { flex-wrap: wrap; gap: 10px; }
          .services-row .services-arrow { margin-left: auto; }
          .newsletter-section { padding: 50px 20px !important; }
          .footer-section { padding: 36px 0 20px !important; }
        }

        @media (max-width: 380px) {
          .footer-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* NAV */}
      <nav className="nav-bar" style={{ boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none" }}>
        <div className="nav-inner">
          <span
            className="text-lift"
            style={{
              fontFamily: "'Courgette', cursive",
              fontSize: 20,
              fontWeight: 400,
              letterSpacing: "-0.5px",
              color: "#111",
            }}
          >
            Elementum
          </span>

          <div className="nav-links">
            {["Home", "Studio", "Services", "Contact", "FAQs"].map(item => (
              <a key={item} href="#" className="nav-link">{item}</a>
            ))}
          </div>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span style={{ width: 24, transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span style={{ width: 18, opacity: menuOpen ? 0 : 1 }} />
            <span style={{ width: 24, transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>
        </div>

        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          {["Home", "Studio", "Services", "Contact", "FAQs"].map(item => (
            <a key={item} href="#" onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        className="section"
        style={{
          minHeight: "100vh",
          paddingTop: 56,
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#fff",
        }}
      >
        {/* Decorative squiggle left */}
        <svg style={{ position: "absolute", left: 20, top: "30%", zIndex: 0, opacity: 0.85 }} width="60" height="180" viewBox="0 0 60 180" fill="none">
          <path d="M30 10 C50 40, 10 70, 30 100 C50 130, 10 150, 30 170" stroke="#e8504a" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
          <path d="M22 158 L30 170 L38 160" stroke="#e8504a" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg
  style={{
    position: "absolute",
    top: "20%",
    left: "12%",
    opacity: 0.7,
  }}
  width="80"
  height="200"
  viewBox="0 0 80 120"
>
  <path
    d="M40 10 C60 30,20 50,40 70 C60 90,20 100,40 110"
    stroke="#E8504A"
    strokeWidth="4"
    fill="none"
    strokeLinecap="round"
  />
</svg>

        {/* Purple triangle top-right area */}
        <div style={{ position: "absolute", top: 90, right: "22%", width: 0, height: 0, borderLeft: "28px solid transparent", borderRight: "28px solid transparent", borderBottom: "48px solid #7c6bff", opacity: 0.85, zIndex: 0 }} />
        <div
  style={{
    position: "absolute",
    bottom: 180,
    left: "18%",
    width: 200,
    height: 4,
    background: "#111",
    transform: "rotate(-10deg)",
    opacity: 0.15,
    borderRadius: 10,
  }}
/>

<div
  style={{
    position: "absolute",
    top: 200,
    right: "15%",
    width: 180,
    height: 4,
    background: "#111",
    transform: "rotate(12deg)",
    opacity: 0.15,
    borderRadius: 10,
  }}
/>

        <div
  style={{
    position: "absolute",
    top: 120,
    right: "10%",
    width: 180,
    height: 180,
    background: "#DDD7FF",
    borderRadius: "60% 40% 55% 45%",
    opacity: 0.6,
    zIndex: 0,
  }}
/>

        <div
  style={{
    position: "absolute",
    bottom: 140,
    left: "12%",
    width: 140,
    height: 140,
    background: "#D8F2D7",
    borderRadius: "50%",
    opacity: 0.6,
    zIndex: 0,
  }}
/>      
        <div
  style={{
    position: "absolute",
    top: 220,
    left: "25%",
    width: 100,
    height: 100,
    background: "#FFD9E9",
    borderRadius: "50%",
    opacity: 0.5,
    zIndex: 0,
  }}
/>
        <div
  style={{
    position: "absolute",
    bottom: 220,
    right: "28%",
    width: 120,
    height: 120,
    background: "#FFF4A9",
    borderRadius: "65% 35% 55% 45%",
    opacity: 0.5,
    zIndex: 0,
  }}
/>
        {/* Floating scattered avatars — desktop only */}
        <div className="hero-floating-avatars" style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none" }}>
          {heroAvatars.map((a, i) => (
            <div
              key={i}
              style={{
  position: "absolute",
  top: a.top,
  bottom: a.bottom,
  left: a.left,
  right: a.right,
  animation: `waveFloat ${4 + i * 0.3}s ease-in-out infinite`,
  animationDelay: `${i * 0.4}s`,
}}
            >
              <img
                src={a.img}
                alt="avatar"
                style={{
                  width: a.size,
                  height: a.size,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "3px solid white",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.13)",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>

        {/* Hero text */}
        <div
          style={{
            maxWidth: 720,
marginTop: "-120px",
            width: "100%",
            textAlign: "center",
            padding: "0 20px",
            position: "relative",
            zIndex: 3,
            animation: "fadeUp 0.8s ease both",
          }}
        >
          <h1 style={{
  fontFamily: "'Gerbil', serif",
  fontSize: "clamp(55px, 10vw, 70px)",
  lineHeight: "1.26",
  fontWeight: 400,
  letterSpacing: "0",
  color: "#111",
  textAlign: "center",
}}>
            The{" "}
            <span className="highlighted-word-yellow text-lift" style={{ textDecoration: "underline", textDecorationThickness: 2 }}>thinkers</span>{" "}
            and<br />
            <span className="text-lift">doers</span>{" "}
            were{" "}
            <span className="highlighted-word-pink text-lift">changing</span>
            <br />
            the{" "}
            <span className="highlighted-word text-lift">status</span>{" "}
            <span className="text-lift">Quo with</span>
          </h1>
          <p
            style={{
              fontSize: "clamp(13px, 1.6vw, 15px)",
              color: "#110e0e",
              maxWidth: 480,
              margin: "0 auto",
              lineHeight: 1.65,
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            We are a team of strategists, designers communicators, researchers. Together,{" "}
            we believe that progress only happens when you refuse to play things safe.
          </p>
        </div>
      </section>

      {/* SECTION: Tomorrow */}
      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        className="section"
        style={{ padding: "60px 0", position: "relative", overflow: "hidden" }}
      >
        <div style={{ position: "absolute", top: -60, left: -60, width: 180, height: 180, background: "hsla(319, 77%, 75%, 0.65)", borderRadius: "50%", filter: "blur(70px)", opacity: 0.6, zIndex: 0 }} />
        <div style={{ position: "absolute", bottom: -80, right: -80, width: 220, height: 220, background: "#c8e0ff", borderRadius: "50%", filter: "blur(80px)", opacity: 0.5, zIndex: 0 }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px, 5vw, 60px)", position: "relative", zIndex: 1 }}>
          <div className="two-col">
            <div>
              <div style={{ position: "relative", display: "inline-block" }}>
                <div style={{ position: "absolute", top: -16, right: -16, width: 100, height: 70, background: "#fce4e4", borderRadius: "50%", zIndex: 0 }} />
                <h2
                  className="text-lift"
                  style={{
                    fontFamily: "'Courgette', cursive",
                    fontSize: "clamp(28px, 3.8vw, 48px)",
                    lineHeight: 1.15,
                    fontWeight: 400,
                    letterSpacing: "-0.5px",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  Tomorrow should<br />be better than{" "}
                  <span style={{ textDecoration: "underline", textDecorationThickness: 2 }}>today</span>
                </h2>
              </div>
              <p
                style={{
                  marginTop: 18,
                  fontSize: "clamp(13px, 1.4vw, 14px)",
                  color: "#666",
                  lineHeight: 1.75,
                  maxWidth: 360,
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                We are a team of strategists, designers, communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe.
              </p>
              <a href="#" className="read-more-link" style={{ marginTop: 22, display: "inline-flex" }}>
                Read more <span>→</span>
              </a>
            </div>

            <div
              style={{
                position: "relative",
                height: "clamp(220px, 28vw, 300px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "clamp(170px, 22vw, 220px)",
                  height: "clamp(170px, 22vw, 220px)",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "4px solid #fff",
                  boxShadow: "0 12px 40px rgba(178,250,243,0.5)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                  alt="team"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ position: "absolute", top: "10%", left: "5%", width: 0, height: 0, borderLeft: "36px solid transparent", borderRight: "36px solid transparent", borderBottom: "62px solid #e8504a" }} />
              <div style={{ position: "absolute", bottom: "10%", right: "10%", width: 0, height: 0, borderLeft: "22px solid transparent", borderRight: "22px solid transparent", borderBottom: "38px solid #e8504a", opacity: 0.7 }} />
            </div>
          </div>
        </div>
      </section>

      {/* Decorative wave divider */}
      <div style={{ position: "relative", height: 80 }}>
        <svg
          style={{ position: "absolute", top: "-40px", left: 0, width: "100%", height: "120px", zIndex: 1, pointerEvents: "none" }}
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
        >
          <path d="M1440 40 C1200 0, 900 140, 700 80 C500 20, 300 130, 0 60" stroke="#7c6bff" strokeWidth="2.5" fill="none" opacity="0.5" />
          <path d="M1440 70 C1200 30, 900 160, 700 110 C500 50, 300 160, 0 95" stroke="#f5a623" strokeWidth="2" fill="none" opacity="0.35" />
        </svg>
      </div>

      {/* SECTION: See how we can help */}
      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        className="section"
        style={{
          background: "rgba(223, 245, 168, 0.22)",
          backdropFilter: "blur(12px)",
          padding: "48px 0 64px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <div className="two-col">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <div
                style={{
                  width: "clamp(190px, 24vw, 260px)",
                  height: "clamp(190px, 24vw, 260px)",
                  borderRadius: "50%",
                  overflow: "hidden",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
                  alt="help"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ position: "absolute", bottom: 10, right: 20, width: 0, height: 0, borderLeft: "40px solid transparent", borderRight: "40px solid transparent", borderBottom: "70px solid #e8504a" }} />
            </div>

            <div>
              <h2
                className="text-lift"
                style={{
                  fontFamily: "'Courgette', cursive",
                  fontSize: "clamp(26px, 3.2vw, 42px)",
                  lineHeight: 1.2,
                  fontWeight: 400,
                  letterSpacing: "-0.5px",
                }}
              >
                <span style={{ textDecoration: "underline", textDecorationColor: "#7c6bff", textDecorationThickness: 2 }}>See</span>{" "}
                how we can<br />help you progress
              </h2>
              <p
                style={{
                  marginTop: 16,
                  fontSize: "clamp(13px, 1.4vw, 14px)",
                  color: "#666",
                  lineHeight: 1.75,
                  maxWidth: 340,
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                We offer a series of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design, digital and social research.
              </p>
              <a href="#" className="read-more-link" style={{ marginTop: 20, display: "inline-flex" }}>
                Read more <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: What we can offer */}
      <section
        ref={(el) => (sectionRefs.current[3] = el)}
        className="section"
        style={{ padding: "48px 0", position: "relative", overflow: "hidden", background: "#fff" }}
      >
        <div style={{ position: "absolute", top: -60, left: -60, width: 180, height: 180, background: "rgba(132,242,225,0.45)", borderRadius: "50%", filter: "blur(70px)", zIndex: 0 }} />
        <div style={{ position: "absolute", bottom: -200, right: -200, width: 600, height: 600, background: "radial-gradient(circle, rgba(200,224,255,0.4) 0%, transparent 70%)", filter: "blur(50px)", zIndex: 0 }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px, 5vw, 60px)", position: "relative", zIndex: 1 }}>
          <div style={{ marginBottom: 36, display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <h2
              className="text-lift"
              style={{
                fontFamily: "'Courgette', cursive",
                fontSize: "clamp(30px, 5vw, 62px)",
                fontWeight: 400,
                letterSpacing: "-1.5px",
                lineHeight: 1.05,
              }}
            >
              What we <span className="highlighted-word">can</span><br />offer you!
            </h2>
          </div>

          <div style={{ borderTop: "1px solid rgba(90, 80, 80, 0.08)" }}>
            {[
              { category: "Office of multiple interest content", title: "Collaborative & partnership" },
              { category: "The hanger US Air force digital experimental", title: "We talk about our weight" },
              { category: "Delta faucet content, social, digital", title: "Piloting digital confidence" },
            ].map((item, i) => (
              <div key={i} className="services-row">
                <span
                  style={{
                    fontSize: "clamp(11px, 1.2vw, 12px)",
                    color: "#333",
                    maxWidth: 150,
                    lineHeight: 1.5,
                    fontFamily: "'Space Grotesk', sans-serif",
                    flexShrink: 0,
                  }}
                >
                  {item.category}
                </span>
                <span
                  style={{
                    fontFamily: "'Courgette', cursive",
                    fontSize: "clamp(17px, 2.3vw, 28px)",
                    fontWeight: 400,
                    flex: 1,
                    textAlign: "center",
                  }}
                >
                  {item.title}
                </span>
                <div className="services-arrow" style={{ flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                    <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: Testimonials */}
      <section
        ref={(el) => (sectionRefs.current[4] = el)}
        className="section"
        style={{ padding: "60px 0", background: "transparent" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <h2
            className="text-lift"
            style={{
              fontFamily: "'Courgette', cursive",
              fontSize: "clamp(22px, 3.2vw, 38px)",
              fontWeight: 400,
              textAlign: "center",
              letterSpacing: "-0.5px",
              marginBottom: 48,
            }}
          >
            What our customer<br />
            says{" "}
            <span style={{ textDecoration: "underline", textDecorationColor: "#f5a623", textDecorationThickness: 2 }}>About Us</span>
          </h2>

          <div className="testimonial-layout">
            {/* Left avatars */}
            <div
              className="floating-avatar-group"
              style={{ position: "absolute", left: 0, top: 0, display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-end", paddingRight: 16 }}
            >
              <Avatar size={58} image="https://randomuser.me/api/portraits/women/65.jpg" style={{ animation: "waveFloat 4s ease-in-out infinite" }} />
              <Avatar size={40} image="https://randomuser.me/api/portraits/men/22.jpg" style={{ animation: "waveFloat 3.5s ease-in-out infinite", alignSelf: "flex-start", animationDelay: "0.5s" }} />
              <div style={{ width: 90, height: 90, borderRadius: "50%", overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,0.1)", animation: "waveFloat 4.5s ease-in-out infinite", animationDelay: "1s" }}>
                <img src="https://randomuser.me/api/portraits/men/41.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <Avatar size={40} image="https://randomuser.me/api/portraits/women/28.jpg" style={{ animation: "waveFloat 3.8s ease-in-out infinite", animationDelay: "0.3s" }} />
            </div>

            <div className="testimonial-card card-lift" style={{ maxWidth: 420, width: "100%", zIndex: 2 }}>
              <div style={{ fontSize: 44, color: "#bbb", fontFamily: "Georgia, serif", lineHeight: 0.8, marginBottom: 10 }}>"</div>
              <p
                style={{
                  fontSize: "clamp(13px, 1.4vw, 14px)",
                  color: "#444",
                  lineHeight: 1.8,
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                Elementum delivered the site within the timeline as they requested. In the end, the client found a 50% increase in traffic within days since its launch. They also had an impressive ability to use technologies that the company hadn't used, which have also proved to be easy to use and reliable.
              </p>
              <div style={{ fontSize: 44, color: "#bbb", fontFamily: "Georgia, serif", lineHeight: 0.8, textAlign: "right", marginTop: 6 }}>"</div>
            </div>

            {/* Right avatars */}
            <div
              className="floating-avatar-group"
              style={{ position: "absolute", right: 0, top: 0, display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start", paddingLeft: 16 }}
            >
              <Avatar size={40} image="https://randomuser.me/api/portraits/women/21.jpg" style={{ alignSelf: "flex-end", animation: "waveFloat 4.2s ease-in-out infinite", animationDelay: "0.7s" }} />
              <div style={{ width: 82, height: 82, borderRadius: "50%", overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,0.1)", animation: "waveFloat 3.6s ease-in-out infinite", animationDelay: "0.2s" }}>
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <Avatar size={40} image="https://randomuser.me/api/portraits/men/45.jpg" style={{ animation: "waveFloat 4s ease-in-out infinite", animationDelay: "0.9s" }} />
              <div style={{ width: 110, height: 110, borderRadius: "50%", overflow: "hidden", boxShadow: "0 12px 32px rgba(0,0,0,0.12)", animation: "waveFloat 4.8s ease-in-out infinite", animationDelay: "0.4s" }}>
                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section
        ref={(el) => (sectionRefs.current[5] = el)}
        className="section newsletter-section"
        style={{
          background: "#d4ead8",
          padding: "80px clamp(20px, 6vw, 60px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <svg style={{ position: "absolute", top: 18, left: "50%", transform: "translateX(-100px)" }} width="55" height="55" viewBox="0 0 60 60" fill="none">
          <path d="M30 5 Q10 25 30 55" stroke="rgb(232, 65, 10)" strokeWidth="5.5" fill="none" strokeLinecap="round"/>
          <path d="M22 48 L30 55 L36 46" stroke="rgba(255, 0, 0, 0.9)" strokeWidth="5.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div style={{ position: "absolute", right: "clamp(20px, 6vw, 80px)", top: "50%", transform: "translateY(-50%)", width: 72, height: 90, background: "#7c6bff", borderRadius: "0 44px 44px 0 / 0 72px 72px 0", opacity: 0.85 }} />

        <div style={{ textAlign: "center", maxWidth: 520, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <h2
            className="text-lift"
            style={{
              fontFamily: "'Courgette', cursive",
              fontSize: "clamp(28px, 5vw, 56px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-1px",
              color: "#1a2a1a",
              marginBottom: 14,
            }}
          >
            Subscribe to<br />our newsletter
          </h2>
          <p
            style={{
              fontSize: "clamp(13px, 1.4vw, 14px)",
              color: "rgb(9, 68, 9)",
              marginBottom: 32,
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            To make your stay special and even more memorable
          </p>
          <MagneticButton style={{ fontSize: "16px", padding: "16px 36px" }}>
            Subscribe Now
          </MagneticButton>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        ref={(el) => (sectionRefs.current[6] = el)}
        className="section footer-section"
        style={{ background: "#e8c8e849", borderTop: "1px solid #eee", padding: "50px 0 28px" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <div className="footer-grid">
            <div>
              <p className="text-lift" style={{ fontWeight: 600, fontSize: 13, marginBottom: 14, color: "#111", fontFamily: "'Space Grotesk', sans-serif" }}>Company</p>
              {["Home", "Studio", "Service", "Blog"].map(l => <a key={l} href="#" className="footer-link">{l}</a>)}
            </div>
            <div>
              <p className="text-lift" style={{ fontWeight: 600, fontSize: 13, marginBottom: 14, color: "#111", fontFamily: "'Space Grotesk', sans-serif" }}>Terms & Policies</p>
              {["Privacy Policy", "Terms & Conditions", "Explore", "Accessibility"].map(l => <a key={l} href="#" className="footer-link">{l}</a>)}
            </div>
            <div>
              <p className="text-lift" style={{ fontWeight: 600, fontSize: 13, marginBottom: 14, color: "#111", fontFamily: "'Space Grotesk', sans-serif" }}>Follow Us</p>
              {["Instagram", "LinkedIn", "Youtube", "Twitter"].map(l => <a key={l} href="#" className="footer-link">{l}</a>)}
            </div>
            <div>
              <p className="text-lift" style={{ fontWeight: 600, fontSize: 13, marginBottom: 14, color: "#111", fontFamily: "'Space Grotesk', sans-serif" }}>Contact</p>
              <p style={{ fontSize: 13, color: "#555", lineHeight: 1.8, fontFamily: "'Space Grotesk', sans-serif" }}>1498w Flurion ste, STE<br />2D Chicago, IL 63867.</p>
              <p style={{ fontSize: 13, color: "#555", marginTop: 6, fontFamily: "'Space Grotesk', sans-serif" }}>(323) 4667890000</p>
              <p style={{ fontSize: 13, color: "#555", fontFamily: "'Space Grotesk', sans-serif" }}>info@elementum.com</p>
            </div>
          </div>
          <div
            style={{
              borderTop: "1px solid #eee",
              paddingTop: 20,
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontFamily: "'Courgette', cursive", fontSize: 18 }}>Elementum</span>
            <p style={{ fontSize: 12, color: "#888", fontFamily: "'Space Grotesk', sans-serif" }}>©2023 Elementum. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
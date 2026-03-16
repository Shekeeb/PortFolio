import { useEffect, useState } from "react";

export default function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`header ${sticky ? "sticky" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: "18px 50px",
        backgroundColor: "#081b29",
        zIndex: 1000,
        boxSizing: "border-box",
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {/* Brand */}
        <a
          href="#"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "x-large",
            fontFamily: "cursive",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => (e.target.style.color = "#00abf0")}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          𝓈𝒽ℯ𝓀ℯℯ𝒷
        </a>

        {/* Nav Links */}
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            listStyle: "none",
            margin: 0,
            padding: 0,
            gap: "30px",
            flexShrink: 0,
          }}
        >
          {["home", "about", "projects", "services", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={(e) => handleNavClick(e, `#${section}`)}
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "16px",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#00abf0")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

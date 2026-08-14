import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import Container from "../Container/Container";
import "./Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="navbar">
      <Container classname="navbar-container">
        <a href="#top" className="logo">
          Gabriel Silva
        </a>

        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <a href="#top" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
            </li>

            <li>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
            </li>

            <li>
              <a href="#skills" onClick={() => setIsMenuOpen(false)}>
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" onClick={() => setIsMenuOpen(false)}>
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>

          <div className="mobile-menu-footer">
            <span>© 2026 Gabriel Silva</span>
            <span>Desenvolvedor Web</span>
          </div>
        </nav>

        <div className="nav-actions">
          <button
            className={`menu-button ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            <span className="menu-row"></span>
            <span className="menu-row"></span>
            <span className="menu-row"></span>
          </button>

          <button
            className={`theme-button ${isMenuOpen && "theme-mobile-active"}`}
            onClick={() => setTheme((prev) => prev === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Moon /> : <Sun />}
          </button>
        </div>
      </Container>
    </header>
  );
}

import { useEffect, useState } from "react";
import { Moon, Sun } from 'lucide-react';
import Container from "../Container/Container";
import "./Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
    console.log(isMenuOpen);
  }

  function toggleTheme() {
    setIsDark((prev) => {
      const newtheme = !prev;

      document.documentElement.setAttribute(
        "data-theme",
        newtheme ? "dark" : "light",
      );

      return newtheme;
    });
  }

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

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

          <button className={`theme-button ${isMenuOpen && "theme-mobile-active"}`} onClick={toggleTheme}>
            {isDark ? <Moon /> : <Sun />}
          </button>
        </div>
      </Container>
    </header>
  );
}

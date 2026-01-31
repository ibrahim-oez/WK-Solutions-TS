import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../global_assets/img/wk-solutions-logo-svg/path429.svg";
import { Menu, X } from "lucide-react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass =
    "block px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition";
  const activeClass = "bg-blue-200 text-blue-900 ";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold text-blue-700">
          <img src={Logo} alt="WK Logo" className="h-8 mx-auto" />
        </NavLink>

        {/* Burger Icon (nur sichtbar auf Mobile) */}
        <button
          className="sm:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Navigation Links */}
        <div
          className={`sm:flex ${
            menuOpen ? "block" : "hidden"
          } absolute sm:static top-12 left-0 w-full sm:w-auto bg-white sm:bg-transparent px-5 py-5 sm:px-0 shadow sm:shadow-none space-y-2 sm:space-y-0 sm:space-x-4 `}
        >
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            Start
          </NavLink>
          <NavLink
            to="/leistungen"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            Leistungen
          </NavLink>
          <NavLink
            to="/ueber-mich"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            Über mich
          </NavLink>
          {/*
          <span
            className={`${linkClass} cursor-not-allowed opacity-50 text-gray-400`}
            title="Bewertungen sind momentan nicht verfügbar"
          >
            Bewertungen
          </span>
            */}
          <NavLink
            to="/kontakt"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            Kontakt
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

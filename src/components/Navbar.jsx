import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar__logo">ReactAcademy</span>
      <ul className="navbar__links">
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/cursos" className={({ isActive }) => (isActive ? "active" : "")}>
            Cursos
          </NavLink>
        </li>
        <li>
          <NavLink to="/nosotros" className={({ isActive }) => (isActive ? "active" : "")}>
            Nosotros
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;


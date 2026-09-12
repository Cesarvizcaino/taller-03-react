import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar__logo">ReactAcademy</span>
      <ul className="navbar__links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#cursos">Cursos</a></li>
        <li><a href="#nosotros">Nosotros</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
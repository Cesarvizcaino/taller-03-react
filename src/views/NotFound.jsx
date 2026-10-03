import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <section className="not-found">
      <h2 className="not-found__code">404</h2>
      <p className="not-found__text">Esta página no existe.</p>
      <Link to="/" className="not-found__link">Volver al inicio</Link>
    </section>
  );
}

export default NotFound;
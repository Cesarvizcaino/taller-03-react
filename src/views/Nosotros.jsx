import "./Nosotros.css";

function Nosotros() {
  return (
    <section className="nosotros">
      <h2 className="nosotros__title">Sobre ReactAcademy</h2>
      <p className="nosotros__text">
        Somos un grupo de desarrolladores que enseña React con proyectos reales,
        sin relleno teórico. Creemos que se aprende escribiendo código, no solo leyendo sobre él.
      </p>
      <div className="nosotros__values">
        <div className="nosotros__value">
          <h3>+500</h3>
          <p>estudiantes formados</p>
        </div>
        <div className="nosotros__value">
          <h3>4</h3>
          <p>cursos disponibles</p>
        </div>
        <div className="nosotros__value">
          <h3>100%</h3>
          <p>práctico</p>
        </div>
      </div>
    </section>
  );
}

export default Nosotros;
import { useState } from "react";
import "./EnrollmentCounter.css";

function EnrollmentCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(Math.max(0, count - 1));

  return (
    <section className="enrollment">
      <h2 className="enrollment__title">¿Cuántos estudiantes van a inscribirse?</h2>
      <p className="enrollment__subtitle">Usa los botones para ajustar el número</p>

      <div className="enrollment__counter">
        <button className="enrollment__btn" onClick={decrement}>−</button>
        <span className="enrollment__count">{count}</span>
        <button className="enrollment__btn" onClick={increment}>+</button>
      </div>

      <p className="enrollment__label">estudiantes inscritos</p>
    </section>
  );
}

export default EnrollmentCounter;
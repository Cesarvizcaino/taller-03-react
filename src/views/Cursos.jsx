import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";
import "./Cursos.css";

function Cursos() {
  return (
    <section className="cursos">
      <h2 className="cursos__title">Nuestros Cursos</h2>
      <p className="cursos__subtitle">Elige el camino que mejor se adapte a ti</p>
      <div className="cursos__grid">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            icon={course.icon}
            title={course.title}
            description={course.description}
            level={course.level}
          />
        ))}
      </div>
    </section>
  );
}

export default Cursos;
import CourseCard from "./CourseCard";
import { courses } from "../data/courses";
import "./CourseList.css";

function CourseList() {
  return (
    <section className="course-list">
      <h2 className="course-list__title">Nuestros Cursos</h2>
      <p className="course-list__subtitle">Elige el camino que mejor se adapte a ti</p>
      <div className="course-list__grid">
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

export default CourseList;
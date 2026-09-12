import "./CourseCard.css";

function CourseCard({ icon, title, description, level }) {
  return (
    <div className="course-card">
      <div className="course-card__icon">{icon}</div>
      <h3 className="course-card__title">{title}</h3>
      <p className="course-card__description">{description}</p>
      <span className="course-card__badge">{level}</span>
    </div>
  );
}

export default CourseCard;
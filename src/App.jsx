import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CourseList from "./components/CourseList";
import EnrollmentCounter from "./components/EnrollmentCounter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <CourseList />
      <EnrollmentCounter />
      <Footer />
    </div>
  );
}

export default App;
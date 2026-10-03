import CityInfo from "./components/CityInfo";
import BookInfo from "./components/BookInfo";
import Header from "./components/Header";
import CourseCard from "./components/CoursCard";
function App() {
  return (
    // {/* <main>
    //   (Урок №1)
    //   <CityInfo />
    //   <hr />
    //   <BookInfo />
    // </main>*/}

    <div>
      <Header studentName="Володимир" />
      <CourseCard
        title="React JS"
        teacher="Volodimir Jurlevich"
        credits={10}
        isActive={true}
      />
      <CourseCard
        title="HTML/CSS"
        teacher="Volodimir Jurlevich"
        isActive={false}
      />
    </div>
  );
}

export default App;

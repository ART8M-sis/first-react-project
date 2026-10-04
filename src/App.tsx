{// (Урок №1)
// import CityInfo from "./components/CityInfo";
// import BookInfo from "./components/BookInfo";
// (Урок №2)
// import { title } from "process";
// import Header from "./components/Header";
// import CourseCard from "./components/CoursCard";
// import Section from "./components/Section";
//
// (Урок №2)
// const myCourses=[
//   {
//     id: 'c1',
//     title: 'HTML/CSS',
//     teacher: 'Volodimir Jurlevich',
//     credits: 10,
//     isActive: true
//   },
//   {
//     id: 'c2',
//     title: 'JavaScript',
//     teacher: 'Volodimir Jurlevich',
//     credits: 20,
//     isActive: false
//   },
//   {
//     id: 'c3',
//     title: 'React JS',
//     teacher: 'Volodimir Jurlevich',
//     isActive: true
//   }
// ]


}
import HomeworkCard from "./components/HomeworkCard";
import Section from "./components/Section";

const homeworks = [
  {
    id: 1,
    title:'Основи React',
    course: 'React JS',
    isCompleted: true,
    score: 95,
  },
    {
      id: 2,
      title: 'Робота з масивами',
      course: 'JavaScript Advanced',
      isCompleted: true,
    },
    {
      id: 3,
      title: 'Створення компонентів',
      course: 'React JS',
      isCompleted: false,
    },
]

function App() {
  return (
    // {/*(Урок №1) 
    // //  <main>
    // //   <CityInfo />
    // //   <hr />
    // //   <BookInfo />
    // // </main>*/}
    // {/*(Урок №2.1)
    //   //<div>
    //   // 
    //   // <CourseCard
    //   //   title="React JS"
    //   //   teacher="Volodimir Jurlevich"
    //   //   credits={10}
    //   //   isActive={true}
    //   // />
    //   // <CourseCard
    //   //   title="HTML/CSS"
    //   //   teacher="Volodimir Jurlevich"
    //   //   isActive={false}
    //   // /> 
    //   //
    //   // (Урок №2.2)
    //   // <Header studentName="Володимир" />
    //   //
    //   // <Section title="Мої курси">
    //   //   <div style={{ display: "flex", flexWrap: "wrap"}}>
    //   //     {
    //   //       myCourses.map((course)=>(
    //   //         <CourseCard
    //   //           key={course.id}
    //   //           title={course.title}
    //   //           teacher={course.teacher}
    //   //           credits={course.credits}
    //   //           isActive={course.isActive}
    //   //           />
    //   //       ))}
    //   //   </div>
    //   // </Section>
    //   //
    //   // <Section title="Мої завдання">
    //   //   <p>Тут будуть моі завдання...</p>
    //   // </Section>
    //   //
    //   // <Section title="Мої заняття">
    //   //   <p>Тут будуть відвідані та майбутні заняття...</p>
    //   // </Section>
    // </div>*/}

    <main className="p-8">
      <Section title="Мої домашні завдання">
        <div className="bg-green-100">
          {homeworks.map((hw) => (
            <HomeworkCard
              key={hw.id} 
              title={hw.title}
              course={hw.course}
              isCompleted={hw.isCompleted}
              score={hw.score} 
            />
          ))}
        </div>
      </Section>
    </main>
  );
}

export default App;

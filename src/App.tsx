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
import LessonCard from "./components/LessonCard"

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

const lessons = [
  {
    id: 1,
    topic: 'Основи React',
    date: '12.10.2026 10:00',
    isOnline: true,
    zoomLink: 'https://zoom.us/j/123456789',
  },
  {
    id: 2,
    topic: 'Робота з масивами',
    date: '14.10.2026 12:30',
    isOnline: false,
  },
  {
    id: 3,
    topic: 'Створення компонентів',
    date: '16.10.2026 09:00',
    isOnline: true,
    zoomLink: 'https://zoom.us/j/987654321',
  },
  {
    id: 4,
    topic: 'React Hooks',
    date: '18.10.2026 15:00',
    isOnline: true,
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

      <Section title="Розклад">
        <div className="bg-green-100">
          {lessons.map((lesson) => (
            <LessonCard
              key={lesson.id}
              topic={lesson.topic}
              date={lesson.date}
              isOnline={lesson.isOnline}
              zoomLink={lesson.zoomLink}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}

export default App;

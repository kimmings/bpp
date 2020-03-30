import React, { useContext } from 'react';
import CourseContext from '../../store/context';
import Learner from '../Learner';
import Header from '../Header';
import CourseTable from '../CourseTable/CourseTable'

const App = () => {
  const { courses, currentUser, register } = useContext(CourseContext);

  const userCourses = Object.values(courses).filter(course => {
    return course.attendees.indexOf(currentUser.id) > -1;
  }).map(course => course.title);

  return (
    <div className="App">
      <Header>{ ` ` }</Header>
        <h1>Courses</h1>
        <Learner 
          user={currentUser} 
          courses={userCourses} />
        <CourseTable 
          action={register} 
          courses={courses} 
          currentUser={currentUser} />
    </div>
  );
}

export default App;

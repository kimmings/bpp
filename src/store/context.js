import React, { createContext, useState, useContext } from "react"
import { clone } from 'ramda';
import courses from './courses';

/* values would be pulled from server via async api fetch */
const currentUser = {
    id: 123,
    firstName: 'Bilbo',
    lastName: 'Baggins',
    email: 'baggins@the-shire.com',
  };

const CourseContext = createContext({
  courses,
  currentUser,
})

const registerUser = (currentUser, courses, courseId) => {
  if(courses[courseId].attendees.indexOf(currentUser.id) > -1) return courses;

  const newCourses = clone(courses);
  newCourses[courseId].attendees.push(currentUser.id);
  return newCourses;
}

const deregisterUser = (currentUser, courses, courseId) => {
  const newCourses = clone(courses);
  const course = newCourses[courseId];
  course.attendees = course.attendees.filter(id => id !== currentUser.id);
  return newCourses;
};

const CourseProvider = ({ children }) => {
  const { courses, currentUser } = useContext(CourseContext);
  const [stateCourses, setStateCourses] = useState(courses);
  const [stateUser, setStateUser] = useState(currentUser);

  const register = courseId => {
    let newCourses;
    const course = stateCourses[courseId];
    if(course.attendees.indexOf(stateUser.id) > -1) {
      newCourses = deregisterUser(stateUser, stateCourses, courseId)
    } else {
      newCourses = registerUser(stateUser, stateCourses, courseId);  
    }
    setStateCourses(newCourses);
  }

  return (
    <CourseContext.Provider
      value={{
        register,
        courses: stateCourses,
        currentUser: stateUser,
      }}
    >
      {children}
    </CourseContext.Provider>
  )
}

export default CourseContext;
export { CourseProvider, registerUser, deregisterUser }

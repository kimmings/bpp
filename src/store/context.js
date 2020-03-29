import React, { createContext, useState, useContext } from "react"
import courses from './courses';

const currentUser = {
    id: 123,
    firstName: 'Bilbo',
    lastName: 'Baggins',
    email: 'baggins@the-shire.com',
    courses: []
  };

const CourseContext = createContext({
  courses,
  currentUser,
})

const registerUser = (currentUser, courses, courseId) => {
  const newCourses = courses.reduce((accumulator, item) => {
    const newItem = { ...item };
    if(newItem.id === courseId){ 
      newItem.attendance = newItem.attendance + 1;
    }

    accumulator.push(newItem);
    return accumulator;
  }, []);

  const user = {
    ...currentUser,
    courses: [ ...currentUser.courses, courseId]   
  };
  
  return { 
    courses: newCourses,
    currentUser: user
  };
}

const deregisterUser = (currentUser, courses, courseId) => {
  if(currentUser.courses.indexOf(courseId) === -1) return { currentUser, courses };

  const newCourses = courses.reduce((accumulator, item) => {
    const newItem = { ...item };
    if(newItem.id === courseId){ 
      newItem.attendance = newItem.attendance - 1;
    }

    accumulator.push(newItem);
    return accumulator;
  }, []);


  const userCourses = currentUser.courses.filter(id => id !== courseId);

  const user = {
    ...currentUser,
    courses: userCourses   
  };

  return { 
    courses: newCourses,
    currentUser: user
  };
};

const CourseProvider = ({ children }) => {
  const { courses, currentUser } = useContext(CourseContext);
  const [stateCourses, setStateCourses] = useState(courses);
  const [stateUser, setStateUser] = useState(currentUser);

  const register = courseId => {
    let state;
    if(stateUser.courses.indexOf(courseId) > -1 ) {
      state = deregisterUser(stateUser, stateCourses, courseId)
    } else {
      state = registerUser(stateUser, stateCourses, courseId);  
    }
    setStateCourses(state.courses);
    setStateUser(state.currentUser);
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
export { CourseProvider }

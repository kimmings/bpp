import React from 'react';

export const UNLIMITED = 'unlimited';

export const types = {
  REGISTER: 'types/register',
  DEREGISTER: 'types/deregister'
};

const courses = [{ 
    id: 1,
    title: "Law",
    description: "A Law Course",
    cost: 1000,
    type: "Online",
    seats: UNLIMITED
  },
  {
    id: 2,
    title: "Accounting",
    description: "An Accounting Course",
    cost: 500,
    type: "Classroom",
    seats: 10,
    attendance: 1
  },
  {
    id: 3,
    title: "Management",
    description: "A Management Course", 
    cost: 200,
    type: "Classroom",
    seats: 10,
    attendance: 9
  },
  {
    id: 4,
    title: 'Software Engineering',
    description: 'A very popular course',
    cost: 300,
    type: "Classroom",
    seats: 10,
    attendance: 10
  }
];



const registerUser = (state, action) => {
  const { courseId } = action.payload;
  const newCourses = state.courses.reduce((accumulator, item) => {
    const newItem = { ...item };
    if(newItem.id === courseId){ 
      newItem.attendance = newItem.attendance + 1;
    }

    accumulator.push(newItem);
    return accumulator;
  }, []);


  const user = {
    ...state.currentUser,
    courses: [ ...state.currentUser.courses, courseId]   
  };

  return { 
    ...state,
    courses: newCourses,
    currentUser: user
  };
}

const deregisterUser = (state, action) => {
  const { courseId } = action.payload;

  if(state.currentUser.courses.indexOf(courseId) === -1) return state;

  const newCourses = state.courses.reduce((accumulator, item) => {
    const newItem = { ...item };
    if(newItem.id === courseId){ 
      newItem.attendance = newItem.attendance - 1;
    }

    accumulator.push(newItem);
    return accumulator;
  }, []);


  const userCourses = state.currentUser.courses.filter(id => id !== courseId);

  const user = {
    ...state.currentUser,
    courses: userCourses   
  };

  return { 
    ...state,
    courses: newCourses,
    currentUser: user
  };
};

const registerReducer = (state, action) => {
  switch(action.type) {
    case types.REGISTER: 
      return registerUser(state, action);
    case types.DEREGISTER:
      return deregisterUser(state, action);
    default:
      return state;
  }
};

const updateContext = context => {
  console.log(context);
}

const courseContext = {
  courses,
  currentUser: {
    id: 123,
    firstName: 'Bilbo',
    lastName: 'Baggins',
    email: 'baggins@the-shire.com',
    courses: []
  },
  registerReducer,
  updateContext,
}


const CourseContext = React.createContext(courseContext);

export const CourseProvider = ({children}) => {
  const [ courses, setCourses ] = React.useState([]);

  const updateCourses = () => {};

  return (
    <CourseContext.Provider
      value={{
        updateCourses,
        courses,
      }}
    >
      {children}
    </CourseContext.Provider>
  )
};

export default CourseContext;

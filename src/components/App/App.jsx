import React, { useReducer, useContext } from 'react';
import CourseContext, { types } from '../../store/contextStore';
import Learner from '../Learner';
import Header from '../Header';
import CourseTable from '../CourseTable/CourseTable'

const App = () => {
  const {courses, currentUser, registerReducer} = useContext(CourseContext);
  const [state, dispatch] = useReducer(registerReducer, { courses, currentUser});

  const register = courseId => {
    const { courses } = state.currentUser;
    const type = courses.indexOf(courseId) > -1 ? types.DEREGISTER : types.REGISTER; 

    console.log('register', courseId, type);

    dispatch({
      type,
      payload: {
        userId: state.currentUser.id,
        courseId
      }
      });
  };

  return (
    <div className="App">
      <Header>{ ` ` }</Header>
        <h1>Courses</h1>
        <Learner user={state.currentUser} />
        <CourseTable action={register} data={state} />
    </div>
  );
}

export default App;

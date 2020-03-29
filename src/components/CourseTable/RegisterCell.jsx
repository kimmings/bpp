import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TableCell from '@material-ui/core/TableCell';
import Button from '../Buttons'

const Label = styled.span`
  padding: 10px;
  background: lightgreen;
  width: 75%;
`;

const CourseFullCell = () => (<TableCell align="center"><Label>Course Full</Label></TableCell>);

const RegisterCell = ({ courseFull, userRegistered, action, courseId }) => {
  if(courseFull && !userRegistered) 
    return <CourseFullCell />;
  
  return (
    <TableCell align="center" width="130px">
      <Button registered={userRegistered} action={action} />  
    </TableCell>);
};

RegisterCell.propTypes = {
  courseFull: PropTypes.bool,
  userRegistered: PropTypes.bool,
  action: PropTypes.func,
  courseId: PropTypes.number
};

export default RegisterCell;

import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import RegisterCell from './RegisterCell';

const CourseRow = ({ 
  action,
  userRegistered, 
  courseId, 
  title, 
  description, 
  cost, 
  type, 
  seats, 
  attendance 
}) => {
  const courseFull = type !== 'Online' && seats === attendance;

  const registerAction = () => action(courseId);

  return (
    <TableRow key={courseId}>
      <TableCell component="th" scope="row">{title}</TableCell>
      <TableCell align="left">{description}</TableCell>
      <TableCell align="center">&pound;{cost}</TableCell>
      <TableCell align="center">{type}</TableCell>
      <TableCell align="center">{ type === 'Classroom' ? seats - attendance : 'unlimited'}</TableCell>
      <RegisterCell courseFull={courseFull} userRegistered={userRegistered} action={registerAction} courseId={courseId} /> 
    </TableRow>
  );
};

CourseRow.propTypes = {
  action: PropTypes.func,
  userRegistered: PropTypes.bool,
  courseId: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  cost: PropTypes.number,
  type: PropTypes.string,
  seats: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  attendance: PropTypes.number
};

export default CourseRow;

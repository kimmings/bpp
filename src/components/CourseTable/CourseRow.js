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
  attendees,
}) => {
  const courseFull = type !== 'Online' && seats === attendees.length;
  
  const registerAction = () => action(courseId);

  return (
    <TableRow key={courseId}>
      <TableCell component="th" scope="row">{title}</TableCell>
      <TableCell align="left">{description}</TableCell>
      <TableCell align="center">&pound;{cost}</TableCell>
      <TableCell align="center">{type}</TableCell>
      <TableCell align="center">{ type === 'Classroom' ? seats - attendees.length : 'unlimited'}</TableCell>
      <RegisterCell courseFull={courseFull} userRegistered={userRegistered} action={registerAction} courseId={courseId} /> 
    </TableRow>
  );
};

CourseRow.propTypes = {
  action: PropTypes.func.isRequired,
  userRegistered: PropTypes.bool.isRequired,
  courseId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  seats: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  attendees: PropTypes.array.isRequired
};

export default CourseRow;

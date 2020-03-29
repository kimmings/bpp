import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import { makeStyles } from '@material-ui/core/styles';
import Headings from './Headings';
import CourseRow from './CourseRow';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default ({ currentUser, courses, action }) => {
  const classes = useStyles();
  return ( 
    <Table className={classes.table} aria-label="simple table">
      <Headings />
      <TableBody>
        { courses.map( row => {
          const { id, ...rest } = row;
          const registered = currentUser.courses.indexOf(id) > -1;
          return (<CourseRow 
            key={id} 
            { ...rest } 
            courseId={id}
            action={action}
            userRegistered={registered} />);
          })
          }
      </TableBody>
    </Table>
  );
};

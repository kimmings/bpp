import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Headings from './Headings';
import CourseRow from './CourseRow';

export default ({ currentUser, courses, action }) => {
  return ( 
    <Table>
      <Headings />
      <TableBody>
        { Object.values(courses).map( row => {
          const { id, ...rest } = row;
          const registered = rest.attendees.indexOf(currentUser.id) > -1;
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

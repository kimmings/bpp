import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default () => (<TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="center">Cost</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center">Remaining Seats</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>);


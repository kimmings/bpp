import React from 'react';
import { shallow } from 'enzyme';
import Headings  from './Headings';
import TableCell from '@material-ui/core/TableCell';

describe('Table Headings', () => {
  it('should render the expected headings', () => {
    const expectedHeadings = [
      'Title', 
      'Description', 
      'Cost',
      'Type', 
      'Remaining Seats', 
      ''];
    const component = shallow(<Headings />);
    const headers = component.find(TableCell);
    headers.map((header, i) => {
      return expect(header.text()).toEqual(expectedHeadings[i]);
    });
  });
});

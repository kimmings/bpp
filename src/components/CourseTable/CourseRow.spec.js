import React from 'react';
import { mount } from 'enzyme';
import CourseRow from './CourseRow';
import TableCell from '@material-ui/core/TableCell';
const defaultProps = {
  action: jest.fn(),
  userRegistered: false,
  id: 1234,
  title: 'Course Foo',
  description: 'Description Foo',
  cost: 300,
  type: 'Online',
  seats: 10,
  attendance: 1,
};

const setUp = (props = {})  => {
  return mount(<table>
    <tbody>
      <CourseRow {...defaultProps} {...props} />
        </tbody>
    </table>);
};

describe('Course Row', () => {
  it('renders online content', () => {
    const component = setUp();
    const cells = component.find(TableCell);
    expect(cells).toHaveLength(6);
    expect(cells.at(0).text()).toEqual(defaultProps.title);
    expect(cells.at(1).text()).toEqual(defaultProps.description);
    expect(cells.at(2).text()).toEqual(`£${defaultProps.cost}`);
    expect(cells.at(3).text()).toEqual('Online');
    expect(cells.at(4).text()).toEqual('unlimited');
    expect(cells.at(5).text()).toEqual('Register');
  });

  it('renders Classroom content', () => {
    const component = setUp({ type: 'Classroom' });
    const cells = component.find(TableCell);
    expect(cells.at(3).text()).toEqual('Classroom');
    expect(cells.at(4).text()).toEqual("9");
  });
});

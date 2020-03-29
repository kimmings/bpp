import React from 'react';
import { mount } from 'enzyme';
import Button from '../Buttons';
import RegisterCell from './RegisterCell';

const setUp = (full = true, registered = false) => {
  return mount(
      <table>
        <tbody>
          <tr>
            <RegisterCell courseFull={full} userRegistered={registered} />
          </tr>
        </tbody>
      </table>);
};

describe('RegisterCell', () => {
  it('should render course full notice when course is full', () => {
    const component = setUp();
    expect(component.text()).toEqual('Course Full'); 
  });

  it('should render a button when the course has availability', () => {
    const component = setUp(false, false);
    expect(component.find(Button)).toHaveLength(1);
  });

  it('should render a button when the course is full but user is registered', () => {
    const component = setUp(true, true);
    expect(component.find(Button)).toHaveLength(1);
  });
});

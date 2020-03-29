import React from 'react';
import { shallow } from 'enzyme';
import Button from './';


describe('Buttons', () => {
  it('should render a DeregisterButton when registered', () => {
    const component = shallow(<Button registered={true} />);
    expect(component.text()).toEqual('Deregister');
  });

  it('should render a RegisterButton when not registered', () => {
    const component = shallow(<Button registered={false} />);
    expect(component.text()).toEqual('Register');
  });

  it('should call action on click - unregistered', () => {
    const actionSpy = jest.fn();
    const component = shallow(<Button registered={false} action={actionSpy} />);
    component.simulate('click');
    expect(actionSpy).toHaveBeenCalled();
  });

  it('should call action on click - registered', () => {
    const actionSpy = jest.fn();
    const component = shallow(<Button registered={true} action={actionSpy} />);
    component.simulate('click');
    expect(actionSpy).toHaveBeenCalled();
  });
});

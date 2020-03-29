import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('DPP App', () => {
  it('displays a heading', () => {
    const component = shallow(<App />);

    expect(component.find('h1').text()).toEqual('Courses');
  });
});

import React from 'react';
import { mount } from 'enzyme';
import Learner from './Learner';

describe('Learner', () => {
  it('should display users first and last name', () => {
    const user = {
      firstName: 'Julian',
      lastName: 'Kimmings',
      email: 'julian.kimmings@foo.com',
    };

    const noCoursesText = 'You are not signed up to any courses.';
    const courseTitle = 'Machine Language for beginners';
    const courseNames = [];

    const component = mount(<Learner user={user} courses={courseNames} />);

    expect(component.text()).toContain('Julian');
    expect(component.text()).toContain('Kimmings');
    expect(component.text()).toContain('julian.kimmings@foo.com');

    expect(component.text()).toContain(noCoursesText);

    component.setProps({courses:[ courseTitle ] });
    expect(component.text()).toContain(courseTitle);
    expect(component.text()).not.toContain(noCoursesText);
  });
});

import { registerUser, deregisterUser } from './context';

describe('Context Provider', () => {
  const user = { id: 89 };
  const courses = {
    1: {
      attendees: []
    },
    2: {
      attendees: [89, 2]
    }
  };

  it('should register a users interest in a course', () => {
    const newCourses = registerUser(user, courses, 1);
    expect(newCourses[1].attendees).toContain(user.id);
  });

  it('should not register a user to a course more than once', () => {
    const newCourses = registerUser(user, courses, 1);
    const newCourses2 = registerUser(user, courses, 1);
    expect(newCourses).toStrictEqual(newCourses2);
  });

  it('should deregister a user from a course', () => {
    const newCourses = deregisterUser(user, courses, 2);
    expect(newCourses[2].attendees).not.toContain(user.id);
  });
});

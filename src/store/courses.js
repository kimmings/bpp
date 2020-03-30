export const UNLIMITED = 'Unlimited';

/* values would be pulled from api via fetch */
export default {
  1: { 
    id: 1,
    title: "Law",
    description: "A Law Course",
    cost: 1000,
    type: "Online",
    seats: UNLIMITED,
    attendees: []
  },
  2: {
    id: 2,
    title: "Accounting",
    description: "An Accounting Course",
    cost: 500,
    type: "Classroom",
    seats: 10,
    attendees: [1]
  },
  3: {
    id: 3,
    title: "Management",
    description: "A Management Course", 
    cost: 200,
    type: "Classroom",
    seats: 10,
    attendees: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  4: {
    id: 4,
    title: 'Software Engineering',
    description: 'A very popular course',
    cost: 300,
    type: "Classroom",
    seats: 10,
    attendees: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }
};

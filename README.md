# Course search and registration

## Run in development mode
- open your terminal of choice
- run `yarn && yarn start`
- visit http://localhost:3000

## Run in production mode
- open your terminal of choice
- run `yarn build`;
- `yarn global add serve
   serve -s build`
- visit http://localhost:5000


## User Story 1
- [x] As Learner I need to be able to see a list of Courses available to me from a Course Catalogue and find a Course, I am interested in.

### Acceptance Criteria

a. Course Catalogue data 

Title | Description | Cost | Type | Max. Seats
------|-------------|------|------|-----------
Law   | A Law Course | £1000 | Online | Unlimited
Accounting | An Accounting Course | £500 | Classroom | 10 
Management | A Management Course | £200 | Classroom  | 10

## User Story 2
- [x] As a Learner I need to be able to Register onto a Course

### Acceptance Criteria

- [x] A Learner has a Name and Email
- [x] Each Classroom Course has a max seat limit
- [x] Each Online Course has unlimited availability
- [x] I am not allowed to Register onto a Classroom Course if the limit has been reached, and must be informed of this
- [x] I should be able to see the Availability of the Course
- [x] I can only Register once onto a Course
- [x] I can Register onto many different Courses
- [x] I can see that I'm Registered on a Course

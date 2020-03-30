import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: '1rem',
  },
  heading: {
    fontSize: '1rem',
    marginTop: 20,
    fontWeight: 600,
    color: '#333',
  },
  card: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 30,
  }
});


const Learner = ({ courses, user } ) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Typography
        className={classes.title} 
        color="textPrimary" 
        gutterBottom>You are signed in as: { user.firstName } { user.lastName }</Typography>

      <Typography
        className={classes.title}
        color="textSecondary"
      >{ user.email }</Typography>
      
      <Typography
        variant="h3"
        className={classes.heading}
      >Your Courses</Typography>

      { courses && courses.length === 0 && (
        <p>You are not signed up to any courses.</p>
      ) }

      { courses && courses.length > 0 && (
      <ul>
        { courses.map(courseName => <li key={courseName}>{courseName}</li>) }
      </ul>
      )}
   </Card>
  );
};

Learner.propTypes = {
  user: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
};

export default Learner;

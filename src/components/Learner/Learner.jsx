import React from 'react';
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
    fontSize: 16,
  },
  card: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 30,
  }
});


const Learner = ({ user } ) => {
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
    </Card>);
  
};

export default Learner;

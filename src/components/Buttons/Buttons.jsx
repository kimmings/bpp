import React from 'react';
import PropTypes  from 'prop-types'
import Button from '@material-ui/core/Button';

const getProps = registered => {
  if (registered) 
    return {
      label: 'Deregister',
      color: 'secondary',
    };

  return {
    label: 'Register',
    color: 'primary',
  }
};

const RegisterButton = ({ action, registered } ) => {
  const { label, color } = getProps(registered);
  return <Button 
    onClick={action}
    variant='contained'
    color={color}
  >{label}</Button>
};

RegisterButton.propTypes = {
  action: PropTypes.func,
  registered: PropTypes.bool,
};

export default RegisterButton;

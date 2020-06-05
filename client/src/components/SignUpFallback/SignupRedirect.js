import React from 'react';
import { Redirect } from 'react-router-dom';

import PortisInstance from '../../portis/PortisInstance';

const SignupRedirect = ({ active, redirectRoute, text }) => {
  console.log('signupredirect', redirectRoute);
  if (!active) {
    return <PortisInstance text={`${text} sign up`} />;
  }
  console.log('signupredirect before redirect', redirectRoute);

  return <Redirect to={redirectRoute} />;
};

export default SignupRedirect;

import React from 'react';

import PortisInstance from '../../portis/PortisInstance';

const SignupRedirect = ({ text }) => {
  console.log('routes', text);
  return <PortisInstance text={`${text} sign up`} />;
};

export default SignupRedirect;

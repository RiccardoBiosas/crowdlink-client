import React from 'react';
import OpenConnectorsModal from '../../../connectors/containers';

const SignupRedirect = ({ text }) => {
  console.log('routes', text);
  // return <PortisInstance text={`${text} sign up`} />;
  return <OpenConnectorsModal text={`${text} sign up`} />;
};

export default SignupRedirect;

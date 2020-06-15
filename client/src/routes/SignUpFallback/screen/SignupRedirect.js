import React from 'react';
import PropTypes from 'prop-types';
import OpenConnectorsModal from '../../../connectors/containers';

const SignupRedirect = ({ text }) => {
  console.log('routes', text);
  // return <PortisInstance text={`${text} sign up`} />;
  return <OpenConnectorsModal text={`${text} sign up`} />;
};

SignupRedirect.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SignupRedirect;

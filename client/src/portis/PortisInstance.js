import React from 'react';
import { useWeb3Context } from 'web3-react';
import GlobalButton from '../components/shared/styles';

const PortisInstance = ({ text }) => {
  const context = useWeb3Context();
  const PORTIS = 'portis';
  // const portisConnector = connectors.portis;

  if (context.error) {
    console.error('error');
  }

  return (
    <>
      <GlobalButton
        buttonColor="#7838D5"
        buttonTextColor="#FFFFFF"
        buttonWidth="200"
        onClick={() => context.setConnector(PORTIS)}
      >
        {text}
      </GlobalButton>
    </>
  );
};

PortisInstance.defaultProps = {
  text: 'Sign up',
};

export default PortisInstance;

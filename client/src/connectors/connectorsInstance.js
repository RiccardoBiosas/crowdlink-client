import React from 'react';
import { useWeb3Context } from 'web3-react';
import connectors from '../portis/index';

const ConnectorsInstance = () => {
  const context = useWeb3Context();

  if (context.error) {
    console.error('error');
  }

  return (
    <>
      {Object.keys(connectors).map((connectorName) => (
        <button key={connectorName} onClick={() => context.setConnector(connectorName)}>
          {`${connectorName} sign up`}
        </button>
      ))}
    </>
  );
};

export default ConnectorsInstance;

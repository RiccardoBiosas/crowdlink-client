import React, { Fragment } from "react";
import Web3Provider, { useWeb3Context, Web3Consumer } from "web3-react";
import connectors from '../portis/index'

export const ConnectorsInstance = () => {
  const context = useWeb3Context();
  console.log('context inside connectors instance', context)
  console.log('connectors inside connectos instance', connectors)


  if (context.error) {
    console.error("error");
  }

  return (
    <Fragment>
      {Object.keys(connectors).map((connectorName) => (
        <button
          key={connectorName}
          onClick={() => context.setConnector(connectorName)}
        >
          {connectorName} Sign up
        </button>
      ))}
    </Fragment>
  );
};

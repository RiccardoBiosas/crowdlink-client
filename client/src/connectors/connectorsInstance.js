import React, { Fragment } from "react";
import  { useWeb3Context } from "web3-react";
import connectors from '../portis/index'

export const ConnectorsInstance = () => {
  const context = useWeb3Context();


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

import React, { Fragment } from "react";
import { useWeb3Context } from "web3-react";
import { GlobalButton } from "../components/shared/styles";

export const PortisInstance = () => {
  const context = useWeb3Context();
  const PORTIS = "portis";
  // const portisConnector = connectors.portis;


  if (context.error) {
    console.error("error");
  }

  return (
    <Fragment>
      <GlobalButton buttonColor={'#7838D5'} buttonTextColor={'#FFFFFF'} buttonWidth={'200'} onClick={() => context.setConnector(PORTIS)}>
        Sign up
      </GlobalButton>
    </Fragment>
  );
};

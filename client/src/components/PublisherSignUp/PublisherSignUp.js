import React, { Fragment } from "react";
import { Web3Consumer } from "web3-react";
import { useHistory } from "react-router-dom";
import { CampaignContainer, CampaignCard } from "../styled-components/styles";
import { ConnectorsInstance } from "../../connectors/connectorsInstance";
import { PortisInstance } from "../../portis/PortisInstance";
import { GlobalButton } from "../shared/styles";
import { PUBLISHER_DASHBOARD_ROUTE } from "../../routes-config";

export const PublisherSignUp = () => {
  // const context = useWeb3Context();
  const history = useHistory();

  return (
    <CampaignContainer>
      <CampaignCard>
        <Web3Consumer>
          {(context) => {
            const { active, connectorName, account, networkId } = context;
            return active ? (
              <Fragment>
                <p>your web3 connector: {connectorName}</p>
                <p>your public key: {account}</p>
                <p>the network id: {networkId}</p>
                <GlobalButton buttonWidth={200} onClick={() => history.push(PUBLISHER_DASHBOARD_ROUTE)}>Go To Dashboard</GlobalButton>
              </Fragment>
            ) : (
              <Fragment>
                <p>Connect Google Analytics</p>
                <p>Place URL & % of commission per sale </p>
                <p>Deposit commission payout. Withdraw any time.</p>
                <PortisInstance />
              </Fragment>
            );
          }}
        </Web3Consumer>
      </CampaignCard>
    </CampaignContainer>
  );
};

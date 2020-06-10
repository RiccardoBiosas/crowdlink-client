import React from 'react';
import { Redirect, useHistory, withRouter } from 'react-router-dom';
import { Web3Consumer } from 'web3-react';
import { ethers } from 'ethers';
import CrowdlinkReferral from '../contracts/CrowdlinkReferral';
import { SIGN_UP_FALLBACK_ROUTE } from '../routes-config';

const WithContextActive = (ComposedComponent) => {
  // console.log('href hoc', window.location.href);
  // console.log('hostname hoc', window.location.hostname);
  // console.log('host pathname ', window.location.pathname);
  const prevLocation = window.location.pathname;
  return (
    <Web3Consumer>
      {({ library, networkId, active, account }) => {
        if (!active) {
          return (
            <Redirect
              push
              to={{
                pathname: SIGN_UP_FALLBACK_ROUTE,
                state: {
                  prevLocation,
                },
              }}
            />
          );
        }

        const crowdlinkAddress = networkId ? CrowdlinkReferral.networks[networkId].address : null;
        const contract = new ethers.Contract(
          crowdlinkAddress,
          CrowdlinkReferral.abi,
          library.getSigner(),
        );

        return (
          <ComposedComponent
            contractInstance={contract}
            account={account}
            crowdlinkAddress={crowdlinkAddress}
          />
        );
      }}
    </Web3Consumer>
  );
};

export default WithContextActive;

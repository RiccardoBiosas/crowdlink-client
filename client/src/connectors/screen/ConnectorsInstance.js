import React from 'react';
import { useWeb3Context } from 'web3-react';
import connectors from '../../portis/index';
import metamaskLogo from '../../assets/wallet-logos/metamask-logo.svg';
import portisLogo from '../../assets/portis-logo.svg';
import WalletButton from '../styles/WalletButton';

const logos = {
  injected: metamaskLogo,
  portis: portisLogo,
};

const ConnectorsInstance = () => {
  const context = useWeb3Context();

  if (context.error) {
    console.error('error');
  }

  return (
    <>
      {Object.keys(connectors).map((connectorName) => (
        <WalletButton type="button" onClick={() => context.setConnector(connectorName)}>
          <img src={logos[connectorName.toLowerCase()]} alt="wallet-logo" />
          <p key={connectorName}>
            {`${connectorName.toLowerCase() === 'injected' ? 'metamask' : connectorName}`}
          </p>
          {/* <ParagraphButton
                buttonColor="black"
                buttonMargin="0 0 0 6px"  key={connectorName} onClick={() => context.setConnector(connectorName)}>
              {`${connectorName.toLowerCase() === 'injected' ? 'metamask' : connectorName}`}
            </ParagraphButton> */}
        </WalletButton>
      ))}
    </>
  );
};

export default ConnectorsInstance;

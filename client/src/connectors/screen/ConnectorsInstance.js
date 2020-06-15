import React from 'react';
import { useWeb3Context } from 'web3-react';
import connectors from '../../portis/index';
import WalletButton from '../styles/WalletButton';
import walletLogos from '../../constants/walletLogos';

const ConnectorsInstance = () => {
  const context = useWeb3Context();

  if (context.error) {
    console.error('error');
  }

  return (
    <>
      {Object.keys(connectors).map((connectorName, i) => (
        <WalletButton
          type="button"
          key={`wallet-modal-${i}`}
          onClick={() => context.setConnector(connectorName)}
        >
          <img src={walletLogos[connectorName.toLowerCase()]} alt="wallet-logo" />
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

import React from 'react';
import { useWeb3Context } from 'web3-react';
import connectors from '../../portis/index';
import metamaskLogo from '../../assets/wallet-logos/metamask-logo.svg';
import portisLogo from '../../assets/portis-logo.svg';
import { WalletCard } from '../styles/WalletCard';
import {ParagraphButton} from '../../components/shared/GeneralCard'

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
        <WalletCard>
          <button>
            <img src={logos[connectorName.toLowerCase()]} />
            <p
               key={connectorName} onClick={() => context.setConnector(connectorName)}>
              {`${connectorName.toLowerCase() === 'injected' ? 'metamask' : connectorName}`}
            </p>
            {/* <ParagraphButton
                buttonColor="black"
                buttonMargin="0 0 0 6px"  key={connectorName} onClick={() => context.setConnector(connectorName)}>
              {`${connectorName.toLowerCase() === 'injected' ? 'metamask' : connectorName}`}
            </ParagraphButton> */}
          </button>
        </WalletCard>
      ))}
    </>
  );
};

export default ConnectorsInstance;

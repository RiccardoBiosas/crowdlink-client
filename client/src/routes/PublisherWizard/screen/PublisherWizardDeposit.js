import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ClockLoader from 'react-spinners/ClockLoader';
import { useWeb3Context } from 'web3-react';
import { ethers } from 'ethers';
import { ROPSTEN_ETHERSCAN_TX } from '../../../api-config';
import StyledGeneralWrapper from '../../../shared/styles/StyledGeneralWrapper';
import StyledGeneralButton from '../../../shared/styles/StyledGeneralButton';
import { ReactComponent as Copy } from '../../../assets/copy.svg';
import StyledCustomParagraph from '../../../shared/styles/StyledCustomParagraph';
import StyledParagraphButton from '../../../shared/styles/StyledParagraphButton';
// import { ReactComponent as PortisLogo } from '../../../assets/portis-logo.svg';
// import { ReactComponent as MetamaskLogo } from '../../../assets/wallet-logos/metamask-logo.svg';
import portisLogo from '../../../assets/portis-logo.svg';
import metamaskLogo from '../../../assets/wallet-logos/metamask-logo.svg';

const logos = {
  injected: metamaskLogo,
  portis: portisLogo,
};

const PublisherWizardDeposit = ({
  step,
  values,
  address,
  isBroadcasted,
  connectorName,
  txHash,
}) => {
  const context = useWeb3Context();
  const [resolvedAddress, setResolvedAddress] = useState();

  console.log('provider in the wizard deposit', context);
  console.log('VALUES PROP IN publisherwizard deposit ', values);

  const resolveENS = async () => {
    const provider = ethers.getDefaultProvider('ropsten');
    // const provider = await new ethers.providers.InfuraProvider('process.env.REACT_APP_INFURA_ROPSTEN' )

    console.log('deposit provider', provider);
    const resolved = await provider.resolveName('crowdlink.eth');
    console.log(resolved);
    setResolvedAddress(resolved);
  };

  useEffect(() => {
    resolveENS();
  }, []);

  const copyToClipboard = (txt) => {
    const temporaryInput = document.createElement('input');
    document.body.appendChild(temporaryInput);
    temporaryInput.setAttribute('value', txt);
    temporaryInput.select();
    document.execCommand('copy');
    document.body.removeChild(temporaryInput);
  };
  if (step !== 4) {
    return null;
  }
  return (
    <>
      <div
        style={{
          height: '60%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}
      >
        <StyledGeneralWrapper wrapperHeight="50%" wrapperFlex wrapperFlexDirection="column">
          <StyledCustomParagraph
            paragraphColor="#696868"
            paragraphFontSize={18}
            style={{ textAlign: 'center', lineHeight: '27px' }}
          >
            You can withdraw anytime, CL does
            <br />
            not charge the referral creator.
          </StyledCustomParagraph>
          <StyledGeneralWrapper wrapperHeight="100%" wrapperFlex wrapperJustify="space-between">
            {' '}
            style={{ height: '100%' }}>
            <StyledCustomParagraph paragraphColor="#959090" style={{ flex: '2' }}>
              Contract:
            </StyledCustomParagraph>
            <StyledCustomParagraph
              paragraphBorder="0.6px solid #206DFF"
              paragraphPadding="10px"
              paragraphColor="#696868"
              paragraphMargin="0 10px 0 0"
              style={{ textAlign: 'center', flex: '4' }}
            >
              crowdlink.eth
            </StyledCustomParagraph>
            <StyledParagraphButton style={{ flex: '1' }} onClick={() => copyToClipboard(address)}>
              <Copy />
            </StyledParagraphButton>
          </StyledGeneralWrapper>
        </StyledGeneralWrapper>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {!isBroadcasted ? (
            <img src={logos[connectorName.toLowerCase()]} alt="wallet-logo" />
          ) : (
            <ClockLoader color="#206DFF" size={110} />
          )}
        </div>
      </div>

      <StyledGeneralWrapper
        wrapperHeight="20%"
        wrapperFlex
        wrapperAlign="center"
        wrapperJustify="center"
      >
        {!isBroadcasted || !txHash ? (
          <StyledGeneralButton
            type="submit"
            buttonWidth={300}
            buttonTextColor="white"
            buttonColor="#7838D5"
          >
            {connectorName.toLowerCase() === 'injected'
              ? 'Pay with your metamask'
              : `Pay with ${connectorName}`}
          </StyledGeneralButton>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p>Check your transaction on etherscan:</p>
            <a href={`${ROPSTEN_ETHERSCAN_TX}${txHash}`} target="_blank" rel="noopener noreferrer">
              {txHash}
            </a>
          </div>
        )}
      </StyledGeneralWrapper>
    </>
  );
};

PublisherWizardDeposit.propTypes = {
  step: PropTypes.number.isRequired,
  values: PropTypes.shape({
    url: PropTypes.string,
    reward: PropTypes.string,
    budget: PropTypes.string,
  }).isRequired,
  address: PropTypes.string.isRequired,
  isBroadcasted: PropTypes.bool.isRequired,
  connectorName: PropTypes.string.isRequired,
  txHash: PropTypes.string,
};

PublisherWizardDeposit.defaultProps = {
  txHash: '',
};

export default PublisherWizardDeposit;

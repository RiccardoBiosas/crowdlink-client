import React, { useState, useEffect } from 'react';
import { useWeb3Context } from 'web3-react';
import { ethers } from 'ethers';
import {
  DepositButtonContainer,
  DepositInfoContainer,
  RowContainer,
} from '../../shared/PublisherWizard/styles';
import GlobalButton from '../../shared/styles';
import { ReactComponent as Copy } from '../../../assets/copy.svg';
import { CustomParagraph, ParagraphButton } from '../../shared/GeneralCard';
import { ReactComponent as PortisLogo } from '../../../assets/portis-logo.svg';

const PublisherWizardDeposit = ({ step, values, address }) => {
  const context = useWeb3Context();
  const [resolvedAddress, setResolvedAddress] = useState();

  console.log('provider in the wizard deposit', context);

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
      <DepositInfoContainer>
        <CustomParagraph paragraphColor="#696868" paragraphFontSize={18}>
          You can withdraw anytime, CL does
          <br />
          not charge the referral creator.
        </CustomParagraph>
        <RowContainer>
          <CustomParagraph paragraphColor="#959090" style={{ flex: '2' }}>
            Contract:
          </CustomParagraph>
          <CustomParagraph
            paragraphBorder="0.6px solid #206DFF"
            paragraphPadding="10px"
            paragraphColor="#696868"
            paragraphMargin="0 10px 0 0"
            style={{ textAlign: 'center', flex: '4' }}
          >
            crowdlink.eth
          </CustomParagraph>

          <ParagraphButton style={{ flex: '1' }} onClick={() => copyToClipboard(address)}>
            <Copy />
          </ParagraphButton>
        </RowContainer>
      </DepositInfoContainer>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <PortisLogo />
      </div>

      <DepositButtonContainer>
        <GlobalButton type="submit" buttonWidth={200} buttonTextColor="white" buttonColor="#7838D5">
          Pay with portis
        </GlobalButton>
      </DepositButtonContainer>
    </>
  );
};

export default PublisherWizardDeposit;
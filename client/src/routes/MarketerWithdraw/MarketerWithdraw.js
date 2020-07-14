import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { ethers } from 'ethers';
import StyledParagraphButton from '../../shared/styles/StyledParagraphButton';
import { StyledCustomH1 } from '../../shared/styles/StyledCustomHeadings';
import StyledCustomParagraph from '../../shared/styles/StyledCustomParagraph';
import StyledCardLayout from '../../shared/styles/StyledCardLayout';
import StyledGeneralWrapper from '../../shared/styles/StyledGeneralWrapper';
import { MARKETER_FEED_ROUTE } from '../../routes-config';
import copy from '../../assets/clipboard-copy.png';
import StyledCardBoilerplateLayout from '../../shared/styles/StyledCardBoilerplateLayout';

const MarketerWithdraw = ({ contractInstance, account }) => {
  const [balance, setBalance] = useState();
  const [receipt, setReceipt] = useState();
  const history = useHistory();
  const crowdlinkAddress = contractInstance.address;

  const withdraw = async () => {
    const receipt = await contractInstance.functions.influencerWithdraw();
    console.log('influencer withdrawal', receipt);

    if (receipt) {
      setReceipt(receipt);
    }
  };

  const checkBalance = async () => {
    const resp = await contractInstance.functions.influencer_account_balance(account);
    const convertedBal = ethers.utils.formatEther(resp);
    setBalance(convertedBal);
  };

  useEffect(() => {
    checkBalance();
  }, []);

  const copyToClipboard = (txt) => {
    const temporaryInput = document.createElement('input');
    document.body.appendChild(temporaryInput);
    temporaryInput.setAttribute('value', txt);
    temporaryInput.select();
    document.execCommand('copy');
    document.body.removeChild(temporaryInput);
  };

  return (
    <StyledCardLayout>
      <StyledCardBoilerplateLayout>
        <StyledGeneralWrapper
          wrapperWidth="100%"
          wrapperHeight="6%"
          wrapperFlex
          wrapperJustify="flex-end"
        >
          <StyledParagraphButton
            buttonMargin="6px 12px 0 0"
            buttonFontSize={20}
            buttonFontWeight={900}
            buttonColor="#959090"
            onClick={() => history.push(MARKETER_FEED_ROUTE)}
          >
            x
          </StyledParagraphButton>
        </StyledGeneralWrapper>
        {!receipt ? (
          <div style={{ height: '100%' }}>
            <StyledCustomH1 h1Color="#444444" h1FontWeight={500}>
              Are you sure?
            </StyledCustomH1>
            <StyledGeneralWrapper wrapperWidth="100%" wrapperFlex wrapperJustify="space-between">
              <StyledCustomParagraph paragraphColor="#696868" paragraphFontSize={20}>
                Your balance:
              </StyledCustomParagraph>
              <StyledCustomParagraph
                paragraphColor="#696868"
                paragraphFontSize={20}
                paragraphFontWeight={600}
              >
                {balance ? `${balance} eth` : ''}
              </StyledCustomParagraph>
            </StyledGeneralWrapper>
            <StyledGeneralWrapper containerWidth="100%">
              <StyledCustomParagraph paragraphColor="#696868" paragraphFontSize={20}>
                Money will be sent to:
              </StyledCustomParagraph>
            </StyledGeneralWrapper>

            <StyledGeneralWrapper wrapperWidth="100%" wrapperFlex wrapperJustify="space-between">
              <StyledCustomParagraph paragraphColor="#696868" paragraphMargin="0 10px 0 0">
                {crowdlinkAddress}
              </StyledCustomParagraph>

              <StyledParagraphButton onClick={() => copyToClipboard(account)}>
                <img src={copy} alt="copy to clipboard" />
              </StyledParagraphButton>
            </StyledGeneralWrapper>

            <StyledParagraphButton
              buttonColor="#7838D5"
              buttonFontSize={20}
              buttonFontWeight={600}
              onClick={withdraw}
            >
              {'withdraw >'}
            </StyledParagraphButton>
          </div>
        ) : (
          <div>
            <StyledCustomH1 h1Color="#444444" h1FontWeight={500}>
              withdrawal successful!
            </StyledCustomH1>
          </div>
        )}
      </StyledCardBoilerplateLayout>
    </StyledCardLayout>
  );
};

MarketerWithdraw.propTypes = {
  contractInstance: PropTypes.instanceOf(ethers.Contract).isRequired,
  account: PropTypes.string.isRequired,
};

export default MarketerWithdraw;

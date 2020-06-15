import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { ethers } from 'ethers';
import {
  CardContainerLayout,
  CloseButtonContainer,
  CustomH1,
  CustomParagraph,
  ParagraphButton,
  CardSubContainer,
} from '../../shared/GeneralCard';
import { MARKETER_FEED_ROUTE } from '../../routes-config';
import { RowContainer } from '../../shared/PublisherWizard/styles';
import copy from '../../assets/clipboard-copy.png';
import { BasicContainer } from '../../shared/feed/styles';
import CardLayout from '../../shared/layout/CardLayout';

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
    <CardContainerLayout>
      <CardLayout>
        <CloseButtonContainer closeButtonContainerHeight="6%">
          <ParagraphButton
            buttonMargin="6px 12px 0 0"
            buttonFontSize={20}
            buttonFontWeight={900}
            buttonColor="#959090"
            onClick={() => history.push(MARKETER_FEED_ROUTE)}
          >
            x
          </ParagraphButton>
        </CloseButtonContainer>
        {!receipt ? (
          <CardSubContainer subContainerHeight="100%">
            <CustomH1 h1Color="#444444" h1FontWeight={500}>
              Are you sure?
            </CustomH1>
            <RowContainer containerWidth="100%">
              <CustomParagraph paragraphColor="#696868" paragraphFontSize={20}>
                Your balance:
              </CustomParagraph>
              <CustomParagraph
                paragraphColor="#696868"
                paragraphFontSize={20}
                paragraphFontWeight={600}
              >
                {balance ? `${balance} eth` : ''}
              </CustomParagraph>
            </RowContainer>
            <BasicContainer containerWidth="100%">
              <CustomParagraph paragraphColor="#696868" paragraphFontSize={20}>
                Money will be sent to:
              </CustomParagraph>
            </BasicContainer>

            <RowContainer containerWidth="100%">
              <CustomParagraph paragraphColor="#696868" paragraphMargin="0 10px 0 0">
                {crowdlinkAddress}
              </CustomParagraph>

              <ParagraphButton onClick={() => copyToClipboard(account)}>
                <img src={copy} alt="copy to clipboard" />
              </ParagraphButton>
            </RowContainer>

            <ParagraphButton
              buttonColor="#7838D5"
              buttonFontSize={20}
              buttonFontWeight={600}
              onClick={withdraw}
            >
              {'withdraw >'}
            </ParagraphButton>
          </CardSubContainer>
        ) : (
          <div>
            <CustomH1 h1Color="#444444" h1FontWeight={500}>
              withdrawal successful!
            </CustomH1>
          </div>
        )}
      </CardLayout>
    </CardContainerLayout>
  );
};

MarketerWithdraw.propTypes = {
  contractInstance: PropTypes.instanceOf(ethers.Contract).isRequired,
  account: PropTypes.string.isRequired,
};

export default MarketerWithdraw;

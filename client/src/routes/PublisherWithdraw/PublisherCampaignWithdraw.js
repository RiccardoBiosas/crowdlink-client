import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ethers } from 'ethers';
import { useHistory, useLocation } from 'react-router-dom';
import {
  StyledCustomH1,
  StyledCustomParagraph,
  StyledParagraphButton,
  StyledCardSubContainer,
} from '../../shared/GeneralCard';
import StyledCardLayout from '../../shared/styles/StyledCardLayout';
import StyledGeneralWrapper from '../../shared/styles/StyledGeneralWrapper';
import { PUBLISHER_FEED_ROUTE } from '../../routes-config';
import { RowContainer } from '../../shared/PublisherWizard/styles';
import copy from '../../assets/clipboard-copy.png';
import CardLayout from '../../shared/layout/CardLayout';

const PublisherCampaignWithdraw = ({ contractInstance, account }) => {
  const history = useHistory();
  const [balance, setBalance] = useState();
  const location = useLocation();

  const copyToClipboard = (txt) => {
    const temporaryInput = document.createElement('input');
    document.body.appendChild(temporaryInput);
    temporaryInput.setAttribute('value', txt);
    temporaryInput.select();
    document.execCommand('copy');
    document.body.removeChild(temporaryInput);
  };

  const checkCampaignOwnerTotalBalance = async () => {
    const bal = await contractInstance.functions.campaign_owner_account_balance(account);
    const convertedBal = ethers.utils.formatEther(bal);
    setBalance(convertedBal);
  };

  useEffect(() => {
    checkCampaignOwnerTotalBalance();
  });

  const withdraw = async () => {
    const receipt = await contractInstance.functions.withdrawFromCampaign(location.url, {
      gasLimit: 1200000,
    });
  };

  return (
    <StyledCardLayout>
      <CardLayout>
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
            onClick={() => history.push(PUBLISHER_FEED_ROUTE)}
          >
            x
          </StyledParagraphButton>
        </StyledGeneralWrapper>
        <div style={{ height: '100%' }}>
          <StyledCustomH1 h1Color="#444444" h1FontWeight={500}>
            Are you sure?
          </StyledCustomH1>
          <StyledCustomParagraph
            paragraphColor="#696868"
            paragraphFontSize={20}
            paragraphMargin="0 0 8px 0"
          >
            Withdrawing will end the campaign.
          </StyledCustomParagraph>
          <StyledGeneralWrapper wrapperWidth="100%">
            <StyledCustomParagraph paragraphColor="#696868" paragraphFontSize={20}>
              Money will be sent to:
            </StyledCustomParagraph>
          </StyledGeneralWrapper>

          <StyledGeneralWrapper
            wrapperMargin="0 0 40px 0"
            wrapperWidth="100%"
            wrapperFlex
            wrapperJustify="space-between"
          >
            {' '}
            <StyledCustomParagraph paragraphColor="#696868" paragraphMargin="0 10px 0 0">
              {account}
            </StyledCustomParagraph>
            <StyledParagraphButton onClick={() => copyToClipboard(account)}>
              <img src={copy} alt="copy to clipboard" />
            </StyledParagraphButton>
          </StyledGeneralWrapper>

          <StyledGeneralWrapper
            wrapperMargin="0 0 40px 0"
            wrapperWidth="100%"
            wrapperFlex
            wrapperJustify="space-between"
          >
            {' '}
            <StyledCustomParagraph paragraphColor="#696868" paragraphFontSize={20}>
              Total amount:
            </StyledCustomParagraph>
            <StyledCustomParagraph
              paragraphColor="#696868"
              paragraphFontSize={20}
              paragraphFontWeight={600}
            >
              {balance ? `${balance} eth` : ''}
            </StyledCustomParagraph>
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
      </CardLayout>
    </StyledCardLayout>
  );
};

PublisherCampaignWithdraw.propTypes = {
  contractInstance: PropTypes.instanceOf(ethers.Contract).isRequired,
  account: PropTypes.string.isRequired,
};

export default PublisherCampaignWithdraw;

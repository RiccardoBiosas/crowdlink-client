import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ethers } from 'ethers';
import { StyledParagraphButton, StyledCustomParagraph } from '../../../shared/GeneralCard';
import StyledDropdownCampaignLayout from '../../../shared/styles/styles';

const PublisherCampaignDropdown = ({ contractInstance, account, website }) => {
  const [campaignData, setCampaignData] = useState({});

  // move it to some middleware and update the contract data only once a day to limit the calls to infura
  const checkOpenCampaigns = async () => {
    const data = await contractInstance.functions.lookUpCampaignReferralByWebsite(account, website);
    console.log(data);
    const remainingBalance = ethers.utils.formatEther(data[0]);
    const marketersPublicKeysArr = data[1];
    setCampaignData({ ...campaignData, remainingBalance, marketersPublicKeysArr });
    console.log('campaign data', campaignData);
  };
  useEffect(() => {
    checkOpenCampaigns();
  });

  return (
    <StyledDropdownCampaignLayout
      dropdownCampaignMargin="0 0 30px 0"
      style={{ display: 'flex', justifyContent: 'space-around' }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
          height: '80%',
        }}
      >
        <StyledParagraphButton buttonColor="#1E1E1E" buttonFontSize={18} buttonFontWeight={400}>
          Remaining budget:
        </StyledParagraphButton>
        <StyledCustomParagraph paragraphColor="#959090" paragraphFontSize={18}>
          {campaignData ? `${parseFloat(campaignData.remainingBalance, 10).toFixed(4)} eth` : ''}
        </StyledCustomParagraph>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
          height: '80%',
        }}
      >
        <StyledParagraphButton buttonColor="#1E1E1E" buttonFontSize={18} buttonFontWeight={400}>
          Generated subscriptions
        </StyledParagraphButton>
        <StyledCustomParagraph paragraphColor="#959090" paragraphFontSize={18}>
          0
        </StyledCustomParagraph>
      </div>
    </StyledDropdownCampaignLayout>
  );
};

PublisherCampaignDropdown.propTypes = {
  contractInstance: PropTypes.instanceOf(ethers.Contract).isRequired,
  account: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
};

export default PublisherCampaignDropdown;

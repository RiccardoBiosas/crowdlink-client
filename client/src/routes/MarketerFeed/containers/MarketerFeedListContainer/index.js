import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ethers } from 'ethers';
import { useHistory } from 'react-router-dom';
import { StyledParagraphButton } from '../../../../shared/GeneralCard';
import StyledCardLayout from '../../../../shared/styles/StyledCardLayout';
import StyledGeneralWrapper from '../../../../shared/styles/StyledGeneralWrapper';

import { RowContainer } from '../../../../shared/PublisherWizard/styles';
import MarketerCampaignContainer from '../MarketerCampaignContainer';
import { MARKETER_WITHDRAW_ROUTE, MARKETER_HOMEPAGE } from '../../../../routes-config';
import StyledGeneralButton from '../../../../shared/styles/StyledGeneralButton';
import { getClickCampaigns } from '../../../../utils/crowdlink/API';

const MarketerFeedListContainer = ({ contractInstance, account }) => {
  const [resp, setResp] = useState();

  const history = useHistory();

  const fetchData = async () => {
    // const response = await axios.get(`${host}${CAMPAIGNS_CLICK_ENDPOINT}`);
    const response = await getClickCampaigns();
    console.log('response fetchdata', response);

    setResp(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!resp || !resp.data) {
    return <h1>waiting</h1>;
  }
  return (
    <StyledCardLayout cardLayoutHeight="100%" cardLayoutPadding="4rem">
      <StyledGeneralWrapper
        wrapperMargin="0 0 40px 0"
        wrapperWidth="80vw"
        wrapperFlex
        wrapperJustify="space-between"
      >
        <div>
          <StyledGeneralButton
            buttonRadius="50px"
            buttonTextColor="#4C83D4"
            buttonFontWeight={900}
            buttonFontSize={26}
            buttonColor="#F8F8F8"
            buttonWidth="220"
            onClick={() => history.push(MARKETER_WITHDRAW_ROUTE)}
          >
            {'Withdraw >'}
          </StyledGeneralButton>
        </div>
        <div>
          <StyledParagraphButton
            buttonMargin="6px 12px 0 0"
            buttonFontSize={20}
            buttonFontWeight={900}
            buttonColor="#F8F8F8"
            onClick={() => history.push(MARKETER_HOMEPAGE)}
          >
            Home +
          </StyledParagraphButton>
        </div>
      </StyledGeneralWrapper>
      {resp &&
        resp.data.results.length > 0 &&
        resp.data.results.map((x, i) => (
          <MarketerCampaignContainer
            x={x}
            indx={i}
            key={`marketer${i}`}
            contractInstance={contractInstance}
            account={account}
          />
        ))}
    </StyledCardLayout>
  );
};

MarketerFeedListContainer.propTypes = {
  contractInstance: PropTypes.instanceOf(ethers.Contract).isRequired,
  account: PropTypes.string.isRequired,
};

export default MarketerFeedListContainer;

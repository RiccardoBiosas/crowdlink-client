import React, { useState, useEffect, useCallback } from 'react';
import { ethers } from 'ethers';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import StyledParagraphButton from '../../../../shared/styles/StyledParagraphButton';
import StyledCardWrapper from '../../../../shared/styles/StyledCardWrapper';
import StyledColumnWrapper from '../../../../shared/styles/StyledColumnWrapper';
import MarketerCampaign from '../../screen/MarketerCampaign';
import MarketerCampaignUrl from '../../screen/MarketerCampaignUrl';
import { MARKETER_WITHDRAW_ROUTE } from '../../../../routes-config';
import host, {
  CAMPAIGNS_CLICK_CREATE_LINK_ENDPOINT,
  CAMPAIGNS_CLICK_ENDPOINT,
} from '../../../../api-config';

const MarketerStyledCampaignLayout = ({ x, contractInstance, account, indx }) => {
  const [referralLink, setReferralLink] = useState();
  const [selectedCampaign, setSelectedCampaign] = useState();

  const history = useHistory();

  const fetchReferralLink = useCallback(async () => {
    const resp = await axios.get(`${host}${CAMPAIGNS_CLICK_ENDPOINT}?user_public_key=${account}
      `);
    console.log('fetchreferrallink resp', resp);
    if (resp.data) {
      setReferralLink(
        resp.data.results[indx].links[0] ? resp.data.results[indx].links[0].url_code : null,
      );
    }
  }, [referralLink]);

  useEffect(() => {
    fetchReferralLink();
    if (referralLink && selectedCampaign) {
      addInfluencer();
    }
  }, [referralLink]);

  const addInfluencer = async () => {
    await contractInstance.functions.addInfluencer(selectedCampaign, referralLink, account);
  };

  const handleClick = async () => {
    const resp = await axios.post(`${x.self_url}${CAMPAIGNS_CLICK_CREATE_LINK_ENDPOINT}`, {
      user_public_key: account,
    });
    setSelectedCampaign(x.url);

    setReferralLink(resp.data.url_code);
  };

  return (
    <div>
      <MarketerCampaignUrl url={x.url} />
      <StyledCardWrapper
        cardWrapperMargin="0 0 50px 0"
        // cardWrapperJustify="flex-start"
        cardWrapperWidth="80vw"
        cardWrapperHeight="180px"
        cardWrapperBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        cardWrapperBackground="#ffffff 0% 0% no-repeat padding-box"
        cardWrapperFlexDirection="row"
      >
        <MarketerCampaign
          x={x}
          referralLink={referralLink}
          containerMargin="0 0 0 16px"
          componentFlex={3}
        />

        <StyledColumnWrapper
          columnWrapperHeight="100%"
          columnWrapperJustify="center"
          columnWrapperAlign="center"
          columnWrapperFlexSize={1}
        >
          {!referralLink ? (
            <StyledParagraphButton
              buttonColor="#4C83D4"
              buttonFontSize={20}
              buttonFontWeight={600}
              onClick={handleClick}
            >
              Create Link +
            </StyledParagraphButton>
          ) : (
            <StyledParagraphButton
              buttonColor="#7838D5"
              buttonFontSize={20}
              buttonFontWeight={600}
              onClick={() => history.push(MARKETER_WITHDRAW_ROUTE)}
            >
              Created -
            </StyledParagraphButton>
          )}
        </StyledColumnWrapper>
      </StyledCardWrapper>
    </div>
  );
};

MarketerStyledCampaignLayout.propTypes = {
  x: PropTypes.shape({
    self_url: PropTypes.string,
    name: PropTypes.string,
    user_public_key: PropTypes.string,
    url: PropTypes.string,
    reward: PropTypes.string,
    timestamp: PropTypes.string,
  }).isRequired,
  contractInstance: PropTypes.instanceOf(ethers.Contract).isRequired,
  account: PropTypes.string.isRequired,
  indx: PropTypes.number.isRequired,
};

export default MarketerStyledCampaignLayout;

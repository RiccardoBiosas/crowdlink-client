import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { ParagraphButton } from '../../shared/GeneralCard';
import { CampaignContainer, CampaignContainerComponent } from '../../shared/feed/styles';
import MarketerCampaign from '../screen/MarketerCampaign';
import MarketerCampaignUrl from '../screen/MarketerCampaignUrl';
import { MARKETER_WITHDRAW_ROUTE } from '../../../routes-config';
import host, {
  CAMPAIGNS_CLICK_CREATE_LINK_ENDPOINT,
  CAMPAIGNS_CLICK_ENDPOINT,
} from '../../../api-config';

const MarketerCampaignContainer = ({ x, contractInstance, account, indx }) => {
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
      <MarketerCampaignUrl x={x} />
      <CampaignContainer containerMargin="0 0 50px 0">
        <MarketerCampaign
          x={x}
          referralLink={referralLink}
          containerMargin="0 0 0 16px"
          componentFlex={3}
        />

        <CampaignContainerComponent componentFlex={1}>
          {!referralLink ? (
            <ParagraphButton
              buttonColor="#4C83D4"
              buttonFontSize={20}
              buttonFontWeight={600}
              onClick={handleClick}
            >
              Create Link +
            </ParagraphButton>
          ) : (
            <ParagraphButton
              buttonColor="#7838D5"
              buttonFontSize={20}
              buttonFontWeight={600}
              onClick={() => history.push(MARKETER_WITHDRAW_ROUTE)}
            >
              Created -
            </ParagraphButton>
          )}
        </CampaignContainerComponent>
      </CampaignContainer>
    </div>
  );
};

export default MarketerCampaignContainer;

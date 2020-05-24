import React, { useState, useEffect } from 'react';
import { ParagraphButton, CustomParagraph } from '../../shared/GeneralCard';
import { CampaignContainer, CampaignContainerComponent } from '../../shared/feed/styles';
import { useHistory } from 'react-router-dom';
import { LogicParagraphButtonContainer, MarketerCampaign } from '../MarketerFeedContainer';
import { MARKETER_WITHDRAW_ROUTE } from '../../../routes-config';
import host, { CAMPAIGNS_CLICK_CREATE_LINK_ENDPOINT } from '../../../api-config';
import axios from 'axios'

const MarketerCampaignContainer = ({ x, contractInstance, account, indx }) => {
  console.log('marketer campaign contianer', x);
  const [referralLink, setReferralLink] = useState();
  const [selectedCampaign, setSelectedCampaign] = useState();

  const history = useHistory();

  useEffect(() => {
    if (referralLink && selectedCampaign) {
      addInfluencer();
    }
  }, [referralLink]);

  const addInfluencer = async () => {
    await contractInstance.functions.addInfluencer(selectedCampaign, referralLink, account);
  };

  const handleClick = async () => {
    // const resp = await axios.get(
    //   `${CAMPAIGNS_ENDPOINT_CLICK_CAMPAIGN}${id}${CAMPAIGNS_CLICK_CREATE_LINK_ENDPOINT}`
    // );
    console.log('x.self_url', x.self_url)
    const resp = await axios.post(`${x.self_url}${CAMPAIGNS_CLICK_CREATE_LINK_ENDPOINT}`, {
      user_public_key: account,
    });
    setSelectedCampaign(x.url);

    setReferralLink(resp.data.url_code);
  };
  return (
    <CampaignContainer containerMargin="0 0 50px 0">
      <MarketerCampaign x={x} referralLink={referralLink} containerMargin="0 0 0 16px" componentFlex={3} />

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
            buttonColor={'#7838D5'}
            buttonFontSize={20}
            buttonFontWeight={600}
            onClick={() => history.push(MARKETER_WITHDRAW_ROUTE)}
          >
            Withdraw >
          </ParagraphButton>
        )}
      </CampaignContainerComponent>
    </CampaignContainer>
  );
};

export default MarketerCampaignContainer;

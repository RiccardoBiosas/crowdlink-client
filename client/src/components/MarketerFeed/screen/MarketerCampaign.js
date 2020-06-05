import React from 'react';
import { ParagraphButton, CustomParagraph } from '../../shared/GeneralCard';
import {
  CampaignContainerComponent,
  CampaignContainerDataContainer,
} from '../../shared/feed/styles';
import copy from '../../../assets/clipboard-copy.png';
import host from '../../../api-config';

const MarketerCampaign = ({ x, referralLink }) => {
  const copyToClipboard = () => {
    if (referralLink) {
      const temporaryInput = document.createElement('input');
      document.body.appendChild(temporaryInput);
      temporaryInput.setAttribute('value', referralLink ? `${host}/cl/${referralLink}` : '');
      temporaryInput.select();
      document.execCommand('copy');
      document.body.removeChild(temporaryInput);
    }
  };
  return (
    <CampaignContainerComponent containerMargin="0 0 0 16px" componentFlex={3}>
      {/* <CampaignContainerDataContainer>
        <CustomParagraph paragraphColor="#1E1E1E" paragraphFontSize={16} paragraphWidth="32%">
          Campaign Name:
        </CustomParagraph>
        <CustomParagraph paragraphColor="#959090" paragraphFontSize={16}>
          {x.name}
        </CustomParagraph>
      </CampaignContainerDataContainer> */}
      {/* <CampaignContainerDataContainer>
        <CustomParagraph paragraphColor="#1E1E1E" paragraphFontSize={16} paragraphWidth="32%">
          Campaign URL:
        </CustomParagraph>
        <CustomParagraph paragraphColor="#959090" paragraphFontSize={16}>
          {x.url}
        </CustomParagraph>
      </CampaignContainerDataContainer> */}
      <CampaignContainerDataContainer>
        <CustomParagraph paragraphColor="#1E1E1E" paragraphFontSize={16} paragraphWidth="32%">
          Reward:
        </CustomParagraph>
        <CustomParagraph paragraphColor="#959090" paragraphFontSize={16}>
          {`${x.reward}$`}
        </CustomParagraph>
      </CampaignContainerDataContainer>
      <CampaignContainerDataContainer style={{ alignItems: 'center' }}>
        <CustomParagraph paragraphFontSize={16} paragraphColor="#1E1E1E" paragraphWidth="32%">
          Your unique referral link:
        </CustomParagraph>
        <CustomParagraph
          paragraphColor="#959090"
          paragraphFontSize={16}
          paragraphMargin="0 8px 0 0"
        >
          {referralLink ? `${host}/cl/${referralLink}` : 'not generated yet'}
        </CustomParagraph>
        <ParagraphButton onClick={copyToClipboard}>
          <img src={copy} alt="copy to clipboard button" />
        </ParagraphButton>
      </CampaignContainerDataContainer>
    </CampaignContainerComponent>
  );
};

export default MarketerCampaign;

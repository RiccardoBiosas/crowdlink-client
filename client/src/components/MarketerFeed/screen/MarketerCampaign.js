import React from 'react';
import { toast, ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
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
      toast.success('copied!', {
        position: 'top-center',
        transition: Slide,
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.warn('there is no URL to copy!', {
        position: 'top-center',
        transition: Slide,
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <>
      <CampaignContainerComponent containerMargin="0 0 0 16px" componentFlex={3}>
        <CampaignContainerDataContainer>
          <CustomParagraph paragraphColor="#1E1E1E" paragraphFontSize={16} paragraphWidth="32%">
            Reward:
          </CustomParagraph>
          <CustomParagraph paragraphColor="#959090" paragraphFontSize={16}>
            {`${x.reward.toFixed(2)}$`}
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
      <ToastContainer
        position="top-center"
        transition={Slide}
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default MarketerCampaign;

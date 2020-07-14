import React from 'react';
import PropTypes from 'prop-types';
import { toast, ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import StyledCustomParagraph from '../../../shared/styles/StyledCustomParagraph';
import StyledParagraphButton from '../../../shared/styles/StyledParagraphButton';
import StyledColumnWrapper from '../../../shared/styles/StyledColumnWrapper';
import StyledGeneralWrapper from '../../../shared/styles/StyledGeneralWrapper';
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
      <StyledColumnWrapper
        columnWrapperMargin="0 0 0 16px"
        columnWrapperFlexSize={3}
        columnWrapperJustify="center"
      >
        <StyledGeneralWrapper wrapperFlex wrapperWidth="100%" wrapperAlign="center">
          <StyledCustomParagraph
            paragraphColor="#1E1E1E"
            paragraphFontSize={16}
            paragraphWidth="32%"
          >
            Reward:
          </StyledCustomParagraph>
          <StyledCustomParagraph paragraphColor="#959090" paragraphFontSize={16}>
            {`${parseInt(x.reward, 10).toFixed(2)}$`}
          </StyledCustomParagraph>
        </StyledGeneralWrapper>
        <StyledGeneralWrapper wrapperFlex wrapperWidth="100%" wrapperAlign="center">
          <StyledCustomParagraph
            paragraphFontSize={16}
            paragraphColor="#1E1E1E"
            paragraphWidth="32%"
          >
            Your unique referral link:
          </StyledCustomParagraph>
          <StyledCustomParagraph
            paragraphColor="#959090"
            paragraphFontSize={16}
            paragraphMargin="0 8px 0 0"
          >
            {referralLink ? `${host}/cl/${referralLink}` : 'not generated yet'}
          </StyledCustomParagraph>
          <StyledParagraphButton onClick={copyToClipboard}>
            <img src={copy} alt="copy to clipboard button" />
          </StyledParagraphButton>
        </StyledGeneralWrapper>
      </StyledColumnWrapper>
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

MarketerCampaign.propTypes = {
  x: PropTypes.shape({
    self_url: PropTypes.string,
    name: PropTypes.string,
    user_public_key: PropTypes.string,
    url: PropTypes.string,
    reward: PropTypes.string,
    timestamp: PropTypes.string,
  }).isRequired,
  referralLink: PropTypes.string,
};

MarketerCampaign.defaultProps = {
  referralLink: '',
};

export default MarketerCampaign;

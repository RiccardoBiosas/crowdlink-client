import React from 'react';
import { useHistory } from 'react-router-dom';
import StyledGeneralButton from '../shared/styles/StyledGeneralButton';
import {
  StyledCustomParagraph,
  StyledParagraphButton,
  StyledCustomH1,
} from '../shared/GeneralCard';
import StyledCardLayout from '../shared/styles/StyledCardLayout';
import StyledGeneralWrapper from '../shared/styles/StyledGeneralWrapper';
import StyledColumnWrapper from '../shared/styles/StyledColumnWrapper';
import { MARKETER_SIGN_UP_ROUTE } from '../routes-config';
import { ReactComponent as CrowdLinkHomepageMarketerImage } from '../assets/crowdlink-homepage-marketer.svg';

const MarketerHomepage = () => {
  const history = useHistory();

  return (
    <StyledCardLayout cardContainerBackgroundColor="#23153C">
      <div style={{ height: '60vh', width: '90vw' }}>
        <StyledGeneralWrapper wrapperFlex wrapperJustify="space-between" wrapperAlign="flex-start">
          <div>
            <StyledCustomH1 h1FontSize={40} h1LineHeight="54px" h1Color="#F8F8F8">
              Join a referral campaign
              <br />
              today
            </StyledCustomH1>
            <StyledCustomParagraph
              paragraphFontSize={26}
              paragraphMargin="32px 0 0 0"
              paragraphColor="#E2E2E2"
              paragraphLineHeight="34px"
            >
              earn commission for every sale
              <br />
              coming from your referral link
            </StyledCustomParagraph>
          </div>
          <StyledColumnWrapper>
            <StyledGeneralButton
              buttonRadius="50px"
              buttonTextColor="#4C83D4"
              buttonFontWeight={900}
              buttonFontSize={26}
              buttonColor="#F8F8F8"
              buttonWidth="220"
              onClick={() => history.push(MARKETER_SIGN_UP_ROUTE)}
            >
              Get Started
            </StyledGeneralButton>

            <StyledParagraphButton
              buttonColor="#F8F8F8"
              paragraphFontSize={26}
              buttonMargin="10px 0 0 6px"
              onClick={() => history.push('/')}
            >
              {'I am a creator >'}
            </StyledParagraphButton>
          </StyledColumnWrapper>
        </StyledGeneralWrapper>
        <div>
          <CrowdLinkHomepageMarketerImage />
        </div>
      </div>
    </StyledCardLayout>
  );
};

export default MarketerHomepage;

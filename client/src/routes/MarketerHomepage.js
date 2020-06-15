import React from 'react';
import { useHistory } from 'react-router-dom';
import GlobalButton from '../shared/styles';
import {
  CardContainerLayout,
  CustomParagraph,
  CardSubContainer,
  ColumnContainer,
  ParagraphButton,
  CustomH1,
  CardLayoutWithHorizontalContainers,
} from '../shared/GeneralCard';
import { MARKETER_SIGN_UP_ROUTE } from '../routes-config';
import { ReactComponent as CrowdLinkHomepageMarketerImage } from '../assets/crowdlink-homepage-marketer.svg';

const MarketerHomepage = () => {
  const history = useHistory();

  return (
    <CardContainerLayout cardContainerBackgroundColor="#23153C">
      <CardLayoutWithHorizontalContainers cardLayoutHeight="60vh" cardLayoutWidth="90vw">
        <CardSubContainer justify="space-between" align="flex-start">
          <div>
            <CustomH1 h1FontSize={40} h1LineHeight="54px" h1Color="#F8F8F8">
              Join a referral campaign
              <br />
              today
            </CustomH1>
            <CustomParagraph
              paragraphFontSize={26}
              paragraphMargin="32px 0 0 0"
              paragraphColor="#E2E2E2"
              paragraphLineHeight="34px"
            >
              earn commission for every sale
              <br />
              coming from your referral link
            </CustomParagraph>
          </div>
          <ColumnContainer>
            <GlobalButton
              buttonRadius="50px"
              buttonTextColor="#4C83D4"
              buttonFontWeight={900}
              buttonFontSize={26}
              buttonColor="#F8F8F8"
              buttonWidth="220"
              onClick={() => history.push(MARKETER_SIGN_UP_ROUTE)}
            >
              Get Started
            </GlobalButton>

            <ParagraphButton
              buttonColor="#F8F8F8"
              paragraphFontSize={26}
              buttonMargin="10px 0 0 6px"
              onClick={() => history.push('/')}
            >
              {'I am a creator >'}
            </ParagraphButton>
          </ColumnContainer>
        </CardSubContainer>
        <div>
          <CrowdLinkHomepageMarketerImage />
        </div>
      </CardLayoutWithHorizontalContainers>
    </CardContainerLayout>
  );
};

export default MarketerHomepage;

import React from 'react';
import { useHistory } from 'react-router-dom';
import { PUBLISHER_WORKFLOW_ROUTE } from '../routes-config';
import {
  StyledParagraphButton,
  StyledCustomParagraph,
  StyledCustomH1,
} from '../shared/GeneralCard';
import StyledCardLayout from '../shared/styles/StyledCardLayout';
import StyledGeneralWrapper from '../shared/styles/StyledGeneralWrapper';
import StyledColumnWrapper from '../shared/styles/StyledColumnWrapper';
import StyledGeneralButton from '../shared/styles/StyledGeneralButton';
import { ReactComponent as CrowdLinkHomepagePublisherImage } from '../assets/crowdlink-homepage-creator.svg';

const PublisherHomepage = () => {
  const history = useHistory();

  return (
    <StyledCardLayout cardContainerBackgroundColor="#23153C">
      <div style={{ height: '60vh', width: '90vw' }}>
        <StyledGeneralWrapper wrapperFlex wrapperJustify="space-between" wrapperAlign="flex-start">
          <div>
            <StyledCustomH1 h1FontSize={40} h1LineHeight="54px" h1Color="#F8F8F8">
              Create a referral campaign
              <br />
              within minutes
            </StyledCustomH1>
            <StyledCustomParagraph
              paragraphFontSize={26}
              paragraphMargin="32px 0 0 0"
              paragraphColor="#E2E2E2"
              paragraphLineHeight="34px"
            >
              set a commission per sale from links
              <br />
              and let the rest be history
            </StyledCustomParagraph>
          </div>
          {/*
          <div>
            <StyledCustomParagraph paragraphColor={"#4C83D4"}>
              Have bitcoin but not ethereum? <br /> Swap it for pTokens and then
              you're ready to go!
            </StyledCustomParagraph>
            <StyledParagraphButton
              paragraphFontSize={22}
              buttonColor={"#7838D5"}
              onClick={() => history.push(PTOKENS_SWAP_ROUTE)}
            >
              Swap
            </StyledParagraphButton>
          </div> */}
          <StyledColumnWrapper>
            <StyledGeneralButton
              buttonRadius="50px"
              buttonTextColor="#4C83D4"
              buttonFontWeight={900}
              buttonFontSize={26}
              buttonColor="#F8F8F8"
              buttonWidth="220"
              onClick={() => history.push(PUBLISHER_WORKFLOW_ROUTE)}
            >
              Get Started
            </StyledGeneralButton>

            <StyledParagraphButton
              buttonColor="#F8F8F8"
              paragraphFontSize={26}
              buttonMargin="10px 0 0 6px"
              onClick={() => history.push('/marketer')}
            >
              {'I am a marketer >'}
            </StyledParagraphButton>
          </StyledColumnWrapper>
        </StyledGeneralWrapper>

        <div>
          <CrowdLinkHomepagePublisherImage />
        </div>
      </div>
    </StyledCardLayout>
  );
};

export default PublisherHomepage;

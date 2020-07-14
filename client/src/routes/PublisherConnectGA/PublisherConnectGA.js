import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import StyledGeneralButton from '../../shared/styles/StyledGeneralButton';
import { ReactComponent as GoogleAnalyticsSVG } from '../../assets/google-analytics.svg';
import StyledParagraphButton from '../../shared/styles/StyledParagraphButton';
import StyledCustomParagraph from '../../shared/styles/StyledCustomParagraph';
import { StyledCustomH1, StyledCustomH2 } from '../../shared/styles/StyledCustomHeadings';
import StyledGeneralWrapper from '../../shared/styles/StyledGeneralWrapper';
import StyledCardLayout from '../../shared/styles/StyledCardLayout';
import { StyledImageContainer, StyledBottomContainer } from './styles';
import host, { GA_OAUTH_ENDPOINT } from '../../api-config';
import StyledCardBoilerplateLayout from '../../shared/styles/StyledCardBoilerplateLayout';

// import { PUBLISHER_DASHBOARD_ROUTE_WITH_PARAM } from "../../routes-config";

const PublisherConnectGA = () => {
  const history = useHistory();

  const GAoauth = async () => {
    const resp = await axios.get(`${host}${GA_OAUTH_ENDPOINT}`);
    console.log('oauth', resp);
  };
  return (
    <StyledCardLayout>
      <StyledCardBoilerplateLayout>
        <StyledGeneralWrapper wrapperWidth="100%" wrapperFlex wrapperJustify="flex-end">
          <StyledParagraphButton
            buttonMargin="6px 12px 0 0"
            buttonFontSize={20}
            buttonFontWeight={900}
            buttonColor="#959090"
            onClick={() => history.push('/')}
          >
            x
          </StyledParagraphButton>
        </StyledGeneralWrapper>
        <div>
          <StyledCustomH1 h1FontSize={30} h1FontWeight={600}>
            Create your Referral Campaign
          </StyledCustomH1>
          <StyledCustomH2 h2FontSize={26} h2Color="#696868" h2FontWeight={400}>
            Connect to Google Analytics:
          </StyledCustomH2>
        </div>

        <StyledImageContainer>
          <GoogleAnalyticsSVG style={{ height: '100px', width: '100px' }} />
        </StyledImageContainer>
        <StyledBottomContainer>
          <StyledCustomParagraph
            paragraphColor="#696868"
            paragraphWidth="60%"
            paragraphLineHeight="20px"
          >
            Make sure you’re tracking aquisitions of your sales via Google Analytics. Learn how here
          </StyledCustomParagraph>

          {/* <StyledGeneralButton
            buttonWidth={200}
            buttonColor={"#4C83D4"}
            buttonTextColor={"#ffff"}
            onClick={() =>
              history.push(`${PUBLISHER_DASHBOARD_ROUTE_WITH_PARAM}/sales`)
            }
          >
            Connect
          </StyledGeneralButton> */}
          <StyledGeneralButton
            buttonWidth={200}
            buttonColor="#4C83D4"
            buttonTextColor="#ffff"
            onClick={GAoauth}
          >
            Connect
          </StyledGeneralButton>

          {/* <StyledGeneralButton
            buttonWidth={200}
            buttonColor={"#4C83D4"}
            buttonTextColor={"#ffff"}
            onClick={GAoauth}
          >
            Connect
          </StyledGeneralButton> */}
        </StyledBottomContainer>
      </StyledCardBoilerplateLayout>
    </StyledCardLayout>
  );
};

export default PublisherConnectGA;

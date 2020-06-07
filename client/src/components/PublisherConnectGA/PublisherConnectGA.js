import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import GlobalButton from '../shared/styles';
import { ReactComponent as GoogleAnalyticsSVG } from '../../assets/google-analytics.svg';
import {
  CustomParagraph,
  CardContainerLayout,
  CloseButtonContainer,
  ParagraphButton,
  CustomH1,
  CustomH2,
} from '../shared/GeneralCard';
import { ImageContainer, BottomContainer } from './styles';
import host, { GA_OAUTH_ENDPOINT } from '../../api-config';
import CardLayout from '../shared/layout/CardLayout';

// import { PUBLISHER_DASHBOARD_ROUTE_WITH_PARAM } from "../../routes-config";

const PublisherConnectGA = () => {
  const history = useHistory();

  const GAoauth = async () => {
    const resp = await axios.get(`${host}${GA_OAUTH_ENDPOINT}`);
    console.log('oauth', resp);
  };
  return (
    <CardContainerLayout>
      <CardLayout>
        <CloseButtonContainer>
          <ParagraphButton
            buttonMargin="6px 12px 0 0"
            buttonFontSize={20}
            buttonFontWeight={900}
            buttonColor="#959090"
            onClick={() => history.push('/')}
          >
            x
          </ParagraphButton>
        </CloseButtonContainer>
        <div>
          <CustomH1 h1FontSize={30} h1FontWeight={600}>
            Create your Referral Campaign
          </CustomH1>
          <CustomH2 h2FontSize={26} h2Color="#696868" h2FontWeight={400}>
            Connect to Google Analytics:
          </CustomH2>
        </div>

        <ImageContainer>
          <GoogleAnalyticsSVG style={{ height: '100px', width: '100px' }} />
        </ImageContainer>
        <BottomContainer>
          <CustomParagraph paragraphColor="#696868" paragraphWidth="60%" paragraphLineHeight="20px">
            Make sure you’re tracking aquisitions of your sales via Google Analytics. Learn how here
          </CustomParagraph>

          {/* <GlobalButton
            buttonWidth={200}
            buttonColor={"#4C83D4"}
            buttonTextColor={"#ffff"}
            onClick={() =>
              history.push(`${PUBLISHER_DASHBOARD_ROUTE_WITH_PARAM}/sales`)
            }
          >
            Connect
          </GlobalButton> */}
          <GlobalButton
            buttonWidth={200}
            buttonColor="#4C83D4"
            buttonTextColor="#ffff"
            onClick={GAoauth}
          >
            Connect
          </GlobalButton>

          {/* <GlobalButton
            buttonWidth={200}
            buttonColor={"#4C83D4"}
            buttonTextColor={"#ffff"}
            onClick={GAoauth}
          >
            Connect
          </GlobalButton> */}
        </BottomContainer>
      </CardLayout>
    </CardContainerLayout>
  );
};

export default PublisherConnectGA;

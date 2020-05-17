import React, { Fragment } from "react";
import axios from "axios";
import { GlobalButton } from "../shared/styles";
import { ReactComponent as GoogleAnalyticsSVG } from "../../assets/google-analytics.svg";
import { useWeb3Context } from "web3-react";
import {
  CustomParagraph,
  CardContainerLayout,
  CloseButtonContainer,
  ParagraphButton,
  CustomH1,
  CustomH2,
} from "../shared/GeneralCard";
import { useHistory } from "react-router-dom";
import { SignUpCard } from "../shared/PublisherWizard/styles";
import { ImageContainer, BottomContainer } from "./styles";
import { PUBLISHER_DASHBOARD_ROUTE_WITH_PARAM } from "../../routes-config";
import host from "../../api-config";
import { GA_OAUTH_ENDPOINT } from "../../api-config";
// import { PUBLISHER_DASHBOARD_PAY_PER_SALE_ROUTE } from "../../routes-config";

export const PublisherConnectGA = (props) => {
  const context = useWeb3Context();
  const history = useHistory();
  console.log("PUBLISHER CONNECT GA context useweb3", context);
  console.log("publisher connect GA props", props);

  const GAoauth = async () => {
    const resp = await axios.get(`${host}${GA_OAUTH_ENDPOINT}`);
    console.log(resp)
  };
  return (
    <CardContainerLayout>
      <SignUpCard>
        <CloseButtonContainer>
          <ParagraphButton
            buttonMargin={"6px 12px 0 0"}
            buttonFontSize={20}
            buttonFontWeight={900}
            buttonColor={"#959090"}
            onClick={() => history.push("/")}
          >
            x
          </ParagraphButton>
        </CloseButtonContainer>
        <div>
          <CustomH1 h1FontSize={30} h1FontWeight={600}>
            Create your Referral Campaign
          </CustomH1>
          <CustomH2 h2FontSize={26} h2Color={"#696868"} h2FontWeight={400}>
            Connect to Google Analytics:
          </CustomH2>
        </div>

        <ImageContainer>
          <GoogleAnalyticsSVG style={{ height: "100px", width: "100px" }} />
        </ImageContainer>
        <BottomContainer>
          <CustomParagraph
            paragraphColor={"#696868"}
            paragraphWidth={"60%"}
            paragraphLineHeight={"20px"}
          >
            Make sure you’re tracking aquisitions of your sales via Google
            Analytics. Learn how here
          </CustomParagraph>
          {/* 
          <GlobalButton
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
            buttonColor={"#4C83D4"}
            buttonTextColor={"#ffff"}
            onClick={GAoauth}
          >
            Connect
          </GlobalButton>
        </BottomContainer>
      </SignUpCard>
    </CardContainerLayout>
  );
};

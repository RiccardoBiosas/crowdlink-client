import React from "react";
import { useHistory } from "react-router-dom";
import {
  PUBLISHER_WORKFLOW_ROUTE,
  PUBLISHER_FEED_ROUTE,
} from "../routes-config";
import {
  CardContainerLayout,
  CardLayout,
  DoubleButtonsContainer,
  ParagraphButton,
  CustomParagraph,
  CustomH1,
  CardLayoutWithHorizontalContainers,
  CardSubContainer
} from "./shared/GeneralCard";
import { ReactComponent as CrowdLinkHomepagePublisher } from "../assets/crowdlink-homepage-creator.svg";

export const PublisherHomepage = () => {
  const history = useHistory();

  return (
    <CardContainerLayout cardContainerBackgroundColor={'#E5E5E5'}>
      <CardLayoutWithHorizontalContainers cardLayoutWidth={'90vw'}>
        <CardSubContainer justify={'space-between'} align={'flex-start'}>
          <div>
            <CustomH1 h1FontSize={40} h1LineHeight={'54px'}>             
              Create a referral campaign <br /> within minutes
            </CustomH1>
            <CustomParagraph
              paragraphFontSize={26}
              paragraphMargin={"32px 0 0 0"}
              paragraphColor={"#959090"}
              paragraphLineHeight={'34px'}
            >
              set a commission per sale from links <br /> and let the rest be history
            </CustomParagraph>
          </div>
          <DoubleButtonsContainer>
            <ParagraphButton
              buttonColor={"#7838D5"}
              buttonFontWeight={900}
              buttonFontSize={26}
              
              onClick={() => history.push(PUBLISHER_WORKFLOW_ROUTE)}
            >
              Get Started
            </ParagraphButton>

            {/* <div>
              <button onClick={() => history.push(PUBLISHER_FEED_ROUTE)}>
                go to dashboard feed
              </button>
            </div> */}
                    <div>
              <button onClick={() => history.push('/ptokens')}>
                go to dashboard feed
              </button>
            </div>

            <ParagraphButton
              buttonColor={"#959090"}
              paragraphFontSize={24}
              buttonMargin={'10px 0 0 0'}
              onClick={() => history.push("/marketer")}
            >
              I am a marketer >
            </ParagraphButton>
          </DoubleButtonsContainer>
        </CardSubContainer>

        <div>
          <CrowdLinkHomepagePublisher />
        </div>
      </CardLayoutWithHorizontalContainers>
    </CardContainerLayout>
  );
};

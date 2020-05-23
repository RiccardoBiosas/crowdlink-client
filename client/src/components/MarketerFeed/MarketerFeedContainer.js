import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { ParagraphButton, CustomParagraph } from "../shared/GeneralCard";
import {
  CampaignContainerLayout,
  CampaignContainer,
  CampaignContainerComponent,
  CampaignContainerDataContainer,
  DropdownCampaignContainer,
} from "../shared/feed/styles";
import { RowContainer } from "../shared/PublisherWizard/styles";

import copy from "../../assets/clipboard-copy.png";

export const MarketerFeedContainer = ({ contractInstance }) => {
  const [referralLink, setReferralLink] = useState();
  // const [showStats, setShowStats] = useState(false)
  console.log("marketer feed contractinstance", contractInstance);

  // const transitions = useTransition(showStats, null, {
  //   from: {opacitiy: 0, transform: 'translateY(-20%)'},
  //   enter: {opacity: 1, transform: 'translateY(0%)'},
  //   leave: {opacity: 0, transform: 'translateY(-20%)'},
  //   config: {
  //     duration: 400
  //   }
  // })

  useEffect(() => {
    if(referralLink) {
      addInfluencer()

    }

  }, [referralLink])

  const addInfluencer = async () => {
    // const resp = await contractInstance.functions.influencerWithdraw()
    // console.log('influencer withdrawal', resp)

    const resp = await contractInstance.functions.addInfluencer('greatwebsite', referralLink, '0xC18abDa7ca50736ee93f1F7Ba712a4EE08649D16') //all hardcoded
    console.log('add influencer resp', resp)
  };

  const history = useHistory();
  return (
    <CampaignContainerLayout>
      <CampaignContainer>
        <CampaignContainerComponent
          containerMargin={"0 0 0 18px"}
          componentFlex={3}
        >
          <CampaignContainerDataContainer>
            <CustomParagraph
              paragraphColor={"#1E1E1E"}
              paragraphFontSize={18}
              paragraphWidth={"32%"}
            >
              Campaign's Website
            </CustomParagraph>
            <CustomParagraph paragraphColor={"#959090"} paragraphFontSize={18}>
              campaign's website
            </CustomParagraph>
          </CampaignContainerDataContainer>
          <CampaignContainerDataContainer>
            <CustomParagraph
              paragraphColor={"#1E1E1E"}
              paragraphFontSize={18}
              paragraphWidth={"32%"}
            >
              Reward
            </CustomParagraph>
            <CustomParagraph paragraphColor={"#959090"} paragraphFontSize={18}>
              reward$$
            </CustomParagraph>
          </CampaignContainerDataContainer>
          <CampaignContainerDataContainer style={{ alignItems: "center" }}>
            <CustomParagraph
              paragraphFontSize={18}
              paragraphColor={"#1E1E1E"}
              paragraphWidth={"32%"}
            >
              Your unique referral link:
            </CustomParagraph>
            <RowContainer>
              <CustomParagraph
                paragraphColor={"#696868"}
                paragraphMargin={"0 10px 0 0"}
              >
                {referralLink ? referralLink : "not generated"}
              </CustomParagraph>

              <ParagraphButton>
                <img src={copy} />
              </ParagraphButton>
            </RowContainer>
          </CampaignContainerDataContainer>
          {/* <CampaignContainerDataContainer>
          <CustomParagraph
              paragraphColor={"#1E1E1E"}
              paragraphFontSize={18}
              paragraphWidth={"32%"}
            >
              My unique referral link:
            </CustomParagraph>
            <CustomParagraph paragraphColor={"#959090"} paragraphFontSize={18}>
              ...
            </CustomParagraph>
          </CampaignContainerDataContainer> */}
        </CampaignContainerComponent>
        <CampaignContainerComponent componentFlex={1}>
          {!referralLink ? (
            <ParagraphButton
              buttonColor={"#4C83D4"}
              buttonFontSize={20}
              buttonFontWeight={600}
              onClick={() => setReferralLink("crowdly")}
            >
              Create Link +
            </ParagraphButton>
          ) : (
            <ParagraphButton
              buttonColor={"#7838D5"}
              buttonFontSize={20}
              buttonFontWeight={600}
              onClick={() => setReferralLink("crdly")}
            >
              Withdraw >
            </ParagraphButton>
          )}
        </CampaignContainerComponent>
      </CampaignContainer>
    </CampaignContainerLayout>
  );
};

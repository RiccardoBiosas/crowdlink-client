import React, { useState, useEffect, useMemo, useCallback } from "react";
import axios from "axios";
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
import host from "../../api-config";
import {
  CAMPAIGNS_ENDPOINT_CLICK_CAMPAIGN,
  CAMPAIGNS_CLICK_CREATE_LINK_ENDPOINT,
} from "../../api-config";
import { useFetch } from "../../hooks/useFetch";
// /api/click/campaigns/{id}/create_link/

export const PresentationalParagraphButtonContainer = ({
  id,
  setReferralLinkCB,
  user_public_key,
}) => {
  const handleClick = async () => {
    // const resp = await axios.get(
    //   `${CAMPAIGNS_ENDPOINT_CLICK_CAMPAIGN}${id}${CAMPAIGNS_CLICK_CREATE_LINK_ENDPOINT}`
    // );
    const resp = await axios.post(
      `${id}${CAMPAIGNS_CLICK_CREATE_LINK_ENDPOINT}`, {
        user_public_key

      }
    );
    console.log("referral link ##", resp.data);
  };
  return (
    <ParagraphButton
      buttonColor={"#4C83D4"}
      buttonFontSize={20}
      buttonFontWeight={600}
      onClick={handleClick}
    >
      Create Link +
    </ParagraphButton>
  );
};

export const MarketerFeedContainer = ({ contractInstance, account }) => {
  const [referralLink, setReferralLink] = useState();
  const [campaignsList, setCampaignsList] = useState();
  const [isFetched, setIsFetched] = useState(true);
  console.log("marketer feed contractinstance", contractInstance);

  // const transitions = useTransition(showStats, null, {
  //   from: {opacitiy: 0, transform: 'translateY(-20%)'},
  //   enter: {opacity: 1, transform: 'translateY(0%)'},
  //   leave: {opacity: 0, transform: 'translateY(-20%)'},
  //   config: {
  //     duration: 400
  //   }
  // })

  const fetchData = useCallback(async () => {
    const resp = await axios.get(CAMPAIGNS_ENDPOINT_CLICK_CAMPAIGN);
    setCampaignsList(resp.data);
  }, [isFetched]);

  useEffect(() => {
    fetchData();
    if (referralLink) {
      addInfluencer();
    }
  }, [referralLink]);

  console.log("CAMPAIGNS LIST#####", campaignsList);

  const addInfluencer = async () => {
    // const resp = await contractInstance.functions.influencerWithdraw()
    // console.log('influencer withdrawal', resp)

    const resp = await contractInstance.functions.addInfluencer(
      "greatwebsite",
      referralLink,
      account
    ); //all hardcoded
    console.log("add influencer resp", resp);
  };

  // if(campaignsList && campaignsList.results.length > 0) {
  //   console.log('keys #####', Object.keys(campaignsList.results))

  // }

  const history = useHistory();
  return (
    <CampaignContainerLayout>
      {campaignsList &&
        campaignsList.results.length > 0 &&
        campaignsList.results.map((x, i) => (
          <CampaignContainer containerMargin={"0 0 20px 0"}>
            <CampaignContainerComponent
              containerMargin={"0 0 0 16px"}
              componentFlex={3}
            >
              <CampaignContainerDataContainer>
                <CustomParagraph
                  paragraphColor={"#1E1E1E"}
                  paragraphFontSize={16}
                  paragraphWidth={"32%"}
                >
                  Campaign Name:
                </CustomParagraph>
                <CustomParagraph
                  paragraphColor={"#959090"}
                  paragraphFontSize={16}
                >
                  {x.name}
                </CustomParagraph>
              </CampaignContainerDataContainer>
              <CampaignContainerDataContainer>
                <CustomParagraph
                  paragraphColor={"#1E1E1E"}
                  paragraphFontSize={16}
                  paragraphWidth={"32%"}
                >
                  Campaign URL:
                </CustomParagraph>
                <CustomParagraph
                  paragraphColor={"#959090"}
                  paragraphFontSize={16}
                >
                  {x.url}
                </CustomParagraph>
              </CampaignContainerDataContainer>
              <CampaignContainerDataContainer>
                <CustomParagraph
                  paragraphColor={"#1E1E1E"}
                  paragraphFontSize={16}
                  paragraphWidth={"32%"}
                >
                  Reward:
                </CustomParagraph>
                <CustomParagraph
                  paragraphColor={"#959090"}
                  paragraphFontSize={16}
                >
                  {x.reward} $
                </CustomParagraph>
              </CampaignContainerDataContainer>
              <CampaignContainerDataContainer style={{ alignItems: "center" }}>
                <CustomParagraph
                  paragraphFontSize={16}
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
                 paragraphFontSize={16}
                 paragraphWidth={"32%"}
               >
                 My unique referral link:
               </CustomParagraph>
               <CustomParagraph paragraphColor={"#959090"} paragraphFontSize={16}>
                 ...
               </CustomParagraph>
             </CampaignContainerDataContainer> */}
            </CampaignContainerComponent>
            <CampaignContainerComponent componentFlex={1}>
              {!referralLink ? (
                <PresentationalParagraphButtonContainer
                  id={x.self_url}
                  user_public_key={account}
                  setReferralLinkCB={setReferralLink}
                />
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
        ))}
    </CampaignContainerLayout>
  );
};

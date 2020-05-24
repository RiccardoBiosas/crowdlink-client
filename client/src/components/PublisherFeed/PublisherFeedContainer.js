import React, { useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { ParagraphButton, CustomParagraph } from "../shared/GeneralCard";
import axios from "axios";
import {
  CampaignContainerLayout,
  CampaignContainer,
  CampaignContainerComponent,
  CampaignContainerDataContainer,
  ToTheLeftFlexContainer,
  DropdownCampaignContainer,
} from "../shared/feed/styles";
import { RowContainer } from "../shared/PublisherWizard/styles";

import {
  PUBLISHER_WITHDRAW_ROUTE_WITH_PARAM,
  PUBLISHER_DASHBOARD_ROUTE_WITH_PARAM,
} from "../../routes-config";
// import { ReactComponent as Copy } from "../../assets/clipboard-copy.png";
import copy from "../../assets/clipboard-copy.png";
import { GlobalButton } from "../shared/styles";
import { CAMPAIGNS_ENDPOINT_CLICK_CAMPAIGN } from "../../api-config";

export const PublisherFeedContainer = ({ account, contractInstance }) => {
  const [showStats, setShowStats] = useState(false);
  const [campaignsList, setCampaignsList] = useState();
  const [isFetched, setIsFetched] = useState(true);

  const history = useHistory();

  const fetchData = useCallback(async () => {
    const resp = await axios.get(CAMPAIGNS_ENDPOINT_CLICK_CAMPAIGN);
    setCampaignsList(resp.data);
  }, [isFetched]);

  useEffect(() => {
    fetchData();
  }, []);

  const transitions = useTransition(showStats, null, {
    from: { opacitiy: 0, transform: "translateY(-20%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0, transform: "translateY(-20%)" },
    config: {
      duration: 400,
    },
  });

  return (
    <CampaignContainerLayout>
      <ToTheLeftFlexContainer>
        <ParagraphButton
          buttonColor={"#4C83D4"}
          buttonFontSize={20}
          buttonFontWeight={600}
          onClick={() =>
            history.push(`${PUBLISHER_DASHBOARD_ROUTE_WITH_PARAM}/sales`)
          }
        >
          Create +
        </ParagraphButton>
      </ToTheLeftFlexContainer>

      {campaignsList &&
        campaignsList.results.length > 0 &&
        campaignsList.results
          .filter((x) => x.user_public_key === account)
          .map((x, i) => (
            <CampaignContainer dropdownOpen={showStats} key={`publisher${i}`}>
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
                    Campaign Name:
                  </CustomParagraph>
                  <CustomParagraph
                    paragraphColor={"#959090"}
                    paragraphFontSize={18}
                  >
                    {x.name}
                  </CustomParagraph>
                </CampaignContainerDataContainer>
                <CampaignContainerDataContainer
                  style={{ alignItems: "center" }}
                >
                  <CustomParagraph
                    paragraphFontSize={18}
                    paragraphColor={"#1E1E1E"}
                    paragraphWidth={"32%"}
                  >
                    Campaign URL:
                  </CustomParagraph>
                  <RowContainer>
                    <CustomParagraph
                      paragraphColor={"#696868"}
                      paragraphMargin={"0 10px 0 0"}
                    >
                      {x.url}
                    </CustomParagraph>

                    <ParagraphButton>
                      <img src={copy} />
                    </ParagraphButton>
                  </RowContainer>
                </CampaignContainerDataContainer>
              </CampaignContainerComponent>
              <CampaignContainerComponent componentFlex={1}>
                <ParagraphButton
                  buttonColor={"#7838D5"}
                  buttonFontSize={20}
                  buttonFontWeight={600}
                  onClick={() =>
                    history.push({
                      pathname: `${PUBLISHER_WITHDRAW_ROUTE_WITH_PARAM}/${x.name}`,
                      url: x.url,
                    })
                  }
                >
                  Withdraw >
                </ParagraphButton>
                {/* <ParagraphButton
            buttonColor={"#7838D5"}
            buttonFontSize={20}
            buttonFontWeight={600}
            onClick={() => setShowStats(!showStats)}
          >
            {!showStats ? "Show stats" : "Hide stats"}
          </ParagraphButton> */}
              </CampaignContainerComponent>
            </CampaignContainer>
            // {transitions.map(({ item, key, props }) => {
            //   return (
            //     item && (
            //       <animated.div style={props} key={key}>
            //         <DropdownCampaignContainer>
            //           <CampaignContainerComponent
            //             containerMargin={"0 0 0 18px"}
            //             componentFlex={3}
            //           >
            //             <CampaignContainerDataContainer>
            //               <ParagraphButton
            //                 buttonColor={"#1E1E1E"}
            //                 buttonFontSize={18}
            //                 buttonFontWeight={400}
            //                 buttonWidth={"32%"}
            //               >
            //                 Remaining budget:
            //               </ParagraphButton>
            //               <CustomParagraph
            //                 paragraphColor={"#959090"}
            //                 paragraphFontSize={18}
            //               >
            //                 hardcoded balance
            //               </CustomParagraph>
            //             </CampaignContainerDataContainer>

            //             {/* <CampaignContainerDataContainer>
            //               <ParagraphButton
            //                 buttonColor={"#1E1E1E"}
            //                 buttonFontSize={18}
            //                 buttonFontWeight={400}
            //                 buttonWidth={"32%"}
            //               >
            //                 Generated referral links:
            //               </ParagraphButton>
            //               <CustomParagraph
            //                 paragraphColor={"#959090"}
            //                 paragraphFontSize={18}
            //               >
            //                 hardcoded number 100
            //               </CustomParagraph>
            //             </CampaignContainerDataContainer> */}
            //           </CampaignContainerComponent>

            //           <CampaignContainerComponent componentFlex={1}>
            //             <ParagraphButton
            //               buttonColor={"#7838D5"}
            //               buttonFontSize={20}
            //               buttonFontWeight={600}
            //               onClick={() =>
            //                 history.push(
            //                   `${PUBLISHER_WITHDRAW_ROUTE_WITH_PARAM}/${website}`
            //                 )
            //               }
            //             >
            //               Withdraw >
            //             </ParagraphButton>
            //           </CampaignContainerComponent>
            //         </DropdownCampaignContainer>
            //       </animated.div>
            //     )
            //   );
            // })}
          ))}
    </CampaignContainerLayout>
  );
};

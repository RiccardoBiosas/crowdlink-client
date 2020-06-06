import React, { useState, Fragment } from "react";
import { useHistory } from "react-router-dom";

import {
  CustomH1,
  CustomParagraph,
  ParagraphButton,
} from "../../shared/GeneralCard";
// import axios from "axios";
// import { ethers } from "ethers";
// import { GlobalButton } from "../shared/styles";
// import {
//   CampaignContainer,
//   CampaignCard,
//   CustomField,
//   CustomForm,
//} from "../shared/PublisherWizard/styles";
import { PUBLISHER_FEED_ROUTE } from "../../../routes-config";

//DISPLAY ETHERSCAN TRANSACTION
const PublisherWizardCampaignOutcome = ({
  step,
  respStatus,
}) => {
  const history = useHistory();
  if (step !== 5) {
    return null;
  } else {
    console.log("outcome response status ", respStatus);

    if (respStatus === 201) {
      return (
        //   <Fragment>
        //   <DepositInfoContainer>
        //     <CustomParagraph paragraphColor={"#696868"} paragraphFontSize={18}>
        //       You're ready to start!
        //     </CustomParagraph>
        //     <RowContainer>
        //       <CustomParagraph
        //         paragraphBorder={"0.6px solid #206DFF"}
        //         paragraphPadding={"10px"}
        //         paragraphColor={"#696868"}
        //         paragraphMargin={"0 10px 0 0"}
        //         paragraphWidth={"240px"}
        //         style={{ textAlign: "center" }}
        //       >
        //         {"crowdlink.eth"}
        //       </CustomParagraph>
        //       {/* currently hardcoded address. will be dynamically imported from truffle deployments */}
        //       <ParagraphButton onClick={() => copyToClipboard(address)}>
        //         <Copy />
        //       </ParagraphButton>
        //     </RowContainer>
        //   </DepositInfoContainer>

        //   <DepositButtonContainer>
        //     <GlobalButton
        //       type="submit"
        //       buttonWidth={200}
        //       buttonTextColor={"white"}
        //       buttonColor={"#7838D5"}
        //     >
        //       Pay with portis
        //     </GlobalButton>
        //   </DepositButtonContainer>
        // </Fragment>
        <Fragment>
          <div>
            <CustomH1>You’re ready to start!</CustomH1>
          </div>
          <div>
            <CustomParagraph>
              Once transaction goes through anyone can create a link to a earn %
              of sale:
            </CustomParagraph>
          </div>
          <div>
            <ParagraphButton onClick={() => history.push(PUBLISHER_FEED_ROUTE)}>
              Campaign Feed >
            </ParagraphButton>
          </div>
        </Fragment>
      );
    } else {
      return <h1>failure</h1>;
    }
  }
};


export default PublisherWizardCampaignOutcome;

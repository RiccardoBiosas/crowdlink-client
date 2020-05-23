import React, { useState, Fragment } from "react";

import {
  DepositButtonContainer,
  DepositInfoContainer,
  RowContainer,
} from "../shared/PublisherWizard/styles";
import { GlobalButton } from "../shared/styles";
import { ReactComponent as Copy } from "../../assets/copy.svg";
import { CustomParagraph, ParagraphButton } from "../shared/GeneralCard";

export const PublisherWizardDeposit = ({ step, values, address }) => {
  console.log("values in publisher wizard deposit", values);

  const copyToClipboard = (txt) => {
    const temporaryInput = document.createElement("input");
    document.body.appendChild(temporaryInput);
    temporaryInput.setAttribute("value", txt);
    temporaryInput.select();
    document.execCommand("copy");
    document.body.removeChild(temporaryInput);
  };
  if (step !== 3) {
    return null;
  } else {
    return (
      <Fragment>
        <DepositInfoContainer>
          <CustomParagraph paragraphColor={"#696868"} paragraphFontSize={18}>
            Send ETH to the smart contract address:
          </CustomParagraph>
          <RowContainer>
            <CustomParagraph
              paragraphBorder={"0.6px solid #206DFF"}
              paragraphPadding={"10px"}
              paragraphColor={"#696868"}
              paragraphMargin={"0 10px 0 0"}
            >
              {address}
            </CustomParagraph>
            {/* currently hardcoded address. will be dynamically imported from truffle deployments */}
            <ParagraphButton onClick={() => copyToClipboard(address)}>
              <Copy />
            </ParagraphButton>
          </RowContainer>
        </DepositInfoContainer>

        <DepositButtonContainer>
          <GlobalButton
            type="submit"
            buttonWidth={200}
            buttonTextColor={"white"}
            buttonColor={"#7838D5"}
          >
            Pay with portis
          </GlobalButton>
        </DepositButtonContainer>
      </Fragment>
    );
  }
};
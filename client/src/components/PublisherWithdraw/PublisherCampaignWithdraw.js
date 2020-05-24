import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useHistory, useLocation } from "react-router-dom";
import {
  CardContainerLayout,
  CardLayoutWithBorder,
  CloseButtonContainer,
  CustomH1,
  CustomParagraph,
  ParagraphButton,
  CardSubContainer,
} from "../shared/GeneralCard";
import { PUBLISHER_FEED_ROUTE } from "../../routes-config";
import { RowContainer } from "../shared/PublisherWizard/styles";
import copy from "../../assets/clipboard-copy.png";
import { BasicContainer } from "../shared/feed/styles";

export const PublisherCampaignWithdraw = ({ contractInstance, account }) => {
  const history = useHistory();
  const [balance, setBalance] = useState();
  const location = useLocation();

  const copyToClipboard = (txt) => {
    const temporaryInput = document.createElement("input");
    document.body.appendChild(temporaryInput);
    temporaryInput.setAttribute("value", txt);
    temporaryInput.select();
    document.execCommand("copy");
    document.body.removeChild(temporaryInput);
  };

  const checkCampaignOwnerTotalBalance = async () => {
    const bal = await contractInstance.functions.campaign_owner_account_balance(
      account
    );
    const converted_bal = ethers.utils.formatEther(bal);
    setBalance(converted_bal);
  };

  useEffect(() => {
    checkCampaignOwnerTotalBalance();
  });

  const withdraw = async () => {
    const receipt = await contractInstance.functions.withdrawFromCampaign(
      location.url,
      { gasLimit: 1200000 }
    );
  };

  return (
    <CardContainerLayout>
      <CardLayoutWithBorder>
        <CloseButtonContainer closeButtonContainerHeight={"6%"}>
          <ParagraphButton
            buttonMargin={"6px 12px 0 0"}
            buttonFontSize={20}
            buttonFontWeight={900}
            buttonColor={"#959090"}
            onClick={() => history.push(PUBLISHER_FEED_ROUTE)}
          >
            x
          </ParagraphButton>
        </CloseButtonContainer>
        <CardSubContainer subContainerHeight={"100%"}>
          <CustomH1 h1Color={"#444444"} h1FontWeight={500}>
            Are you sure?
          </CustomH1>
          <CustomParagraph
            paragraphColor={"#696868"}
            paragraphFontSize={20}
            paragraphMargin={"0 0 8px 0"}
          >
            Withdrawing will end the campaign.
          </CustomParagraph>
          <BasicContainer containerWidth={"100%"}>
            <CustomParagraph paragraphColor={"#696868"} paragraphFontSize={20}>
              Money will be sent to:
            </CustomParagraph>
          </BasicContainer>

          <RowContainer containerWidth={"100%"}>
            <CustomParagraph
              paragraphColor={"#696868"}
              paragraphMargin={"0 10px 0 0"}
            >
              {account}
            </CustomParagraph>

            <ParagraphButton>
              <img src={copy} onClick={() => copyToClipboard(account)} />
            </ParagraphButton>
          </RowContainer>

          <RowContainer containerWidth={"100%"}>
            <CustomParagraph paragraphColor={"#696868"} paragraphFontSize={20}>
              Total amount:
            </CustomParagraph>
            <CustomParagraph
              paragraphColor={"#696868"}
              paragraphFontSize={20}
              paragraphFontWeight={600}
            >
              {balance ? balance : ""} eth
            </CustomParagraph>
          </RowContainer>

          <ParagraphButton
            buttonColor={"#7838D5"}
            buttonFontSize={20}
            buttonFontWeight={600}
            onClick={withdraw}
          >
            withdraw >
          </ParagraphButton>
        </CardSubContainer>
      </CardLayoutWithBorder>
    </CardContainerLayout>
  );
};

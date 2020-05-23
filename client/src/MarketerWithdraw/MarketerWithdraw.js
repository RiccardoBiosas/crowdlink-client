import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  CardContainerLayout,
  CardLayoutWithBorder,
  CloseButtonContainer,
  CustomH1,
  CustomParagraph,
  ParagraphButton,
  CardSubContainer,
} from "../shared/GeneralCard";
import { ReactComponent as Copy } from "../../assets/copy.svg";
import { PUBLISHER_FEED_ROUTE } from "../../routes-config";
import { RowContainer } from "../shared/PublisherWizard/styles";
import copy from "../../assets/clipboard-copy.png";
import { BasicContainer } from "../shared/feed/styles";

export const MarketerWithdraw = ({ contractInstance, account }) => {
  const [balance, setBalance] = useState();
  const history = useHistory();
  const crowdlinkAddress = contractInstance.address;

  console.log("marketer withdraw route: ", contractInstance);

  const withdraw = async () => {
    const resp = await contractInstance.functions.influencerWithdraw();
    console.log("influencer withdrawal", resp);
  };

  const checkBalance = async () => {
    const resp = await contractInstance.functions.account.influencer_account_balance(
      account
    );
    console.log("influencer balance", resp);
  };

  useEffect(() => {
    checkBalance();
  }, []);

  const copyToClipboard = (txt) => {
    const temporaryInput = document.createElement("input");
    document.body.appendChild(temporaryInput);
    temporaryInput.setAttribute("value", txt);
    temporaryInput.select();
    document.execCommand("copy");
    document.body.removeChild(temporaryInput);
  };

  const withdraw = async (website) => {
    const receipt = await contractInstance.functions.withdrawFromCampaign(
      website,
      { gasLimit: 1200000 }
    );

    console.log(receipt);
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
          <RowContainer containerWidth={"100%"}>
            <CustomParagraph paragraphColor={"#696868"} paragraphFontSize={20}>
              Your balance:
            </CustomParagraph>
            <CustomParagraph
              paragraphColor={"#696868"}
              paragraphFontSize={20}
              paragraphFontWeight={600}
            >
              {balance ? balance : ""}
            </CustomParagraph>
          </RowContainer>
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

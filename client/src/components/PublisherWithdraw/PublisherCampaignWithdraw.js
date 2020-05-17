import React from "react";
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


export const PublisherCampaignWithdraw = ({ contractInstance }) => {
  const history = useHistory();
  const crowdlinkAddress = contractInstance.address;
  const { campaign } = useParams();
  console.log(campaign);

  console.log('withdraw route: ', contractInstance)

  const copyToClipboard = (txt) => {
    const temporaryInput = document.createElement("input");
    document.body.appendChild(temporaryInput);
    temporaryInput.setAttribute("value", txt);
    temporaryInput.select();
    document.execCommand("copy");
    document.body.removeChild(temporaryInput);
  };

  const withdraw = async(website) => {
    const receipt = await contractInstance.functions.withdrawFromCampaign(website, {gasLimit: 1200000})

    console.log(receipt)
  }

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
          <CustomParagraph>Money will be sent to: :</CustomParagraph>

          <RowContainer containerWidth={"80%"}>
            <CustomParagraph
              paragraphBorder={"0.6px solid #206DFF"}
              paragraphPadding={"10px"}
              paragraphColor={"#696868"}
            >
              {crowdlinkAddress}
            </CustomParagraph>
            {/* currently hardcoded address. will be dynamically imported from truffle deployments */}
            <ParagraphButton onClick={() => copyToClipboard(crowdlinkAddress)}>
              <Copy />
            </ParagraphButton>
          </RowContainer>
          <RowContainer containerWidth={"80%"}>
            <CustomParagraph paragraphFontSize={20}>
              Total amount:
            </CustomParagraph>
            <CustomParagraph
              paragraphColor={"#696868"}
              paragraphFontSize={20}
              paragraphFontWeight={600}
            >
              $$$
            </CustomParagraph>
          </RowContainer>

          <ParagraphButton
            buttonColor={"#7838D5"}
            buttonFontSize={20}
            buttonFontWeight={600}
            onClick={(website) => withdraw(campaign)}
          >
            withdraw >
          </ParagraphButton>
        </CardSubContainer>
      </CardLayoutWithBorder>
    </CardContainerLayout>
  );
};

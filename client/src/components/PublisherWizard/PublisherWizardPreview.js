import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Web3Provider, { useWeb3Context, Web3Consumer } from "web3-react";
import CrowdlinkReferral from "../../contracts/CrowdlinkReferral";
import { ethers } from "ethers";
import {
  CampaignContainer,
  CampaignCard,
  CustomField,
  CustomForm,
  CloseAndBackButtonContainer,
} from "../shared/PublisherWizard/styles";
import { ParagraphButton, CustomParagraph } from "../shared/GeneralCard";
import { GlobalButton } from "../shared/styles";
import { ReactComponent as Copy } from "../../assets/copy.svg";
import { COINGECKO_API } from "../../api-config";

export const PublisherWizardPreview = ({ step, values }) => {
  const { url, reward, budget } = values;
  const [ethPrice, setEthPrice] = useState();
  console.log("publisher wizard preview budget", budget);

  const fetchPrice = async () => {
    const resp = await axios.get(
      `${COINGECKO_API}simple/price?ids=ethereum&vs_currencies=usd&include_market_cap=false&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=false`
    );
    console.log(resp);
    setEthPrice(resp.data.ethereum.usd);
  };

  useEffect(() => {
    fetchPrice();
  }, []);

  if (step !== 2) {
    return null;
  } else {
    return (
      <div>
        <div>
          <CustomParagraph>Your website: {url}</CustomParagraph>
          <CustomParagraph>
            Your reward converted to ethereum:{" "}
            {ethPrice ? reward / ethPrice : "null"}
          </CustomParagraph>
          <CustomParagraph>
            your budget converted to ethereum:{" "}
            {ethPrice ? budget / ethPrice : "null"}
          </CustomParagraph>
        </div>
      </div>
    );
  }
};

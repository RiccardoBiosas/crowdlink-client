import React, { useState, useEffect, Fragment } from "react";
import { useWeb3Context } from "web3-react";

import {
  DepositButtonContainer,
  DepositInfoContainer,
  RowContainer,
} from "../shared/PublisherWizard/styles";
import { GlobalButton } from "../shared/styles";
import { ReactComponent as Copy } from "../../assets/copy.svg";
import { CustomParagraph, ParagraphButton } from "../shared/GeneralCard";
import { ethers } from "ethers";

export const PublisherWizardDeposit = ({ step, values, address }) => {
  console.log("values in publisher wizard deposit", values);
  const context = useWeb3Context();
  const [resolvedAddress, setResolvedAddress] = useState();

  console.log("provider in the wizard deposit", context);

  const resolveENS = async () => {
    const provider = ethers.getDefaultProvider("ropsten");
    // const provider = await new ethers.providers.InfuraProvider('process.env.REACT_APP_INFURA_ROPSTEN' )

    console.log("deposit provider", provider);
    const resolved = await provider.resolveName("crowdlink.eth");
    console.log(resolved);
    setResolvedAddress(resolved);
  };

  useEffect(() => {
    resolveENS();
  }, []);

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
            Your ethereum will be deposited here:
          </CustomParagraph>
          <RowContainer>
            <CustomParagraph
              paragraphBorder={"0.6px solid #206DFF"}
              paragraphPadding={"10px"}
              paragraphColor={"#696868"}
              paragraphMargin={"0 10px 0 0"}
              paragraphWidth={"240px"}
              style={{ textAlign: "center" }}
            >
              {"crowdlink.eth"}
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

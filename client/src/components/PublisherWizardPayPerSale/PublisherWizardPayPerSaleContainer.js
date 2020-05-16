import React, { useState, Fragment } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Web3Provider, { useWeb3Context, Web3Consumer } from "web3-react";
import CrowdlinkReferral from "../../contracts/CrowdlinkReferral";
import { ethers } from "ethers";

import { Formik, Form, Field } from "formik";
import { PublisherWizardDeposit } from "./PublisherWizardDeposit";
import { PublisherWizardCreateReferralCampaign } from "./PublisherWizardCreateReferralCampaign";
import { PublisherWizardCampaignCreationOutcome } from "./PublisherWizardCampaignCreationOutcome";
import { PublisherWizardPayPerSalePreview } from "./PublisherWizardPayPerSalePreview";

import {
  CampaignContainer,
  CampaignCard,
  CustomField,
  CustomForm,
  CloseAndBackButtonContainer,
  NextButtonContainer,
  HeadingContainer
} from "../shared/PublisherWizard/styles";
import { ParagraphButton, CustomH1 } from "../shared/GeneralCard";
import { GlobalButton } from "../shared/styles";
import { ReactComponent as Copy } from "../../assets/copy.svg";

const step_headings = [
  "Place url link and commission per sale ",
  "Preview",
  "Deposit funds into contract",
];

const empty_initial_values = {
  url: "",
  reward: "",
  budget: "",
};

export const PublisherWizardPayPerSaleContainer = () => {
  const [step, setStep] = useState(1);
  const [resp, setResp] = useState();

  const history = useHistory();
  const context = useWeb3Context();
  console.log("context inside pay per sale container", context);

  const { library, account } = useWeb3Context(); //use context.active to check whether there's an active web3 provider

  const openReferralCampaign = async (budget, reward, url) => {
    const contract = new ethers.Contract(
      "0xF0EE3abb4eB18a1Fd5B6f5b88fd5503ABe97B152",
      CrowdlinkReferral.abi,
      library.getSigner()
    ); //or implement a context.active higher order component and initialize a new contract only one time at the top of the component
    console.log("contract inside openreferralcampaign", contract);
    console.log("library", library.getSigner());

    await contract.functions.openReferralCampaign(budget, reward, url);
  };

  return (
    <Formik
      initialValues={empty_initial_values}
      onSubmit={async (values) => {
        const { url, reward, budget } = values;

        const receipt = await openReferralCampaign(budget, reward, url);
        console.log("receipt", receipt);
        console.log(
          "transaction was completed -- workflow. send axios post request"
        );

        const resp = await axios.post(
          "http://localhost:8000/test",
          { url, reward, budget }
        );
        console.log("axios resp", resp);
      }}
      render={({ values }) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CampaignCard>
              <CloseAndBackButtonContainer>
                <ParagraphButton
                  buttonMargin={"6px 0 0 12px"}
                  buttonFontSize={14}
                  buttonFontWeight={200}
                  buttonColor={"#959090"}
                  onClick={() => {
                    if (step > 1) {
                      setStep(step - 1);
                    }
                  }}
                >
                  Back
                </ParagraphButton>
                <ParagraphButton
                  buttonMargin={"6px 12px 0 0"}
                  buttonFontSize={20}
                  buttonFontWeight={900}
                  buttonColor={"#959090"}
                  onClick={() => history.push("/")}
                >
                  x
                </ParagraphButton>
              </CloseAndBackButtonContainer>

              <CustomForm customFormHeight={step < 3 ? "60%" : "90%"}>
                <HeadingContainer headingMargin={'0 0 14px 0'}>
                  <CustomH1 h1Color={'#444444'} h1FontSize={26} h1FontWeight={500} >{step_headings[step - 1]}</CustomH1>
                </HeadingContainer>
                <PublisherWizardCreateReferralCampaign
                  step={step}
                  values={values}
                />
                <PublisherWizardPayPerSalePreview step={step} />
                <PublisherWizardDeposit step={step} values={values} />
                <PublisherWizardCampaignCreationOutcome step={step} />
              </CustomForm>
              {step < 3 && (
                <NextButtonContainer>
                  <GlobalButton
                    buttonWidth={200}
                    buttonTextColor={"white"}
                    buttonColor={"#206DFF"}
                    onClick={() => setStep(step + 1)}
                  >
                    Next
                  </GlobalButton>
                </NextButtonContainer>
              )}
            </CampaignCard>
          </div>
        );
      }}
    />
  );
};

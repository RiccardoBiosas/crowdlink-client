import React, { useState, Fragment } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { useWeb3Context } from "web3-react";
import CrowdlinkReferral from "../../contracts/CrowdlinkReferral";
import { ethers } from "ethers";
import { Formik } from "formik";
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
  HeadingContainer,
} from "../shared/PublisherWizard/styles";
import { ParagraphButton, CustomH1 } from "../shared/GeneralCard";
import { GlobalButton } from "../shared/styles";

const pay_per_sale_step_headings = [
  "Place url link and commission per sale",
  "Preview",
  "Deposit funds into contract",
];

const pay_per_click_step_headings = [
  "Place url link and reward per click",
  "Preview",
  "Deposit funds into contract",
];

const empty_initial_values = {
  url: "",
  reward: "",
  // budget: "",
};

export const PublisherWizardPayPerSaleContainer = ({ contractInstance }) => {
  const [step, setStep] = useState(1);
  const [resp, setResp] = useState();

  const [budget, setBudget] = useState();

  const history = useHistory();
  const { workflow } = useParams();
  console.log("route workflow param ", workflow);

  console.log("contract instance", contractInstance);

  const { library, account, networkId } = useWeb3Context(); //use context.active to check whether there's an active web3 provider
  const crowdlinkAddress = networkId
    ? CrowdlinkReferral.networks[networkId].address
    : null;

  console.log("budget state ", budget);

  return (
    <Formik
      initialValues={empty_initial_values}
      onSubmit={async (values) => {
        // const { url, reward, budget } = values;
        const { url, reward } = values;

        console.log("budget ", typeof budget);
        console.log("budget ", budget);
        const bigNumberifyBudget = ethers.utils.bigNumberify(budget);

        const receipt = await contractInstance.functions.openReferralCampaign(
          bigNumberifyBudget,
          reward,
          url,
          { value: bigNumberifyBudget }
        );
        console.log("receipt", receipt);
        console.log(
          "transaction was completed -- workflow. send axios post request"
        );

        if (receipt) {
          const resp = await axios.post("http://localhost:8000/test", {
            url,
            reward,
            budget,
          });
          console.log("axios resp", resp);
        }
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

              <CustomForm customformheight={step < 3 ? "60%" : "90%"}>
                <HeadingContainer headingMargin={"0 0 14px 0"}>
                  <CustomH1
                    h1Color={"#444444"}
                    h1FontSize={26}
                    h1FontWeight={500}
                  >
                    {workflow === "sales"
                      ? pay_per_sale_step_headings[step - 1]
                      : pay_per_click_step_headings[step - 1]}
                  </CustomH1>
                </HeadingContainer>
                <PublisherWizardCreateReferralCampaign
                  workflow={workflow}
                  step={step}
                  values={values}
                  budget={budget}
                  setBudget={setBudget}
                />
                <PublisherWizardPayPerSalePreview step={step} />
                <PublisherWizardDeposit
                  step={step}
                  values={values}
                 
                  address={crowdlinkAddress}
                />
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

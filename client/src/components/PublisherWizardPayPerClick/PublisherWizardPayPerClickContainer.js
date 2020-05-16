import React, { useState, Fragment } from "react";
import { Formik, Form, Field } from "formik";
import {
  CampaignContainer,
  CampaignCard,
  CustomField,
} from "../shared/PublisherWizard/styles";
import { GlobalButton } from "../shared/styles";
import { ReactComponent as Copy } from "../../assets/copy.svg";

const step_headings = [
  "Place URL link & Reward per sale",
  "Deposit",
  "Preview",
];

const empty_initial_values = {
  url: "",
  reward: "",
  budget: "",
};

const address = "0xf66c19541c961d875597Cec23Fc35fd223101993";

export const PublisherWizardPayPerClickContainer = () => {
  const [step, setStep] = useState(1);

  return (
    <Formik
      initialValues={empty_initial_values}
      render={() => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CampaignCard>
              <div className="step--heading">
                <h3>{step_headings[step - 1]}</h3>
              </div>
              <Form>
                <PublisherWizardCreateReferralCampaign_step1 step={step} />
                <PublisherWizardDeposit_step2 step={step} />
                <PublisherWizardReceiveURL_step3 step={step} />
              </Form>
              <GlobalButton
                buttonWidth={200}
                buttonTextColor={"white"}
                buttonColor={"#206DFF"}
                onClick={() => setStep(step + 1)}
              >
                next button
              </GlobalButton>
            </CampaignCard>
          </div>
        );
      }}
    />
  );
};

export const PublisherWizardCreateReferralCampaign_step1 = ({ step }) => {
  if (step !== 1) {
    return null;
  } else {
    return (
      <Fragment>
        <div className="labelInputPair">
          <label htmlFor="url">Your website URL</label>
          <div>
            <CustomField id="url" name="url" type="text" />
          </div>
        </div>

        <div className="labelInputPair">
          <label htmlFor="reward">Reward per click</label>
          <div>
            <CustomField id="reward" name="reward" type="number" />
          </div>
        </div>
        <div className="labelInputPair">
          <label htmlFor="budget">Your budget</label>
          <div>
            <CustomField id="budget" name="budget" type="number" />
          </div>
        </div>
      </Fragment>
    );
  }
};

export const PublisherWizardDeposit_step2 = ({ step }) => {
  const copyToClipboard = (txt) => {
    const temporaryInput = document.createElement('input')
    document.body.appendChild(temporaryInput)
    temporaryInput.setAttribute('value', txt)
    temporaryInput.select()
    document.execCommand('copy')
    document.body.removeChild(temporaryInput)
  }
  if (step !== 2) {
    return null;
  } else {
    return (
      <Fragment>
        <h2>Deposit funds into contract</h2>
        <p>Send USDT into smart contract address:</p>
        <div>
          <span>{address}</span> {/* currently hardcoded address. will be dynamically imported from truffle deployments */}
          <button onClick={() => copyToClipboard(address)}><Copy /></button>
        </div>

        <GlobalButton
          buttonWidth={200}
          buttonTextColor={"white"}
          buttonColor={"#7838D5"}
        >
          Buy with portis
        </GlobalButton>
      </Fragment>
    );
  }
};

export const PublisherWizardReceiveURL_step3 = ({ step }) => {
  if (step !== 3) {
    return null;
  } else {
    return (
      <div>
        <div>preview</div>
      </div>
    );
  }
};

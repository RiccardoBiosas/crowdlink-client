import React, { Fragment } from "react";import {
 
  CustomField,
  CustomLabel,
} from "../shared/PublisherWizard/styles";

export const PublisherWizardCreateReferralCampaign = ({
  step,
  budget,
  setBudget,
}) => {
  if (step !== 1) {
    return null;
  } else {
    return (
      <Fragment>
        <div>
          <CustomLabel
            labelColor={"#696868"}
            labelFontSize={18}
            labelMargin={"0 0 12px 0"}
            htmlFor="name"
          >
            Your campaign name
          </CustomLabel>
          <div>
            <CustomField id="name" name="name" type="text" />
          </div>
        </div>
        <div>
          <CustomLabel
            labelColor={"#696868"}
            labelFontSize={18}
            labelMargin={"0 0 12px 0"}
            htmlFor="url"
          >
            Your website URL
          </CustomLabel>
          <div>
            <CustomField id="url" name="url" type="text" />
          </div>
        </div>

        <div>
          <CustomLabel
            labelColor={"#696868"}
            labelFontSize={18}
            labelMargin={"0 0 12px 0"}
            htmlFor="reward"
          >
            Reward per click
          </CustomLabel>
          <div>
            <CustomField id="reward" name="reward" type="number" />
          </div>
        </div>
        <div>
          <CustomLabel
            labelColor={"#696868"}
            labelFontSize={18}
            labelMargin={"0 0 12px 0"}
            htmlFor="budget"
          >
            Your budget
          </CustomLabel>
          <div>
            {/* <CustomHTMLinput
              id="budget"
              name="budget"
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            /> */}
            <CustomField id="budget" name="budget" type="number" />
          </div>
        </div>
      </Fragment>
    );
  }
};

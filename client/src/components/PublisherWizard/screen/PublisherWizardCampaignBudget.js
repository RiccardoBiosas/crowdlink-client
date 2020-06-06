import React from 'react';
import { CustomField, CustomLabel } from '../../shared/PublisherWizard/styles';

const PublisherWizardCampaignBudget = ({ step }) => {
  if (step !== 2) {
    return null;
  }
  return (
    <>
      <div>
        <CustomLabel
          labelColor="#696868"
          labelFontSize={18}
          labelMargin="0 0 12px 0"
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
          labelColor="#696868"
          labelFontSize={18}
          labelMargin="0 0 12px 0"
          htmlFor="budget"
        >
          Your budget
        </CustomLabel>
        <div>
          <CustomField id="budget" name="budget" type="number" />
        </div>
      </div>
    </>
  );
};

export default PublisherWizardCampaignBudget;

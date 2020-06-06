import React from 'react';
import { CustomField, CustomLabel } from '../../shared/PublisherWizard/styles';

const PublisherWizardCampaignDescription = ({ step }) => {
  if (step !== 1) {
    return null;
  }
  return (
    <>
      <div>
        <CustomLabel
          labelColor="#696868"
          labelFontSize={18}
          labelMargin="0 0 12px 0"
          htmlFor="name"
        >
          Your campaign name
        </CustomLabel>
        <div>
          <CustomField id="name" name="name" type="text" />
        </div>
      </div>
      <div>
        <CustomLabel labelColor="#696868" labelFontSize={18} labelMargin="0 0 12px 0" htmlFor="url">
          Your website URL
        </CustomLabel>
        <div>
          <CustomField id="url" name="url" type="text" />
        </div>
      </div>
    </>
  );
};

export default PublisherWizardCampaignDescription;

import React from 'react';
import PropTypes from 'prop-types';
import { CustomField, CustomLabel } from '../../../shared/PublisherWizard/styles';

const PublisherWizardCampaignDescription = ({ step, errors }) => {
  console.log(errors);
  if (step !== 1) {
    return null;
  }
  console.log('CAMPAIGN DESCRIPTION ERRORS PROPS ', errors);
  return (
    <div
      style={{
        height: '60%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}
    >
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
    </div>
  );
};

PublisherWizardCampaignDescription.propTypes = {
  step: PropTypes.number.isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default PublisherWizardCampaignDescription;

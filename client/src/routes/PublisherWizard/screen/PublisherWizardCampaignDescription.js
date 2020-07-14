import React from 'react';
import PropTypes from 'prop-types';
import { StyledCustomField, StyledCustomLabel } from '../../../shared/PublisherWizard/styles';

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
        <StyledCustomLabel
          labelColor="#696868"
          labelFontSize={18}
          labelMargin="0 0 12px 0"
          htmlFor="name"
        >
          Your campaign name
        </StyledCustomLabel>
        <div>
          <StyledCustomField id="name" name="name" type="text" />
        </div>
      </div>
      <div>
        <StyledCustomLabel
          labelColor="#696868"
          labelFontSize={18}
          labelMargin="0 0 12px 0"
          htmlFor="url"
        >
          Your website URL
        </StyledCustomLabel>
        <div>
          <StyledCustomField id="url" name="url" type="text" />
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

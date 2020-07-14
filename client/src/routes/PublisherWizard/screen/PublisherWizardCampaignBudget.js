import React from 'react';
import PropTypes from 'prop-types';
import { StyledCustomField, StyledCustomLabel } from '../../../shared/PublisherWizard/styles';

const PublisherWizardCampaignBudget = ({ step }) => {
  if (step !== 2) {
    return null;
  }
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
          htmlFor="reward"
        >
          Reward per click
        </StyledCustomLabel>
        <div>
          <StyledCustomField id="reward" name="reward" type="number" />
        </div>
      </div>
      <div>
        <StyledCustomLabel
          labelColor="#696868"
          labelFontSize={18}
          labelMargin="0 0 12px 0"
          htmlFor="budget"
        >
          Your budget
        </StyledCustomLabel>
        <div>
          <StyledCustomField id="budget" name="budget" type="number" />
        </div>
      </div>
    </div>
  );
};

PublisherWizardCampaignBudget.propTypes = {
  step: PropTypes.number.isRequired,
};

export default PublisherWizardCampaignBudget;

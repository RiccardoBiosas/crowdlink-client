import React from 'react';
import PropTypes from 'prop-types';
import StyledGeneralWrapper from '../../../shared/styles/StyledGeneralWrapper';

const PublisherFeedCampaignName = ({ name }) => {
  return (
    <StyledGeneralWrapper wrapperFlex wrapperWidth="80vw">
      <p
        style={{
          color: '#E2E2E2',
          fontSize: '16px',
          marginBottom: '14px',
        }}
      >
        {name}
      </p>
    </StyledGeneralWrapper>
  );
};

PublisherFeedCampaignName.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PublisherFeedCampaignName;

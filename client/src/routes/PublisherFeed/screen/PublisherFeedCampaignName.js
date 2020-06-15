import React from 'react';
import PropTypes from 'prop-types';
import { ToTheLeftFlexContainer } from '../../../shared/feed/styles';

const PublisherFeedCampaignName = ({ name }) => {
  return (
    <ToTheLeftFlexContainer>
      <p
        style={{
          color: '#E2E2E2',
          fontSize: '16px',
          marginBottom: '14px',
        }}
      >
        {name}
      </p>
    </ToTheLeftFlexContainer>
  );
};

PublisherFeedCampaignName.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PublisherFeedCampaignName;

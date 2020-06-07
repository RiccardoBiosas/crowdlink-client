import React from 'react';
import { ToTheLeftFlexContainer } from '../../shared/feed/styles';

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

export default PublisherFeedCampaignName;

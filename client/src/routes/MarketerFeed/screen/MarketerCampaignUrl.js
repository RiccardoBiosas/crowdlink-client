import React from 'react';
import PropTypes from 'prop-types';
import { ToTheLeftFlexContainer } from '../../../shared/feed/styles';

const MarketerCampaignUrl = ({ url }) => {
  return (
    <ToTheLeftFlexContainer>
      <a
        style={{
          color: '#E2E2E2',
          fontSize: '16px',
          marginBottom: '14px',
        }}
        target="_blank"
        rel="noopener noreferrer"
        href={url}
      >
        {url}
      </a>
    </ToTheLeftFlexContainer>
  );
};

MarketerCampaignUrl.propTypes = {
  url: PropTypes.string.isRequired,
};

export default MarketerCampaignUrl;

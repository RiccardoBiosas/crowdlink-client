import React from 'react';
import PropTypes from 'prop-types';
import StyledGeneralWrapper from '../../../shared/styles/StyledGeneralWrapper';

const MarketerCampaignUrl = ({ url }) => {
  return (
    <StyledGeneralWrapper wrapperFlex wrapperWidth="80vw">
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
    </StyledGeneralWrapper>
  );
};

MarketerCampaignUrl.propTypes = {
  url: PropTypes.string.isRequired,
};

export default MarketerCampaignUrl;

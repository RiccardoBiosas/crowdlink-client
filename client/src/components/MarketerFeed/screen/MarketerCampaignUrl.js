import React from 'react';
import { CustomParagraph } from '../../shared/GeneralCard';
import { ToTheLeftFlexContainer } from '../../shared/feed/styles';

const MarketerCampaignUrl = ({ x }) => {
  return (
    <ToTheLeftFlexContainer>
      <a
        style={{
          color: '#E2E2E2',
          fontSize: '16px',
          marginBottom: '14px',
        }}
        target="_blank"
        rel="noreferrer"
        href={x.url}
      >
        {x.url}
      </a>
    </ToTheLeftFlexContainer>
  );
};

export default MarketerCampaignUrl;

import React from 'react';
import { CustomParagraph } from '../../shared/GeneralCard';
import { ToTheLeftFlexContainer } from '../../shared/feed/styles';

const MarketerCampaignUrl = ({ x }) => {
  return (
    <ToTheLeftFlexContainer>
      <CustomParagraph
        paragraphColor="#959090"
        paragraphFontSize={16}
        paragraphTextDecoration="underline"
      >
        {x.url}
      </CustomParagraph>
    </ToTheLeftFlexContainer>
  );
};

export default MarketerCampaignUrl;

import React, { useState, useCallback, useEffect } from 'react';
import { ParagraphButton, CustomParagraph } from '../../shared/GeneralCard';
import {
  CampaignContainerLayout,
  CampaignContainer,
  CampaignContainerComponent,
  CampaignContainerDataContainer,
  ToTheLeftFlexContainer,
  DropdownCampaignContainer,
} from '../../shared/feed/styles';
import { RowContainer } from '../../shared/PublisherWizard/styles';

const PublisherCampaignDropdown = () => {
  return (
    <DropdownCampaignContainer>
      <CampaignContainerComponent containerMargin="0 0 0 18px" componentFlex={3}>
        <CampaignContainerDataContainer>
          <ParagraphButton
            buttonColor="#1E1E1E"
            buttonFontSize={18}
            buttonFontWeight={400}
            buttonWidth="32%"
          >
            Remaining budget:
          </ParagraphButton>
          <CustomParagraph paragraphColor="#959090" paragraphFontSize={18}>
            hardcoded balance
          </CustomParagraph>
        </CampaignContainerDataContainer>
      </CampaignContainerComponent>

      <CampaignContainerComponent componentFlex={1} />
    </DropdownCampaignContainer>
  );
};

export default PublisherCampaignDropdown;

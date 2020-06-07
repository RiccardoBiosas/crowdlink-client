import React, { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
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

import {
  PUBLISHER_WITHDRAW_ROUTE_WITH_PARAM,
  PUBLISHER_DASHBOARD_ROUTE_WITH_PARAM,
} from '../../../routes-config';

import CopyToClipboard from '../../shared/components/CopyToClipboard';
import PublisherFeedCampaignName from './PublisherFeedCampaignName';

const PublisherFeedCampaign = ({ x }) => {
  const history = useHistory();
  return (
    <div>
      <PublisherFeedCampaignName name={x.name} />
      <CampaignContainer containerHeight="180px" containerMargin="0 0 20px 0">
        <CampaignContainerComponent containerMargin="0 0 0 18px" componentFlex={3}>
          {/* <CampaignContainerDataContainer>
            <CustomParagraph paragraphColor="#1E1E1E" paragraphFontSize={18} paragraphWidth="32%">
              Campaign Name:
            </CustomParagraph>
            <CustomParagraph paragraphColor="#959090" paragraphFontSize={18}>
              {x.name}
            </CustomParagraph>
          </CampaignContainerDataContainer> */}
          <CampaignContainerDataContainer style={{ alignItems: 'center' }}>
            <CustomParagraph paragraphFontSize={18} paragraphColor="#1E1E1E" paragraphWidth="32%">
              Campaign URL:
            </CustomParagraph>
            <RowContainer>
              <CustomParagraph paragraphColor="#696868" paragraphMargin="0 10px 0 0">
                {x.url}
              </CustomParagraph>

              <CopyToClipboard
                condition={x.url.length > 0}
                contentToCopy={x.url}
                successTxt="copied!"
                failureTxt="there is no URL to copy!"
              />
            </RowContainer>
          </CampaignContainerDataContainer>
        </CampaignContainerComponent>
        <CampaignContainerComponent componentFlex={1}>
          <ParagraphButton
            buttonColor="#7838D5"
            buttonFontSize={20}
            buttonFontWeight={600}
            onClick={() =>
              history.push({
                pathname: `${PUBLISHER_WITHDRAW_ROUTE_WITH_PARAM}/${x.name}`,
                url: x.url,
              })
            }
          >
            {'Withdraw >'}
          </ParagraphButton>
          {/* <ParagraphButton
            buttonColor={"#7838D5"}
            buttonFontSize={20}
            buttonFontWeight={600}
            onClick={() => setShowStats(!showStats)}
          >
            {!showStats ? "Show stats" : "Hide stats"}
          </ParagraphButton> */}
        </CampaignContainerComponent>
      </CampaignContainer>
    </div>
  );
};

export default PublisherFeedCampaign;

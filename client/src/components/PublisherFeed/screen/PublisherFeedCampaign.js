import React, { useState, useCallback, useEffect, Fragment } from 'react';
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
import PublisherCampaignDropdown from './PublisherCampaignDropdown';

const PublisherFeedCampaign = ({ x }) => {
  const [showStats, setShowStats] = useState(false);

  const transition = useTransition(showStats, null, {
    from: { opacitiy: 0, transform: 'translateY(-20%)' },
    enter: { opacity: 1, transform: 'translateY(0%)' },
    leave: { opacity: 0, transform: 'translateY(-20%)' },
    config: {
      duration: 400,
    },
  });
  return (
    <>
      <div>
        <PublisherFeedCampaignName name={x.name} />
        <CampaignContainer
          containerHeight="180px"
          containerMargin={showStats ? '0 0 0px 0' : '0 0 20px 0'}
          dropdownOpen={showStats}
        >
          <CampaignContainerComponent containerMargin="0 0 0 18px" componentFlex={3}>
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
            {/* <ParagraphButton
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
            </ParagraphButton> */}
            <ParagraphButton
              buttonColor="#7838D5"
              buttonFontSize={20}
              buttonFontWeight={600}
              onClick={() => setShowStats(!showStats)}
            >
              {!showStats ? 'Show stats' : 'Hide stats'}
            </ParagraphButton>
          </CampaignContainerComponent>
        </CampaignContainer>
      </div>
      {transition.map(({ item, key, props }) => {
        return (
          <>
            {item && (
              <animated.div style={props} key={key}>
                <PublisherCampaignDropdown />
              </animated.div>
            )}
          </>
        );
      })}
    </>
  );
};

export default PublisherFeedCampaign;

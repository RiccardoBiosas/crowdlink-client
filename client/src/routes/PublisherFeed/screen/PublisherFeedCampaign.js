import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ethers } from 'ethers';
import { useTransition, animated } from 'react-spring';
import { useHistory } from 'react-router-dom';
import StyledCustomParagraph from '../../../shared/styles/StyledCustomParagraph';
import StyledParagraphButton from '../../../shared/styles/StyledParagraphButton';
import StyledColumnWrapper from '../../../shared/styles/StyledColumnWrapper';
import StyledGeneralWrapper from '../../../shared/styles/StyledGeneralWrapper';
import StyledCardWrapper from '../../../shared/styles/StyledCardWrapper';

import { PUBLISHER_WITHDRAW_ROUTE_WITH_PARAM } from '../../../routes-config';

import CopyToClipboard from '../../../shared/components/CopyToClipboard';
import PublisherFeedCampaignName from './PublisherFeedCampaignName';
import PublisherCampaignDropdown from './PublisherCampaignDropdown';
import ArrowDown from '../../../assets/arrow-down.png';

const PublisherFeedCampaign = ({ x, contractInstance, account }) => {
  const [showStats, setShowStats] = useState(false);

  console.log('PUBLISHER FEED CAMPAIGN -- X PROPS ', x);

  const history = useHistory();

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
        <StyledCardWrapper
          cardWrapperHeight="180px"
          cardWrapperWidth="80vw"
          cardWrapperFlexDirection="row"
          cardWrapperBackground="#ffffff 0% 0% no-repeat padding-box"
          cardWrapperBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          cardWrapperMargin={showStats ? '0 0 0px 0' : '0 0 20px 0'}
          cardDropdownOpen={showStats}
        >
          <StyledColumnWrapper
            columnWrapperMargin="0 0 0 18px"
            columnWrapperFlexSize={3}
            columnWrapperJustify="center"
            columnWrapperHeight="100%"
          >
            <StyledGeneralWrapper
              wrapperFlex
              wrapperAlign="center"
              // wrapperJustify="space-between"
              wrapperWidth="100%"
            >
              <StyledCustomParagraph
                paragraphFontSize={18}
                paragraphColor="#1E1E1E"
                paragraphWidth="32%"
              >
                Campaign URL:
              </StyledCustomParagraph>
              <StyledGeneralWrapper
                wrapperFlex
                wrapperAlign="center"
                // wrapperWidth="100%"
                wrapperMargin="0 8px 0 0"
              >
                <StyledCustomParagraph
                  // paragraphWidth="40%"
                  paragraphColor="#696868"
                  paragraphMargin="0 10px 0 0"
                >
                  {x.url}
                </StyledCustomParagraph>

                <CopyToClipboard
                  condition={x.url.length > 0}
                  contentToCopy={x.url}
                  successTxt="copied!"
                  failureTxt="there is no URL to copy!"
                />
              </StyledGeneralWrapper>
            </StyledGeneralWrapper>
          </StyledColumnWrapper>
          <StyledColumnWrapper
            columnWrapperJustify="center"
            columnWrapperAlign="center"
            columnWrapperHeight="100%"
            columnWrapperFlexSize={1}
          >
            <StyledParagraphButton
              buttonColor="#7838D5"
              buttonFontSize={20}
              buttonFontWeight={600}
              onClick={() =>
                history.push({
                  pathname: `${PUBLISHER_WITHDRAW_ROUTE_WITH_PARAM}/${x.name}`,
                  url: x.url,
                })}
            >
              {'Withdraw >'}
            </StyledParagraphButton>
            {/* <StyledParagraphButton
              buttonColor="#7838D5"
              buttonFontSize={20}
              buttonFontWeight={600}
              onClick={() => setShowStats(!showStats)}
            >
              {!showStats ? 'Show stats' : 'Hide stats'}
            </StyledParagraphButton> */}
          </StyledColumnWrapper>
          <div
            style={{
              position: 'relative',
              height: '80%',
              display: 'flex',
              alignItems: ' flex-end',
              right: '20px',
            }}
          >
            <button
              type="button"
              onClick={() => setShowStats(!showStats)}
              style={{ outline: 'none', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <img src={ArrowDown} alt="open dropdown" />
            </button>
          </div>
        </StyledCardWrapper>
      </div>
      {transition.map(({ item, key, props }) => {
        return (
          <>
            {item && (
              <animated.div style={props} key={key}>
                <PublisherCampaignDropdown
                  contractInstance={contractInstance}
                  account={account}
                  website={x.url}
                />
              </animated.div>
            )}
          </>
        );
      })}
    </>
  );
};

PublisherFeedCampaign.propTypes = {
  x: PropTypes.shape({
    self_url: PropTypes.string,
    name: PropTypes.string,
    user_public_key: PropTypes.string,
    url: PropTypes.string,
    timestamp: PropTypes.string,
  }).isRequired,
  contractInstance: PropTypes.instanceOf(ethers.Contract).isRequired,
  account: PropTypes.string.isRequired,
};

export default PublisherFeedCampaign;

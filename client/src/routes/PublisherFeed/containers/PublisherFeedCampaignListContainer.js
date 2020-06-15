import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ethers } from 'ethers';
import { useHistory } from 'react-router-dom';
import { CampaignContainerLayout } from '../../../shared/feed/styles';
import { ParagraphButton } from '../../../shared/GeneralCard';
import { PUBLISHER_HOMEPAGE, PUBLISHER_DASHBOARD_ROUTE_WITH_PARAM } from '../../../routes-config';
import GlobalButton from '../../../shared/styles';
import PublisherFeedCampaign from '../screen/PublisherFeedCampaign';
import { getClickCampaigns } from '../../../utils/crowdlink/API';
import { RowContainer } from '../../../shared/PublisherWizard/styles';
// import useFetch from '../../../hooks/useFetch';

const PublisherFeedContainer = ({ account, contractInstance }) => {
  // const [showStats, setShowStats] = useState(false);
  const [resp, setResp] = useState();

  const history = useHistory();

  // const resp = useFetch(CAMPAIGNS_CLICK_ENDPOINT);
  // console.log('resp resp response', resp);
  const fetchData = async () => {
    // const response = await axios.get(CAMPAIGNS_CLICK_ENDPOINT);
    const response = await getClickCampaigns();
    setResp(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!resp || !resp.data) {
    return <h1>waiting</h1>;
  }

  return (
    <CampaignContainerLayout>
      <RowContainer containerMargin="0 0 40px 0" containerWidth="80vw">
        <div>
          <GlobalButton
            type="button"
            buttonRadius="50px"
            buttonTextColor="#4C83D4"
            buttonFontWeight={900}
            buttonFontSize={26}
            buttonColor="#F8F8F8"
            buttonWidth="220"
            onClick={() => history.push(`${PUBLISHER_DASHBOARD_ROUTE_WITH_PARAM}/sales`)}
          >
            Create +
          </GlobalButton>
        </div>

        <div>
          <ParagraphButton
            buttonMargin="6px 12px 0 0"
            buttonFontSize={20}
            buttonFontWeight={900}
            buttonColor="#F8F8F8"
            onClick={() => history.push(PUBLISHER_HOMEPAGE)}
          >
            Home +
          </ParagraphButton>
        </div>
      </RowContainer>
      {resp.data.results.length > 0 &&
        resp.data.results
          .filter((x) => x.user_public_key === account)
          .map((x, i) => (
            <PublisherFeedCampaign
              x={x}
              key={`publisher${i}`}
              contractInstance={contractInstance}
              account={account}
            />
          ))}
    </CampaignContainerLayout>
  );
};

PublisherFeedContainer.propTypes = {
  contractInstance: PropTypes.instanceOf(ethers.Contract).isRequired,
  account: PropTypes.string.isRequired,
};

export default PublisherFeedContainer;

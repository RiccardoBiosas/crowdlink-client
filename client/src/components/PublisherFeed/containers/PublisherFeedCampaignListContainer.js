import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { CampaignContainerLayout, ToTheLeftFlexContainer } from '../../shared/feed/styles';
import { PUBLISHER_DASHBOARD_ROUTE_WITH_PARAM } from '../../../routes-config';
import GlobalButton from '../../shared/styles';
import PublisherFeedCampaign from '../screen/PublisherFeedCampaign';
import { getClickCampaigns } from '../../../utils/crowdlink/API';
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
      <ToTheLeftFlexContainer style={{ marginBottom: '40px' }}>
        <GlobalButton
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
      </ToTheLeftFlexContainer>
      {resp.data.results.length > 0 &&
        resp.data.results
          .filter((x) => x.user_public_key === account)
          .map((x, i) => <PublisherFeedCampaign x={x} key={`publisher${i}`} />)}
    </CampaignContainerLayout>
  );
};

export default PublisherFeedContainer;

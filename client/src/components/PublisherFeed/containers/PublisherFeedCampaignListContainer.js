import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useTransition } from 'react-spring';
import axios from 'axios';
import { CampaignContainerLayout, ToTheLeftFlexContainer } from '../../shared/feed/styles';

import { PUBLISHER_DASHBOARD_ROUTE_WITH_PARAM } from '../../../routes-config';
import GlobalButton from '../../shared/styles';
import { CAMPAIGNS_ENDPOINT_CLICK_CAMPAIGN } from '../../../api-config';
import PublisherFeedCampaign from '../screen/PublisherFeedCampaign';
// import useFetch from '../../../hooks/useFetch';

const PublisherFeedContainer = ({ account, contractInstance }) => {
  // const [showStats, setShowStats] = useState(false);
  const [resp, setResp] = useState();

  const history = useHistory();

  // const resp = useFetch(CAMPAIGNS_ENDPOINT_CLICK_CAMPAIGN);
  // console.log('resp resp response', resp);
  const fetchData = async () => {
    const response = await axios.get(CAMPAIGNS_ENDPOINT_CLICK_CAMPAIGN);
    setResp(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const transitions = useTransition(showStats, null, {
  //   from: { opacitiy: 0, transform: 'translateY(-20%)' },
  //   enter: { opacity: 1, transform: 'translateY(0%)' },
  //   leave: { opacity: 0, transform: 'translateY(-20%)' },
  //   config: {
  //     duration: 400,
  //   },
  // });

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

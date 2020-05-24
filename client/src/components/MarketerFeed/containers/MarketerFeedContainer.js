import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { CAMPAIGNS_ENDPOINT_CLICK_CAMPAIGN } from '../../../api-config';
import { CampaignContainerLayout } from '../../shared/feed/styles';
import MarketerCampaignContainer from './MarketerCampaignContainer';

const MarketerFeedContainer = ({ contractInstance, account }) => {
  const [resp, setResp] = useState();

  const fetchData = async () => {
    const response = await axios.get(CAMPAIGNS_ENDPOINT_CLICK_CAMPAIGN);
    setResp(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!resp || !resp.data) {
    return <h1>waitng a</h1>;
  }
  return (
    <CampaignContainerLayout>
      {resp &&
        resp.data.results.length > 0 &&
        resp.data.results.map((x, i) => (
          <MarketerCampaignContainer
            x={x}
            indx={i}
            key={`marketer${i}`}
            contractInstance={contractInstance}
            account={account}
          />
        ))}
    </CampaignContainerLayout>
  );
};

export default MarketerFeedContainer;

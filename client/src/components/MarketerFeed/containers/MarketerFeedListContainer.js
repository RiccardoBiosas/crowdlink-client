import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ParagraphButton } from '../../shared/GeneralCard';
import { CampaignContainerLayout } from '../../shared/feed/styles';
import { RowContainer } from '../../shared/PublisherWizard/styles';
import MarketerCampaignContainer from './MarketerCampaignContainer';
import { MARKETER_WITHDRAW_ROUTE, MARKETER_HOMEPAGE } from '../../../routes-config';
import GlobalButton from '../../shared/styles';
import { getClickCampaigns } from '../../../utils/crowdlink/API';

const MarketerFeedListContainer = ({ contractInstance, account }) => {
  const [resp, setResp] = useState();

  const history = useHistory();

  const fetchData = async () => {
    // const response = await axios.get(`${host}${CAMPAIGNS_CLICK_ENDPOINT}`);
    const response = await getClickCampaigns();
    console.log('response fetchdata', response);

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
            buttonRadius="50px"
            buttonTextColor="#4C83D4"
            buttonFontWeight={900}
            buttonFontSize={26}
            buttonColor="#F8F8F8"
            buttonWidth="220"
            onClick={() => history.push(MARKETER_WITHDRAW_ROUTE)}
          >
            {'Withdraw >'}
          </GlobalButton>
        </div>
        <div>
          <ParagraphButton
            buttonMargin="6px 12px 0 0"
            buttonFontSize={20}
            buttonFontWeight={900}
            buttonColor="#F8F8F8"
            onClick={() => history.push(MARKETER_HOMEPAGE)}
          >
            Home +
          </ParagraphButton>
        </div>
      </RowContainer>
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

export default MarketerFeedListContainer;

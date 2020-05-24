import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  CampaignContainer,
  CampaignCard,
  CloseAndBackButtonContainer,
} from '../shared/PublisherWizard/styles';
import { ParagraphButton, CustomParagraph } from '../shared/GeneralCard';
import { COINGECKO_API } from '../../api-config';

export const PublisherWizardPreview = ({ step, values }) => {
  const { url, reward, budget } = values;
  const [ethPrice, setEthPrice] = useState();

  const fetchPrice = async () => {
    const resp = await axios.get(
      `${COINGECKO_API}simple/price?ids=ethereum&vs_currencies=usd&include_market_cap=false&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=false`,
    );
    setEthPrice(resp.data.ethereum.usd);
  };

  useEffect(() => {
    fetchPrice();
  }, []);

  if (step !== 2) {
    return null;
  }
  return (
    <div>
      <div>
        <CustomParagraph>
          Your website:
          {url}
        </CustomParagraph>
        <CustomParagraph>
          Your reward converted to ethereum:
{' '}
{ethPrice ? reward / ethPrice : 'null'}
        </CustomParagraph>
        <CustomParagraph>
          your budget converted to ethereum: {ethPrice ? budget / ethPrice : 'null'}
        </CustomParagraph>
      </div>
    </div>
  );
};

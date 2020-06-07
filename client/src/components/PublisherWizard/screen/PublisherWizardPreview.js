import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CustomParagraph, ParagraphButton } from '../../shared/GeneralCard';
import { COINGECKO_API } from '../../../api-config';

const PublisherWizardPreview = ({ step, values }) => {
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

  if (step !== 3) {
    return null;
  }
  return (
    <div
      style={{
        height: '60%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <CustomParagraph paragraphWidth="200px">Your website:</CustomParagraph>
        <CustomParagraph
          paragraphColor="#696868"
          paragraphMargin="0 0 0 12px"
          style={{ minWidth: '120px' }}
        >
          {url}
        </CustomParagraph>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <CustomParagraph paragraphWidth="200px">Your budget:</CustomParagraph>
        <CustomParagraph
          style={{ minWidth: '120px' }}
          paragraphColor="#696868"
          paragraphMargin="0 0 0 12px"
        >
          {ethPrice ? `${(reward / ethPrice).toFixed(4)} eth` : 'null'}
        </CustomParagraph>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <CustomParagraph paragraphWidth="200px">Your reward per click:</CustomParagraph>
        <CustomParagraph
          style={{ minWidth: '120px' }}
          paragraphColor="#696868"
          paragraphMargin="0 0 0 12px"
        >
          {ethPrice ? `${(reward / ethPrice).toFixed(4)} eth` : 'null'}
        </CustomParagraph>
      </div>
    </div>
  );
};

export default PublisherWizardPreview;

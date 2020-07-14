import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { StyledCustomParagraph } from '../../../shared/GeneralCard';
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
        <StyledCustomParagraph paragraphWidth="200px">Your website:</StyledCustomParagraph>
        <StyledCustomParagraph
          paragraphColor="#696868"
          paragraphMargin="0 0 0 12px"
          style={{ minWidth: '120px' }}
        >
          {url}
        </StyledCustomParagraph>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <StyledCustomParagraph paragraphWidth="200px">Your budget:</StyledCustomParagraph>
        <StyledCustomParagraph
          style={{ minWidth: '120px' }}
          paragraphColor="#696868"
          paragraphMargin="0 0 0 12px"
        >
          {ethPrice ? `${(budget / ethPrice).toFixed(4)} eth` : 'null'}
        </StyledCustomParagraph>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <StyledCustomParagraph paragraphWidth="200px">Your reward per click:</StyledCustomParagraph>
        <StyledCustomParagraph
          style={{ minWidth: '120px' }}
          paragraphColor="#696868"
          paragraphMargin="0 0 0 12px"
        >
          {ethPrice ? `${(reward / ethPrice).toFixed(4)} eth` : 'null'}
        </StyledCustomParagraph>
      </div>
    </div>
  );
};

PublisherWizardPreview.propTypes = {
  step: PropTypes.number.isRequired,
  values: PropTypes.shape({
    url: PropTypes.string,
    reward: PropTypes.string,
    budget: PropTypes.string,
  }).isRequired,
};

export default PublisherWizardPreview;

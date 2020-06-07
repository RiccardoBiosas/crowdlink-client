import React from 'react';
import { useHistory } from 'react-router-dom';
import { CustomH1, CustomParagraph, ParagraphButton } from '../../shared/GeneralCard';
import { PUBLISHER_FEED_ROUTE } from '../../../routes-config';
// import axios from "axios";
// import { ethers } from "ethers";
// import { GlobalButton } from "../shared/styles";
// import {
//   CampaignContainer,
//   CampaignCard,
//   CustomField,
//   CustomForm,
// } from "../shared/PublisherWizard/styles";

// DISPLAY ETHERSCAN TRANSACTION
const PublisherWizardCampaignOutcome = ({ step, respStatus, values }) => {
  const history = useHistory();
  if (step !== 5) {
    return null;
  }
  console.log('outcome response status ', respStatus);

  // if (respStatus === 201) {
  return (
    <div
      style={{
        height: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}
    >
      <div
        style={{
          height: '70%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ flex: 1 }}>
          <CustomParagraph
            paragraphColor="#696868"
            paragraphLineHeight="27px"
            style={{ textAlign: 'center' }}
          >
            Congratulations!
            <br />
            Your transaction has been confirmed and your campaign is
            <br />
            now officially part of the Crowdlink Referral Marketplace!
          </CustomParagraph>
        </div>
        <div
          style={{
            flex: 2,
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
            <CustomParagraph style={{ width: '200px' }}>Link to campaign:</CustomParagraph>
            <CustomParagraph
              style={{ minWidth: '120px' }}
              paragraphColor="#696868"
              paragraphMargin="0 0 0 12px"
            >
              (not generated)
            </CustomParagraph>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <CustomParagraph style={{ width: '200px' }}>Budget:</CustomParagraph>
            <CustomParagraph
              style={{ minWidth: '120px' }}
              paragraphColor="#696868"
              paragraphMargin="0 0 0 12px"
            >
              {`${values.budget}$`}
            </CustomParagraph>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <CustomParagraph style={{ width: '200px' }}>Reward per click:</CustomParagraph>
            <CustomParagraph
              style={{ minWidth: '120px' }}
              paragraphColor="#696868"
              paragraphMargin="0 0 0 12px"
            >
              {`${values.reward}$`}
            </CustomParagraph>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', height: '30%' }}>
        <ParagraphButton
          buttonColor="#7838D5"
          buttonFontSize={20}
          buttonFontWeight={600}
          onClick={() => history.push(PUBLISHER_FEED_ROUTE)}
        >
          {'Campaign Feed >'}
        </ParagraphButton>
      </div>
    </div>
  );
  // } else {
  //   return <h1>failure</h1>;
  // }
};

export default PublisherWizardCampaignOutcome;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { ethers } from 'ethers';
import { Formik } from 'formik';
import PublisherWizardDeposit from './PublisherWizardDeposit';
import { PublisherWizardCreateReferralCampaign } from './PublisherWizardCreateReferralCampaign';
import { PublisherWizardCampaignCreationOutcome } from './PublisherWizardCampaignCreationOutcome';
import { PublisherWizardPreview } from './PublisherWizardPreview';
import host, { COINGECKO_API, CAMPAIGNS_ENDPOINT_CLICK_CAMPAIGN } from '../../api-config';

import {
  CampaignCard,
  CustomForm,
  CloseAndBackButtonContainer,
  NextButtonContainer,
  HeadingContainer,
} from '../shared/PublisherWizard/styles';
import { ParagraphButton, CustomH1, CardContainerLayout } from '../shared/GeneralCard';
import GlobalButton from '../shared/styles';

const PayPerSaleStepHeadings = [
  'Place url link and commission per sale',
  'Preview',
  'Deposit funds into contract',
];

const PayPerClickStepHeadings = [
  'Place url link and reward per click',
  'Preview',
  'Deposit funds into contract',
];

const emptyInitialValues = {
  name: '',
  url: '',
  reward: '',
  budget: '',
};

const PublisherWizardContainer = ({ contractInstance, account, crowdlinkAddress }) => {
  const [step, setStep] = useState(1);
  const [respStatus, setRespStatus] = useState();
  const [txHash, setTxHash] = useState();
  const [receipt, setReceipt] = useState();
  const [campaignData, setCampaignData] = useState({});

  const history = useHistory();
  const { workflow } = useParams();

  // const crowdlinkAddress = networkId
  //   ? CrowdlinkReferral.networks[networkId].address
  //   : null;

  const getReceipt = async () => {
    const provider = ethers.getDefaultProvider('ropsten');
    console.log('tx hash here', txHash);
    const resp = await provider.waitForTransaction(txHash);
    console.log('receipt here', resp);
    setReceipt(resp);
  };

  const postCampaign = async () => {
    console.log('campaigndata ', campaignData);
    const { name, url, reward } = campaignData;

    const resp = await axios.post(CAMPAIGNS_ENDPOINT_CLICK_CAMPAIGN, {
      name,
      user_public_key: account,
      url,
      reward,
      // budget,
    });
    console.log('axios dashboard create campaign resp', resp);
    setRespStatus(resp.status);
  };

  useEffect(() => {
    if (txHash && !respStatus) {
      getReceipt();
    }

    if (receipt && !respStatus) {
      postCampaign();
    }

    if (respStatus) {
      console.log('respstatus', respStatus);
      setStep(step + 1);
    }
  }, [respStatus, txHash, receipt]);

  return (
    <CardContainerLayout>
      <Formik
        initialValues={emptyInitialValues}
        onSubmit={async (values) => {
          const { name, url, reward, budget } = values;
          // const { url, reward } = values;

          const resp = await axios.get(
            `${COINGECKO_API}simple/price?ids=ethereum&vs_currencies=usd&include_market_cap=false&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=false`,
          );
          const usd_to_eth = resp.data.ethereum.usd;
          const reward_to_eth = reward / usd_to_eth;
          const budget_to_eth = budget / usd_to_eth;

          console.log('budget type ', typeof budget_to_eth);
          console.log('reward type ', typeof reward_to_eth);
          console.log('reward ', reward_to_eth);
          console.log('budget ', budget_to_eth);
          // const bigNumberifyBudget = ethers.utils.bigNumberify(budget_to_eth);
          const budget_to_eth_string = budget_to_eth.toString();
          const reward_to_eth_string = reward_to_eth.toString();
          const bigNumberifyReward = ethers.utils.parseEther(reward_to_eth_string);
          const bigNumberifyBudget = ethers.utils.parseEther(budget_to_eth_string); // parseEther only accepts strings
          console.log('budget to wei', bigNumberifyBudget);

          const campaign_type = 'click';

          const transaction = await contractInstance.functions.openPayPerClickReferralCampaign(
            bigNumberifyBudget,
            bigNumberifyReward,
            url,
            campaign_type,
            { value: bigNumberifyBudget, gasLimit: 2200000 },
          );
          console.log('receipt', transaction);
          if (transaction) {
            setTxHash(transaction.hash);
          }

          setCampaignData({ ...campaignData, ...values });
        }}
      >
        {({ values }) => {
          return (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CampaignCard>
                <CloseAndBackButtonContainer>
                  <ParagraphButton
                    buttonMargin="6px 0 0 12px"
                    buttonFontSize={14}
                    buttonFontWeight={200}
                    buttonColor="#959090"
                    onClick={() => {
                      if (step > 1) {
                        setStep(step - 1);
                      }
                    }}
                  >
                    Back
                  </ParagraphButton>
                  <ParagraphButton
                    buttonMargin="6px 12px 0 0"
                    buttonFontSize={20}
                    buttonFontWeight={900}
                    buttonColor="#959090"
                    onClick={() => history.push('/')}
                  >
                    x
                  </ParagraphButton>
                </CloseAndBackButtonContainer>

                <CustomForm customformheight={step < 3 ? '60%' : '90%'}>
                  <HeadingContainer headingMargin="0 0 14px 0">
                    <CustomH1 h1Color="#444444" h1FontSize={26} h1FontWeight={500}>
                      {workflow === 'sales'
                        ? PayPerSaleStepHeadings[step - 1]
                        : PayPerClickStepHeadings[step - 1]}
                    </CustomH1>
                  </HeadingContainer>
                  {/* <PublisherWizardCreateReferralCampaign
                  workflow={workflow}
                  step={step}
                  values={values}
                  budget={budget}
                  setBudget={setBudget}
                />
                <PublisherWizardPreview step={step} budget={budget} /> */}
                  <PublisherWizardCreateReferralCampaign workflow={workflow} step={step} />
                  <PublisherWizardPreview step={step} values={values} />
                  <PublisherWizardDeposit step={step} values={values} address={crowdlinkAddress} />
                  <PublisherWizardCampaignCreationOutcome step={step} respStatus={respStatus} />
                </CustomForm>
                {step < 3 && (
                  <NextButtonContainer>
                    <GlobalButton
                      buttonWidth={200}
                      buttonTextColor="white"
                      buttonColor="#206DFF"
                      onClick={() => setStep(step + 1)}
                    >
                      Next
                    </GlobalButton>
                  </NextButtonContainer>
                )}
              </CampaignCard>
            </div>
          );
        }}
      </Formik>
    </CardContainerLayout>
  );
};

export default PublisherWizardContainer;

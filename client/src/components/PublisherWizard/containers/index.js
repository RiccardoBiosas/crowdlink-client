import React, { useState, useEffect } from 'react';
import { toast, ToastContainer, Slide } from 'react-toastify';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { ethers } from 'ethers';
import { Formik } from 'formik';
import PublisherWizardDeposit from '../screen/PublisherWizardDeposit';
import PublisherWizardCampaignDescription from '../screen/PublisherWizardCampaignDescription';
import PublisherWizardCampaignBudget from '../screen/PublisherWizardCampaignBudget';
import PublisherWizardCampaignOutcome from '../screen/PublisherWizardCampaignOutcome';
import PublisherWizardPreview from '../screen/PublisherWizardPreview';
import {
  COINGECKO_API,
  CAMPAIGNS_ENDPOINT_CLICK_CAMPAIGN,
  ROPSTEN_ETHERSCAN_TX,
} from '../../../api-config';
import {
  CloseAndBackButtonContainer,
  NextButtonContainer,
  HeadingContainer,
  CustomForm,
} from '../../shared/PublisherWizard/styles';
import { ParagraphButton, CustomH1, CardContainerLayout } from '../../shared/GeneralCard';
import CardLayout from '../../shared/layout/CardLayout';
import GlobalButton from '../../shared/styles';

const PayPerSaleStepHeadings = [
  'Name your campaign & Place url',
  'Assign a budget & commission per sale',
  'Preview',
  'Deposit funds into contract',
  "You're ready to start!",
];

const PayPerClickStepHeadings = [
  'Name your campaign & Place url',
  'Assign a budget & reward per click',
  'Preview',
  'Deposit funds into contract',
  "You're ready to start!",
];

const emptyInitialValues = {
  name: '',
  url: '',
  reward: '',
  budget: '',
};

const InfoToast = ({ txHash }) => {
  return (
    <div>
      <p style={{ color: 'white' }}>Transaction broadcasted!</p>
      <p style={{ color: 'white' }}>Check the status on etherscan while we wait for confirmation</p>
      <p style={{ color: 'white' }}>
        <a href={`${ROPSTEN_ETHERSCAN_TX}${txHash}`} target="_blank">
          {txHash}
        </a>
      </p>
    </div>
  );
};

const PublisherWizardContainer = ({ contractInstance, account, crowdlinkAddress }) => {
  const [step, setStep] = useState(1);
  const [respStatus, setRespStatus] = useState();
  const [txHash, setTxHash] = useState();
  const [isBroadcasted, setIsBroadcasted] = useState(false);
  const [receipt, setReceipt] = useState();
  const [campaignData, setCampaignData] = useState({});
  const totalSteps = 5;

  const history = useHistory();
  const { workflow } = useParams();

  // add a notification to let user know that we are waiting for tx confirmation
  const getReceipt = async () => {
    setIsBroadcasted(true);
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
    toast.success(`Transaction confirmed!`, {
      position: 'top-center',
      transition: Slide,
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    if (txHash && !respStatus) {
      getReceipt();
    }
    if (txHash && !receipt && isBroadcasted) {
      toast.info(<InfoToast txHash={txHash} />, {
        position: 'top-center',
        transition: Slide,
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    if (receipt && !respStatus) {
      console.log('##### POST CAMPAIGN');
      postCampaign();
    }

    if (respStatus) {
      console.log('respstatus', respStatus);
      if (step < totalSteps) {
        setStep(step + 1);
      }
    }
  }, [respStatus, txHash, receipt, isBroadcasted]);

  return (
    <>
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
                <CardLayout>
                  <CloseAndBackButtonContainer>
                    <ParagraphButton
                      buttonMargin="6px 0 0 18px"
                      buttonFontSize={18}
                      buttonFontWeight={300}
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
                      buttonMargin="6px 20px 0 0"
                      buttonFontSize={20}
                      buttonFontWeight={900}
                      buttonColor="#959090"
                      onClick={() => history.push('/')}
                    >
                      x
                    </ParagraphButton>
                  </CloseAndBackButtonContainer>

                  <CustomForm customformheight={step < totalSteps - 1 ? '70%' : '90%'}>
                    <HeadingContainer headingMargin="0 0 14px 0">
                      <CustomH1
                        h1Color="#444444"
                        h1FontSize={26}
                        h1FontWeight={500}
                        style={{ textAlign: step >= 3 ? 'center' : 'inherit' }}
                      >
                        {workflow === 'sales'
                          ? PayPerSaleStepHeadings[step - 1]
                          : PayPerClickStepHeadings[step - 1]}
                      </CustomH1>
                    </HeadingContainer>
                    <PublisherWizardCampaignDescription workflow={workflow} step={step} />
                    <PublisherWizardCampaignBudget step={step} />
                    <PublisherWizardPreview step={step} values={values} />
                    <PublisherWizardDeposit
                      step={step}
                      values={values}
                      address={crowdlinkAddress}
                      isBroadcasted={isBroadcasted}
                    />
                    <PublisherWizardCampaignOutcome
                      step={step}
                      values={values}
                      respStatus={respStatus}
                    />
                  </CustomForm>
                  {step < totalSteps - 1 && (
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
                </CardLayout>
              </div>
            );
          }}
        </Formik>
      </CardContainerLayout>
      <ToastContainer
        position="top-center"
        transition={Slide}
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ width: '600px' }}
      />
    </>
  );
};

export default PublisherWizardContainer;

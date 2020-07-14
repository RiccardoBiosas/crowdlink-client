import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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
import host, { COINGECKO_API, CAMPAIGNS_CLICK_ENDPOINT } from '../../../api-config';
import { StyledCustomForm } from '../styles/styles';
import StyledGeneralWrapper from '../../../shared/styles/StyledGeneralWrapper';
import StyledParagraphButton from '../../../shared/styles/StyledParagraphButton';
import { StyledCustomH1 } from '../../../shared/styles/StyledCustomHeadings';
import StyledCardLayout from '../../../shared/styles/StyledCardLayout';
import StyledCardBoilerplateLayout from '../../../shared/styles/StyledCardBoilerplateLayout';
import StyledGeneralButton from '../../../shared/styles/StyledGeneralButton';
import WizardFormValidationSchema from '../validationSchema/schema';
import payPerClickStepHeadings from '../contants/payPerClickStepHeadings';
import payPerSaleStepHeadings from '../contants/payPerSaleStepHeadings';
import emptyInitialValues from '../contants/emptyInitialValues';

const PublisherWizardContainer = ({
  contractInstance,
  account,
  crowdlinkAddress,
  connectorName,
}) => {
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

    const resp = await axios.post(`${host}${CAMPAIGNS_CLICK_ENDPOINT}`, {
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
      toast.info(`Transaction broadcasted!`, {
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
      <StyledCardLayout>
        <Formik
          validationSchema={WizardFormValidationSchema}
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
          {({ values, errors }) => {
            return (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <StyledCardBoilerplateLayout>
                  <StyledGeneralWrapper
                    wrapperWidth="100%"
                    wrapperHeight="10%"
                    wrapperFlex
                    wrapperAlign="flex-start"
                    wrapperJustify="space-between"
                  >
                    <StyledParagraphButton
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
                    </StyledParagraphButton>
                    <StyledParagraphButton
                      buttonMargin="6px 20px 0 0"
                      buttonFontSize={20}
                      buttonFontWeight={900}
                      buttonColor="#959090"
                      onClick={() => history.push('/')}
                    >
                      x
                    </StyledParagraphButton>
                  </StyledGeneralWrapper>

                  <StyledCustomForm customFormHeight={step < totalSteps - 1 ? '70%' : '90%'}>
                    <StyledGeneralWrapper wrapperHeight="10%" wrapperMargin="0 0 14px 0">
                      <StyledCustomH1
                        h1Color="#444444"
                        h1FontSize={26}
                        h1FontWeight={500}
                        style={{ textAlign: step >= 3 ? 'center' : 'inherit' }}
                      >
                        {workflow === 'sales'
                          ? payPerSaleStepHeadings[step - 1]
                          : payPerClickStepHeadings[step - 1]}
                      </StyledCustomH1>
                    </StyledGeneralWrapper>
                    <PublisherWizardCampaignDescription
                      errors={errors}
                      workflow={workflow}
                      step={step}
                    />
                    <PublisherWizardCampaignBudget step={step} />
                    <PublisherWizardPreview step={step} values={values} />
                    <PublisherWizardDeposit
                      step={step}
                      values={values}
                      address={crowdlinkAddress}
                      isBroadcasted={isBroadcasted}
                      txHash={txHash}
                      connectorName={connectorName}
                    />
                    <PublisherWizardCampaignOutcome
                      step={step}
                      values={values}
                      respStatus={respStatus}
                    />
                  </StyledCustomForm>
                  {step < totalSteps - 1 && (
                    <StyledGeneralWrapper
                      wrapperHeight="20%"
                      wrapperFlex
                      wrapperAlign="center"
                      wrapperJustify="center"
                    >
                      <StyledGeneralButton
                        buttonWidth={200}
                        buttonTextColor="white"
                        buttonColor="#4C83D4"
                        onClick={() => setStep(step + 1)}
                      >
                        Next
                      </StyledGeneralButton>
                    </StyledGeneralWrapper>
                  )}
                </StyledCardBoilerplateLayout>
              </div>
            );
          }}
        </Formik>
      </StyledCardLayout>
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
      />
    </>
  );
};

PublisherWizardContainer.propTypes = {
  contractInstance: PropTypes.instanceOf(ethers.Contract).isRequired,
  account: PropTypes.string.isRequired,
  crowdlinkAddress: PropTypes.string.isRequired,
  connectorName: PropTypes.string.isRequired,
};

export default PublisherWizardContainer;

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ethers } from 'ethers';
import { useWeb3Context } from 'web3-react';
import MarketerFeedContainer from './components/MarketerFeed/containers/MarketerFeedContainer';
import { ContractTest } from './ContractTest/test';
import { PublisherHomepage } from './components/PublisherHomepage';
import { MarketerHomepage } from './components/MarketerHomepage';
import { PublisherSignUp } from './components/PublisherSignUp/PublisherSignUp';
import {
  PUBLISHER_SIGN_UP_ROUTE,
  PUBLISHER_WORKFLOW_ROUTE,
  PUBLISHER_GA_CONNECT_ROUTE,
  PUBLISHER_FEED_ROUTE,
  MARKETER_SIGN_UP_ROUTE,
  MARKETER_FEED_ROUTE,
  PUBLISHER_DASHBOARD_ROUTE_WITH_PARAM,
  SIGN_UP_FALLBACK_ROUTE,
  PUBLISHER_WITHDRAW_ROUTE_WITH_PARAM,
  MARKETER_WITHDRAW_ROUTE,
} from './routes-config';
import { PublisherConnectGA } from './components/PublisherConnectGA.js/PublisherConnectGA';
import { ConnectorsInstance } from './connectors/connectorsInstance';
import { PublisherWorkflow } from './components/PublisherWorkflow/PublisherWorkflow';
import PublisherWizardContainer from './components/PublisherWizard/PublisherWizardContainer';
import { PublisherFeedContainer } from './components/PublisherFeed/PublisherFeedContainer';
import { PublisherCampaignWithdraw } from './components/PublisherWithdraw/PublisherCampaignWithdraw';
import { WithContextActive } from './hocs/WithContextActive';
import { MarketerSignUp } from './components/MarketerSignUp/MarketerSIgnUp';
import { SignUpFallback } from './components/SignUpFallback/SignUpFallback';
import { Ptokens } from './Ptokens';
import { MarketerWithdraw } from './components/MarketerWithdraw/MarketerWithdraw';

const Navbar = () => {
  const { active, account, networkId, library } = useWeb3Context();
  const [balance, setBalance] = useState();
  const [receipt, setReceipt] = useState();
  // const crowdlinkAddress = networkId
  //   ? CrowdlinkReferral.networks[networkId].address
  //   : null;
  // const contract = crowdlinkAddress ? new ethers.Contract(
  //   crowdlinkAddress,
  //   CrowdlinkReferral.abi,
  //   library.getSigner()
  // ) : null;

  const getBalance = async () => {
    const provider = ethers.getDefaultProvider('ropsten');
    const balance = await provider.getBalance(account);
    // console.log("balance", balance);
    const balanceToEth = ethers.utils.formatEther(balance);
    // console.log("balance to int", balanceToEth);
    setBalance(parseFloat(balanceToEth).toFixed(4));
  };

  // const eventListener = async() => {
  //   contract.on('NewPayPerClickCampaignOpen', (date,
  //     website,
  //     owner,
  //     budget,
  //     reward,
  //     campaignType) => {
  //       console.log('website event', website)
  //       console.log('owner ', owner)
  //     })

  // }

  useEffect(() => {
    if (active) {
      getBalance();
      // eventListener()
    }
  });

  return (
    <div style={{ backgroundColor: '#23153C', height: '10vh' }}>
      <h1 style={{ margin: '0' }}>{balance || 'not connected'}</h1>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Navbar} />
      <Route exact path="/" component={PublisherHomepage} />
      <Route exact path="/marketer" component={MarketerHomepage} />
      <Route exact path={PUBLISHER_SIGN_UP_ROUTE} component={PublisherSignUp} />

      <Route exact path="/ptokens" component={Ptokens} />

      <Route exact path={SIGN_UP_FALLBACK_ROUTE} component={SignUpFallback} />

      <Route
        exact
        path={`${PUBLISHER_DASHBOARD_ROUTE_WITH_PARAM}/:workflow`}
        component={() => WithContextActive(PublisherWizardContainer)}
      />

      <Route
        exact
        path={MARKETER_FEED_ROUTE}
        component={() => WithContextActive(MarketerFeedContainer)}
      />

      <Route
        exact
        path={MARKETER_WITHDRAW_ROUTE}
        component={() => WithContextActive(MarketerWithdraw)}
      />

      <Route exact path="/contract/test" component={ContractTest} />
      <Route exact path="/connection" component={ConnectorsInstance} />
      <Route
        exact
        path={`${PUBLISHER_WITHDRAW_ROUTE_WITH_PARAM}/:campaign`}
        component={() => WithContextActive(PublisherCampaignWithdraw)}
      />

      <Route
        exact
        path={PUBLISHER_FEED_ROUTE}
        component={() => WithContextActive(PublisherFeedContainer)}
      />
      <Route
        exact
        path={PUBLISHER_GA_CONNECT_ROUTE}
        component={() => WithContextActive(PublisherConnectGA)}
      />

      <Route exact path={PUBLISHER_WORKFLOW_ROUTE} component={PublisherWorkflow} />

      <Route exact path={MARKETER_SIGN_UP_ROUTE} component={MarketerSignUp} />

      {/* ############### WITHOUT CONTEXT ACTIVE. ONLY FOR QUICK TESTING */}
      {/* <Route
          exact
          path={PUBLISHER_GA_CONNECT_ROUTE}
          component={PublisherConnectGA}
        /> */}
      {/* <Route exact path={'/design'} component={DesignTest} /> */}
      {/* <Route
        exact
        path={`${PUBLISHER_WITHDRAW_ROUTE_WITH_PARAM}/:campaign`}
        component={PublisherCampaignWithdraw}
      /> */}
      {/* <Route
          exact
          path={PUBLISHER_FEED_ROUTE}
          component={PublisherFeedContainer}
        /> */}
      {/* <Route
          exact
          path={`${PUBLISHER_DASHBOARD_ROUTE_WITH_PARAM}/:workflow`}
          component={PublisherWizardContainer}
        /> */}
      {/* <Route
        exact
        path={MARKETER_FEED_ROUTE}
        component={MarketerFeedContainer}
      /> */}
      {/* ############### WITHOUT CONTEXT ACTIVE. ONLY FOR QUICK TESTING */}
    </BrowserRouter>
  );
};

export default App;

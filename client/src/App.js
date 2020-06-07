import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ethers } from 'ethers';
import { useWeb3Context } from 'web3-react';
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
  MARKETER_HOMEPAGE,
} from './routes-config';
import PublisherHomepage from './components/PublisherHomepage';
import MarketerHomepage from './components/MarketerHomepage';
import PublisherSignUp from './components/PublisherSignUp/PublisherSignUp';
import PublisherConnectGA from './components/PublisherConnectGA/PublisherConnectGA';
import ConnectorsInstance from './connectors/connectorsInstance';
import PublisherWorkflow from './components/PublisherWorkflow/PublisherWorkflow';
import PublisherWizardContainer from './components/PublisherWizard/containers/index';
import PublisherFeedContainer from './components/PublisherFeed/containers/PublisherFeedCampaignListContainer';
import PublisherCampaignWithdraw from './components/PublisherWithdraw/PublisherCampaignWithdraw';
import WithContextActive from './hocs/WithContextActive';
import MarketerSignUp from './components/MarketerSignUp/MarketerSignUp';
import SignUpFallback from './components/SignUpFallback/containers/index';
import MarketerFeedListContainer from './components/MarketerFeed/containers/MarketerFeedListContainer';
import MarketerWithdraw from './components/MarketerWithdraw/MarketerWithdraw';
import NotFound from './components/404/NotFound';

// move to constant.js
const networks = {
  1: 'mainnet',
  3: 'ropsten',
};

const Navbar = () => {
  const { active, account, networkId } = useWeb3Context();
  const [balance, setBalance] = useState();

  const getBalance = async () => {
    const provider = ethers.getDefaultProvider(networkId);
    const balance = await provider.getBalance(account);
    // console.log("balance", balance);
    const balanceToEth = ethers.utils.formatEther(balance);
    // console.log("balance to int", balanceToEth);
    setBalance(parseFloat(balanceToEth).toFixed(4));
  };

  useEffect(() => {
    if (active) {
      getBalance();
      // eventListener()
    }
  });

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: '#23153C',
      }}
    >
      <div
        style={{
          width: '50%',
          height: '10vh',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <p style={{ margin: '0', color: '#FFFFFF', fontSize: '16px', fontWeight: '900' }}>
          {balance ? `Balance: ${balance} ETH` : 'not connected'}
        </p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              backgroundColor: '#F3F3F3',
              borderRadius: '5px',
              width: '140px',
              fontSize: '16px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <p style={{ color: '#2A4365' }}>{active ? networks[networkId] : 'not connected'}</p>
          </div>
          <div
            style={{
              marginLeft: '18px',
              borderRadius: '50%',
              backgroundColor: active ? 'green' : 'grey',
              width: '20px',
              height: '20px',
            }}
          />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Navbar} />

      <Switch>
        <Route exact path="/" component={PublisherHomepage} />
        <Route exact path={MARKETER_HOMEPAGE} component={MarketerHomepage} />
        <Route exact path={PUBLISHER_SIGN_UP_ROUTE} component={PublisherSignUp} />

        <Route exact path={SIGN_UP_FALLBACK_ROUTE} component={SignUpFallback} />

        <Route
          exact
          path={`${PUBLISHER_DASHBOARD_ROUTE_WITH_PARAM}/:workflow`}
          component={() => WithContextActive(PublisherWizardContainer)}
        />

        <Route
          exact
          path={MARKETER_FEED_ROUTE}
          component={() => WithContextActive(MarketerFeedListContainer)}
        />

        <Route
          exact
          path={MARKETER_WITHDRAW_ROUTE}
          component={() => WithContextActive(MarketerWithdraw)}
        />

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
        <Route path="*" component={NotFound} />
      </Switch>

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
        path={`${PUBLISHER_DASHBOARD_ROUTE_WITH_PARAM}/:workflow/test`}
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

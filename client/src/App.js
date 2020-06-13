import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Navbar from './navbar/containers';

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
import ContractTest from './ContractTest';

export const history = createBrowserHistory();

const App = () => {
  return (
    <BrowserRouter history={history}>
      <Route path="/" component={Navbar} />

      <Switch>
        {/* only for test */}
        <Route exact path="/contract/test" component={ContractTest} />
        {/* only for test */}

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

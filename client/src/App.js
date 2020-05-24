import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Web3Provider, { useWeb3Context, Web3Consumer } from "web3-react";
import { ethers } from "ethers";
import connectors from "./portis/index";
import { MarketerFeedContainer } from "./components/MarketerFeed/MarketerFeedContainer";
import { ContractTest } from "./ContractTest/test";
import { useHistory } from "react-router-dom";
import { PublisherHomepage } from "./components/PublisherHomepage";
import { MarketerHomepage } from "./components/MarketerHomepage";
import { PublisherSignUp } from "./components/PublisherSignUp/PublisherSignUp";
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
} from "./routes-config";
import { PublisherConnectGA } from "./components/PublisherConnectGA.js/PublisherConnectGA";
import { ConnectorsInstance } from "./connectors/connectorsInstance";
import { PublisherWorkflow } from "./components/PublisherWorkflow/PublisherWorkflow";
import { PublisherWizardContainer } from "./components/PublisherWizard/PublisherWizardContainer";
// import { PublisherWizardPayPerClickContainer } from "./components/PublisherWizardPayPerClick/PublisherWizardPayPerClickContainer";
import { PublisherFeedContainer } from "./components/PublisherFeed/PublisherFeedContainer";
import { PublisherCampaignWithdraw } from "./components/PublisherWithdraw/PublisherCampaignWithdraw";
import { WithContextActive } from "./hocs/WithContextActive";
import { MarketerSignUp } from "./components/MarketerSignUp/MarketerSIgnUp";
import { SignUpFallback } from "./components/SignUpFallback/SignUpFallback";
import { Ptokens } from "./Ptokens";
import { MarketerWithdraw } from "./components/MarketerWithdraw/MarketerWithdraw";

const App = () => {
  console.log("test");
  console.log("connectors", connectors);
  console.log("connectors portis", connectors.portis);
  return (
    <BrowserRouter>
      <Web3Provider connectors={connectors} libraryName="ethers.js">
        <Route exact path="/" component={PublisherHomepage} />
        <Route exact path="/marketer" component={MarketerHomepage} />
        <Route
          exact
          path={PUBLISHER_SIGN_UP_ROUTE}
          component={PublisherSignUp}
        />

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

        <Route exact path="/test" component={ContractTest} />
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

        <Route
          exact
          path={PUBLISHER_WORKFLOW_ROUTE}
          component={PublisherWorkflow}
        />

        <Route exact path={MARKETER_SIGN_UP_ROUTE} component={MarketerSignUp} />

        {/* ############### WITHOUT CONTEXT ACTIVE. ONLY FOR QUICK TESTING */}
        {/* <Route
          exact
          path={PUBLISHER_GA_CONNECT_ROUTE}
          component={PublisherConnectGA}
        /> */}
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
      </Web3Provider>
    </BrowserRouter>
  );
};

export default App;

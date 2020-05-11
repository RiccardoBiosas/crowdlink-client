import React, { Fragment } from "react";
import { GlobalButton } from "../shared/styles";
import {ReactComponent as GoogleAnalyticsSVG} from '../../assets/google-analytics.svg'

export const PublisherConnectGA = () => {
  return (
    <div>
      <h1>Create your Referral Campaign</h1>
      <h2>Connect to Google Analytics:</h2>

      <div>
        <GoogleAnalyticsSVG style={{height: '100px', width: '100px'}} />
      </div>

      <p>
        Make sure you’re tracking aquisitions of your sales via Google
        Analytics. Learn how here
      </p>

      <GlobalButton buttonWidth={200}>Connect</GlobalButton>
    </div>
  );
};

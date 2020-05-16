import React, { useState, Fragment } from "react";
import {useHistory} from 'react-router-dom'
import axios from "axios";
import Web3Provider, { useWeb3Context, Web3Consumer } from "web3-react";
import CrowdlinkReferral from "../../contracts/CrowdlinkReferral";
import { ethers } from "ethers";

import { Formik, Form, Field } from "formik";
import { PublisherWizardDeposit } from "./PublisherWizardDeposit";
import { PublisherWizardCreateReferralCampaign } from "./PublisherWizardCreateReferralCampaign";
import {
  CampaignContainer,
  CampaignCard,
  CustomField,
  CustomForm,
} from "../shared/PublisherWizard/styles";
import {
  CustomH1,
  CustomParagraph,
  ParagraphButton,
} from "../shared/GeneralCard";
import { GlobalButton } from "../shared/styles";
import { ReactComponent as Copy } from "../../assets/copy.svg";
import { PUBLISHER_FEED_ROUTE } from "../../routes-config";

export const PublisherWizardCampaignCreationOutcome = ({ step }) => {
  const history = useHistory()
  if (step !== 4) {
    return null;
  } else {
    return (
      <Fragment>
        <div>
          <CustomH1>You’re ready to start!</CustomH1>
        </div>
        <div>
          <CustomParagraph>
            Once transaction goes through anyone can create a link to a earn %
            of sale:
          </CustomParagraph>
        </div>
        <div>
          <ParagraphButton onClick={() => history.push(PUBLISHER_FEED_ROUTE)}>Campaign Feed ></ParagraphButton>
        </div>
      </Fragment>
    );
  }
};

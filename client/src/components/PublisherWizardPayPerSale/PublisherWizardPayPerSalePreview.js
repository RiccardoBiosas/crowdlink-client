import React, { useState, Fragment } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Web3Provider, { useWeb3Context, Web3Consumer } from "web3-react";
import CrowdlinkReferral from "../../contracts/CrowdlinkReferral";
import { ethers } from "ethers";

import { Formik, Form, Field } from "formik";
import { PublisherWizardDeposit } from "./PublisherWizardDeposit";
import { PublisherWizardCreateReferralCampaign } from "./PublisherWizardCreateReferralCampaign";
import { PublisherWizardCampaignCreationOutcome } from "./PublisherWizardCampaignCreationOutcome";

import {
  CampaignContainer,
  CampaignCard,
  CustomField,
  CustomForm,
  CloseAndBackButtonContainer,
} from "../shared/PublisherWizard/styles";
import { ParagraphButton } from "../shared/GeneralCard";
import { GlobalButton } from "../shared/styles";
import { ReactComponent as Copy } from "../../assets/copy.svg";

export const PublisherWizardPayPerSalePreview = ({ step }) => {
  if (step !== 2) {
    return null;
  } else {
    return (
      <div>
        <div>preview</div>
      </div>
    );
  }
};

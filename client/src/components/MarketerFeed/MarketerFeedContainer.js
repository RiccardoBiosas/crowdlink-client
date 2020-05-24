import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  Fragment,
} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { ParagraphButton, CustomParagraph } from "../shared/GeneralCard";
import {
  CampaignContainerLayout,
  CampaignContainer,
  CampaignContainerComponent,
  CampaignContainerDataContainer,
  DropdownCampaignContainer,
} from "../shared/feed/styles";
import { RowContainer } from "../shared/PublisherWizard/styles";

import copy from "../../assets/clipboard-copy.png";
import host from "../../api-config";
import {
  CAMPAIGNS_ENDPOINT_CLICK_CAMPAIGN,
  CAMPAIGNS_CLICK_CREATE_LINK_ENDPOINT,
} from "../../api-config";
import { MARKETER_WITHDRAW_ROUTE } from "../../routes-config";
import { useFetch } from "../../hooks/useFetch";
// /api/click/campaigns/{id}/create_link/

export const LogicCampaignContainer = ({
  x,
  contractInstance,
  account,
  indx,
}) => {
  const [referralLink, setReferralLink] = useState();
  const [selectedCampaign, setSelectedCampaign] = useState();

  const history = useHistory();

  useEffect(() => {
    if (referralLink && selectedCampaign) {
      addInfluencer();
    }
  }, [referralLink]);

  const addInfluencer = async () => {
    const resp = await contractInstance.functions.addInfluencer(
      selectedCampaign,
      referralLink,
      account
    ); //all hardcoded
    console.log("add influencer resp", resp);
  };

  return (
    <CampaignContainer containerMargin={"0 0 20px 0"}>
      <CampaignContainerComponent
        containerMargin={"0 0 0 16px"}
        componentFlex={3}
      >
        <CampaignContainerDataContainer>
          <CustomParagraph
            paragraphColor={"#1E1E1E"}
            paragraphFontSize={16}
            paragraphWidth={"32%"}
          >
            Campaign Name:
          </CustomParagraph>
          <CustomParagraph paragraphColor={"#959090"} paragraphFontSize={16}>
            {x.name}
          </CustomParagraph>
        </CampaignContainerDataContainer>
        <CampaignContainerDataContainer>
          <CustomParagraph
            paragraphColor={"#1E1E1E"}
            paragraphFontSize={16}
            paragraphWidth={"32%"}
          >
            Campaign URL:
          </CustomParagraph>
          <CustomParagraph paragraphColor={"#959090"} paragraphFontSize={16}>
            {x.url}
          </CustomParagraph>
        </CampaignContainerDataContainer>
        <CampaignContainerDataContainer>
          <CustomParagraph
            paragraphColor={"#1E1E1E"}
            paragraphFontSize={16}
            paragraphWidth={"32%"}
          >
            Reward:
          </CustomParagraph>
          <CustomParagraph paragraphColor={"#959090"} paragraphFontSize={16}>
            {x.reward} $
          </CustomParagraph>
        </CampaignContainerDataContainer>
        <CampaignContainerDataContainer style={{ alignItems: "center" }}>
          <CustomParagraph
            paragraphFontSize={16}
            paragraphColor={"#1E1E1E"}
            paragraphWidth={"32%"}
          >
            Your unique referral link:
          </CustomParagraph>

          <LogicRowContainer
            campaignsAreFetched={Object.keys(x).length}
            user_public_key={account}
            setReferralLinkCB={setReferralLink}
            website_url={x.url}
            indx={indx}
          />
        </CampaignContainerDataContainer>
      </CampaignContainerComponent>
      <CampaignContainerComponent componentFlex={1}>
        {!referralLink ? (
          <LogicParagraphButtonContainer
            id={x.self_url}
            website_url={x.url}
            user_public_key={account}
            setSelectedCampaignCB={setSelectedCampaign}
            setReferralLinkCB={setReferralLink}
          />
        ) : (
          <ParagraphButton
            buttonColor={"#7838D5"}
            buttonFontSize={20}
            buttonFontWeight={600}
            onClick={() => history.push(MARKETER_WITHDRAW_ROUTE)}
          >
            Withdraw >
          </ParagraphButton>
        )}
      </CampaignContainerComponent>
    </CampaignContainer>
  );
};

export const LogicParagraphButtonContainer = ({
  id,
  setReferralLinkCB,
  setSelectedCampaignCB,
  website_url,
  user_public_key,
}) => {
  const handleClick = async () => {
    // const resp = await axios.get(
    //   `${CAMPAIGNS_ENDPOINT_CLICK_CAMPAIGN}${id}${CAMPAIGNS_CLICK_CREATE_LINK_ENDPOINT}`
    // );
    const resp = await axios.post(
      `${id}${CAMPAIGNS_CLICK_CREATE_LINK_ENDPOINT}`,
      {
        user_public_key,
      }
    );
    console.log("referral link ##", resp.data.url_code);
    setSelectedCampaignCB(website_url);
    setReferralLinkCB(resp.data.url_code);
  };
  return (
    <ParagraphButton
      buttonColor={"#4C83D4"}
      buttonFontSize={20}
      buttonFontWeight={600}
      onClick={handleClick}
    >
      Create Link +
    </ParagraphButton>
  );
};

export const LogicRowContainer = ({
  campaignsAreFetched,
  user_public_key,
  setReferralLinkCB,
  website_url,
  indx,
}) => {
  const [isFetched, setIsFetched] = useState(true);
  const [fetchedReferralLink, setFetchedReferralLink] = useState();
  const fetchData = useCallback(async () => {
    const resp = await axios.get(`${CAMPAIGNS_ENDPOINT_CLICK_CAMPAIGN}?user_public_key=${user_public_key}
    `);
    setFetchedReferralLink(resp.data);
    console.log("CALLBACK REFERRAL LINK");
    console.log(resp.data.results[indx]);
    if (
      resp.data.results[indx].links &&
      resp.data.results[indx].links.length > 0
    ) {
      console.log("resp just links[0]", resp.data.results[indx].links);
      console.log(resp.data.results[indx].links[0].url_code);

      setReferralLinkCB(resp.data.results[indx].links[0].url_code);
    }
  }, [isFetched]);

  useEffect(() => {
    if (campaignsAreFetched > 0 && user_public_key) {
      const resp = fetchData();
      console.log("### FETCH REFERRAL LINK IF IT EXISTS", resp.data);
    }
  }, [campaignsAreFetched, user_public_key]);

  // console.log("### FETCH REFERRAL LINK IF IT EXISTS", fetchedReferralLink);
  // let answer = fetchedReferralLink && fetchedReferralLink.results[indx].links && fetchedReferralLink.results[indx].links.length > 0 && fetchedReferralLink.results[indx].url === website_url  ? fetchedReferralLink.results[indx].links[0].url_code : "not generated"
  // console.log('REFERRAL LINK ANSWER ##########', answer)
  // let fetched_web = fetchedReferralLink && fetchedReferralLink.results && fetchedReferralLink.results.length > 0 ? fetchedReferralLink.results[indx].url : 'none'
  // console.log('##answer referral website ', fetched_web)
  // console.log('##inherited website ', website_url)
  // console.log('## are they equal ', fetched_web===website_url)

  const copyToClipboard = () => {
    if (
      fetchedReferralLink &&
      fetchedReferralLink.results &&
      fetchedReferralLink.results.length > 0
    ) {
      const temporaryInput = document.createElement("input");
      document.body.appendChild(temporaryInput);
      temporaryInput.setAttribute(
        "value",
        fetchedReferralLink.results[indx].links.length > 0
          ? `${host}/${fetchedReferralLink.results[indx].links[0].url_code}`
          : ""
      );
      temporaryInput.select();
      document.execCommand("copy");
      document.body.removeChild(temporaryInput);
    }
  };

  if (campaignsAreFetched > 0) {
    return (
      <Fragment>
        <CustomParagraph
          paragraphColor={"#696868"}
          paragraphMargin={"0 10px 0 0"}
        >
          {fetchedReferralLink &&
          fetchedReferralLink.results[indx].links &&
          fetchedReferralLink.results[indx].links.length > 0 &&
          fetchedReferralLink.results[indx].url === website_url
            ? `${host}/cl/${fetchedReferralLink.results[indx].links[0].url_code}`
            : "not generated"}
        </CustomParagraph>

        <ParagraphButton onClick={copyToClipboard}>
          <img src={copy} />
        </ParagraphButton>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <CustomParagraph
          paragraphColor={"#696868"}
          paragraphMargin={"0 10px 0 0"}
        >
          WAITING!
        </CustomParagraph>

        <ParagraphButton>
          <img src={copy} />
        </ParagraphButton>
      </Fragment>
    );
  }
};

export const MarketerFeedContainer = ({ contractInstance, account }) => {
  const [campaignsList, setCampaignsList] = useState();
  const [isFetched, setIsFetched] = useState(true);
  console.log("marketer feed contractinstance", contractInstance);

  // const transitions = useTransition(showStats, null, {
  //   from: {opacitiy: 0, transform: 'translateY(-20%)'},
  //   enter: {opacity: 1, transform: 'translateY(0%)'},
  //   leave: {opacity: 0, transform: 'translateY(-20%)'},
  //   config: {
  //     duration: 400
  //   }
  // })

  const fetchData = useCallback(async () => {
    const resp = await axios.get(CAMPAIGNS_ENDPOINT_CLICK_CAMPAIGN);
    setCampaignsList(resp.data);
  }, [isFetched]);

  useEffect(() => {
    fetchData();
  }, []);

  console.log("CAMPAIGNS LIST#####", campaignsList);

  // if(campaignsList && campaignsList.results.length > 0) {
  //   console.log('keys #####', Object.keys(campaignsList.results))

  // }

  return (
    <CampaignContainerLayout>
      {campaignsList &&
        campaignsList.results.length > 0 &&
        campaignsList.results.map((x, i) => (
          <LogicCampaignContainer
            x={x}
            indx={i}
            contractInstance={contractInstance}
            account={account}
          />
        ))}
    </CampaignContainerLayout>
  );
};

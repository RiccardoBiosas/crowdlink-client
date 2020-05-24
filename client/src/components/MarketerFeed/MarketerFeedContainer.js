import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ParagraphButton, CustomParagraph } from '../shared/GeneralCard';
import {
  CampaignContainerLayout,
  CampaignContainer,
  CampaignContainerComponent,
  CampaignContainerDataContainer,
} from '../shared/feed/styles';
import copy from '../../assets/clipboard-copy.png';
import host, {
  CAMPAIGNS_ENDPOINT_CLICK_CAMPAIGN,
  CAMPAIGNS_CLICK_CREATE_LINK_ENDPOINT,
} from '../../api-config';

export const MarketerCampaign = ({ x, referralLink }) => {
  console.log('x marketer campaign', x);
  return (
    <CampaignContainerComponent containerMargin="0 0 0 16px" componentFlex={3}>
      <CampaignContainerDataContainer>
        <CustomParagraph paragraphColor="#1E1E1E" paragraphFontSize={16} paragraphWidth="32%">
          Campaign Name:
        </CustomParagraph>
        <CustomParagraph paragraphColor="#959090" paragraphFontSize={16}>
          {x.name}
        </CustomParagraph>
      </CampaignContainerDataContainer>
      <CampaignContainerDataContainer>
        <CustomParagraph paragraphColor="#1E1E1E" paragraphFontSize={16} paragraphWidth="32%">
          Campaign URL:
        </CustomParagraph>
        <CustomParagraph paragraphColor="#959090" paragraphFontSize={16}>
          {x.url}
        </CustomParagraph>
      </CampaignContainerDataContainer>
      <CampaignContainerDataContainer>
        <CustomParagraph paragraphColor="#1E1E1E" paragraphFontSize={16} paragraphWidth="32%">
          Reward:
        </CustomParagraph>
        <CustomParagraph paragraphColor="#959090" paragraphFontSize={16}>
          {x.reward}
{' '}
$
</CustomParagraph>
      </CampaignContainerDataContainer>
      <CampaignContainerDataContainer style={{ alignItems: 'center' }}>
        <CustomParagraph paragraphFontSize={16} paragraphColor="#1E1E1E" paragraphWidth="32%">
          Your unique referral link:
        </CustomParagraph>
        <CustomParagraph paragraphColor="#959090" paragraphFontSize={16}>
          {referralLink || ''}
        </CustomParagraph>
      </CampaignContainerDataContainer>
    </CampaignContainerComponent>
  );
};

// export const LogicCampaignContainer = ({ x, contractInstance, account, indx }) => {
//   const [referralLink, setReferralLink] = useState();
//   const [selectedCampaign, setSelectedCampaign] = useState();

//   const history = useHistory();

//   useEffect(() => {
//     if (referralLink && selectedCampaign) {
//       addInfluencer();
//     }
//   }, [referralLink]);

//   const addInfluencer = async () => {
//     const resp = await contractInstance.functions.addInfluencer(
//       selectedCampaign,
//       referralLink,
//       account,
//     );
//   };

//   return (
//     <CampaignContainer containerMargin={'0 0 50px 0'}>
//       <CampaignContainerComponent containerMargin={'0 0 0 16px'} componentFlex={3}>
//         <CampaignContainerDataContainer>
//           <CustomParagraph paragraphColor={'#1E1E1E'} paragraphFontSize={16} paragraphWidth={'32%'}>
//             Campaign Name:
//           </CustomParagraph>
//           <CustomParagraph paragraphColor={'#959090'} paragraphFontSize={16}>
//             {x.name}
//           </CustomParagraph>
//         </CampaignContainerDataContainer>
//         <CampaignContainerDataContainer>
//           <CustomParagraph paragraphColor={'#1E1E1E'} paragraphFontSize={16} paragraphWidth={'32%'}>
//             Campaign URL:
//           </CustomParagraph>
//           <CustomParagraph paragraphColor={'#959090'} paragraphFontSize={16}>
//             {x.url}
//           </CustomParagraph>
//         </CampaignContainerDataContainer>
//         <CampaignContainerDataContainer>
//           <CustomParagraph paragraphColor={'#1E1E1E'} paragraphFontSize={16} paragraphWidth={'32%'}>
//             Reward:
//           </CustomParagraph>
//           <CustomParagraph paragraphColor={'#959090'} paragraphFontSize={16}>
//             {x.reward} $
//           </CustomParagraph>
//         </CampaignContainerDataContainer>
//         <CampaignContainerDataContainer style={{ alignItems: 'center' }}>
//           <CustomParagraph paragraphFontSize={16} paragraphColor={'#1E1E1E'} paragraphWidth={'32%'}>
//             Your unique referral link:
//           </CustomParagraph>

//           <LogicRowContainer
//             campaignsAreFetched={Object.keys(x).length}
//             user_public_key={account}
//             setReferralLinkCB={setReferralLink}
//             website_url={x.url}
//             indx={indx}
//             referralLink={referralLink}
//           />
//         </CampaignContainerDataContainer>
//       </CampaignContainerComponent>
//       <CampaignContainerComponent componentFlex={1}>
//         {!referralLink ? (
//           <LogicParagraphButtonContainer
//             id={x.self_url}
//             website_url={x.url}
//             user_public_key={account}
//             setSelectedCampaignCB={setSelectedCampaign}
//             setReferralLinkCB={setReferralLink}
//           />
//         ) : (
//           <ParagraphButton
//             buttonColor={'#7838D5'}
//             buttonFontSize={20}
//             buttonFontWeight={600}
//             onClick={() => history.push(MARKETER_WITHDRAW_ROUTE)}
//           >
//             Withdraw >
//           </ParagraphButton>
//         )}
//       </CampaignContainerComponent>
//     </CampaignContainer>
//   );
// };

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
    const resp = await axios.post(`${id}${CAMPAIGNS_CLICK_CREATE_LINK_ENDPOINT}`, {
      user_public_key,
    });
    setSelectedCampaignCB(website_url);
    setReferralLinkCB(resp.data.url_code);
  };
  return (
    <ParagraphButton
      buttonColor="#4C83D4"
      buttonFontSize={20}
      buttonFontWeight={600}
      onClick={handleClick}
    >
      Create Link +
    </ParagraphButton>
  );
};

// export const LogicRowContainer = ({
//   campaignsAreFetched,
//   user_public_key,
//   setReferralLinkCB,
//   website_url,
//   indx,
//   referralLink,
// }) => {
//   const [isFetched, setIsFetched] = useState(true);
//   const [fetchedReferralLink, setFetchedReferralLink] = useState();
//   const fetchData = useCallback(async () => {
//     const resp = await axios.get(`${CAMPAIGNS_ENDPOINT_CLICK_CAMPAIGN}?user_public_key=${user_public_key}
//     `);
//     setFetchedReferralLink(resp.data);
//     if (resp.data.results[indx].links && resp.data.results[indx].links.length > 0) {
//       setReferralLinkCB(resp.data.results[indx].links[0].url_code);
//     }
//   }, [isFetched]);

//   useEffect(() => {
//     if (campaignsAreFetched > 0 && user_public_key) {
//       const resp = fetchData();
//     }
//   }, [campaignsAreFetched, user_public_key]);

//   const copyToClipboard = () => {
//     if (
//       fetchedReferralLink &&
//       fetchedReferralLink.results &&
//       fetchedReferralLink.results.length > 0
//     ) {
//       const temporaryInput = document.createElement('input');
//       document.body.appendChild(temporaryInput);
//       temporaryInput.setAttribute('value', referralLink ? `${host}/cl/${referralLink}` : '');
//       temporaryInput.select();
//       document.execCommand('copy');
//       document.body.removeChild(temporaryInput);
//     }
//   };

//   if (campaignsAreFetched > 0) {
//     return (
//       <Fragment>
//         <CustomParagraph paragraphColor={'#696868'} paragraphMargin={'0 10px 0 0'}>
//           {/* {fetchedReferralLink &&
//           fetchedReferralLink.results[indx].links &&
//           fetchedReferralLink.results[indx].links.length > 0 &&
//           fetchedReferralLink.results[indx].url === website_url
//             ? `${host}/cl/${fetchedReferralLink.results[indx].links[0].url_code}`
//             : "not generated"} */}
//           {referralLink ? `${host}/cl/${referralLink}` : 'not generated'}
//         </CustomParagraph>

//         <ParagraphButton onClick={copyToClipboard}>
//           <img src={copy} />
//         </ParagraphButton>
//       </Fragment>
//     );
//   } else {
//     return (
//       <Fragment>
//         <CustomParagraph paragraphColor={'#696868'} paragraphMargin={'0 10px 0 0'}>
//           WAITING!
//         </CustomParagraph>

//         <ParagraphButton>
//           <img src={copy} />
//         </ParagraphButton>
//       </Fragment>
//     );
//   }
// };

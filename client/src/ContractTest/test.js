import React, { useEffect, useState } from "react";
import {
  Web3ReactProvider,
  useWeb3React,
  UnsupportedChainIdError,
} from "@web3-react/core";
import Web3Provider, { useWeb3Context, Web3Consumer } from "web3-react";
import Web3 from "web3";
import { ethers } from "ethers";

import {
  AccountData,
  ContractData,
  ContractForm,
} from "@drizzle/react-components";
import CrowdlinkReferral from "../contracts/CrowdlinkReferral";

import "@portis/web3";
import { ConnectorsInstance } from "../connectors/connectorsInstance";

//use context.active


export const ContractTest = () => {
  const [inp, setInp] = useState()
  const [resp, setResp] = useState()
  const [len, setLen] = useState()
  const [website, setWebsite] = useState()
  const [reward, setReward] = useState()
  const [budget, setBudget] = useState()
  const [balance, setBalance] = useState("")


  const { library, account, networkId, active, provider } = useWeb3Context(); //use context.active to check whether there's an active web3 provider
  console.log("current network id", networkId);
  console.log('provider', provider)
  console.log('library', library)
  console.log('is ACTIVE?', active)
  const crowdlinkAddress = networkId
    ? CrowdlinkReferral.networks[networkId].address
    : null;
  console.log("CROWDLINK ADDRESS", crowdlinkAddress);

  // console.log('inside contract test web3 context', context)
  console.log("inside contract test: LIBRARY", library);
  console.log(CrowdlinkReferral);

  console.log("ethers");
  console.log(ethers);
  console.log("defaultprovider", ethers.getDefaultProvider());

  console.log("account", account);

 

  const openReferralCampaign = async () => {
    const contract = new ethers.Contract(
      crowdlinkAddress,
      CrowdlinkReferral.abi,
      library.getSigner()
    ); //or implement a context.active higher order component and initialize a new contract only one time at the top of the component
    console.log("contract inside openreferralcampaign", contract);
    console.log("library", library.getSigner());
    console.log('budget', budget, typeof budget)
    console.log('reward', reward, typeof reward)
    console.log('website', website, typeof website)
    console.log(parseInt(budget, 10))
    const bigNumberifyBudget = ethers.utils.bigNumberify(budget)

    await contract.functions.openPayPerClickReferralCampaign(bigNumberifyBudget, parseInt(reward, 10), website, 'click', {value: bigNumberifyBudget});
  };

  const checkOpenCampaigns = async () => {
    const contract = new ethers.Contract(
      crowdlinkAddress,
      CrowdlinkReferral.abi,
      library.getSigner()
    );
    let campaign_data = await contract.functions.lookUpCampaignReferral(
      account,
      inp
    );
    campaign_data[1] = campaign_data[1].toString()
    campaign_data[2] = campaign_data[2].toString()
    setResp(campaign_data)
    console.log(campaign_data);
  };

  const checkOpenCampaignsLength = async () => {
    const contract = new ethers.Contract(
      crowdlinkAddress,
      CrowdlinkReferral.abi,
      library.getSigner()
    );
    const campaign_data = await contract.functions.lookupCampaignReferralsCollectionLength(
      account
    );
    const campaign_length = campaign_data ? campaign_data.toNumber() ? campaign_data.toNumber() : '0' : '0';
    setLen(campaign_length)
    console.log("length", campaign_length);
  };

  const addInfluencer = async() => {
    const contract = new ethers.Contract(
      crowdlinkAddress,
      CrowdlinkReferral.abi,
      library.getSigner()
    );
    const resp = await contract.functions.addInfluencer(
      'thegreatcrowdlink',
      'crowdlinkreferral',
      '0x16dA4fa78A91cb8F51f157F693E69AE6841b5E2D'
    );
    console.log(resp)

    // string memory _website, string memory _referral_link, address _owner

  }


  return (
    <div style={{marginLeft: '30px'}}>
      <div>
        <h2>web3 instance</h2>
        <ConnectorsInstance />
      </div>
      {/* <ContractForm>

            </ContractForm> */}
      <h1>contract test</h1>
          <p>smart contract address: {crowdlinkAddress}</p>
          <p>my current accoutn address: {account}</p>
          <p>current network id: {networkId}</p>
          <div>
            <button onClick={async() => {
              const bal = await library.getBalance(account)
              console.log(bal)

              const balance = ethers.utils.formatEther(bal)
              console.log('bal ', balance)
              setBalance(balance)
            } }>get balance</button>
            <p>my current account balance: {balance} </p>
          </div>

      <div>
        <h1>open referral campaign</h1>
        <div>
          <p>reward</p>
        <input type='number' value={reward} onChange={(e) => setReward(e.target.value)} />
 
        </div>
        <div>
          <p>budget</p>
          <input type='number' value={budget} onChange={(e) => setBudget(e.target.value)} />

        </div>
        <div>
          <p>website</p>
          <input type='text' value={website} onChange={(e) => setWebsite(e.target.value)} />

        </div>
        <button onClick={() => openReferralCampaign()}>
          open referral campaign
        </button>
      </div>

      <div>
        <h1>look up campaign campaign data</h1>
        <input type='number' value={inp} onChange={(e) => setInp(e.target.value)} />
        <button onClick={() => checkOpenCampaigns()}>look up campaign</button>
          {resp && resp.map(x => <p>{typeof x === 'string' || typeof x === 'number' ? x : 'null'}</p>)}
      </div>

      <div>
        <h1>look up campaign length</h1>
        <button onClick={() => checkOpenCampaignsLength()}>
          look up campaign length
        </button>
          <p>{len}</p>
      </div>
      <div>
        <button onClick={addInfluencer}>add influencer</button>
      </div>
    </div>
  );
};

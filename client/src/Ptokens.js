import React, { useState, useEffect } from "react";
import { pBTC } from "ptokens-pbtc";
import { ethers } from "ethers";
import Web3Provider, { useWeb3Context, Web3Consumer } from "web3-react";
import { ConnectorsInstance } from "./connectors/connectorsInstance";
import pTokens from "ptokens";
import { abi } from "./ptokens/abi";

export const Ptokens = () => {
  const {
    library,
    account,
    networkId,
    active,
    provider,
    connector,
  } = useWeb3Context();
  const context = useWeb3Context();
  console.log("context", context);

  const [transactionState, setTransactionState] = useState();
  const [pBtcAddress, setPBtcAddress] = useState();
  const [pTokensBalance, setPTokensBalance] = useState();

  useEffect(() => {
    if (active && pBtcAddress) {
      const depositState = pBtcAddress
        .waitForDeposit()
        .once("onBtcTxBroadcasted", (tx) => {
          console.log("broadcast", tx);
          setTransactionState(tx);
        })
        .once("onBtcTxConfirmed", (tx) => {
          console.log("confirmed", tx);
          setTransactionState(tx);
        })
        .once("onNodeReceivedTx", (report) => {
          console.log("onNodeReceivedTx", report);
          setTransactionState(report);
        })
        .once("onNodeBroadcastedTx", (report) => {
          console.log("onNodeBroadcastedTx", report);
          setTransactionState(report);
        })
        .once("onEthTxConfirmed", (tx) => {
          console.log("onEthTxConfirmed", tx);
          setTransactionState(tx);
        })
        .then((res) => {
          console.log(res);
          setTransactionState(res);
        });
    }
  }, [active, pBtcAddress]);

  if (active) {
    console.log("provider", provider);
    console.log("current transaction state", transactionState);
    const ptokens = new pTokens({
      pbtc: {
        ethProvider: process.env.REACT_APP_INFURA_ROPSTEN, //need to use https, not ws
        btcNetwork: "testnet",
      },
    });

    const getAddress = async () => {
      const depositAddress = await ptokens.pbtc.getDepositAddress(account);
      console.log(depositAddress.toString());
      setPBtcAddress(depositAddress);
    };

    return (
      <div>
        <div>my account address: {account ? account : "null"}</div>
        <button onClick={getAddress}>get address</button>
        <div>address: {pBtcAddress ? pBtcAddress.toString() : "null"}</div>
      </div>
    );
  } else {
    return <ConnectorsInstance />;
  }
};

import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { useWeb3Context } from 'web3-react';
import AccountDisplay from '../screen/AccountDisplay';
import NetworkSwitch from '../screen/NetworkSwitch';
import networks from '../../../../constants/networks';

const Navbar = () => {
  const { active, account, networkId } = useWeb3Context();
  const [balance, setBalance] = useState();

  const getBalance = async () => {
    const provider = ethers.getDefaultProvider(networkId);
    const unformattedBalance = await provider.getBalance(account);
    // console.log("balance", balance);
    const balanceToEth = ethers.utils.formatEther(unformattedBalance);
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
          <AccountDisplay account={account} onHoverText={account} style={{ color: '#2A4365' }} />
          <NetworkSwitch active={active} onHoverText={networks[networkId]} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

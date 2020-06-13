import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { useWeb3Context } from 'web3-react';
import NetworkSwitch from '../screen/NetworkSwitch';
import networks from '../../constants/networks';

const Navbar = () => {
  const { active, account, networkId } = useWeb3Context();
  const [balance, setBalance] = useState();

  const getBalance = async () => {
    const provider = ethers.getDefaultProvider(networkId);
    const balance = await provider.getBalance(account);
    // console.log("balance", balance);
    const balanceToEth = ethers.utils.formatEther(balance);
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
          <div
            style={{
              backgroundColor: '#F3F3F3',
              borderRadius: '5px',
              width: '140px',
              fontSize: '16px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <p style={{ color: '#2A4365' }}>{active ? networks[networkId] : 'not connected'}</p>
          </div>
          <NetworkSwitch active={active} onHoverText={networks[networkId]} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

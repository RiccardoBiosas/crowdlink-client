import React, { useState } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Web3Provider, { useWeb3Context, Web3Consumer } from 'web3-react'
import { ethers } from 'ethers'
import connectors from './portis/index'
import { PublisherWizardContainer } from './components/PublisherWizardContainer'
import {TasksContainer} from './components/Tasks/TasksContainer'
import {ContractTest} from './ContractTest/test'
import {useHistory} from 'react-router-dom'
import { PublisherHomepage } from './components/PublisherHomepage'
import { MarketerHomepage } from './components/MarketerHomepage'
import {PublisherSignUp} from './components/PublisherSignUp/PublisherSignUp'
import {PUBLISHER_SIGN_UP_ROUTE} from './routes-config'
import { PublisherConnectGA } from './components/PublisherConnectGA.js/PublisherConnectGA'
import { ConnectorsInstance } from './connectors/connectorsInstance'






const App = () => {
  console.log('test')
  console.log('connectors', connectors)
  console.log('connectors portis', connectors.portis)
  return (
    <BrowserRouter>
        <Web3Provider connectors={connectors} libraryName='ethers.js'>
      <Route exact path='/' component={PublisherHomepage} />
      <Route exact path='/marketer' component={MarketerHomepage} />
      <Route exact path={PUBLISHER_SIGN_UP_ROUTE} component={PublisherSignUp} />
      <Route exact path='/creator/dashboard' component={PublisherWizardContainer} />
      <Route exact path='/marketer/feed' component={TasksContainer} />
      <Route exact path='/test' component={ContractTest} />
      <Route exact path='/connection' component={ConnectorsInstance} />
      <Route exact path='/creator/connect' component={PublisherConnectGA} />

    </Web3Provider>

    </BrowserRouter>
  

  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
// import './index.css';
import Web3Provider from 'web3-react';
import GlobalStyle from './shared/styles/GlobalStyles';
import App from './App';
import connectors from './portis/index';
import * as serviceWorker from './serviceWorker';

require('dotenv').config();

ReactDOM.render(
  <React.StrictMode>
    <Web3Provider connectors={connectors} libraryName="ethers.js">
      <App />
    </Web3Provider>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

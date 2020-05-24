import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./index.css";
import App from "./App";
import Web3Provider from "web3-react";
import connectors from "./portis/index";
import * as serviceWorker from "./serviceWorker";

require("dotenv").config();

// const GlobalStyle = createGlobalStyle`
// ${normalize}

// @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');

// html {
//   box-sizing: border-box;
// }

// *,
// *::before,
// *::after {
//   box-sizing: inherit;
//   font-family: 'Open Sans', sans-serif;;

// }

// button {
//   padding: 0;
// }

// `;


ReactDOM.render(
  <React.StrictMode>
    <Web3Provider connectors={connectors} libraryName="ethers.js">
      {/* <BodyContainerLayout> */}
        {/* <div style={{position: 'relative', zIndex: '2'}}> */}
        <App />

        {/* </div> */}

      {/* </BodyContainerLayout> */}
    </Web3Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

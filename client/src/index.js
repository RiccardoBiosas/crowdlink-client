import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import * as serviceWorker from "./serviceWorker";

const GlobalStyle = createGlobalStyle`
${normalize}

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  font-family: 'Open Sans';

}

button {
  padding: 0;
}

`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

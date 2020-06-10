// #### third-party APIs

export const COINGECKO_API = 'https://api.coingecko.com/api/v3/';
export const ROPSTEN_ETHERSCAN = 'https://ropsten.etherscan.io/';

export const ROPSTEN_ETHERSCAN_TX = 'https://ropsten.etherscan.io/tx/';

// #### back-end API
let host;

const hostname = window && window.location && window.location.hostname;
const domainExpr = RegExp('crowdlink.me');
console.log('hostname ', hostname);

if (domainExpr.test(hostname)) {
  host = 'https://crowdlink.me';
} else {
  host = 'http://localhost:8000';
}

console.log('backend api host', host);

export const CAMPAIGNS_CLICK_ENDPOINT = '/api/click/campaigns/';
export const CAMPAIGNS_CLICK_CREATE_LINK_ENDPOINT = 'create_link/'; // NEEDS TO START WITH AN ID PARAMETER!
export const USERS_ENDPOINT = '/api/users/';
export const LINK_GENERATOR_ENDPOINT = '/api/links/';
export const GA_OAUTH_ENDPOINT = '/api/auth/login/google-oauth2/';

export default host;

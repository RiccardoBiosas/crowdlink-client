// #### third-party APIs

export const COINGECKO_API = "https://api.coingecko.com/api/v3/";

// #### back-end API
// let host = "https://crowdlink.me";
let host = 'http://localhost:8000'

export const CAMPAIGNS_ENDPOINT_CLICK_CAMPAIGN = `${host}/api/click/campaigns/`;
export const CAMPAIGNS_CLICK_ENDPOINT = "/api/click/campaigns/";
export const CAMPAIGNS_CLICK_CREATE_LINK_ENDPOINT = 'create_link/'; //NEEDS TO START WITH AN ID PARAMETER! 
export const USERS_ENDPOINT = "/api/users/";
export const LINK_GENERATOR_ENDPOINT = "/api/links/";
export const GA_OAUTH_ENDPOINT = "/api/auth/login/google-oauth2/";

export default host;
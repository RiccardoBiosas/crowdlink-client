import axios from 'axios';
import host, { CAMPAIGNS_CLICK_ENDPOINT, USERS_ENDPOINT } from '../../api-config';

const client = axios.create({
  baseURL: host,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getClickCampaigns = async () => {
  const res = await client.get(CAMPAIGNS_CLICK_ENDPOINT);
  return res;
};

export const getUsers = () => {
  return client.get(USERS_ENDPOINT);
};

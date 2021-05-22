import Axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const serverUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://woker-strtp-server.herokuapp.com'
    : 'https://woker-strtp-server.herokuapp.com';

let url = `${serverUrl}/api/v1`;

const axios = Axios.create({
  baseURL: url,
});

axios.interceptors.response.use((res) => {
  if (!res.data) return Promise.reject(res.data);
  return res.data;
});

export const post = async (url, data, skipToken) => {
  let token = null;
  if (!skipToken) {
    token = await SecureStore.getItemAsync('token');
  }
  const payload = skipToken ? {...data} : {...data, token};
  return axios.post(url, payload);
};

export const get = (url) => {
  return axios.get(url);
};

export default axios;

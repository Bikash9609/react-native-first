import Axios from 'axios';

const serverUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://woker-strtp-server.herokuapp.com'
    : 'https://woker-strtp-server.herokuapp.com';

let url = `${serverUrl}/api/v1`;

if (window.SERVER_TYPE === 'heroku') {
  url = 'https://woker-strtp-server.herokuapp.com/api/v1';
}

const axios = Axios.create({
  baseURL: url,
});

export default axios;

// export function getRequest = ({method: 'get', }) => {}

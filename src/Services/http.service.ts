import axios from 'axios';

// ** Config
// import authConfig from 'src/config/auth'

const instance = axios.create({
  baseURL: "https://de07-103-244-176-173.ap.ngrok.io/api/v1",
  timeout: 500000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {

  const storedToken = window.localStorage.getItem('token')
  // console.log(storedToken)

  return {
    ...config,
    headers: {
      authorization: storedToken ? `Bearer ${storedToken}` : null,
    },
  };
});

export default instance;

import axios from 'axios';

const requestInstance = axios.create({
  baseURL: 'http://43.133.186.198',
});

requestInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

requestInstance.interceptors.response.use(
  (response) => {
    if (response?.status === 200) {
      return response?.data;
    } else {
      return {
        code: '-1',
        message: '请求失败',
        data: null,
      };
    }
  },
  (error) => {
    Promise.reject(error);
  }
);

export default requestInstance;

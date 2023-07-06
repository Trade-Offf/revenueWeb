import axios from 'axios';

const requestInstance = axios.create({
  // 区分线上线下环境
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://revenue-web.vercel.app'
      : 'http://43.133.186.198:7001',
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

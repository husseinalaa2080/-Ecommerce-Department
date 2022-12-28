import axios from 'axios';

const baseUrl = 'https://api-dev.yeshtery.com/v1';

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 50000,
});

const Axios = async (
  method: Method,
  path: string,
  data?: any,
  params?: any,
) => {
  const response = await axiosInstance({
    method: method,
    url: path,
    params: params,
    data: data,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};

export default Axios;

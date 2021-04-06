import axios from 'axios'

export function request (config) {
  const instance = axios.create({
    baseURL: 'http://106.54.54.237:8000/api/mn',
    timeout: 10000,
  })

  // axios拦截器
  instance.interceptors.request.use(con => {
    //console.log(con);
    // 1. config的一些信息不符合服务器请求

    // 2. 比如每次发送请求时，
    // 都希望在界面中显示一个请求的图标

    // 3. 某些网络请求（比如登录（token）），
    // 必须携带一些特殊的信息
    return con;
  },err => {
  return Promise.reject(err);
  });
  instance.interceptors.response.use(res => {
    // console.log(res);
    return res.data;
  },err => {
    console.log(err);

  });

  return instance(config)
}

import axios from "axios";
import { isEmpty } from "lodash";

const ajax = axios.create({
  //SSSSSS
});
// ajax.interceptors.request.use(
//   //加入token后拦截添加token
//   config => {
//     return config;
//   },
//   error => Promise.reject(error)
// );
// ajax.defaults.headers.post["Content-Type"] = "application/json";

ajax.interceptors.response.use(
  response => {
    const responseData = response.data;
    if (isEmpty(responseData)) {
      return {};
    }
    if (responseData.success) {
      return responseData.result.items;
    }
    return Promise.reject(response);
  },
  error => {
    const errorResponse = error.response;
    if (!errorResponse) {
      return Promise.reject({ errorMessage: "未知错误" });
    }
    return Promise.reject({
      ...errorResponse.data,
      status: errorResponse.status
    });
  }
);

export default ajax;

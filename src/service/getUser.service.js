import ajax from "./ajax";
import { frontip } from "./baseUrl";
const appid = "e4c72362-e49e-4bd2-9e05-240f4ba2539b";
const appkey = "919d9b41-6668-4456-bae7-48b1872de8cc";
//eslint-disable-next-line
// export const getToken = (callback) =>{
//   return ajax.get(
//     "api/sso/ssoapi/GetToken?callback=" +
//       callback +
//       "&appid=" +
//       appid +
//       "&appkey=" +
//       appkey
//   );
// };
// export const getUser = token => {
//   return ajax.get(
//     "/api/sso/ssoapi/GetUserInfo?token=" +
//       token +
//       "&appid=" +
//       appid +
//       "&appkey=" +
//       appkey +
//       "&ip=" +
//       frontip
//   );
// };
export const getToken = callback =>
  ajax.get(
    `http://wfserver.gree.com/sso/ssoapi/GetToken?callback=` +
      callback +
      "&appid=" +
      appid +
      "&appkey=" +
      appkey
  );
export const getUser = token =>
  ajax.get(
    "http://wfserver.gree.com/sso/ssoapi/GetUserInfo?token=" +
      token +
      "&appid=" +
      appid +
      "&appkey=" +
      appkey +
      "&ip=" +
      frontip
  );

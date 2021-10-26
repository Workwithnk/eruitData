import axios from './AxiosService';
import { ApiEndpoint } from "../helpers/Endpoint";

const header = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods":
    "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  "content-type": "application/json; charset=utf-8",
  "x-api-version": "v1",
  "Access-Control-Allow-Headers":
    "X-Requested-With, content-type, Authorization"
}

export default class AccountService {
  static Login(firmName: string, userName: string, password: string) {
    return axios
      .post(`${ApiEndpoint}/Account/Login?firmName=${firmName}`, { userName, password }, header)
      .then((response) => {
        return response.data;
      });
  }
}

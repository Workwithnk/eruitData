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

export default class ReceiptService {
  // https://erp.eruit.co.il/Receipt/SearchReceipt?iDisplayStart=0&iDisplayLength=10&sSortDir_0=desc
  static SearchReceipt(params: any) {
    // return axios.get(`${ApiEndpoint}/Receipt/SearchReceipt`, params, header).then(response => {
    //   return response.data
    // });
    return axios.get(`${ApiEndpoint}/User/GetAll`, params, header).then(response => {
      return response.data
    });
  }
}

import axios from 'axios';
import { AXIOS_CANCELLED } from '../helpers/Constants';
import { Authentication } from '../helpers/Authenticated';
import { ApiEndpoint } from "../helpers/Endpoint";

const CancelToken = axios.CancelToken;
const instance = axios.create();

class AxiosAPI {    
    static async get(url: string, queryParams: any = {}, headers: any = {}, options: any = {}) {
        const address = buildURL(url);
        const _headers = { ...headers };
        
        if (await Authentication.isAuthenticated()) {
            // No Authorization header provided, attach the default one
            const token = await Authentication.getAccessToken();
            _headers.Authorization = `Bearer ${token}`;
        }
        try {
            const response = await instance({
                method: 'GET',
                headers: _headers,
                url: address+ this.generateQueryString(queryParams),
                cancelToken: new CancelToken(function executor(c) {
                
                }),
                ...options,
            });

            return response;
        } catch (error) {
            if (401 === error.response?.status) {
                if(url.startsWith(ApiEndpoint)){
                  await Authentication.signout();
                } 
                throw error;
            }else{
                if (axios.isCancel(error)) {
                    throw AXIOS_CANCELLED;
                } else {
                    throw error;
                }
            }
        }
    }

    static async post(url: string, body: any = {}, headers: any = {}, options: any = {}) {
        const address = buildURL(url);
        const _headers = { ...headers };

        if (await Authentication.isAuthenticated()) {
            // No Authorization header provided, attach the default one
            const token = await Authentication.getAccessToken();
            _headers.Authorization = `Bearer ${token}`;
        }
        try {
            const response = await instance({
                method: 'POST',
                headers: _headers,
                data: body,
                url: address,
                cancelToken: new CancelToken(function executor(c) {
                }),
                ...options,
            });

            return response;
        }
        catch (error) {
            if (401 === error.response?.status) {
                if(url.startsWith(ApiEndpoint)){
                  await Authentication.signout();
                } 
                throw error;
            }else{
                if (axios.isCancel(error)) {
                    throw AXIOS_CANCELLED;
                } else {
                    throw error;
                }
            }
        }
    }

    static async put(url: string, body: any = {}, headers: any = {}, options: any = {}) {
        const address = buildURL(url);
        const _headers = { ...headers };

        if (await Authentication.isAuthenticated()) {
            // No Authorization header provided, attach the default one
            const token = await Authentication.getAccessToken();
            _headers.Authorization = `Bearer ${token}`;
        }

        try {
            const response = await instance({
                method: 'PUT',
                headers: _headers,
                data: body,
                url: address,
                cancelToken: new CancelToken(function executor(c) {
                }),
                ...options,
            });

            return response;
        } catch (error) {
            if (401 === error.response.status) {
                if(url.startsWith(ApiEndpoint)){
                  await Authentication.signout();
                } 
                throw error;
            }else{
                if (axios.isCancel(error)) {
                    throw AXIOS_CANCELLED;
                } else {
                    throw error;
                }
            }
        }
    }

    static async delete(url: string, queryParams: any = {}, headers: any = {}, options: any = {}) {
        const address = buildURL(url);
        const _headers = { ...headers };

        if (!headers.Authorization) {
            // No Authorization header provided, attach the default one
            //   const token = await Azure.getAccessToken();
            //   _headers.Authorization = `Bearer ${token}`;
        }

        try {
            const response = await instance({
                method: 'DELETE',
                headers: _headers,
                url: address + this.generateQueryString(queryParams),
                cancelToken: new CancelToken(function executor(c) {
                }),
                ...options,
            });

            return response;
        } catch (error) {
            if (401 === error.response.status) {
                if(url.startsWith(ApiEndpoint)){
                  await Authentication.signout();
                } 
                throw error;
            }else{
                if (axios.isCancel(error)) {
                    throw AXIOS_CANCELLED;
                } else {
    
                    throw error;
                }
            }
        }
    }

    static generateQueryString(dict = {}) {
        let keys = Objkeys(dict);
        if (!keys) {
            return '';
        } else {
            let array: any[] = [];
            for (const key of keys) {
                array.push(`${key}=${encodeURIComponent(dict[key])}`);
            }
            return `?${array.join('&')}`;
        }
    }
}
export default AxiosAPI;

function buildURL(url: string) {
    return `${url}`;
}

export function Objkeys<O extends object>(obj: O): Array<keyof O> {
    return Object.keys(obj) as Array<keyof O>;
}
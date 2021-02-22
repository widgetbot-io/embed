// Code created by viction#0001 https://viction.dev/ - owner of really cool bot https://kratos.gg/
import Axios, { AxiosResponse, Method } from 'axios';
import {API_URL, url} from "@lib/env";

interface APIRequestOptions {
    headers?: {[key: string]: any};
    payload?: {[key: string]: any};
    baseURL?: string;

    authDisabled?: boolean;
}

const axiosClient = Axios.create({
    baseURL: API_URL,
});

export async function APIRequest(endpoint: string, options: APIRequestOptions = {}): Promise<AxiosResponse> {
    const split = endpoint.split(' ');
    const method = split[0] as Method;
    endpoint = split.slice(1).join(' ');

    return await axiosClient.request({
        method,
        ...(options.baseURL ? { baseURL: options.baseURL } : {}),
        url: endpoint,
        headers: {
            ...(!options.authDisabled ? { Authorization: window.localStorage.getItem('token') }: {}),
            ...(options.headers || {})
        },
        data: options.payload || {}
    });
}

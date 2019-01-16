import axios, { AxiosRequestConfig } from 'axios';

export enum HttpMethod
{
  GET    = 'GET',
  POST   = 'POST',
  DELETE = 'DELETE',
  PUT    = 'PUT ',
}

export class HttpService
{
   public static httpService(url: string, method: HttpMethod, data?: any): Promise<any>
  {
    const config: AxiosRequestConfig = {
      url: url,
      method: method,
      data: data,
      baseURL: 'api',
    };
    return axios.request<HttpMethod>(config)
      .then(response =>
      {
        return response.data;
      });
  }
}
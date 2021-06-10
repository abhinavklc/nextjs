/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

type getFetcherType = (path: string) => Promise<any>;

type getFetcherHookType = (request_data: any) => getFetcherType;

export const useGetFetcher: getFetcherHookType = (request_data) => {
  const getFetcher: getFetcherType = (path: string) =>
    axios.get<any>(path, request_data).then((res) => res.data);

  return getFetcher;
};

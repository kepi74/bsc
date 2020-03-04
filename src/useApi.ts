import React from 'react';
import fetch from 'unfetch';

export interface NoData {
  type: 'NoData';
}

export interface Loading {
  type: 'Loading';
}

export interface Data<T> {
  type: 'Data';
  data: T;
}

export interface Error {
  type: 'Error';
  message: string;
}

export type ApiResponse<T> = NoData | Loading | Data<T> | Error;

export default function useApi<T>(info: RequestInfo, init?: RequestInit) {
  const [requestState, setRequestState] = React.useState<ApiResponse<T>>({
    type: 'NoData',
  });
  const callApi = async () => {
    setRequestState(() => ({ type: 'Loading' }));
    try {
      const response = await fetch(info, init);
      const data = await response.json();
      setRequestState(() => ({ type: 'Data', data }));
    } catch (err) {
      setRequestState(() => ({ type: 'Error', message: err.message }));
    }
  };
  React.useEffect(() => {
    callApi();
  }, []);

  return [requestState];
}

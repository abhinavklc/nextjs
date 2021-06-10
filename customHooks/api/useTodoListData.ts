import useSWR from 'swr';
import { TUserToDoResponse } from '../../interfaces/toDoList';
import { useGetFetcher } from '../../utils/getFetcher';

const API_URL = 'https://jsonplaceholder.typicode.com/';

const useTodoListData = (): TUserToDoResponse => {
  const request_data = {
    baseURL: API_URL,
  };
  const getFetcher = useGetFetcher(request_data);

  const { data, error } = useSWR(['/users/2/todos', JSON.stringify(request_data)], getFetcher);

  return {
    data,
    isLoading: !data && !error,
    error,
  };
};

export default useTodoListData;

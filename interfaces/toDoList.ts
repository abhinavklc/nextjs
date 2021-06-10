export interface TUserToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TUserToDoResponse {
  data: undefined | TUserToDo[];
  isLoading: boolean;
  error: undefined | string;
}

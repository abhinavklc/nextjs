import { useEffect, useState } from 'react';
import useTodoListData from '../../customHooks/api/useTodoListData';
import { TUserToDo } from '../../interfaces/toDoList';
import UseCallbackContainerStyle from './styles/useCallbackContainerStyle';
import ToDoListTitle from './toDoListTitle';
import ToDoListItem from './toListItem';

const loadingStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%',
  fontSize: '1.5rem',
};
const UseCallbackContainer: React.FC = () => {
  const [userToDoList, setUserToDoList] = useState<TUserToDo[]>([]);
  const { data, isLoading, error } = useTodoListData();

  useEffect(() => {
    if (data) setUserToDoList(data);
  }, [data]);

  const handleClick = (taskId: number): void => {
    const newToDoList = userToDoList.filter((todo) => todo.id !== taskId);
    setUserToDoList(newToDoList);
  };

  if (isLoading) return <div style={loadingStyle}>Loading...</div>;
  if (error) return <div style={loadingStyle}>Something went wrong...</div>;
  if (data)
    return (
      <UseCallbackContainerStyle>
        <ToDoListTitle />
        {userToDoList.map((todo) => (
          <ToDoListItem
            key={todo.id}
            userId={todo.userId}
            title={todo.title}
            isCompleted={todo.completed}
            handleClick={() => handleClick(todo.id)}
          />
        ))}
      </UseCallbackContainerStyle>
    );
  return null;
};
export default UseCallbackContainer;

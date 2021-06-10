import { useEffect, useState } from 'react';
import { TUserToDo } from '../../interfaces/toDoList';
import ApiCallingContainerStyle from './styles/apiCallingContainerStyle';
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
const ApiCallingContainer: React.FC = () => {
  const [userToDoList, setUserToDoList] = useState<TUserToDo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTodoList = async (): Promise<void> => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/1/todos');
      const toDoList = await res.json();
      setUserToDoList(toDoList);
      setLoading(false);
    };
    getTodoList();
    // setTimeout(() => getTodoList(), 3000);
  }, []);

  const handleClick = (taskId: number): void => {
    const newToDoList = userToDoList.filter((todo) => todo.id !== taskId);
    setUserToDoList(newToDoList);
  };
  if (loading) return <div style={loadingStyle}>Loading...</div>;
  return (
    <ApiCallingContainerStyle>
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
    </ApiCallingContainerStyle>
  );
};
export default ApiCallingContainer;

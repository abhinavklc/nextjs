import { useEffect, useState } from 'react';
import { TUserToDo } from '../../interfaces/toDoList';
import { UserToDoData } from '../../utils/sample-data';
import StatesPageContainerStyle from './styles/statesPageContainerStyle';
import ToDoListTitle from './toDoListTitle';
import ToDoListItem from './toListItem';

const StatesPageContainer: React.FC = () => {
  const [userToDoList, setUserToDoList] = useState<TUserToDo[]>([]);

  useEffect(() => {
    setUserToDoList(UserToDoData);
  }, []);

  const handleClick = (taskId: number): void => {
    const newToDoList = userToDoList.filter((todo) => todo.id !== taskId);
    setUserToDoList(newToDoList);
  };

  return (
    <StatesPageContainerStyle>
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
    </StatesPageContainerStyle>
  );
};
export default StatesPageContainer;

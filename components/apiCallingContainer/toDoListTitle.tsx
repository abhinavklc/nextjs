import ToDoListTitleStyle from './styles/toDoListTitleStyle';

const ToDoListTitle: React.FC = () => {
  return (
    <ToDoListTitleStyle>
      <div className="user_id">User id</div>
      <div className="title">Task</div>
      <div className="status">Status</div>
    </ToDoListTitleStyle>
  );
};

export default ToDoListTitle;

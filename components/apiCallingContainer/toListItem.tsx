import ToDoListItemStyle from './styles/toDoListItemStyle';

type Props = {
  userId: number;
  title: string;
  isCompleted: boolean;
  handleClick: () => void;
};

const ToDoListItem: React.FC<Props> = ({ userId, title, isCompleted, handleClick }: Props) => {
  return (
    <ToDoListItemStyle
      className={`${isCompleted ? 'complete' : ''}`}
      onClick={isCompleted ? handleClick : undefined}
    >
      <div className="user_id">{userId}</div>
      <div className="title">{title}</div>
      <div className={`status ${isCompleted ? 'completed' : ''}`}>
        {isCompleted ? 'Done' : 'Not done'}
      </div>
    </ToDoListItemStyle>
  );
};

export default ToDoListItem;

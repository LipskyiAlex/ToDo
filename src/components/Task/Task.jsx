import { MdClose } from 'react-icons/md';
import { Wrapper, Checkbox, Text, Button } from './Task.styled';
import { useDispatch } from 'react-redux';
import { deleteTask,toggleCompleted } from 'redux/tasks/operations';

export const Task = ({ task }) => {

  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));

  const handleToggle = () => dispatch(toggleCompleted(task));

  return (
    <Wrapper>
      <Checkbox
        type="checkbox"
        onChange={handleToggle}
        checked={task.completed}
      />
      <Text>{task.text}</Text>
      <Button onClick={handleDelete}>
        <MdClose size={24} />
      </Button>
    </Wrapper>
  );
};

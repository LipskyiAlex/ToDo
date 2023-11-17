import { useDispatch } from 'react-redux';
import { addTask } from 'redux/tasks/operations';
import { ButtonComponent } from '../Button/Button';
import { Form, Input } from './TaskForm.styled';
import Notiflix from 'notiflix';
import { Button } from '@mui/material';
export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    const task = form.elements.text.value;

    if (!task.trim()) {

      return Notiflix.Notify.failure('Task cant be empty!');
    
    }
    dispatch(addTask(task));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" name="text" placeholder="Enter task text..." />
      <Button type="submit" variant='contained'>Add task</Button>
    </Form>
  );
};

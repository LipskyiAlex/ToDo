import { useDispatch } from 'react-redux';
import { addTask } from 'redux/tasks/operations';
import { ButtonComponent } from '../Button/Button';
import { Form, Input } from './TaskForm.styled';
import { Notify } from 'notiflix';
export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    const task = form.elements.text.value;

    if (!task.trim()) {

      return Notify.failure('Task cant be empty!');
    
    }
    dispatch(addTask(task));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" name="text" placeholder="Enter task text..." />
      <ButtonComponent type="submit">Add task</ButtonComponent>
    </Form>
  );
};

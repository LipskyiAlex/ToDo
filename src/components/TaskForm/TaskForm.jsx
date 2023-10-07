import { Button } from "../Button/Button";
import {Form, Input} from './TaskForm.styled';
export const TaskForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    form.reset();
  };

  return (
    <Form  onSubmit={handleSubmit}>
      <Input
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </Form>
  );
};
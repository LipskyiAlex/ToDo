import { Task } from "../Task/Task";

import {List,Item} from './TaskList.styled';
export const TaskList = () => {
  return (
    <List>
      {[].map(task => (
        <Item key={task.id}>
          <Task task={task} />
        </Item>
      ))}
    </List>
  );
};

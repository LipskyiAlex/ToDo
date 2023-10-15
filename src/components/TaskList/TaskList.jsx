import { useSelector } from "react-redux";
import {selectVisibleTasks} from "redux/selectors";
import { Task } from "../Task/Task";


import {List,Item} from './TaskList.styled';

export const TaskList = () => {

   
  const visibleTasks = useSelector(selectVisibleTasks);

  return (
    <List>
      {visibleTasks.map(task => (
        <Item key={task.id}>
          <Task task={task} />
        </Item>
      ))}
    </List>
  );
};

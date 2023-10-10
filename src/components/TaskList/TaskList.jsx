import { useSelector } from "react-redux";
import { statusFilters } from "redux/constants";
import { useDispatch } from "react-redux";
import { getTasks, getStatusFilter } from "redux/selectors";
import { Task } from "../Task/Task";


import {List,Item} from './TaskList.styled';

const getVisibleTasks = (tasks,statusFilter) => {

  switch(statusFilter) {

    case(statusFilters.active): 

    return tasks.filter(task => !task.completed);

    case(statusFilters.completed): 

    return tasks.filter(task => task.completed);

    default: 

    return tasks;
  }

}

export const TaskList = () => {

  const dispatch = useDispatch();
  
  const tasks = useSelector(getTasks);

  const statusFilter = useSelector(getStatusFilter);
 
  const visibleTasks = getVisibleTasks(tasks,statusFilter);


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

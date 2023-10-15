import { useSelector } from 'react-redux';


import { Text } from './TaskCounter.styled';
import { selectCountTask } from 'redux/selectors';

export const TaskCounter = () => {
   

  const count = useSelector(selectCountTask);

  return (
    <div>
      <Text>Active: {count.active}</Text>
      <Text>Competed: {count.completed}</Text>
    </div>
  );
};

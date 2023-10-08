import { useSelector, useDispatch } from 'react-redux'; // импортируем Хук
import { setStatusFilter } from 'redux/actions'; // Импортируем действие

import { getStatusFilter } from 'redux/selectors';
import { statusFilters } from 'redux/constants'; // Импортируем объект значений фильтра

import { Button } from '../Button/Button';
import { Wrapper } from './StatusFilter.styled';

export const StatusFilter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <Wrapper>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </Wrapper>
  );
};

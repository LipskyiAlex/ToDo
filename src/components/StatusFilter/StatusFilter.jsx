import { useSelector, useDispatch } from 'react-redux'; // импортируем Хук
import { setStatusFilter } from 'redux/tasks/filterSlice'; // Импортируем действие

import { selectStatusFilter } from 'redux/tasks/selectors';
import { statusFilters } from 'redux/tasks/constants'; // Импортируем объект значений фильтра

import { ButtonComponent } from '../Button/Button';
import { Wrapper } from './StatusFilter.styled';
import { ButtonGroup, Button } from '@mui/material';

export const StatusFilter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  
  return (
    <Wrapper>
      <ButtonGroup variant="text" aria-label="text button group">
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
       
      </ButtonGroup>
      {/* <ButtonComponent
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </ButtonComponent>
      <ButtonComponent
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </ButtonComponent>
      <ButtonComponent
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </ButtonComponent> */}
    </Wrapper>
  );
};

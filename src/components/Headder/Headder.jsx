import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Outlet,Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLogged } from 'redux/auth';
import { StyledLink } from '.';
import { AuthBar} from './AuthBar';
import { LoggedBar } from './LoggedBar';

export const Headder = () => {
         
    const isLogged = useSelector(selectIsLogged);

  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>      
            <div>
          <StyledLink component={RouterLink} to='/' variant="h6" sx={{mr:'10px'}} >
            HOME
          </StyledLink>
          {isLogged && (<StyledLink component={RouterLink} to='/todos' variant="h6">
            TASKS
          </StyledLink>)} 
          </div>
            {isLogged ? <LoggedBar/> : <AuthBar/>}
        </Toolbar>
      </AppBar>
    </Box>
    <Outlet/>
    </div>
  );
}
































import { useDispatch, useSelector } from 'react-redux';
import { selectName,LogOut } from 'redux/auth';
import { Typography,IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
export const LoggedBar = () => {

  const dispatch = useDispatch();
  const name = useSelector(selectName);
     
  
  const handleClick = () => {
     

      dispatch(LogOut());
  }
  return (
    <div style={{marginLeft: 'auto', display:'flex'}}>
      <Typography
        variant="p"
        component="h3"
        sx={{ flexGrow: 1, display:'inline-block' }}
      >Hello {name}</Typography>
       <IconButton color="inherit" onClick={handleClick}><LogoutIcon/></IconButton>
    </div>
  );
};

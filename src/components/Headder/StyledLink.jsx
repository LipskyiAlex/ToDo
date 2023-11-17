import { Link } from "@mui/material";
import { styled } from '@mui/material';



export const StyledLink = styled(Link)`

  ${({theme}) => `
  
  transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  })};
   text-decoration: none;
  &:hover {
 
    transform: scale(1.1);
  }
  &:focus {
    transform: scale(1.1);
  
  }
  `}
`

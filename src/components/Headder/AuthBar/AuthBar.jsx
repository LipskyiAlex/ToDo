import { Link} from "@mui/material"
import {Link as RouterLink} from 'react-router-dom';
export const AuthBar = () => {

    return (
        <div style={{marginLeft: 'auto'}}>
        <Link component={RouterLink} to='login'  variant='h6' sx={{mr:'10px'}}>Sign In</Link>
        <Link component={RouterLink} to='register' variant='h6' >Sign Up</Link>
        </div>
    )
}
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { fetchTasks } from 'redux/tasks/operations';
import { Route, Routes } from 'react-router-dom';
import { routes } from 'routes';
import { Headder } from './Headder';
import { selectIsRefreshing } from 'redux/auth';
import { Dna } from 'react-loader-spinner';
import { PrivateRoute, RestrictedRoute } from 'utils';
import {Home, Login, Register, Todos} from 'pages'; 
// const Home = lazy(() => import('../pages/Home'));
// const Login = lazy(() => import('../pages/Login'));
// const Register = lazy(() => import('../pages/Register'));
// const Todos = lazy(() => import('../pages/Todos'));

export const App = () => {

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

    useEffect(() => {
      dispatch(fetchTasks());
    }, [dispatch]);

  return (

      isRefreshing ? (
        
        <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{color:'black',display:'flex', justifyContent: 'center',
            alignItems:'center',margin: '0 auto', marginTop:'320px'}}
            wrapperClass="dna-wrapper"
          />
        
      ) : (
        <Routes>
        <Route path={routes.HOME} element={<Headder/>}>
         <Route index element={<Home/>}/>
         <Route path={routes.TODOS} element={<PrivateRoute component={<Todos/>} redirectTo='/login'/>}/>
         <Route path={routes.LOGIN} element={ <RestrictedRoute component={<Login/>} redirectTo='/todos'/>}/>
         <Route path={routes.REGISTER} element={ <RestrictedRoute component={<Register/>} redirectTo='/todos'/>}/>
         <Route path="*" element={<Home/>}/>
         </Route>
       </Routes>
      )
    
  );
}

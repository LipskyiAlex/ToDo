
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLogged } from "redux/auth";


export const RestrictedRoute = ({component: Component, redirectTo='/'}) => {


    const isLogged = useSelector(selectIsLogged);

    return isLogged ? <Navigate to={redirectTo}/> : Component;
}


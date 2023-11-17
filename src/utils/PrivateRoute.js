import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLogged, selectIsRefreshing } from "redux/auth";


export const PrivateRoute = ({component: Component, redirectTo='/'}) => {


    const isLoggedIn = useSelector(selectIsLogged);
    const isRefreshing = useSelector(selectIsRefreshing);

    const shouldRedirect = !isRefreshing && !isLoggedIn;

    return shouldRedirect ? <Navigate to={redirectTo}/> : Component;
}
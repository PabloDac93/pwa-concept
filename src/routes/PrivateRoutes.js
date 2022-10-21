import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../firebase/Auth";

export const PrivateRoute = ({ children }) => {

    const { currentUser } = useAuth();

    if(!currentUser){ 
        return <Navigate to="/login" />;
    }
    return children;

    /*return(

        !!currentUser ?
            (
                <Outlet />
            ) : (
                <Navigate to="/login" />
            )

    );*/

}
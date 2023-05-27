
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spiner from "../Pages/Spiner/Spiner";

const PrivetRouts = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    let location = useLocation();

    if (loading) {
        return <Spiner></Spiner>
    }

    if (user) {
        return children
    }
    return <Navigate to='/login' state={{from:location}}></Navigate>;
};

export default PrivetRouts;
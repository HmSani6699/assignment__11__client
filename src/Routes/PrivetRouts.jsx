
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Spiner from "../Pages/Spiner/Spiner";

const PrivetRouts = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Spiner></Spiner>
    }

    if (user) {
        return children
    }
    return <Navigate to='/login'></Navigate>;
};

export default PrivetRouts;
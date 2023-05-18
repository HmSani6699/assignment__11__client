import { Outlet } from "react-router-dom";
import Navber from "../Pages/Shared/Navbar/Navber";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
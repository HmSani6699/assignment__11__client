import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navber = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navLink = <>
        <li><Link className="mr-3" to='/'>Home</Link></li>
        <li><a>All Toy</a></li>
    </>

    return (
        <div className="navbar bg-base-100 border-b-2 pb-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Toy Marketplace</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                {user && <div className="avatar online mr-4 rounded-full ring ring-[#3d4451] ring-offset-base-100 ring-offset-2 ">
                    <div className="w-10">
                        <img title={user.displayName} className=" rounded-full" src={user.photoURL} />
                    </div>
                </div>}
                {
                    user ? <button className="btn" onClick={handleLogOut}>Log Out</button>:
                        <Link className="btn " to='/login'>Log in</Link>
                }
            </div>
        </div>
    );
};

export default Navber;
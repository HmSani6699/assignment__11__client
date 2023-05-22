import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import logo from '../../../assets/logo_1.png';
import swal from 'sweetalert';


const Navber = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => { 
                swal("Sign Out", "Success full!", "success");
            })
            .catch(error => console.log(error))
    }

    const navLink = <>
        <li><Link className="mr-3 font-bold" to='/'>Home</Link></li>
        <li><Link className="mr-3 font-bold" to='/allToys'> All Toys</Link></li>
        {user && <>
            <li><Link className="mr-3 font-bold" to='/myToys'>My Toys</Link></li>
            <li><Link className="mr-3 font-bold" to='/addedToy'>Add A Toy</Link></li>
        </>}
        <li><Link className="mr-3 font-bold" to='./blog'>Blogs</Link></li>
    </>

    return (
        <div className="navbar bg-base-100 border-b-2 border-red-700 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <img className="w-20 h-20" src={logo} alt="" />
                <h2 className="text-3xl font-bold"><span className="text-orange-700">Toy</span> Car</h2>
            </div>
            <div className="navbar-end">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>

                {
                    user ? <button className="btn text-white bg-[#c2410c] btn-outline" onClick={handleLogOut}>Log Out</button> :
                        <Link className="btn text-white bg-[#c2410c] btn-outline " to='/login'>Log in</Link>
                }
                {user && <div className="avatar online ml-4 rounded-full ring ring-[#c2410c] ring-offset-base-100 ring-offset-2 ">
                    <div className="w-10">
                        <img title={user.displayName} className=" rounded-full" src={user.photoURL} />
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default Navber;
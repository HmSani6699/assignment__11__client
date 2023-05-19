import { Link } from "react-router-dom";
import { FaGithub } from 'react-icons/fa';
import iconGoogle from '../../assets/download (2).png'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {

    const { signIn ,googleLogin} = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

       signIn(email,password)
       .then(result=>{
        const user = result.user;
        console.log(user);
       })
       .catch(error=>console.log(error))
    }


    // Google log in 

    const handleGoogleLogin = ()=>{
        googleLogin()
    }

    return (
        <div className="hero min-h-screen bg-base-200 mt-14 mb-14">
            <div className="hero-content flex-col w-[400px] ">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className="text-3xl font-bold text-center">Login</h2>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn bg-orange-700" value="Log in" />
                            </div>
                        </form>
                        <p className="text-center mt-3 mb-3">Or Sign Up with</p>
                        <div className="flex items-center justify-center gap-4">
                            <button onClick={handleGoogleLogin}><img className="h-6 w-6" src={iconGoogle} alt="" /></button>
                            <button><FaGithub className="text-2xl"></FaGithub></button>
                        </div>
                        <p className="mt-3 text-center">Have an account? <Link className="text-orange-700 font-bold" to='/register'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
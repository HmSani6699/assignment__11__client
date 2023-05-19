import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {

    const { cretUser,profileUpdate } = useContext(AuthContext)

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        const user = {
            name, email, password, photo
        }
        console.log(user);

       

        cretUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                profileUpdate(name,photo)
                .then(()=>{})
                .catch(error=>console.log(error))
            })
            .catch(error => console.log(error))


    }

    return (
        <div className="hero min-h-screen bg-base-200 mt-14 mb-14">
            <div className="hero-content flex-col w-[400px] ">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className="text-3xl font-bold text-center">Sign up</h2>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                            </div>
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
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="text" name="photo" placeholder="photo url" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn bg-orange-700" value="Register" />
                            </div>
                        </form>
                        <p className="mt-3 text-center">Already have an account? <Link className="text-orange-700 font-bold" to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
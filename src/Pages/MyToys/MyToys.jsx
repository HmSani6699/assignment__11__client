import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyToys = () => {
    const {user} = useContext(AuthContext);
    console.log(user?.email);

    useEffect(()=>{
        fetch(`http://localhost:5000/toy?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    },[])
    return (
        <div>
            <h2>my toys page</h2>
        </div>
    );
};

export default MyToys;
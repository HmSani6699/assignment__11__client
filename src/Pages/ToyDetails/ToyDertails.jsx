import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ToyDertails = () => {

    const id =useParams();
    console.log(id.id);

    useEffect(()=>{
        fetch(`http://localhost:5000/addToy/${id.id}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    },[])

    return (
        <div>
            <h2>Toy details page</h2>
        </div>
    );
};

export default ToyDertails;
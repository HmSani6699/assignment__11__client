import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const AllToys = () => {
    const { user } = useContext(AuthContext)
    const [allToys, setAlltoys] = useState([]);
    const [toyDeails, setToyDeails] = useState({})

    useEffect(() => {
        fetch('http://localhost:5000/addToy')
            .then(res => res.json())
            .then(data => {
                setAlltoys(data.slice(0, 20));
            })
    }, []);


    const handleModal = (id) => {
        console.log(id);

        fetch(`http://localhost:5000/addToy/${id}`)
            .then(res => res.json())
            .then(data => {
                setToyDeails(data);
            })
    }

    // console.log(allToys);

    return (
        <div>
            <h2 className="text-center text-5xl font-bold mt-10">All Toys {allToys.length}</h2>

            <div className="overflow-x-auto mb-20 mt-10">
                <table className="table w-full">
                    {/* head*/}
                    <thead>
                        <tr className="text-center">
                            <th>No</th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToys.map((toy, i) => <tr className="text-center" key={toy._id}>
                                <th>{i + 1}</th>
                                <td>{toy.Seller}</td>
                                <td>Quality Control Specialist</td>
                                <td>{toy.category}</td>
                                <td>{toy.price}</td>
                                {/* <td><Link to={`/addToy/${toy._id}`}><button className="btn text-white bg-[#c2410c] btn-outline">View Details</button> </Link></td> */}
                                <td>
                                    {user ?
                                        <label htmlFor="my-modal-3" onClick={() => handleModal(toy._id)} className="btn text-white bg-[#c2410c] btn-outline">View Details</label>:<Link to='/login'><button className="btn text-white bg-[#c2410c] btn-outline">View Details</button></Link>
                                    }
                                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                                    <div className="modal">
                                        <div className="modal-box relative h-[500px] w-[600px] ">
                                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                            <div className="flex items-center justify-center ">
                                                <img className="h-[200px] mb-4" src={toyDeails?.photo} alt="img nai" />
                                            </div>
                                            <h3 className="font-bold">{toyDeails?.name}</h3>
                                            <p><span className="font-bold">Sealler name</span> : {toyDeails.seller}</p>
                                            <p><span className="font-bold">Seller email</span> : {toyDeails?.email}</p>
                                            <p><span className="font-bold">Price</span> : {toyDeails?.price}</p>
                                            <p><span className="font-bold">Rating</span> : {toyDeails?.rating}</p>
                                            <p><span className="font-bold">Available quantity</span> : {toyDeails?.quantity}</p>
                                            <p><span className="font-bold w-[100px]">Detail description</span> : {toyDeails?.details}</p>

                                        </div>
                                    </div>
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;
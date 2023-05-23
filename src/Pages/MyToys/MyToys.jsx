import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaPenNib, FaTrashAlt } from 'react-icons/fa';

const MyToys = () => {
    const { user } = useContext(AuthContext);

    const [allToys, setAllToys] = useState([])

    const [id, setId] = useState('')

    useEffect(() => {
        fetch(`http://localhost:5000/toy?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setAllToys(data);
            })
    }, [])

    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.price.value;
        const details = form.details.value;

        console.log(price, quantity, details);


        // fetch(`http://localhost:5000/addToy/${id}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //     })
    }


    const handleDelete = id => {
        fetch(`http://localhost:5000/addToy/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Delete Success !!')
                    const newfood = allToys.filter(food => food._id !== id);
                    setAllToys(newfood)
                }
            })
    }


    return (
        <div>
            <h2 className="text-center text-5xl font-bold mt-10">My Toys {allToys.length}</h2>

            <div className="overflow-x-auto mb-20 mt-10">
                <table className="table w-full">
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
                                {/* {setId(toy._id)} */}
                                <th>{i + 1}</th>
                                <td>{toy.Seller}</td>
                                <td>Quality Control Specialist</td>
                                <td>{toy.category}</td>
                                <td>{toy.price}</td>
                                <td>
                                    <div>
                                        <label htmlFor="my-modal-3" className="btn mb-2 border-red-700 border-2 btn-outline"><FaPenNib></FaPenNib></label>
                                        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                                        <div className="modal">
                                            <div className="modal-box relative h-[500px] w-[600px] ">
                                                <label htmlFor="my-modal-3" className="btn bg-red-700 btn-sm btn-circle absolute right-2 top-2">✕</label>
                                                <form onSubmit={handleUpdate} className="pt-12">
                                                    <div className="grid lg:grid-cols-2 gap-4">
                                                        <div className="form-control mb-4">
                                                            <label className="label">
                                                                <span className="label-text">Price</span>
                                                            </label>
                                                            <input type="text" name="price" placeholder="email" className="input input-bordered" />
                                                        </div>
                                                        <div className="form-control">
                                                            <label className="label">
                                                                <span className="label-text">Quantity</span>
                                                            </label>
                                                            <input type="text" name="quantity" placeholder="password" className="input input-bordered" />
                                                        </div>
                                                    </div>
                                                    <div className="form-control ">
                                                        <label className="label">
                                                            <span className="label-text">Detail description</span>
                                                        </label>
                                                        <textarea placeholder="Detail description" name="details" className="  textarea textarea-bordered textarea-lg w-full " ></textarea>
                                                    </div>
                                                    <div className="form-control mt-6">
                                                        <input type="submit" className="btn bg-orange-700" value="Update" />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <button onClick={()=>handleDelete(toy._id)} className="btn btn-outline  border-red-700 border-2 text-red-600 "><FaTrashAlt></FaTrashAlt> </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;
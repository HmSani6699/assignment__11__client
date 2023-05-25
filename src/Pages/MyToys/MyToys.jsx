import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaPenNib, FaTrashAlt } from 'react-icons/fa';
import swal from 'sweetalert'
import { Link } from "react-router-dom";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [allToys, setAllToys] = useState([]);
    const [activeTab, setActiveTab] = useState(1);



    useEffect(() => {
        fetch(`http://localhost:5000/toy?email=${user?.email}&price=${activeTab}`)
            .then(res => res.json())
            .then(data => {
                setAllToys(data);
            })
    }, [activeTab])
    


    const handleDelete = id => {
        fetch(`http://localhost:5000/addToy/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                swal({
                    title: "Are you sure?",
                    text: "Once deleted, you will not be able to recover this Toy car!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                    .then((willDelete) => {
                        if (willDelete) {
                            swal("Poof! Your imaginary file has been deleted!", {
                                icon: "success",

                            });
                            if (data.deletedCount) {
                                const newfood = allToys.filter(food => food._id !== id);
                                setAllToys(newfood)
                            }
                        } else {
                            swal("Your imaginary file is safe!");
                        }
                    });
            })
    }

    // console.log(allToys);


    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
      };

    return (
        <div>
            <h2 className="text-center text-5xl font-bold mt-10">My Toys {allToys.length}</h2>

            <div className="fle mt-10 mb-10">
                <div
                    onClick={() => handleTabClick(1)}
                    className={`tab  tab2 remote ${activeTab == 1 ? " bg-red-700 text-white" : ""
                        }`}
                >
                    Descending 
                </div>
                <div
                    onClick={() => handleTabClick(-1)}
                    className={`tab  tab2 Offline${activeTab == -1 ? "  bg-red-700 text-white" : ""
                        }`}
                >
                  Ascending 
                </div>
            </div>

            <div className="overflow-x-auto mb-20 mt-10">
                <table className="table w-full">
                    <thead>
                        <tr className="text-center">
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToys.map((toy, i) => <tr className="text-center" key={toy._id}>
                                <th>{i + 1}</th>
                                <th><div className="avatar">
                                    <div className="w-24 rounded-xl">
                                        <img src={toy.photo} />
                                    </div>
                                </div></th>
                                <td className="text-left">
                                    <p className="text-2xl font-semibold">{toy.Seller}</p>
                                    <p><span className="font-bold">Email</span> : {toy.email}</p>
                                    <p><span className="font-bold">Rating</span> : {toy.rating}</p>
                                </td>
                                <td>{toy.category}</td>
                                <td>{toy.quantity}</td>
                                <td>${toy.price}</td>
                                <td>
                                    <Link to={`/update/${toy._id}`}><button className="btn btn-outline  border-2 mb-2"><FaPenNib></FaPenNib> </button></Link>
                                    <br />
                                    <button onClick={() => handleDelete(toy._id)} className="btn btn-outline  border-red-700 border-2 text-red-600 "><FaTrashAlt></FaTrashAlt> </button>
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
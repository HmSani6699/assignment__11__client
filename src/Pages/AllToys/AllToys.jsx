import { useEffect, useState } from "react";

const AllToys = () => {

    const [allToys, setAlltoys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addToy')
            .then(res => res.json())
            .then(data => {
                setAlltoys(data.slice(0,20));
            })
    }, [])


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
                            allToys.map((toy,i) => <tr className="text-center" key={toy._id}>
                                <th>{i+1}</th>
                                <td>{toy.Seller}</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                                <td>Blue</td>
                                <td><button className="btn text-white bg-[#c2410c] btn-outline">View Details</button> </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;
import { useEffect, useState } from "react";

const AllToys = () => {

    const [allToys, setAlltoys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addToy')
            .then(res => res.json())
            .then(data => {
                setAlltoys(data);
            })
    }, [])


    return (
        <div>
            <h2>All Toys {allToys.length}</h2>

            <div className="overflow-x-auto">
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
                        {/* row 1 */}


                        {
                            allToys.map((toy,i) => <tr className="text-center" key={toy._id}>
                                <th>{i+1}</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                                <td>Blue</td>
                                <td> <button className="btn">View Details</button> </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;
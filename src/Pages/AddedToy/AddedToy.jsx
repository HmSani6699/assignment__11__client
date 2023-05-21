

const AddedToy = () => {
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const Seller = form.Seller.value;
        const name = form.name.value;
        const email = form.email.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;

        const user = {
            Seller,
            name,
            email,
            category,
            photo,
            price,
            rating,
            quantity,
            details
        }
        console.log(user);

        fetch('http://localhost:5000/addToys',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200 mt-14 mb-14">
            <div className="hero-content flex-col  ">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className="text-3xl font-bold text-center">Add A Toy Pages</h2>
                        <form onSubmit={handleRegister}>
                            <div className="lg:grid grid-cols-2 gap-4 lg:mt-4 ">
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" className="w-full input input-bordered" />
                                </div>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Seller Name</span>
                                    </label>
                                    <input type="text" name="Seller" placeholder="Seller Name" className="w-full input input-bordered" />
                                </div>
                            </div>

                            <div className="lg:grid grid-cols-2 gap-4 lg:mt-4 ">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Email</span>
                                    </label>
                                    <input type="text" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Sub category</span>
                                    </label>
                                    <input type="text" name="category" placeholder="category" className="input input-bordered" />
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text mt-4">Photo url</span>
                                </label>
                                <input type="text" name="photo" placeholder="photo url" className="w-full input input-bordered" />
                            </div>

                            <div className="lg:grid grid-cols-3 gap-4 lg:mt-4 ">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name="price" placeholder="price" className="w-full input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input type="text" name="rating" placeholder="Rating" className="w-full input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Available Quantity</span>
                                    </label>
                                    <input type="text" name="quantity" placeholder="quantity" className="w-full input input-bordered" />
                                </div>
                            </div>

                            <div className="form-control lg:mt-4">
                                <label className="label">
                                    <span className="label-text">Detail description</span>
                                </label>
                                <textarea placeholder="Detail description" name="details" className="  textarea textarea-bordered textarea-lg w-full " ></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn bg-orange-700" value="Add A Toy" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddedToy;
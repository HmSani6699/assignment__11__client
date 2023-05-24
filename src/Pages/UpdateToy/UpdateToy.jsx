import { useLoaderData } from "react-router-dom";

const UpdateToy = () => {

    const toy = useLoaderData()
    console.log(toy);

    const handleUpdate = (event, id) => {
        event.preventDefault();
        event.stopPropagation()
        const form = event.target;
        const price = form.price.value;
        const quantity = form.price.value;
        const details = form.details.value;

        console.log(price, quantity, details, id);
    }
    return (
        <div>
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
    );
};

export default UpdateToy;
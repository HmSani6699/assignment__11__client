import swal from 'sweetalert';
import UseTitle from '../../Hoks/useTitle';

const FidBack = () => {
    UseTitle('FeedBack')

    const handleSend=()=>{
        swal("Feedback send!", "Success full!", "success");
    }

    return (
        <div className="hero min-h-screen bg-base-200 mt-14 mb-14">
            <div className="hero-content flex-col  ">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body w-full lg:w-[700px]">
                        <h2 className="text-3xl font-bold text-center text-orange-700">Feedback please</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text mt-4">Email</span>
                            </label>
                            <input type="text" name="photo" placeholder="email" className="w-full input input-bordered" />
                        </div>

                        <div className="form-control lg:mt-4">
                            <label className="label">
                                <span className="label-text">Detail description</span>
                            </label>
                            <textarea placeholder="Detail description" name="details" className="  textarea textarea-bordered textarea-lg w-full " ></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <input onClick={handleSend} type="submit" className="btn  text-white bg-[#c2410c]" value="Send" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FidBack;
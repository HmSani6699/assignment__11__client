
import banner from '../../../assets/bn4.avif'

const Banner = () => {
    return (
        <div className='rounded-xl mt-20'>
            <div className="hero min-h-screen rounded-xl" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Toy car</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn  text-white bg-[#c2410c]">Get Started</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
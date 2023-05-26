import { Link } from 'react-router-dom';
import error from '../../assets/download (1).png'
import UseTitle from '../../Hoks/useTitle';
const Error = () => {
    UseTitle('Error')
    return (
        <div className='mt-16 flex items-center justify-center '>
            <div className='w-[400px]'>
                <img className='w-full' src={error} alt="" />
                <div className='text-center'>
                    <Link to='/'> <button className="btn  text-white bg-[#c2410c]">Back to Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Error;
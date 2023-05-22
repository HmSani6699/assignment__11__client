import car1 from '../../assets/carImg_1.jpg'
import car2 from '../../assets/carImg_2.jpg'
import car3 from '../../assets/carImg_3.jpg'
import car4 from '../../assets/carImg_4.jpg'
import car5 from '../../assets/carImg_5.jpg'
import car9 from '../../assets/carImg_9.jpg'
import car7 from '../../assets/carImg_7.jpg'
import car8 from '../../assets/carImg_8.jpg'

import './Gallery.css'
const Gallery = () => {
    return (
        <div className='mt-20'>
            <h2 className='text-5xl font-bold text-center mb-12'>Toy car <span className="text-orange-700">Gallery</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6  mb-14 '>
                <div className='gallery'>
                    <img className='h-[200px] w-full' src={car2} alt="" />
                    <br />
                    <img className='h-[200px] w-full' src={car8} alt="" />
                    <br />
                    <img className='h-[225px] w-full' src={car1} alt="" />
                </div>
                <div>
                    <img className='h-[400px] w-full' src={car3} alt="" />
                    <br />
                    <img className='h-[250px] w-full' src={car4} alt="" />
                </div>
                <div>
                    <img className='h-[250px] w-full' src={car5} alt="" />
                    <br />
                    <img className='h-[400px] w-full' src={car9} alt="" />
                </div>
                <div>
                    <img className='h-[200px] w-full' src={car1} alt="" />
                    <br />
                    <img className='h-[200px] w-full' src={car7} alt="" />
                    <br />
                    <img className='h-[225px] w-full' src={car5} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
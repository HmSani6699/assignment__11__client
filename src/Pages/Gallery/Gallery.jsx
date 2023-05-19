import car1 from '../../assets/carImg_1.jpg'
import car2 from '../../assets/carImg_2.jpg'
import car3 from '../../assets/carImg_3.jpg'
import car4 from '../../assets/carImg_4.jpg'
import car5 from '../../assets/carImg_5.jpg'
import car9 from '../../assets/carImg_9.jpg'
import car7 from '../../assets/carImg_7.jpg'
import car8 from '../../assets/carImg_8.jpg'
const Gallery = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-14 mb-14 gap-y-4'>
            <div>
                <img className='h-[250px] w-full' src={car1} alt="" />
                <br />
                <img className='h-[250px] w-full' src={car2} alt="" />
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
                <img className='h-[250px] w-full' src={car7} alt="" />
                <br />
                <img className='h-[250px] w-full' src={car8} alt="" />
            </div>
        </div>
    );
};

export default Gallery;
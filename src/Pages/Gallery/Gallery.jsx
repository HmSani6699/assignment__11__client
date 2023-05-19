import img from '../../assets/benner.jpg'
const Gallery = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-14 mb-14 gap-y-4'>
            <div>
                <img className='h-[250px]' src={img} alt="" />
                <br />
                <img className='h-[250px]' src={img} alt="" />
            </div>
            <div>
                <img className='h-[400px]' src={img} alt="" />
                <br />
                <img className='h-[250px]' src={img} alt="" />
            </div>
            <div>
                <img className='h-[250px]' src={img} alt="" />
                <br />
                <img className='h-[400px]' src={img} alt="" />
            </div>
            <div>
                <img className='h-[250px]' src={img} alt="" />
                <br />
                <img className='h-[250px]' src={img} alt="" />
            </div>
        </div>
    );
};

export default Gallery;
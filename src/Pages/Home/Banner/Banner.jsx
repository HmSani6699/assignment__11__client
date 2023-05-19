
import banner from '../../../assets/images.jpg'


const Banner = () => {
    return (
        <div>
            <div className="carousel h-[500px] w-full rounded-xl mt-12">
                <div id="item1" className="carousel-item w-full">
                    <img src={banner} className="w-full rounded-xl" />
                </div>
                <div id="item2" className="carousel-item w-full rounded-xl">
                    <img src={banner} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full rounded-xl">
                    <img src={banner} className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full rounded-xl">
                    <img src={banner} className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;
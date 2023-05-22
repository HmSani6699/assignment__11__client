import FidBack from "../../FidBack/FidBack";
import Gallery from "../../Gallery/Gallery";
import ShopCategory from "../../ShopCategory/ShopCategory";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopCategory></ShopCategory>
            <FidBack></FidBack>
        </div>
    );
};

export default Home;
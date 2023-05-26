import UseTitle from "../../../Hoks/useTitle";
import CustomerRevio from "../../CustomerRevio/CustomerRevio";
import FidBack from "../../FidBack/FidBack";
import Gallery from "../../Gallery/Gallery";
import ShopCategory from "../../ShopCategory/ShopCategory";
import Banner from "../Banner/Banner";

const Home = () => {
    UseTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopCategory></ShopCategory>
            <CustomerRevio></CustomerRevio>
            <FidBack></FidBack>
        </div>
    );
};

export default Home;
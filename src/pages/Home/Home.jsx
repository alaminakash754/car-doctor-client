import Banner from "./Banner/Banner";
import Products from "./Products/Products";
import About from "./about/About";
import MoreServices from "./moreServices/MoreServices";
import Services from "./services/Services";
import Teams from "./teams/Teams";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <MoreServices></MoreServices>
            <Products></Products>
            <Teams></Teams>
        </div>
    );
};

export default Home;
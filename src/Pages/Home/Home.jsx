import { useLoaderData } from "react-router-dom";
import Catagories from "../../Components/Catagories/Catagories";
import Banner from "../../Components/Header/Banner/Banner";

const Home = () => {

    const catagories = useLoaderData()
    // console.log(catagories);
    return (
        <div>
           <Banner></Banner>
           <Catagories catagories={catagories}></Catagories>
        </div>
    );
};

export default Home;
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="max-w-[1419px]">
         <Navbar></Navbar>
         <div className="py-10">
         <Outlet></Outlet>
         </div>
        </div>
    );
};

export default MainLayout;
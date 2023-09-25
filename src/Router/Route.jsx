import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";

const myCreatedRoute = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path:"/",
                element: <Home></Home>,
                loader: ()=> fetch("/public/data.json")
            },
            {
                path:"/Donation",
                element: <Donation></Donation>
            },
            
            {
                path:"/Statistics",
                element: <Statistics></Statistics>
            },
            
        ]
    }
])

export default myCreatedRoute;
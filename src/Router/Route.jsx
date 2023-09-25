import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Category from "../Pages/Category/Category";

const myCreatedRoute = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
            {
                path: "/catagories/:id",
                element:<Category></Category>,
                loader: ()=> fetch("/data.json")
            }
            
        ]
    }
])

export default myCreatedRoute;
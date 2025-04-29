import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

const router = createBrowserRouter([{
    path:'/',
    Component:Root,
    children:[
        {
            path:'/',
            Component:Home
        },
        {
            path:'login',
            Component:Login    
        },
        {
            path:'signup',
            Component:SignUp
        }
    ]
}])

export default router;
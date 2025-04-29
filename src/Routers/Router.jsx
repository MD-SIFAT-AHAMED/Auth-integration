import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Orders from "../Pages/Orders";
import Dashboard from "../Pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Pages/Profile";

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
            path:'signUp',
            Component:SignUp
        },
        {
            path:'/order',
            element: <PrivateRoute>
                        <Orders/>
                    </PrivateRoute>
           
        },
        {
            path:'/dashboard',
            element: <PrivateRoute>
                        <Dashboard/>
                    </PrivateRoute>
        },
        {
            path:'/profile',
            element: <PrivateRoute>
                        <Profile/>
                    </PrivateRoute>
        }
        
    ]
}])

export default router;
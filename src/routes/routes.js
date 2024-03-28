import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../components/Home";
import MyBookings from "../components/myBookings";
import Login from "../auth/login";
import Signup from "../auth/signUp";
import PrivateRoute from "./protected";



const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [

            {
                path: '/',
                element: <Home />
            },
            {
                path: '/mybookings',
                element: <PrivateRoute><MyBookings /></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            }
        ]
    }
]);

export default Routes
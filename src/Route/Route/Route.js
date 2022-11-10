import { createBrowserRouter } from "react-router-dom";
import AddServices from "../../Components/Pages/AddServices/AddServices";
import Blog from "../../Components/Pages/Blog/Blog";
import Home from "../../Components/Pages/Home/Home";
import Login from "../../Components/Pages/Login/Login";
import MyReviews from "../../Components/Pages/MyReviews/MyReviews";
import ServiceDetails from "../../Components/Pages/ServiceDetails/ServiceDetails/ServiceDetails";
import AllServices from "../../Components/Pages/Services/AllServices/AllServices";
import Services from "../../Components/Pages/Services/Services/Services";
import Main from "../../Layout/Main/Main";
import SignUp from './../../Components/Pages/SignUp/SignUp';
import PrivateRoute from './../PrivateRoute/PrivateRoute';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/allServices',
                element: <AllServices></AllServices>
            },
            {
                path: '/addService',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            },
            {
                path: '/service/:id', 
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),  
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/reviews', 
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/login',   
                element:<Login></Login>
            },
            {
                path: '/signup',   
                element:<SignUp></SignUp>
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            }
        ]
        
    }
])
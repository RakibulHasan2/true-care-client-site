import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Components/Pages/Blog/Blog";
import Home from "../../Components/Pages/Home/Home";
import Login from "../../Components/Pages/Login/Login";
import MyReviews from "../../Components/Pages/MyReviews/MyReviews";
import ServiceDetails from "../../Components/Pages/ServiceDetails/ServiceDetails/ServiceDetails";
import Services from "../../Components/Pages/Services/Services/Services";
import Main from "../../Layout/Main/Main";
import SignUp from './../../Components/Pages/SignUp/SignUp';

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
                path: '/service',
                element: <Services></Services>
            },
            {
                path: '/service/:id', 
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),  
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/reviews', 
                element: <MyReviews></MyReviews>
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
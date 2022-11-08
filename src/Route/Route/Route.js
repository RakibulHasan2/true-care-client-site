import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Components/Pages/Blog/Blog";
import Home from "../../Components/Pages/Home/Home";
import Main from "../../Layout/Main/Main";

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
                path: '/login',
                element: 
                <h1>hello</h1>
            },
            {
                path: '/signup',
                element: 
                <h1>hello</h1>
            },
            {
                path: '/checkout/:id',
                element: 
                <h1>hello</h1>
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            }
        ]
        
    }
])
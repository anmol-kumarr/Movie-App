import Details from "../pages/details";
import Movie from "../pages/movies";
import Search from "../pages/search";
import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/home.jsx'
import App from '../App'
// const { createBrowserRouter } = require("react-router-dom");
// const { default: Home } = require("../pages/home");
// const { default: App } = require("../App");

const routes=createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/search',
                element:<Search></Search>
            },
            {
                path:'/details',
                element:<Details></Details>
            },
            {
                path:'/movies',
                element:<Movie></Movie>
            }
        ]
    }
])
export default routes
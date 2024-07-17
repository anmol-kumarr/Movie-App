import Details from "../pages/details";
import Movie from "../pages/movies";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../pages/home");
const { default: App } = require("../App");

const routes=createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                path:'',
                element:<Home></Home>
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
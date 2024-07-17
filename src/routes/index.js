import Details from "../pages/details";

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
            }
        ]
    }
])
export default routes
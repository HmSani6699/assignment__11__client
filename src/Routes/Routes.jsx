import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Pages/ErrorPages/Error";
import AddedToy from "../Pages/AddedToy/AddedToy";
import PrivetRouts from "./PrivetRouts";



const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main> ,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/addedToy',
        element:<PrivetRouts><AddedToy></AddedToy></PrivetRouts>
      }
    ]
  },
  {
    path:'*',
    element:<Error></Error>
  }
]);

export default router;
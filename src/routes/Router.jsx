import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../loayouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/SignUp";
import Checkout from "../pages/checkout/Checkout";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
       {
        path:'/login',
        element: <Login></Login>
       },
       {
        path: '/signup',
        element: <SignUp></SignUp>
       },
       {
        path: '/bookings',
        element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
       },
       {
        path:'checkout/:id',
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
       loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
       }
      ]
    },
  ]);

  export default router;
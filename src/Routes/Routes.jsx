import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import RouteError from "../pages/RouteError/RouteError";
import CollegeDetails from "../pages/Home/CollegeDetails/CollegeDetails";
import Colleges from "../pages/Colleges/Colleges";
import AboutCollege from "../pages/AboutCollege/AboutCollege";
import Admission from "../pages/Admission/Admission";
import CollegeInfo from "../pages/ColllegeInfo/CollegeInfo";
import MyCollege from "../pages/MyCollege/MyCollege";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <RouteError />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allBookings/:id",
        element: <CollegeDetails />,
        loader: ({ params }) =>
          fetch(`https://school-booking-facilities-server.vercel.app/allBookings/${params.id}`),
      },
      {
        path: "/colleges",
        element: <Colleges />
      },
      {
        path:"/colleges/:id",
        element:<AboutCollege/>,
        loader:({params})=>fetch(`https://school-booking-facilities-server.vercel.app/allBookings/${params.id}`)
      },
      {
        path:"/admission",
        element:<Admission/>
      },
      {
        path:"/admission/:id",
        element:<CollegeInfo/>,
        loader:({params})=>fetch(`https://school-booking-facilities-server.vercel.app/allBookings/${params.id}`)
      },
      {
        path:"/myCollege/:id",
        element:<MyCollege/>,
        loader:({params})=>fetch(`https://school-booking-facilities-server.vercel.app/allBookings/${params.id}`)
      }
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
]);

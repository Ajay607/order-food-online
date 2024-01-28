import React from "react";
import { createRoot } from 'react-dom/client';
import NavBar from "./component/header/NavBar";
import "./index.css"
import FoodCard from "./component/product/FoodCard";
import Foods from "./component/product/Foods";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import About from "./component/about/About";
import Error from "./component/error/Error";
import Contact from "./component/contact/Contact";
import RestaurentMenu from "./component/product/RestaurentMenu";

const AppLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/", // show path for routing
    element: <AppLayout />, // show component for particular path
    errorElement: <Error />, // show error component for path is different
    children: [
      // show children component for routing
      {
        path: "/",
        element: <Foods />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "restaurant/:resId",
        element: <RestaurentMenu />
      }
    ],
  },
]);

export default AppLayout;

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />)


import React from "react";
import { createRoot } from 'react-dom/client';
import NavBar from "./component/header/NavBar";
import "./index.css"
import Food from "./component/product/Foods";
import FoodCard from "./component/product/FoodCard";
import Foods from "./component/product/Foods";


const AppLayout = () => {
    return (
        <div>
            <NavBar />
            <Foods />
        </div>
    )
}

export default AppLayout;

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />)


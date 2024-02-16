import { useEffect, useState } from "react"
import { REST_MENU_API } from "./constants";

const useRestaurantMenu = (resId) =>{
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(
                `${REST_MENU_API}${resId}`
            );

            const json = await data.json();
            setResInfo(json?.data);
        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    };


    return resInfo
}

export default useRestaurantMenu
import { useEffect, useState } from "react";
import restaurantList from "../../utils/mockData";
import FoodCard from "./FoodCard";
import { dataRes } from "../../../dummyData";

const Foods = () => {
    const [resData, setResData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    let [searchQuery, setSearchQuery] = useState("");
    console.log("filteredData",resData)
    console.log("filteredData",filteredData)

    
    const filterRes = () => {
        const restaurantListData = resData.filter((data) => data?.info?.avgRating > 4.2);
        setFilteredData(restaurantListData)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );


        const json = await data.json();

        setResData(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setFilteredData( json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // if API will not work this will be used
        // setResData(dataRes)
   
    };


    const searchFuch = () => {
        const filteredData = resData?.filter((data) => {
            return data?.info?.name?.toLowerCase().includes(searchQuery?.toLowerCase())
        })
        setFilteredData(filteredData)
    }

    return (
        filteredData?.length === 0 ? (<>Loading</>) : (<div className="main-container">
            <div class="filter">
                <button className="filter-btn" onClick={filterRes}>Top Rated Restaurant</button>
                <div>
                    <input type="search"
                        value={searchQuery}
                        onChange={(e) => { setSearchQuery(e.target.value) }}
                    />
                    <button onClick={searchFuch}>search</button>
                </div>
            </div>
            <div class="res-container">
                {filteredData?.map((restaurant) => {
                    console.log("resttttt", restaurant)
                    return <FoodCard key={restaurant?.data?.id} {...restaurant.info} />;
                })}
            </div>
        </div>)
    )
}

export default Foods
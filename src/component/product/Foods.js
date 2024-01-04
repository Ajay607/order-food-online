import  restaurantList  from "../../utils/mockData";
import FoodCard from "./FoodCard";

const Foods = () => {
    return (
        <div className="main-container">
            <div class="res-container">
                {restaurantList.map((restaurant) => {
                    return <FoodCard key={restaurant.data.id} {...restaurant.data} />;
                })}
            </div>
        </div>
    )
}

export default Foods
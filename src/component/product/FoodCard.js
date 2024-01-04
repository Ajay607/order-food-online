import React from 'react'
import { CDN_URL } from '../../utils/constants'

const FoodCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
}) => {
    return (
        <div class="res-card">
            <img
                className="food-image"
                src={
                    `${CDN_URL}` +
                    cloudinaryImageId
                }
            />
            <h3>{name}</h3>
            <h2>{name}</h2>
            <h4>{cuisines?.join(", ")}</h4>
            <h4>{area}</h4>
            <span>
                <h4><i class="fa-solid fa-star"></i>{avgRating}</h4>
                <h4>{lastMileTravelString}</h4>
                <h4>{costForTwoString}</h4>
            </span>
        </div>
    )
}

export default FoodCard
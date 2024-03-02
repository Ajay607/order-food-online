import React from 'react'
import { CDN_URL } from '../../utils/constants'
import { Link } from 'react-router-dom'

const FoodCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
    id
}) => {
    return (
        <Link class="res-card" to={`restaurant/${id}`}>
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
        </Link>
    )
}

// Higher order component

// input - FoodCard => FoodCardPromoted

export const withPromotedLabel = (FoodCard) => {
    return (
        { cloudinaryImageId,
            name,
            cuisines,
            area,
            lastMileTravelString,
            costForTwoString,
            avgRating,
            id
        }
    ) => {
        return (
            <a className='res-card' style={{ "position": "relative" }}>
                <label style={{ "position": "absolute", "right": 0, "background": "rgba(255,255,255, 0.6)" }}>Promoted</label>
                <FoodCard
                    cloudinaryImageId={cloudinaryImageId}
                    name={name}
                    cuisines={cuisines}
                    area={area}
                    lastMileTravelString={lastMileTravelString}
                    costForTwoString={costForTwoString}
                    avgRating={avgRating}
                    id={id}
                />
            </a>
        )
    }
}

export default FoodCard
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { REST_MENU_API } from "../../utils/constants";
import useRestaurantMenu from "../../utils/useRestaurentMenu";

const RestaurentMenu = () => {
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);
    console.log("resInfo",resInfo)

    if (resInfo === null) {
        return <>loading</>;
    }

    const innnn = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
    console.log('innnninnnn',innnn)

    const menuInfo = resInfo?.cards[0]?.card?.card?.info;

    if (!menuInfo) {
        return <>Menu information not available</>;
    }

    const { name, cuisines, costForTwoMessage } = menuInfo;

    const cardInfo = resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card;
    const { itemCards } = cardInfo;

    return (
        <div>
            <h2>{name}</h2>
            <h4>{cuisines.join("")}</h4>
            <h3>{costForTwoMessage}</h3>
            <ul>
                {
                    itemCards.map((data) => {
                        return (
                            <li key={data.card.info.id}>
                                <span> {data.card.info.name}</span>
                                <span> {data.card.info.price}</span>
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    );
};

export default RestaurentMenu;

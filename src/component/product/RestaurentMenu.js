import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { REST_MENU_API } from "../../utils/constants";

const RestaurentMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
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

    if (resInfo === null) {
        return <>loading</>;
    }

    const menuInfo = resInfo?.cards[0]?.card?.card?.info;

    if (!menuInfo) {
        return <>Menu information not available</>;
    }

    const { name, cuisines, costForTwoMessage } = menuInfo;

    const cardInfo = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card;
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

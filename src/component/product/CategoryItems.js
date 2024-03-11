// CategoryItems.js
import React from 'react';
import { IMG_CDN_URL } from '../../utils/constants';
// import { IMG_CDN_URL } from '../utils/mockData';
// import { addItems } from '../utils/redux/cartSlice';
// import { useDispatch } from 'react-redux';

const CategoryItems = ({ items }) => {
    //   const dispatch = useDispatch();


    const handleClick = (item) => {
        // dispatch(addItems(item));
    }
    return (
        <ul className="category_item_container">
            {items.map((item) => {
                console.log('itemsss', items);
                return (
                    <li key={item?.card?.info?.id} >
                        <div className='content'>
                            <h4>{item?.card?.info?.name}</h4>
                            <span>₹ {Math.floor(item?.card?.info?.price / 100)} </span>
                        </div>
                        <div className="food_img">
                            <img
                                src={IMG_CDN_URL + item?.card?.info?.imageId}
                                srcSet={IMG_CDN_URL + item?.card?.info?.imageId}
                                alt={item?.card?.info?.name}
                            />
                            <button onClick={() => handleClick(item)}>Add +</button>
                        </div>

                    </li>
                )
            })}
        </ul>
    );
};

export default CategoryItems;
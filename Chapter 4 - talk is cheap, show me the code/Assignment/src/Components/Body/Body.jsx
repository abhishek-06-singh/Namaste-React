import React from 'react'
import "./body.css"
import data from "../data/Data"
import RestaurantCard from './RestaurantCard'
const Body = () => {
    return(
        <div className="restaurant-list">
      {data.map((restaurant) => {
        return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
       
      })}
    </div>
    )
}
export default Body
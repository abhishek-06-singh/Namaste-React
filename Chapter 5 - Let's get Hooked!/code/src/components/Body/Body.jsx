import { useState } from "react"
import "./body.css"
import Res from "../../assets/data"
import RestaurantCard from './RestaurantCard'

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(Res)
  return (
    <div className="body-">
      <button className="button-57"
        onClick={() => {
          const filterlist = listOfRestaurant.filter(
            (Res) => Res.data.avgRating > 4
          )
          setListOfRestaurant(filterlist);
        }}>
        <span className="text">
        </span>
        <span>
          Restaurants with 4+ Ratings
        </span>
        Click
      </button>
      <button className="button-57"
        onClick={() => {
          setListOfRestaurant(Res);
        }}>
        <span className="text">
        </span>
        <span>
          All Restaurants
        </span>
        Click
      </button>
      <div className="restaurant-list">
        {listOfRestaurant.map((restaurant) => {
          return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
        })}
      </div>
    </div>
  )
}

export default Body

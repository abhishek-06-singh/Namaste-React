
import { useState } from "react"
import "./body.css"
import Res from "../../assets/data"
import RestaurantCard from './RestaurantCard'

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(Res)
    return(
        <div className="body-">
          <button className="button-89" onClick={()=>{
      console.log('clicked')
    }}>
        Click to Sort 
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

import "./body.css"
import Res from "../../assets/data"
import RestaurantCard from './RestaurantCard'
import Button from "../Button/Button"
const Body = () => {
    return(
        <div className="body-">
          <Button />
          <div className="restaurant-list">
         {Res.map((restaurant) => {
        return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
      })}
          </div>
        </div>
    
    )
}
export default Body
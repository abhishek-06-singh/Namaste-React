
import "./body.css"
import Res from "../../assets/data"
import RestaurantCard from './RestaurantCard'
const Body = () => {
    return(
        <div className="restaurant-list">
      {Res.map((restaurant) => {
        return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
       
      })}
    </div>
    )
}
export default Body
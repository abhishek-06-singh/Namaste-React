
import "./body.css"
import Res from "../../assets/data"
import RestaurantCard from './RestaurantCard'
import Button from "../Button/Button"
const Body = () => {
    return(
        <div className="restaurant-list">
            <Button />
      {Res.map((restaurant) => {
        return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
       
      })}
    </div>
    )
}
export default Body
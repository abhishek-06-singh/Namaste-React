import './body.css'
import { BOX_IMG } from '../../assets/utils'
function RestaurantCard({ 
    cloudinaryImageId,
    name, 
    cuisines, 
    area,
    lastMileTravelString, 
    costForTwoString, 
    avgRating,
}
   
) {
    return (
        <div className="card">
            <img
                src={BOX_IMG +
                    cloudinaryImageId} />
            <h2>{name}</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{area}</h4>
            <span>
                <h4>{avgRating}</h4>
                <h4>{lastMileTravelString}</h4>
                <h4>{costForTwoString}</h4>
            </span>
        </div>
    )
}

export default RestaurantCard
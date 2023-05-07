
import img from "./img.png"
import userIcon from "./user.jpg";
import "./App.css"
const Header = () => {
  return (
    <div className='header'>
         <div className="left">
          <img src={img} alt="Logo" />
        </div>
        <div className="center">
          <input
            className="input"
            type="text"
            placeholder="Search anything you want..."
          />
       
        </div>
        <div className="right">
          <img src={userIcon} alt="User Icon" />
        </div>
    </div>
  )
}

export default Header;
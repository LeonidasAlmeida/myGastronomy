import { NavLink } from 'react-router-dom'
import './Navegate.css'

function Navegate() {
  return (
    <div className="navegateContainer">
        <div className="normalNavegate">
            <ul>
                <li><NavLink to="/home" >Home</NavLink></li>
                <li><NavLink to="/menu_browse">Browse Menu</NavLink></li>
                <li><NavLink to="/offers">Special Offers</NavLink></li>
                <li><NavLink to="/restaurant">Restaurant</NavLink></li>
                <li><NavLink to="/track_order">Track Order</NavLink></li>
            </ul>    
        </div>
        <div className="loginNavegate">
            <ul>
                 <li><NavLink to="/loginSignup" >Login/Signup</NavLink></li>
            </ul>
           
        </div>
    </div>
  )
}

export default Navegate
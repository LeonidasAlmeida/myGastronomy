import { Link,NavLink } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
        
            <div className="car">
                <div className="getorder">get 5% Off your first order, promo:ORDERS5</div>
                <div className="caritems">
                    <div className="location">Regent Street A4,Londo Change Location</div>
                    <div className="item">23 items</div>
                </div>
            </div>

            <div className="navegate">
                <div className="logo">
                    <img src="" alt="logoSite"/>
                </div>
                <ul className="listaNav">
                    <li><NavLink>Home</NavLink></li>
                    <li><NavLink>Browse Menu</NavLink></li>
                    <li><NavLink>Special Offers</NavLink></li>
                    <li><NavLink>Restaurants</NavLink></li>
                    <li><NavLink>Track Order</NavLink></li>
                    <li><NavLink>Login/Signup</NavLink></li>
                </ul>
            </div>
    </div>
    )
}

export default Navbar
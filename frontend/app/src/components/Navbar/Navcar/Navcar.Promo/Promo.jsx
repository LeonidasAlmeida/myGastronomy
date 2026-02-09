import './Promo.css'
import { FaStar } from "react-icons/fa6";
function Promo() {
  return (
   <div className="promoContainer">
    <div className="iconPromo"><FaStar /></div>
    <div className="promoText">Get 5% Off your first order, Promo ORDERS</div>
   </div>
  )
}

export default Promo
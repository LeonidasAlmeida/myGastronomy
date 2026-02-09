import "./CariItems.css";
import { HiArrowCircleDown } from "react-icons/hi";
import { FaShoppingBasket } from "react-icons/fa";
function CariItems() {
  return (
   <div className="caritemsContainer">
        <div className="iconCar centro"><FaShoppingBasket className=" iconD"/></div>
        <div className="numberItems centro">23 Items </div>
        <div className="valueCount centro"> GBP 79.80</div>
        <div className="iconDown centro"><HiArrowCircleDown className="iconD"/></div>
   </div>
  )
}

export default CariItems
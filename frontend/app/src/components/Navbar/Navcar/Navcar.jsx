import CariItems from "./Navcar.Caritems/CariItems"
import Changelocation from "./Navcar.Changelocation/Changelocation"
import "./Navcar.css"
function Navcar() {
  return (
   <div className="navcarConteiner">
      <div className="getPromo"></div>
      <div className="changeLocation"><Changelocation /></div>
      <div className="itemsCar"><CariItems /></div>
   </div>
  )
}

export default Navcar
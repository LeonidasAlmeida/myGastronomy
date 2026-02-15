
import Logo from "./Logo/Logo";
import "./Navbar.css";
import Navcar from "./Navcar/Navcar";
import Navegate from "./Navgate/Navegate";
function Navbar() {
  return (
    <div className="navbarContent">
        <div className="car"><Navcar /></div>
        <div className="logoPage"><Logo /></div>
        <div className="navegate"><Navegate /></div>
    </div>
    )
}

export default Navbar
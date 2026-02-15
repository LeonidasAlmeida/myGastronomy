import './Logo.css';
import logoOrder from '../../../assets/logoOrder.png';
function Logo() {
  return (
    <div className="logoContainer">
        <img src={logoOrder} />
    </div>
  )
}

export default Logo
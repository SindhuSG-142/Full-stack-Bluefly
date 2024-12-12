import './Navbar.css'
import blueflylogo from '../assets/blueflylogo.png'
import search from '../assets/search.png'
import user from '../assets/user.jpg'
import cart from '../assets/cart.png'
import {useState} from "react";
const Navbar=()=>{
    const [menu, setMenu] = useState("");
    return(
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={blueflylogo} alt=""/>
            </div>
            <div className="header">
                <div className="section">
                    <div><a src="">WOMEN</a></div>
                    <div><a src="">MEN</a></div>
                </div>
                <div className="icons">
                    <button>
                        <img src={search} alt="search"/>
                        </button>
                        <button>
                        <img src={user} alt="Login"/>
                        </button>
                        <button>
                        <img src={cart} alt="Cart"/>
                        <div className="nav-cart-count">0</div>
                        </button>
                </div>
                </div>
                <hr></hr>
                <ul className="nav-menu">
                    <li onClick={()=>{setMenu("designer")}}>DESIGNERS{menu === "designer"?<hr/>:<></>} </li>
                    <li onClick={()=>{setMenu("clothing")}}>CLOTHING{menu === "clothing"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("shoes")}}>SHOES{menu === "shoes"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("handbags")}}>HANDBAGS{menu === "handbags"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("jewelry")}}>JEWELRY{menu === "jewelry"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("accessories")}}>ACCESSORIES{menu === "accessories"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("clearance")}}>CLEARANCE{menu === "clearance"?<hr/>:<></>}</li>
                    
                </ul>
        </div>
    )
}
export default Navbar
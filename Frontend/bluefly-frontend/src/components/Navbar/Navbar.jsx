import './Navbar.css'
import blueflylogo from '../assets/blueflylogo.png'
import search from '../assets/search.png'
import user from '../assets/user.jpg'
import cart from '../assets/cart.png'
import {useState} from "react";
import {Link, useNavigate} from 'react-router-dom'

const Navbar=()=>{
    const [menu, setMenu] = useState("");
    const navigate=useNavigate();
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
                        <button onClick={()=>navigate('/cart')}>
                        <img src={user} alt="Login"/>
                        </button>
                        <button onClick={()=>navigate('/cart')} >
                        <img src={cart} alt="Cart"/>
                        <div className="nav-cart-count">0</div>
                        </button>
                </div>
                </div>
                <hr></hr>
                <ul className="nav-menu">
                    <li onClick={()=>{setMenu("designer")}}><Link style={{textDecoration:'none'}}to='/'>DESIGNERS</Link>{menu === "designer"?<hr/>:<></>} </li>
                    <li onClick={()=>{setMenu("clothing")}}><Link style={{textDecoration:'none'}}to ='/clothing'>CLOTHING</Link>{menu === "clothing"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("shoes")}}><Link style={{textDecoration:'none'}}to='/shoes'>SHOES</Link>{menu === "shoes"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("handbags")}}><Link style={{textDecoration:'none'}}to='/handbags'>HANDBAGS</Link>{menu === "handbags"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("jewelry")}}><Link style={{textDecoration:'none'}}to='/jewelry'>JEWELRY</Link>{menu === "jewelry"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("accessories")}}><Link style={{textDecoration:'none'}}to='/accessories'>ACCESSORIES</Link>{menu === "accessories"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("clearance")}}><Link style={{textDecoration:'none'}}to ='/clearance'>CLEARANCE</Link>{menu === "clearance"?<hr/>:<></>}</li>
                    
                </ul>
        </div>
    )
}
export default Navbar
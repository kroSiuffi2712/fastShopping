import React from 'react'
import {Link} from "react-router-dom";
import {useSelector} from 'react-redux';
import '../../style/storeStyle.css'

import logo from '../../images/fastShopping-Logo.png'
import cartImg from '../../images/cart.png'

const Header = () =>{
    const cart = useSelector(state => state.cart);

    return(
    <div className="header">
        <div className="container">
            <div className="navbar">
                <div className="logo">
                    <img className="app-logo" src={logo} alt=""/>
                </div>
                <Link to="/cart"><div className="cart"><img src={cartImg} width="30px" height="30px" alt=""/><span className="cart-image">{cart.quantity}</span></div></Link>
            </div>
        </div>
    </div>
    )
}
export default Header;
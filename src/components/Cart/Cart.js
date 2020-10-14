import React from 'react'
import {Link} from "react-router-dom";
import {connect} from 'react-redux'

import '../../style/storeStyle.css'
import {removeProductFromCart,updateProductFromCart} from '../../actions/cartAction'

import ShopCartMessage from '../Pages/ShopCart'



const Cart = ({cartData,removeProductFromCart, updateProductFromCart}) =>{
    const quantityProd=[1,2,3,4,5]

    const handleChange = (values) =>{
        updateProductFromCart(values);
    }


    return  (cartData.products.length>0) ? (
        <div className="small-container cart-page">
            <Link to="/order" className="btn cart-checkout-btn">Check Out</Link>
            <table>
                <tbody>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
                {cartData.products.map(product=>
                    <tr key={`tr-${product.id}`}>
                        <td>
                            <div  className="cart-info">
                                <img src={product.image} alt="" />
                                <div>
                                    <p>{product.title}</p>
                                    <small>{`Price: $${product.price}`}</small>
                                    <br />
                                    <button onClick={()=>removeProductFromCart(product.id)}>Remove</button>
                                </div>
                            </div>
                        </td>
                        <td>
                            <select id={`quantity-${product.id}`}  value={product.quantity} onChange={e=>handleChange({id:product.id, quantity:e.target.value})}>
                                {quantityProd.map(q =>
                                <option key={q}>{q}</option>
                            )}
                            </select>
                        </td>
                        <td>{`$${product.subTotal}`}</td>
                    </tr>
                )}
                </tbody>
            </table>

            <div className="total-price">
                <table>
                <tbody>
                    <tr>
                        <td>Total</td>
                        <td>{`$${cartData.total}`}</td>
                    </tr>
                </tbody>
                </table>
            </div>
            <div className="btn-car-page">
            <Link to="/" className= "cart-continue-btn">Continue shopping</Link>
            <Link to="/order" className="btn cart-checkout-btn">Check Out</Link>
            </div>
        </div>
     ):
     (<ShopCartMessage />)

}

const mapStateToProps = state =>{
    return {
        cartData:state.cart
    }
} 
const mapDispatchToProps = dispatch =>{
    return {
        removeProductFromCart: id=>dispatch(removeProductFromCart(id)),
        updateProductFromCart:values=>dispatch(updateProductFromCart(values))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
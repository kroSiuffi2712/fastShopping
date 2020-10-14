import React from 'react'
import {Link} from "react-router-dom";

const Summary = (props) =>{

    const {cart,handleSubmit, onSubmit}=props;
    
    return(
        <div className="summary-page">
            <h2>Order Summary</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Product</th>
                        <th>Unit Price</th>
                        <th>Units </th>
                        <th>Total Price </th>
                    </tr>
                    {cart.products.map(item=>
                        <tr key={`tr-${item.id}`}>
                            <td >{item.title}</td>
                            <td >{item.price}</td>
                            <td >{item.quantity}</td>
                            <td >{item.subTotal}</td>
                        
                        </tr>                    
                    )}
                </tbody>
            </table>
            <div className="summary-total">{`Total: $${cart.total}`}</div>
            <Link to="/thanks" className="place-order-btn btn"  onClick={handleSubmit(onSubmit)}>Place Order</Link>
        </div>
    )
}

export default Summary;
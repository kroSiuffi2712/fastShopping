import React from 'react'
import {Link, Redirect} from "react-router-dom";

import {useSelector,useDispatch} from 'react-redux'
import {resetPurchaseOrder} from '../../actions/orderAction'

import Loader  from './Loader';

const Purcharse = () =>{
    const order = useSelector(state => state.order);
    const customer = useSelector(state => state.customer);
    const dispatch = useDispatch();
    
    const handleClick = () =>{
       dispatch(resetPurchaseOrder());
    }

    if (!order.loading && order.orderNumber==="")
    return <Redirect to='/' />;
    
    
    return !order.loading ? (
    <div className="purchase-container">
        <i className="fa fa-shopping-cart purchase-icon fa-5x" aria-hidden="true"></i>
        <h1>Thanks for you purchase</h1>
        <h3>{`${customer.customer.fullName}, we have created your order #${order.orderNumber}, Your items will be soon at your door.`}</h3>
        <h3>Stay safe</h3>
        <Link to="/" className="btn" onClick={()=>handleClick()}>Start Again</Link>
    </div>
    ):(
    <Loader />
    )

}

export default Purcharse;

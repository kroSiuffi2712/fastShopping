import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import Summary from './Summary'
import CustomerInfo from './CustomerInfo'

import {addOrder} from '../../actions/orderAction'
import{addCustomerToOrder} from '../../actions/customerAction'
import{resetItemsfromCart} from '../../actions/cartAction'

const Order = ({cart,customer,addOrder, resetItemsfromCart,addCustomerToOrder}) =>{
    const initialState={id:0,fullName:"", identifier:"", address:"", phoneNumber:"", email:""};
    const [newCustomer, setNewCustomer]= useState(initialState);
    const [isNewCustomer, setIsNewCustomer]=useState(false);
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = async (data) => {
        if (isNewCustomer){
            await addCustomerToOrder({fullName:newCustomer.fullName, identifier:newCustomer.identifier, address:newCustomer.address, phoneNumber:newCustomer.phoneNumber, email:newCustomer.email});
            setIsNewCustomer(false);
        }
        await handleClick();
        await resetItemsfromCart();
        history.push("/thanks");
    };
    
    if(cart.products.length <=0)
    return <Redirect to='/' />;


    const handleInput = (event) =>{
        setNewCustomer({
            ...newCustomer,
            [event.target.name]: event.target.value
        })
    }

    const handleChange =()=>{
        setIsNewCustomer(!isNewCustomer);
    }

    const handleClick=async ()=>{
        /*//customer
        const customerData= (isNewCustomer ? 
            newCustomer : 
            {id:customer.id,fullName:customer.fullName, identifier:customer.identifier, address:customer.address, phoneNumber:customer.phoneNumber, email:customer.email}
            )
        customerData.isNewCustomer=isNewCustomer;
        */
        //order items
        const orderItems=[];
        cart.products.map(item=>
            orderItems.push({productId:item.id, quantity:item.quantity, price:item.price})
        )
        //place order data.
        await addOrder({customerId:customer.id, orderItems:orderItems, total:cart.total});
    }

    return (
    <div className="order-container">
        <CustomerInfo  handleClick={handleClick} register={register} handleSubmit={handleSubmit} errors={errors} onSubmit={onSubmit} newCustomer={newCustomer} handleInput={handleInput} isNewCustomer={isNewCustomer} handleChange={handleChange}/>
        <Summary cart={cart} handleClick={handleClick} handleSubmit={handleSubmit} onSubmit={onSubmit}/>
    </div>
    
)
}

const mapStateToProps = (state,ownProps) =>{
    return{
        order:state.order,
        cart:state.cart,
        customer:state.customer.customer,
        ownProps:ownProps
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        addOrder:order=>dispatch(addOrder(order)),
        resetItemsfromCart:()=>dispatch(resetItemsfromCart()),
        addCustomerToOrder:customer =>dispatch(addCustomerToOrder(customer))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Order);
import React, {useState} from 'react';
import {connect} from 'react-redux'

import {fetchCustomer, resetCustomerFromOrder} from '../../actions/customerAction'

import LookupCustomer from './LookupCustomer'
import UserInformation from './UserInformation'

const ExistingCustomer = ({customerData, fetchCustomer, resetCustomerFromOrder}) =>{
    const [email, setEmail]= useState("customer_test@example.com");
    
    const handleClick = () =>{
        fetchCustomer(email);
    }

    const resetCustomer = () =>{
        resetCustomerFromOrder()
    }

    return (
    <div>
       {Object.keys(customerData.customer).length>0 ?
        <UserInformation customer={customerData.customer} resetCustomer={resetCustomer}/>:
        <LookupCustomer email={email} setEmail={setEmail} handleClick={handleClick}/>
       }
    </div>
    )
}

const mapStateToProps = state =>{
    return {
        customerData:state.customer
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        fetchCustomer:email=>dispatch(fetchCustomer(email)),
        resetCustomerFromOrder : ()=> dispatch(resetCustomerFromOrder())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ExistingCustomer);
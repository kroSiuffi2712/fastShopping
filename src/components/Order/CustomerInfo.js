import React from 'react'

import NewCustomer from './NewCustomer'
import HeaderCustomerInfo from './HeaderCustomerInfo'
import ExistingCustomer from './ExistingCustomer'
const CustomerInfo = (props) =>{
    const {isNewCustomer, handleChange, newCustomer,handleInput, register, handleSubmit, errors}=props;
    return(
        <div>
            <h2>Customer Information</h2>
            <div className="customer-info-container">
                <HeaderCustomerInfo isNewCustomer={isNewCustomer} handleChange={handleChange}/>
                {isNewCustomer ? <NewCustomer register={register} handleSubmit={handleSubmit} errors={errors} newCustomer={newCustomer} handleInput={handleInput}/>:<ExistingCustomer />}
            </div>
        </div>
    )
}

export default CustomerInfo;
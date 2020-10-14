import React from 'react';

const HeaderCustomerInfo = (props) =>{
 const {handleChange, isNewCustomer}=props;
    return(
        <div className="header-customer-info">
            <label>Are you ?</label>
            <input type="radio" id="new-customer" name="new-customer" value={true} checked={isNewCustomer ? "checked" :""} onChange={()=>handleChange()}/>
            <label>New Customer</label><br/>
            <input type="radio" id="exist-customer" name="gender" value={false} checked={!isNewCustomer ? "checked" :""} onChange={()=>handleChange()}/>
            <label>Existing Customer</label><br></br>
        </div>
    )
}

export default HeaderCustomerInfo;
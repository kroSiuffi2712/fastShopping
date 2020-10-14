import axios from 'axios';
import {customerType} from '../constants/customerType';

export const addCustomerStarted = ()=>{
    return{
        type:customerType.ADD_CUSTOMER_STARTED  
    }
} 

export const addCustomerSuccess = customer=>{
    return{
        type:customerType.ADD_CUSTOMER_SUCCESS,  
        payload:customer
    }
} 

export const addCustomerFailure = error=>{
    return{
        type:customerType.FETCH_CUSTOMER_FAILURE,  
        payload:error
    }
} 

export const fetchCustomerRequest = () =>{
    return {
        type:customerType.FETCH_CUSTOMER_REQUEST
    }
}

export const fetchCustomerSuccess = customer =>{
    return {
        type:customerType.FETCH_CUSTOMER_SUCCESS,
        payload:customer
    }
}

export const fetchCustomerFailure = error =>{
    return {
        type:customerType.FETCH_CUSTOMER_SUCCESS,
        payload:error
    }
}

export const resetCustomer = () =>{
    return{
        type:customerType.RESET_CUSTOMER
    }
}

export const fetchCustomer= (email) =>{
    return async (dispatch)=>{
        dispatch(fetchCustomerRequest())
        await axios.get(`http://localhost:3000/api/customers/${email}`)
        .then(response=>{
            const customer = response.data;
            dispatch(fetchCustomerSuccess(customer.customer));
        }).catch(error=>{
            const errorMsg =error.message;
            dispatch(fetchCustomerFailure(errorMsg))
        });
    };
}

export const resetCustomerFromOrder =() =>{
    return (dispatch)=>{
        dispatch(resetCustomer())
    }
}

export const addCustomerToOrder = (customer) =>{
    console.log(customer);
    return async(dispatch) =>{
        dispatch(addCustomerStarted())
        await axios({
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            url: 'http://localhost:3000/api/customers',
            data: {
                "fullName": customer.fullName,
                "identifier": customer.identifier,
                "address": customer.address,
                "phoneNumber": customer.phoneNumber,
                "email": customer.email,
            }
        }).then(response =>{
            const data = response.data;
            dispatch(addCustomerSuccess(data));
        }).catch (error => {
            const errorMessage= error.message || error.statusText;
            dispatch(addCustomerFailure(errorMessage));
        })
    }    
}
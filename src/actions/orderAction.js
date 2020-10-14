import axios from 'axios'
import {orderType} from '../constants/orderType'

export const addOrderStarted = () =>{
    return{
        type:orderType.ADD_ORDER_STARTED
    }
}

export const addOrderSuccess = orderNumber =>{
    return{
        type:orderType.ADD_ORDER_SUCCESS,
        payload:orderNumber
    }
}

export const addOrderFailure = error =>{
    return{
        type:orderType.ADD_ORDER_FAILURE,
        payload:error
    }
}

export const resetOrder = () =>{
    return{
        type:orderType.RESET_ORDER
    }
}

export const addOrder = (order) =>{
    return async(dispatch) =>{
        dispatch(addOrderStarted())
        await axios({
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            url: 'http://localhost:3000/api/orders',
            data: {
                "customer": order.customer,
                "orderItems": order.orderItems,
                "total": order.total
            }
        }).then(response =>{
            const data = response.data;
            dispatch(addOrderSuccess(data.orderNumber))
        }).catch (error => {
            const errorMessage= error.message || error.statusText;
            dispatch(addOrderFailure(errorMessage))
        })
    }    
}

export const resetPurchaseOrder = () =>{
    return(dispatch)=>{
        dispatch(resetOrder());
    }
}


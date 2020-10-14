import {storeType} from '../constants/storeType'

export const addToCart = product =>{
    return {
        type:storeType.ADD_TO_CART,
        payload:product
    }
}

export const updateFromCart = product =>{
    return {
        type:storeType.UPDATE_PRODUCT_FROM_CART,
        payload:product
    }
}

export const removeFromCart = productId =>{
    return {
        type:storeType.REMOVE_FROM_CART,
        payload:productId
    }
}

export const resetCart = () =>{
    return{
        type:storeType.RESET_CART
    }
}

export const addProductToCart = (product) =>{
    return (dispatch)=>{
        dispatch(addToCart(product));
    }
}

export const updateProductFromCart = (product) =>{
    return (dispatch)=>{
        dispatch(updateFromCart(product));
    }
}

export const removeProductFromCart = (id) =>{
    return (dispatch)=>{
        dispatch(removeFromCart(id));
    }
}

export const resetItemsfromCart = () =>{
    return(dispatch)=>{
        dispatch(resetCart());
    }
}

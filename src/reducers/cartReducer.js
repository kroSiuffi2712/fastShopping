import {storeType} from '../constants/storeType'

const initialState={
    products:[],
    quantity:0,
    total:0
}

const reducer = (state=initialState, action) =>{
    let product={};
    let subTotal=0;
    let total=0;
    let quantity=0;
    let totalPrice=0;
    switch(action.type){
        case storeType.ADD_TO_CART:
            quantity = action.payload.quantity? action.payload.quantity:1;    
            product = action.payload;
            product.subTotal=(action.payload.price * quantity);
            product.quantity = quantity
            total = Math.round((state.total  + (action.payload.price * quantity)) * 100) / 100

            return{
                products:[...state.products, product],
                quantity:state.quantity+1,
                total: total
            }

        case storeType.REMOVE_FROM_CART:
            //Note:refactoring
            product=state.products.filter(p=> p.id===action.payload).shift();
            quantity =state.quantity - product.quantity
            subTotal = Math.round(((state.total - product.subTotal) + Number.EPSILON) * 100) / 100;
            totalPrice =Math.round(((subTotal) + Number.EPSILON) * 100) / 100;
            const removeProduct =state.products.filter(p=> p.id!==action.payload)

            if (removeProduct.length>0)
                return {
                    products:removeProduct,
                    quantity:quantity,
                    total:totalPrice
                }
            else
                return {
                    products:[],
                    quantity:0,
                    subTotal:0,
                    tax:0,
                    total:0
                }
        case storeType.UPDATE_PRODUCT_FROM_CART:
            //Note:refactoring
            let products = state.products;
            let productIndex = state.products.findIndex((obj => obj.id === action.payload.id));
            let lastSubTotal = (state.products[productIndex].price * state.products[productIndex].quantity);
            subTotal=(state.products[productIndex].price * Number(action.payload.quantity));
            quantity=((state.quantity - state.products[productIndex].quantity) + Number(action.payload.quantity)); 
            products[productIndex].subTotal=subTotal;
            products[productIndex].quantity = action.payload.quantity
            
            total =Math.round((((state.total - lastSubTotal) + subTotal)+ Number.EPSILON) * 100) / 100;;
            
            return{
               products:products,
               total:total,
               quantity:quantity
            }
        case storeType.RESET_CART:
            return{
                products:[],
                quantity:0,
                total:0
            }
        default:
            return state
    }
}

export default reducer;
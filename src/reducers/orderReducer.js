import {orderType} from '../constants/orderType'

const initialState = {
    loading: false,
    orderNumber: "",
    error: ""
};

const reducer = (state=initialState,action) =>{
    switch(action.type){
        case orderType.ADD_ORDER_STARTED:
            return{
                ...state,
                loading:true
            }
        case orderType.ADD_ORDER_SUCCESS:
            return{
                loading:false,
                orderNumber:action.payload,
                error:""
            }
        case orderType.ADD_ORDER_FAILURE:
            return {
                loading:false,
                order:"",
                error:action.payload
            }
        default:
            return state
    }
}
export default reducer;



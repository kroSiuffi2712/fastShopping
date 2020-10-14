import {customerType} from '../constants/customerType'

const initialState ={
    loading:false,
    customer:{},
    error:""
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case customerType.FETCH_CUSTOMER_REQUEST:
            return {
                ...state,
                loading:true
            }
        case customerType.FETCH_CUSTOMER_SUCCESS:
            return {
                loading:false,
                customer:action.payload,
                error:""
            }
        case customerType.FETCH_CUSTOMER_FAILURE:
            return{
                loading:false,
                customer:{},
                error:action.payload
            }
        case customerType.RESET_CUSTOMER:
            return {
                loading:false,
                customer:{},
                error:""
            }
        case customerType.ADD_CUSTOMER_STARTED:
            return{
                ...state,
                loading:false,
            }
        case customerType.ADD_CUSTOMER_SUCCESS:
            return{
                loading:false,
                customer:action.payload,
                error:""
            }
        case customerType.ADD_CUSTOMER_FAILURE:
            return{
                loading:false,
                customer:{},
                error:action.payload
            }
        default:
            return state
    }
}

export default reducer;
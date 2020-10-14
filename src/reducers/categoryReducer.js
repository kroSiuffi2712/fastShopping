import {storeType} from '../constants/storeType'

const initialState ={
    loading:false,
    categories:{},
    error:""
}

const reducer = (state=initialState, action) =>{
    switch(action.type){
        case storeType.FETCH_CATEGORY_REQUEST:
            return{
                ...state,
                loading:true
            }
        case storeType.FETCH_CATEGORY_SUCCESS:
            return{
                loading:false,
                categories:action.payload,
                error:""
            }
        case storeType.FETCH_CATEGORY_FAILURE:
            return{
                loading:false,
                categories:{},
                error:action.payload
            }
        default:
            return state
    }
}

export default reducer;
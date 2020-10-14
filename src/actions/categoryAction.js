import axios from 'axios';
import {storeType} from '../constants/storeType';

export const fetchCategoryRequest = ()=>{
    return{
        type:storeType.FETCH_CATEGORY_REQUEST
    }
};

export const fetchCategorySuccess = categories =>{
    return {
        type:storeType.FETCH_CATEGORY_SUCCESS,
        payload:categories
    }
};

export const fetchCategoryFailure = error =>{
    return {
        type:storeType.FETCH_CATEGORY_FAILURE,
        payload:error
    }
};


export const fetchCategories = () =>{
    return async (dispatch)=>{
        dispatch(fetchCategoryRequest());
        await axios.get('http://localhost:3000/api/categories')
        .then(response =>{
            const categories = response.data;
            dispatch(fetchCategorySuccess(categories));
        }).catch(error =>{
            const errorMsg = error.message;
            dispatch(fetchCategoryFailure(errorMsg));
        })       
    }
}
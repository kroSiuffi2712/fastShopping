import {combineReducers} from 'redux'

import storeReducer from './storeReducer'
import cartReducer from './cartReducer'
import categoryReducer from './categoryReducer'
import customerReducer from './customerReducer'
import orderReducer from './orderReducer'

import {persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig={
    key:'root',
    storage,
    whitelist:['cart']
}

const rootReducers = combineReducers({
    store : storeReducer,
    cart:cartReducer,
    category:categoryReducer,
    customer:customerReducer,
    order:orderReducer
});

export default persistReducer(persistConfig,rootReducers);
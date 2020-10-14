import React from 'react';
import { Route} from 'react-router-dom';

import Products from '../components/products/Product';
import Cart from '../components/Cart/Cart';
import Purchase from '../components/Pages/Purchase';
import Order from '../components/Order/Order';
  
const AppRouter= () =>{
    return(
        <div>
            <Route exact path="/" component={Products} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/thanks" component={Purchase} />
            <Route exact path="/order" component={Order} />
        </div>
    );
}

export default AppRouter;
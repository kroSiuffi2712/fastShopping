import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'

import '../../style/storeStyle.css'
import {fetchStores} from '../../actions/storeAction'
import {addProductToCart,updateProductFromCart} from '../../actions/cartAction'
import {fetchCategories} from '../../actions/categoryAction'

import Pagination from '../Pages/Pagination'

import Loader from '../Pages/Loader'

const Product = ({storeData, categoryData,carData,fetchStores,fetchCategories, addProductToCart,updateProductFromCart}) =>{
    const [option, setOption]=useState("0");
    const [currentPage, setCurrentPage]=useState(1);
    const [postsPerPage]=useState(4);

    useEffect(()=>{
        fetchStores();
        fetchCategories();
    },[fetchStores, fetchCategories]);

    //Sort store by category
    const store =(option === "0" ? storeData : storeData.filter(item=> item.categoryId===Number(option)))

    //Get currents products
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost =indexOfLastPost  - postsPerPage
    const currentPosts = store.slice(indexOfFirstPost,indexOfLastPost);

    //Change Page
    const paginate= (pageNumber)=>setCurrentPage(pageNumber);

    //handleChange
    const handleChange =(e)=>{
        setOption(e.target.value);
        setCurrentPage(1);
    }

    //handleClick
    const handleClick = (e) =>{
        let item={}
        //cheking if the item already exist in the cart
        item=carData.products.filter(p=> p.id===e.id).shift();
            if (item === undefined)
                addProductToCart(e)
            else if ((item.quantity + 1) <=5) {
                updateProductFromCart({id:e.id, quantity: item.quantity + 1})
            }
    }
   
    return  (storeData.length>0 && categoryData.length>0) ? (
    <div className="small-container">

            <div className="row row-2">
                <h2>All Products</h2>
                <div><label>Sort by  </label><select id="option" value={option}  onChange={e => handleChange(e)}>
                <option key="0" value="0">All Products</option>
                {categoryData.map(op =><option key={op.id} value={op.id}>{op.name}</option>)}
                </select></div>
            </div>

            <div className="row">
                {currentPosts.map(c => 
                <div key={`product-${c.id}`} className="col-4">
                    <img src={c.image} alt="" />
                    <div className="product-details">
                        <h4><strong>{c.title}</strong></h4>
                        <h4>{c.category.name}</h4>
                        <p>{c.description}</p>
                        <div className="xx">
                        <button href="" className="btn" onClick={()=>handleClick(c)}>Add To Cart</button>
                            <p><strong>{`$${c.price}`}</strong></p>
                        </div>
                    </div>
                </div>
                )}

                </div>
                <Pagination postsPerPage={postsPerPage} totalPosts={store.length} paginate={paginate}/>
            </div>
         ):
         (<Loader />)
}

const mapStateToProps = state =>{
    return{
        storeData:state.store.products,
        categoryData:state.category.categories,
        carData:state.cart
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        fetchStores:()=>dispatch(fetchStores()),
        fetchCategories: () =>dispatch(fetchCategories()),
        addProductToCart:product =>dispatch(addProductToCart(product)),
        updateProductFromCart:values=>dispatch(updateProductFromCart(values))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product);
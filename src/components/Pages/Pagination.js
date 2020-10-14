import React from 'react'
import {Link} from "react-router-dom";

const Pagination = ({postsPerPage, totalPosts, paginate})=>{
    const pageNumbers=[];

    for(let i=1; i<=Math.ceil(totalPosts /postsPerPage); i++){
        pageNumbers.push(i);
    }

    return(
        <div className="page-btn">
                {pageNumbers.map(number => (
                    <span key={number}>
                        <Link to="/" onClick={()=>paginate(number)}>{number}</Link>
                    </span>
                ))}
        </div>
    )
}

export default Pagination;
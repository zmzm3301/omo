import React from "react";
import {useParams} from 'react-router-dom'

function Product() {
    const {productid} = useParams();
    return (
        <>
            <section>{productid}상세페이지</section>
        </>
    )
}

export default Product;
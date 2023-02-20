import React from 'react'
import {useParams} from 'react-router-dom'   

const Products = () => {
    const { id } = useParams();
    return (
        <section>
            <div>
                <h2>목록 { id }</h2>
            </div>
        </section>
    )
}


export default Products;
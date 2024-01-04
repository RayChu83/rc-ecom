import React from 'react'
import { Link } from 'react-router-dom'

export default function Product({product}) {
    return(
        // id is based on a firebase timestamp seconds
        <Link to={`${product.title}`}>
            <article className="product" title={product.title}>
            <section className="product-image-container">
                <img src={product.image} alt=""/>
            </section>
            <h3 className='product-title'>{product.title}</h3>
            <h2 className='product-price'><span className="understated-text">$</span>{product.cost}</h2>
        </article>
        </Link>
    )
}
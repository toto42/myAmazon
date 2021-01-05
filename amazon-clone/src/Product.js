import React from 'react'
import './Product.css'

function Product() {
    return (
        <div className="product">
            <div className="product_info">
                <p>The lean startup</p>
                <p className="product_price"><small>$</small><strong>11.99</strong></p>
            </div>
        </div>
    )
}

export default Product
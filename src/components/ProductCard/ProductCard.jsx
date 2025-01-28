import React from 'react'
import './ProductCard.css'
import { FaShoppingBag } from "react-icons/fa";

const ProductCard = (props) => {
  const {name,image} = props.product
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt="" className="product-image" />
      </div>
      <span className="product-name">
        {name}
      </span>
      <div className="buy-container">


      <FaShoppingBag className = 'buy-icon'/>
      <div className="buy-text">
        Buy
      </div>
      </div>
      
    </div>
  )
}

export default ProductCard
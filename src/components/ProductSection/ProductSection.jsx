import React from 'react'
import styles from './ProductSection.module.css'
// import ProductCard from '../ProductCard/ProductCard'
import ProductCard from '../ProductCard/ProductCard'


function ProductSection({products}) {
  return (
    <div className={styles.container}>
        <h1 className={styles.sectionTitle}>Products</h1>
        <div className="products-container">{
          products.map((product) => {
            return(
              <ProductCard product={product} />
            )
          })}
        </div>
         <button className={styles.viewAllBtn}>View all</button>
    </div>
  )
}
// import ProductCard from '../ProductCard/ProductCard'

export default ProductSection
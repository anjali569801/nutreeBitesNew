import React, { useState } from 'react';
import styles from './ProductSection.module.css';
import ProductCard from '../ProductCard/ProductCard';

function ProductSection({ products }) {
  const [showAll, setShowAll] = useState(false);

  // Show only 4 products initially
  const displayedProducts = showAll ? products : products.slice(0, 3);

  return (
    <div id='products' className={styles.container}>
      <h1 className={styles.sectionTitle}>Products</h1>
      <div className={styles.productsContainer}>
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {products.length > 3 && (
        <button 
          className={styles.viewAllBtn} 
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : 'View All'}
        </button>
      )}
    </div>
  );
}

export default ProductSection;

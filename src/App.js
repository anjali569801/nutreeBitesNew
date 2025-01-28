import logo from "./logo.svg";
import "./App.css";
import backgroundImage from "./assets/background-image.png";
import gajak from "./assets/gajak-image.png";
import { useState } from "react";
import ProductCard from "./components/ProductCard/ProductCard";
import productsList from "./data/productsList";

function App() {
  const products = productsList;
  return (
    <div className="root">
      <div className="section">
        <div className="nameLogo">
          <span className="name">NutreeBites</span>
        </div>
        <div className="gajak-image-container">
          {/* gajak image */}
          <img src={gajak} alt="Gajak" className="gajak-image" />
        </div>
        <div className="tagline">
          <span>Every Bite is taste delight</span>
        </div>
      </div>
      <div className="section">
        <span className="section-label">
          Products
        </span>
        <div className="products-container">{
          products.map((product) => {
            return(
              <ProductCard product={product} />
            )
          })}
        </div>
      </div>
      
    </div>
  );
}

export default App;

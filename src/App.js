import logo from "./logo.svg";
import "./App.css";
import backgroundImage from "./assets/background-image.png";
import gajak from "./assets/gajak-image.png";
import { useState } from "react";
import ProductCard from "./components/ProductCard/ProductCard";
import productsList from "./data/productsList";
import Navbar from "./components/Navbar/Navbar";
import styles from './App.module.css'
import ProductSection from "./components/ProductSection/ProductSection";
import About from "./components/AboutSection/About";

function App() {
  const products = productsList;
  return (
    // <div className="root">
    //   <Navbar/>
    //   <div className=" section section-1">
    //     <div className="nameLogo">
    //       <span className="name">NutreeBites</span>
    //     </div>
    //     <div className="gajak-image-container">
    //       {/* gajak image */}
    //       <img src={gajak} alt="Gajak" className="gajak-image" />
    //     </div>
    //     <div className="tagline">
    //       <span>Every Bite is taste delight</span>
    //     </div>
    //   </div>
    //   <div className="section">
    //     <span className="section-label">
    //       Products
    //     </span>
    //     <div className="products-container">{
    //       products.map((product) => {
    //         return(
    //           <ProductCard product={product} />
    //         )
    //       })}
    //     </div>
    //   </div>
      
    // </div>







    // landing page by me 
    <div className="root">
        <Navbar/>
      <div className=" section section-1">
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
      <ProductSection products={products}/>
      <About/>
    </div>
  );
}

export default App;

import React from 'react'
import styles from './About.module.css'
import img from '../../assets/download (1).jpg'; 

function About() {
  return (
    <div id='about' className={styles.container}>
       <h1 className={styles.title}>About</h1> 
      
        <div className={styles.left}>
            <div className={styles.qualityContainer}>
                <span>Hand Made</span>
                <span>Fariyali</span>
                <span>Gluten free</span>
                <span>No artificial color</span>
                <span>No artificial flavor</span>
            </div>
            <img src={img} className={styles.img}></img>
            
        </div>
        <div className={styles.right}>
          <h1 className={styles.sectionTitle}>About</h1>
          <h2 className={styles.heading}>What's special about Nutreebites?</h2>
          <p className={styles.description}>Enjoy delicious snacks without compromise. Nutreebites offers a range of gluten-free options, making our treats accessible to everyone. We believe in creating wholesome snacks that everyone can enjoy."</p>
        
       </div>
    </div>
  )
}

export default About
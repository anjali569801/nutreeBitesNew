import React, { useState } from 'react';
import styles from './Navbar.module.css'
import { IoMenu } from "react-icons/io5";
import { MdOutlineCancelPresentation } from "react-icons/md";
import logo from '../../assets/logo.png'; 

function Navbar() {
  const [isMenuList , setIsMenuList] = useState(false)
  
  return (
    <div className={styles.container}>
        <img  src={logo} alt='logo' className={styles.logo}></img>
        {!isMenuList?<IoMenu  onClick={()=>setIsMenuList(true)} className={styles.menuIcon}/>:<MdOutlineCancelPresentation onClick={()=>setIsMenuList(false)} className={styles.menuIcon}/>}
        <div className={`${styles.LinkContainer} ${isMenuList ? styles.show : ''}`}>
        <a href='#'>Home</a>
        <a href='#products'>Products</a>
        <a href='#about'>About</a>
        <a href='#contact'>Contact</a>
        </div>

    </div>
  )
}

export default Navbar
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '../../styles/Nav.module.css';
import sty from '../../styles/Search.module.css';
import styled from 'styled-components';
import Search from '../blog/Search';
import { FaSearch, FaAlignRight } from 'react-icons/fa';
import { englishVersion } from '../../service/actions/versionAction';
import {useDispatch } from 'react-redux'


// const Wrapper = styled.ul`
// list-style-type: none;
// margin: 0;
// padding: 0;
// overflow: hidden;
// `;




const Navbar = (props) => {

const [show, setShow] = useState(false);
const showSearch = () => {
    setShow(true);
}

   
const dispatch = useDispatch();

const handleClick = () => {
    props.onNavButtonClick();
    dispatch(englishVersion());
}


  
   const handleBang = () => {
      
   }

  
 
    // const showBlogCategories = blog =>
    //     blog.categories.map((c, i) => (
    //         <Link key={i} href={`/categories/${c.slug}`}>
    //             <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
    //         </Link>
    //     ));
  return (
      <>
      <div className='container-fluid bg-white' style={{position: "sticky", top: "0", zIndex: "999"}}>
        <div className="row">
        <div className='col'>
        <ul className={styles.ul}>
       
       <div >
       <li className={styles.li}>
           <a style={{cursor: "pointer"}}><Link className="active" href='/'><FaAlignRight size="25px"/></Link></a>
       </li>
       <li className={styles.li}>
           <a><Link className="active" href='/'>প্রচ্ছদ</Link></a>
       </li>

       <li className={styles.li}>
           <a><Link className="active" href='/categories/bangladesh'>প্রদান খবর </Link></a>
       </li>

       <li className={styles.li}>
           <a><Link href='/categories/america'>আমেরিকা </Link></a>
       </li>
       
       <li className={styles.li}>
           <a><Link className="active" href='/categories/bangladesh'>বাংলাদেশ </Link></a>
       </li>
       
       <li className={styles.li}>
           <a><Link className="active" href='/categories/world-news'>বিশ্বজুড়ে </Link></a>
       </li>

       <li className={styles.li}>
           <a><Link className="active" href='/categories/politics'>রাজনীতি </Link></a>
       </li>

       <li className={styles.li}>
            <a ><Link className="active" href='/categories/economy'>অর্থনীতি </Link></a>
       </li>

       <li className={styles.li}>
           <a><Link className="active" href='/categories/sports'>খেলা </Link></a>
       </li>
       </div>
      
       

       <ul style={{float: "right"}}>
           
               <a style={{cursor: "pointer"}} onClick={ () => setShow(!show) }><FaSearch size="25px"/></a>
               <Link href="/">
               <button className={styles.button} onClick={handleClick}>
                    English Version
                </button>
                </Link>
       </ul>

   </ul>

   {show ? <Search/> : ''}
   
        </div>
        </div>
      </div>
      </>
  );
};

export default Navbar;

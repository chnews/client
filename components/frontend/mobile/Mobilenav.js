import React from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { API } from '../../../config';
import styles from '../../../styles/Frontpage.module.css'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import sty from './Mobilenav.module.css';
import axios from 'axios';
import Search from '../../blog/Search';




const Mobilenav = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    let url = `${API}/getlogo`;
    axios({
        method: 'get',
        url,
    }).then(function(response){
        let logo = response.data[0];
        setData(`data:${logo.contentType};base64, ${Buffer.from(logo.image.data.data).toString('base64')}`);
    });
})

  return (
      <>
    <div className='container-fluid my-3'>
        <div className='row'>
            <div className='col-4 mt-3'>
            
            <input type="checkbox" id={sty.toggleMenu} />
            <label htmlFor={sty.toggleMenu} className={sty.headerMenuBtn}>
            <MenuIcon className={styles.searchbutton}/>
            </label>
            <div className={sty.headerMenuItems}>
              <div>
              <ul className={sty.ul}>
        <li className={sty.li}>
           <Link href='/'>প্রচ্ছদ</Link>
           <Link href='#'>প্রদান খবর </Link>
           <Link href='/categories/america'>আমেরিকা </Link>
           <Link href='/categories/bangladesh'>বাংলাদেশ </Link>
           <Link href='/categories/world-news'>বিশ্বজুড়ে </Link>
           <Link href='/categories/politics'>রাজনীতি </Link>
           <Link href='/categories/economy'>অর্থনীতি </Link>
           <Link href='/categories/sports'>খেলা </Link>
            
        </li>

        {/* <li className={sty.li}>
            <a className="active" href="#home"><Link href='#'>প্রদান খবর </Link></a>
        </li>
        

        <li className={sty.li}>
            <a className="active" href="#home"><Link href='/categories/america'>আমেরিকা </Link></a>
        </li>
        
        <li className={sty.li}>
            <a className="active" href="#home"><Link href='/categories/bangladesh'>বাংলাদেশ </Link></a>
        </li>
        
        <li className={sty.li}>
            <a className="active" href="#home"><Link href='/categories/world-news'>বিশ্বজুড়ে </Link></a>
        </li>

        <li className={sty.li}>
            <a className="active" href="#home"><Link href='/categories/politics'>রাজনীতি </Link></a>
        </li>

        <li className={sty.li}>
            <a className="active" href="#home"> <Link href='/categories/economy'>অর্থনীতি </Link></a>
        </li>

        <li className={sty.li}>
            <a className="active" href="#home"><Link href='/categories/sports'>খেলা </Link></a>
        </li> */}
       

    </ul>
              </div>
            </div>
            </div>
            
            
            
            
            
            
            
            
            
            <div className='col-4'>
              <Link href="/">
              <img src={data} className={styles.mobile_logo_img}/>
                {/* <img src='chalaman.png' className={styles.mobile_logo_img} /> */}
              </Link>
            </div>










            <div className='col-4 mt-3 text-end'>
            
            <input type="checkbox" id={sty.toggleSer} />
            <label htmlFor={sty.toggleSer} className={sty.headerMenuBtn}>
            <div className='text-end'>
            <SearchIcon className={styles.searchbutton}/>
            </div>
            </label>
            <div className={sty.headerMenuItems}>
             
             
           <Search/>
        
              
            </div>
            </div>
            {/* <div className='col-4 mt-3 text-end'><SearchIcon className={styles.searchbutton}/></div> */}
        </div>
    </div>


    <>
   {/* <input type="checkbox" id={sty.toggleMenu} />
  <label htmlFor={sty.toggleMenu} className={sty.headerMenuBtn}>
    Menu 
  </label>
  <div className={sty.headerMenuItems}>
    <div>
        menu
    </div>
  </div> */}
</>


    </>
  )
}

export default Mobilenav
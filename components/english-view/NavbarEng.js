import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '../../styles/Nav.module.css';
import sty from '../../styles/Search.module.css';
import styled from 'styled-components';
import Search from '../blog/Search';
import { FaSearch, FaAlignRight } from 'react-icons/fa';


// const Wrapper = styled.ul`
// list-style-type: none;
// margin: 0;
// padding: 0;
// overflow: hidden;
// `;




const NavbarEng = (props) => {

    const [show, setShow] = useState(false);
    const showSearch = () => {
        setShow(true);
    }

   

const handleClick = () => {
    props.onNavButtonClick();
}


 
    // const showBlogCategories = blog =>
    //     blog.categories.map((c, i) => (
    //         <Link key={i} href={`/categories/${c.slug}`}>
    //             <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
    //         </Link>
    //     ));
  return (
      <>
      
    <div className='container'>
        <div className="row">
            <div className='col'>

                <ul className={styles.ul}>
                    <div>
                    <li className={styles.li}>
                        <a style={{cursor: "pointer"}}><Link className="active" href='/'><FaAlignRight size="25px"/></Link></a>
                    </li>
                        <li className={styles.li}>
                            <a style={{color: "#000"}}><Link className=" text-dark" href='/'>Home</Link></a>
                        </li>

                        <li className={styles.li}>
                            <a><Link className="active" href='/categories/bangladesh'>Main News</Link></a>
                        </li>

                        <li className={styles.li}>
                            <a><Link href='/categories/america'>America </Link></a>
                        </li>
                        
                        <li className={styles.li}>
                            <a><Link className="active" href='/categories/bangladesh'>Bangladesh </Link></a>
                        </li>
                        
                        <li className={styles.li}>
                            <a><Link className="active" href='/categories/world-news'>International</Link></a>
                        </li>

                        <li className={styles.li}>
                            <a><Link className="active" href='/categories/politics'>Politics</Link></a>
                        </li>

                        <li className={styles.li}>
                            <a ><Link className="active" href='/categories/economy'>Economics</Link></a>
                        </li>

                        <li className={styles.li}>
                            <a><Link className="active" href='/categories/sports'>Sports</Link></a>
                        </li>
                    </div>

                    <ul style={{float: "right"}}>
                        <a onClick={ () => setShow(!show) }><FaSearch size="25px"/></a>
                        <button className={styles.button} onClick={handleClick}>বাংলা ভার্সন </button>
                    </ul>
                </ul>

            {show ? <Search/> : ''}
            </div>
        </div>
    </div>
    
      </>
  );
};

export default NavbarEng;

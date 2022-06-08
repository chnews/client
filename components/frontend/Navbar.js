import Link from 'next/link';
import styles from '../../styles/Nav.module.css';
import sty from '../../styles/Search.module.css';
import styled from 'styled-components';
import Search from '../blog/Search';


// const Wrapper = styled.ul`
// list-style-type: none;
// margin: 0;
// padding: 0;
// overflow: hidden;
// `;




const Navbar = () => {
    // const showBlogCategories = blog =>
    //     blog.categories.map((c, i) => (
    //         <Link key={i} href={`/categories/${c.slug}`}>
    //             <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
    //         </Link>
    //     ));
  return (
      <>
      
   

      <ul className={styles.ul}>
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
             <a><Link className="active" href='/categories/economy'>অর্থনীতি </Link></a>
        </li>

        <li className={styles.li}>
            <a><Link className="active" href='/categories/sports'>খেলা </Link></a>
        </li>
        
        <li className={styles.li} style={{float: 'right'}}>
       
       <Search/>

        </li>

    </ul>
    
      </>
  );
};

export default Navbar;

import Link from 'next/link';
import styles from '../../styles/Nav.module.css';
import styled from 'styled-components';
import Search from '../blog/Search';


const Wrapper = styled.div`
    // margin-left: 40px;
    // margin-right: 40px;
`;




const NavbarEng = () => {
    // const showBlogCategories = blog =>
    //     blog.categories.map((c, i) => (
    //         <Link key={i} href={`/categories/${c.slug}`}>
    //             <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
    //         </Link>
    //     ));
  return (
      <>
      <Wrapper>
      <nav className={styles.nav}>
      
          <ul>
              <li><i className="fa-solid fa-bars"></i></li>
              <li>
                  <Link href='/'>Home</Link>
              </li>
              <li>
                  <Link href='#'>Main News </Link>
              </li>
              <li>
                  <Link href='/categories/america'>America</Link>
              </li>
              <li>
                  <Link href='/categories/bangladesh'>Bangladesh </Link>
              </li>
              <li>
                  <Link href='/categories/world-news'>World News </Link>
              </li>
              <li>
                  <Link href='/categories/politics'>Politics </Link>
              </li>
              
              <li>
                  <Link href='/categories/economy'>Economy </Link>
              </li>
              <li>
                  <Link href='/categories/sports'>Sports </Link>
              </li> 
          </ul>
            <span>
            <Search/>
                <div>
                    <button className={styles.button1} >Classified</button>
                </div>
            
                <div>
                   
                        <button className={styles.button2}>বাংলা</button>
                    
                </div>
            </span>
      </nav>
      </Wrapper>

    
      </>
  );
};

export default NavbarEng;

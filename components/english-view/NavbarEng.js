import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '../../styles/Nav.module.css';
import sty from '../../styles/Search.module.css';
import styled from 'styled-components';
import {API} from '../../config';
import Search from '../blog/Search';
import { FaSearch, FaAlignRight } from 'react-icons/fa';
import { banglaVersion } from '../../service/actions/versionAction';
import { useDispatch } from 'react-redux';
import axios from 'axios';


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

const dispatch = useDispatch();

const handleClick = () => {
    props.onNavButtonClick();
    dispatch(banglaVersion());
}

    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios.get(`${API}/eallcat`)
        .then((res) => {setData(res.data)})
        .catch((err) => {console.log(err)});
    }, [])
 
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
                    <div>
                    <li className={styles.li}>
                        <a style={{cursor: "pointer"}}><Link className="active" href='/'><FaAlignRight size="25px"/></Link></a>
                    </li>
                        <li className={styles.li}>
                            <a style={{color: "#000"}}><Link className=" text-dark" href='/'>Home</Link></a>
                        </li>

                        <li className={styles.li}>
                            <a><Link className="active" href='/ecategories/bangladesh'>Main News</Link></a>
                        </li>

                        {data && data?.map((c, i) => 
                            <li className={styles.li}>
                                <Link key={i} href={`/ecategories/${c.slug}`}>
                                <a>{c.name}</a>
                                </Link>
                            </li>
                        )}

                      
                    </div>

                    <ul style={{float: "right"}}>
                        <a style={{cursor: "pointer"}} onClick={ () => setShow(!show) }><FaSearch size="25px"/></a>
                        <Link href="/">
                        <button className={styles.button} onClick={handleClick}>বাংলা ভার্সন </button>
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

export default NavbarEng;

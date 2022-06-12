import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import styles from '../../styles/Frontpage.module.css';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import styled from 'styled-components';
import Image from 'next/image';




const Nheading = styled.p`

    font-weight: 600;
    font-size: 25px;

`;

const America = () => {

    const [america, setAmerica] = useState([]);
    useEffect(() => {
        fetch(`${API}/onlycat?cat=6220fc0a36c00b3d8bf08af5`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setAmerica(data)
        })}, []);
      


  return (
    <>   
    
    <div className='container-fluid'>
     
    


    {/* **********************************************************************************************
                                        America section
    ************************************************************************************************** */}

        <div className='row'>
          <div className='col-md-12'>
          <Link href='/categories/america'>
            <p className={styles.america} style={{cursor: "pointer"}}>
              আমেরিকা
              </p>
              </Link>
            <div className={styles.hr}></div>
          </div>
        </div>

        <div className='row mt-3'>

        {america && america.slice(0, 8).map((data) => 
        <div className='col-lg-3 col-6 text-center'>
            {/* <img src='img1.jpg' className='w-100' /> */}
            <Image src={`${API}/blog/photo/${data.slug}`} width = '100' height = '60' layout="responsive" />
            <Link href={`/blogs/${data.slug}`}>
            <a className='text-start'>
              <Nheading>
                <p className="">{data.title}</p>
              </Nheading>
            </a>
            </Link>
            <p className={styles.content_justify}>{data.excerpt}</p>
          </div>
         )}
        </div>


        </div>

    </>
  )
}

export default America
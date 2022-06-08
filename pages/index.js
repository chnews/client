import Frontpage from '../components/frontend/Frontpage';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect} from 'react';
import renderHTML from 'react-render-html';
import styled from 'styled-components';
import styles from '../styles/Frontpage.module.css';
import { withRouter } from 'next/router';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../config';
import HomeRightAds from '../components/frontend/HomeRightAds';
import HomeLongAds from '../components/frontend/HomeLongAds';
import HomeSmallFirstAds from '../components/frontend/HomeSmallFirstAds';
import HomeSmallSecAds from '../components/frontend/HomeSmallSecAds';
import Poll from '../components/poll/Poll';
import { stepButtonClasses } from '@mui/material';
import Allnav from '../components/Allnav';
import Footer from '../components/Footer';
import AllnavEng from '../components/english-view/AllnavEng';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FrontTest from '../components/frontend/FrontTest';

const Nheading = styled.p`

    font-weight: 600;
    font-size: 25px;

`;

const Index = ({ last, america, router }) => {
 
  
  const head = () => (
    <Head>
        <title>NewYork News | {APP_NAME}</title>
        <meta
            name="description"
            content="Daily newyork news news"
        />
        <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
        <meta property="og:title" content={`Latest newyork news for | ${APP_NAME}`} />
        <meta
            property="og:description"
            content="Newyork News"
        />
        <meta property="og:type" content="webiste" />
        <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
        <meta property="og:site_name" content={`${APP_NAME}`} />

        <meta property="og:image" content={`${DOMAIN}/public/chalaman.png`} />
        <meta property="og:image:secure_url" content={`${DOMAIN}/public/chalaman.png`} />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );


 


  


  return ( 
    <>

     
     <div className='container-fluid'>
     <div className='row'>
       {last && last.map((latest) => 

      <div className='col-md-4 text-center'>
        <div className='col-md-12 col-sm-12'>
          <Image 
            src = {`${API}/blog/photo/${latest.slug}`} 
            width = '100' 
            height = '60' 
            layout="responsive"
          />
        </div>
        <Link href={`/blogs/${latest.slug}`}> 
          <a className='text-start'>
              <h3>
                {latest.title}
              </h3>
          </a>
        </Link>
        <p className={styles.content_justify}>{renderHTML(latest.excerpt)}</p>
      </div>

       )}
          


           
          </div>
      </div>


      {/* **********************************************************************************************
                                          America section
      ************************************************************************************************** */}

         
     
    </>
    
  )
};


// Blogs.getInitialProps = () => {
//   let skip = 0;
//   let limit = 3;
//   return listBlogsWithCategoriesAndTags(skip, limit).then(data => {
//       if (data?.error) {
//           console.log(data.error);
//       } else {
//           return {
//               blogs: data?.blogs,
//               categories: data?.categories,
//               tags: data?.tags,
//               totalBlogs: data?.size,
//               blogsLimit: limit,
//               blogSkip: skip
//           };
//       }
//   });
// };


export const getServerSideProps = async () =>{
  
  // api for latest news
  const letestnews = await fetch(`${API}/latest`);
  const latestjson = await letestnews.json();
  const last = latestjson;

  
  
  return {
    props: {
      last
    }
  }
}

  
export default withRouter(Index);
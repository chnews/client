import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { withRouter } from 'next/router';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../config';
import BanglaView from '../components/AllViews/BanglaView';
import EnglishView from '../components/AllViews/EnglishView';
import { useSelector } from 'react-redux';



const Index = ({  last,
  america,
  politics,
  sports,
  bangladesh,
  economy,
  worldnews,
  muktomot,
  special,
  technology,
  education,
  health,
  lifestyle,
  artlit,
  religion,
  travel,
  reciepe,
  entertainment,
  gallery,
  video,
  elast,
  eamerica,
  epolitics,
  esports,
  ebangladesh,
  eeconomy,
  eworldnews,
  emuktomot,
  especial,
  etechnology,
  eeducation,
  ehealth,
  elifestyle,
  eartlit,
  ereligion,
  etravel,
  ereciepe,
  eentertainment,
  egallery,
  evideo, router }) => {

 
  
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





const banglaVersion = () => {
  return (
    <>
    <BanglaView
    {...{  last,
      america,
      politics,
      sports,
      bangladesh,
      economy,
      worldnews,
      muktomot,
      special,
      technology,
      education,
      health,
      lifestyle,
      artlit,
      religion,
      travel,
      reciepe,
      entertainment,
      gallery,
      video, router }}
    />
    
    </>

  );
}

const englishVersion = () => {
  return (
    <>
    <EnglishView
    {...{  elast,
      eamerica,
      epolitics,
      esports,
      ebangladesh,
      eeconomy,
      eworldnews,
      emuktomot,
      especial,
      etechnology,
      eeducation,
      ehealth,
      elifestyle,
      eartlit,
      ereligion,
      etravel,
      ereciepe,
      eentertainment,
      egallery,
      evideo, router }}
    />
    
    
    </>
  );
};


const view = useSelector((state) => state);


  return ( 
    <>
   {head()}
    {
      view === "bangla" ? banglaVersion() : englishVersion()
    }
   
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

const [  letestnews,  amr,  politic,  sport,  banglades,  econom,  worldnew,  muktomo,  specia,  technolog,  educatio,  healt,  lifestyl, artli, religio, trave, reciep, entertainmen, galler, vide,
elatestnews, eamr,  epolitic,  esport,  ebanglades,  eeconom,  eworldnew,  emuktomo,  especia,  etechnolog,  eeducatio,  ehealt,  elifestyl, eartli, ereligio, etrave, ereciep, eentertainmen, egaller, evide,
 ] = await Promise.all([
    fetch(`${API}/latest`),
    fetch(`${API}/onlycat?cat=6220fc0a36c00b3d8bf08af5`),
    
    // api for politics cateries
    fetch(`${API}/onlycat?cat=6220fbda36c00b3d8bf08ae9`),
    // api for sports categories
    fetch(`${API}/onlycat?cat=6220fc3f36c00b3d8bf08b11`),
  // api for bangladesh categories
  fetch(`${API}/onlycat?cat=6220fc2036c00b3d8bf08b05`),

  // api for economy categories
 fetch(`${API}/onlycat?cat=6220fc3936c00b3d8bf08b0d`),

  // api for worldnews categories
  fetch(`${API}/onlycat?cat=6220fc2836c00b3d8bf08b09`),
 

  // api for Muktomot categories
  fetch(`${API}/onlycat?cat=6232b65a66acd2c41a454ae0`),
  


  // api for SpecialNews categories
  fetch(`${API}/onlycat?cat=6232c15e66acd2c41a454beb`),
  

  // api for Technology categories
  fetch(`${API}/onlycat?cat=6232f00466acd2c41a455087`),
  

  // api for Education categories
  fetch(`${API}/onlycat?cat=6232efc666acd2c41a455077`),
  

  // api for Health categories
  fetch(`${API}/onlycat?cat=6232efd066acd2c41a45507b`),


  // api for Lifestyle categories
  fetch(`${API}/onlycat?cat=6232efd866acd2c41a45507f`),


  // api for Art & Literature categories
  fetch(`${API}/onlycat?cat=6232eff766acd2c41a455083`),
 

  // api for religion categories
  fetch(`${API}/onlycat?cat=6232f01266acd2c41a45508b`),
  

  // api for travel categories
  fetch(`${API}/onlycat?cat=6232f01c66acd2c41a45508f`),
  

  // api for reciepe categories
  fetch(`${API}/onlycat?cat=6232f01266acd2c41a45508b`),
  

  // api for entertainment categories
  fetch(`${API}/onlycat?cat=6232f05866acd2c41a45509f`),
 

  // api for gallery categories
  fetch(`${API}/onlycat?cat=6232f04b66acd2c41a45509b`),
  

  // api for videos categories
  fetch(`${API}/onlycat?cat=6232f03e66acd2c41a455097`),


  //*********************************english apis **************************************************************
  //*************************************************************************** */

  fetch(`${API}/elatest`), //latest news
 fetch(`${API}/eonlycat?cat=6220fc0a36c00b3d8bf08af5`), //america
    
  
  fetch(`${API}/eonlycat?cat=6220fbda36c00b3d8bf08ae9`),  // api for politics cateries
  
  fetch(`${API}/eonlycat?cat=6220fc3f36c00b3d8bf08b11`),  // api for sports categories

  fetch(`${API}/eonlycat?cat=6220fc2036c00b3d8bf08b05`),  // api for bangladesh categories


  fetch(`${API}/eonlycat?cat=6220fc3936c00b3d8bf08b0d`),  // api for economy categories
  fetch(`${API}/eonlycat?cat=6220fc2836c00b3d8bf08b09`), // api for worldnews categories
 
  fetch(`${API}/eonlycat?cat=6232b65a66acd2c41a454ae0`), // api for Muktomot categories

  fetch(`${API}/eonlycat?cat=6232c15e66acd2c41a454beb`),  // api for SpecialNews categories
  
  fetch(`${API}/eonlycat?cat=6232f00466acd2c41a455087`), // api for Technology categories
  
  fetch(`${API}/eonlycat?cat=6232efc666acd2c41a455077`), // api for Education categories
  
  fetch(`${API}/eonlycat?cat=6232efd066acd2c41a45507b`), // api for Health categories
 
  fetch(`${API}/eonlycat?cat=6232efd866acd2c41a45507f`), // api for Lifestyle categories
  fetch(`${API}/eonlycat?cat=6232eff766acd2c41a455083`), // api for Art & Literature categories
  
  fetch(`${API}/eonlycat?cat=6232f01266acd2c41a45508b`), // api for religion categories
  
  fetch(`${API}/eonlycat?cat=6232f01c66acd2c41a45508f`), // api for travel categories 
  fetch(`${API}/eonlycat?cat=6232f01266acd2c41a45508b`), // api for reciepe categories
  fetch(`${API}/eonlycat?cat=6232f05866acd2c41a45509f`), // api for entertainment categories
  fetch(`${API}/eonlycat?cat=6232f04b66acd2c41a45509b`), // api for gallery categories
  fetch(`${API}/eonlycat?cat=6232f03e66acd2c41a455097`), // api for videos categories
  
]);

const [last, america, politics, sports, bangladesh, economy, worldnews, muktomot, special, technology, education, health, lifestyle, artlit, religion, travel, reciepe, entertainment, gallery, video, 
 elast, eamerica, epolitics, esports, ebangladesh, eeconomy, eworldnews, emuktomot, especial, etechnology, eeducation, ehealth, elifestyle, eartlit, ereligion, etravel, ereciepe, eentertainment, egallery, evideo, ] = await Promise.all([
  letestnews.json(),
  amr.json(),
  politic.json(),
  sport.json(),
  banglades.json(),
  econom.json(),
  worldnew.json(),
  muktomo.json(),
  specia.json(),
  technolog.json(),
  educatio.json(),
  healt.json(),
  lifestyl.json(),
  artli.json(),
  religio.json(),
  trave.json(),
  reciep.json(),
  entertainmen.json(),
  galler.json(),
  vide.json(),
  elatestnews.json(),
  eamr.json(),
  epolitic.json(),
  esport.json(),
  ebanglades.json(),
  eeconom.json(),
  eworldnew.json(),
  emuktomo.json(),
  especia.json(),
  etechnolog.json(),
  eeducatio.json(),
  ehealt.json(),
  elifestyl.json(),
  eartli.json(),
  ereligio.json(),
  etrave.json(),
  ereciep.json(),
  eentertainmen.json(),
  egaller.json(),
  evide.json(),
]);

//      // api for latest news
//   const letestnews = await fetch(`${API}/latest`);
//   const latestjson = await letestnews.json();
//   const last = latestjson;

//  // api for america caterories
//  const amr = await fetch(`${API}/onlycat?cat=6220fc0a36c00b3d8bf08af5`);
//  const amrjson = await amr.json();
//  const america = amrjson;
  
  
  return {
    props: {
        last,
        america,
        politics,
        sports,
        bangladesh,
        economy,
        worldnews,
        muktomot,
        special,
        technology,
        education,
        health,
        lifestyle,
        artlit,
        religion,
        travel,
        reciepe,
        entertainment,
        gallery,
        video,
        elast,
        eamerica,
        epolitics,
        esports,
        ebangladesh,
        eeconomy,
        eworldnews,
        emuktomot,
        especial,
        etechnology,
        eeducation,
        ehealth,
        elifestyle,
        eartlit,
        ereligion,
        etravel,
        ereciepe,
        eentertainment,
        egallery,
        evideo,
    }
  }
}

  
export default withRouter(Index);
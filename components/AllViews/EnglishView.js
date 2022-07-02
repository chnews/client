
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect} from 'react';
import renderHTML from 'react-render-html';
import styled from 'styled-components';
import styles from '../../styles/Frontpage.module.css';
import { withRouter } from 'next/router';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import HomeRightAds from '../../components/frontend/HomeRightAds';
import HomeLongAds from '../../components/frontend/HomeLongAds';
import HomeSmallFirstAds from '../../components/frontend/HomeSmallFirstAds';
import HomeSmallSecAds from '../../components/frontend/HomeSmallSecAds';
import Poll from '../../components/poll/Poll';



const Nheading = styled.p`

    font-weight: 600;
    font-size: 25px;

`;

const EnglishView = ({  elast,
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

  return (
    <>
    
      
    {head()}
    <div className='container-fluid'>
    
    <div className='row'>
        {elast && elast?.slice(0, 3).map((data) => 
          <div className='col-md-4 text-center' key={data._id}>
            <div className='col-md-12 col-sm-12'>
              <img 
                src = {`${API}/eblog/photo/${data.slug}`} 
                width = '100%' 
                height = '220px' 
              />
            </div>
            <Link href={`/eblogs/${data.slug}`}> 
              <a className='text-start'>
                  <h3>
                    {data.title}
                  </h3>
              </a>
            </Link>
            <p className={styles.content_justify}>{renderHTML(data.excerpt)}</p>
          </div>
        )}
      </div>



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

      {eamerica && eamerica.slice(0, 8).map((data) => 
      <div className='col-lg-3 col-6 text-center'>
          {/* <img src='img1.jpg' className='w-100' /> */}
          <Image src={`${API}/eblog/photo/${data.slug}`} width = '100' height = '60' layout="responsive" />
          <Link href={`/eblogs/${data.slug}`}>
          <a className='text-start'>
            <Nheading>
              <p className="">{data.title}</p>
            </Nheading>
          </a>
          </Link>
          <p className={styles.content_justify}>{renderHTML(data.excerpt)}</p>
        </div>
       )}
      </div>

      {/************************************************* Muktomot section start here **********************************/}
      <div className='row'>
          <div className='col-md-12'>
            <p className={styles.america}>মুক্তমত </p>
            <div className={styles.hr}></div>
          </div>
        </div>

        <div className='row mt-3'>

        {emuktomot && emuktomot.slice(0, 4).map((data) => 
          <div className='col-md-3'>
          {/* <img src='img1.jpg' className={styles.borderimg} /> */}
          <Image src={`${API}/eblog/photo/${data.slug}`} className={styles.borderimg} width = '100' height = '60' layout="responsive"/>
          <h4 className={styles.borderst}>
              <Link href={`/eblogs/${data.slug}`}>
              <a> 
                  {data.title}
              </a>
              </Link>
          </h4>
          </div>
       )}
        </div>

{/************************************************* Special news section start here **********************************/}
 
      <div className='row mt-4'>
          <div className='col-md-12'>
            <p className={styles.america}>স্পেশাল নিউজ </p>
            <div className={styles.hr}></div>
          </div>
        </div>

        
        <div className='row'>
          {especial && especial.slice(0, 4).map((data) => 
              <div className='col-md-3'>
                  <div className={styles.specialsec}>
                  {/* <img src='img1.jpg' className='w-100 h-100' /> */}
                  
                  <Image src={`${API}/eblog/photo/${data.slug}`} width = '100' height = '100' layout="responsive"/>
                  <h4 className={styles.bottomleft}>
                      <Link href={`/eblogs/${data.slug}`}>
                      <a> 
                          {data.title}
                      </a>
                      </Link>
                  </h4>
                  </div>
              </div>
          )}
        </div>

{/************************************************* bangladesh news section start here **********************************/}
<div className='row mt-4'>
          <div className='col-md-12'>
            <p className={styles.america}>বাংলাদেশ </p>
            <div className={styles.hr}></div>
          </div>
        </div>

        
            <div className='row'>
              <div className='col-md-8'>
                  <div className='row'>
                      {ebangladesh && ebangladesh.slice(0, 6).map((data) => 
                          <div className='col-md-4 mt-3'>
                              <div className={styles.banglasec}>
                              {/* <img src='img1.jpg' className='w-100'/> */}
                              <Image src={`${API}/eblog/photo/${data.slug}`} width = '100' height = '55' layout="responsive"/>
                              <h4 className='p-2'>
                                  <Link href={`/eblogs/${data.slug}`}>
                                  <a>
                                      {data.title}
                                  </a>
                                  </Link>
                              </h4>
                              <p className='p-2'>{renderHTML(data.excerpt)}</p>
                              </div>
                          </div>
                      )}
                  </div>
              </div>
              
              {/* home middle right ads */}

                  <div className='col-md-4 mt-3'>
                      <div className={styles.fixedadds} >
                          <div className='col-12'>
                              <HomeRightAds/>
                          </div>
                      </div>
                  </div>
              </div>

{/************************************************* Politics news section start here **********************************/}
        
      
          

          {/* politics section start here */}

          <div className='row'>
            <div className='col-md-4'>
              <div className='row'>
              
              <div className='row mt-4'>
                <div className='col-md-12'>
                  <p className={styles.america}>রাজনীতি</p>
                  <div className={styles.hr2}></div>
                </div>
              </div>
              
              
              <div className={styles.rajnitisec}>
                <div className='col-md-12 mt-2 border'>
                  {/* <img src='img1.jpg' className='w-100'/> */}
                  <Image src={`${API}/eblog/photo/${epolitics[0]?.slug}`} width = '100' height = '60' layout="responsive"/>
                  <div>
                    <h3 className='mt-3 p-2'>
                      <Link href={`/eblogs/${epolitics[0]?.slug}`}>
                        <a>  
                          {epolitics[0]?.title}
                        </a>
                      </Link>
                    </h3>
                  </div>



                  <div className={styles.rajnitisecimg}>

                  {epolitics && epolitics.slice(1, 4).map((data) => 
                      <div className='col-md-12 row mt-3'>
                          <span className={styles.minithumb}></span>
                      <div className='col-4'>
                          {/* <img src='img1.jpg' className='w-100'/> */}
                          <img src={`${API}/eblog/photo/${data.slug}`} width = '100' height = '60' layout="responsive"/>
                      </div>
                      <div className='col-8'>
                          <p>
                          <Link href={`/eblogs/${data.slug}`}>
                              <a> 
                              {data.title}
                              </a>
                          </Link>
                          </p>
                      </div>
                      </div>
                  )}
                  
                  </div>               
                </div>
              </div>
              </div>
              </div>
             

              {/************************************************* economy news section start here **********************************/}

            <div className='col-md-4'>
              <div className='row'>
              
              <div className='row mt-4'>
                <div className='col-md-12'>
                  <p className={styles.america}>অর্থনীতি</p>
                  <div className={styles.hr2}></div>
                </div>
              </div>
              
              
              <div className={styles.rajnitisec}>
              <div className='col-md-12 mt-2 border'>
                  {/* <img src='img1.jpg' className='w-100'/> */}
                  <Image src={`${API}/eblog/photo/${eeconomy[0]?.slug}`} width = '100' height = '60' layout="responsive"/>
                  <div>
                    <h3 className='mt-3 p-2'>
                      <Link href={`/eblogs/${eeconomy[0]?.slug}`}>
                        <a>  
                          {eeconomy[0]?.title}
                        </a>
                      </Link>
                    </h3>
                  </div>



                  <div className={styles.rajnitisecimg}>

                  {eeconomy && eeconomy.slice(1, 4).map((data) => 
                      <div className='col-md-12 row mt-3'>
                          <span className={styles.minithumb}></span>
                      <div className='col-4'>
                          {/* <img src='img1.jpg' className='w-100'/> */}
                          <img src={`${API}/eblog/photo/${data.slug}`} width = '100' height = '60' layout="responsive"/>
                      </div>
                      <div className='col-8'>
                          <p>
                          <Link href={`/eblogs/${data.slug}`}>
                              <a> 
                              {data.title}
                              </a>
                          </Link>
                          </p>
                      </div>
                      </div>
                  )}
                  
                  </div>               
                </div>
              </div>
              </div>
            </div>
            
{/************************************************* বিশ্বজুড়ে news section start here **********************************/}
<div className='col-md-4'>
              <div className='row'>
              
              <div className='row mt-4'>
                <div className='col-md-12'>
                  <p className={styles.america}>বিশ্বজুড়ে</p>
                  <div className={styles.hr2}></div>
                </div>
              </div>
              
              
              <div className={styles.rajnitisec}>
              <div className='col-md-12 mt-2 border'>
                  {/* <img src='img1.jpg' className='w-100'/> */}
                  <Image src={`${API}/eblog/photo/${eworldnews[0]?.slug}`} width = '100' height = '60' layout="responsive"/>
                  <div>
                    <h3 className='mt-3 p-2'>
                      <Link href={`/eblogs/${eworldnews[0]?.slug}`}>
                        <a>  
                          {eworldnews[0]?.title}
                        </a>
                      </Link>
                    </h3>
                  </div>



                  <div className={styles.rajnitisecimg}>

                  {eworldnews && eworldnews.slice(1, 4).map((data) => 
                      <div className='col-md-12 row mt-3'>
                          <span className={styles.minithumb}></span>
                      <div className='col-4'>
                          {/* <img src='img1.jpg' className='w-100'/> */}
                          <img src={`${API}/eblog/photo/${data.slug}`} width = '100' height = '60' layout="responsive"/>
                      </div>
                      <div className='col-8'>
                          <p>
                          <Link href={`/eblogs/${data.slug}`}>
                              <a> 
                              {data.title}
                              </a>
                          </Link>
                          </p>
                      </div>
                      </div>
                  )}
                  
                  </div>               
                </div>
              </div>
              </div>
            </div>
              </div>
              
             {/* middle advertisement start here */}
      
          <div className='row mt-3'>
            <div className='col-12 mb-2'>
              <HomeLongAds/>
            </div>
            <div className='col-6'>
              <HomeSmallFirstAds/>
            </div>
            <div className='col-6'>
              <HomeSmallSecAds/>
            </div>
          </div>
{/************************************************* education news section start here **********************************/}

<div className='row mt-3'>
          <div className='col-md-3'>
            <div className='row'>
            <div className='row mt-4 mb-2'>
                <div className='col-md-12'>
                  <p className={styles.america2}>শিক্ষা</p>
                  <div className={styles.hr2}></div>
                </div>
              </div>
              
              
              <div className={styles.rajnitisec}>
                <div className='col-md-12 border'>
                  {/* <img src='img1.jpg' className='w-100'/> */}
                  <Image src={`${API}/eblog/photo/${eeducation[0]?.slug}`} width = '100' height = '60' layout="responsive" style={{width: "100%", height: "180px"}}/>
                  <div>
                    <p className='fw-bold p-2 font-weight-bold'>
                      <Link href={`/eblogs/${eeducation[0]?.slug}`}>
                        <a> 
                          {eeducation[0]?.title}
                        </a>
                      </Link>
                    </p>
                  </div>



                  <div className={styles.rajnitisecimg}>


                    {eeducation && eeducation.slice(1, 4).map((data) => 
                     <div className='col-md-12 row mt-3'>
                     <span className={styles.minithumb}></span>
                       <div className='col-2'>
                      
                       </div>
                     <div className='col-10'>
                     <p className=''>
                       <Link href={`/eblogs/${data.slug}`}>
                           <a>
                             {data.title}
                           </a>
                       </Link>
                     </p>
                     </div>
                   </div>
                    )}
                  
                  </div>               
                </div>
              </div>
            </div>
            </div>
           {/************************************************* health news section start here **********************************/}

          <div className='col-md-3'>
            <div className='row'>
            <div className='row mt-4 mb-2'>
                <div className='col-md-12'>
                  <p className={styles.america2}>স্বাস্থ্য</p>
                  <div className={styles.hr2}></div>
                </div>
              </div>
              
              
              <div className={styles.rajnitisec}>
                <div className='col-md-12 border'>
                  {/* <img src='img1.jpg' className='w-100'/> */}
                  <Image src={`${API}/eblog/photo/${ehealth[0]?.slug}`} width = '100' height = '60' layout="responsive" style={{width: "100%", height: "180px"}}/>
                  <div>
                    <p className='fw-bold p-2 font-weight-bold'>
                      <Link href={`/eblogs/${ehealth[0]?.slug}`}>
                        <a>
                          {ehealth[0]?.title}
                        </a>
                      </Link>
                    </p>
                  </div>



                  <div className={styles.rajnitisecimg}>
                  {ehealth && ehealth.slice(1, 4).map((data) => 
                     <div className='col-md-12 row mt-3'>
                     <span className={styles.minithumb}></span>
                       <div className='col-2'>
                      
                       </div>
                     <div className='col-10'>
                     <p className=''>
                       <Link href={`/eblogs/${data.slug}`}>
                           <a>
                             {data.title}
                           </a>
                       </Link>
                     </p>
                     </div>
                   </div>
                    )}
                  
                  </div>               
                </div>
              </div>
            </div>
            </div>
{/************************************************* Lifestyle news section start here **********************************/}

            {/* ************************************************************** */}
            <div className='col-md-3'>
            <div className='row'>
            <div className='row mt-4 mb-2'>
                <div className='col-md-12'>
                  <p className={styles.america2}>লাইফস্টাইল</p>
                  <div className={styles.hr2}></div>
                </div>
              </div>
              
              
              <div className={styles.rajnitisec}>
                <div className='col-md-12 border'>
                  {/* <img src='img1.jpg' className='w-100'/> */}
                  <Image src={`${API}/eblog/photo/${elifestyle[0]?.slug}`} width = '100' height = '60' layout="responsive" style={{width: "100%", height: "180px"}}/>
                  <div>
                    <p className='fw-bold p-2 font-weight-bold'>
                      <Link href={`/eblogs/${elifestyle[0]?.slug}`}>
                        <a>
                          {elifestyle[0]?.title}
                        </a>
                      </Link>
                    </p>
                  </div>



                  <div className={styles.rajnitisecimg}>
                  {elifestyle && elifestyle.slice(1, 4).map((data) => 
                     <div className='col-md-12 row mt-3'>
                     <span className={styles.minithumb}></span>
                       <div className='col-2'>
                      
                       </div>
                     <div className='col-10'>
                     <p className=''>
                       <Link href={`/eblogs/${data.slug}`}>
                           <a>
                             {data.title}
                           </a>
                       </Link>
                     </p>
                     </div>
                   </div>
                    )}
                  
                  </div>               
                </div>
              </div>
            </div>
            </div>

             {/* ****************************************************** */}
{/************************************************* art and literature news section start here **********************************/}

          <div className='col-md-3'>
            <div className='row'>
            <div className='row mt-4 mb-2'>
                <div className='col-md-12'>
                  <p className={styles.america2}>শিল্প ও সাহিত্য</p>
                  <div className={styles.hr2}></div>
                </div>
              </div>
              
              
              <div className={styles.rajnitisec}>
                <div className='col-md-12 border'>
                  {/* <img src='img1.jpg' className='w-100'/> */}
                  <Image src={`${API}/eblog/photo/${eartlit[0]?.slug}`} width = '100' height = '60' layout="responsive" style={{width: "100%", height: "180px"}}/>
                  <div>
                    <p className='fw-bold p-2 font-weight-bold'>
                      <Link href={`/eblogs/${eartlit[0]?.slug}`}>
                        <a>
                          {eartlit[0]?.title}
                        </a>
                      </Link>
                    </p>
                  </div>



                  <div className={styles.rajnitisecimg}>
                  {eartlit && eartlit.slice(1, 4).map((data) => 
                     <div className='col-md-12 row mt-3'>
                     <span className={styles.minithumb}></span>
                       <div className='col-2'>
                      
                       </div>
                     <div className='col-10'>
                     <p className=''>
                       <Link href={`/eblogs/${data.slug}`}>
                           <a>
                             {data.title}
                           </a>
                       </Link>
                     </p>
                     </div>
                   </div>
                    )}
                  
                  </div>               
                </div>
              </div>
            </div>
          </div>
            {/* *************************************************************** */}
{/************************************************* technology news section start here **********************************/}

          <div className='col-md-3'>
            <div className='row'>
            <div className='row mt-4 mb-2'>
                <div className='col-md-12'>
                  <p className={styles.america2}>প্রযুক্তি</p>
                  <div className={styles.hr2}></div>
                </div>
              </div>
              
              
              <div className={styles.rajnitisec}>
                <div className='col-md-12 border'>
                  {/* <img src='img1.jpg' className='w-100'/> */}
                  <Image src={`${API}/eblog/photo/${etechnology[0]?.slug}`} width = '100' height = '60' layout="responsive" style={{width: "100%", height: "180px"}}/>
                  <div>
                    <p className='fw-bold p-2 font-weight-bold'>
                      <Link href={`/eblogs/${etechnology[0]?.slug}`}>
                        <a>
                          {etechnology[0]?.title}
                        </a>
                      </Link>  
                    </p>
                  </div>



                  <div className={styles.rajnitisecimg}>
                  {etechnology && etechnology.slice(1, 4).map((data) => 
                     <div className='col-md-12 row mt-3'>
                     <span className={styles.minithumb}></span>
                       <div className='col-2'>
                      
                       </div>
                     <div className='col-10'>
                     <p className=''>
                       <Link href={`/eblogs/${data.slug}`}>
                           <a>
                             {data.title}
                           </a>
                       </Link>
                     </p>
                     </div>
                   </div>
                    )}
                  
                  </div>               
                </div>
              </div>
            </div>
            </div>

{/* *************************************************************************** */}
{/************************************************* Religion news section start here **********************************/}

          <div className='col-md-3'>
            <div className='row'>
            <div className='row mt-4 mb-2'>
                <div className='col-md-12'>
                  <p className={styles.america2}>ধর্ম</p>
                  <div className={styles.hr2}></div>
                </div>
              </div>
              
              
              <div className={styles.rajnitisec}>
                <div className='col-md-12 border'>
                  {/* <img src='img1.jpg' className='w-100'/> */}
                  <Image src={`${API}/eblog/photo/${ereligion[0]?.slug}`} width = '100' height = '60' layout="responsive" style={{width: "100%", height: "180px"}}/>
                  <div>
                    <p className='fw-bold p-2 font-weight-bold'>
                      <Link href={`/eblogs/${ereligion[0]?.slug}`}>
                        <a>
                          {ereligion[0]?.title}
                        </a>
                      </Link>
                    </p>
                  </div>



                  <div className={styles.rajnitisecimg}>
                  {ereligion && ereligion.slice(1, 4).map((data) => 
                     <div className='col-md-12 row mt-3'>
                     <span className={styles.minithumb}></span>
                       <div className='col-2'>
                      
                       </div>
                     <div className='col-10'>
                     <p className=''>
                       <Link href={`/eblogs/${data.slug}`}>
                           <a>
                             {data.title}
                           </a>
                       </Link>
                     </p>
                     </div>
                   </div>
                    )}
                  
                  </div>               
                </div>
              </div>
            </div>
            </div>

            {/* ********************************************************** */}
{/************************************************* Travel news section start here **********************************/}

          <div className='col-md-3'>
            <div className='row'>
            <div className='row mt-4 mb-2'>
                <div className='col-md-12'>
                  <p className={styles.america2}>ভ্রমণ</p>
                  <div className={styles.hr2}></div>
                </div>
              </div>
              
              
              <div className={styles.rajnitisec}>
                <div className='col-md-12 border'>
                  {/* <img src='img1.jpg' className='w-100'/> */}
                  <Image src={`${API}/eblog/photo/${etravel[0]?.slug}`} width = '100' height = '60' layout="responsive"/>
                  <div>
                    <p className='fw-bold p-2 font-weight-bold'>
                      <Link href={`/eblogs/${etravel[0]?.slug}`}>
                        <a>
                          {etravel[0]?.title}
                        </a>
                      </Link>
                    </p>
                  </div>



                  <div className={styles.rajnitisecimg}>
                  {etravel && etravel.slice(1, 4).map((data) => 
                     <div className='col-md-12 row mt-3'>
                     <span className={styles.minithumb}></span>
                       <div className='col-2'>
                      
                       </div>
                     <div className='col-10'>
                     <p className=''>
                       <Link href={`/eblogs/${data.slug}`}>
                           <a>
                             {data.title}
                           </a>
                       </Link>
                     </p>
                     </div>
                   </div>
                    )}
                  
                  </div>               
                </div>
              </div>
            </div>
          </div>

            {/* ************************************************************ */}
{/************************************************* recipe news section start here **********************************/}

          <div className='col-md-3'>
            <div className='row'>
            <div className='row mt-4 mb-2'>
                <div className='col-md-12'>
                  <p className={styles.america2}>রেসিপি</p>
                  <div className={styles.hr2}></div>
                </div>
              </div>
              
              
              <div className={styles.rajnitisec}>
                <div className='col-md-12 border'>
                  {/* <img src='img1.jpg' className='w-100'/> */}
                  <Image src={`${API}/eblog/photo/${ereciepe[0]?.slug}`} width = '100' height = '60' layout="responsive"/>
                  <div>
                    <p className='fw-bold p-2 font-weight-bold'>
                    <Link href={`/eblogs/${ereciepe[0]?.slug}`}>
                        <a>
                          {ereciepe[0]?.title}
                        </a>
                      </Link>
                      </p>
                  </div>



                  <div className={styles.rajnitisecimg}>
                  {ereciepe && ereciepe.slice(1, 4).map((data) => 
                     <div className='col-md-12 row mt-3'>
                     <span className={styles.minithumb}></span>
                       <div className='col-2'>
                      
                       </div>
                     <div className='col-10'>
                     <p className=''>
                       <Link href={`/eblogs/${data.slug}`}>
                           <a>
                             {data.title}
                           </a>
                       </Link>
                     </p>
                     </div>
                   </div>
                    )}
                  
                  </div>               
                </div>
              </div>
            </div>
            </div>
            </div>

{/************************************************* sports news section start here **********************************/}


<div className='row'>
            
            <div className='col-md-8'>
              <div className='row'>
              <div className='row mt-4'>
                <div className='col-md-12'>
                  <p className={styles.america}>খেলাধুলা </p>
                  <div className={styles.hr}></div>
                </div>
              </div>


              <div className='col-lg-7 mt-2'>
                {/* <img src='img3.jpg' className='w-100'/> */}
                <img src={`${API}/eblog/photo/${esports[0]?.slug}`} style={{width: "100%", height: "300px"}}/>
                <Link href={`/eblogs/${esports[0]?.slug}`}>
                  <a>
                    <h3 className='p-2'>{esports[0]?.title}</h3>
                  </a>
                </Link>
                
               
              </div>
              <div className='col-md-5 row'>
                <div className={styles.kheladula}>
                  {esports && esports.slice(1, 6).map((data) => 
                  <>
                  <div className='col-12 row'>
                    <div className='col-4'>
                    <img src={`${API}/eblog/photo/${data.slug}`} style={{width: "100%", height: "80px"}}/>
                      </div>
                    <div className='col-8'>
                    <Link href={`/eblogs/${data.slug}`}>
                      <a>
                        {data.title}
                      </a>
                    </Link>
                    </div>
                </div>
                <hr/>
                  </>
                  
                  )}
                
                  
              </div>
              </div>
              </div>
           </div>
          
  
                        
{/************************************************* online vote system news section start here **********************************/}

<div className='col-md-4'>
            <div className='row mt-4'>
                <div className='col-md-12'>
                  <p className={styles.america}>অনলাইন ভোট </p>
                  <div className={styles.hr}></div>
                </div>
              </div>


              
                <div className='row mt-2'>
                <div className='col-6 border-start'>
                    <div className='row'>
                    <div className='col-12'>
                    <img 
                      src='../ads3.gif' 
                      className='w-100'
                      style={{
                        height: '100px',
                        weight: '100px'
                      }} 
                    />
                    <p>
                      Advantage of using an entity name: An entity name is easy to remember.
                      Disadvantage of using an entity name: Browsers may not support all entity names, but the support for entity numbers is good.
                    </p>
                    <Poll/>
                    {/* <form>
                    
                      <div className='border rounded-3 px-2'>
                          <input type="radio" id="yes" name="vote" value="yes"/>
                          <label for="yes">&nbsp;  হ্যাঁ</label><span className='float-end'>29%</span><br/>
                      </div>
                      <div className='border rounded-3  mt-2 px-2'>
                        <input type="radio" id="no" name="vote" value="no"/>
                        <label for="no">&nbsp;  না</label><span className='float-end'>29%</span><br/>
                      </div>
                      <div className='border rounded-3 mt-2 px-2'>
                        <input type="radio" id="nocomments" name="vote" value="nocomments"/>
                        <label for="nocomments"> &nbsp; মন্তব্য নাই</label><span className='float-end'>29%</span>
                      </div>

                      <div className='col-lg-12 '>
                        <button className='btn rounded-pill btn-primary float-end px-4 mt-2' type="submit">Vote</button>  
                      </div>  
                    
                    </form>  */}
                    </div>
                    <div className='col-12 row bg-light mt-4'>
                      <div className='col-6'>
                        <button className='btn rounded-pill'>Share</button>
                      </div>  
                      <div className='col-6'>
                        <button className='btn rounded-pill'>Embed</button>  
                      </div>
                      </div>
                    </div>
                  </div>  




                  <div className='col-6'>
                    <div className='row'>
                    <div className='col-12'>
                    <img 
                      src='../ads3.gif' 
                      className='w-100'
                      style={{
                        height: '100px',
                        weight: '100px'
                      }} 
                    />
                    <p>
                      Advantage of using an entity name: An entity name is easy to remember.
                      Disadvantage of using an entity name: Browsers may not support all entity names, but the support for entity numbers is good.
                    </p>
                    <Poll/>
                    {/* <form>
                    
                      <div className='border rounded-3 px-2'>
                          <input type="radio" id="yes" name="vote" value="yes"/>
                          <label for="yes">&nbsp;  হ্যাঁ</label><span className='float-end'>29%</span><br/>
                      </div>
                      <div className='border rounded-3  mt-2 px-2'>
                        <input type="radio" id="no" name="vote" value="no"/>
                        <label for="no">&nbsp;  না</label><span className='float-end'>29%</span><br/>
                      </div>
                      <div className='border rounded-3 mt-2 px-2'>
                        <input type="radio" id="nocomments" name="vote" value="nocomments"/>
                        <label for="nocomments"> &nbsp; মন্তব্য নাই</label><span className='float-end'>29%</span>
                      </div>

                      <div className='col-lg-12 '>
                        <button className='btn rounded-pill btn-primary float-end px-4 mt-2' type="submit">Vote</button>  
                      </div>  
                    
                    </form>  */}
                    </div>
                    <div className='col-12 row bg-light mt-4'>
                      <div className='col-6'>
                        <button className='btn rounded-pill'>Share</button>
                      </div>  
                      <div className='col-6'>
                        <button className='btn rounded-pill'>Embed</button>  
                      </div>
                      </div>
                    </div>
                  </div>  
                   
                </div>
              
            </div>
            </div>
        
        
{/************************************************* photo gallery section start here **********************************/}
  
          
<div className='row'>

<div className='col-lg-8'>

  

<div className='row'>
<div className='col-12'>
<div className='row mt-4'>
      <div className='col-md-12'>
        <p className={styles.america}>ছবিঘর </p>
        <div className={styles.hr}></div>
      </div>
    </div>
  <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
<div className="carousel-indicators">
  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
<div className="carousel-inner">
  <div className="carousel-item active" data-bs-interval="false">
  <img 
      src={`${API}/eblog/photo/${egallery[0]?.slug}`} 
      className="d-block w-100 p-2" 
      alt="..."
      style={{
        height: '75vh',
      }}
    />
    <div className="carousel-caption d-none d-md-block">
    <Link href={`/eblogs/${egallery[0]?.slug}`}>
      <a>
      <h5>{egallery[0]?.title}</h5>
      </a>
      </Link>
      {/* <p>Some representative placeholder content for the first slide.</p> */}
    </div>
  </div>
  <div className="carousel-item" data-bs-interval="false">
    <img 
      src={`${API}/eblog/photo/${egallery[1]?.slug}`}  
      className="d-block w-100 p-2" 
      alt="..."
      style={{
        height: '75vh',
      }}
    />
    <div className="carousel-caption d-none d-md-block">
    <Link href={`/eblogs/${egallery[1]?.slug}`}>
      <a>
      <h5>{egallery[1]?.title}</h5>
      </a>
      </Link>
      {/* <p>Some representative placeholder content for the second slide.</p> */}
    </div>
  </div>
  <div className="carousel-item " data-bs-interval="false">
  <img 
      src={`${API}/eblog/photo/${egallery[2]?.slug}`} 
      className="d-block w-100 p-2" 
      alt="..."
      style={{
        height: '75vh',
      }}
    />
    
    <div className="carousel-caption d-none d-md-block">
    <Link href={`/eblogs/${egallery[2]?.slug}`}>
      <a>
      <h5>{egallery[2]?.title}</h5>
      </a>
      </Link>
      {/* <p>Some representative placeholder content for the third slide.</p> */}
    </div>
  </div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
</button>
</div>
</div>
<div className='col-12' style={{marginLeft: '3px'}}>

  {egallery && egallery.slice(3, 10).map((data) =>

<Link href={`/eblogs/${data.slug}`}>
       <a>
        <Image 
          src={`${API}/eblog/photo/${data.slug}`} 
          className='p-1'
          width = '124'
          height="80"
        />
       </a>
    </Link>
  )}

</div>
</div>
</div>


{/************************************************* videos news section start here **********************************/}


                  <div className='col-lg-4'>
                  <div className='row mt-4'>
                      <div className='col-md-12'>
                      
                        <p className={styles.america}>ভিডিও নিউজ </p>
                        <div className={styles.hr}></div>
                      </div>
                    </div>
                  <div className={styles.kheladula}>

                    {evideo && evideo.slice(0, 5).map((data) =>
                    <>
                      <div className='col-12 row'>
                          <div className='col-4'>
                            {/* <img src='img3.jpg' /> */}
                            <Image src={`${API}/eblog/photo/${data.slug}`} height='500' width='1000' className='border'/>
                          </div>
                          <div className='col-8 p-2'>
                          <Link href={`/eblogs/${data.slug}`}>
                            <a>
                            <p className='px-2'>{data.title}</p>
                            </a>
                          </Link>
                              </div>
                      </div>
                      <hr/>
                    </>
                    )}
                      
                    
                     
                     
                    
                        
                    </div>
                  </div>

                  </div>
                  


          
    
 
         </div>
    </>
  )
}

export default EnglishView
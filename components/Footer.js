import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { API } from '../config';
import axios from 'axios';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {FaArrowAltCircleUp} from 'react-icons/fa';








const Footer = () => {


    const [data, setData] = useState([]);
    const [link, setLink] = useState([]);
    const [add, setAdd] = useState([]);
    const [address, setAddress] = useState([]);

    useEffect(() => {
        let url = `${API}/get-footer-logo`;
        axios({
            method: 'get',
            url,
        }).then(function(response){
            let logo = response.data[0];
            setData(`data:${logo.contentType};base64, ${Buffer.from(logo.image.data.data).toString('base64')}`);
        });
    });

    useEffect(() => {
        axios.get(`${API}/get-social`)
        .then((res) => {setLink(res.data)})
        .catch((err) => {console.log(err)});
    }, [])

    useEffect(() => {
        axios.get(`${API}/address/get`)
        .then((res) => {setAddress(res.data)})
        .catch((err) => {console.log(err)});
    }, [])


    useEffect(() => {
        axios.get(`${API}/get-footer-add`)
        .then((res) => {setAdd(res.data)})
        .catch((err) => {console.log(err)});
    }, [])

    // useEffect(() => {
    //     let url = `${API}/get-social`;
    //     axios.get(url, {})
    //     .then(res => {
    //         setLink(res.data)
    //     });
        
        // axios({
        //     method: 'get',
        //     url,
        // }).then(function(res){
        //     let links = res.data[0];
        //     setLink(links);
        //     console.log(links)
        // });
    // })
    
let iimmg = "news3.png";
  return (
      <>
       <span className='fixed'
       style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: "9999",
        cursor: 'pointer'
       }}
       onClick={() => window.scrollTo(0, 0)}
       >
        
        <FaArrowAltCircleUp size={30}/>
        
        </span>
        <div className='container-fluid bg-light' 
            style={{
                height: '300px', 
                position: 'relative', 
                minHeight: '300px', 
                backgroundImage: `url(${iimmg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
            }}>
            <div className='row text-center'>
                <div className='col-lg-12 mt-5'>
                    {/* comment */}
                        <Link href='/site-pages/about'>
                            <a>
                                &nbsp;&nbsp;<button className='btn rounded-pill btn-info'>About us</button>
                            </a>
                        </Link>

                        <Link href='/site-pages/contact'>
                            <a>
                                &nbsp;&nbsp;<button className='btn rounded-pill btn-info'>Contact us</button>
                            </a>
                        </Link>
                    
                        <Link href='/site-pages/advertisement'>
                            <a>
                                &nbsp;&nbsp;<button className='btn rounded-pill btn-info'>Advertisement</button>
                            </a>
                        </Link>
                        
                    
                        <Link href='/site-pages/editor'>
                            <a>
                                &nbsp;&nbsp;<button className='btn rounded-pill btn-info'>Editor</button>
                            </a>
                        </Link>
                        
                </div> 


                <div className='col-lg-12 row mt-3'>
                    <div className='col-lg-3'>
                        <Link href="/">
                            <a>
                            <img src={data && data ? data : null} height="100" width="200" style={{cursor: "pointer"}}/>
                            </a>
                        </Link>   
                    </div>
                    <div className='col-lg-6 mt-4'>
                        <p style={{fontSize: '20px'}}>
                            
                        {address?.map((singleData) => {
                            return (<>
                                {singleData.address}             
                                </> 
                            )
                        })}
                            
                            
                        </p>    
                    </div>
                    <div className='col-lg-3'>

                    {link.map((singleData) => {
                            return (<>

                    <Link href={singleData.facebook} key={singleData.facebook}><a><FacebookIcon style={{height: '40px', width: '40px'}}/></a></Link>
                    <Link href={singleData.twitter} key={singleData.twitter}><a><TwitterIcon style={{height: '40px', width: '40px'}}/></a></Link>
                    <Link href={singleData.youtube} key={singleData.youtube}><a><YouTubeIcon style={{height: '40px', width: '40px'}}/></a></Link>
                                    
                    </> 
                            )
                        })}
                    
                    </div>
                    
                 
                        
                </div>   
              
                <div className='row mt-4'>
                <hr/>
                            <div className='col-6'>
                            <p className='float-start'>@ Copyright all right reserved <span className='bold font-weight-bold'>CHALAMANNEWYORK.COM</span></p>
                            </div>
                            <div className='col-6'>
                            <p className='float-end'>Created and Developed by Techshore Bangldesh</p>
                            </div>
                        </div> 
            </div>    
        </div>

        

                    
                      
                  
      </>
    
  )
}

export default Footer
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { API } from '../../config';
import styled from 'styled-components'
import axios from 'axios';
import Image from 'next/image';



const HomeSmallFirstAds = () => {

    
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios.get(`${API}/home-first-img`)
        .then((res) => {setData(res.data)})
        .catch((err) => {console.log(err)});
    }, [])


  return (
      <>
        
             
                       
                                {/* <img src={topads} className='w-100' style={{width: "100%", height: "90px"}}/> */}
                        {data.map((singleData) => {
                            const base64String = btoa(
                            String.fromCharCode(...new Uint8Array(singleData.image.data.data))
                            );
                            return (
                                
                                
                                <Link href={singleData.url} key={singleData._id}>
                                    <Image src={`data:image/png;base64,${base64String}`} width = '100' height = '15' layout="responsive" style={{cursor: "pointer"}} alt=""/>
                                </Link>
                            
                                
                            )
                        })}
                      
                    
           
      </>
  );
};

export default HomeSmallFirstAds;

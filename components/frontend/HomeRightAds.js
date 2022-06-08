import Link from 'next/link';
import { useEffect, useState } from 'react';
import { API } from '../../config';
import styled from 'styled-components'
import axios from 'axios';



const HomeRightAds = () => {

    
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios.get(`${API}/home-right-img`)
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
                                    <img src={`data:image/png;base64,${base64String}`} style={{width: "100%", height: "400px", cursor: "pointer"}} alt=""/>
                                </Link>
                                    
                                
                            )
                        })}
                      
                    
           
      </>
  );
};

export default HomeRightAds;

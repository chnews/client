import Link from 'next/link';
import { useEffect, useState } from 'react';
import { API } from '../../config';
import styled from 'styled-components'
import axios from 'axios';
import TopRightAds from './TopRightAds';








const Logosec = () => {

    
    const [data, setData] = useState([]);
    // const [topads, setTopAds] = useState([]);
    
    // useEffect(() => {
    //     axios.get(`${API}/getlogo`)
    //     .then((res) => {setData(res.data)})
    //     .catch((err) => {console.log(err)});
    // }, [])
    
    // useEffect(() => {
    //     axios.get(`${API}/get-top-ads`)
    //     .then((res) => {setTopAds(res.data)})
    //     .catch((err) => {console.log(err)});
    
    // }, [])
    
  
useEffect(() => {
    let url = `${API}/getlogo`;
    axios({
        method: 'get',
        url,
    }).then(function(response){
        let logo = response.data[0];
        setData(`data:${logo.contentType};base64, ${Buffer.from(logo.image.data.data).toString('base64')}`);
    });
})


// useEffect(() => {
//     let topurl = `${API}/get-top-ads`;
//     axios.get(topurl).then(function(response){
//         let topp = response.data[0];
//         setTopAds(`data:${topp.contentType};base64, ${Buffer.from(topp.image.data.data).toString('base64')}`);
//     });

// })



// console.log(topads)
        
    

  


  return (
      <>
        
                <div className='row my-3'>
                <Link href="/">
                    <div className='col-2'>
                        <img src={data} className='w-100' style={{width: "100%", cursor: "pointer"}}/>
                        {/* {data.map((singleData) => {
                            const base64String = btoa(
                            String.fromCharCode(...new Uint8Array(singleData.image.data.data))
                            );
                            return <img src={`data:image/png;base64,${base64String}`} className='w-100' style={{width: "100%"}} alt=""/>
                        })} */}
                    </div>
                </Link>

                   
<div className='col-1'></div>

                    <div className='col-9'>
                   <TopRightAds/>
                       
                                {/* <img src={topads} className='w-100' style={{width: "100%", height: "90px"}}/> */}
                        {/* {topads.map((singleData) => {
                            const base64String = btoa(
                            String.fromCharCode(...new Uint8Array(singleData.image.data.data))
                            );
                            return (
                                
                                <Link href={singleData.url}>
                                    <img src={`data:image/png;base64,${base64String}`} style={{width: "100%", height: "90px"}} alt=""/>
                                </Link>
                                    
                                
                            )
                        })} */}
                      
                     
                        
                    </div>
                </div> 
           
      </>
  );
};

export default Logosec;

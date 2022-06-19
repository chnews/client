import { LineAxisOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import { getCookie, isAuth } from '../../actions/auth';
import { API } from '../../config';
import axios from 'axios';
import Logo from '../crud/ads/Logo';
import Topbanner from './ads/Topbanner';
import HomeRightAds from './ads/HomeRightAds';
import Homemiddlefirst from './ads/Homemiddlefirst';
import Homemiddlesec from './ads/Homemiddlesec';
import homeLongAds from './ads/homeMiddleLongAds';
import Belowpostads from './ads/Belowpostads';
import Homemiddlebigads from './ads/Homemiddlebigads';

const Ads = () => {

    // const [image, setImage] = useState("");
    // const [name, setName] = useState("");
    // const [linkto, setLinkto] = useState("");
    // const token = getCookie('token');

    // const handleChange = (e) => {
    //     console.log(e.target.files)
    //     setImage(e.target.files[0])
    // }

    // const handleNameChange = (e) => {
    //     setName(e.target.value)
    //     console.log(e.target.value)
    // }
    

    // const logoApi = () => {
    //     const url = `${API}/logo`;
    //     const formData = new FormData();
    //     formData.append("logo", image)
    //     formData.append('name', name)
    //     axios.post(url, formData, { headers: {"Authorization" : `Bearer ${token}`} })
    //     .then((res)=>{
    //         console.log(res)
    //     })
    // }

 


  






  return (
    <>
    
        {/* <h1 className='mt-5'>file upload</h1>
        <input type="text" name="name" value={name} onChange={handleNameChange}/>
        <input type="file" name="image" onChange={handleChange}/>
        <input type="submit" className='mt-5 float-end' onClick={logoApi}/> */}
     
<div className='row mt-5'>
  <div className='col-4 border'>
    <Topbanner/>
  </div>


  <div className='col-4 border'>
    <HomeRightAds/>
  </div>

  <div className='col-4 border'>
    <Homemiddlebigads/>
  </div>

  <div className='col-4 border'>
    <Homemiddlefirst />
  </div>

  <div className='col-4 border'>
    <Homemiddlesec/>
  </div>

  <div className='col-4 border'>
    <Belowpostads/>
  </div>

  

  
</div>



    
    </>
  )
}

export default Ads
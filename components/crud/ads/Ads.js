
import React, { useState } from 'react';
import Topbanner from './ads/Topbanner';
import HomeRightAds from './ads/HomeRightAds';
import Homemiddlefirst from './ads/Homemiddlefirst';
import Homemiddlesec from './ads/Homemiddlesec';
import Belowpostads from './ads/Belowpostads';
import Homemiddlebigads from './ads/Homemiddlebigads';

const Ads = () => {



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
import React from 'react'
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import Image from 'next/image';

const FrontTest = ({last}) => {
  return (
      <>
       {last && last.map((latest) => 
        <div className='container'>
          <div className='row'>
            <div className='col-4'>
              <h2>{latest.title}</h2>
              <Image src={`${API}/blog/photo/${latest.slug}`} height='500' width='1000' className='border'/>
            </div>
          </div>
        </div>

      )}
      
      </>
   
  )
}

export default FrontTest
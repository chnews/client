import React from 'react';
import HomeRightAds from './frontend/HomeRightAds';
import Tabs from './TabComponent/Tabs';

const Postsidebar = () => {
	  
  return (
      <>
		<div>
			<Tabs/>
		</div>  

		<div className='mt-2' style={{position: 'sticky', top: '0'}}>
			<HomeRightAds/>
		</div>
		
      </>
  )
}

export default Postsidebar
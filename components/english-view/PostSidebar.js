import React from 'react';
import HomeRightAds from '../frontend/HomeRightAds';
import Tabs from '../english-view/AllTabs/Tabs';

const PostSidebar = () => {
	  
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

export default PostSidebar
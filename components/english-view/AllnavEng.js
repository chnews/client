import React from 'react'
import Topnav from '../../components/frontend/Topnav'
import Logosec from '../../components/frontend/Logosec'
import Navbar from '../../components/frontend/Navbar';
import ScrollbarEng from '../../components/english-view/ScrollbarEng';
import styles from '../../styles/Frontpage.module.css'
import Mobilenav from './../frontend/mobile/Mobilenav';
import styled from 'styled-components';
import TopnavEng from './TopnavEng';
import NavbarEng from './NavbarEng';




const Wrapper = styled.div`

  margin-left: 2%;
  margin-right: 2%;

`

const AllnavEng = () => {
  return (
      <>    
    
       <div className='container-fluid'>
         <div className='row'>
           <div className='col-12'>
            <div className={styles.main_menu_show}>
              <Logosec/>
              <ScrollbarEng/>
            </div>


            <div className={styles.mobile_menu_show}>
              <Mobilenav/>
              <ScrollbarEng/>
            </div>
           </div>
         </div>
       </div>
       
    </>

  )
}

export default AllnavEng
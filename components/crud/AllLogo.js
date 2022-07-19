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
import Footerlogo from './ads/FooterLogo';
import SocialLink from './ads/SocialLink';

const AllLogo = () => {

  

  return (
    <>
  
    <Logo/>
    <Footerlogo/>
    <SocialLink/>
    
    </>
  )
}

export default AllLogo
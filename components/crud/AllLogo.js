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

<>
                    <div className="container-fluid bg-white pb-2">
                        <div className="row">
                            <div className="col-md-12 ">
                                <div className="page-breadcrumb">
                                    <div className="row align-items-center">
                                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                            <h4 className="page-title">Setting</h4>
                                        </div>
                                    </div>
                                    {/* /.col-lg-12 */}
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="page-wrapper">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-6 col-xlg-6 col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <Logo/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-xlg-6 col-md-6">
                                    
                                </div>

                                <div className="col-lg-6 col-xlg-6 col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <Footerlogo/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-xlg-6 col-md-6">
                                    
                                </div>

                                <div className="col-lg-6 col-xlg-6 col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                        <SocialLink/>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 col-xlg-6 col-md-6">
                                    
                                </div>

                            </div>
                        </div>
                    </div>
                </>
  
    
    
    
    
    </>
  )
}

export default AllLogo
import React from 'react'
import Link from 'next/link';
import Router from 'next/router';
import {signout, isAuth} from '../actions/auth'

import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import styles from 'react-pro-sidebar/dist/css/styles.css';




const Sidebar = () => {

  return (
  
    // <>
    
   
    //     <ProSidebar style={{position: "fixed"}}>b
    //     <Menu iconShape={styles.square}>
    //     {isAuth() && isAuth().role === 0 && (
    //         <MenuItem>
    //             <Link href="/user">
    //                 Dashboard
    //              </Link>
    //         </MenuItem>
    //     )}
    //     {isAuth() && isAuth().role === 1 && (
    //         <MenuItem>
    //             <Link href="/admin">
    //                 Dashboard
    //              </Link>
    //         </MenuItem>
    //     )}
    //         {/* posts menu */}
    //         <SubMenu title="Posts">
    //             <MenuItem>
    //                 <Link href="/admin/crud/blog">
    //                     Add New Post
    //                 </Link>
    //             </MenuItem>
    //             <MenuItem>
    //                 <Link href="/admin/crud/blogs">
    //                     All Posts
    //                 </Link>
    //             </MenuItem>
    //         </SubMenu>


    //         {/* pages menu */}
    //         <SubMenu title="Pages">
    //             <MenuItem>
    //                 <Link href="/admin/page/about">
    //                     About
    //                 </Link>
    //             </MenuItem>

    //             <MenuItem>
    //                 <Link href="/admin/page/advertisement">
    //                     Advertisement
    //                 </Link>
    //             </MenuItem>

    //             <MenuItem>
    //                 <Link href="/admin/page/editor">
    //                     Editor
    //                 </Link>
    //             </MenuItem>

    //             <MenuItem>
    //                 <Link href="/admin/page/contact">
    //                     Contact
    //                 </Link>
    //             </MenuItem>
    //         </SubMenu>

    //         {/* categories and tags */}
    //         <MenuItem>
    //             <Link href="/admin/crud/category-tag">
    //                Categories and Pages
    //             </Link>
    //         </MenuItem>


    //         {/* Ads Setting */}
    //         <MenuItem>
    //             <Link href="/admin/crud/ads">
    //             Ads Setting
    //             </Link>
    //         </MenuItem>


    //         {/* Site Setting */}
    //         <MenuItem>
    //             <Link href="/admin/crud/logo">
    //             Site Setting
    //             </Link>
    //         </MenuItem>


    //         {/* Profile Setting */}
    //         <MenuItem>
    //             <Link href="/user/update">
    //                Profile Setting
    //             </Link>
    //         </MenuItem>


    //     </Menu>
    // </ProSidebar>
  
    // </>
          
    <>
    <div id="container" style={{marginLeft: '-17px', position: "fixed", top: "0"}} className="effect aside-float aside-bright mainnav-lg">
    {/*NAVBAR*/}
    {/*===================================================*/}
    
    {/*===================================================*/}
    {/*END NAVBAR*/}
   
     
      
      {/*MAIN NAVIGATION*/}
      {/*===================================================*/}
      <nav id="mainnav-container">
        <div id="mainnav">
          {/*OPTIONAL : ADD YOUR LOGO TO THE NAVIGATION*/}
          {/*It will only appear on small screen devices.*/}
          {/*================================
              <div class="mainnav-brand">
                  <a href="index.html" class="brand">
                      <img src="img/logo.png" alt="Nifty Logo" class="brand-icon">
                      <span class="brand-text">Nifty</span>
                  </a>
                  <a href="#" class="mainnav-toggle"><i class="pci-cross pci-circle icon-lg"></i></a>
              </div>
              */}
          {/*Menu*/}
          {/*================================*/}
          <div id="mainnav-menu-wrap">
            <div className="nano">
              <div className="nano-content">
          
               
                <ul id="mainnav-menu" className="list-group">
                
                <li className="">
                  {isAuth() && isAuth().role === 0 && (
                    <Link href="/user">
                    <a href="#">
                      <i className="demo-pli-home" />
                      <span className="menu-title">Dashboard</span>
                      <i className="arrow" />
                    </a>
                    </Link>
                    )}
                    {/*Submenu*/}
                  
                  </li>
                  
                  <li className="">
                  {isAuth() && isAuth().role === 1 && (
                    <Link href="/admin">
                    <a href="#">
                      <i className="demo-pli-home" />
                      <span className="menu-title">Dashboard</span>
                      <i className="arrow" />
                    </a>
                    </Link>
                    )}
                    {/*Submenu*/}
                  
                  </li>

                 
                  {/*Menu list item*/}
                  <li>
                     {/* posts menu */}
                    <SubMenu title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Posts" className='mt-2'>
                        <MenuItem className='border-top'>
                            <Link href="/admin/crud/blog">
                                Add New Post
                            </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href="/admin/crud/blogs">
                                All Posts
                            </Link>
                        </MenuItem>
                    </SubMenu>
                   
                  </li>

                  <li>
                    {/* categories and tags */}
                    <MenuItem className='mt-2'>
                        <Link href="/admin/crud/category-tag">
                        &nbsp;&nbsp;&nbsp;Categories and Tags
                        </Link>
                    </MenuItem>
                  </li>

                  <li>
                    {/* categories and tags */}
                    
                    <SubMenu title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pages" className='mt-3'>
                        <MenuItem className='border-top'>
                            <Link href="/admin/page/about">
                                About
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href="/admin/page/advertisement">
                                Advertisement
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href="/admin/page/editor">
                                Editor
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href="/admin/page/contact">
                                Advertisement
                            </Link>
                        </MenuItem>
                    </SubMenu>
                    
                  </li>

                  <li>
                    {/* categories and tags */}
                    
                    <SubMenu title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;English Version" className='mt-3'>
                        <MenuItem className='border-top'>
                        <SubMenu title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;English Version" className='mt-3'>
                          <MenuItem className='border-top'>
                              <Link href="/admin/crud/eblog/ecreate">
                                  Add Post
                              </Link>
                          </MenuItem>
                          <MenuItem>
                              <Link href="/admin/page/advertisement">
                                  All Post
                              </Link>
                          </MenuItem>
                      </SubMenu>
                        </MenuItem>
                        <MenuItem>
                            <Link href="/admin/page/advertisement">
                                Advertisement
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href="/admin/page/editor">
                                Editor
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href="/admin/page/contact">
                                Advertisement
                            </Link>
                        </MenuItem>
                    </SubMenu>
                    
                  </li>

                  <li>
                    {/* categories and tags */}
                    <MenuItem className='mt-3'>
                        <Link href="/admin/crud/logo">
                        &nbsp;&nbsp;&nbsp;Site Settings
                        </Link>
                    </MenuItem>
                  </li>

                  <li>
                    {/* categories and tags */}
                    <MenuItem>
                        <Link href="/admin/crud/ads">
                        &nbsp;&nbsp;&nbsp;Ads Setting
                        </Link>
                    </MenuItem>
                  </li>

                  <li>
                    {/* categories and tags */}
                    <MenuItem>
                        <Link href="/user/update">
                        &nbsp;&nbsp;&nbsp;Profile
                        </Link>
                    </MenuItem>
                  </li>
                  <li>
                  <Link href="/signin">
                  <p style={
                    {
                      position: "fixed", 
                      bottom: "0", 
                      maxWidth: "220px", 
                      cursor: "pointer", 
                      width: "100%", 
                      backgroundColor: "#25476A"
                      }
                    }
                  >
                  {isAuth() && (
                  
                    <a 
                      onClick={() => signout(() => Router.push('/signin'))}
                      style={
                        {
                          color: "white", 
                          textAlign: "center", 
                          marginRight: "25px",
                          fontWeight: "bold"
                        }
                      }
                      className=""
                    >
                      <i className="demo-pli-unlock icon-lg icon-fw" /> Logout
                    </a>
                    
                  )}
                  </p>
                  </Link>
                  </li>
                </ul>
               

                

               
              </div>
            </div>
          </div>
         
        </div>
       
      </nav>
      {/*===================================================*/}
      {/*END MAIN NAVIGATION*/}

      
    </div>

   

    </>
  );
}

export default Sidebar;

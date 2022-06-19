import React from 'react'
import { useState } from 'react';
import { APP_NAME, API } from '../config';
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavLink, NavItem, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap'; 
import Link from 'next/link';
import Router from 'next/router';
import {signout, isAuth} from '../actions/auth'
import Sidebar from './Sidebar';
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import styles from 'react-pro-sidebar/dist/css/styles.css';
import { Dropdown, NavDropdown } from 'react-bootstrap';


const Header = () => {

    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => {
    //     setIsOpen(isOpen);
    // };

  return (
    <>


 {/*NAVBAR*/}
    {/*===================================================*/}
    <div className ='mb-5' >
    <header id="navbar" style={{position: "fixed"}}>
      <div id="navbar-container" className="boxed">
        {/*Brand logo & name*/}
        {/*================================*/}
        <div className="navbar-header">
          {isAuth() && isAuth().role === 1 && (
            <Link href="/admin">
              <a className="navbar-brand">
                <div className="brand-title">
                  <span className="brand-text text-white">Chlaman News</span>
                </div>
              </a>
            </Link>
          )}

          {isAuth() && isAuth().role === 0 && (
            <Link href="/user">
              <a className="navbar-brand">
                <div className="brand-title">
                  <span className="brand-text text-white">Chlaman News</span>
                 
                </div>
              </a>
            </Link>
          )}


        </div>
       
        <div className="navbar-content">
          
          <ul className="nav navbar-top-links">
            <li>
              <h5 className='text-white' style={{marginTop: "22px"}}>
              {`${isAuth()?.username}`}
              </h5>
            </li>
           
            
           
            <li id="dropdown-user" className="dropdown">
                <span className="ic-user pull-right">
                
              <UncontrolledDropdown>
               
           <DropdownToggle
             nav
           >
            <img
               src={`${API}/user/photo/${isAuth()?.username}`}
               className="img img-fluid rounded-circle mb-3"
               style={{ maxHeight: '30px', maxWidth: '100%' }}
               alt="profile image"
           />
           </DropdownToggle>
           <DropdownMenu right>
           <Link href="/user/update">
                   Profile
             </Link>
           </DropdownMenu>
         </UncontrolledDropdown>
                </span>
              

              
            </li>

            <li>
            {/* <Dropdown>
        <Dropdown.Toggle>
          <img
              src={`${API}/user/photo/${isAuth()?.username}`}
              className="img img-fluid rounded-circle mb-3"
              style={{ maxHeight: '30px', maxWidth: '100%' }}
              alt="profile image"
          />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}


            </li>

         
            
          </ul>
        </div>
      </div>
         
      
    </header>
    </div>


</>
  )
}

export default Header
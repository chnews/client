import React from 'react'
import { APP_NAME } from '../config';
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavLink, NavItem, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap'; 
import Link from 'next/link';
import Router from 'next/router';
import {signout, isAuth} from '../actions/auth'






const Header = () => {

    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => {
    //     setIsOpen(isOpen);
    // };

  return (
    <>
    {/* <div>
  <Navbar
    color="light"
    expand="md"
    light
  >
    <Link href="/">
        <NavbarBrand style={{cursor:'pointer'}}>
            <a>{APP_NAME}</a>
        </NavbarBrand>
    </Link>
    <NavbarToggler />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        
        <UncontrolledDropdown
          inNavbar
          nav
        >
          <DropdownToggle
            caret
            nav
          >
            Options
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Option 1
            </DropdownItem>
            <DropdownItem>
              Option 2
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              Reset
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
      {!isAuth() && (
      <Link href="/signin">
          <NavLink style={{cursor:'pointer'}}>
               Sign in
            </NavLink>
      </Link>
      )}
      {!isAuth() && (
      <Link href="/signup">
          <NavLink style={{cursor:'pointer'}}>
               Sign up
            </NavLink>
      </Link>
      )}
        {isAuth() && (
        <Link href="/signin">
            <NavLink style={{cursor:'pointer'}} onClick={() => signout(() => Router.push('/signin'))}>
                 Sign out
            </NavLink>
        </Link>
        )}

        {isAuth() && isAuth().role === 0 && (
          <Link href="/user">
            <NavLink style={{cursor:'pointer'}}>
                 {`${isAuth().name}'s Dashboard`}
            </NavLink>
          </Link>
        )}

        {isAuth() && isAuth().role === 1 && (
          <Link href="/admin">
            <NavLink style={{cursor:'pointer'}}>
                 {`${isAuth().name}'s Dashboard`}
            </NavLink>
          </Link>
        )}
      
    </Collapse>
  </Navbar>
</div> */}







{/* ********************************************************************* */}


 
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
        {/*================================*/}
        {/*End brand logo & name*/}
        {/*Navbar Dropdown*/}
        {/*================================*/}
        <div className="navbar-content">
          <ul className="nav navbar-top-links">
            {/*Navigation toogle button*/}
            {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
            <li className="tgl-menu-btn">
              <a className="mainnav-toggle" href="#">
                <i className="demo-pli-list-view" />
              </a>
            </li>
            {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
            {/*End Navigation toogle button*/}
            {/*Search*/}
            {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
            <li>
              <div className="custom-search-form">
                <label
                  className="btn btn-trans"
                  htmlFor="search-input"
                  data-toggle="collapse"
                  data-target="#nav-searchbox"
                >
                  <i className="demo-pli-magnifi-glass" />
                </label>
                <form>
                  <div className="search-container collapse" id="nav-searchbox">
                    <input
                      id="search-input"
                      type="text"
                      className="form-control"
                      placeholder="Type for search..."
                    />
                  </div>
                </form>
              </div>
            </li>
            {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
            {/*End Search*/}
          </ul>
          <ul className="nav navbar-top-links">
           
            
            {/*User dropdown*/}
            {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
            <li id="dropdown-user" className="dropdown">
              <a
                href="#"
                data-toggle="dropdown"
                className="dropdown-toggle text-right"
              >
                <span className="ic-user pull-right">
                  {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                  {/*You can use an image instead of an icon.*/}
                  {/*<img class="img-circle img-user media-object" src="img/profile-photos/1.png" alt="Profile Picture">*/}
                  {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                  <i className="demo-pli-male" />
                </span>
                {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                {/*You can also display a user name in the navbar.*/}
                {/*<div class="username hidden-xs">Aaron Chavez</div>*/}
                {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
              </a>
              <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right panel-default">
                <ul className="head-list">
                  <li>
                  {isAuth() && isAuth().role === 1 && (
                    <Link href="/admin">
                    <a href="#">
                      <i className="demo-pli-male icon-lg icon-fw" /> Dashboard
                    </a>
                    </Link>
                    )}
                  </li>

                  <li>
                  {isAuth() && isAuth().role === 0 && (
                    <Link href="/user">
                    <a href="#">
                      <i className="demo-pli-male icon-lg icon-fw" /> Dashboard
                    </a>
                    </Link>
                    )}
                  </li>

                  <li>
                    <a href="#">
                      <i className="demo-pli-male icon-lg icon-fw" /> Profile
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="demo-pli-gear icon-lg icon-fw" /> Settings
                    </a>
                  </li>
                  
                  <li>
                  {/* {isAuth() && (
                  <Link href="/signin">
                      <NavLink style={{cursor:'pointer'}} onClick={() => signout(() => Router.push('/signin'))}>
                          Sign out
                      </NavLink>
                  </Link>
                  )}
                   */}
                  {isAuth() && (
                  <Link href="/signin">
                    <a onClick={() => signout(() => Router.push('/signin'))}>
                      <i className="demo-pli-unlock icon-lg icon-fw" /> Logout
                    </a>
                    </Link>
                  )}
                  </li>
                </ul>
              </div>
            </li>
            {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
            {/*End user dropdown*/}
            
          </ul>
        </div>
      </div>
    </header>
    </div>



</>
  )
}

export default Header
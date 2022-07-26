import React, {useState} from 'react'
import Link from 'next/link';
import Router from 'next/router';
import {signout, isAuth} from '../actions/auth'

import { AiOutlineDashboard } from 'react-icons/ai';

import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import styles from 'react-pro-sidebar/dist/css/styles.css';
import { GoDashboard } from 'react-icons/go';
import { SiTextpattern } from 'react-icons/si';
import { BiCategory } from 'react-icons/bi';
import { BsFileEarmarkPostFill } from 'react-icons/bs';
import { FiUsers, FiSettings } from 'react-icons/fi';
import { FaUserShield } from 'react-icons/fa';
import { GrGallery } from 'react-icons/gr';
import { RiGalleryLine, RiAdvertisementLine } from 'react-icons/ri';
import { MdOutlinePermMedia, MdOutlineCategory, MdOutlineContactPage } from 'react-icons/md';




const Sidebar = () => {





  return (    
    <>
   <div className="" style={{position: "fixed", top: "27px", height: "650px"}}>
      <ProSidebar width="220px" breakPoint="xs">
      <SidebarContent>
        <Menu>
          <MenuItem icon={<GoDashboard />}>
            {isAuth() && isAuth().role === 0 && (
              <Link href="/user">
              <a href="#">
                <i className="demo-pli-home" />
                 <span className="menu-title"> Dashboard</span>
                <i className="arrow" />
              </a>
              </Link>
            )}
            {isAuth() && isAuth().role === 1 && (
              <Link href="/admin">
              <a href="#">
                <i className="demo-pli-home" />
                <span className="menu-title">Dashboard</span>
                <i className="arrow" />
              </a>
              </Link>
            )}
          </MenuItem>
         
          <MenuItem icon={<BiCategory/>}><Link href="/admin/crud/category-tag">Category</Link></MenuItem>
          <MenuItem icon={<BiCategory/>}><Link href="/admin/crud/subcategory">Subcategory</Link></MenuItem>
          <MenuItem icon={<BiCategory/>}><Link href="/admin/crud/tags">Tag</Link></MenuItem>
            

         

          {/* <MenuItem icon={<MdOutlinePermMedia />}><Link href="#">Media</Link></MenuItem> */}
          
          <MenuItem icon={<RiGalleryLine />}><Link href="/admin/gallery">Gallery</Link></MenuItem>
          
          <SubMenu icon={<BsFileEarmarkPostFill />} title="Posts">
            <MenuItem><Link href="/admin/crud/blog">Add Post </Link></MenuItem>
            <MenuItem><Link href="/admin/crud/blogs">All Posts</Link></MenuItem>
          </SubMenu>

          <SubMenu icon={<MdOutlineContactPage />} title="Pages">
            <MenuItem><Link href="/admin/page/about">About</Link></MenuItem>
            <MenuItem><Link href="/admin/page/addpage">Add Page</Link></MenuItem>
            <MenuItem><Link href="/admin/page/allpage">All Pages</Link></MenuItem>
            <MenuItem><Link href="/admin/page/contact">Contact</Link></MenuItem>
            <MenuItem><Link href="/admin/page/editor">Editor</Link></MenuItem>
            <MenuItem><Link href="/admin/page/advertisement">Advertisement</Link></MenuItem>
          </SubMenu>
          
          <MenuItem icon={<RiAdvertisementLine />}><Link href="/admin/crud/ads">Ads Setting</Link></MenuItem>
          <MenuItem icon={<FaUserShield />}><Link href="/user/update">Profile</Link></MenuItem>
          <MenuItem icon={<FiSettings />}><Link href="/admin/crud/logo">Setting</Link></MenuItem>
         
         
         {/* English version menu */}
          <SubMenu icon={<GrGallery />} title="English Version">
            <SubMenu title="Posts">
              <MenuItem><Link href="/admin/crud/eblog/ecreate">Add Post </Link></MenuItem>
              <MenuItem><Link href="/admin/crud/eblog/eblogs">All Posts</Link></MenuItem>
            </SubMenu>
            <MenuItem><Link href="/admin/crud/eblog/ecategory">Category</Link></MenuItem>
            <MenuItem><Link href="/admin/crud/eblog/esubcategory">Subcategory</Link></MenuItem>
            <MenuItem><Link href="/admin/crud/eblog/etags">Tags</Link></MenuItem>
            <SubMenu title="Pages">
              <MenuItem><Link href="/admin/page/about">About</Link></MenuItem>
              <MenuItem><Link href="/admin/page/contact">Contact</Link></MenuItem>
              <MenuItem><Link href="/admin/page/editor">Editor</Link></MenuItem>
              <MenuItem><Link href="/admin/page/advertisement">Advertisement</Link></MenuItem>
            </SubMenu>
          </SubMenu>

          <MenuItem icon={<FiUsers />}><Link href="/admin/users">Users</Link></MenuItem>

        </Menu>
      </SidebarContent>
    </ProSidebar>
    </div>

   </>

   
  );
}

export default Sidebar;

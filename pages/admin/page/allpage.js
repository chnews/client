import React from 'react'
import About from '../../../components/page/About'
import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import Link from 'next/link';
import Head from 'next/head';
import Sidebar from '../../../components/Sidebar';
import StyleLinks from '../../../components/StyleLinks';
import Header from '../../../components/Header';
import AddPage from '../../../components/page/AddPage';
import AllPage from '../../../components/page/AllPage';

const allpage = () => {
  return (
    <>

   
     <Layout>
            <Admin>
            
              <AllPage/>
                  
            </Admin>
        </Layout>
        <StyleLinks/>
    </>
  )
}

export default allpage
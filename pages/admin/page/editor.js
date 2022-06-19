import React from 'react'
import About from '../../../components/page/About'
import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import Link from 'next/link';
import Head from 'next/head';
import Sidebar from '../../../components/Sidebar';
import StyleLinks from '../../../components/StyleLinks';
import Editor from '../../../components/page/Editor';
import Header from '../../../components/Header';

const editor = () => {
  return (
    <>
    {/* <Header/> */}
     <Layout>
            <Admin>
            <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12'>
                        <Editor/>
                        </div>
                    </div>
                </div>
                
            </Admin>
        </Layout>
        <StyleLinks/>
    </>
  )
}

export default editor
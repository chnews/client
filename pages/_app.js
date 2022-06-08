import Head from 'next/head'
import App from 'next/app'
import { useEffect } from 'react'
import Script from 'next/script'
// import Layout from '../components/Layout'
import Topnav from '../components/frontend/Topnav'
import Logosec from '../components/frontend/Logosec'
import Navbar from '../components/frontend/Navbar';
import Scrollbar from '../components/frontend/Scrollbar'
import Layout2 from '../components/Layout2'
import '../styles/globals.css'
import Allnav from '../components/Allnav';
import Layout from '../components/Layout';
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'


class MyApp extends App {
    render() {

      const { Component, pageProps, router } = this.props
  
      return (
          <>
            <Allnav/>
            <Layout2>
                <Component {...pageProps}></Component>
            </Layout2>
            <Footer/>
        </>
      )
      }
    }

  
  export default MyApp



import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import BlogCreate from '../../../components/crud/BlogCreate';
import Link from 'next/link';
import Head from 'next/head';
import Sidebar from '../../../components/Sidebar';
import StyleLinks from '../../../components/StyleLinks';
import Header from '../../../components/Header';

const Blog = () => {

    
    return (

        <>
        {/* <Header/> */}

        <Layout>
            <Admin>
                <div className='container-fluid'>
                    <div className='row mt-5'>
                        <div className='col-12'>
                            <BlogCreate />
                        </div>
                    </div>
                </div>
                
            </Admin>
        </Layout>

        <StyleLinks/>
   
    
        </>
        
    );
};

export default Blog;

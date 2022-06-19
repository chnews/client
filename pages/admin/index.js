import React from 'react'
import Layout from '../../components/Layout';
import Admin from '../../components/auth/Admin';
import Dashboard from '../../components/Dashboard';
import StyleLinks from '../../components/StyleLinks';


const AdminIndex = () => {
  return (
    <>

    <Layout>
      <Admin>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12'>
                    <h1 className='text-center'>
                      <Dashboard/>
                    </h1>
                </div>
            </div>
            </div>
        
      </Admin>
    </Layout>
    <StyleLinks/>
    </>
    
  )
}
AdminIndex.displayName = 'AdminIndex'
export default AdminIndex;

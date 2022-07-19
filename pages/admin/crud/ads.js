import React from 'react'
import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import Ads from '../../../components/crud/Ads'
import StyleLinks from '../../../components/StyleLinks';


const AdminIndex = () => {
  return (
    <>

  
    
    <Layout>
      <Admin>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12'>
                    <Ads />
                </div>
            </div>
            </div>
        
      </Admin>
    </Layout>
    </>

  )
}
export default AdminIndex;

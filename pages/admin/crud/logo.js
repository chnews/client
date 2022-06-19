import React from 'react'
import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import StyleLinks from '../../../components/StyleLinks';
import AllLogo from '../../../components/crud/AllLogo';


const AdminIndex = () => {
  return (
    <>

   
    
    <Layout>
      <Admin>
        <div className='container-fluid'>
          <div className='row'>
              <div className='col-md-12'>
              
            <AllLogo/>
                  
              </div>
          </div>
        </div>
        
      </Admin>
    </Layout>
    <StyleLinks/>
    </>
   
  )
}
export default AdminIndex;

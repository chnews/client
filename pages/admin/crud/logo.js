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
            <AllLogo/>
          <StyleLinks/>
      </Admin>
    </Layout>
    </>
   
  )
}
export default AdminIndex;

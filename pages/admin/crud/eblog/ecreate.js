import Layout from '../../../../components/Layout';
import Admin from '../../../../components/auth/Admin';
import StyleLinks from '../../../../components/StyleLinks';
import EblogCreate from '../../../../components/english-view/crud/EblogCreate';

const Eblog = () => {

    
    return (

        <>
        {/* <Header/> */}

        <Layout>
            <Admin>
                <div className='container-fluid'>
                    <div className='row mt-5'>
                        <div className='col-12'>
                            <EblogCreate />
                        </div>
                    </div>
                </div>
                
            </Admin>
        </Layout>

        <StyleLinks/>
   
    
        </>
        
    );
};

export default Eblog;

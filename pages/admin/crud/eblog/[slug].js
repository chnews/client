import Layout from '../../../../components/Layout';
import Admin from '../../../../components/auth/Admin';
import EblogUpdate from '../../../../components/english-view/crud/EblogUpdate';
import StyleLinks from '../../../../components/StyleLinks';

const Blog = () => {
    return (

        <>

        <Layout>
            <Admin>
                <div className='container-fluid mt-5'>
                    <div className='row'>
                        <div className='col-12'>
                            <EblogUpdate />
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

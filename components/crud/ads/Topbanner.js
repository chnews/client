import { LineAxisOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import { getCookie, isAuth } from '../../../actions/auth';
import { API } from '../../../config';
import axios from 'axios';

const Topbanner = () => {

    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [linkto, setLinkto] = useState("");
    const token = getCookie('token');

    const handleChange = (e) => {
        console.log(e.target.files)
        setImage(e.target.files[0])
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
        console.log(e.target.value)
    }

    const handleLinkChange = (e) => {
        setLinkto(e.target.value)
        console.log(e.target.value)
    }

  

    const topRightAdsApi = () => {
      const url = `${API}/topbanner`;
      const formData = new FormData();
      formData.append("ads", image)
      formData.append('name', name)
      formData.append('url', linkto)
      axios.post(url, formData, { headers: {"Authorization" : `Bearer ${token}`} })
      .then((res)=>{
          console.log(res)
      })
  }


  






  return (
    <>
    
    <>
    <div className="container-fluid bg-white pb-2">
                        <div className="row">
                            <div className="col-md-12 ">
                                <div className="page-breadcrumb">
                                    <div className="row align-items-center">
                                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                            <h4 className="page-title">Ads Setting</h4>
                                        </div>
                                    </div>
                                    {/* /.col-lg-12 */}
                                </div>

                            </div>
                        </div>
                    </div>
 

                    <div className="page-wrapper">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-6 col-xlg-6 col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                          <p className="text-bold text-uppercase">
                                            Top Right Banner Ads
                                          </p>
                                          <hr/>

                                                <div className="form-group">
                                                    <label className="">Banner Title</label>
                                                    <input type="text" className="form-control" name="name" value={name} onChange={handleNameChange}/>
                                                </div>

                                                <div className="form-group">
                                                    <label className="">Link URL</label>
                                                    <input type="text" className="form-control" name="url" value={linkto} onChange={handleLinkChange} />
                                                </div>

                                                <div className='row'>
                                                    <div className='col-12'>
                                                        <div className="mb-3">
                                                            <label htmlFor="formFileSm" className="form-label">
                                                               Banner Image
                                                            </label>
                                                            <input type="file"  name="image" onChange={handleChange} accept="image/*" className="form-control form-control-sm" id="formFileSm"/>
                                                        </div>
                                                    </div>

                                                    <div className='col-6'>
                                                        {/* {image && <img src={image} style ={{width: '100px', height: '100px'}}/>} */}
                                                    </div>
                                                </div>

                                                <div>
                                                    <button type="submit" className="btn btn-primary" onClick={topRightAdsApi}>
                                                        Submit
                                                    </button>
                                                </div>


                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xlg-6 col-md-6">
                                    
                                </div>

                            </div>
                        </div>
                    </div>
                </>

    
    </>
  )
}

export default Topbanner;

import { LineAxisOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import { getCookie, isAuth } from '../../../actions/auth';
import { API } from '../../../config';
import axios from 'axios';

const Homemiddlebigads = () => {

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

  

    const HomemiddlebigadsApi = () => {
      const url = `${API}/home-long-img`;
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
    
     


{/*       
        <input type="text" name="name" value={name} onChange={handleNameChange}/>
        <input type="text" name="url" value={linkto} onChange={handleLinkChange}/>
        <input type="file" name="image" onChange={handleChange}/>
        <input type="submit" className='mt-5 float-end' onClick={homeRightAdsApi}/>
      
     */}
        <div className='row '>
    <div className='col-12 bg-light'>

    
    <div className="panel-body">
   
      <h4 className="text-main text-bold text-uppercase text-center">
        Home Middle long Banner
      </h4>

      <div className="form-group">
        <label className=""><h5>Title</h5></label>
        <input type="text" className="form-control" name="name" value={name} onChange={handleNameChange}/>
    </div>

    <div className="form-group">
        <label className=""><h5>URL</h5></label>
        <input type="text" className="form-control" name="url" value={linkto} onChange={handleLinkChange} />
    </div>
      <div className="dropzone-container mb-3">
       
          <div className="dz-default dz-message">
            {/* <div className="dz-icon">
              <i className="demo-pli-upload-to-cloud icon-5x" />
            </div> */}
            {/* <div>
              <span className="dz-text">Drop files to upload</span>
              <p className="text-sm text-muted">
                or click to pick manually
              </p>
            </div> */}
          </div>
          <div className="fallback">
          <small className="text-muted">Upload Logo Here</small>
                <br />
                <label className="btn btn-outline-info">
                    Upload image
                    <input type="file"  name="image" onChange={handleChange} accept="image/*" hidden/>
                </label>
          </div>

          <div className="row">
            <div className="col-sm-6 col-sm-offset-6 toolbar-right text-right">
            <button className="btn btn-primary" type='submit' onClick={HomemiddlebigadsApi}>Save</button>
            </div>
        </div>
       
      </div>
      
      <hr />
    
      
    </div>
  </div>

 

   

    <div>
        
         
        
    </div>

</div>

    
    </>
  )
}

export default Homemiddlebigads;
import { LineAxisOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import { getCookie, isAuth } from '../../../actions/auth';
import { API } from '../../../config';
import axios from 'axios';

const SocialLink = () => {

    const [facebook, setFacebook] = useState("");
    const [twitter, setTwitter] = useState("");
    const [youtube, setYoutube] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [instagram, setInstagram] = useState("");
    const token = getCookie('token');

    

    const handleFacebookChange = (e) => {
        setFacebook(e.target.value)
        console.log(e.target.value)
    }

    const handleTwitterChange = (e) => {
        setTwitter(e.target.value)
    }

    const handleYoutubeChange = (e) => {
        setYoutube(e.target.value)
    }

    const handleInstagramChange = (e) => {
        setInstagram(e.target.value)
    }

    const handleLinkedinChange = (e) => {
        setLinkedin(e.target.value)
    }
    

    const socialApi = () => {
        const url = `${API}/social-link`;
        const formData = new FormData();
        formData.append('facebook', facebook)
        formData.append('twitter', twitter)
        formData.append('youtube', youtube)
        formData.append('linkedin', linkedin)
        formData.append('instagram', instagram)
        axios.post(url, formData, { headers: {"Authorization" : `Bearer ${token}`} })
        .then((res)=>{
            console.log(res)
        })
        
    }

 


  






  return (
    <>
    
        {/* <h1 className='mt-5'>Logo Upload</h1>
        <input type="text" name="name" value={name} onChange={handleNameChange}/>
        <input type="file" name="image" onChange={handleChange}/>
        {/* <input type="submit" className='mt-5 float-end' onClick={logoApi}/> 
        <button type="submit" className='mt-5 float-end' onClick={logoApi}>Logo Submit</button> */}
     

    





<div className='row'>
    <div className='col-12 bg-light'>

    
    <div className="panel-body">
   
      <h3 className="text-main text-bold text-uppercase text-center">
        Social Links
      </h3>

      <div className="form-group">
        <label className=""><h5>Facebook</h5></label>
        <input type="text" className="form-control" name="facebook" value={facebook} onChange={handleFacebookChange}/>
    </div>

    <div className="form-group">
        <label className=""><h5>Twitter</h5></label>
        <input type="text" className="form-control" name="twitter" value={twitter} onChange={handleTwitterChange}/>
    </div>

    <div className="form-group">
        <label className=""><h5>YouTube</h5></label>
        <input type="text" className="form-control" name="youtube" value={youtube} onChange={handleYoutubeChange}/>
    </div>

    <div className="form-group">
        <label className=""><h5>Linkedin</h5></label>
        <input type="text" className="form-control" name="linkedin" value={linkedin} onChange={handleLinkedinChange}/>
    </div>

    <div className="form-group">
        <label className=""><h5>instagram</h5></label>
        <input type="text" className="form-control" name="instagram" value={instagram} onChange={handleInstagramChange}/>
    </div>
    {/* <div className="form-group">
        <label className=""><h5>URL</h5></label>
        <input type="text" className="form-control"  />
    </div> */}
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
        

          <div className="row">
            <div className="col-sm-6 col-sm-offset-6 toolbar-right text-right">
            <button className="btn btn-primary" type='submit' onClick={socialApi}>Save</button>
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

export default SocialLink;
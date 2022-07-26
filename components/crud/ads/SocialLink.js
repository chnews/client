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
        console.log(e.target.value)
    }

    const handleYoutubeChange = (e) => {
        setYoutube(e.target.value)
        console.log(e.target.value)
    }

    const handleInstagramChange = (e) => {
        setInstagram(e.target.value)
        console.log(e.target.value)
    }

    const handleLinkedinChange = (e) => {
        setLinkedin(e.target.value)
        console.log(e.target.value)
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
    
     
            
                    

                   
                                        <p className="text-bold text-uppercase">
                                          Social Links
                                        </p>
                                        <hr/>
                                            <div className="form-group">
                                                <label className="">Facebook</label>
                                                <input type="text" className="form-control" name="facebook" value={facebook} onChange={handleFacebookChange}/>
                                            </div>

                                            <div className="form-group">
                                                <label className="">Twitter</label>
                                                <input type="text" className="form-control" name="twitter" value={twitter} onChange={handleTwitterChange}/>
                                            </div>

                                            <div className="form-group">
                                                <label className="">YouTube</label>
                                                <input type="text" className="form-control" name="youtube" value={youtube} onChange={handleYoutubeChange}/>
                                            </div>

                                            <div className="form-group">
                                                <label className="">Linkedin</label>
                                                <input type="text" className="form-control" name="linkedin" value={linkedin} onChange={handleLinkedinChange}/>
                                            </div>

                                            <div className="form-group">
                                                <label className="">instagram</label>
                                                <input type="text" className="form-control" name="instagram" value={instagram} onChange={handleInstagramChange}/>
                                            </div>
                                            

                                                <div>
                                                <button className="btn btn-primary" type='submit' onClick={socialApi}>Save</button>
                                                </div>


       







</>
  )
}

export default SocialLink;
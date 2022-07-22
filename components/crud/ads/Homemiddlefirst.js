
import { LineAxisOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import { getCookie, isAuth } from '../../../actions/auth';
import { API } from '../../../config';
import axios from 'axios';

const Homemiddlefirst = () => {

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

  

    const HomemiddlefirstApi = () => {
      const url = `${API}/home-first-img`;
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
   

   <div className="page-wrapper">
       <div className="container-fluid">
           <div className="row">
               <div className="col-lg-6 col-xlg-6 col-md-6">
                   <div className="card">
                       <div className="card-body">
                         <p className="text-bold text-uppercase">
                         Home Middle small first Banner
                         </p>
                         <hr/>

                               <div className="form-group">
                                   <label className="">Title</label>
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
                                             Image
                                           </label>
                                           <input type="file"  name="image" onChange={handleChange} accept="image/*" className="form-control form-control-sm" id="formFileSm"/>
                                       </div>
                                   </div>

                                   <div className='col-6'>
                                       {/* {image && <img src={image} style ={{width: '100px', height: '100px'}}/>} */}
                                   </div>
                               </div>

                               <div>
                                   <button type="submit" className="btn btn-primary" onClick={HomemiddlefirstApi}>
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

export default Homemiddlefirst;
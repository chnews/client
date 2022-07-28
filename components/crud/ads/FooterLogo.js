import { LineAxisOutlined } from '@mui/icons-material';
import React, { useState, useRef } from 'react';
import { getCookie, isAuth } from '../../../actions/auth';
import { API } from '../../../config';
import axios from 'axios';

const Footerlogo = () => {

    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [linkto, setLinkto] = useState("");

    const [address, setAddress] = useState("");
    const [isUpdating, setUpdating] = useState("");

    const token = getCookie('token');

    const ref = useRef();

    const reset = () => {
        ref.current.value = "";
      };

    const handleChange = (e) => {
        console.log(e.target.files)
        setImage(e.target.files[0])
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
        console.log(e.target.value)
    }
    

    const logoApi = (e) => {
        
        e.preventDefault();
        const url = `${API}/footer-logo`;
        const formData = new FormData();
        formData.append("ads", image)
        formData.append('name', name)
        axios.post(url, formData, { headers: {"Authorization" : `Bearer ${token}`} })
        .then((res)=>{
            console.log(res)
            setImage(null)
        })
        
    }


    const addUpdateAddress = (e) => {
        e.preventDefault();

        if (isUpdating === "") {
          axios.post(`${API}/address/save`, { address })
            .then((res) => {
              console.log(res.data);
              setAddress("");
            })
            .catch((err) => console.log(err));
        }else{
          axios.post(`${API}/address/save`, { _id: isUpdating, address })
            .then((res) => {
              console.log(res.data);
              setAddress("");
              setUpdating("");
            
            })
            .catch((err) => console.log(err));
        }
      }




  return (
    <>
                   
                                          <p className="text-bold text-uppercase">
                                            Footer Logo
                                          </p>
                                          <hr/>
                                          <form onSubmit={logoApi}>
                                                <div className='row'>
                                                    <div className='col-12'>
                                                        <div className="mb-3">
                                                            <label htmlFor="formFileSm" className="form-label">
                                                               Footer Logo Image
                                                            </label>
                                                            <input type="file" ref={ref} name="image" onChange={handleChange} accept="image/*" className="form-control form-control-sm" id="formFileSm"/>
                                                        </div>
                                                    </div>

                                                    <div className='col-6'>
                                                        {/* {image && <img src={image} style ={{width: '100px', height: '100px'}}/>} */}
                                                    </div>
                                                </div>

                                                <div>
                                                    <button type="submit" className="btn btn-primary" onClick={reset}>
                                                        Submit
                                                    </button>
                                                </div>
                                                </form>



                                                <div className='mt-5'>
                                                <p className="text-bold text-uppercase">
                                            Footer Address
                                          </p>
                                          <hr/>
                                                <div className='row'>
                                                    <div className="form-group">
                                                    <label className="">Address</label>
                                                    <input type="text" className="form-control" name="name" value={address} onChange={(e) => setAddress(e.target.value)}/>
                                                </div>

                                                    <div className='col-6'>
                                                        {/* {image && <img src={image} style ={{width: '100px', height: '100px'}}/>} */}
                                                    </div>
                                                </div>

                                                <div>
                                                    <button type="submit" className="btn btn-primary" onClick={addUpdateAddress}>
                                                        Submit
                                                    </button>
                                                </div>
                                                </div>


                </>
  )
}

export default Footerlogo;
import React from 'react'
import {useState, useEffect} from 'react'
import { API } from '../../config';
import {getCookie} from '../../actions/auth';
import {getProfile, create} from '../../actions/user';
import axios from 'axios';

const Users = ({ users }) => {

    
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [about, setAbout] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [isUpdating, setUpdating] = useState("");
    const [userss, setUsers] = useState({
        error: false,
        success: false,
        categories: [],
        removed: false,
        reload: true
    });

    const [image, setImage] = useState(null);
    const [values, setValues] = useState({
        username: '',
        name: '',
        email: '',
        about: '',
        password: '',
        role: '',
        error: false,
        success: false,
        loading: false,
        photo: '',
        userData: ''
    });

    const token = getCookie('token');
    const { reload, error, success, loading, photo, userData } = values;

    useEffect(() => {
        axios.get(`${API}/user/get`)
          .then((res) => setUsers(res.data))
          .catch((err) => console.log(err));
      }, [reload]);


      const addUpdateUser = (e) => {
        e.preventDefault();

        if (isUpdating === "") {
          axios.post(`${API}/user/save`, { name, username, email, about, role, password })
            .then((res) => {
              console.log(res.data);
              setUsername("");
                setName("");
                setEmail("");
                setAbout("");
                setRole("");
                setPassword("");
            }).then(() => {
                setValues({
                    ...values,
                    error: false,
                    success: false,
                    categories: [],
                    removed: false,
                    reload: true
                });
            })
            .catch((err) => console.log(err));
        }else{
          axios.post(`${API}/user/update`, { _id: isUpdating, name, username, email, about, role, password })
            .then((res) => {
              console.log(res.data);
              setUsername("");
                setName("");
                setEmail("");
                setAbout("");
                setRole("");
                setPassword("");
              setUpdating("");
              setValues({
                ...users,
                error: false,
                success: false,
                categories: [],
                removed: false,
                reload: true
            });
            })
            .catch((err) => console.log(err));
        }
      }

      const updateUser = (_id, name, username, email, about, role, password) => {
        setUpdating(_id);
        setUsername(username);
        setName(name);
        setEmail(email);
        setAbout(about);
        setRole(role);
        setPassword(password);

      }

      const deleteUser = (_id) => {
        alert("Are you sure you want to delete this user?");
        axios.post(`${API}/user/delete`, { _id })
          .then((res) => console.log(res.data))
          .then((res) => {
            console.log(res.data);
            setUsername("");
            setName("");
            setEmail("");
            setAbout("");
            setRole("");
            setPassword("");
          })
          .catch((err) => console.log(err));
      }

    const handleChange = name => e => {
        
        
        const value = name === 'photo' ? e.target.files[0] : e.target.value;
        let userFormData = new FormData();
        userFormData.set(name, value);
        setValues({ ...values, [name]: value, userData: userFormData, error: false, success: false });
        
        
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.onload = function(e){
            
            setImage(e.target.result);
        }
        fileReader.readAsDataURL(file);
        
    };

  

    const handleSubmit = e => {
        e.preventDefault();
        setValues({ ...values, loading: true });
        create(token, userData).then(data => {
            if (data?.error) {
                setValues({ ...values, error: data.error, success: false, loading: false });
            } else {
                createUser(data, () => {
                    setValues({
                        ...values,
                        username: data?.username,
                        name: data?.name,
                        email: data?.email,
                        about: data?.about,
                        password: '',
                        success: true,
                        loading: false
                    });
                });
            }
        });
    };
    
    
    
    return (


        <>
            <div>
                <>
                    <div className="container-fluid bg-white pb-2">
                        <div className="row">
                            <div className="col-md-12 ">
                                <div className="page-breadcrumb">
                                    <div className="row align-items-center">
                                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                            <h4 className="page-title">User Management</h4>
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
                                <div className="col-lg-4 col-xlg-3 col-md-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <form onSubmit={addUpdateUser}>

                                                <div className="form-group">
                                                    <label className="text-muted">Username</label>
                                                    <input type="text" className="form-control" 
                                                    onChange={(e) => setUsername(e.target.value)}
                                                    value={username}/>
                                                </div>
                                                <div className="form-group">
                                                    <label className="text-muted">Name</label>
                                                    <input type="text" className="form-control" 
                                                    onChange={(e) => setName(e.target.value)}
                                                    value={name}/>
                                                </div>
                                                <div className="form-group">
                                                    <label className="text-muted">Email</label>
                                                    <input type="text" className="form-control" 
                                                    onChange={(e) => setEmail(e.target.value)} 
                                                    value={email}/>
                                                </div>
                                                <div className="form-group">
                                                    <label className="text-muted">About</label>
                                                    <textarea type="text" className="form-control" 
                                                    onChange={(e) => setAbout(e.target.value)}
                                                    value={about}/>
                                                </div>

                                                <div className="form-group">
                                                    <label className="text-muted">Password</label>
                                                    <input type="password" className="form-control" 
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    value={password}/>
                                                </div>

                                                <div className="form-group">
                                                    <label className="text-muted">Role</label>
                                                <select onChange={(e) => setRole(e.target.value)} value={role} class="form-select" aria-label="Default select example">
                                                    <option className="text-muted" selected>Select</option>
                                                    <option value="1">Admin</option>
                                                    <option value="0">User</option>
                                                </select>
                                                </div>



                                                <div className='row'>
                                                    <div className='col-12'>
                                                        <div className="mb-3">
                                                            <label htmlFor="formFileSm" className="form-label">
                                                                Image
                                                            </label>
                                                            <input type="file" onChange={handleChange('photo')} accept="image/*" className="form-control form-control-sm" id="formFileSm" />
                                                        </div>
                                                    </div>

                                                    <div className='col-6'>
                                                        {/* {image && <img src={image} style ={{width: '100px', height: '100px'}}/>} */}
                                                    </div>
                                                </div>

                                                <div>
                                                    <button type="submit" className="btn btn-primary">
                                                        {isUpdating ? "Update User" : "Save User"}
                                                    </button>
                                                </div>


                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-xlg-9 col-md-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">SL</th>
                                                        <th scope="col">Image</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Username</th>
                                                        <th scope="col">Email</th>
                                                        <th scope="col">Action</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {users && users?.map((user, i) =>
                                                        <tr>
                                                            <th scope="row">{i + 1}</th>
                                                            <td>
                                                                <img
                                                                    src={`${API}/user/photo/${user.username}`}
                                                                    className="img img-fluid img-thumbnail"
                                                                    style={{ height: '30px', width: '30px' }}
                                                                    alt="user profile"
                                                                />
                                                            </td>
                                                            <td>{user.name}</td>
                                                            <td>{user.username}</td>
                                                            <td>{user.email}</td>
                                                            <td>
                                                            <button className='btn btn-success' onClick={() => updateUser(user._id, user.name, user.username, user.email, user.about, user.role, user.passwork)}>Edit</button>
                                                            <button className='btn btn-danger' onClick={() => deleteUser(user._id)}>Delete</button>
                                                            </td>
                                                        </tr>
                                                    )}

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </>
            </div>
        </>


    )
}

export default Users
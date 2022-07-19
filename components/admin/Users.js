import React from 'react'
import { API } from '../../config';

const Users = ({ users }) => {
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
                                            <form>

                                                <div className="form-group">
                                                    <label className="text-muted">Username</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="text-muted">Name</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="text-muted">Email</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="text-muted">About</label>
                                                    <textarea type="text" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <label className="text-muted">Password</label>
                                                    <input type="password" className="form-control" />
                                                </div>



                                                <div className='row'>
                                                    <div className='col-12'>
                                                        <div className="mb-3">
                                                            <label htmlFor="formFileSm" className="form-label">
                                                                Image
                                                            </label>
                                                            <input type="file" accept="image/*" className="form-control form-control-sm" id="formFileSm" />
                                                        </div>
                                                    </div>

                                                    <div className='col-6'>
                                                        {/* {image && <img src={image} style ={{width: '100px', height: '100px'}}/>} */}
                                                    </div>
                                                </div>

                                                <div>
                                                    <button type="submit" className="btn btn-primary">
                                                        Submit
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
                                                    {users && users.map((user, i) =>
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
                                                            <td>Edit/Delete</td>
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
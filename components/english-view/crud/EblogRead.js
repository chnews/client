import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { getCookie, isAuth } from '../../../actions/auth';
import { list, removeBlog } from '../../../actions/eblog';
import moment from 'moment';

const EblogRead = ({ username }) => {
    const [blogs, setBlogs] = useState([]);
    const [message, setMessage] = useState('');
    const token = getCookie('token');

    useEffect(() => {
        loadBlogs();
    }, []);

    const loadBlogs = () => {
        list(username).then(data => {
            if (data?.error) {
                console.log(data.error);
            } else {
                setBlogs(data);
            }
        });
    };

    const deleteBlog = slug => {
        removeBlog(slug, token).then(data => {
            if (data) {
                console.log(data.error);
            } else {
                setMessage(message);
                loadBlogs();
            }
        });
    };

    const deleteConfirm = slug => {
        let answer = window.confirm('Are you sure you want to delete your blog?');
        if (answer) {
            deleteBlog(slug);
        }
    };

    const showUpdateButton = blog => {
        if (isAuth() && isAuth().role === 0) {
            return (
                <Link href={`/user/crud/eblog/${blog.slug}`}>
                     <a href="#" className="btn btn-success btn-sm" data-original-title="Edit Post" data-container="body">Edit</a>
                </Link>
            );
        } else if (isAuth() && isAuth().role === 1) {
            return (
                <Link href={`/admin/crud/eblog/${blog.slug}`}>
                     <a href="#" className="btn btn-success btn-sm" data-original-title="Edit Post" data-container="body">Edit</a>
                </Link>
            );
        }
    };

    const showAllBlogs = () => {
        return blogs?.map((blog, i) => {
            return (
                <>
					        
               
                    {/* <h3>{blog.title}</h3>
                    <p className="mark">
                        Written by {blog.postedBy.name} | Published on {moment(blog.updatedAt).fromNow()}
                    </p>
                    <button className="btn btn-sm btn-danger" onClick={() => deleteConfirm(blog.slug)}>
                        Delete
                    </button>
                    {showUpdateButton(blog)} */}
                        

                                                <tr key={i}>
					                            <td><a className="btn-link" href="#">{blog.title}</a></td>
					                            <td><span className="text-muted">{moment(blog.updatedAt).fromNow()}</span></td>
					                            <td>{blog.categories.name}</td>
					                            <td><a href="#" className="btn-link">{blog.postedBy.name}</a></td>
					                            <td>
					                                <div class="label label-table label-success">Published</div>
					                            </td>
					                            <td class="min-width">
					                                <div class="btn-groups">
					                                    {/* <a href="#" class="btn btn-icon demo-pli-gear icon-lg add-tooltip" data-original-title="Settings" data-container="body"></a>
					                                    <a href="#" class="btn btn-icon demo-pli-file-text-image icon-lg add-tooltip" data-original-title="View post" data-container="body"></a>
                                                        */}
                                                        {showUpdateButton(blog)}
					                                    <button href="#" onClick={() => deleteConfirm(blog.slug)} className="btn btn-icon demo-pli-trash icon-lg add-tooltip" data-original-title="Remove" data-container="body">Delete</button>
					                                </div>
					                            </td>
					                            </tr>
                        </>


                    
					                      
					                       
					               
					

                           
                
            );
        });
    };


    

    return (
        <>


<>
                    <div className="container-fluid bg-white pb-2">
                        <div className="row">
                            <div className="col-md-12 ">
                                <div className="page-breadcrumb">
                                    <div className="row align-items-center">
                                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                            <h4 className="page-title">All News</h4>
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
                                
                                <div className="col-lg-12 col-xlg-12 col-md-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">SL</th>
                                                        <th>Post Title</th>
                                                        <th>Creation Date</th>
                                                        <th>Categories</th>
                                                        <th>Post by</th>
                                                        <th>Status</th>
                                                        <th class="text-center">Actions</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {blogs && blogs?.map((blog, i) =>
                                                        <tr>
                                                            <td scope="row">{i + 1}</td>
                                                            <td>{blog.title}</td>
                                                            <td>{moment(blog.updatedAt).fromNow()}</td>
                                                            <td>{blog.categories.name}</td>
                                                            <td>{blog.postedBy.name}</td>
                                                            <td>{blog.postedBy.name}</td>
                                                            <td>
                                                                <div class="btn-groups">
                                                                    {/* <a href="#" class="btn btn-icon demo-pli-gear icon-lg add-tooltip" data-original-title="Settings" data-container="body"></a>
                                                                    <a href="#" class="btn btn-icon demo-pli-file-text-image icon-lg add-tooltip" data-original-title="View post" data-container="body"></a>
                                                                    */}
                                                                   {showUpdateButton(blog)}
                                                                    <button onClick={() => deleteConfirm(blog.slug)} className="btn btn-danger btn-sm" data-original-title="Remove" data-container="body">Delete</button>
                                                                </div>
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



         
        
        





             
            
        </>
    );
};

export default EblogRead;
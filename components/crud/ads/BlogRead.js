import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { getCookie, isAuth } from '../../actions/auth';
import { list, removeBlog } from '../../actions/blog';
import Sidebar from '../Sidebar';
import moment from 'moment';

const BlogRead = ({ username }) => {
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
                <Link href={`/user/crud/${blog.slug}`}>
                     <a href="#" className="btn btn-icon demo-pli-pen-5 icon-lg add-tooltip" data-original-title="Edit Post" data-container="body"></a>
                </Link>
            );
        } else if (isAuth() && isAuth().role === 1) {
            return (
                <Link href={`/admin/crud/${blog.slug}`}>
                     <a href="#" className="btn btn-icon demo-pli-pen-5 icon-lg add-tooltip" data-original-title="Edit Post" data-container="body"></a>
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
					                                    <button href="#" onClick={() => deleteConfirm(blog.slug)} className="btn btn-icon demo-pli-trash icon-lg add-tooltip" data-original-title="Remove" data-container="body"></button>
					                                </div>
					                            </td>
					                            </tr>
                        </>


                    
					                      
					                       
					               
					

                           
                
            );
        });
    };


    

    return (
        <>



         
        
        <div className='container-fluid mt-5'>
                <div className='row'>
                    
                    <div className='col-12'>
                    <h3 className='text-center'>Manage Your News Here</h3>
                        <hr/>
                        <div className='row'>
                            <div className='col-2'><Link href="/admin/crud/blog"><a className='btn btn-sm btn-primary'>Add New</a></Link></div>
                        </div>
                        <div className="col-md-12">
                            {message && <div className="alert alert-warning">{message}</div>}
                           
                            <div class="panel-body">
                            <div class="table-responsive">
                                <table class="table table-striped table-vcenter">
                                    <thead>
                                        <tr>
                                            <th>Post Title</th>
                                            <th>Creation Date</th>
                                            <th>Categories</th>
                                            <th>Post by</th>
                                            <th>Status</th>
                                            <th class="text-center">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                           
                                        {showAllBlogs()}

                                    
					                    </tbody>
					                </table>
					            </div>

                                <div class="row">
					                <div class="col-sm-5">
					                    <div>Showing 1 to 10 of 57 entries</div>
					                </div>
					                <div class="col-sm-7 text-right">
					                    <ul class="pagination">
					                        <li class="disabled"><a href="#" class="demo-pli-arrow-left">Previous</a></li>
					                        <li class="active"><a href="#">1</a></li>
					                        <li><a href="#">2</a></li>
					                        <li><a href="#">3</a></li>
					                        <li><a href="#">4</a></li>
					                        <li><span>...</span></li>
					                        <li><a href="#">20</a></li>
					                        <li><a href="#" class="demo-pli-arrow-right">Next</a></li>
					                    </ul>
					                </div>
					            </div>
					        </div>
					       
                            
                        </div>


                        
                    </div>
                 
                </div>
                </div>





             
            
        </>
    );
};

export default BlogRead;

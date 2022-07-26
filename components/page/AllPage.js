import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { getCookie, isAuth } from '../../actions/auth';
import { list, removeBlog } from '../../actions/blog';
import {API} from '../../config';
import Sidebar from '../Sidebar';
import moment from 'moment';
import { paginate } from "../../actions/paginate";
import Pagination from '../Pagination';
import axios from 'axios';

const AllPage = ({ username }) => {
    
    // const pageSize = 10;
    // const [currentPage, setCurrentPage] = useState(1);


    const [pages, setPages] = useState([]);
    const [message, setMessage] = useState('');
    const token = getCookie('token');

    useEffect(() => {
        loadPages();
    }, []);

    const loadPages = () => {
        const url = `${API}/get-page`;
        axios.get(url)
        .then((res)=>{
          console.log(res)
          setPages(res.data);
        })
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
                     <a className="" data-original-title="Edit Post" data-container="body">Edit</a>
                </Link>
            );
        } else if (isAuth() && isAuth().role === 1) {
            return (
                <Link href={`/admin/crud/${blog.slug}`}>
                     <a className="" data-original-title="Edit Post" data-container="body">Edit</a>
                </Link>
            );
        }
    };


    // const handlePageChange = (page) => {
    //     setCurrentPage(page);
    //   };
      
    //   const handleDelete = (post) =>{
    //     setPosts(posts.filter(p => p.id !== post.id ))
    //   }
    
    //   const paginatePosts = paginate(blogs, currentPage, pageSize);

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
                                        {/* <Pagination
                                            items={blogs.length}
                                            pageSize={pageSize}
                                            currentPage={currentPage}
                                            onPageChange={handlePageChange}
                                        /> */}
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">SL</th>
                                                        <th>Page Title</th>
                                                        <th>Menu</th>
                                                        {/* <th>Action</th> */}

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {pages && pages?.map((blog, i) =>
                                                        <tr>
                                                            <td scope="row">{i + 1}</td>
                                                            <td>
                                                                {blog.title}<br/>
                                                             </td>
                                                            <td>
                                                                
                                                            {blog.footermenu === "true" ? <small>Footer Menu</small> : null}<br/>
                                                            {blog.mainmenu === "true" ? <small>Main Menu</small>  : null}<br/>
                                                            {blog.topmenu === "true" ? <small>Top Menu</small>  : null}
                                                            </td>
                                                            {/* <td>
                                                                {blog.categories && blog.categories.map((categories) => <small>{categories.name + ', '}</small> )}
                                                                
                                                            </td> */}
                                                            {/* <td>{blog.postedBy.name}</td> */}
                                                            {/* {blog.footermail == "published" ? <td><div class="label label-table label-success">Published</div></td> : <td><div class="label label-table label-primary">Draft</div></td>} */}
                                                            {/* {blog.featured === "yes" ? <td><div class="label label-table label-success">Yes</div></td> : <td><div class="label label-table label-primary">No</div></td>}
                                                            {blog.scrol === "yes" ? <td><div class="label label-table label-success">Yes</div></td> : <td><div class="label label-table label-primary">No</div></td>}
                                                             */}
                                                            {/* <td>
                                                                <div class="btn-groups">
                                                                   {showUpdateButton(blog)}
                                                                    <button onClick={() => deleteConfirm(blog.slug)} className="btn btn-danger btn-sm" data-original-title="Remove" data-container="body">Delete</button>
                                                                </div>
                                                            </td> */}
                                                            {/* <td>
                                                                   {showUpdateButton(blog)} &nbsp;&nbsp;
                                                                <a onClick={() => deleteConfirm(blog.slug)} className="" style={{cursor: "pointer"}} data-original-title="Remove" data-container="body">Delete</a>&nbsp;&nbsp;
                                                                <Link href={`/blogs/${blog.slug}`}><a target="_blank"  className="" style={{cursor: "pointer"}} >View</a></Link>
                                                            
                                                            </td> */}
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

export default AllPage;

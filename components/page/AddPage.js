import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import { getCookie, isAuth } from '../../actions/auth';
import { getCategories } from '../../actions/category';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import { getTags } from '../../actions/tag';
import { createBlog } from '../../actions/blog';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import '../../node_modules/react-quill/dist/quill.snow.css';
import { QuillModules, QuillFormats } from '../../helpers/quill';
import Sidebar from '../Sidebar';
import axios from 'axios';


const AddPage = ({router}) => {
    // const blogFromLS = () => {
    //     if (typeof window === 'undefined') {
    //         return false;
    //     }

    //     if (localStorage.getItem('blog')) {
    //         return JSON.parse(localStorage.getItem('blog'));
    //     } else {
    //         return false;
    //     }
    // };

    // const [body, setBody] = useState(blogFromLS());
    // const [values, setValues] = useState({
    //     error: '',
    //     sizeError: '',
    //     success: '',
    //     formData: '',
    //     title: '',
    //     hidePublishButton: false
    // });

    // const { error, sizeError, success, formData, title, hidePublishButton } = values;
    // const token = getCookie('token');

    // useEffect(() => {
    //     setValues({ ...values, formData: new FormData() });
       
    // }, [router]);


    // const publishBlog = e => {
    //     e.preventDefault();
    //     // console.log('ready to publishBlog');
    //     createBlog(formData, token).then(data => {
    //         if (data?.error) {
    //            setValues({ ...values, error: data.error });
    //         } else {
    //             setValues({ ...values, title: '', error: '', success: `A new blog titled "${title}" is created` });
    //             setBody('');
    //             setCategories([]);
    //             setTags([]);
    //         }
    //     });
    // };

    // const handleChange = name => e => {
    //     // console.log(e.target.value);
    //     const value = name === 'photo' ? e.target.files[0] : e.target.value;
    //     formData.set(name, value);
    //     setValues({ ...values, [name]: value, formData, error: '' });
    // };

    // const handleBody = e => {
    //     // console.log(e);
    //     setBody(e);
    //     formData.set('body', e);
    //     if (typeof window !== 'undefined') {
    //         localStorage.setItem('blog', JSON.stringify(e));
    //     }
    // };

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [slug, setSlug] = useState('');
    const [footermenu, setFootermenu] = useState(false);
    const [mainmenu, setMainmenu] = useState(false);
    const [topmenu, setTopmenu] = useState(false);
    const [none, setNone] = useState(false);
    
    
    
    const token = getCookie('token');

    const handleTileChange = (e) => {
        setTitle(e.target.value)
        console.log(e.target.value)
    }

    const handleBodyChange = (e) => {
        setBody(e)
        console.log(e)
    }

    const handleSlugChange = (e) => {
        setSlug(e.target.value)
        console.log(e.target.value)
    }

    const handleFooterMenu = (e) => {
        setFootermenu(current => !current)
        console.log(e.target.value)
    }
    const handleMainMenu = (e) => {
        setMainmenu(current => !current)
        console.log(e.target.value)
    }
    const handleTopmenu = (e) => {
        setTopmenu(current => !current)
        console.log(e.target.value)
    }
    const handleNone = (e) => {
        setNone(current => !current)
        console.log(e.target.value)
    }


  

    const publishPage = (e) => {
        e.preventDefault();
      const url = `${API}/add-page`;
      const formData = new FormData();
        formData.append("title", title)
        formData.append('body', body)
        formData.append('slug', slug)
        formData.append('footermenu', footermenu)
        formData.append('mainmenu', mainmenu)
        formData.append('topmenu', topmenu)
        formData.append('none', none)
      axios.post(url, formData, { headers: {"Authorization" : `Bearer ${token}`} })
      .then((res)=>{
          console.log(res)
            setTitle('')
            setBody('')
            setSlug('')
            setFootermenu('')
            setMainmenu('')
            setTopmenu('')
            setNone('')

      }).then((res)=>{
        setTitle('')
        setBody('')
        setSlug('')
        setFootermenu('')
        setMainmenu('')
        setTopmenu('')
        setNone('')

      })
  }

//   const publishPage = e => {
//     e.preventDefault();
//     // console.log('ready to publishBlog');
//     createPage(formData, token).then(data => {
//         if (data?.error) {
//            setValues({ ...values, error: data.error });
//         } else {
//             setValues({ 
//                 ...values, 
//                 error: '',
//                 sizeError: '',
//                 success: '',
//                 formData: '',
//                 title: '',
//                 body: '',
//                 slug: '',
//                 footermenu: '',
//                 topmenu: '',
//                 mainmenu: '',
//                 none: '',
//                 hidePublishButton: false 
//             });
         
//         }
//     });
// };

// const handleToggle = c => () => {
//     setValues({ ...values, error: '' });
//     // return the first index or -1
//     const clickedMenu = checked.indexOf(c);
//     const all = [...checked];

//     if (clickedMenu === -1) {
//         all.push(c);
//     } else {
//         all.splice(clickedMenu, 1);
//     }
//     console.log(all);
//     setChecked(all);
//     formData.set('categories', all);
// };


  

    return (
        <>

<>
                    <div className="container-fluid bg-white pb-2">
                        <div className="row">
                            <div className="col-md-12 ">
                                <div className="page-breadcrumb">
                                    <div className="row align-items-center">
                                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                            <h4 className="page-title">Category</h4>
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
                                        <div className="text-right">
                                            <button className="btn btn-primary" type='submit' onClick={publishPage}>Save &amp; Publish</button>
                                        </div>
                                            
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-8 col-xlg-8 col-md-12">
                                    <div className="card">
                                        <div className="card-body">
                                            

                                        <div className="form-group">
                                            <label className=""><h5>Page Title</h5></label>
                                            <input type="text" className="form-control" value={title} onChange={handleTileChange} />
                                        </div>

                                        <div className="form-group">
                                            <label className=""><h5>Slug</h5></label>
                                            <input type="text" className="form-control" value={slug} onChange={handleSlugChange} />
                                        </div>

                                        <div className="form-group">
                                            <h5 className='mt-2 mb-5'>Description</h5>
                                            <ReactQuill
                                                modules={QuillModules}
                                                formats={QuillFormats}
                                                value={body}
                                                placeholder=""
                                                onChange={handleBodyChange}
                                                style={{height: '500px', background: 'white'}}

                                            />

                                            
                                            
                                        </div>

                                           
                                        </div>
                                    </div>

                                    
                                </div>
                                <div className="col-lg-4 col-xlg-4 col-md-12">
                                    <div className="card">
                                        <div className="card-body">
                                        
                                        <hr/>
                                        <h4>Choose a Menu</h4>
                                        <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue="false"
                                            id="defaultCheck1"
                                            value={topmenu} 
                                            onChange={handleTopmenu}
                                        />
                                        <label className="form-check-label" htmlFor="defaultCheck1">
                                            Top Menu
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue="true"
                                            id="defaultCheck1"
                                            value={mainmenu}
                                            onChange={handleMainMenu}
                                        />
                                        <label className="form-check-label" htmlFor="defaultCheck1">
                                            Main Menu
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue="true"
                                            id="defaultCheck1"
                                            value={footermenu}
                                            onChange={handleFooterMenu}
                                        />
                                        <label className="form-check-label" htmlFor="defaultCheck1">
                                            Footer Menu
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue="true"
                                            id="defaultCheck1"
                                            value={none}
                                            onChange={handleNone}
                                        />
                                        <label className="form-check-label" htmlFor="defaultCheck1">
                                            None
                                        </label>
                                    </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </>

            <>
 
 

  
           
  
    <div className="boxed">
    
      <div id="content-container bg-light">
        <div id="page-content">
       
          <div className="row">
            
          </div>
          {/*------------------------------*/}
          <div className="fixed-fluid">
           
            <div className="fluid">
              

                

              

               

                <div>
                    
                     
                    
                </div>
           
            </div>
          </div>
        </div>
        {/*===================================================*/}
        {/*End page content*/}
      </div>
     
    </div>
    

 
   
    
  
  
</>

        </>
    );
};

export default withRouter(AddPage);

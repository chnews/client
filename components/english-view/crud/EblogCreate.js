import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import { getCookie, isAuth } from '../../../actions/auth';
import { getCategories } from '../../../actions/ecategory';
import { getTags } from '../../../actions/tag';
import { createBlog } from '../../../actions/eblog';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import '../../../node_modules/react-quill/dist/quill.snow.css';
import { QuillModules, QuillFormats } from '../../../helpers/quill';

const CreateBlog = ({ router }) => {
    const blogFromLS = () => {
        if (typeof window === 'undefined') {
            return false;
        }

        if (localStorage.getItem('blog')) {
            return JSON.parse(localStorage.getItem('blog'));
        } else {
            return false;
        }
    };

    const [image, setImage] = useState(null);

    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);

    const [checked, setChecked] = useState([]); // categories
    const [checkedTag, setCheckedTag] = useState([]); // tags

    const [body, setBody] = useState(blogFromLS());
    const [values, setValues] = useState({
        error: '',
        sizeError: '',
        success: '',
        formData: '',
        title: '',
        slug: '',
        mtitle: '',
        mdesc: '',
        status: '',
        featured: '',
        scrol: '',
        hidePublishButton: false
    });

    const { error, sizeError, success, formData, title, slug, mtitle, mdesc, status, featured, scrol, hidePublishButton } = values;
    const token = getCookie('token');

    useEffect(() => {
        setValues({ ...values, formData: new FormData() });
        initCategories();
        initTags();
    }, [router]);

    const initCategories = () => {
        getCategories().then(data => {
            if (data?.error) {
                setValues({ ...values, error: data.error });
            } else {
                setCategories(data);
            }
        });
    };

    const initTags = () => {
        getTags().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setTags(data);
            }
        });
    };

    const publishBlog = e => {
        e.preventDefault();
        // console.log('ready to publishBlog');
        createBlog(formData, token).then(data => {
            if (data?.error) {
               setValues({ ...values, error: data.error });
            } else {
                setValues({ ...values, title: '', slug: '', mtitle: '', mdesc: '', error: '', status: '', featured: '', scrol: '', success: `A new blog titled "${title}" is created` });
                setBody('');
                initCategories('');
                initTags('');
                setImage('');
            }
        });
    };

    const handleChange = name => e => {
       
        // console.log(e.target.value);
        const value = name === 'photo' ? e.target.files[0] : e.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value, formData, error: '' });


        
        const fileReader = new FileReader();

        fileReader.onload = function(e){
            setImage(e.target.result);
        }
        fileReader.readAsDataURL(value);

    };

    const handleBody = e => {
        // console.log(e);
        setBody(e);
        formData.set('body', e);
        if (typeof window !== 'undefined') {
            localStorage.setItem('blog', JSON.stringify(e));
        }
    };

    const handleToggle = c => () => {
        setValues({ ...values, error: '' });
        // return the first index or -1
        const clickedCategory = checked.indexOf(c);
        const all = [...checked];

        if (clickedCategory === -1) {
            all.push(c);
        } else {
            all.splice(clickedCategory, 1);
        }
        console.log(all);
        setChecked(all);
        formData.set('categories', all);
    };

    const handleTagsToggle = t => () => {
        setValues({ ...values, error: '' });
        // return the first index or -1
        const clickedTag = checked.indexOf(t);
        const all = [...checkedTag];

        if (clickedTag === -1) {
            all.push(t);
        } else {
            all.splice(clickedTag, 1);
        }
        console.log(all);
        setCheckedTag(all);
        formData.set('tags', all);
    };

    const showCategories = () => {
        return (
            categories &&
            categories.map((c, i) => (
                <li key={i} className="list-unstyled">
                    <input onChange={handleToggle(c._id)} type="checkbox" className="mr-2" />
                    <label className="form-check-label">&nbsp;&nbsp;{c.name}</label>
                </li>
            ))
        );
    };

    const showTags = () => {
        return (
            tags &&
            tags.map((t, i) => (
                <li key={i} className="list-unstyled">
                    <input onChange={handleTagsToggle(t._id)} type="checkbox" className="mr-2" />
                    <label className="form-check-label">&nbsp;&nbsp;{t.name}</label>
                </li>
            ))
        );
    };


  

    return (
        <>
 
 <div className="container-fluid bg-white mt-3 pb-2">
      <div className="row">
        <div className="col-md-12 ">
            <div className="page-breadcrumb">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                  <h4 className="page-title">Add Blog</h4>
                </div>
              </div>
              {/* /.col-lg-12 */}
            </div>

        </div>
      </div>
    </div>

    <>
                   
    <form onSubmit={publishBlog}>
                    <div className="page-wrapper">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-8 col-xlg-7 col-md-12">
                                    <div className="card">
                                        <div className="card-body">
                                           

                                            <div className="form-group">
                                                <label className=""><h5>News Title</h5></label>
                                                <input type="text" className="form-control" value={title} onChange={handleChange('title')} />
                                            </div>
                                            
                                            <div className="form-group">
                                                <h5 className='mt-4'>Full News</h5>
                                                <ReactQuill
                                                    modules={QuillModules}
                                                    formats={QuillFormats}
                                                    value={body}
                                                    placeholder=""
                                                    onChange={handleBody}
                                                    style={{height: '600px', background: 'white'}}

                                                />
                                                
                                            </div>

                                            <div style={{marginTop: "80px"}}>
                                                <div className="form-group ">
                                                    <label className="">Custom Link</label>
                                                    <input type="text" className="form-control" value={slug} onChange={handleChange('slug')}/>
                                                    <small className="text-muted">If you want to link to a custom URL, enter it here. Otherwise, leave this blank.</small>
                                                </div>

                                                <div className="form-group ">
                                                    <label className="">Meta Title</label>
                                                    <input type="text" className="form-control" value={mtitle} onChange={handleChange('mtitle')}/>
                                                    <small className="text-muted">This is a meta title that will be used in search engine results. leave this blank for auto generate.</small>
                                                </div>

                                                <div className="form-group">
                                                    <label className="">Meta Description</label>
                                                    <textarea type="text" className="form-control" value={mdesc} onChange={handleChange('mdesc')}/>
                                                    <small className="text-muted">This is a meta description that will be used in search engine results. leave this blank for auto generate.</small>
                                                </div>
                                            </div>



                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xlg-3 col-md-12">
                                    <div className="card">
                                        <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-12 col-sm-offset-6 toolbar-right text-right">
                                            {/* <button className="btn btn-default">Preview</button>
                                            <button className="btn btn-default">Draft</button> */}
                                            <button className="btn btn-primary" type='submit'>Save &amp; Publish</button>
                                            </div>
                                        </div>
                                        <hr/>

                                        <div className="fixed-fluid">
                                            <div className="fixed-sm-300 pull-sm-right">
                                            <div className="panel">
                                                <div className="panel-body">
                                                <p className="text-main text-center text-bold text-uppercase">
                                                    Featured Image
                                                </p>
                                                
                                                {/*Dropzonejs*/}
                                                {/*===================================================*/}
                                                <div className="dropzone-container mb-3">
                                                    <form id="demo-dropzone" action="#">
                                                    <div className="dz-default dz-message">
                                                        <div className="dz-icon">
                                                        <i className="demo-pli-upload-to-cloud icon-5x" />
                                                        </div>
                                                        <div>
                                                        {image && <img src={image} width="100%" height="150px"/>}
                                                        </div>
                                                    </div>
                                                    <div className="fallback text-center">
                                                    {/* <small className="text-muted">Max size: 1mb</small> */}
                                                            <br />
                                                            <label className="btn btn-outline-info">
                                                                Upload featured image
                                                                <input onChange={handleChange('photo')} type="file" accept="image/*" hidden />
                                                            </label>
                                                    </div>
                                                    </form>
                                                </div>
                                                <hr/>
                                                <h5>Select Status</h5>
                                                <div className="form-group">
                                                    <select value={status} onChange={handleChange('status')} class="form-select" aria-label="Default select example">
                                                        <option className="text-muted" value="published" selected>Published</option>
                                                        <option value="published">Published</option>
                                                        <option value="draft">Draft</option>
                                                    </select>
                                                </div>

                                                <hr />
                                                <h5>Make Fetured Post</h5>
                                                <div className="form-group">
                                                    <select value={featured} onChange={handleChange('featured')} class="form-select" aria-label="Default select example">
                                                        <option className="text-muted" value="no" >No</option>
                                                        <option value="no">No</option>
                                                        <option value="yes">Yes</option>
                                                    </select>
                                                </div>


                                                <hr />
                                                <h5>Scrolling Post</h5>
                                                <div className="form-group">
                                                    <select value={scrol} onChange={handleChange('scrol')} class="form-select" aria-label="Default select example">
                                                        <option className="text-muted" value="no" >No</option>
                                                        <option value="no">No</option>
                                                        <option value="yes">Yes</option>
                                                    </select>
                                                </div>


                                                <div>
                                                        <h5>Categories</h5>
                                                        <hr />

                                                        <ul style={{ maxHeight: '200px', overflowY: 'scroll' }}>{showCategories()}</ul>
                                                    </div>
                                                <div>
                                                        <h5>Tags</h5>
                                                        <hr />
                                                        <ul style={{ maxHeight: '200px', overflowY: 'scroll' }}>{showTags()}</ul>
                                                    </div>
                                                <hr />
                                                
                                                
                                                </div>
                                            </div>
                                            </div>
                                            
                                        </div>


                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    </form>
                </>
    
              
        
        </>
    );
};

export default withRouter(CreateBlog);

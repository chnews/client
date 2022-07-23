import { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { getCookie } from '../../../actions/auth';
import {API} from '../../../config';
import { create, getSubCategories, removeSubCategory } from '../../../actions/esubcategory';

const Esubcategory = () => {
    const [categories, setCategories] = useState([]);
    const [values, setValues] = useState({
        name: '',
        show: '',
        error: false,
        success: false,
        subcategories: [],
        ecategory: '',
        removed: false,
        reload: false
    });

    const { name, show, error, success, ecategory, subcategories, removed, reload } = values;
    const token = getCookie('token');

    useEffect(() => {
        loadSubCategories();
    }, [reload]);

    const loadSubCategories = () => {
        getSubCategories().then(data => {
            if (data?.error) {
                console.log(data.error);
            } else {
                setValues({ ...values, subcategories: data });
            }
        });
    };

    useEffect(() => {
            fetch(`${API}/ecategories`)
            .then(response => response.json())
            .then(data => {
                setCategories(data);
            }).catch(err => console.log(err));
    }, []);

    // const showCategories = () => {
    //     return categories?.map((c, i) => {
    //         return (
    //             <button
    //                 onDoubleClick={() => deleteConfirm(c.slug)}
    //                 title="Double click to delete"
    //                 key={i}
    //                 className="btn btn-outline-primary mr-1 ml-1 mt-3"
    //             >
    //                 {c.name}
    //             </button>
    //         );
    //     });
    // };

    const deleteConfirm = slug => {
        let answer = window.confirm('Are you sure you want to delete this category?');
        if (answer) {
            deleteSubCategory(slug);
        }
    };

    const deleteSubCategory = slug => {
        // console.log('delete', slug);
        removeSubCategory(slug, token).then(data => {
            if (error) {
                console.log(data.error);
            } else {
                setValues({ ...values, error: false, success: false, name: '', show: '', categories: '', removed: !removed, reload: !reload });
            }
        });
    };

    const clickSubmit = e => {
        e.preventDefault();
        // console.log('create category', name);
        create({ name, show, ecategory }, token).then(data => {
            if (data) {
                setValues({ ...values, error: data.error, success: false });
            } else {
                setValues({ ...values, error: false, success: false, name: '', show: '', ecategory: '', removed: !removed, reload: !reload });
                
            }
        }).then(() => {
            setValues({ 
                ...values, 
                error: false, 
                success: false, 
                name: '', 
                show: '', 
                ecategory: '', 
                removed: !removed, 
                reload: !reload
            });
        });

        

    };

    const handleChange = e => {
        setValues({ ...values, name: e.target.value, error: false, success: false, removed: '' });
    };

    const handleChangeShow = e => {
        setValues({ ...values, show: e.target.value, error: false, success: false, removed: '' });
    };

    const handleChangeCategory = e => {
        setValues({ ...values, ecategory: e.target.value, error: false, success: false, removed: '' });
    };

    // const showSuccess = () => {
    //     if (success) {
    //         return <p className="text-success">Category is created</p>;
    //     }
    // };

    // const showError = () => {
    //     if (error) {
    //         return <p className="text-danger">Category already exist</p>;
    //     }
    // };

    // const showRemoved = () => {
    //     if (removed) {
    //         return <p className="text-danger">Category is removed</p>;
    //     }
    // };

    // const mouseMoveHandler = e => {
    //     setValues({ ...values, error: false, success: false, removed: '' });
    // };

    // const newCategoryFom = () => (
    //     <form onSubmit={clickSubmit}>
    //         <div className="form-group">
    //             <label className="text-muted">Category Name</label>
    //             <input type="text" className="form-control" onChange={handleChange} value={name} required />
    //         </div>
    //         <div>
    //             <button type="submit" className="btn btn-primary">
    //                 Create
    //             </button>
    //         </div>
    //     </form>
    // );

    return (
        <>
        
            {/* {showSuccess()} */}
            {/* {showError()} */}
            {/* {showRemoved()} */}
            {/* <div onMouseMove={mouseMoveHandler}>
                {newCategoryFom()}
                {showCategories()}
            </div> */}


            <>
                    <div className="container-fluid bg-white pb-2">
                        <div className="row">
                            <div className="col-md-12 ">
                                <div className="page-breadcrumb">
                                    <div className="row align-items-center">
                                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                            <h4 className="page-title">English SubCategory</h4>
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
                                            <form onSubmit={clickSubmit}>

                                                
                                                <div className="form-group">
                                                    <label className="text-muted">Name</label>
                                                    <input type="text" className="form-control" onChange={handleChange} value={name} required />
                                                </div>

                                                
                                                <div className="form-group">
                                                <select onChange={handleChangeShow} value={show} class="form-select" aria-label="Default select example">
                                                    <option className="text-muted" selected>Select Status</option>
                                                    <option value="true">Show</option>
                                                    <option value="false">Hide</option>
                                                </select>
                                                </div>

                                                <div className="form-group">
                                                <select onChange={handleChangeCategory} value={ecategory} class="form-select" aria-label="Default select example">
                                                    <option className="text-muted" selected>Select Category</option>
                                                    {categories?.map((c, i) =>  <option value={c._id}>{c.name}</option>)}
                                                    
                                                </select>
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
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Category</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Action</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {subcategories && subcategories?.map((data, i) =>
                                                        <tr>
                                                            <th scope="row">{i + 1}</th>
                                                           
                                                            <td>{data.name}</td>
                                                            <td>
                                                            {data.ecategory?.map((categories) => <small>{categories.name + ', '}</small> )}
                                                            </td>
                                                            
                                                            <td>
                                                                {
                                                                    data.show && data.show == 'true' ? <span className="badge badge-success">Active</span> : <span className="badge badge-danger">Inactive</span>
                                                                }
                                                            </td>
                                                            <td>
                                                                <button className='btn btn-danger btn-sm' key={i} onClick={() => deleteConfirm(data.slug)}>Delete</button>
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

export default Esubcategory;

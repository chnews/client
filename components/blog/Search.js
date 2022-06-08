import Link from 'next/link';
import renderHTML from 'react-render-html';
import { useState, useEffect } from 'react';
import { listSearch } from '../../actions/blog';
import { API } from '../../config';

const Search = () => {
    const [values, setValues] = useState({
        search: undefined,
        results: [],
        searched: false,
        message: ''
    });

    const { search, results, searched, message } = values;

    const searchSubmit = e => {
        e.preventDefault();
        listSearch({ search }).then(data => {
            setValues({ ...values, results: data, searched: true, message: `${data.length} blogs found` });
        });
    };

    const handleChange = e => {
        // console.log(e.target.value);
        setValues({ ...values, search: e.target.value, searched: false, results: [] });
    };

    const searchedBlogs = (results = []) => {
        return (
            <div>
               

                {results.map((blog, i) => {
                    return (
                        <div key={i}>
                            {/* <Link href={`/blogs/${blog.slug}`}>
                                <a className="text-primary">{blog.title}</a>
                            </Link> */}

                            <div className="container-fluid">
                            
                                <div className='row'>
                                    <div className='col-lg-12 row'>
                                        <div className='col-lg-12'>
                                            <Link href={`/blogs/${blog.slug}`}>
                                                <a className='text-start'>
                                                    <h2 className="pt-3 pb-3 font-weight-bold">{blog.title}</h2>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className='col-lg-12'>
                                        <div className="pb-3 text-start">{renderHTML(blog.excerpt)}</div>
                                        {/* <Link href={`/blogs/${blog.slug}`}>
                                            <a>{renderHTML(blog.excerpt)}</a>
                                        </Link> */}
                                        </div>
                                    </div>
                                </div>	
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    const searchForm = () => (
       <>
       
       <div>
       {message && <p className="pt-4 text-muted font-italic">{message}</p>}
       </div>
        <form onSubmit={searchSubmit}>
            <div className="row">
                <div className="col-md-8">
                    <input type="search" className="form-control" placeholder="Search blogs" onChange={handleChange} />
                </div>

                <div className="col-md-4">
                    <button className="btn btn-block btn-outline-primary" type="submit">
                        Search
                    </button>
                </div>
            </div>
        </form>
       </>
    );

    return (
       <>
       
        <div className="container-fluid">
            <div className="pt-3 pb-5">{searchForm()}</div>
            {searched && <div style={{ marginTop: '0', marginBottom: '0' }}>{searchedBlogs(results)}</div>}
        </div>
       
       </>
    );
};

export default Search;

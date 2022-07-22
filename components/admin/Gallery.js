import React from 'react'
import {API} from '../../config'

const Gallery = ({images}) => {
  return (
    <>

<div className="container-fluid bg-white pb-2">
                        <div className="row">
                            <div className="col-md-12 ">
                                <div className="page-breadcrumb">
                                    <div className="row align-items-center">
                                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                            <h4 className="page-title">Gallery</h4>
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
                                
                                <div className="col-lg-12 col-xlg-12 col-md-12" >
                                    <div className="card" >
                                        <div className="card-body">
                                          <div style={{height: "500px", overflowY: "auto"}}>
                                          <div className='row'>
                 
                                              {images?.map((image) => 
                                              
                                                <div className='col-md-2 mb-2 text-center' key={image._id}>
                                                  
                                                    <img 
                                                      src = {`${API}/blog/photo/${image.slug}`} 
                                                      width = '100%' 
                                                      height = '110px' 
                                                    />
                                                
                                                </div>
                                            
                                                )}
                                            </div>
                                          </div>
                                        
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
       
                
                    
                  
                
              
   
    </>
  )
}

export default Gallery
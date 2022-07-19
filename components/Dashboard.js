import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import style from '../styles/Dashboard.module.css';

const Dashboard = () => {
  return (
    <>
    
    <div className="container-fluid bg-white pb-2">
                        <div className="row">
                            <div className="col-md-12 ">
                                <div className="page-breadcrumb">
                                    <div className="row align-items-center">
                                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                            <h4 className="page-title">Dashboard</h4>
                                        </div>
                                    </div>
                                    {/* /.col-lg-12 */}
                                </div>

                            </div>
                        </div>
                    </div>

    <div className="page-wrapper">
  {/* ============================================================== */}
  {/* Bread crumb and right sidebar toggle */}
  {/* ============================================================== */}

  
  <div className="container-fluid">
    
    <div className="row">
      <div className="col-md-12 col-lg-12 col-sm-12">
        <div className="white-box">
          <div className="d-md-flex mb-3">
            <h3 className="box-title mb-0">Recent Visits</h3>
            <div className="col-md-3 col-sm-4 col-xs-6 ms-auto">
              <select className="form-select shadow-none row border-top">
                <option>March 2021</option>
                <option>April 2021</option>
                <option>May 2021</option>
                <option>June 2021</option>
                <option>July 2021</option>
              </select>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table no-wrap">
              <thead>
                <tr>
                  <th className="border-top-0">#</th>
                  <th className="border-top-0">Country</th>
                  <th className="border-top-0">Total Visit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td className="txt-oflo">USA</td>
                  <td className="txt-oflo">5</td>
                </tr>

                <tr>
                  <td>2</td>
                  <td className="txt-oflo">UK</td>
                  <td className="txt-oflo">3</td>
                </tr>

                <tr>
                  <td>3</td>
                  <td className="txt-oflo">Canada</td>
                  <td className="txt-oflo">1</td>
                </tr>

                <tr>
                  <td>4</td>
                  <td className="txt-oflo">Bangladesh</td>
                  <td className="txt-oflo">50</td>
                </tr>
               
              
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    {/* ============================================================== */}
    {/* Recent Comments */}
    {/* ============================================================== */}
    <div className="row">
      {/* .col */}
      <div className="col-md-12 col-lg-12 col-sm-12">
        <div className="card white-box p-0">
          <div className="card-body">
            <h3 className="box-title mb-0">Recent Comments</h3>
          </div>
          <div className="comment-widgets">
            {/* Comment Row */}
            <div className="d-flex flex-row comment-row p-3 mt-0">
              <div className="p-2">
                <img
                  src="plugins/images/users/varun.jpg"
                  alt="user"
                  width={50}
                  className="rounded-circle"
                />
              </div>
              <div className="comment-text ps-2 ps-md-3 w-100">
                <h5 className="font-medium">James Anderson</h5>
                <span className="mb-3 d-block">
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry.It has survived not only five centuries.{" "}
                </span>
                <div className="comment-footer d-md-flex align-items-center">
                  <span className="badge bg-primary rounded">Pending</span>
                  <div className="text-muted fs-2 ms-auto mt-2 mt-md-0">
                    April 14, 2021
                  </div>
                </div>
              </div>
            </div>
            {/* Comment Row */}
            <div className="d-flex flex-row comment-row p-3">
              <div className="p-2">
                <img
                  src="plugins/images/users/genu.jpg"
                  alt="user"
                  width={50}
                  className="rounded-circle"
                />
              </div>
              <div className="comment-text ps-2 ps-md-3 active w-100">
                <h5 className="font-medium">Michael Jorden</h5>
                <span className="mb-3 d-block">
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry.It has survived not only five centuries.{" "}
                </span>
                <div className="comment-footer d-md-flex align-items-center">
                  <span className="badge bg-success rounded">Approved</span>
                  <div className="text-muted fs-2 ms-auto mt-2 mt-md-0">
                    April 14, 2021
                  </div>
                </div>
              </div>
            </div>
            {/* Comment Row */}
            <div className="d-flex flex-row comment-row p-3">
              <div className="p-2">
                <img
                  src="plugins/images/users/ritesh.jpg"
                  alt="user"
                  width={50}
                  className="rounded-circle"
                />
              </div>
              <div className="comment-text ps-2 ps-md-3 w-100">
                <h5 className="font-medium">Johnathan Doeting</h5>
                <span className="mb-3 d-block">
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry.It has survived not only five centuries.{" "}
                </span>
                <div className="comment-footer d-md-flex align-items-center">
                  <span className="badge rounded bg-danger">Rejected</span>
                  <div className="text-muted fs-2 ms-auto mt-2 mt-md-0">
                    April 14, 2021
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* /.col */}
    </div>
  </div>
  {/* ============================================================== */}
  {/* End Container fluid  */}
  {/* ============================================================== */}
  {/* ============================================================== */}
  {/* footer */}
  {/* ============================================================== */}
  <footer className="footer text-center">
    {" "}
    2021 © Ample Admin brought to you by{" "}
    <a href="https://www.wrappixel.com/">wrappixel.com</a>
  </footer>
  {/* ============================================================== */}
  {/* End footer */}
  {/* ============================================================== */}
</div>

    
    </>
  )
}

export default Dashboard
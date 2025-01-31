import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <a href="" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span className="fs-5 d-none d-sm-inline">Menu</span>
                        </a>
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            <li className="nav-item">
                                <Link to={"/side"} href="#" className="nav-link align-middle px-0">
                                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                                </Link>
                            </li>
                            <li>
                            <Link to={"/products"} href="#" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Products</span>
                                </Link>
                                
                            </li>
                            <li>
                                <Link to={"/addpro"} href="#" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Add Products</span>
                                </Link>
                            </li>
                            <li>
                            <Link to={"/admin"} href="#" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Sign out</span>
                                </Link>
                                
                            </li>
                            
                        </ul>
                        <hr />
                        
                    </div>
                </div>
                <div className="col py-3">
                    <h1>DashBoard</h1>
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Admin() {

    const navigate = useNavigate();

    function handleLogin() {
        // event.preventDefault();
        navigate("/side");
    }

    return (
        <div>
            <section>
                <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{ backgroundColor: "hsl(0, 0%, 96%)" }}>
                    <div className="container">
                        <div className="row gx-lg-5 align-items-center">
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <h1 className="my-5 display-3 fw-bold ls-tight">
                                    ShadowShop <br />
                                </h1>
                            </div>

                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <div className="card">
                                    <div className="card-body py-5 px-md-5">
                                        <form>
                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <input type="email" id="form3Example3" className="form-control" />
                                                <label className="form-label" htmlFor="form3Example3">Username</label>
                                            </div>

                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <input type="password" id="form3Example4" className="form-control" />
                                                <label className="form-label" htmlFor="form3Example4">Password</label>
                                            </div>

                                            <button onClick={handleLogin} type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">
                                                Login
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

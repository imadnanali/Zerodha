import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='border-bottom sticky-top ' style={{ backgroundColor: "white"}}>
            <nav class="navbar navbar-expand-lg " style={{padding:"0px"}}>
                <div class="container-fluid">
                    <Link class="navbar-brand me-5 ps-5" to="/">
                        <img src='media/images/logo.svg' className='ms-5' style={{ width: "18%"}} />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ">
                            <li class="nav-item text-center " style={{ padding: "20px" }}>
                                <Link class="nav-link active" aria-current="page" to="signup" className='text-muted ' style={{ textDecoration: "none" }}>Signup</Link>
                            </li>
                            <li class="nav-item text-center " style={{ padding: "20px" }}>
                                <Link class="nav-link active" aria-current="page" to="about" className='text-muted ' style={{ textDecoration: "none" }}>About</Link>
                            </li>
                            <li class="nav-item text-center " style={{ padding: "20px" }}>
                                <Link class="nav-link active" aria-current="page" to="products" className='text-muted ' style={{ textDecoration: "none" }}>Products</Link>
                            </li>
                            <li class="nav-item text-center " style={{ padding: "20px" }}>
                                <Link class="nav-link active" aria-current="page" to="pricing" className='text-muted ' style={{ textDecoration: "none" }}>Pricing</Link>
                            </li>
                            <li class="nav-item text-center " style={{ padding: "20px" }}>
                                <Link class="nav-link active" aria-current="page" to="support" className='text-muted ' style={{ textDecoration: "none" }}>Support</Link>
                            </li>

                           

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
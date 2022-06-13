import React from 'react'
import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Nav() {
    const state = useSelector((cart)=> cart )
    console.log(state.handleCart.length);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-2 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="#">SK Collections</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link" to="/product">Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <div className="buttons">
                            <a href="" className="btn btn-outline-dark">
                                <i className="fa fa-sign-in me-1"></i>LogIn</a>
                            <a href="" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-user-plus me-1"></i>Sign In</a>
                            <a href="" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-shopping-cart me-1"></i>Cart ({state.handleCart.length})</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

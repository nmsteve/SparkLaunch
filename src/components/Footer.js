import React from 'react'
import { NavLink } from 'react-router-dom'


const Footer = () => {
  return (
    <div className="footer">
      <div className="container container-fluid d-flex align-items-center">
        <img height={150} src="images/smlogo.png" />
        <div className="text-white text-center mx-2">
          <h2>SPARK</h2>
          <h5>LAUNCH</h5>
        </div>
        <div className='d-flex align-items-end pb-4 h-100'>
          <img className="mx-2" src="images/Vector2.png" />
          <img className="mx-2" src="images/Vector3.png" />
          <img className="mx-2" src="images/Vector4.png" />
          <img className="mx-2" src="images/Vector5.png" />
        </div>
        <div className="">
          <div className="nav">
            <NavLink className="nav-link text-white" to="/" exact>
              <p>BNB SALE</p>
            </NavLink>
            <NavLink className="nav-link text-white" to="/erc20" exact>
              <p>ERC20 SALE</p>
            </NavLink>
            <NavLink className="nav-link text-white" to="/About" exact>
              <p>ABOUT</p>
            </NavLink>
          </div>
          <div className='row mx-2 text-white'>
            <p className='col-6' style={{ fontSize: 12 }}>
              @Copyright DEFI 2022
            </p>
            <p className='col-6' style={{ fontSize: 12 }}>Information</p>
            <p className='col-6' style={{ fontSize: 12 }}>Privacy policy</p>
            <p className='col-6' style={{ fontSize: 12 }}>Terms of Use</p>
          </div>
        </div>
        <div className="">
          <h6 className="text-white text-nowrap">Subscribe to our NewsLetter</h6>
          <input
            className='form-control form-control-sm' placeholder="Enter your e-mail" />
          <button
            className='btn btn-sm text-white mt-3'
            style={{ backgroundColor: '#249806' }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}
export default Footer
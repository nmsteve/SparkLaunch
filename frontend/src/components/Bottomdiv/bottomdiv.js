import React from 'react'
import { NavLink } from 'react-router-dom'

const bottomdiv = () => {
    return (
        <>
            <div className="bottom_div1">
                <img className="spark_image" src="images/Vector.png" />
                <img className="spark_image_1" src="images/Vector1.png" />
                <div className="heading">
                    <h1>SPARK</h1>
                    <h4>LAUNCH</h4>
                </div>
                <div className='spark_image_2'>
                    <img className="spark_image_2_1" src="images/Vector2.png" />
                    <img className="spark_image_2_1" src="images/Vector3.png" />
                    <img className="spark_image_2_1" src="images/Vector4.png" />
                    <img className="spark_image_2_1" src="images/Vector5.png" />
                </div>

                <div className="info_div_1">
                    <NavLink to="/" exact><p>BNB SALE</p> </NavLink>
                    <NavLink to="/erc20" exact><p>ERC20 SALE</p></NavLink>
                    <NavLink to="/About" exact><p>ABOUT</p></NavLink>

                </div>
                <div className='info_div_3'>
                    <div style={{ marginLeft: "3rem" }}>
                        <h5>@Copyright DEFI 2022</h5>
                        <h5 style={{ marginTop: "2rem" }}>Information</h5>
                    </div>
                    <div style={{ marginLeft: "13rem" }}>
                        <h5>Privacy policy</h5>
                        <h5 style={{ marginTop: "2rem" }}>Terms of Use</h5>
                    </div>
                </div>
                <div className="bottom_corner">
                    <p id="bottom_para" style={{ marginBottom: "0.6rem" }}>Subscribe to our NewsLetter</p>
                    <input className="input" style={{color:"black"}} placeholder="Enter your e-mail"></input>
                    <button id="button_4">Subscribe</button>
                </div>
            </div>

        </>
    )
}

export default bottomdiv
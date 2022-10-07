import React from 'react'
import { useState } from 'react'

//import Kycboxes from './Middlediv/Simplesalecards'
import Boxesdiv from './Middlediv/Featuredboxes'
import Bottomdiv from './Bottomdiv/bottomdiv'
import Bottomdiv1 from './Bottomdiv/bottomdiv1'
import Topdiv from './Topdiv'
//import Title from './Middlediv/title'
import Whitelist from './Middlediv/Saleparams'
import Urldiv from './Middlediv/url'
import Description from './Middlediv/description'
import Pools1 from './Middlediv/pools1'
import Pools3 from './Middlediv/pools3'
import Metamaskconnect from './Middlediv/metamaskconnect'


const MiddleBottomdiv = () => {

    const [openModal4, setopenModal4] = useState(false);
    const [openModal5, setopenModal5] = useState(true);
    const [openModal6, setopenModal6] = useState(false);
    const [openModal7, setopenModal7] = useState(false);
    const [openModal8, setopenModal8] = useState(false);
    const [openModal9, setopenModal9] = useState(false);
    const [openModal10, setopenModal10] = useState(false);
    const [openModal11, setopenModal11] = useState(false);
    const [openModal12, setopenModal12] = useState(false);

    
    const toggle = () => {
        var blur = document.getElementById('blur');
        blur.classList.toggle('active1');
    }
    const toggle1 = () => {
      
        var blur = document.getElementById('blur');
        blur.classList.toggle('inactive1');
    }
    return (
        <>
            {openModal5 &&
                <>
                    <div className='main_div1'>
                        <Topdiv />
                        <div className="middle_div1" >
                            <img className="mid_image_1" src="images/Vector8.png" />
                            <img className="mid_image_2" src="images/Vector31.png" />
                            <img className="mid_image_3" src="images/Vector6.png" />
                            <div className='heading_1'>
                                <h1>SPARK</h1>
                                <h4>LAUNCH</h4>
                            </div>
                            <div className='launch_div'>
                                <div id="button_5" onClick={() => { setopenModal4(true); setopenModal5(false); }}>LAUNCH YOUR PROJECT WITH US</div>
                            </div>
                            <div className='buy_div'>
                                <div id="button_6">BUY TOKENS</div>
                            </div>
                            <p className="featured">FEATURED PROJECTS</p>
                            <div className='boxes_div'>
                                <Boxesdiv />
                            </div>
                            <div className='duration_div_left'>
                                <button id="button_7">ALL POOLS</button>
                                <button id="button_8">UPCOMING</button>
                                <button id="button_9">ENDED</button>
                            </div>
                            <div className='duartion_div_right'>
                                <button id="button_10">Search</button>
                            </div>
                            <div className="kyc_div">
                                {/* <Kycboxes setopenModal9={setopenModal9} setopenModal5={setopenModal5} /> */}
                            </div>
                            <div className='corner_button'>
                                
                                    <div id='button_28'>Ask Us</div>
                            </div>
                        </div>
                        <Bottomdiv />
                    </div>
                </>

            }
            {openModal4 &&
                <>
                    <div className='main_div'>

                        <Topdiv />

                        <div className="middle_div" >
                                <button className='close_button' 
                                      onClick={() => { setopenModal4(false); setopenModal5(true); }}>
                                    Close
                                </button>
                                <div className="mainnets_dev">
                                    <option className='option'>
                                        <select></select>
                                    </option>
                                </div>
                                <div className="inner_div">
                                    {/* <Title setopenModal6={setopenModal6} /> */}
                                    
                                    {
                                        openModal6 &&
                                        <Whitelist setopenModal7={setopenModal7} />
                                    }
                                    {
                                        openModal7 &&
                                        <Urldiv setopenModal8={setopenModal8} />
                                    }
                                    {
                                        openModal8 &&
                                        <Description />
                                    }
                                </div>
                        </div>

                        <Bottomdiv1 />

                    </div>
                </>

            }
            {
                openModal9 &&
                <>
                    <div className="main_div" id="blur">
                        <Topdiv />
                        <div className="middle_div" >
                        <button className='close_button' 
                                    onClick={() => { setopenModal9(false);setopenModal5(true)}}>
                                    Close
                         </button>
                        <Pools1 setopenModal5={setopenModal5} setopenModal9={setopenModal9} setopenModal10={setopenModal10}  toggle={toggle}/>
                        </div>
                        <Bottomdiv1 />
                    </div>
                </>
            }
            {
                openModal10 &&
                <Metamaskconnect  toggle1={toggle1} setopenModal10={setopenModal10} setopenModal11={setopenModal11} setopenModal9={setopenModal9} />
            }
            {openModal11 && 
                <>
                    <div className="main_div">
                        <Topdiv />
                        <Pools3 />
                        <Bottomdiv1 />
                    </div>
                </>
                
            }
        </>
    )
}

export default MiddleBottomdiv
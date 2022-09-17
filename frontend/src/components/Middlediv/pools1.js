import React from 'react'
import RightDiv from './pools1_mid_inner_right_div'
import LeftDiv from './pools1_mid_inner_left_div'

const Pools1 = ({ setopenModal11,setopenModal10, setopenModal9, setopenModal5,toggle}) => {
    return (
        <>
                <div className="mainnets_dev">
                    <option className='option'>
                        <select></select>
                    </option>
                </div>
                <div className="inner_div">
                    <div className='innerdiv_left'>
                        <LeftDiv setopenModal11={setopenModal11} setopenModal10={setopenModal10}/>
                    </div>
                    <div className='innerdiv_right'>
                        <RightDiv />
                        <div className='innerdivright_button'>
                            <div id="button_15" onClick={()=>{setopenModal10(true); toggle();}}>Connect Wallet</div>
                        </div>
                    </div>
                </div>
        </>)
}

export default Pools1
import React from 'react'

const Saleparams = ({setopenModal7}) => {
    return (
        <>
             <div className='inner_div_left_bottom'>
                <div className="inner_div_left_bottom_mid">
                    <div className='inner_div_left_bottom_mid_left'>
                        <div  className="inner_div_left_bottom_mid_left_heading1">Softcap (BNB) *</div>
                        <input id="softCap" className='inner_div_left_botton_mid_left_input1' placeholder='0'></input>
                        <div className="inner_div_left_bottom_mid_left_heading2">Minimum buy (BNB) *</div>
                        <input id="minBuy" className='inner_div_left_botton_mid_left_input2' placeholder='0'></input>
                        <div id="inner_div_left_bottom_mid_left_heading1">Select time (UTC)*</div>
                        <div className="inner_div_left_bottom_mid_left_heading4">Start time (UTC) *</div>
                        <input id="startDate"  className='inner_div_left_botton_mid_left_input3' placeholder='Select date'></input>
                        <div className="inner_div_left_bottom_mid_left_heading5">First Fund Release for Projects (%) *</div>
                        <input id="firstRelease" className='inner_div_left_botton_mid_left_input4' placeholder='Ex: 40%'></input>
                        <div className='inner_div_left_bottom_lastheading'>Fund Release Each Cycle (percent) *</div>
                        <input id="eachRelease"className='inner_div_left_botton_mid_right_input5' placeholder='Ex. 20%'></input>
                    </div>
                    <div className='inner_div_left_bottom_mid_right'>
                        <div className="inner_div_left_bottom_mid_right_heading1">HardCap (BNB) *</div>
                        <input id="hardCap" className='inner_div_left_botton_mid_right_input1' placeholder='0'></input>
                        <div className="inner_div_left_bottom_mid_right_heading2">Maxumim buy (BNB) *</div>
                        <input id="maxBuy"className='inner_div_left_botton_mid_right_input2' placeholder='0'></input>
                        <div id="inner_div_left_bottom_mid_right_heading1"></div>
                        <div className="inner_div_left_bottom_mid_right_heading3">End time (UTC) *</div>
                        <input id="endDate" className='inner_div_left_botton_mid_right_input3' placeholder='Select date'></input>
                        <div className="inner_div_left_bottom_mid_right_heading4">Fund Vesting Period Each Cycle (days) *</div>
                        <input  id="vestingDays" className='inner_div_left_botton_mid_right_input4' placeholder='Enter (days). Ex: 3'></input>
                        <div className="inner_div_left_bottom_mid_right_heading5">Price</div>
                        <input  id="price" className='inner_div_left_botton_mid_right_input5' placeholder='0'></input>
                    </div>
                </div>
            </div>
            <div className='next_button' onClick={() => setopenModal7(true)}>
                
                 <div id='button_29'>Next</div>   
               
            </div>

        </>)
}

export default Saleparams
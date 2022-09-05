import React from 'react'

const Saleparams = ({setopenModal7}) => {
    return (
        <>
            <div className='inner_div_left_bottom'>
                <div className="inner_div_left_bottom_mid">
                    <div className='inner_div_left_bottom_mid_left'>
                        <div className="inner_div_left_bottom_mid_left_heading1" style={{fontSize:"1.5rem"}} >Softcap (BNB) *</div>
                        <input id={"softCap"} className="inner_div_left_botton_mid_left_input1" placeholder='0' style={{fontSize:"1.5rem"}}></input>
                        <div className="inner_div_left_bottom_mid_left_heading2" style={{fontSize:"1.5rem"}}>Start Time (UTC) *</div>
                        <input id={"startDate"} className='inner_div_left_botton_mid_left_input2' style={{fontSize:"1.5rem"}}placeholder='dd/mm/yyyy'></input>
                        <div className="inner_div_left_bottom_mid_left_heading4" style={{fontSize:"1.5rem"}}>Price</div>
                        <input id={"price"} className='inner_div_left_botton_mid_left_input3' style={{fontSize:"1.5rem"}} placeholder='0'></input>
                    </div>
                    <div className='inner_div_left_bottom_mid_right'>
                        <div className="inner_div_left_bottom_mid_right_heading1" style={{fontSize:"1.5rem"}}>HardCap (BNB)</div>
                        <input id={"hardCap"}className='inner_div_left_botton_mid_right_input1' style={{fontSize:"1.5rem"}} placeholder='0'></input>
                        <div className="inner_div_left_bottom_mid_right_heading2" style={{fontSize:"1.5rem"}}>End time (UTC) *</div>
                        <input id={"endDate"} className='inner_div_left_botton_mid_right_input2' style={{fontSize:"1.5rem"}} placeholder='dd/mm/yyyy'></input>
                       
                        
                    </div>
                </div>
            </div>
            <div className='next_button' onClick={() => setopenModal7(true)}>
                
                 <div id='button_29'>Next</div>   
               
            </div>

        </>)
}

export default Saleparams
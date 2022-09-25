import React from 'react'
import { deploySale} from './dataProccessing'

const Description = () => {


    return (
        <>
            <div className='inner_div_right_bottoms'>
                <div className='inner_div_right_bottom_heading'>Description</div>
                <textarea id='description' className='inner_div_right_bottom_input' placeholder='This is my description' style={{padding:"2rem"}}></textarea>
            </div>
            <div className='next_button'  onClick={()=>{
                    deploySale()
                }}>
                    <div id="button_29">Done</div>
            </div>
        </>)
}

export default Description
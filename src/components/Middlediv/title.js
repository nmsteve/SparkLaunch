import React from 'react'

const Title = ({setopenModal6}) => {
    return (
        <>
            <div className='inner_div_left_top'>
                <div  className='inner_top_left_top_top'>(*) is required field</div>
                <div className='inner_top_left_top_top1'>Token Name</div>
                <input id={"name"} className='inner_div_left_top_input1' placeholder='Name' ></input>
                <div className='inner_top_left_top_mid1'>Token Symbol</div>
                <input id={"symbol"} className='inner_div_left_top_input2' placeholder='Symbol' ></input>
                <div className='inner_top_left_top_mid2'>Token Address *</div>
                <input id={"address"} className='inner_div_left_top_input3' placeholder='0X ...' ></input>
                <div className='inner_top_left_top_bottom1'>Users will pay with BNB for your token</div>
                <div className='inner_top_left_top_bottom2'>Pool creation fee: 0.005 BNB</div>
            </div>
            <div  className='next_button' 
                    onClick={() => {
                        setopenModal6(true)

                        }}>
                    <div id='button_29'>Next</div> 
            </div>
        </>)
}

export default Title
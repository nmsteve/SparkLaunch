import React from 'react'



const Participate = ({ setopenModal11, setopenModal10, setopenModal9, toggle1 }) => {
    return (
        <>
            <div className='participate_div'>
                <div className="participate_heading" 
                onClick={() => {; toggle1(); setopenModal11(false); setopenModal10(false); setopenModal9(true); }}>
                    participate
                </div>
            
                        <div className='participate_amount'>
                        Amount (max:10BNB) <br></br> 
                        <input className='' placeholder='0.1'></input>
                        </div>
                       
                        <div className='innerparticipate_button'>
                            <div id="button_15" onClick={()=>{}}>Buy</div>
                        </div>
                
            </div>
            
        </>)
}

export default  Participate;
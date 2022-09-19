import React from 'react'

const salecard =(sale) => {

    

    return (
        <>  
            <div className='kyc_boxes_inside_top' >
            {  sale.ID}
                <div className='kyc_boxes_inside_top_left'>
               
                    <p className='kyc_heading'>{sale.name}</p>
                    <p className='kyc_heading_small'>{sale.symbol}</p>
                    <div className='kyc_images'>
                        <img className="spark_image_2_1" src="images/Vector2.png" />
                        <img className="spark_image_2_1" src="images/Vector3.png" />
                        <img className="spark_image_2_1" src="images/Vector4.png" />
                        <img className="spark_image_2_1" src="images/Vector5.png" />
                    </div>

                </div>
                <div className='kyc_boxes_inside_top_right'>

                </div>
            </div>
            <div className='kyc_boxes_inside_middle'>
                <div className="live_div">
                    <div id="button_11">LIVE</div>
                </div>
                <div className='upcoming_div'>
                    <div id="button_12">UPCOMING</div>
                </div>
            </div>
            <div className='kyc_boxes_inside_middle_1'>
                <p className='middle_para'>
                    {sale.description}
                </p>
            </div>
            <div className='kyc_boxes_inside_last'>
                <div className="kyc_boxes_inside_last_left">
                    <div  style={{ marginTop: "0.7rem"}}>Soft Cap</div>
                    <div style={{ marginTop: "0.7rem" }}>Raised</div>
                    <div style={{ marginTop: "0.7rem" }}>Price</div>
                    <div style={{ marginTop: "0.7rem" }}>End</div>
                </div>
                <div className="kyc_boxes_inside_last_right">
                   <div style={{ marginTop: "0.7rem" }}>{sale.softCap} BNB</div>
                   <div style={{ marginTop: "0.7rem" }}>{sale.raised} BNB</div>
                   <div  style={{ marginTop: "0.7rem" }}>{sale.price} BNB</div>
                   <div style={{ marginTop: "0.7rem", width: "15rem" }}> {sale.date.toUTCString()}
                   </div>
                </div>
            </div>
            <div className='registration'>
                <div id="registration">registration closes in 2 days, 22 hours</div>
                <div id="percentage">45%</div>
            </div>
            <div className='potion_fill'>
                <div className='potion'>
                    <div className='potion_flow'>

                    </div>
                </div>

            </div>
            <div className='registration_1'>
                <div id="registration_1"></div>
                <div id="percentage_1"></div>
            </div>
            <div className='registration_2'>
                <div id="registration_2">Holders</div>
                <div id="percentage_2">Listing Time</div>
            </div>
            <div className='registration_3'>
                <div id="registration_3">{sale.holders}</div>
                <div id="percentage_3">{sale.listingDate}</div>
            </div> 
        </>
       )
}

export default salecard
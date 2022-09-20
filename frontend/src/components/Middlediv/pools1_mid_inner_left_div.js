import React from 'react'
import { withdraw, withdrawUsed } from './dataProccessing'

const pools1_mid_inner_left_div = ({setopenModal11,setopenModal10}) => {
  return (
    <>
      <div className='innerdiv_left_top'>
        <div className='innerdiv_left_topboxes'>
          <div className='innerdiv_left_topboxes_left'></div>
          <div className='innerdiv_left_topheadings'>Roburna</div>
        </div>
        <div className='inner_div_left_topboxes_right'>
          <img src="/images/bsc.png" className='binance_img' />
        </div>
      </div>
      <div className='innerdiv_left_paragraph'>Lorem ipsum dolor sit amet, consectecteur adipliscing elit, sed do eiusmod tempor incidudunt Lorem ipsum dolor sit amet, consectecteur adipliscing elit, sed do eiusmod tempor incidudunt Lorem ipsum dolorLorem ipsum dolor sit amet, consectecteur adipliscing elit, sed do eiusmod tempor incidudunt Lorem ipsum dolor sit amet, consectecteur adipliscing elit, sed do eiusmod tempor incidudunt Lorem </div>
      <div className='innerdiv_left_images'>
        <img src="images/Vector2.png"></img>
        <img src="images/Vector3.png"></img>
        <img src="images/Vector4.png"></img>
        <img src="images/Vector5.png"></img>
      </div>
      <div className='innerdiv_poolheadings'>SALE DETAILS</div>
      <div className="innerdiv_poolheadings_belowdiv">
        <div className='innerdiv_poolheadings_belowdiv_left'>Soft Cap: 1000 Tokens</div>
        <div className='innerdiv_poolheadings_belowdiv_right'>Hard Cap: 10000 Tokens</div>
        <div className='innerdiv_poolheadings_belowdiv_left1'>Min participation: 0.001 BNB</div>
        <div className='innerdiv_poolheadings_belowdiv_right1'>Max participation: 10 BNB</div>
        <div className='innerdiv_poolheadings_belowdiv_left2'>Price 0.001 BNB</div>
        <div className='innerdiv_poolheadings_belowdiv_right2'>Sale End: 10 May</div>
      </div>
      <div className='participate_button'>
          <div id="button_15" onClick={()=>{setopenModal11(true)}}>Participate</div>
      </div>
      <div className='withdraw_button'>
          <div id="button_15" onClick={()=>{withdraw()}}>withdraw</div>
      </div>
      <div className='withdrawused_button'>
          <div id="button_15" onClick={()=>{withdrawUsed()}}>withdraw used</div>
      </div>
    </>)
}

export default pools1_mid_inner_left_div
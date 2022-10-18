import React from 'react'
import { MetaTags } from 'react-meta-tags'

import { Container } from 'react-bootstrap'

import Pools1_right_topBottom_boxes from 'components/Middlediv/pools1_right_topBottom_boxes'
import { depositTokens, withdrawDeposit, withdrawEarnings } from 'connect/dataProccessing'
import { finishSale, withdraw, withdrawUnused } from 'connect/dataProccessing'


const SaleDetails = props => {

  const {
    match: { params },
  } = props


  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Sale Parcticipation | SparkLaunch</title>
        </MetaTags>

        <Container fluid>
          <div className="mainnets_dev">
            <option className='option'>
              <select></select>
            </option>
          </div>

          <div className="inner_div">
            <div className='closediv' onClick={() => setActiveSection(0)}></div>
            <div className='innerdiv_left'>
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
                <div
                  id="button_15" onClick={() => { setActiveSection(4) }}>Participate</div>
              </div>
              <div className='withdraw_button'>
                <div id="button_15" onClick={() => withdraw()}>withdraw</div>
              </div>
              <div className='withdrawused_button'>
                <div id="button_15" onClick={() => { withdrawUnused() }}>withdraw unused</div>
              </div>

            </div>

            <div className='innerdiv_right'>
              <div className='innerdivright_top'>
                <div className='innerdivright_topboxes'>
                  <Pools1_right_topBottom_boxes />
                  <div className='finish_button'>
                    <div id="button_15" onClick={() => { depositTokens() }}>Deposit Tokens</div>
                  </div>
                </div>

                <div className='innerdivright_topboxes'>
                  <Pools1_right_topBottom_boxes />
                  <div className='finish_button'>
                    <div id="button_15" onClick={() => { withdrawDeposit() }}>Withdraw Deposit</div>
                  </div>
                </div>
                <div className='innerdivright_topboxes'>
                  <Pools1_right_topBottom_boxes />
                  <div className='finish_button'>
                    <div id="button_15" onClick={() => { withdrawEarnings() }}>Withdraw Earning</div>
                  </div>
                </div>
                <h3 id='errormsg'></h3>
              </div>
              <div className='innerdivright_bottom'>
                <div className='innerdivright_bottomboxes'>
                  <Pools1_right_topBottom_boxes />
                </div>
                <div className='innerdivright_bottomboxes'>
                  <Pools1_right_topBottom_boxes />
                </div>
              </div>
              <div className='innerdivright_button'>
                <div id="button_15" onClick={() => { finishSale() }}>Finish sale</div>
              </div>
            </div>

          </div>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default SaleDetails
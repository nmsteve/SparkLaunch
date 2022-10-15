import React from 'react'

const Metamaskconnect = ({ setActiveSection, toggle1 }) => {
  return (<>
    <div className='metamask_div'>
      <div
        className="metamask_heading"
        onClick={() => { toggle1(); setActiveSection(2); }}
      >
        Connect Wallet
      </div>

      <div className='metamask_heading_below' >
        <div className='metamask_img'>
          <img src="images/Metamaskimg.png" id="metamask_face" />
        </div>
        <div className='metamask_connect' >
          Metamask
        </div>
      </div>

      <div className='metamask_crypto'>Haven't got a crypto wallet yet</div>
      
      <div className='metamask_learn_connect'>
        <div id="button_27">Learn how to connect</div>
      </div>
    </div>
  </>
  )
}

export default Metamaskconnect;
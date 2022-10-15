import React, { useEffect } from 'react'
import { selectedSale } from './salecards';
import { participateInsale } from '../../connect/dataProccessing';


const Participate = ({ setActiveSection, toggle1 }) => {

  useEffect(() => {
    console.log('selected sale', selectedSale)
  }, [])

  return (
    <div className='participate_div'>
      <div className="participate_heading" onClick={() => { toggle1(); setActiveSection(2); }}>
        participate
      </div>
      <div className='participate_amount'>
        Amount (max:10BNB)
        <br></br>
        <input id="amount" className='participateAmount' placeholder='0.1' />
      </div>
      <div className='innerparticipate_button'>
        <div id="button_15" onClick={() => { participateInsale() }}>Buy</div>
      </div>
    </div>
  )
}

export default Participate;

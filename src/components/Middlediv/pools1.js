import React from 'react'
import RightDiv from './pools1_mid_inner_right_div'
import LeftDiv from './pools1_mid_inner_left_div'
import { finishSale } from 'connect/dataProccessing'


const Pools1 = ({ setActiveSection }) => {
  return (
    <>
      <div className="mainnets_dev">
        <option className='option'>
          <select></select>
        </option>
      </div>

      <div className="inner_div">
        <div className='closediv' onClick={() => setActiveSection(0)}></div>
        <div className='innerdiv_left'>
          <LeftDiv setActiveSection={setActiveSection} />
        </div>

        <div className='innerdiv_right'>
          <RightDiv />
          <div className='innerdivright_button'>
            <div id="button_15" onClick={() => { finishSale() }}>Finish sale</div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Pools1
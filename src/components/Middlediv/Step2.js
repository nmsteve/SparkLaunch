import React from 'react'

const Step2 = ({ activeTab, setActiveTab }) => {

  const handleSubmit = (event) => {
    event.preventDefault()
    event.stopPropagation()

    setActiveTab(activeTab + 1)
  }


  return (
    <form className='mt-4' onSubmit={handleSubmit}>

      <div class="form-group">
        <p className='form-label' style={{ color: '#5ce65c' }}>
          Whitelist
        </p>

        <div class="form-check form-switch">
          <label class="form-check-label" htmlFor="wlist_switch">Abble</label>
          <input
            class="form-check-input custom-form-switch"
            type="checkbox"
            role="switch"
            // checked
            id="wlist_switch"
          />
        </div>
        <p className='form-text'>
          You can enable/disable whitelist anytime
        </p>
      </div>

      <div className="row">
        <div class="form-group col-6 mb-2">
          <label htmlFor="softcap" className="form-label">
            SoftCap(AVAX)
          </label>
          <input
            className="form-control form-control-sm input-dark"
            id="softcap"
            type='number'
            placeholder="0"
          />
        </div>

        <div class="form-group col-6 mb-2">
          <label htmlFor="hardcap" className="form-label">
            HardCap(AVAX) *
          </label>
          <input
            className="form-control form-control-sm input-dark"
            id="hardcap"
            type='number'
            placeholder="0"
            required
          />
        </div>

        <div class="form-group col-6 mb-2">
          <label htmlFor="minbuy" className="form-label">
            Minimum Buy(AVAX) *
          </label>
          <input
            className="form-control form-control-sm input-dark"
            id="minbuy"
            type='number'
            placeholder="0"
            required
          />
        </div>

        <div class="form-group col-6 mb-2">
          <label htmlFor="maxbuy" className="form-label">
            Maximum Buy(AVAX) *
          </label>
          <input
            className="form-control form-control-sm input-dark"
            id="maxbuy"
            type='number'
            placeholder="0"
            required
          />
        </div>

        <p className='form-text' style={{ color: '#5ce65c' }}>
          Select time & end time (UTC) *
        </p>

        <div class="form-group col-6 mb-2">
          <label htmlFor="startdt" className="form-label">
            Start time (UTC) *
          </label>
          <input
            className="form-control form-control-sm input-dark"
            id="startdt"
            type='date'
            required
          />
        </div>

        <div class="form-group col-6 mb-2">
          <label htmlFor="enddt" className="form-label">
            End time (UTC) *
          </label>
          <input
            className="form-control form-control-sm input-dark"
            id="enddt"
            type='date'
            required
          />
        </div>

        <div class="form-group col-6 mb-2">
          <label htmlFor="firstFund" className="form-label">
            First Fund Release for Projects (%) *
          </label>
          <input
            className="form-control form-control-sm input-dark"
            id="firstFund"
            type='number'
            placeholder="Ex. 40%"
            required
          />
        </div>

        <div class="form-group col-6 mb-2">
          <label htmlFor="fundVest" className="form-label">
            Fund Vesting Period Each Cycle (days) *
          </label>
          <input
            className="form-control form-control-sm input-dark"
            id="fundVest"
            type='number'
            placeholder="Enter (days). Ex. 3%"
            required
          />
        </div>

        <div class="form-group col-6 mb-2">
          <label htmlFor="fundRelease" className="form-label">
            Fund Release Each Cycle (%) *
          </label>
          <input
            className="form-control form-control-sm input-dark"
            id="fundRelease"
            type='number'
            placeholder="Ex. 20%"
            required
          />
        </div>

      </div>

      <div className='d-flex justify-content-between mt-5'>
        <button
          className='btn px-3 fw-bold'
          onClick={() => setActiveTab(activeTab - 1)}
          disabled={activeTab === 1}
          style={{ backgroundColor: '#5ce65c' }}
        >
          {'<<'} Prev
        </button>

        <button
          className='btn px-3 fw-bold'
          type='submit'
          disabled={activeTab === 4}
          style={{ backgroundColor: '#5ce65c' }}
        >
          Next {'>>'}
        </button>
      </div>
    </form>
  )
}

export default Step2
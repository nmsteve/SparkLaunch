import React from 'react'


const Step1 = ({ activeTab, setActiveTab }) => {

  const handleSubmit = (event) => {
    event.preventDefault()
    event.stopPropagation()

    setActiveTab(activeTab + 1)
  }

  return (
    <form className='mt-4' onSubmit={handleSubmit}>
      <p className='form-text' style={{ color: '#5ce65c' }}>
        (*) is required field
      </p>

      <div class="form-group">
        <label htmlFor="title" className="form-label">
          Title *
        </label>
        <input
          className="form-control form-control-sm input-dark"
          id="title"
          placeholder="Ex. This is my private sale..."
          required
        />

        <p className='form-text'>
          Pool creation fee 10 BNB
        </p>
      </div>

      <div class="form-group">
        <label className="form-label w-100">
          Currency
        </label>
        <div class="form-check form-control-sm ps-0">
          <input
            className="custom-form-check"
            id="currency"
            type='radio'
            checked
            required
          />
          <label htmlFor="currency" className="form-check-label">
            BNB
          </label>
          <p className='form-text'>
            Users will pay with BNB for your token
          </p>
        </div>
      </div>

      <div className='d-flex justify-content-between mt-5'>
        <button
          className='btn px-3 fw-bold text-dark'
          disabled
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

export default Step1
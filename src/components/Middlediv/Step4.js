import React from 'react'


const Step4 = ({ activeTab, setActiveTab }) => {

  const handleSubmit = (event) => {
    event.preventDefault()
    event.stopPropagation()

    setActiveTab(activeTab + 1)
  }


  return (
    <form className='mt-4' onSubmit={handleSubmit}>
      <div class="form-group">
        <label htmlFor="logo" className="form-label">
          Description *
        </label>
        <textarea
          className="form-control form-control-sm input-dark"
          id="logo"
          rows={8}
          placeholder="Ex. This is the best project..."
          required
        />
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
          style={{ backgroundColor: '#5ce65c' }}
        >
          Done
        </button>
      </div>
    </form>
  )
}

export default Step4
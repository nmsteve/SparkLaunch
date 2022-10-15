import React from 'react'


const Step3 = ({ activeTab, setActiveTab }) => {

  const handleSubmit = (event) => {
    event.preventDefault()
    event.stopPropagation()

    setActiveTab(activeTab + 1)
  }


  return (
    <form className='mt-4' onSubmit={handleSubmit}>

      <div className="row">

        <div class="form-group col-6 mb-2">
          <label htmlFor="logo" className="form-label">
            Logo URL *
          </label>
          <input
            className="form-control form-control-sm input-dark"
            id="logo"
            placeholder="Ex. http://..."
            required
          />
        </div>

        <div class="form-group col-6 mb-2">
          <label htmlFor="website" className="form-label">
            Website *
          </label>
          <input
            className="form-control form-control-sm input-dark"
            id="website"
            placeholder="Ex. http://..."
            required
          />
        </div>

        <div class="form-group col-6 mb-2">
          <label htmlFor="fb" className="form-label">
            Facebook
          </label>
          <input
            className="form-control form-control-sm input-dark"
            id="fb"
            placeholder="Ex. http://..."
          />
        </div>

        <div class="form-group col-6 mb-2">
          <label htmlFor="twitter" className="form-label">
            Twitter
          </label>
          <input
            className="form-control form-control-sm input-dark"
            id="twitter"
            placeholder="Ex. http://..."
          />
        </div>

        <div class="form-group col-6 mb-2">
          <label htmlFor="github" className="form-label">
            Github
          </label>
          <input
            className="form-control form-control-sm input-dark"
            id="github"
            placeholder="Ex. http://..."
          />
        </div>

        <div class="form-group col-6 mb-2">
          <label htmlFor="telegram" className="form-label">
            Telegram
          </label>
          <input
            className="form-control form-control-sm input-dark"
            id="telegram"
            placeholder="Ex. http://..."
          />
        </div>

        <div class="form-group col-6 mb-2">
          <label htmlFor="instagram" className="form-label">
            Instagram
          </label>
          <input
            className="form-control form-control-sm input-dark"
            id="instagram"
            placeholder="Ex. http://..."
          />
        </div>

        <div class="form-group col-6 mb-2">
          <label htmlFor="discord" className="form-label">
            Discord
          </label>
          <input
            className="form-control form-control-sm input-dark"
            id="discord"
            placeholder="Ex. http://..."
          />
        </div>

        <div class="form-group col-6 mb-2">
          <label htmlFor="reddit" className="form-label">
            Reddit
          </label>
          <input
            className="form-control form-control-sm input-dark"
            id="reddit"
            placeholder="Ex. http://..."
          />
        </div>

        <div class="form-group col-6 mb-2">
          <label htmlFor="youtube" className="form-label">
            Youtube
          </label>
          <input
            className="form-control form-control-sm input-dark"
            id="youtube"
            placeholder="Ex. http://..."
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

export default Step3
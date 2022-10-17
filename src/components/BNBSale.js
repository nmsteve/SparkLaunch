import React from 'react'
import { useState, useRef } from 'react'
import 'animate.css';

//displays on home page
import Featuredboxes from './Featuredboxes'
import Salecards from './salecards'

//displays for participate
import Pools1 from './Middlediv/pools1'
import Metamaskconnect from './Middlediv/metamaskconnect'
import Participate from './Middlediv/participate'

//footer section
import Step1 from './Middlediv/Step1';
import Step2 from './Middlediv/Step2';
import Step3 from './Middlediv/Step3';
import Step4 from './Middlediv/Step4';


const MiddleBottomdiv = () => {

  var salecardsRef = useRef(null)

  const [activeSection, setActiveSection] = useState(0)
  const [activeTab, setActiveTab] = useState(1)

  var scrollToSales = () => {
    salecardsRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  const toggle1 = () => {
    var blur = document.getElementById('blur');
    blur.classList.toggle('inactive1');
  }

  const steps = [
    {
      step: 1,
      title: 'Before you start',
      desc: 'Input your awesome title and choose the currency'
    },
    {
      step: 2,
      title: 'Private Sale',
      desc: 'Enter the launchpad information that you want to raise, that should be enter all details about your presale'
    },
    {
      step: 3,
      title: 'Additional Info',
      desc: 'Let people know who you are'
    },
    {
      step: 4,
      title: 'Finish',
      desc: 'Review your information'
    },
  ]

  const activeStepHead = (item, isActive) => {
    return (isActive ?
      <div className='d-flex flex-nowrap'>
        <div>
          <div
            className='fs-5 fw-bold text-center rounded'
            style={{
              backgroundColor: '#5ce65c',
              height: '2rem',
              width: '2rem',
            }}
          >
            {item.step}
          </div>
        </div>
        <div className='ps-2'>
          <h4 style={{ color: '#5ce65c' }}>
            {item.title}
          </h4>
          <p className='text-muted' style={{ fontSize: 13 }}>
            {item.desc}
          </p>
        </div>
      </div>
      :
      <div className='d-flex flex-nowrap opacity-25'>
        <div>
          <div
            className='fs-5 fw-bold text-center rounded'
            style={{
              backgroundColor: '#000',
              height: '2rem',
              width: '2rem',
            }}
          >
            {item.step}
          </div>
        </div>
        <div className='ps-2'>
          <h4>{item.title}</h4>
          <p style={{ fontSize: 13 }}>{item.desc}</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      {activeSection === 0 &&
        <div className="row content">
          <div className='container container-fuild'>
            <div className='row'>
              <div className='col'></div>
              <div className='col-6 home_logo'>
                <img className='image-fluid' src="/images/biglogo.png" />
              </div>
              <div className='col'></div>
            </div>
            <div className='row launchbuy-row'>
              <div className='col-2'></div>
              <div className='col-5'>
                <button className='button launch-btn' onClick={() => setActiveSection(1)}>
                  LAUNCH YOUR PROJECT WITH US
                </button>
              </div>
              <div className='col-3'>
                <button className='button buy-btn' onClick={scrollToSales}>
                  BUY $IGHT
                </button>
              </div>
              <div className='col-2'></div>
            </div>
            <div className='row featured-row'>
              <div className='container'>
                <div className='row'>
                  <p className="col-6 featured-name">FEATURED PROJECTS</p>
                </div>
                <div className='row'>
                  <div className='featured-name-underline'></div>
                </div>

                <div className='row feature-card-row'>
                  <Featuredboxes />
                </div>
              </div>
            </div>
            <div className='row filter-row'>
              <div className='col-8 filter-buttons'>
                <button className='filter-btn'>ALL SALES</button>
                <button className='filter-btn'>UPCOMING</button>
                <button className='filter-btn'>LIVE</button>
                <button className='filter-btn'>ENDED</button>
              </div>
              <div className='col-4'>
                <div className='filter-search-name'>
                  <img className='m-2' src='/images/Search.png'></img>
                  <input className="search-input" type="search" placeholder="Search.." aria-label="Search" />
                </div>
              </div>
            </div>
            <div className='row cards-row' ref={salecardsRef}>
              <Salecards setActiveSection={setActiveSection} />
            </div>
            <div className='row'>
              <div className='container ask-btn-div'>
                <button className='ask-btn'>Ask Us</button>
              </div>
            </div>
          </div>
        </div>
      }

      {activeSection === 1 &&
        <div className='content py-3'>
          <div className='container container-fluid'>
            {/* TITLE */}
            <div>
              <div
                className='text-end'>
                <button
                  className='btn btn-lg m-3 px-3'
                  onClick={() => {
                    setActiveSection(0)
                    setActiveTab(1)
                  }}
                  style={{ backgroundColor: '#5ce65c' }}
                >
                  Close
                </button>
              </div>

              <div className="bg-dark p-4 my-2 rounded-4"
                style={{
                  backgroundColor: '#fff4',
                  border: '1px solid #5ce65c'
                }}
              >
                {/* STEPPER HEAD */}
                <div className='row flex-nowrap overflow-auto'>
                  {steps.map((step, i) =>
                    <div className='col-3 px-4' key={i}>
                      {activeStepHead(step, activeTab >= (i + 1) ? true : false)}
                    </div>
                  )}
                </div>

                {/* FORM 1 */}
                {activeTab === 1 &&
                  <Step1 activeTab={activeTab} setActiveTab={setActiveTab} />
                }

                {activeTab === 2 &&
                  <Step2 activeTab={activeTab} setActiveTab={setActiveTab} />
                }

                {activeTab === 3 &&
                  <Step3 activeTab={activeTab} setActiveTab={setActiveTab} />
                }

                {activeTab === 4 &&
                  <Step4 activeTab={activeTab} setActiveTab={setActiveTab} />
                }

              </div>
            </div>
          </div>
        </div>
      }

      {activeSection === 2 && <div className="main_div" id="blur">
        <div className="middle_div" >
          <button className='close_button' onClick={() => setActiveSection(0)}>
            Close
          </button>
          <Pools1 setActiveSection={setActiveSection} />
        </div>
      </div>
      }

      {activeSection === 3 &&
        <Metamaskconnect
          toggle1={toggle1}
          setActiveSection={setActiveSection}
        />
      }

      {activeSection === 4 &&
        <Participate
          toggle1={toggle1}
          setActiveSection={setActiveSection}
        />
      }
    </div>
  )
}

export default MiddleBottomdiv

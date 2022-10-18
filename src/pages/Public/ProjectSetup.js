import React, { useState,useEffect } from 'react'
import { MetaTags } from 'react-meta-tags'

import { Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

//import methods to handle data
import { getDeploymentFee, deploySale } from 'connect/dataProccessing'

const ProjectSetup = () => {

  const [activeTab, setActiveTab] = useState(1)

  const [step1, setStep1] = useState(null)

  const [step2, setStep2] = useState(null)
  const [isAble, setIsAble] = useState(false)

  const [step3, setStep3] = useState(null)
  const [description, setDescription] = useState('')

  var [deploymentFee, setDeploymentFee] = useState(0.000)


  const handleSubmit1 = (event) => {

    const form = event.currentTarget

    event.preventDefault()
    event.stopPropagation()

    setStep1({ title: form.title.value })

    setActiveTab(activeTab + 1)
  }

  const handleSubmit2 = (event) => {

    const form = event.currentTarget

    event.preventDefault()
    event.stopPropagation()

    setStep2({
      softcap: form.softcap.value,
      hardcap: form.hardcap.value,
      minbuy: form.minbuy.value,
      maxbuy: form.maxbuy.value,
      startdt: form.startdt.value,
      enddt: form.enddt.value,
      firstFund: form.firstFund.value,
      fundVest: form.fundVest.value,
      fundRelease: form.fundRelease.value,
    })

    setActiveTab(activeTab + 1)
  }

  const handleSubmit3 = (event) => {

    const form = event.currentTarget

    event.preventDefault()
    event.stopPropagation()

    setStep3({
      logo: form.logo.value,
      website: form.website.value,
      facebook: form.facebook.value,
      twitter: form.twitter.value,
      github: form.github.value,
      telegram: form.telegram.value,
      instagram: form.instagram.value,
      discord: form.discord.value,
      reddit: form.reddit.value,
      youtube: form.youtube.value,
    })

    setActiveTab(activeTab + 1)
  }

  const handleSubmitFinal =async (event) => {

    const form = event.currentTarget

    event.preventDefault()
    event.stopPropagation()

    /* 
      HANDLE API HERE
      get the values from the objects saved in states above
      description has its own state
    */

    await deploySale(step1,step2,step3,form.desc.value)

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
          <div className='avatar-xs'>
            <div className='avatar-title rounded'>{item.step}</div>
          </div>
        </div>

        <div className='ps-2'>
          <h4 className='text-primary'>
            {item.title}
          </h4>
          <p className='text-muted font-size-13'>
            {item.desc}
          </p>
        </div>
      </div>
      :
      <div className='d-flex flex-nowrap opacity-25'>
        <div>
          <div className='avatar-xs'>
            <div className='avatar-title rounded bg-black'>{item.step}</div>
          </div>
        </div>
        <div className='ps-2'>
          <h4>{item.title}</h4>
          <p style={{ fontSize: 13 }}>{item.desc}</p>
        </div>
      </div>
    )
  }

  useEffect(async () => {
    setDeploymentFee(
      deploymentFee = await  getDeploymentFee()
    )
   
   console.log('From frontend:',deploymentFee)
  },[])
  
  return (

    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Project Setup | SparkLaunch</title>
        </MetaTags>

        <Container fluid>

          <div
            className='text-end'>
            <Link
              to='/'
              className='btn btn-lg bg-primary fw-bold text-black m-3 px-3'
            >
              Close
            </Link>
          </div>

          <div className="featured-card bg-dark p-4 my-2 rounded-4">
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
              <Form onSubmit={handleSubmit1}>
                <p className='form-text' style={{ color: '#5ce65c' }}>
                  (*) is required field
                </p>

                <Form.Group className='mb-3' controlId='title'>
                  <Form.Label>Title *</Form.Label>
                  <Form.Control
                    defaultValue={step1?.title}
                    placeholder="Ex. This is my private sale..."
                    required
                  />
                  <Form.Text>
                    Pool creation fee: {deploymentFee} BNB
                  </Form.Text>
                </Form.Group>

                <Form.Group className='mb-2'>
                  <Form.Label>Currency</Form.Label>
                  <Form.Check
                    id="currency"
                    type='radio'
                    defaultChecked
                    label='BNB'
                    required
                  />
                  <Form.Text>
                    Users will pay with BNB for your token
                  </Form.Text>
                </Form.Group>

                <div className='text-end'>
                  <button
                    className='btn btn-primary px-3 fw-bolder'
                    type='submit'
                  >
                    Next {'>>'}
                  </button>
                </div>
              </Form>
            }

            {activeTab === 2 &&
              <Form onSubmit={handleSubmit2}>
                <p className='form-label text-primary'>
                  Whitelist
                </p>
                <Form.Group className='mb-2'>
                  <Form.Label>Whitelist</Form.Label>
                  <Form.Check
                    id="currency"
                    type='switch'
                    checked={isAble}
                    onChange={() => setIsAble(!isAble)}
                    label='Abble'
                  />
                  <Form.Text>
                    You can enable/disable whitelist anytime
                  </Form.Text>
                </Form.Group>

                <Row>
                  <Form.Group className='mb-2' as={Col} md={6} controlId='softcap'>
                    <Form.Label>SoftCap(AVAX)</Form.Label>
                    <Form.Control
                      defaultValue={step2?.softcap}
                      type='number'
                      placeholder="0"
                      step='.0000001'
                    />
                  </Form.Group>

                  <Form.Group className='mb-2' as={Col} md={6} controlId='hardcap'>
                    <Form.Label>Hardcap(AVAX) *</Form.Label>
                    <Form.Control
                      defaultValue={step2?.hardcap}
                      type='number'
                      placeholder="0"
                      required
                    />
                  </Form.Group>

                  <Form.Group className='mb-2' as={Col} md={6} controlId='minbuy'>
                    <Form.Label>Minimum Buy(AVAX) *</Form.Label>
                    <Form.Control
                      defaultValue={step2?.minbuy}
                      type='number'
                      placeholder="0"
                      required
                    />
                  </Form.Group>

                  <Form.Group className='mb-2' as={Col} md={6} controlId='maxbuy'>
                    <Form.Label>Maximum Buy(AVAX) *</Form.Label>
                    <Form.Control
                      defaultValue={step2?.maxbuy}
                      type='number'
                      placeholder="0"
                      required
                    />
                  </Form.Group>

                  <p className='form-text text-primary mb-1'>
                    Select time & end time (UTC) *
                  </p>

                  <Form.Group className='mb-2' as={Col} md={6} controlId='startdt'>
                    <Form.Label>Start time (UTC) *</Form.Label>
                    <Form.Control
                      defaultValue={step2?.startdt}
                      type='date'
                      placeholder="0"
                      required
                    />
                  </Form.Group>

                  <Form.Group className='mb-2' as={Col} md={6} controlId='enddt'>
                    <Form.Label>End time (UTC) *</Form.Label>
                    <Form.Control
                      defaultValue={step2?.enddt}
                      type='date'
                      placeholder="0"
                      required
                    />
                  </Form.Group>

                  <Form.Group className='mb-2' as={Col} md={6} controlId='firstFund'>
                    <Form.Label>
                      First Fund Release for Projects (%) *
                    </Form.Label>
                    <Form.Control
                      defaultValue={step2?.firstFund}
                      placeholder="Ex. 40%"
                      required
                    />
                  </Form.Group>

                  <Form.Group className='mb-2' as={Col} md={6} controlId='fundVest'>
                    <Form.Label>
                      Fund Vesting Period Each Cycle (days) *
                    </Form.Label>
                    <Form.Control
                      defaultValue={step2?.fundVest}
                      placeholder="Enter (days). Ex. 3%"
                      required
                    />
                  </Form.Group>

                  <Form.Group className='mb-2' as={Col} md={6} controlId='fundRelease'>
                    <Form.Label>
                      Fund Release Each Cycle (%) *
                    </Form.Label>
                    <Form.Control
                      defaultValue={step2?.fundRelease}
                      placeholder="Ex. 20%"
                      required
                    />
                  </Form.Group>

                </Row>

                <div className='d-flex justify-content-between mt-5'>
                  <button
                    className='btn btn-primary px-3 fw-bolder'
                    onClick={() => setActiveTab(activeTab - 1)}
                  >
                    {'<<'} Prev
                  </button>

                  <button
                    className='btn btn-primary px-3 fw-bolder'
                    type='submit'
                  >
                    Next {'>>'}
                  </button>
                </div>
              </Form>
            }

            {activeTab === 3 &&
              <Form onSubmit={handleSubmit3}>

                <Row>
                  <Form.Group className='mb-2' as={Col} md={6} controlId='logo'>
                    <Form.Label>
                      Logo URL *
                    </Form.Label>
                    <Form.Control
                      defaultValue={step3?.logo}
                      placeholder="Ex. http://..."
                      required
                    />
                  </Form.Group>

                  <Form.Group className='mb-2' as={Col} md={6} controlId='website'>
                    <Form.Label>
                      Website *
                    </Form.Label>
                    <Form.Control
                      defaultValue={step3?.website}
                      placeholder="Ex. http://..."
                      required
                    />
                  </Form.Group>

                  <Form.Group className='mb-2' as={Col} md={6} controlId='facebook'>
                    <Form.Label>
                      Facebook
                    </Form.Label>
                    <Form.Control
                      defaultValue={step3?.facebook}
                      placeholder="Ex. http://..."
                    />
                  </Form.Group>

                  <Form.Group className='mb-2' as={Col} md={6} controlId='twitter'>
                    <Form.Label>
                      Twitter
                    </Form.Label>
                    <Form.Control
                      defaultValue={step3?.twitter}
                      placeholder="Ex. http://..."
                    />
                  </Form.Group>

                  <Form.Group className='mb-2' as={Col} md={6} controlId='github'>
                    <Form.Label>
                      Github
                    </Form.Label>
                    <Form.Control
                      defaultValue={step3?.github}
                      placeholder="Ex. http://..."
                    />
                  </Form.Group>

                  <Form.Group className='mb-2' as={Col} md={6} controlId='telegram'>
                    <Form.Label>
                      Telegram
                    </Form.Label>
                    <Form.Control
                      defaultValue={step3?.telegram}
                      placeholder="Ex. http://..."
                    />
                  </Form.Group>

                  <Form.Group className='mb-2' as={Col} md={6} controlId='instagram'>
                    <Form.Label>
                      Instagram
                    </Form.Label>
                    <Form.Control
                      defaultValue={step3?.instagram}
                      placeholder="Ex. http://..."
                    />
                  </Form.Group>

                  <Form.Group className='mb-2' as={Col} md={6} controlId='discord'>
                    <Form.Label>
                      Discord
                    </Form.Label>
                    <Form.Control
                      defaultValue={step3?.discord}
                      placeholder="Ex. http://..."
                    />
                  </Form.Group>

                  <Form.Group className='mb-2' as={Col} md={6} controlId='reddit'>
                    <Form.Label>
                      Reddit
                    </Form.Label>
                    <Form.Control
                      defaultValue={step3?.reddit}
                      placeholder="Ex. http://..."
                    />
                  </Form.Group>

                  <Form.Group className='mb-2' as={Col} md={6} controlId='youtube'>
                    <Form.Label>
                      Youtube
                    </Form.Label>
                    <Form.Control
                      defaultValue={step3?.youtube}
                      placeholder="Ex. http://..."
                    />
                  </Form.Group>

                </Row>

                <div className='d-flex justify-content-between mt-5'>
                  <button
                    className='btn btn-primary px-3 fw-bolder'
                    onClick={() => setActiveTab(activeTab - 1)}
                  >
                    {'<<'} Prev
                  </button>

                  <button
                    className='btn btn-primary px-3 fw-bolder'
                    type='submit'
                  >
                    Next {'>>'}
                  </button>
                </div>
              </Form>
            }

            {activeTab === 4 &&
              <Form onSubmit={handleSubmitFinal}>

                <Form.Group className='mb-2' controlId='desc'>
                  <Form.Label>
                    Description *
                  </Form.Label>
                  <Form.Control
                    as='textarea'
                    rows={8}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Ex. This is the best project..."
                    required
                  />
                </Form.Group>

                <div className='d-flex justify-content-between mt-5'>
                  <button
                    className='btn btn-primary px-3 fw-bolder'
                    onClick={() => setActiveTab(activeTab - 1)}
                  >
                    {'<<'} Prev
                  </button>

                  <button
                    className='btn btn-primary px-3 fw-bolder'
                    type='submit'
                  >
                    Done
                  </button>
                </div>
              </Form>
            }

          </div>
        </Container>
      </div>
    </React.Fragment>
  )


}

export default ProjectSetup
import React, { useEffect, useState } from 'react'
import { MetaTags } from 'react-meta-tags'

import { Col, Container, Form, Modal, Row } from 'react-bootstrap'
import moment from 'moment/moment'

import { depositTokens, finishSale, getSaleById, participateInsale, withdraw, withdrawDeposit, withdrawEarnings, withdrawUnused } from 'connect/dataProccessing'

import smLogo from 'assets/images/logos/smlogo.png'
import bscLogo from 'assets/images/logos/bsc.png'
import discordLogo from 'assets/images/icons/discord.png'


const SaleDetails = props => {

  const { ethereum } = window;

  const [isLoading, setIsLoading] = useState(true)
  const [saleData, setSaleData] = useState(null)

  const [showParticipateModal, setShowParticipateModal] = useState(false)


  const handleParticipate = (event) => {

    const form = event.currentTarget

    event.preventDefault()
    event.stopPropagation()

    participateInsale(params.id, form.amount.value)
  }

  const {
    match: { params },
  } = props

  useEffect(async () => {
    if (params && params.id) {
      if (!ethereum) {
        alert('Please install MetaMask')
      }
      else {
        const sale = await getSaleById(params.id, setIsLoading)

        console.log(sale)

        setSaleData(sale)
      }
    }
  }, [])


  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Sale Parcticipation | SparkLaunch</title>
        </MetaTags>

        <Container fluid>
          {isLoading ?
            <div className='text-center'>
              <img src={smLogo} className='blinking-item' />
            </div>
            :
            <div className='bg-dark bg-soft border border-primary rounded-4 p-3'>

              <Row className='mx-0'>
                <Col md={6} lg='4' className='bg-dark bg-soft border border-primary rounded-4 p-3'>

                  <div className='d-flex flex-nowrap align-items-center'>

                    <div>
                      <div className='avatar-md me-3'>
                        <div className='avatar-title bg-primary bg-soft border border-primary rounded-circle overflow-hidden'>
                          <img
                            src={saleData?.saleLinks?.logo}
                            style={{
                              height: '100%',
                              width: '100%',
                              objectFit: 'cover',
                              objectPosition: '10% 20%'
                            }}
                            alt={saleData?.saleToken.symbol ? saleData?.saleToken.symbol : 'SPL'}
                          />
                        </div>
                      </div>
                    </div>

                    <div className='flex-grow-1'>
                      <h3 className='text-primary mb-0 me-2 fw-bold'>
                        {saleData?.saleToken?.name}
                      </h3>
                      <h5>
                        {saleData?.saleToken?.symbol}
                      </h5>
                    </div>

                    <div>
                      <div className='avatar-md me-3'>
                        <div className='avatar-title bg-dark bg-soft rounded-circle overflow-hidden'>
                          <img
                            src={bscLogo}
                            style={{
                              height: '100%',
                              width: '100%',
                              objectFit: 'cover',
                              objectPosition: '10% 20%'
                            }}
                          />
                        </div>
                      </div>
                    </div>

                  </div>

                  <p className='my-2 text-white font-size-12 line-truncate-2'>
                    {saleData?.saleDetails.description}
                  </p>

                  <ul className="list-unstyled d-flex mb-4">

                    <li className="ms-2">
                      <a href={saleData?.saleLinks.twitter ? saleData?.saleLinks.twitter : '#'}>
                        <i className="bx bxl-twitter fs-3" />
                      </a>
                    </li>

                    <li className="ms-2">
                      <a href={saleData?.saleLinks.discord ? saleData?.saleLinks.discord : '#'}>
                        <img src={discordLogo} alt='discord' />
                      </a>
                    </li>

                    <li className="ms-2">
                      <a href={saleData?.saleLinks.telegram ? saleData?.saleLinks.telegram : '#'}>
                        <i className="bx bxl-telegram fs-3" />
                      </a>
                    </li>
                  </ul>

                  <div className='text-white font-size-11'>

                    <h4 className='text-primary'>SALE DETAILS</h4>

                    <p className='mb-2 fs-5'>
                      SoftCap:{' '}
                      <span className='text-primary'>
                        {saleData?.saleParams.softCap} Tokens
                      </span>
                    </p>

                    <p className='mb-2 fs-5'>
                      HardCap:{' '}
                      <span className='text-primary'>
                        {saleData?.saleParams.hardCap} Tokens
                      </span>
                    </p>

                    <p className='mb-2 fs-5'>
                      Min participation:{' '}
                      <span className='text-primary'>
                        {saleData?.saleParams.minBuy} BNB
                      </span>
                    </p>

                    <p className='mb-2 fs-5'>
                      Max participation:{' '}
                      <span className='text-primary'>
                        {saleData?.saleParams.maxBuy} BNB
                      </span>
                    </p>

                    <p className='mb-2 fs-5'>
                      Price:{' '}
                      <span className='text-primary'>
                        {saleData?.saleParams.price} BNB
                      </span>
                    </p>

                    <p className='mb-2 fs-5'>
                      Sale End:{' '}
                      <span className='text-primary'>
                        {moment(saleData?.saleParams.endDate).format('llll')}
                      </span>
                    </p>
                  </div>

                </Col>

                <Col md={5} lg={8}>
                  <div className='d-flex flex-column align-items-end'>

                    {saleData?.user === 'buyer' &&
                      <>
                        <button
                          className='btn btn-lg btn-gradient-green mb-3 w-25'
                          onClick={() => setShowParticipateModal(true)}
                        >
                          Participate
                        </button>


                        <button
                          className='btn btn-lg btn-gradient-green mb-3 w-25'
                          onClick={() => withdraw(params.id)}
                        >
                          Withdraw
                        </button>

                        <button
                          className='btn btn-lg btn-gradient-green mb-3 w-25'
                          onClick={() => withdrawUnused(params.id)}
                        >
                          Withdraw Unused
                        </button>
                      </>
                    }

                    {saleData?.user === 'seller' &&
                      <>
                        <button
                          className='btn btn-lg btn-gradient-green mb-3 w-25'
                          onClick={() => depositTokens(params.id)}
                        >
                          Deposit Tokens
                        </button>

                        <button
                          className='btn btn-lg btn-gradient-green mb-3 w-25'
                          onClick={() => withdrawDeposit(params.id)}
                        >
                          Withdraw Deposit
                        </button>

                        <button
                          className='btn btn-lg btn-gradient-green mb-3 w-25'
                          onClick={() => withdrawEarnings(params.id)}
                        >
                          Withdraw Earnings
                        </button>
                      </>
                    }

                    {saleData?.user === 'admin' &&
                      <button
                        className='btn btn-lg btn-gradient-green mb-3 w-25'
                        onClick={() => finishSale(params.id)}
                      >
                        Finish Sale
                      </button>
                    }
                  </div>
                </Col>
              </Row>
            </div>
          }

          <Modal
            backdrop='static'
            size="sm"
            show={showParticipateModal}
            centered
            onHide={() => setShowParticipateModal(false)}
          >
            <div className="modal-content">
              <Modal.Header>
                <span className="text-primary fs-4">Advert Share</span>
                <button
                  className="btn border-0" data-bs-dismiss="modal"
                  onClick={() => setShowParticipateModal(false)}
                >
                  X
                </button>
              </Modal.Header>
              <Form onSubmit={handleParticipate} className='m-3'>
                <Form.Group className='mb-3' controlId='amount'>
                  <Form.Label>Amount </Form.Label>
                  <Form.Text className='text-white'> (Max: {saleData?.saleParams.maxBuy} BNB)</Form.Text>
                  <Form.Control
                    placeholder='0'
                    type='number'
                    step='0.00001'
                    min='0'
                  />
                </Form.Group>

                <div className='text-center'>
                  <button
                    className='btn btn-primary px-3 fw-bolder w-50'
                    type='submit'
                  >
                    Buy
                  </button>
                </div>
              </Form>
              <Modal.Body>
              </Modal.Body>
            </div>
          </Modal>

        </Container>
      </div>
    </React.Fragment>
  )
}

export default SaleDetails
import React from 'react'
import moment from 'moment/moment'
import { Link } from 'react-router-dom'

import { Col, ProgressBar, Row } from 'react-bootstrap'

import discordLogo from 'assets/images/icons/discord.png'


const SaleCard = ({ sale }) => {
  return (
    <Link to={'sale/' + sale.id}>
      <div className='bg-dark bg-soft border border-primary rounded-4 p-3 h-100 text-white'>

        <div className='d-flex flex-nowrap'>

          <div className='flex-grow-1'>
            <h4 className='text-primary mb-0'>
              {sale.saleToken?.name}
            </h4>
            <h5>
              {sale.saleToken?.symbol}
            </h5>
          </div>

          <div>
            <div className='avatar-md'>
              <div className='avatar-title bg-primary bg-soft rounded-circle overflow-hidden'>
                <img
                  src={sale.saleLinks?.logo}
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

        <ul className="list-unstyled d-flex mb-4">

          <li className="ms-2">
            <a href={sale.saleLinks.twitter ? sale.saleLinks.twitter : '#'}>
              <i className="bx bxl-twitter fs-3" />
            </a>
          </li>

          <li className="ms-2">
            <a href={sale.saleLinks.discord ? sale.saleLinks.discord : '#'}>
              <img src={discordLogo} alt='discord' />
            </a>
          </li>

          <li className="ms-2">
            <a href={sale.saleLinks.telegram ? sale.saleLinks.telegram : '#'}>
              <i className="bx bxl-telegram fs-3" />
            </a>
          </li>
        </ul>

        <span className='bg-primary text-dark fw-bold px-2 rounded-pill font-size-11'>
          {sale.saleDetails.status}
        </span>

        <p className='my-2 text-white font-size-12'>
          {sale.saleDetails.description}
        </p>

        <div className='text-white font-size-11'>
          <Row>
            <Col xs={6}>SoftCap</Col>
            <Col xs={6} className='text-primary'>
              {sale.saleParams.softCap} Token
            </Col>
          </Row>

          <Row>
            <Col xs={6}>Raised</Col>
            <Col xs={6} className='text-primary'>
              {sale.saleParams.raised} BNB
            </Col>
          </Row>

          <Row>
            <Col xs={6}>Price</Col>
            <Col xs={6} className='text-primary'>
              {sale.saleParams.price} BNB
            </Col>
          </Row>

          <Row>
            <Col xs={6}>End</Col>
            <Col xs={6} className='text-primary'>
              {moment(sale.saleParams.endDate).format('llll')}
            </Col>
          </Row>
        </div>

        <div>
          <div className='mt-3 d-flex justify-content-between font-size-11'>
            <span className='text-white'>
              {sale.saleDetails.diff}
            </span>

            <span className='text-primary'>
              {sale.saleDetails.percentage} %
            </span>
          </div>

          <ProgressBar variant='primary' now={sale.saleDetails.percentage} />

          <Row className='mt-3 font-size-10'>
            <Col xs={6}>Holders</Col>
            <Col xs={6}>Listing Time</Col>

            <Col xs={6} className='text-primary'>
              {sale.saleDetails.holders}
            </Col>
            <Col xs={6} className='text-primary'>
              {moment(sale.saleDetails.listingDate).format('llll')}
            </Col>
          </Row>

        </div>

      </div>
    </Link>
  )
}

export default SaleCard

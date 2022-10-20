import React, { useEffect, useState } from 'react'
import MetaTags from "react-meta-tags"
import { Link } from 'react-router-dom'

import { Col, Container, Row } from 'react-bootstrap'

import { fetchAllSales } from 'connect/dataProccessing'

import SaleCard from 'components/SaleCard'
import verticaLogo from 'assets/images/logos/biglogo.png'
import smLogo from 'assets/images/logos/smlogo.png'
import api from 'connect/BaseApi'


const Public = props => {

  const tempCard = (<div className='featured-card-animation'></div>)
  const tempList = [tempCard, tempCard, tempCard, tempCard, tempCard]

  const [featuredSales, setFeaturedSales] = useState([])
  const [deployedSales, setDeployedSales] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  const fetchFeaturedSale = () => {
    api.get("featured/true", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then(response => {
        const data = response.data
        // console.log(data)

        setFeaturedSales(data)
      })
      .catch(error => {
        // information not found
        console.log(error.response?.data?.message)
      })
  }

  useEffect(async () => {
    fetchFeaturedSale()

    const sales = await fetchAllSales(setIsLoading)

    // console.log(sales?.salesData)
    setTimeout(() => {
      setDeployedSales(sales?.salesData)
    }, 10000);
  }, [])


  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Home | SparkLaunch</title>
        </MetaTags>

        <Container fluid>

          <Row className='mb-5'>
            <Col md={{ span: 6, offset: 3 }} className='d-flex'>
              <img className='img-fluid mx-auto mb-4' src={verticaLogo} />
            </Col>
          </Row>

          <Row className='pt-5 mb-5'>
            <Col md={6} className='text-end'>
              <Link to='/project-setup' className='bg-primary text-black fs-4 fw-bold p-3 rounded-pill'>
                LAUNCH YOUR PROJECT WITH US
              </Link>
            </Col>

            <Col md={6} className="text-center">
              <a href='#sales' className='border border-2 border-primary text-white fs-4 fw-bold py-3 px-5 w-lg rounded-pill'>
                BUY $IGHT
              </a>
            </Col>
          </Row>

          <div className='pt-4'>
            <p className='text-center display-4 text-primary fw-bolder'>Featured Projects</p>

            <div className='bg-white py-1 rounded mx-auto' style={{ maxWidth: 70 }}></div>

            <Row className='my-4'>
              {featuredSales.length > 0 ?
                featuredSales.map((sale, key) =>
                  <Col key={key}>
                    <div
                      className='featured-card'
                      style={{ backgroundImage: `url(${sale.saleDetails.saleImg})` }}
                    >
                      <h3 className='text-center position-absolute top-50 start-0 end-0 my-auto'>{sale.saleToken.name}</h3>
                    </div>
                  </Col>
                )
                :
                tempList.map((item, key) =>
                  <Col key={key}>
                    {item}
                  </Col>
                )
              }
            </Row>

            <Row id='sales' className='py-4'>
              <Col lg={8} className="d-flex justify-content-evenly">
                <button className='btn btn-lg filter-button'>
                  ALL SALES
                </button>

                <button className='btn btn-lg filter-button'>
                  UPCOMING
                </button>

                <button className='btn btn-lg filter-button'>
                  LIVE
                </button>

                <button className='btn btn-lg filter-button'>
                  ENDED
                </button>
              </Col>

              <Col md={4}>
                <div className='filter-search-name'>
                  <i className='bx bx-search fs-1 me-1' />
                  <input className="search-input" type="search" placeholder="Search.." aria-label="Search" />
                </div>
              </Col>
            </Row>

          </div>

          <div className='my-4'>
            <Row className='g-4 mb-4' id='pools'>
              {/* <Salecards /> */}
              {isLoading ?
                <div className='text-center'>
                  <img src={smLogo} className='blinking-item' height={150} />
                </div>
                :
                deployedSales?.map((sale, key) =>
                  <Col key={key} lg={3} md={4} className="" sm={6}>
                    <SaleCard sale={sale} />
                  </Col>
                )
              }
            </Row>

            <div className='text-end mb-3'>
              <button className='btn btn-lg bg-primary rounded-4 w-25 fs-1 fw-bold text-black me-3'>Ask Us</button>
            </div>
          </div>

        </Container>
      </div>
    </React.Fragment>
  )
}

export default Public

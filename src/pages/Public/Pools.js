import React, { useState } from 'react'
import { MetaTags } from 'react-meta-tags'

import { Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { finishSale } from 'connect/dataProccessing'
import Pools1MidInnerLeftDiv from 'components/Middlediv/pools1_mid_inner_left_div'


const Pools = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Pools | Marquee</title>
        </MetaTags>

        <Container fluid>

        </Container>
      </div>
    </React.Fragment>
  )
}

export default Pools
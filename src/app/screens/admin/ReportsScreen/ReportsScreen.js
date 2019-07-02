import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const ReportsScreen = () => {
  return (
    <Container className='text-center'>
      <Row>
        <Col md={12}>
          <h1>Reports</h1>
        </Col>

        <Col md={12}>
          <p>
            Cover is a one-page template for building
            simple and beautiful home pages. Download, edit the text,
            and add your own fullscreen background photo to make it your own.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default ReportsScreen

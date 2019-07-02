import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'

const DashScreen = () => {
  return (
    <Container className='text-center'>
      <Row>
        <Col md={12}>
          <h1>ADMIN</h1>
        </Col>

        <Col md={12}>
          <p>
            Cover is a one-page template for building
            simple and beautiful home pages. Download, edit the text,
            and add your own fullscreen background photo to make it your own.
        </p>
          <p>
            <Button size='lg' outline color="primary">primary</Button>{' '}
            <Button size='lg' outline color="secondary">secondary</Button>{' '}
            <Button size='lg' outline color="success">success</Button>{' '}
            <Button size='lg' outline color="info">info</Button>{' '}
            <Button size='lg' outline color="warning">warning</Button>{' '}
            <Button size='lg' outline color="danger">danger</Button>
          </p>
          <p>
            <Button size='lg' color="primary">primary</Button>{' '}
            <Button size='lg' color="secondary">secondary</Button>{' '}
            <Button size='lg' color="success">success</Button>{' '}
            <Button size='lg' color="info">info</Button>{' '}
            <Button size='lg' color="warning">warning</Button>{' '}
            <Button size='lg' color="danger">danger</Button>
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default DashScreen

import React from 'react'
import { Container , Row, Col } from 'react-bootstrap'
import Navigation from './pages/Navigation'
import About from './pages/About'
import Story from './pages/Story'
import Projects from './pages/Projects'
import SpotLight from './components/SpotLight'

const App = () => {
  return (
    <>
      <SpotLight />
      <Container>
          <Row>
             <Navigation />
             <Col xs sm={{span:7, offset: 5}}>
                <About />
                <Story />
                <Projects />
             </Col>
          </Row>
      </Container>
    </>
  )
}

export default App
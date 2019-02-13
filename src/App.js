import React, { Component } from 'react';

import './App.css';
import Stocks from './Stocks'
import Header from './Header'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header/>
        <Container>
  <Row>
    <Col xs={12}><Stocks/></Col>
    
  </Row>
  
</Container>

        
      </div>
    );
  }
}

export default App;

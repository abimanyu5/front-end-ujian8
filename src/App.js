import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Register from "./component/Register";
import List from "./component/List";
import {Col, Container, Row} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col><Register/></Col>
          <Col><List/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

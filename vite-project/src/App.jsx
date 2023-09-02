import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import { Header } from './modules/header';
import { Body } from './modules/body';
import { Sidebar } from './modules/sidebar';
import { Container, Row, Col } from "react-bootstrap";

function App() {

  return (
          <Row className="justify-content-md-center">
            <Col xs lg="2">
                    <Row>
                        <Sidebar />
                    </Row>
            </Col>
            <Col>
                <Row className="border">
                        <Col ><Header /></Col>
                </Row>
                <Row className="border">
                    <Col><Body /></Col>
                </Row>
            </Col>
        </Row>
  )
}

export default App

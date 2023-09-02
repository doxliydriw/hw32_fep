import React from 'react'
import ReactDOM from 'react-dom/client'
import { Container} from "react-bootstrap";
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container fluid>
      <App />
      </Container>
  </React.StrictMode>,
)

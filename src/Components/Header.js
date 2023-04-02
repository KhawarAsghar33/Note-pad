 import React from 'react'
import khawarlogo from './khawarlogo.png'
import { Container } from 'react-bootstrap'

export default function Header() {
    return (

        <Container fluid='xs' className="header">
          <img src={khawarlogo} width="400px" height="80px" alt="khawarlogo" />
        </Container>

    )
}

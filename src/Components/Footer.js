import React from 'react'
import { Container } from 'react-bootstrap';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container fluid='xs' className="footer">
      <p>Copyright © {year}</p>
    </Container>
  )
}

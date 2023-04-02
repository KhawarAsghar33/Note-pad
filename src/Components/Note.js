import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Button, Container, Card} from 'react-bootstrap'

export default function Note(props) {
  const deleteNote = () => {
    props.deleteItem(props.id);
  }
  return (

    <Container fluid='xs'>
          <Card className="justify-content-md-right" bg='secondary' style={{width: '18rem', marginTop: '2rem', display:'inline-block', color:'white'}}>
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>{props.content}</Card.Text>
              <Button variant="warning" onClick={deleteNote} style={{ marginLeft: "12rem", marginTop: "1rem" }}><FontAwesomeIcon icon={faTrash} /></Button>
            </Card.Body>
          </Card>
    </Container>
  )
}

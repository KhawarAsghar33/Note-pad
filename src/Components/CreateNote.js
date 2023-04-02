import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

export default function CreateNote(props) {
  
  const [note,setNote]=useState({title:"" , content:""});

  const InputEvent = (event) => {
    
    //const value=event.target.value;
    //const name=event.target.name;
    
    const {value, name} = event.target;

    setNote((prevData)=>{
      return {
        ...prevData,
        [name]: value,
      }
    })
    console.log(note);
  }
  const addEvent = () => {
    props.passNote(note);
    setNote({title:"" , content:""})
  }
  return (
    <Container fluid='xs' className='createNote'>
        <form>
            <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Enter a title" /><br/><br/>
            <textarea width="" column="" name="content" value={note.content} onChange={InputEvent} placeholder='Write a note...' /><br/><br/><br/>
            <Button onClick={addEvent} variant="warning"><FontAwesomeIcon icon={faCartPlus} /></Button>
        </form>
    </Container>
  )
}

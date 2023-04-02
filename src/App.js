import './App.css';
import Header from './Components/Header';
import CreateNote from './Components/CreateNote';
import Note from './Components/Note';
import Footer from './Components/Footer';
import { useState } from 'react';

function App() {

  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    //alert("Clicked");
    setAddItem((prevData) => {
      return [...prevData, note]
    })
    console.log(note);
  }
  const onDelete = (id) => {
    setAddItem((olddata) => 
       olddata.filter((currentdata,index) => {
          return index !==id;
       })
    )
  }
  return (
    <div className='mianBody'>
      <Header />
      <CreateNote passNote={addNote} />

       {
              addItem.map((val , index) => {
                return <Note 
                         key={index}
                         id={index}
                         title={val.title}
                         content={val.content}
                         deleteItem={onDelete}
                        />
               })
       }

      <Footer />
    </div>
  );
}

export default App;

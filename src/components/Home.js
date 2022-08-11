import React from 'react';
import { useEffect, useState } from "react";
import InputForm from "../components/inputForm/InputForm.js";
import NoteCard from "../components/noteCard/NoteCard";





const Home = () => {
  const [notes, setNotes] = useState([]);
  const [isReload, setIsReload] = useState(false);

  useEffect(() => {

    fetch("https://enigmatic-meadow-29470.herokuapp.com/notes")
      .then(res => res.json())
      .then(data => setNotes(data))


  }, [isReload]);
  /*
1. here there will be a function named handleSearch
to handle search by query, and it will be passed as props to header

  */
  const handleSearch = event => {
    event.preventDefault();
    const queryText = event.target.searchText.value;
    if (queryText) {
      fetch(`https://enigmatic-meadow-29470.herokuapp.com/notes?userName=${queryText}`)
        .then(res => res.json())
        .then(data => setNotes(data))
    }
  }

  /*2. here there will be a function named handleDelete
  to delete a note, and it will be passed as props to NoteCard that will be triggered using delete button.
   */
  const handleDelete = (id) => {
    fetch(`https://enigmatic-meadow-29470.herokuapp.com/note/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        setIsReload(!isReload)
      })
  }

  /*
3. there will be a function named handleUpdate
    to update data, and it will be passed as props to NoteCard and 
   later it will be passed to Update modal using props.
 */
  // https://enigmatic-meadow-29470.herokuapp.com/note/6269426e93bbf832d4e5f9

  /*
4.  there will be a function named handlePost
to post data to backend, and it will be passed as props to InputFrom.
 */
  const handlePost = (event) => {
    event.preventDefault();
    const productName = event.target.productName.value;
    const productType = event.target.productType.value;
    const price = event.target.price.value;
    const description = event.target.description.value;
    console.log({ productName, productType, price, description })

    fetch('https://enigmatic-meadow-29470.herokuapp.com/note', {
      method: 'POST',
      body: JSON.stringify({ productName, productType, price, description }),
      headers: {
        'Content-type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setIsReload(!isReload)
      })

    event.target.productName.value = '';
    event.target.productType.value = '';
    event.target.price.value = '';
    event.target.description.value= '';
  }



  return (
    <div className="App">
      {/* <Header handleSearch={handleSearch} /> */}
      <InputForm handlePost={handlePost} />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {notes.map((note) => (
          <NoteCard
            note={note}
            handleDelete={handleDelete}
            setIsReload={setIsReload}
            isReload={isReload}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
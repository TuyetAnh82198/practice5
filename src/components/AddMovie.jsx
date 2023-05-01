import React, { useRef } from "react";

import styles from "./AddMovie.module.css";

const AddMovie = () => {
  const titleInput = useRef();
  const openingInput = useRef();
  const dateInput = useRef();

  const addMovie = () => {
    const movieOj = {
      id: Math.random().toString(),
      title: titleInput.current.value,
      opening: openingInput.current.value,
      date: dateInput.current.value,
    };
    fetch(`https://database-14977-default-rtdb.firebaseio.com/movies.json`, {
      method: "POST",
      body: JSON.stringify(movieOj),
      headers: { "Content-type": "application/json" },
    });
    // console.log(movieOj);
    titleInput.current.value = "";
    openingInput.current.value = "";
    dateInput.current.value = "";
  };

  return (
    <div className={styles.control}>
      <div className={styles.margintop}>
        <label forhtml="title">Title</label>
        <input id="title" type="text" ref={titleInput} />
      </div>
      <div className={styles.margintop}>
        <label forhtml="opening">Opening Text</label>
        <textarea id="opening" ref={openingInput} />
      </div>
      <div className={styles.margintop}>
        <label forhtml="date">Opening Text</label>
        <input id="date" type="text" ref={dateInput} />
      </div>
      <div className={styles.margintop}>
        <button onClick={() => addMovie()}>Add Movie</button>
      </div>
    </div>
  );
};

export default AddMovie;

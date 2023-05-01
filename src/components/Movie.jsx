import React from "react";

import styles from "./Movie.module.css";

const Movie = (props) => {
  return (
    <React.Fragment>
      {props.data.map((movie) => (
        <div key={movie.id} className={styles.movie}>
          <h2>{movie.title}</h2>
          <h3>{movie.date}</h3>
          <p>{movie.opening}</p>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Movie;

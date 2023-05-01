import styles from "./MoviesList.module.css";

import Movie from "./Movie.jsx";

const MovieList = (props) => {
  return (
    <div className={styles.movieslist}>
      <Movie data={props.movies} />
    </div>
  );
};

export default MovieList;

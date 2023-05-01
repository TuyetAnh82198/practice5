import { useState } from "react";

import "./App.css";

import AddMovie from "./components/AddMovie.jsx";
import MovieList from "./components/MovieList.jsx";

function App() {
  //state dữ liệu về
  const [movies, setMovies] = useState([]);

  const movieFetch = () => {
    fetch(`https://database-14977-default-rtdb.firebaseio.com/movies.json`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((err) => alert(err));
  };
  console.log(movies);

  let movieArr = [];
  for (const key in movies) {
    movieArr.push({
      id: key,
      title: movies[key].title,
      opening: movies[key].opening,
      date: movies[key].date,
    });
  }
  console.log(movieArr);

  return (
    <div className="App">
      <section>
        <AddMovie />
      </section>
      <section>
        <button onClick={() => movieFetch()}>Fetch Movies</button>
      </section>
      <section>
        <MovieList movies={movieArr} />
      </section>
    </div>
  );
}

export default App;

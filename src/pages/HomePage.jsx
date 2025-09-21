import axios from "axios";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    axios
      .get("http://localhost:3000/api/movies/")
      .then((resp) => {
        setMovies(resp.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Booflix</h1>
          <h2>
            <span>Film per veri appassionati</span>
          </h2>
        </div>
      </div>
      <div className="row gy-3">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card-movie">
            <img
              src="./imgs/movie.jpg"
              className="cover-movie-card"
              alt="Movie"
            />
            <div className="overlay">
              <h2>Titolo Movie</h2>
              <p>Autore</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

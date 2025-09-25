import axios from "axios";
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    axios
      .get("http://localhost:3000/api/movies/")
      .then((resp) => {
        setMovies(resp.data);
        console.log(resp.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(fetchMovies, []);

  return (
    <div className="container my-5">
      <Loader />
      <div className="row mb-4">
        <div className="col-12 text-center">
          <h1>Booflix</h1>
          <h2>
            <span>Film per veri appassionati</span>
          </h2>
        </div>
      </div>
      <div className="row gy-3">
        {movies.map((movie) => {
          const { id } = movie;
          return <MovieCard key={id} movie={movie}/>;
        })}
      </div>
    </div>
  );
};

export default HomePage;

import axios from "axios";
import MovieCard from "../components/MovieCard";
import { useState, useEffect, useContext } from "react";
import GlobalContext from "../contexts/globalContext";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
    const {setIsLoading} = useContext(GlobalContext);

  const fetchMovies = () => {
    setIsLoading(true);
    axios
      .get("http://localhost:3000/api/movies/")
      .then((resp) => {
        setMovies(resp.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(fetchMovies, []);

  return (
    <div className="container my-5">
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

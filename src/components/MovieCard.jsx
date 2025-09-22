import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { id, title, image, director } = movie;
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <Link to={`/movies/${id}`}>
      <div className="card-movie">
        <img src={image} className="cover-movie-card" alt={title} />
        <div className="overlay">
          <h2>{title}</h2>
          <p>{director}</p>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default MovieCard;

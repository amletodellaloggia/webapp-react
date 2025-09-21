import React from "react";

const MovieCard = ({ movie }) => {
  const { title, image, director } = movie;
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card-movie">
        <img src={image} className="cover-movie-card" alt={title} />
        <div className="overlay">
          <h2>{title}</h2>
          <p>{director}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

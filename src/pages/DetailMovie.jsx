import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DetailMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/movies/${id}`)
      .then((resp) => {
        setMovie(resp.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="detail-card">
              <div className="d-flex">
                <div className="cover-image">
                  <img src={movie.image} alt={movie.title} />
                </div>
                <div className="text-details">
                  <h1>{movie.title}</h1>
                  <p>{movie.average_vote}</p>
                  <p>{movie.genre}</p>
                  <p>{movie.release_year}</p>
                  <p>{movie.director}</p>
                  <p>
                    <em>Riassunto</em>:
                    <span className="d-block">{movie.abstract}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="reviews-section mt-5">
        <h2>Recensioni</h2>
        {movie.reviews && movie.reviews.length > 0 ? (
          movie.reviews.map(review => (
            <div key={review.id} className="review mb-3 p-3 border rounded bg-dark text-light">
              <strong>{review.name}</strong>
              <span className="ms-2">
                {[1,2,3,4,5].map(i =>
                  i <= review.vote
                    ? <i key={i} className="fa-solid fa-star text-warning"></i>
                    : <i key={i} className="fa-regular fa-star text-warning"></i>
                )}
              </span>
              <p className="mt-2">{review.text}</p>
            </div>
          ))
        ) : (
          <p>Nessuna recensione disponibile.</p>
        )}
      </div>
      <div className="to-home-btn">
        <Link className="btn btn-secondary square-btn-to-home" to="/">
          <i className="fa-sharp fa-regular fa-house"></i>
        </Link>
      </div>
    </>
  );
};

export default DetailMovie;

import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NotFound from "./NotFound";

const DetailMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [hasPrev, setHasPrev] = useState(true);
  const [hasNext, setHasNext] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/movies/${id}`)
      .then((resp) => {
        setMovie(resp.data);
        axios
          .get(`http://localhost:3000/api/movies/${parseInt(id) - 1}`)
          .then(() => setHasPrev(true))
          .catch(() => setHasPrev(false));
        axios
          .get(`http://localhost:3000/api/movies/${parseInt(id) + 1}`)
          .then(() => setHasNext(true))
          .catch(() => setHasNext(false));
      })
      .catch(() => {
        setMovie(null);
      });
  }, [id]);
  if (movie === null) {
    return <NotFound />;
  }
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
                <div className="text-details details-relative w-100">
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
        <div className="pagination-btns d-flex my-3 justify-content-center">
          <button
            className="btn btn-secondary square-btn-to-home"
            onClick={() => navigate(`/movies/${parseInt(id) - 1}`)}
            disabled={!hasPrev}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button
            className="btn btn-secondary square-btn-to-home"
            onClick={() => navigate(`/movies/${parseInt(id) + 1}`)}
            disabled={!hasNext}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <div className="reviews-section mt-5">
        <h2>Recensioni</h2>
        {movie.reviews && movie.reviews.length > 0 ? (
          movie.reviews.map((review) => (
            <div
              key={review.id}
              className="review mb-3 p-3 border rounded bg-dark text-light"
            >
              <strong>{review.author}</strong>
              <span className="ms-2">
                {[1, 2, 3, 4, 5].map((i) =>
                  i <= review.rating ? (
                    <i key={i} className="fa-solid fa-star text-warning"></i>
                  ) : (
                    <i key={i} className="fa-regular fa-star text-warning"></i>
                  )
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

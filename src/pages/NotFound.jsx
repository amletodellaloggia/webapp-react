import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="not-found">
    <h1>404 - Pagina non trovata</h1>
    <p>La pagina che stai cercando non esiste.</p>
    <div className="to-home-btn">
      <Link className="btn btn-secondary square-btn-to-home" to="/">
        <i className="fa-sharp fa-regular fa-house"></i>
      </Link>
    </div>
  </div>
);

export default NotFound;
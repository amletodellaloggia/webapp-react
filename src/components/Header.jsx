import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="container-fluid">
      <div className="row">
        <div className="col-12 d-flex align-items-center">
          <Link to="/">
            <img src="/imgs/booflix.jpg" />
          </Link>
            <h1>
              Booflix | <span> La Tua Alternativa al Cinema</span>
            </h1>
          <div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

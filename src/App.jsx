//import Link from react router dom
import { Link } from "react-router-dom";

//import routes
import Routes from './routes/index.jsx';

export default function App() {

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
          <div className="container">
            <Link to="/" className="navbar-brand">HOME</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/posts" className="nav-link active" aria-current="page">POSTS</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contactku" className="nav-link active" aria-current="page">CONTACT</Link>
                </li>
              </ul>

              <ul className="navbar-nav ms-auto mb-2 mb-lg-0" role="search">
              <li className="nav-item">
                  <Link to="/login" className="btn btn-success" aria-current="page">ADMIN</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <Routes />

    </>
  )
  
}
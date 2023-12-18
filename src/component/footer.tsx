import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="modal-footer shadow ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3 mb-4 mt-4">
            <div className="d-flex">
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button className="btn mx-3">
                <i className="fab fa-twitter"></i>
              </button>
              <button className="btn p-2">
                <i className="fab fa-instagram"></i>
              </button>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-4 mt-4">
            <p className="h5 mb-4" style={{ fontWeight: 600 }}>Streamify</p>
            <ul className="cursor-pointer">
              <li className="liste1"><Link className="link" to={"/streamify/privacy"}>Privacy Policy</Link></li>
              <li className="liste1"><Link className="link" to={"/streamify/cookies"}>Cookies</Link></li>
              <li className="liste1"><Link className="link" to={"/streamify/profile"}>Profile</Link></li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-4 mt-4">
            <p className="h5 mb-4" style={{ fontWeight: 600 }}>Help</p>
            <ul className="cursor-pointer">
              <li className="liste1"><Link className="link" to={"/streamify/signup"}>Sign Up</Link></li>
              <li className="liste1"><Link className="link" to={"/streamify/login"}>Sign In</Link></li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-4 mt-4">
            <p className="h5 mb-4" style={{ fontWeight: 600 }}>Pages</p>
            <ul className="cursor-pointer">
              <li className="liste1"><Link className="link" to={"/streamify/home"}>Home</Link></li>
              <li className="liste1"><Link className="link" to={"/streamify/movies"}>Movie</Link></li>
              <li className="liste1"><Link className="link" to={"/streamify/series"}>Tv Show</Link></li>
              <li className="liste1"><Link className="link" to={"/streamify/upcoming"}>Upcoming</Link></li>
            </ul>
          </div>
        </div>
        <small className="text-center mt-5">&copy; Streamify, 2023. All rights reserved.</small>
      </div>
    </div>
  );
};

export default Footer;

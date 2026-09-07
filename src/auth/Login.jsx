import { useNavigate } from "react-router-dom";
import NavBar from "../landing_page/home/NavBar.jsx";
import Footer from "../landing_page/home/Footer.jsx";
import About from "../landing_page/home/About.jsx";


function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // page reload stop 
    setIsLoggedIn(true);
    navigate("/pyqs"); // login ke baad redirect
  };

  return (
    <div className="container">
    <NavBar/>
    <form className="row g-3 needs-validation" Validate onSubmit={handleSubmit} style={{marginTop:"120px"}}>
      
      <div className="col-md-4">
        <label htmlFor="fname" className="form-label">First name</label>
        <input type="text" className="form-control" id="fname" required />
      </div>

      <div className="col-md-4">
        <label htmlFor="lname" className="form-label">Last name</label>
        <input type="text" className="form-control" id="lname" required />
      </div>

      <div className="col-md-4">
        <label htmlFor="username" className="form-label">Username</label>
        <div className="input-group">
          <span className="input-group-text">@</span>
          <input type="text" className="form-control" id="username" required />
        </div>
      </div>




      <div className="col-12">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="terms" required />
          <label className="form-check-label" htmlFor="terms">
            Agree to terms and conditions
          </label>
        </div>
      </div>

      <div className="col-12">
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </div>

    </form>

    <Footer/>
   <About/>
    </div>
  );
}

export default Login;
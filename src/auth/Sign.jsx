import { useNavigate } from "react-router-dom";
import NavBar from "../landing_page/home/NavBar.jsx";
import Footer from "../landing_page/home/Footer.jsx";
import About from "../landing_page/home/About.jsx";

function Sign() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="container">
      <NavBar /> 

    <h2 className="text-center fs-5" style={{ marginTop: "130px" }}> Start Your Journey with Backbencher 🚀</h2>

      <form
        className="row g-3 needs-validation"
        noValidate
        onSubmit={handleSubmit}
        style={{ marginTop: "120px" }}
      >
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

        <div className="col-md-6">
          <label htmlFor="city" className="form-label">College Name</label>
          <input type="text" className="form-control" id="city" required />
        </div>

        <div className="col-md-3">
          <label className="form-label">Select your role</label>
          <select className="form-select" required>
            <option value="">Choose...</option>
            <option>Teacher</option>
            <option>Student</option>
          </select>
        </div>

        <div className="col-md-3">
          <label htmlFor="zip" className="form-label">Clg Id Number</label>
          <input type="text" className="form-control" id="zip" required />
        </div>

        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" required />
            <label className="form-check-label">
              Agree to terms and conditions
            </label>
          </div>
        </div>

        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Sign Up
          </button>
        </div>
      </form>

      <Footer />
      <About />
    </div>
  );
}

export default Sign;
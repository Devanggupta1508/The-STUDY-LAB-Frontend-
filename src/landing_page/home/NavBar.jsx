import Logo from "../../assets/Logo.png";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top ">

      <div className="container">

        {/* LOGO */}
        <a className="navbar-brand" href="#">
          <img 
            src={Logo} 
            alt="Logo" 
            width="60" 
            className="ms-2"
          />
        </a> 

        <h3 className="text-primary-emphasis fs-bold fw-bolder"> <a href="/" className="text-decoration-none"> The Study Lab </a></h3>

        {/* TOGGLE BUTTON (Mobile) */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAV LINKS */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a className="nav-link active" href="/">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/notes">Notes</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/pyqs">PYQs</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/project">Projects</a> 
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/Internship">Interships</a>
            </li>

            {/* CTA BUTTON */}
            <li className="nav-item ms-3">
              <a className="btn btn-primary" href="/sign">
                 Signup now
              </a>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
}

export default NavBar;
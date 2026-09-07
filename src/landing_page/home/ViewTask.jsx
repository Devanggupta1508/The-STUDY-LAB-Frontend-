 import NavBar from '../home/NavBar'; 
import Footer from '../home/Footer';
import About from '../home/About';

function ViewTask() {
  return ( 

    <div> 
         <NavBar></NavBar>
         
    
    <section className="container my-5">
            
      <div className="text-center mb-5">
        <h2 className="fw-bold">Internship Tasks 🚀</h2>
        <p className="text-muted">
          Complete the tasks one by one, upload your work and earn your
          internship completion certificate.
        </p>
      </div>

      <div className="row g-4">

        {/* Task 1 */}
        <div className="col-lg-4 col-md-6">
          <div className="card shadow h-100">
            <div className="card-body">

              <span className="badge bg-success mb-3">
                Easy
              </span>

              <h4 className="fw-bold">
                HTML Portfolio
              </h4>

              <p className="text-muted">
                Create a responsive portfolio website using HTML only.
              </p>

              <hr />

              <p><strong>Deadline:</strong> 5 Days</p>
              <p><strong>Status:</strong> Pending</p>

              <button className="btn btn-primary w-100">
                View Task
              </button>

            </div>
          </div>
        </div>

        {/* Task 2 */}
        <div className="col-lg-4 col-md-6">
          <div className="card shadow h-100">
            <div className="card-body">

              <span className="badge bg-warning text-dark mb-3">
                Medium
              </span>

              <h4 className="fw-bold">
                Java Calculator
              </h4>

              <p className="text-muted">
                Build a calculator using Java and object-oriented programming.
              </p>

              <hr />

              <p><strong>Deadline:</strong> 7 Days</p>
              <p><strong>Status:</strong> Pending</p>

              <button className="btn btn-primary w-100">
                View Task
              </button>

            </div>
          </div>
        </div>

        {/* Task 3 */}
        <div className="col-lg-4 col-md-6">
          <div className="card shadow h-100">
            <div className="card-body">

              <span className="badge bg-danger mb-3">
                Hard
              </span>

              <h4 className="fw-bold">
                React Landing Page
              </h4>

              <p className="text-muted">
                Create a modern landing page using React and Bootstrap.
              </p>

              <hr />

              <p><strong>Deadline:</strong> 10 Days</p>
              <p><strong>Status:</strong> Pending</p>

              <button className="btn btn-primary w-100">
                View Task
              </button>

            </div>
          </div>
        </div>

      </div>

      <Footer></Footer>
      <About></About>

    </section>

    </div>
  );
}

export default ViewTask;
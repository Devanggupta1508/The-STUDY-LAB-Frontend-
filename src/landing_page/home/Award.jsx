import Award from "../../assets/Award.png"; 

function Awards() {
  return (
    <div className="container py-5">

      <div className="row align-items-center">

        {/* LEFT IMAGE */}
        <div className="col-md-6 text-center">
          <img
            src={Award}
            alt="Award"
            className="img-fluid"
            style={{ maxHeight: "450px" }}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-md-6">

          <h2 className="fw-bold mb-3 fs-2" >
            Built for Students. Trusted by Learners 🎓
          </h2>

          <p className="text-muted mb-4 fs-4" >
            Helping BCA & MCA students with notes, PYQs, coding skills,
            and real-world projects — all in one platform.
          </p>

          {/* FEATURES */}
          <div className="row">

            <div className="col-6">
              <ul className="list-unstyled fs-5" >
                <li className="mb-2">📚 BCA / MCA Notes</li>
                <li className="mb-2">📄 Previous Year Questions</li>
                <li className="mb-2">💻 Coding Practice</li>
              </ul>
            </div>

            <div className="col-6">
              <ul className="list-unstyled fs-5">
                <li className="mb-2">🚀 Real-world Projects</li>
                <li className="mb-2">🎯 Career Guidance</li>
                <li className="mb-2">🔥 Interview Prep</li>
              </ul>
            </div>

          </div>

          {/* BUTTON */}
          <button className="btn btn-dark mt-4 px-4 py-2">
            Explore Now 🚀
          </button>

        </div>
      </div>

    </div>
  );
}

export default Awards;
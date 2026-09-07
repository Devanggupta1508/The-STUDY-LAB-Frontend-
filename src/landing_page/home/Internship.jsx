import NavBar from '../home/NavBar'; 
import Footer from '../home/Footer';
import About from '../home/About';
import OpenAccount from '../home/OpenAccount' ;
import certificate from "./The Study LAB Sample Certificate.pdf";


function Internship() {
  return (
   
    <div className="container py-5">
            <NavBar></NavBar>
            
      {/* Hero */}
      <div className="text-center mb-5 mt-5">
        <h1 className="fw-bold">Internship Program 🚀</h1>
        <p className="lead text-muted">
        Learn. Revise. Teach. Get Certified. <br></br>

Complete practical learning tasks, explain concepts in your own words, submit your work, and earn your The Study Lab Internship Completion Certificate.
        </p>

    <button
  className="btn btn-primary me-3"
  onClick={() =>
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSe3qPbdxYktsMVDtk3ShQ4x_Ghv0F4Zw8gM8hr2WydXTC-wPQ/viewform?usp=publish-editor",
      "_blank"
    )
  }
>
  Apply Now
</button>

        <button className="btn btn-light btn-outline-info disabled">
          {/* <a href="/ViewTask" style={{ textDecoration: "none" }}> View Tasks</a> */}
               View Tasks (Comming Soon) ...
        </button> 
        &nbsp; &nbsp;
         
          <button
  className="btn btn-outline-success"
  onClick={() => window.open(certificate, "_blank")}
>
  🎓 View Internship Certificate
</button> 
                   &nbsp; &nbsp;
                    <button className="btn btn-outline-info  disabled">
                          🏆 Verify Internship Certificate </button>


      </div>
          
      {/* About */}
      <div className="row text-center mb-5">

        <div className="col-md-4">
          <div className="card p-4 h-100 shadow-sm">
            <h4>💻 Practical Tasks</h4>
            <p>
              Complete simple coding, web development,
              Java, Python and study related tasks.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-4 h-100 shadow-sm">
            <h4>📤 Upload Work</h4>
            <p>
              Upload your completed task directly on
              Backbencher Coder for review.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-4 h-100 shadow-sm">
            <h4>🏆 Certificate</h4>
            <p>
              Receive a Study Lab  Internship
              Completion Certificate after approval.
            </p>
          </div>
        </div>

      </div>

      {/* Process */}

      <h2 className="text-center fw-bold mb-4">
        Internship Process
      </h2>

      <div className="row">
<div className="row mt-5">

  <div className="col-md-3 text-center">
    <h1>1️⃣</h1>
    <h5>Learn</h5>
    <p>
      Study the assigned topic using our notes, videos, or your own resources.
    </p>
  </div>

  <div className="col-md-3 text-center">
    <h1>2️⃣</h1>
    <h5>Revise</h5>
    <p>
      Understand every concept before moving ahead.
    </p>
  </div>

  <div className="col-md-3 text-center">
    <h1>3️⃣</h1>
    <h5>Teach</h5>
    <p>
      Record yourself explaining the topic in simple words. <br></br>No professional setup required.

Your mobile phone is enough.
    </p>
  </div>

  <div className="col-md-3 text-center">
    <h1>4️⃣</h1>
    <h5>Submit</h5>
    <p>
      Upload your explanation video through the internship dashboard. 
    </p>
  </div>

  <div className="col-md-3 text-center ms-1">
    <h1>5️⃣</h1>
    <h5>Get Reviewed</h5>
    <p>
       Our team reviews your submission based on
           <li>Clarity</li> 
           <li> Understanding</li>
            <li>Communication</li>
              <li>Accuracy</li>
    </p>
  </div> 


    <div className="col-md-3 text-center ">
    <h1>6️⃣</h1>
    <h5>Earn Your Certificate</h5>
    <p>
       Receive your Internship Completion Certificate after successful completion.
    </p>
  </div>

</div>

      </div>

      {/* Benefits */}

      <div className="mt-5">

        <h2 className="text-center fw-bold mb-4">
          Internship Benefits
        </h2>

        <div className="row">

          <div className="col-md-6">
            <ul className="list-group">
              <li className="list-group-item">✅ Hands-on Practice</li>
              <li className="list-group-item">✅ Real Projects</li>
              <li className="list-group-item">✅ Portfolio Building</li>
              <li className="list-group-item">✅ Resume Experience</li>
             <li className="list-group-item">✅ Build Public Speaking Confidence</li>
                          <li className="list-group-item">✅Learn by Teaching Others </li>

            
            </ul>
          </div>

          <div className="col-md-6">
            <ul className="list-group">
              <li className="list-group-item">✅ Coding Skills</li>
              <li className="list-group-item">✅ Career Guidance</li>
              <li className="list-group-item">✅ Certificate of Completion</li>
              <li className="list-group-item">✅ Community Support</li>
                           <li className="list-group-item">✅Practical Learning Experience </li>
             <li className="list-group-item">✅ Strengthen Concept Revision</li>

            </ul>
          </div>

        </div>

      </div>

      {/* Guidelines */}

      <div className="container my-5">

  <div className="text-center mb-5">
    <h2 className="fw-bold">Submission Guidelines</h2>
    <p className="text-muted">
      Please follow these guidelines before submitting your internship task.
    </p>
  </div>

  <div className="row g-4">

    <div className="col-md-6">
      <div className="card shadow-sm h-100">
        <div className="card-body">
          <h4>🎥 Record Your Video</h4>
          <p className="text-muted mb-0">
            Record your explanation in <strong>landscape</strong> or
            <strong> portrait</strong> mode with clear audio.
          </p>
        </div>
      </div>
    </div>

    <div className="col-md-6">
      <div className="card shadow-sm h-100">
        <div className="card-body">
          <h4>🗣 Explain Clearly</h4>
          <p className="text-muted mb-0">
            Explain the topic in your own words using
            <strong> Hindi</strong>, <strong>English</strong>, or both.
          </p>
        </div>
      </div>
    </div>

    <div className="col-md-6">
      <div className="card shadow-sm h-100">
        <div className="card-body">
          <h4>⏱ Video Duration</h4>
          <p className="text-muted mb-0">
            Keep your video between
            <strong> 5–15 minutes</strong> for better evaluation.
          </p>
        </div>
      </div>
    </div>

    <div className="col-md-6">
      <div className="card shadow-sm h-100 border-danger">
        <div className="card-body">
          <h4>🚫 Original Work Only</h4>
          <p className="text-muted mb-0">
            AI voice recordings, copied videos, and plagiarized projects
            will not be accepted.
          </p>
        </div>
      </div>
    </div>

  </div>

</div>

 {/* Gain point  */}

 <section className="container my-5">

  <div className="text-center mb-5">
    <h2 className="fw-bold">What You'll Gain 🚀</h2>

    <p className="text-muted fs-5">
      This internship is designed to help you gain real-world experience,
      improve your confidence, and showcase your skills.
    </p>
  </div>

  <div className="row g-4">

    <div className="col-md-4">
      <div className="card shadow-sm h-100">
        <div className="card-body text-center">
          <h1>🎤</h1>
          <h4 className="fw-bold">Communication Skills</h4>
          <p className="text-muted">
            Learn to explain technical concepts clearly through recorded video
            presentations.
          </p>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card shadow-sm h-100">
        <div className="card-body text-center">
          <h1>💻</h1>
          <h4 className="fw-bold">Practical Experience</h4>
          <p className="text-muted">
            Complete real coding tasks and projects to strengthen your
            programming skills.
          </p>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card shadow-sm h-100">
        <div className="card-body text-center">
          <h1>📂</h1>
          <h4 className="fw-bold">Portfolio Building</h4>
          <p className="text-muted">
            Build a portfolio with projects and submissions that showcase your
            abilities.
          </p>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card shadow-sm h-100">
        <div className="card-body text-center">
          <h1>🧠</h1>
          <h4 className="fw-bold">Problem Solving</h4>
          <p className="text-muted">
            Improve logical thinking and problem-solving by completing practical
            assignments.
          </p>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card shadow-sm h-100">
        <div className="card-body text-center">
          <h1>🏆</h1>
          <h4 className="fw-bold">Completion Certificate</h4>
          <p className="text-muted">
            Receive a Backbencher Coder Internship Completion Certificate after
            successfully completing the internship requirements.
          </p>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card shadow-sm h-100">
        <div className="card-body text-center">
          <h1>🚀</h1>
          <h4 className="fw-bold">Career Ready</h4>
          <p className="text-muted">
            Develop confidence, practical experience, and skills that help you
            prepare for internships and future career opportunities.
          </p>
        </div>
      </div>
    </div>

  </div>

</section>

      {/* CTA */}

      <div className="text-center mt-5">

        <h2>Ready to Start?</h2>

        <p>
          Join the Backbencher Coder Internship Program
          and improve your practical skills.
        </p>

        <button className="btn btn-success btn-lg"  onClick={() =>
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSe3qPbdxYktsMVDtk3ShQ4x_Ghv0F4Zw8gM8hr2WydXTC-wPQ/viewform?usp=publish-editor",
      "_blank"
    )
  }>
          Apply for Internship
        </button>

      </div>

      <Footer></Footer>
      <About></About>

    </div>
  );
}

export default Internship;
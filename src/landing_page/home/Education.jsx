
import eduImg from "../../assets/Education.png";

function Education() {
    return (
         <div className="container mt-5">

            <div className="row"> 

                <div className="col">
                     

                      <img
                                 src={eduImg}
                                 alt="EducationImg"
                                 className="img-fluid"
                                 style={{ maxHeight: "450px" }}
                               />
                </div>
            
            <div className="col ">
                 <h3>Smart Learning System</h3>
                 <p>Structured notes, simple explanations, and beginner-friendly content
                  designed specially for BCA, MCA and all students.</p> 

                  <a href="/notes" className=" text-decoration-none fw-bold">Explore Notes →</a> 
                  

                  <div className="row mt-2">
                    <h3>Practice & Revision Hub</h3>
                    <p>Practice coding, solve PYQs, revise concepts, and build real understanding
                   so you don’t forget what you learn.</p>

                   <a href="/pyqs" className=" text-decoration-none fw-bold">Start Practice →</a>  

                  </div> 

                  <div className="row mt-2" >
                    <h3>Build & Grow</h3>
                    <p>Work on real-world projects, improve skills, and grow step by step
                   from beginner to confident developer.</p>

                   <a href="#" className=" text-decoration-none fw-bold">View Projects →</a>  

                  </div>
            </div>













            </div>
         </div>
    );
}

export default Education;
import Devang from "../../assets/Devang.jpeg";

function AboutPeople(){
    return (
        <div className="container ">
           <h1 className ="text-center">People</h1>

            <div className="row">
                  
                   <div className="col d-flex justify-content-center "  style={{ width: "50%", height: "50%"}}> 
                      <img src={Devang} alt="profile" className="rounded-circle mt-5"
               style={{ width: "16rem", height: "16rem" ,margin:"0 auto" }}/>      

                           
                   </div>
                   <h4 className="text-center">Devang Gupta</h4>
                   <br></br> 
                   <p className="text-center">Founder , CEO</p> 

                   <div className="col">
                     <p className="fs-5 m-4 " >
              Devang is the Founder & CEO of **The Study Lab**, an online learning platform powered by **Backbencher Coder**.

His mission is to make quality technical education simple, practical, and accessible for every learner.
          </p>

          <p className="fs-4 m-4">
            Through project-based learning, coding challenges, study materials, and interactive resources, he aims to help students develop real-world skills with confidence.

            Driven by a passion for web development and continuous learning, Devang is committed to building a platform that empowers beginners to become skilled, career-ready developers.
          </p>
            <p className="fst-italic text-center">"Building from backbench to breakthrough 🚀"</p> 

              <div className="mt-3  d-flex justify-content-center">
            <a href="https://portfolio-devanggupta1508s-projects.vercel.app/" className="me-3 text-decoration-none" target ="blank">🌐 Portfolio</a>
            <a href="#" className="me-3 text-decoration-none">💬 Community</a>
            <a href="#" className="text-decoration-none">🐦 Twitter</a>
          </div> 
                   </div>

            </div>
        </div> 
     


        
    )
}
export default AboutPeople;
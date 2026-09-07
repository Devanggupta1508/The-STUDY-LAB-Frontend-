import heroImg from "../../assets/HeroSection.png"; 
function HeroSection() {
    return (
         <div className="container p-5"> 
             <div className='row text-center'>
              <img src={heroImg} alt="img" class="mb-5" style={{height:"40%"}}/>
              <h3 class="mt-5 fs-1">“Backbencher Today. Achiever Tomorrow. 🚀”</h3>
              <p class="fs-4">Notes, PYQs, coding skills & real-world projects — everything a BCA/MCA student needs to grow.</p> 
          <button className="btn btn-primary mt-2 fs-5 d-block mx-auto px-4" style={{ width: "20%", minWidth: "150px" }}>
  Signup now
</button>
              </div>
         </div>

    
        
    );
}

export default HeroSection;
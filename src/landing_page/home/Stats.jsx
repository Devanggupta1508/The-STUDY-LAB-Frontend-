import Statsimg from "../../assets/Stats.png"; 

function Stats() {
    return (
        <div class="container mt-5 mb-3">

            
    <button type="button" class="btn btn-primary" disabled><i class="fa-regular fa-star"></i>OUR PROMISE</button>
       
<h1 className="fw-bold mt-4">

  Everything a Student Needs,<br />
  <span className="text-primary">All in One Place 🚀</span>
</h1>       

<div className="row mt-5" >
    <div className ="col-5">
        <h3><i class="fa-solid fa-user-graduate text-primary"></i> &nbsp; Student First , Always</h3>
        <p className="fs-9">We focus on what students truly need. Our platform is build to help  BCA , MCA and all students succeed academically and professionally.</p>
        <hr></hr>

        <h3><i class="fa-solid fa-virus-slash text-success"></i>&nbsp; No Spam. Just Value </h3>
        <p className="fs-9"> No gimmicks, no spam, no distractions. Only high-quality notes, PYQs and resources that actually help you learn and grow.</p>
        <hr></hr>

        <h3><i class="fa-solid fa-book-open text-warning"></i> &nbsp; All-in-One Learning Hub</h3>
      <p className="fs-9">Notes, PYQs, coding practice, projects, and career guidance — everything in one place so you can focus on what matters.</p>
<hr></hr>
      <h3><i class="fa-solid fa-chart-line text-danger-emphasis"></i> &nbsp; Better Every Day</h3>
<p className="fs-9">We keep improving based on student feedback so you get the best learning experience and achieve your goals faster.</p>
<br></br>
   <a href="#" className="fs-6 fw-bold text-decoration-none"  >Explore all resources →</a> &ensp;&ensp;
      <a href="#" className="fs-6 fw-bold text-decoration-none">Start learning now →</a>

    </div> 
    <div className="col-1"></div>

    <div className="col-6">
<img src={Statsimg} alt="stats" className="img-fluid mx-auto d-block" style={{ maxHeight: "500px",width:"90%" ,height:"100%"}}
/>    </div>
      
</div>















 </div> 









    );
}

export default Stats;
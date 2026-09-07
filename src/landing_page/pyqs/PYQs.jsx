import ADBD from "./ADBD Sample paper.pdf";

function PYQs(){
     const handleClick = (e) => {
        e.preventDefault();
        alert("Sample paper will be available before your exam. Stay tuned!");
    };

    return( 

     
            <div className="container" style={{ marginTop: "150px" }}>
                
            <h1 className="text-center">Backbencher’s PYQ Zone</h1> <br></br>
                          <h4 className="text-center">MCA PYQ Vault 🔥</h4> <br></br> 
                          <h3 className="text-center"> Semester 1</h3>
                    <div className="d-flex flex-wrap justify-content-center mt-5 notes">
                           
                        <a href="#" className=" border p-3 text-decoration-none fs-5 m-2 " style={{borderRadius:"100px"}} onClick={handleClick}
                        >Object Oriented Programing Using Java (20MCA21C1)</a>

                        <a href="#" className="border p-3 text-decoration-none fs-5 m-2" style={{borderRadius:"100px"}}
                        onClick={handleClick} > Compiler Design (20MCA21C2)</a>

                        
                        <a href="#" className="border p-3 text-decoration-none fs-5 m-2" style={{borderRadius:"100px"}}
                        onClick={handleClick} > Computer Graphics & Multimedia (20MCA21C3)</a>

                        <a href="#" className="border p-3 text-decoration-none fs-5 m-2" style={{borderRadius:"100px"}}
                        onClick={handleClick}>Digital Design & Computer Architecture (20MCA21C4) </a> 

                        <a href="#" className="border p-3 text-decoration-none fs-5 m-2" style={{borderRadius:"100px"}} 
                        onClick={handleClick} > Advanced Data Structures (20MCA21C5) </a>  </div> 

                         
                                       <h3 className="text-center m-2"> Semester 2</h3>
                          <div className="d-flex flex-wrap justify-content-center mt-5 notes">
                           
                            <a href="#" className="border p-3 text-decoration-none fs-5 m-2" style={{borderRadius:"100px"}}onClick={handleClick}>Advanced Object Teachnology (20MCA22C1)</a>

                  <a href={ADBD} target="_blank" rel="noopener noreferrer"  className="border p-3 text-decoration-none fs-5 m-2"  style={{ borderRadius: "100px" }}>Advanced Database Warehouse (20MCA22C2) </a>
   
                        
                        <a href="#" className="border p-3 text-decoration-none fs-5 m-2" style={{borderRadius:"100px"}} 
                        onClick={handleClick}>Operating System & Shell Programming (20MCA22C3) </a> 

                         <a href="#" className="border p-3 text-decoration-none fs-5 m-2" style={{borderRadius:"100px"}} onClick={handleClick}>
                            
                            Web Technology(20MCA22DA3)  </a> 

                         <a href="#" className="border p-3 text-decoration-none fs-5 m-2" style={{borderRadius:"100px"}}  onClick={handleClick}> Cloud Computing(20MCA22DB1) </a> </div>  

                                    <h3 className="text-center m-2"> Semester 3</h3> 
                                    { <p className="text-center"> Semester PYQs Coming Soon...</p>/*
                  <div className="d-flex flex-wrap justify-content-center mt-5 notes">
                                                          
                              <a href="#" className="border p-3 text-decoration-none fs-5 m-2" style={{borderRadius:"100px"}} onClick={handleClick}> Frontend </a> 

                               <a href="#" className="border p-3 text-decoration-none fs-5 m-2" style={{borderRadius:"100px"}} onClick={handleClick}> Backend</a>

                               
                               <a href="#" className="border p-3 text-decoration-none fs-5 m-2" style={{borderRadius:"100px"}} onClick={handleClick}> Node.js</a>

                                
                               <a href="#" className="border p-3 text-decoration-none fs-5 m-2" style={{borderRadius:"100px"}} onClick={handleClick}> Express.js</a>

                                    
                               <a href="#" className="border p-3 text-decoration-none fs-5 m-2" style={{borderRadius:"100px"}} onClick={handleClick}> Mongo DB</a>

                                    
                               <a href="#" className="border p-3 text-decoration-none fs-5 m-2" style={{borderRadius:"100px"}} onClick={handleClick}> Struture Query Language </a> </div>   */}
                                         <h3 className="text-center m-2"> Semester 4</h3>
                                         <p className="text-center"> Semester PYQs Coming Soon...</p>
    {/* <div className="d-flex flex-wrap justify-content-center mt-5 notes">
                           
                                         
                               <a href="#" className="border p-3 text-decoration-none fs-5 m-2" style={{borderRadius:"100px"}} onClick={handleClick}> Artificial Intelligence (AI)</a>

                                         
                               <a href="#" className="border p-3 text-decoration-none fs-5 m-2" style={{borderRadius:"100px"}} onClick={handleClick}>  Cloud Computing</a>
                              
                                            
                               <a href="#" className="border p-3 text-decoration-none fs-5 m-2" style={{borderRadius:"100px"}} onClick={handleClick}>   Management Information System (MIS)</a>

                             

                              
                                
                               </div> */}
        </div>
    )
}
export default PYQs;
import "./Notes.css";

function Notes(){
     const handleClick = (e) => {
        e.preventDefault();
        alert("Site is under Construction");
    };

    return( 

     
            <div className="container" style={{ marginTop: "150px" }}>
                
            <h1 className="text-center">Explore our content</h1>
        
                    <div className="d-flex flex-wrap justify-content-center mt-5 notes">
                  
                        <a href="#" className=" border p-3 text-decoration-none fs-5 m-2 " style={{borderRadius:"100px"}} onClick={handleClick}
                        >Web Development</a>

                        <a href="#" className="border p-3 text-decoration-none fs-5 m-2" style={{borderRadius:"100px"}}
                        onClick={handleClick} >Data Structure Algorithm</a>

                        
                        <a href="#" className="border p-3 text-decoration-none fs-5 m-2" style={{borderRadius:"100px"}}
                        onClick={handleClick} >Operating System</a>

                        <a href="#" className="border p-3 text-decoration-none fs-5 m-2" style={{borderRadius:"100px"}}
                        onClick={handleClick}>DBMS</a> 

                        <a href="#" className="border p-3 text-decoration-none fs-5 m-2" style={{borderRadius:"100px"}} 
                        onClick={handleClick} >Computer Networking</a>  </div> 

                          <div className="d-flex flex-wrap justify-content-center mt-5 notes">
                           
                            <a href="#" className="border p-3 text-decoration-none fs-5 m-2" style={{borderRadius:"100px"}}onClick={handleClick}>Compiler Design</a>

                        <a href="#" className="border p-3 text-decoration-none fs-5 m-2" style={{borderRadius:"100px"}}
                        onClick={handleClick}>Computer Graphics </a> 

                        
                        <a href="#" className="border p-3 text-decoration-none fs-5 m-2" style={{borderRadius:"100px"}} 
                        onClick={handleClick}>Adavance Data Warehouse </a> 

                         <a href="#" className="border p-3 text-decoration-none fs-5 m-2" style={{borderRadius:"100px"}} onClick={handleClick}>
                            
                            Java Script  </a> 

                         <a href="#" className="border p-3 text-decoration-none fs-5 m-2" style={{borderRadius:"100px"}}  onClick={handleClick}>XML </a> 
</div> 
                  <div className="d-flex flex-wrap justify-content-center mt-5 notes">
                       
                              <a href="#" className="border p-3 text-decoration-none fs-5 m-2" style={{borderRadius:"100px"}} onClick={handleClick}> Frontend </a> 

                               <a href="#" className="border p-3 text-decoration-none fs-5 m-2" style={{borderRadius:"100px"}} onClick={handleClick}> Backend</a>

                               
                               <a href="#" className="border p-3 text-decoration-none fs-5 m-2" style={{borderRadius:"100px"}} onClick={handleClick}> Node.js</a>

                                
                               <a href="#" className="border p-3 text-decoration-none fs-5 m-2" style={{borderRadius:"100px"}} onClick={handleClick}> Express.js</a>

                                    
                               <a href="#" className="border p-3 text-decoration-none fs-5 m-2" style={{borderRadius:"100px"}} onClick={handleClick}> Mongo DB</a>

                                    
                               <a href="#" className="border p-3 text-decoration-none fs-5 m-2" style={{borderRadius:"100px"}} onClick={handleClick}> Struture Query Language </a> </div> 
    <div className="d-flex flex-wrap justify-content-center mt-5 notes">
                           
                                         
                               <a href="#" className="border p-3 text-decoration-none fs-5 m-2" style={{borderRadius:"100px"}} onClick={handleClick}> Artificial Intelligence (AI)</a>

                                         
                               <a href="#" className="border p-3 text-decoration-none fs-5 m-2" style={{borderRadius:"100px"}} onClick={handleClick}>  Cloud Computing</a>
                              
                                            
                               <a href="#" className="border p-3 text-decoration-none fs-5 m-2" style={{borderRadius:"100px"}} onClick={handleClick}>   Management Information System (MIS)</a>

                             

                              
                                
                               </div>
        </div>
    )
}
export default Notes;
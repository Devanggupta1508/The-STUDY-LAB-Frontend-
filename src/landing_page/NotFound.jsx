import NavBar from './home/NavBar'; 
import Footer from './home/Footer';
import About from './home/About';

function NotFound() {
    return (
        <div className="container">
             <NavBar/>
             <div className="container mb-5" style={{marginTop:"125px"}}>
<h1>404 </h1>
<p className="fs-3">Sorry, the page you are looking for doesn't exist.</p>
 <p className="fs-4">Visit  <a href="/" className="text-decoration-none">BackBencher Coder's home page </a></p>
 </div>
        <Footer/>
        <About/>
            </div>
    
    )
}

    

export default NotFound ;
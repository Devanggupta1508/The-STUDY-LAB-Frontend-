import NavBar from '../home/NavBar'; 
import Footer from '../home/Footer';
import About from '../home/About';
import PYQs from './PYQs';

function PYQPage() {
    return (
        <div>
        <NavBar/> 
         <PYQs/>
        <Footer/>
        <About/>
        </div>
    )
} 

export default PYQPage ;
import NavBar from '../home/NavBar'; 
import Footer from '../home/Footer';
import About from '../home/About';
import Notes from './Notes';

function NotesPage() {
    return (
        <div>
        <NavBar/> 
         <Notes/>
        <Footer/>
        <About/>
        </div>
    )
} 

export default NotesPage ;
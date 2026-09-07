import NavBar from '../home/NavBar'; 
import OpenAccount from '../home/OpenAccount'
import Footer from '../home/Footer'
import AboutStory from "./AboutStory"; 
import AboutPeople from "./AboutPeople"; 
import FooterAbout from "../home/About"

function AboutPage() {
    return (
        <>
        <NavBar/>
         <AboutStory/>
         <AboutPeople/>
         <OpenAccount/>
         <Footer/>
         <FooterAbout/>
        </>
    )
}


export default AboutPage;
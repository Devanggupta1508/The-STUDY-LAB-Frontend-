import NavBar from "./NavBar.jsx";
import Award from "./Award.jsx";
import Education from "./Education.jsx";
import OpenAccount from "./OpenAccount.jsx";
import Pricing from "./Pricing.jsx";
import Stats from "./Stats.jsx";
import Footer from "./Footer.jsx";
import About from "./About.jsx";
import HeroSection from "./HeroSection.jsx";

function HomePage() {
    return (
        <> 
        <NavBar/>
        <HeroSection/>
        <Award/>
        <Stats/>
        <Pricing/>
        <Education/>
         <OpenAccount/>
          

           <Footer/>
           <About/>
           
        </>
    );
}

export default HomePage;
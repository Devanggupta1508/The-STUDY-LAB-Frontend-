import Award from "../../assets/BharatDarshan.png"; 
import Spotify from "../../assets/Spotify.png"; 
import Weather from "../../assets/WeatherApp.png"; 

function Project(){
    return( 
        <div> 
        <h1 className="text-center" style={{marginTop:"150px"}} >Project Showcase 🚀</h1>
        <h3 className="m-3">Project 1 (Bharat Darshan)</h3>
               <div className="row">
                <div className="col">
             <img src={Award} alt="Project Name" className="img-fluid m-2" style={{ maxHeight: "450px" }} 
                       /> </div>
              
        
        <div className="col">
            <p className="fs-5 m-2">Bharat Darshan is a full-stack travel and tourism web application built using Node.js, Express.js, and MongoDB. It allows users to explore famous destinations across India along with detailed cultural and historical information.<br></br>
<br></br>
The application includes an interactive map feature that helps users visualize locations easily. Users can view images of destinations, read and write reviews, and give ratings based on their experiences, making the platform more engaging and community-driven. <br></br>
  <br></br>
This project demonstrates practical implementation of full-stack development concepts, including RESTful APIs, database management, and dynamic content rendering..</p>  
          &nbsp; 
         <a href ="https://github.com/Devanggupta1508/Bharat_Darshan" className="text-decoration-none fs-5" target="blank"> Check the Code on GitHub </a> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; 
         <a href="https://bharat-darshan-7w6e.onrender.com/listings "  className="text-decoration-none fs-5" target="blank" >View Project</a>
        </div> </div> 
       

       <div className="row mt-4">

  <div className="col">
      <br></br>
    <p className="m-2 fs-5">This is a frontend Spotify clone built using HTML and CSS. It replicates the basic user interface of the Spotify music platform, including layout design, navigation, and visual styling. The project focuses on creating a responsive and visually appealing music player interface using modern CSS techniques.</p> 

    <a href ="https://github.com/Devanggupta1508/Spotify-UI-Clone" className="text-decoration-none fs-5 m-2" target="blank"> Check the Code on GitHub </a> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; 
         <a href="https://devanggupta1508.github.io/Spotify-UI-Clone/"  className="text-decoration-none fs-5" target="blank" >View Project</a>
  </div>
    <div className="col">
   <h3 className="m-3">Project 2 (Spotify clone)</h3>
     <img src={Spotify} alt="Project Name" className="img-fluid " style={{ maxHeight: "400px" }} ></img>
 </div>  </div>
   
      <div className="row">
        <div className="col">
             <h3 className="m-3">Project 3 (React Weather App)</h3>
              <img src={Weather} alt="Project Name" className="img-fluid m-2 " style={{ maxHeight: "400px" ,width:"100%" }} ></img>
             </div>

             <div className="col">
                <p className="m-5 fs-5"> 
                    <br></br> <br></br>React Weather App is a dynamic web application built using React.js that provides real-time weather updates for different locations. It fetches live weather data from an external API and displays key information such as temperature, humidity, weather conditions, and wind speed.

The application features a clean and responsive user interface, allowing users to search for any city and instantly view current weather details. It demonstrates the use of React concepts like components, state management, and API integration to create an interactive and user-friendly experience.</p> 
<a href ="https://github.com/Devanggupta1508/Weather_App" className="text-decoration-none fs-5 m-2" target="blank"> Check the Code on GitHub </a> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; 
         <a href="https://weather-app-bay-nine-38.vercel.app/"  className="text-decoration-none fs-5" target="blank" >View Project</a>
             </div>

      </div>   

      <h3 className="text-center m-5">More Innovative Projects Are On The Way......</h3>
        
        </div> 
    )
}

export default Project ;
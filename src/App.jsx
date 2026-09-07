import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from './landing_page/home/HomePage'; 
import AboutPage from './landing_page/about/AboutPage';
import NotesPage from './landing_page/notes/NotesPage';
import NotFound from "./landing_page/NotFound";
import PYQPage from "./landing_page/pyqs/PYQPage";
import ProjectPage from "./landing_page/projects/ProjectPage"
import Login from "./auth/Login.jsx";
import Sign from "./auth/Sign.jsx";
import Internship from './landing_page/home/Internship'; 
import ViewTask from './landing_page/home/ViewTask';

import { useState } from "react";
function App() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   return (
     <BrowserRouter>
  
  <Routes> 
   
    <Route path="/" element={<HomePage/>}></Route>
     <Route path="/Internship" element={<Internship/>}></Route>
     <Route path = "/ViewTask" element = {<ViewTask/>}></Route>
    <Route path="/about" element={<AboutPage/>}></Route>
   
<Route 
  path="/notes" 
  element={isLoggedIn ? <NotesPage/> : <Navigate to="/login" />} />

<Route 
  path="/pyqs" 
  element={isLoggedIn ? <PYQPage/> : <Login setIsLoggedIn={setIsLoggedIn} />}  />

      <Route path = "/project" element = {<ProjectPage/>}></Route>

      <Route path = "/Sign" element = {<Sign/>}></Route>


      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />}  
/>










     <Route path ="*" element = {<NotFound/>}></Route>
  </Routes>
  
  </BrowserRouter>
)
   
}

export default App

import React from 'react'
import {BrowserRouter as Router , Link } from 'react-router-dom'


export default function FooterLeft() {
  return (
    <div className="footer-left">
    <Router>
        <div className="footer-hotel">
           <h3>Hotel</h3>
           <Link style={{textDecoration: "none"}} to="/pais">
                <p>Mal pais</p>
           </Link>
           <Link style={{textDecoration: "none"}} to="/pais">
                <p>Las Catalinas</p>
           </Link>
       </div>
       <div className="footer-hotel">
           <h3>VILLAS</h3>
           <Link style={{textDecoration: "none"}} to="/villas">
                <p>Brazza Villa</p>
           </Link>
           <Link style={{textDecoration: "none"}} to="/villas">
                <p>La Belle Villa</p>
           </Link>
       </div>
       <div className="footer-hotel">
           <h3>Restaurant</h3>
           <Link style={{textDecoration: "none"}} to="/Tokosssss">
                <p>Tokosssss Resto</p>
           </Link>
       </div>
   </Router>       
 </div>
  )
}

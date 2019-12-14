import React from 'react'
import {Link} from 'react-router-dom'


export default function AboutHeader() {
  return (
    <div className="About_container">
      <div className="About-img">
          <img src="https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="AboutImage"/>
      </div>
      <div className="Content-About">
          <div>
            <h3>OUR HOTEL</h3> 
                 <h4>Like a custom tailored suit, The UkrafriK Hotel exudes refinement, five-star luxury and made-for-you service, from the moment you arrive. Located at the enviable intersection of the City Market and the historic French Quarter, you’ll discover something of a maverick boutique hotel, evoking Old South charm and Jazz Age charisma.</h4>
          </div>
          <div className="Btn-content">
              <Link style={{textDecoration: "none"}} to="/" >
                     <button className="Btn-About">Back To Home Page</button>
              </Link>
          </div>
      </div>
    </div>
  )
}

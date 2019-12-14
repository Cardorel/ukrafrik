import React from 'react'
import {Link} from 'react-router-dom'

export default function Error() {
  return (
    <div className="Errors-header">
      <div className="Errors-header-position">
        <div className="Errors-header-contains">
          <img src="https://images.pexels.com/photos/2928146/pexels-photo-2928146.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="HeaderImage" />
        </div>
        <div className="Errors-header-Page-404">
          <h3>Error 404</h3>
        </div>
      </div>
      <div className="Errors-header-para">
        <div className="Errors-header-para-content">
          <p style={{fontWeight: "bolder" , textAlign: "center" , fontSize: "80px"}}>404</p>
          <p style={{opacity: ".7" , margin: "10px 0"}}>Oops , This Page Not Found</p>
          <p style={{fontWeight: "bolder"}}>Or the page may have been removed</p>
          <Link style={{ textDecoration: "none" }} to="/">
            <button>GO BACK HOME</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

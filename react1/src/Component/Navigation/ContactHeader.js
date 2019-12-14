import React from 'react'

export default function ContactHeader() {
  return (
    <div className="Contact-header">
        <img src="image/contatc1.jpg" alt="Contact"/>
        <div className="content">
            <div style={{textAlign: "center"}}>UkrafriK Hotel works every day and you can reach us by phone as by email at any time.Car our lines are open 24h on 24.You are welcome here.
   <p style={{textAlign: "center"}}>UkrafiK is a kingdom of which you are the only kings.</p></div>
        </div>
        <div className="form-contact">
            <h1><i style={{fontSize: "60px" , transform: "rotate(5deg)"}} className="fas fa-mobile-alt"/> Phones Numbers</h1>
            <p><i className="fas fa-map-marker-alt"/>  Ukraine Kiev + 380 (063) 460 75 69      ||      + 380 (064) 460 75 69</p>
              <p><i className="fas fa-map-marker-alt"/>  Congo Brazzaville + 242 (063) 460 75 69      ||      + 242 (064) 460 75 69</p>
                 <p><i className="fas fa-map-marker-alt"/>  France Paris + 33 (063) 460 75 69      ||      + 33 (064) 460 75 69 </p>
               <p><i className="fas fa-map-marker-alt"/>  Senegal Dakar + 221 (063) 460 75 69      ||      + 221 (063) 460 75 69</p>
            <p><i className="fas fa-map-marker-alt"/>  Maroc Rabat + 377 (063) 460 75 69      ||      +377 (064) 460 75 69</p>
            <h1><i style={{fontSize: "60px" , transform: "rotate(-5deg)"}} className="far fa-envelope-open"/> Emails</h1>
            <div className="email-flex">
                <div className="email-left">
                     <p><i className="far fa-envelope-open"/> cardorelngassaki@gmail.com</p>
                     <p><i className="far fa-envelope-open"/> info@ukrafrik.com.ua</p>
                </div>
                <div className="email-right">
                    <p><i className="far fa-envelope-open"/> cardorelngassaki@yahoo.fr</p>
                    <p><i className="far fa-envelope-open"/> info@ukrafrik.fr</p>
                </div>
                <h1><i style={{fontSize: "60px" , transform: "rotate(8deg)"}} className="fas fa-map-marked-alt"/> Address</h1>
                <p><i className="fas fa-map-marked-alt"/> 54 street Taras Lupshenko - Ukraine (Kiev)</p>
                <p><i className="fas fa-map-marked-alt"/> 154 Boulevard Alfred Roual - Congo (Brazzaville) </p>
                <p><i className="fas fa-map-marked-alt"/> 03 Av de Charles St Pierre - France (Paris II)</p>
                <p><i className="fas fa-map-marked-alt"/> 124 Avenue Sedar Senghor - Senegal (Dakar)</p>
                <p><i className="fas fa-map-marked-alt"/>  01 street Almohades - Maroc (Rabat)</p>
            </div>
        </div>
    </div>
  )
}

import React , {useState} from 'react'
import ChangeBtn from './ChangeBtn'

export default function AboutNav() {
    const [lists] = useState(
     [
        {
            id : 215454488845,
            list : "Butler service"
      },
      {
          id : 1544544848844,
          list: "Hotel cocktail bar"
      },
      {
          id : 1555588454484,
          list: "In-room gourmet continental breakfast"
      },
      {
          id : 1521234548888,
          list: "24 hour valet parking"
      },
      {
          id : 123465879878,
          list: "24 hour concierge service"
      },
      {
          id : 212301245689,
          list: "Complimentary Wi-Fi",
      },
      {
          id : 320124589647,
          list: "Expedited check-in",
         
      },
      {
          id : 32154678985,
          list: "Complimentary bicycles to borrow"
     
      },
      {
          id : 215431478964,
          list: "Welcome cocktail"
      },
      {
          id : 301457845621,
          list: "ADA Accessibility & Features "
      }
      ]
    )

    const [state] = useState([
      {
        id: 2154544564,
        list_01 : "Shoe shine"
      },
      {
        id: 14578946321,
        list_01: "Packing/Unpacking"
      },
      {
        id: 3564879456,
        list_01 : "Light pressing services"
      },
      {
        id: 5468123454,
        list_01: "Tea/coffee service"
      },
      {
        id: 30124578942,
        list_01: "Concierge services"

      }
    ])

    const ListItem = lists.map(list => (
      <div key={list.id} className="List-About" >
         <span>♦</span>
         <ul>
          <li>{list.list}</li>
      </ul>
      </div>
    ))

    
    const ListItem_01 = state.map(list => (
      <div key={list.id} className="List-About" >
         <span>♦</span>
         <ul>
          <li>{list.list_01}</li>
      </ul>
      </div>
    ))


  return (
    <div className="Container-Nav">
       <div className="Content-nav">
           <div className="row-left">
               <p>
                   <i className="fas fa-crown"/> {' '}
                    ALL-INCLUSIVE
               </p>
               <h1>LUXURY AMENITIES</h1>
               {ListItem}
           </div>
           <div className="row-right">
                <img src="image/imagee-001.jpg" alt="Partenaire"/>
           </div>
           <div className="Design-about-001"></div>
           <div className="Design-about-002"></div>
       </div>      
       <div className="Content-nav">
         <div className="row-right">
             <img src="image/image-002.jpg" alt=""/>
         </div>
         <div className="row-left">
              <p>
                  <i className="fas fa-globe-africa"/> {" "} The UkrafriK
              </p>
              <h1>BUTLERS</h1>
              <p className="paragraph-001">
              Our charismatic and personable butlers are the charming face of The UkrafriK Hotel, and the trusted gatekeeper to you - our valuable guest.
              </p>
              {ListItem_01}
              <ChangeBtn />
         </div>
           <div className="Design-about-003"/>
           <div className="Design-about-004"/>
           <div className="Design-about-005"/>
       </div>
    </div>
  )
}

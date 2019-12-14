import React from 'react'
import { BrowserRouter as Router , Route , NavLink} from 'react-router-dom'
import { Switch } from "react-router"
import Home from "./Component/Header/Home"
import PremiumPlus from "./Component/Header/PremiumPlus"
import Premium from "./Component/Header/Premium"
import Standard from "./Component/Header/Standard"
import About from "./Component/Header/About"
import Contact from "./Component/Header/Contact"
import RoomDetails from "./Component/Header/RoomDetails"
import Payroom from "./Component/Header/Payroom"
import EventRequest from "./Component/Conference/EventRequest"
import ConferenceRequestById from './Component/Conference/ConferenceRequestById'
import Errors from './Component/Header/Errors'








const routes = [
    {
        path: "/",
        exact: true,
        component: Home,

    },
    {
        path:"/Services",
        component:PremiumPlus,
    },
    {
       path: "/PremiumPlus",
       component: PremiumPlus,
       exact: true
    },
    {
       path: "/PremiumPlus/:id",
       component: Payroom,
    },
    {
        path:"/Premium/",
        component: Premium,
        exact:true
    },
    {
       path: "/premium/:id",
       component:RoomDetails,
    },
    {
        path:"/Conference",
        component: Standard,
        exact:true
    },
    {
        path: "/Conference/:id",
        component: EventRequest,
        exact: true
    },
    {
        path: "/Conference/Halls/:id",
        component: ConferenceRequestById,
        exact: true
    },
    {
        path: "/About" ,
        component: About,
        exact: true
    },
    {
        path: "/Contact" ,
        component: Contact,
        exact: true
    },
    {
        path: "",
        component: Errors,
        exact: true
    }
    
    
]

const RoutewithSub = (route) => (
   <Switch>
       <Route exact={route.exact} path={route.path} render={(props) => (
       <route.component {...props} routes={route.routes} />
   )} />
       
   </Switch>
)

export default function Header() {
  return (
    <Router>
    <nav>
        <div className="header-logos">
        <NavLink to="/" style={{textDecoration: "none"}} >
             <h3>
                  UkrafriK Hotel
             </h3>
        </NavLink>
        </div>
        <ul className="header-menu">
            <NavLink exact activeStyle={{color: "black"}} to="/" style={{textDecoration: "none"}}>
            <li className="list-menu">Home</li>
            </NavLink>
            <li className="list-menu">Services
              <ul className="header-services">
                    <NavLink to="/PremiumPlus" style={{textDecoration: "none"}}>
                        <li className="list-service">Premium+</li>
                    </NavLink>
                    <NavLink to="/Premium"  style={{textDecoration: "none"}}>
                        <li className="list-service">Premium</li>
                    </NavLink>
                    <NavLink  to="/Conference" style={{textDecoration: "none"}}>
                        <li className="list-service">Conference</li>
                    </NavLink>
              </ul>
            </li>
            <NavLink  activeStyle={{color: "black"}} to="/About" style={{textDecoration: "none"}}>
                  <li className="list-menu">About us</li>
            </NavLink>
            <NavLink activeStyle={{color: "black"}} to="/Contact" style={{textDecoration: "none"}}>
                   <li className="list-menu">Contact</li>
            </NavLink>
        </ul>
    </nav>
    <Switch>
              {routes.map((route) => (
                  <RoutewithSub key={route.path} {...route} />
              ))

              }
    </Switch>
</Router>
  )
}

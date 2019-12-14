import React from 'react'
import {Link} from 'react-router-dom'

export default function HomeNav() {
    return (
        <div className="Home-nav">
            <div>
                <img src="image/premiumplus-1-0.jpg" alt="HomeImage"/>
                <h1>VIP SUITE</h1>
                <p>Whether for just a night or a whole week, it begins with a stunningly romantic room. Add in our Romantic Escapes or Special Touches to provide all you need to rekindle that spark. You’ll fall in love all over again!</p>
               <Link style={{textDecoration: "none"}} to="/Premiumplus"><button>Go To Premium Plus Page</button></Link> 
            </div>
            <div>
                <img src="image/premium-1-0.jpg" alt="ImageHome"/>
                <h1>PREMIUM SUITE</h1>
                <p>Enjoy the glowing gas fireplace from the queen-sized arched canopy bed or while reading your favorite book when curled up on the upholstered chaise lounge. With plenty of space, Canopy also offers a rocking chair, wingback, and a writing desk.   Colors are sage and antique white with a splash of cranberry.  Braided rugs adorn original wide pine floors.  The bathroom features a vanity & full tub/shower.</p>
               <Link style={{textDecoration: "none"}} to="/Premium"><button>Go To Premium Page</button></Link> 
            </div>
            <div>
                <img src="https://images.pexels.com/photos/236730/pexels-photo-236730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="ImageStandard"/>
                <h1>CONFERENCE HALLS</h1>
                <p>UkrafriK hotel offers to rent conference halls for seminars, conferences, trainings and other events. The hotel staff will help organize and hold an event of any difficulty, and also offer several kinds of menu for banquets, buffets and coffee breaks.</p>
               <Link style={{textDecoration: "none"}} to="/Conference"> <button>Go To Conference Page</button> </Link> 
            </div>
        </div>
    )
}

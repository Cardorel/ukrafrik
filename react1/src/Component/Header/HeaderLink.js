import React from 'react'
import { BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Pais from '../Footer/Pais'
import Villas from '../Footer/Villas'
import Tokosssss from '../Footer/Tokosssss'
import PrivacyNotice from '../Footer/PrivacyNotice'



function HeaderLink() {
    return (
     <>   
        <Switch>
            <Route exact path="/pais" compoenent={Pais} />
            <Route exact path="/villas" compoenent={Villas} />
            <Route exact path="/Tokosssss" compoenent={Tokosssss} />
            <Route exact path="privacy-notice" compoenent={PrivacyNotice}/>
           <Route component={Error} />
        </Switch>        
     </>
    )
}

export default HeaderLink

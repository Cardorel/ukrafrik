import React  from 'react'
import PremiumContent from '../Navigation/PremiumContent'


export default function PremiumPlus() {

  return (
    <div className="Premium-plus"  >
      <img src="image/premiumplusImage.jpg" alt="Premium"/>
      <div className="Premium-header-image">
        <h1>Premium Plus room
                <div className="Premium-bar-fantesie" />
        </h1>
      </div>
      <PremiumContent/>
    </div>
  )
}

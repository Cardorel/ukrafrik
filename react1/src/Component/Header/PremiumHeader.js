import React from 'react'
import CheckRoom from './CheckRoom'


export default function PremiumHeader() {
    
    return (
        <div className="Premium-header-container">
            <div className="Premium-header-image">
                <img src="image/BackgroundImagePremium1.jpg" alt="Premium" />
                <div>
                    <h1>Premium room
                    <div className="Premium-bar-fantesie"/>
                    </h1>
                </div>
            </div>
            <div>
                <CheckRoom />
            </div>
        </div>
    )
}

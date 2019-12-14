import React from 'react'
import {Slide} from 'react-slideshow-image'



const properties = {
    duration: 10000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: true
}

export default function ConferenceImageSlider({image1 , image2 , image3 , image4}) {
    return (
        <div className="Container-slide">
            <Slide {...properties}>
                <div className="each-slide">
                    <div /*style={{'backgroundImage': `url(${slides[0]})`}}*/>
                        <img src={image1} alt="image3" />
                    </div>
                </div>
                <div className="each-slide">
                    <div /*style={{'backgroundImage': `url(${slides[0]})`}}*/>
                        <img src={image2} alt="image3" />
                    </div>
                </div>
                <div className="each-slide">
                    <div /*style={{'backgroundImage': `url(${slides[0]})`}}*/>
                        <img src={image3} alt="image3" />
                    </div>
                </div>
                <div className="each-slide">
                <div /*style={{'backgroundImage': `url(${slides[0]})`}}*/>
                    <img src={image4} alt="image3" />
                </div>
            </div>
            </Slide>
        </div>
    )
}

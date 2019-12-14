import React from 'react'
import {Slide} from 'react-slideshow-image'



const properties = {
    duration: 100000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: true
}

export default function SlidePremiumImage({state1 , state2 , state3}) {
    return (
        <div className="Container-slide">
            <Slide {...properties}>
                <div className="each-slide">
                    <div /*style={{'backgroundImage': `url(${slides[0]})`}}*/>
                        <img src={state1} alt="image3" />
                    </div>
                </div>
                <div className="each-slide">
                    <div /*style={{'backgroundImage': `url(${slides[0]})`}}*/>
                        <img src={state2} alt="image3" />
                    </div>
                </div>
                <div className="each-slide">
                    <div /*style={{'backgroundImage': `url(${slides[0]})`}}*/>
                        <img src={state3} alt="image3" />
                    </div>
                </div>
            </Slide>
        </div>
    )
}

import React from 'react';
import {Slide} from 'react-slideshow-image'



const properties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

const SlideImg = () => {
    return (
        <div className="Container-slide">
         <Slide {...properties}>
          <div className="each-slide">
            <div /*style={{'backgroundImage': `url(${slides[0]})`}}*/>
                <img src="image/page-home-1.jpg" alt="image3"/>
            </div>
          </div>
          <div className="each-slide">
            <div /*style={{'backgroundImage': `url(${slides[1]})`}}*/>
                <img src="image/page-home-2.jpg" alt="image2"/>
            </div>
          </div>
          <div className="each-slide">
            <div /*style={{'backgroundImage': `url(${slides[2]})`}}*/>
                <img src="image/page-home-3.jpg" alt="image1"/>
            </div>
          </div>
          <div className="each-slide">
            <div /*style={{'backgroundImage': `url(${slides[2]})`}}*/>
                <img src="image/page-home-4.jpg" alt="image1"/>
            </div>
          </div>
        </Slide>
        </div>
    );
}

export default SlideImg;

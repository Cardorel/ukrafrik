import React from 'react';

const ImageSlider = ({index , picture }) => {
    return (
        <div id={`image-${index}`} className="image-slider-btn" >
            <img src={picture} alt={index}/>
        </div>
    );
}

export default ImageSlider;

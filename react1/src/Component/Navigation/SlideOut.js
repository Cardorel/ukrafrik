import React , {useState} from 'react'
import {Fade} from 'react-slideshow-image'

export default function SlideOut() {
    const [state] = useState(
        [
            {
                id: 21345,
                url: "image/resto-image-001.jpg",
                alt: "Image 01"
            },
            {
                id: 34512,
                url: "image/resto-image-002.jpg",
                alt: "Image 02"
            },
            {
                id: 41256,
                url: "image/resto-image-003.jpg",
                alt: "image 03"
            },
            {
                id: 12354,
                url: "image/resto-image-004.jpg",
                alt: "Image 04"
            },
            {
                id: 31245,
                url: "image/resto-image-006.jpg",
                alt: "Image 05"
            },
            {
                id: 21341,
                url: "image/resto-image-005.jpg",
                alt: "Image 06"
            },
            {
                id: 87456,
                url: "image/resto-image-007.jpg",
                alt: "Image 07"
            },
            {
                id: 41230,
                url: "image/resto-image-008.jpg",
                alt: "Image 08"
            },
            {
                id: 32178,
                url: "image/resto-image-009.jpg",
                alt: "Image 09"
            },
            {
                id: 41278,
                url: "image/resto-image-010.jpg",
                alt: "Image 10"
            },
            {
                id: 304785,
                url: "image/resto-image-0011.jpg",
                alt: "image 11"
            },
            {
                id: 847597,
                url: "image/resto-image-012.jpg",
                alt: "Image 12"
            }
    
        ]
    )

    const Properties ={
        duration: 3000,
        transitionDuration: 500,
        infinite: true,
        indicators: false,
        arrows: true,
        scale: .2,
    }


  return (
    <div >
        <div className="slider-container">
            <Fade {...Properties}>
              {state.map(stat =>(
                 <div key={stat.id} className="zoom-content">
                       <div className="each-slide">
                          <div className="slide-img-out">
                              <img src={stat.url} style={{width: "100%"}} alt={stat.alt} />
                          </div>
                      </div>
                 </div>
              ))}   
            </Fade>
        </div>
    </div>
  )
}

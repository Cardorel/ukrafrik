import React, { Component } from 'react'
import ImageSlider from './ImageSlider'

const data = {
    "properties": [
        {
            "id": 213567,
            "index": 0,
            "picture": "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
            "id": 214567,
            "index": 1,
            "picture": "image/premiumplus-1-1.jpg"
        },
        {
            "id": 214568,
            "index": 2,
            "picture": "image/premiumplus-1-2.jpg"
        },
        {
            "id": 214569,
            "index": 3,
            "picture": "image/premiumplus-1-3.jpg"
        },
        {
            "id": 214560,
            "index": 4,
            "picture": "image/premiumplus-1-4.jpg"
        },
        {
            "id": 2145784,
            "index": 5,
            "picture": "image/premiumplus-1-5.jpg"
        },
        {
            "id": 2145419,
            "index": 6,
            "picture": "image/premiumplus-1-6.jpg"
        },
        {
            "id": 2145473,
            "index": 7,
            "picture": "image/premiumplus-1-7.jpg"
        }
    ]
}


export default class ModalPict extends Component {
    constructor(props){
        super(props);
        this.state = {
            properties: data.properties,
            property: data.properties[0],
        }
    }

    next = () =>{
        const newIndex1 = this.state.property.index+1;
        this.setState({
            property: data.properties[newIndex1]
        })
    }

    prev = () =>{
        const newIndex2 = this.state.property.index-1;
        this.setState({
            property: data.properties[newIndex2]
        })
    }

    render() {
        const {properties , property} = this.state;
        return (
           <div>
               {
                   this.props.modal && 
                   <div className="Modal-picture ">
                   <div className="Modal-cloz">
                       <span className="Close-Modal-Pic" onClick={this.props.CloseModal} >X</span>
                    </div>
                   <div className="container-modal">
                       <div className="Modal-picture-content">
                           <div className={`image-slider active-slide-${property.index}`}>
                               <div className="image-slider-wrpper" style={{'transform' : `translateX(-${property.index*(100/properties.length)}%)`}}>
                                  {
                                     properties.map(stat => (
                                       <ImageSlider
                                       index={stat.index}
                                       picture={stat.picture}
                                       key={stat.id}
                                       next={this.next}
                                       prev={this.prev}
                                       />
                                     ))
                                  }
                               </div>
                               <button className="Btn-wrapper-right" disabled={property.index === data.properties.length-1} onClick={this.next} >&#10095;</button>
                               <button className="Btn-wrapper-left" disabled={property.index === 0} onClick={this.prev}>&#10094;</button>
                           </div>
                       </div>
                   </div>
               </div>
               }
           </div>
        )
    }
}

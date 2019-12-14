import React from 'react';
import {Link} from 'react-router-dom'

const ImageContent = (props) => {
    let Verified;
    if(props.id)
    {
        Verified = props.id;
    }
    else
    {
        Verified = props.id;
    }
   
    return (
        <div className="Premium-plus-left">
            <div className="Premium-plus-left-position">
                <img src={props.image} onClick={() => { props.openModal(); props.openModal2(); props.openModal3() }} alt={props.alt} />
                <h3>{props.price}</h3>
                <div className="Premium-plus-left-btn">
                    <button onClick={props.ShowReserved}>{props.reserve}</button>
                    <Link to={`/PremiumPlus/${Verified}`}>
                        <button>{props.text}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ImageContent;

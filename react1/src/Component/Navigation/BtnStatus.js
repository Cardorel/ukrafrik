import React from 'react'

export default function BtnStatus(props) {
    return (
        <div className="Btn-More">
            <button onClick={props.onClick}>See More</button>
        </div>
    )
}

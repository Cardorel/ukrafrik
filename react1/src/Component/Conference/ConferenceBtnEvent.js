import React from 'react'
import {Link} from 'react-router-dom'

export default function ConferenceBtnEvent() {
    return (
        <div>
            <div className="Conference-btn-event">
                <button>
                    <Link style={{ textDecoration: "none", color: "white" }} to="/Conference/EventRequest">
                        EVENT REQUEST
                     </Link>
                </button>
            </div>
        </div>
    )
}

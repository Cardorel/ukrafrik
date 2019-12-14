import React from 'react'
import "./Conference.css";
import ConferenceNav from './ConferenceNav'
import ConferenceBtnEvent from './ConferenceBtnEvent'

export default function ConferenceHeader() {
    return (
        <div>
            <div className="Conference-header">
                <div className="Conference-header-header">
                    <img src="https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="ConrenceImage" />
                </div>
                <div className="Premium-header-image">
                    <h1>
                        Conference
                            <div className="Premium-bar-fantesie" />
                    </h1>
                </div>
                <div className="Conference-header-para">
                    <p className="Para-header">
                        UkrafriK hotel offers to rent conference halls for seminars, conferences, trainings and other events. The hotel staff will help organize and hold an event of any difficulty, and also offer several kinds of menu for banquets, buffets and coffee breaks.
                    </p>
                    <div className="Conference-contact">
                        <h5>CONTACTS FOR BOOKING CONFERENCE ROOMS</h5>
                        <div className="Conference-contact-contact">
                            <p><i className="fas fa-phone-alt" /> +380 63 460 75 69 </p>
                            <div className="Para-bar"></div>
                            <p className="Conference-email"><i className="far fa-envelope" /> <a href="mailto:cardorelngassaki@gmail.com">infoconfer@ukrafrik.com</a></p>
                        </div>
                          <ConferenceBtnEvent/>
                    </div>
                        <ConferenceNav/>
                </div>     
            </div>
        </div>
    )
}

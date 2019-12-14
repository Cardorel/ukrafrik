import React ,{useState} from 'react'
import RequestInput from './RequestInput'
import GDRPModal from './GDRPModal'

export default function EventRequest() {

    const [state, setstate] = useState(false);
    const [checked, setchecked] = useState(false);

    function onCheckClick (){
        document.body.classList.add('Remove-scroll');
        setstate(true)
    }

    function onBtnClick (){
        setstate(false)
    }

    function BtnClickedAccept (){
        document.body.classList.remove('Remove-scroll');
          setchecked(true);
    }

    function BtnClickedDecline (){
        document.body.classList.remove('Remove-scroll');
           setchecked(false);
    }

    return (
        <div>
            <div className="Request-container">
                <div className="Request-event-header">
                    <div className="Request-event-bar-top"></div>
                    <h3>Request Event</h3>
                    <div className="Request-event-bar-botton"></div>
                </div>
                <RequestInput
                state={checked}
                onCheckClick={onCheckClick}
                />
            </div>
            {state && 
            <GDRPModal 
            state={state}
            onBtnClick={onBtnClick}
            onBtnClickedAccept={BtnClickedAccept}
            onBtnClickedDecline={BtnClickedDecline}
            />
            }
        </div>
    )
}

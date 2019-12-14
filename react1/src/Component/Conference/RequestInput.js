import React , { useState } from 'react'

const date = new Date();
const getDate = date.getDate() + "";
const getMonth = date.getMonth() + "";
const getYear = date.getFullYear();
const WthgetDate = date.getDate();
const WthgetMonth = date.getMonth();




export default function RequestInput(props) {
  var FullDate ;
if(getDate.length < 2)
{
    FullDate = `${getYear}-${WthgetMonth+1}-0${WthgetDate}`
}
if(getMonth.length < 2)
{
    FullDate = `${getYear}-0${WthgetMonth+1}-${WthgetDate}`
}
if(getDate.length >= 2)
{
    FullDate = `${getYear}-${WthgetMonth+1}-${WthgetDate}`
}
if(getMonth.length >= 2)
{
    FullDate = `${getYear}-${WthgetMonth+1}-${WthgetDate}`
}
if(getDate.length < 2 && getMonth.length < 2)
{
     FullDate = `${getYear}-0${WthgetMonth+1}-0${WthgetDate}`
}


const initialState = {
    name: "" ,
    comapny : "",
    date: FullDate, 
    phone: "",
    surname: "",
    event: "Type of event",
    number: "",
    email: ""

}

    const [state, setstate] = useState(initialState);

    function handleChangeRequest (e) {
        setstate({[e.target.name]: e.target.value})
    }

    function handleClickRequest (e) {

    }

    //const data = document.querySelector('#name');

    function handleInput (){
        const data = document.querySelector('input');
        data.setCustomValidity("");
        data.checkValidity();    
    }

    function handleInvalid () {
        const data = document.querySelector('#name');
        if(state.name === "")
        {
            data.setCustomValidity("Please , enter your name !")
        }else{data.setCustomValidity("A name can only contain lowercase and uppercase letters \"John\" and his length can not be more than 10, please try again")}
    }

    function handleInvalidNum (){
        const data = document.querySelector('#Phone');
        if(isNaN(state.number))
        {
           data.setCustomValidity("Enter the good format \"0xxxxxxxxx\"")
        }
    }

    function handleInvalidUsername (){
        const data = document.querySelector('#Surname');
        if(state.surnname === "")
        {
            data.setCustomValidity("Please , enter your Surname !")
        }else{data.setCustomValidity("A Surname can only contain lowercase letters and his length can not be more than 10, please try again")}
    }

    function handleInvalidEmail (){
        const data = document.querySelector('#email');
        if(state.email === "")
        {
            data.setCustomValidity("Please , enter your Email !")
        }else{data.setCustomValidity("Format non valid and be sure to enter the good format \"xxxxxxx@xxxx.yy\"")}
    }

    

    return (
        <div>
            <form>
                <div className="Request-input-container">
                    <div className="Request-input-row">
                        <div className="Request-input-col">
                            <div>
                                <label htmlFor="name">Name </label>
                                <input 
                                defaultValue={state.name} 
                                onInvalid={handleInvalid} 
                                onInput={handleInput} 
                                onChange={handleChangeRequest} 
                                required 
                                pattern="^[A-Z]{1}[a-zA-Z0-9-_\.]{1,20}$"
                                type="text" 
                                name="mame" 
                                id="name" 
                                />
                                <label htmlFor="Company">Company name </label>
                                <input 
                                defaultValue={state.comapny} 
                                onChange={handleChangeRequest} 
                                required 
                                type="text" 
                                name="company" 
                                id="Company" 
                                />
                                <label htmlFor="date">Date select </label>
                                <input 
                                type="date" 
                                required 
                                defaultValue={state.date} 
                                onClick={handleClickRequest} 
                                name="date" 
                                id="date" 
                                />
                                <label htmlFor="Phone">Phone number </label>
                                <input type="text" 
                                defaultValue={state.number} 
                                onInvalid={handleInvalidNum} 
                                required 
                                onInput={handleInput} 
                                onChange={handleChangeRequest}  
                                pattern="^(?:0|\(?\+38\)?\s?|0038\s?)[1-79](?:[\.\-\s]?\d\d){4}$"
                                name="phone" 
                                id="Phone" 
                                />
                            </div>
                        </div>
                        <div className="Request-input-col">
                            <div>
                                <label htmlFor="Surname">Surname </label>
                                <input type="text" 
                                defaultValue={state.surname} 
                                onInvalid={handleInvalidUsername} 
                                onInput={handleInput} 
                                onChange={handleChangeRequest} 
                                pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$"
                                name="surname" 
                                id="Surname" 
                                />
                                <label htmlFor="Event">Type of event</label>
                                <select name="event" defaultValue={state.event} required onChange={handleChangeRequest} id="Event">
                                    <option value="Type of event" disabled>Type of event</option>
                                    <option value="Conf">Conference</option>
                                    <option value="Banq">Banquet</option>
                                    <option value="Wed">Wedding</option>
                                    <option value="oth">Other</option>
                                </select>
                                <label htmlFor="Participant">Number of participants</label>
                                <input 
                                type="number" 
                                name="participant" 
                                id="Participant"
                                min="1"
                                required
                                />
                                <label htmlFor="email">Email address </label>
                                <input 
                                type="email" 
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                required
                                defaultValue={state.name} 
                                onChange={handleChangeRequest} 
                                name="mail" 
                                id="email" 
                                onInvalid={handleInvalidEmail} 
                                onInput={handleInput} 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="Request-textarea">
                        <label htmlFor="textarea">Additional information </label>
                        <textarea name="textarea" id="textarea" cols="30" rows="10"/>
                    </div>
                    <div className="Request-GDRP">
                        <div className="Request-GDRP-01">
                          <input type="checkbox" name="checkbox2"/>
                          <span>Need accommodation</span>
                        </div>
                        <div className="Request-GDRP-02">
                            <input type="checkbox" onClick={props.onCheckClick} defaultChecked={props.state} name="checkbox2"/>
                            <span>I hereby agree to the Terms of processing of my personal data</span>
                        </div>
                    </div>
                    <div className="Request-btn">
                        <button>Send</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

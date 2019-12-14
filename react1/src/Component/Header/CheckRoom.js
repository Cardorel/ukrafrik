import React , {useState} from 'react'


const date = new Date();
const getDate = date.getDate() + "";
const getMonth = date.getMonth() + "";
const getYear = date.getFullYear();
const WthgetDate = date.getDate();
const WthgetMonth = date.getMonth(); 


export default function CheckRoom() {

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

    const initialState= {
        date: FullDate,
        selected: "DEFAULT"
    }

    const [state] = useState(initialState);


    return (
        <div className="Check-room">
            <form >
                <input type="date" defaultValue={state.date} name="date" className="date" />
                <input type="date" defaultValue={state.date} name="dates" className="date" />
                <select className="Selected-room" name="People" defaultValue={state.selected}>
                    <option value="DEFAULT" disabled>Nomber Of People</option>
                    <option value="first">1</option>
                    <option value="second">2</option>
                    <option value="thrid">3</option>
                    <option value="fourth">4</option>
                </select>
                <button className="btn-date-room" disabled title="This service is not disponible.Please check later">Check Availability</button>
            </form>
        </div>
    )
}

import React, { Component } from 'react'
import InputHeader2 from './InputHeader2';
import InputCountry from './InputCountry';



const date = new Date();
const getDate = date.getDate() + "";
const getMonth = date.getMonth() + "";
const getYear = date.getFullYear();
const WthgetDate = date.getDate();
const WthgetMonth = date.getMonth(); 


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


export default class UserForm1 extends Component {
    constructor (props){
        super(props);
        this.state = {
            date: FullDate
        }
    }
    
    continue = e =>{
        e.preventDefault();   
        this.props.nextStep();
    }

    previous = e =>{
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        return (
            <div className="input-first" >
                <InputHeader2 />
                <div className="input-party">
                    <InputCountry />
                    <input
                        type="date"
                        defaultValue={this.state.date}
                        name="Arrived"
                        placeholder="Last Name..."
                        required
                        onChange={this.props.handleChange("Arrived")}
                    />
                    <input
                        type="date"
                        defaultValue={this.state.date}
                        name="Returned"
                        placeholder="Email..."
                        onChange={this.props.handleChange("Returned")}
                    />
                    <button onClick={this.continue}>Next</button>
                    <button className="Prev" onClick={this.previous}>Previous</button>
                </div>
            </div>
        );
    }
}
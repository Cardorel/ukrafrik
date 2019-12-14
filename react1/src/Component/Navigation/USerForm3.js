import React from 'react'
import InputHeader3 from './InputHeader3';
import {Link} from 'react-router-dom'

export default class UserForm1 extends React.Component {
    continue = e =>{
        e.preventDefault();
        const isValidRoomName1 = this.props.Values.RoomName === "Viper's Room" ? true : false;
        const isValidRoomName2 = this.props.Values.RoomName === "Bykovel's Room" ? true : false;
        const isValidRoomName3 = this.props.Values.RoomName === "Nazar's Room" ? true : false;
        const isValidRoomName4 = this.props.Values.RoomName === "Frankovsk's room" ? true : false;
        const isValidRoomName5 = this.props.Values.RoomName === "Brazza's room" ? true : false;
        const isValidRoomName6 = this.props.Values.RoomName === "Cherkasy's room" ? true : false;
        const isValidRoomName7 = this.props.Values.RoomName === "Sumy's room" ? true : false;
        const isValidRoomName8 = this.props.Values.RoomName === "Paris's room" ? true : false;
        const isValidRoomName9 = this.props.Values.RoomName === "Kiev's room" ? true : false;
        const isValidRoomName10 = this.props.Values.RoomName === "Dolzie's room" ? true : false;
        const isValidRoomName11 = this.props.Values.RoomName === "Prim's room" ? true : false;
        
        if(isValidRoomName1 || isValidRoomName2 || isValidRoomName3 || isValidRoomName4 || isValidRoomName5 || isValidRoomName6 || isValidRoomName7 || isValidRoomName8 || isValidRoomName9 || isValidRoomName10 || isValidRoomName11){
        this.props.nextStep();
        }
    }

    previous = e =>{
        e.preventDefault();
        this.props.prevStep();
    }


    render() {
        const cols="30";
        const rows = "10";
        return (
            <div className="input-first" >
                <InputHeader3 />
                <div className="input-party">
                    <input type="text" 
                    value={this.props.Values.RoomName} 
                    name="FirstName" 
                    placeholder="Room's name..."
                    required 
                    onChange={this.props.handleChange("RoomName")}
                    />
                    <p className="Condition">Please, find the Room name in the section " About this Room "</p>
                    <textarea value={this.props.Values.Textarea} onChange={this.props.handleChange("Textarea")} required name="area" cols={cols} rows={rows}  placeholder=" If you have some suggestion , please let'us know..." />
                    <div className="text-area-input">
                    <input className="checkbox" value={this.props.Values.check} type="checkbox" name="check" />
                    <span>Check, if you agree with <Link to="#top">Terms and Conditions</Link></span>
                    </div>
                    <button onClick={this.continue}>Submit</button>
                    <button className="Prev" onClick={this.previous}>Previous</button>
                </div>
            </div>
        );
    }
}

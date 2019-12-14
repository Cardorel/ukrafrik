import React, { Component } from 'react'
import InputHeader from './InputHeader';

export default class UserForm1 extends Component {

    continue = e =>{
        e.preventDefault();
        const isValidFirstName = this.props.Values.firstName.length >= 2 ? true : false ;
        const isValidLastName  = this.props.Values.lastName.length >= 2 ? true : false;
        const isValidEmail = this.props.Values.Email.includes("@") ? true : false;
        if(isValidFirstName && isValidLastName && isValidEmail){
                  this.props.nextStep();
        }
    }

    render() {
        return (
            <div className="input-first" >
                <InputHeader />
                <div className="input-party">
                    <input type="text" 
                    value={this.props.Values.firstName} 
                    name="FirstName" 
                    placeholder="First Name..."
                    required 
                    onChange={this.props.handleChange("firstName")}
                    />
                    <input 
                    type="text" 
                    value={this.props.Values.lastName} 
                    name="lastName" 
                    placeholder="Last Name..." 
                    required
                    onChange={this.props.handleChange("lastName")}
                    />
                    <input 
                    type="email" 
                    value={this.props.Values.Email} 
                    name="Email" 
                    placeholder="Email..." 
                    required
                    onChange={this.props.handleChange("Email")}
                    />
                    <button onClick={this.continue}>Next</button>
                </div>
            </div>
        );
    }
}

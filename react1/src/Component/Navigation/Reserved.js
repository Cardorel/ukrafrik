import React, { Component } from 'react'
import UserForm1 from './UserForm1';
import UserForm2 from './UserForm2';
import UserForm3 from './USerForm3'
import UserForm4 from './UserForm4'

export default class Reserved extends Component {
    constructor(props){
        super(props);
        this.state={
            step: 1,
            firstName: "",
            lastName: "",
            Email: "",
            Country: "",
            RoomName: "",
            Textarea: "",
            check: false
        }
    }


    nextStep = () =>{
        const {step} = this.state;
        this.setState({
            step: step + 1
        })
    }

    prevStep = () =>{
        const {step} = this.state;
        this.setState({
            step: step - 1
        })
    }

    handleChange = input => e => {
        this.setState({[input]:e.target.value})
    }
    render() {
        const {step} = this.state;
        const {firstName , lastName , check , Email ,RoomName ,Country ,Textarea} = this.state;
        const Values = {firstName , lastName, check , Email ,RoomName , Country ,Textarea} 
        
        switch (step) {
            case 1:
               return(
                   <div className="Reserved">
                       <UserForm1
                       Values={Values}
                       handleChange={this.handleChange}
                       nextStep={this.nextStep}
                       />
                   </div>
               )
            case 2:
                return (
                    <div className="Reserved">
                        <UserForm2
                            Values={Values}
                            handleChange={this.handleChange}
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                        />
                    </div>
                )
            case 3:
                return(
                    <div className="Reserved">
                        <UserForm3
                            Values={Values}
                            handleChange={this.handleChange}
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                        />
                    </div>
                )
            case 4 :
                return (
                    <div className="Reserved">
                          <UserForm4/>
                    </div>
                )
            default :
               return null;
        }
    }
}



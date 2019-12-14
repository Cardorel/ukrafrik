import React , {Component} from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import Modal from '../Footer/Modal'
//import FooterInput from './FooterInput'



export default class FooterRight extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      country: "" ,
      modal : false,
      Isloading: false
    }
  }



   handleChange = input => (e) => {
      //const name = e.target.name
      const defaultValue = e.target.value
      this.setState({[input]: defaultValue})
  }

 
   closeModal = () =>{

    document.body.classList.remove('Remove-scroll');

    this.setState({modal: false});
    this.setState({Isloading: false})

  }

 

  
    handleSubmit = (e) =>{
      document.body.classList.add('Remove-scroll');
      
      e.preventDefault();
      this.setState({
        name: "",
        email: "",
        country: ""
      })

     setTimeout(() => {
      this.setState({modal: true});
     }, 3000);

     setTimeout(() => {
       this.setState({Isloading: true})
     },1500);
      
  }

   
   render (){
    const {name , email , country} = this.state
  return (
    <div className="footer-right" >
      <p className="footer-right-firsts-para">For exclusive experiences, events and</p>
      <p className="footer-right-firsts-para"> more, please enter your details below.</p>
      <div>
      <form onSubmit={this.handleSubmit}>
             <input 
             type="text" 
             name="text"  
             value={name}
             required={true} 
             onChange={this.handleChange("name")} 
             placeholder="First and Last Name"
             />
             <input 
             type="email" 
             name="email" 
             value={email}
             required={true} 
             onChange={this.handleChange("email")} 
             placeholder="Your email address"  
             />
             <input 
             type="text" 
             name="country"
             value={country}
             required={true} 
             onChange={this.handleChange("country")} 
             placeholder="Country"
             />
             <button>Sign up</button>
          {
            this.state.Isloading &&
              <div className="LoaderSignup" />
          }
         </form>
      </div>
      <p className="footer-right-last-para">By clicking on "Sign-up" you agree to our <Router> <Link to="/pricavy-notice">privacy policy</Link> </Router>.</p>
        {this.state.modal &&  <Modal closeModal={this.closeModal} />}
    </div>
  )
   }
}

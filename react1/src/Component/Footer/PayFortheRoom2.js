import React , {useState} from 'react'
import InputCountry from '../Navigation/InputCountry'

const initialstate= {
    fullname: "",
    email: "",
    city: "",
    state: "",
    cardname: "",
    zip: "",
    credit: "",
    cvv: ""
}

export default function PayFortheRoom({price , price1}) {
    const [state, setstate] = useState(1)
    const [value, setvalue] = useState(initialstate)

    function Incremnt ()
    {
        setstate(state-1);
    }



    const handleChange = (e) => {
        const val = e.target.value;
        const name = e.target.name;

            setvalue({[name]: val})
           
    }

  

    function decrimnt ()
    {
        setstate(state + 1);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setvalue(initialstate)
    }

    const handleBlur = (e) => {
        
    }


    return (
        <div>
 
                <div className="Pay-for-room-header">
                   <h1>We will need all this informations , if you will pay for the room</h1>
                   <div className="pay-for-room-bar"></div>
                </div>
                <div className="Pay-for-room-container">
                     <form onSubmit={handleSubmit} > 
                    <div className="Pay-for-room-content">
                        <div className="Pay-for-room-row">
                                     
                            <div className="Pay-for-room-col">
                                <h2>Billing Address</h2>
                                <label htmlFor="FirstName"><i className="fas fa-user" /> Full Name</label>
                                <input type="text"  onChange={handleChange} onBlur={handleBlur} defaultValue={value.fullname} name="Firstname" id="FirstName" required placeholder="Junes Cardorel" />
                                <label htmlFor="Email"><i className="fas fa-envelope" /> Email</label>
                                <input type="email" name="Email" id="Email" onChange={handleChange} defaultValue={value.email} required placeholder="cardorelngassaki@gmail.com" />
                                <label htmlFor="Country"><i className="fas fa-flag" /> Country<span style={{ color: "red !important", display: "inline", float: "none" }}>*</span></label>
                                <InputCountry />
                                <label htmlFor="City"><i className="fas fa-university" /> City</label>
                                <input type="text" name="City" id="City" onChange={handleChange} defaultValue={value.city} required placeholder="Kiev" />
                                <div className="state-Zip">
                                    <label htmlFor="State">State</label>
                                    <input type="text" name="State"  required onChange={handleChange} defaultValue={value.state} id="State" placeholder="Kiev" />
                                    <label htmlFor="Zip">Zip</label>
                                    <input type="text" name="Zip"  required id="Zip" onChange={handleChange} defaultValue={value.zip} placeholder="76000" />
                                </div>
                            </div>
                            <div className="Pay-for-room-col">
                                <h2>Payment</h2>
                                <label>Accepted Cards</label>
                                <div className="Card-party">
                                    <i className="fab fa-cc-visa" />
                                    <i className="fab fa-cc-mastercard" />
                                    <i className="fab fa-cc-amex" />
                                    <i className="fab fa-cc-discover" />
                                </div>
                                <label htmlFor="NameonCard">Name on Card</label>
                                <input type="text" name="NameonCard" onChange={handleChange} defaultValue={value.cardname} id="NameonCard" placeholder="Junes Cardorel" />
                                <label htmlFor="CreditNumber">Credit Card number</label>
                                <input type="text" name="CreditNumber" onChange={handleChange} defaultValue={value.credit} id="CreditNumber" required  placeholder="0000-0000-0000-0000" />
                                <label htmlFor="Month">Exp Month</label>
                                <select name="Month" id="Month">
                                    <option value="Juan">01</option>
                                    <option value="Feb">02</option>
                                    <option value="Marc">03</option>
                                    <option value="Apr">04</option>
                                    <option value="May">05</option>
                                    <option value="Jun">06</option>
                                    <option value="July">07</option>
                                    <option value="Aug">08</option>
                                    <option value="Sept">09</option>
                                    <option value="Oct">10</option>
                                    <option value="Nov">11</option>
                                    <option value="Dec">12</option>
                                </select>
                                <div className="Year-cvv">
                                    <label htmlFor="Year">Exp Year</label>
                                    <select name="Year" id="Year">
                                        <option value="2019">2019</option>
                                        <option value="2020">2020</option>
                                        <option value="2021">2021</option>
                                        <option value="2022">2022</option>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                    </select>
                                    <label htmlFor="Cvv">CVV</label>
                                    <input type="password" name="CVV" autoComplete="off" onChange={handleChange} defaultValue={value.cvv} required id="CVV" placeholder="***" />
                                </div>
                            </div>
                        </div>
                        <div className="checkbox-btn">
                            <button>Pay For The Room</button>
                        </div>
                    </div>
                    </form>
                    <div className="Resume-Command">
                        <p>Check for the day</p>
                        <button type="button" onClick={Incremnt} disabled={state < 2} >-</button>
                        <button type="button">{state}</button>
                        <button type="button" onClick={decrimnt}>+</button>                
                    <div className="Resume-command-Price">
                        <h6>For this room, you will pay : </h6>
                        <p>Price: {price}</p>
                        <p>Day(s): {state}</p>
                        <p>VTA: 0.00</p>
                        <h3>Total: ${price1 * state}</h3>
                    </div>  
                    </div>
                </div>
            
        </div>
    )
}

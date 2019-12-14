import React from 'react';
import {Link} from 'react-router-dom'
import InputHeader4 from './InputHeader4'

const UserForm4 = () => {
    return (
        <div className="input-first" >
              <InputHeader4 />
        <div className="input-party input-validation">
            <h4 style={{fontSize: "30px"}}><i className="far fa-check-circle"/> Thank you for your reservation!</h4>
            <span>you can contact us  <Link to="/Contact" style={{margin: "0 3px"}}>here</Link> by phone</span>
        </div>
        </div>

    );
}

export default UserForm4;

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
//import Data from './DataPremiumRoom.json'
import PremiumHeader from '../Header/PremiumHeader'
import './Premium.css'

export default function Premium() {
  const [state, setstate] = useState([])

  useEffect(() => {
    Fetch();

  }, []);

  const Fetch = async () => {
    const data = await fetch('http://www.mocky.io/v2/5dc6093432000077ec769d92')
    const state = await data.json()

    setstate(state.data);

  }

  return (
    <div className="Premium-data-container">
      <PremiumHeader />
      <div className="Premium-data-row">
        {state.map(res => (
          <div key={res.id} className="Premium-data">
            <Link to={`/Premium/${res.id}`}>
              <div className="Premium-data-hover">
                <img src={res.url} alt="" />
                <h3>{res.Price}</h3>
              </div>
            </Link>
            <h2>{res.title}</h2>
            <ul>
              <li>{res.text}</li>
            </ul>
            <Link style={{ textDecoration: "none" }} to={`/Premium/${res.id}`}>
              <h4>{res.click}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

import React , {useState} from 'react'
import PremiumPlus from "./PremiumPlus"
import Premium from "./Premium"
import Standard from "./Standard"

export default function Services() {
  return (
    <div>
         <PremiumPlus/>
         <Premium/>
         <Standard/>
    </div>
  )
}

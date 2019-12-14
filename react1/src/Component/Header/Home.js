import React from 'react'
import SlideImg from './SlideImg'
import HomeHeader from '../Home/HomeHeader'
import FeelBack from '../Home/FeelBack'
import Chat from '../../ChatSyst/Chat'
import CheckRoom from './CheckRoom'

export default function Home() {
  return (
    <div>
        <SlideImg />
        <CheckRoom/>
        <HomeHeader/>
        <FeelBack/>
        <Chat/>
    </div>
  )
}

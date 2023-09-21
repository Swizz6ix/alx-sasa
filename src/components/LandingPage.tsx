import React from 'react'
import LandingHeader from './LandingHeader'
import Menu from './Menu'
import Login from './Login'
import Inspired from './Inspired'
import Humor from './Humor'
import Track from './Track'
import MotivationCard from './MotivationCard'
import OnTime from './OnTime'
import About from './About'
import TrackMobile from './TrackMobile'

function LandingPage() {
    //REnding all the pages for the landing page
    return (
        <div>
            <LandingHeader />
            <Menu />
            <Login />
            <OnTime />
            <TrackMobile />
            <Track />
            <MotivationCard />
            <Humor />
            <Inspired />
            <About />
        </div>
    )
}

export default LandingPage

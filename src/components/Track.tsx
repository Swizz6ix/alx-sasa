import React from 'react';
import '../styles/Track.css';
import DoHard from './DoHard';
import desktopImg from "../images/alx-sasa_desktop2(1).png"
import { Zoom, Slide }from "react-reveal";

const Track:React.FC = () => {
    return (
        <div className='track'>
            <div className='track__width'>
                <div className='track__content'>
                    <Slide left>
                        <div className='track__img'>
                            <img src={desktopImg} alt="desktop representation of alx-sasa showing the project timer" />
                            <div className='hard'>
                                <DoHard />
                            </div> 
                        </div>
                    </Slide>
                    <div className='track__header'>
                        <h1><Zoom top cascade>TRACK YOUR PROJECTS IN REAL TIME</Zoom></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Track

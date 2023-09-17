import React from 'react';
import '../styles/Track.css';
import DoHard from './DoHard';
import desktopImg from "../images/alx-sasa_desktop2(1).png"

const Track:React.FC = () => {
    return (
        <div className='track'>
            <div className='track__width'>
                <div className='track__content'>
                    <div className='track__img'>
                        <img src={desktopImg} alt="desktop representation of alx-sasa showing the project timer" />
                        <div className='hard'>
                            <DoHard />
                        </div> 
                    </div>
                    <div className='track__header'>
                        <h1>TRACK YOUR PROJECTS IN REAL TIME</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Track

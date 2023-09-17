import React from 'react';
import "../styles/Humor.css"
import smallLogo from "../images/logo.png"
import humorImg from "../images/phoneHumor.png"
import { Zoom, Slide }from "react-reveal";

const Humor:React.FC = () => {
    return (
        <div className='humor' id='memes'>
            <div className='humor__width'>
                <div className='humor__content'>
                    <Slide bottom >
                        <div className='humor__phone'>
                            <img src={humorImg} alt="mobile representation of alx sasa, showing some memes" />
                            <img className='tiny__logo' src={smallLogo} alt="small alx-sasa logo" />
                        </div>
                    </Slide>
                    <div className='humor__text'>
                        <Zoom left cascade>
                            <h1>A LITTLE SENSE OF HUMOR</h1>
                        </Zoom>
                        <div className='humor__add'>
                            {/* <p>A day with HUMOR is a day wasted</p> */}
                            <p>Life is so much easier with a sense of HUMOR</p>
                            <p>So is AlX.</p>
                        </div>
                        <img className='tiny__logo' src={smallLogo} alt="small alx-sasa logo" />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Humor

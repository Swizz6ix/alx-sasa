import React from 'react';
import "../styles/MotivationCard.css"
import smallLogo from "../images/logo.png"
import motivationImg from "../images/phoneGroup3.png";
import { Zoom, Slide }from "react-reveal";

const MotivationCard:React.FC = () => {
    //Renders the Motivational section of the landing page
    return (
        <div className='motivationCard' id='motivation'>
            <div className='motivationCard__width'>
                <div className='motivationCard__content'>
                    <div className='motivationCard__text'>
                        <Zoom top cascade>
                            <div className='motivationCard__headline'>
                                <h1>STAY</h1>
                                <h1>MOTIVATED</h1>
                                <h1>STAY</h1>
                                <h1>FRESH</h1>
                            </div>
                        </Zoom>
                        <h3> Add some quotes to carry peers along.</h3>
                        <div className='svg'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="70" viewBox="0 0 171 169" fill="none">
                                <rect width="161.053" height="9.68797" transform="matrix(0.999997 0.00227677 -0.0526636 0.998612 5.302 79.2607)" fill="#9EF7B1"/>
                                <rect width="113.515" height="9.68797" transform="matrix(0.999997 0.00227677 -0.0526636 0.998612 32.8149 94.196)" fill="#83F6FD"/>
                                <rect width="58.1074" height="9.68797" transform="matrix(0.999997 0.00227677 -0.0526636 0.998612 62.3798 111.799)" fill="#F48484"/>
                            </svg>
                        </div>
                        <img className='card__logo' src={smallLogo} alt="small alx sasa" />
                    </div>
                    <Slide top>
                    <div className='motivationCard__phone'>
                        <img src={motivationImg} className='motivational__img' alt="mobile representation of alx sasa showing some motivational quotes" />
                        
                    </div>
                    </Slide>
                    <img className='card__logo' src={smallLogo} alt="small alx sasa logo" />
                </div>
            </div>
        </div>
    )
}

export default MotivationCard

import React from 'react';
import '../styles/OnTime.css'
import smallLogo from "../images/logo.png"
import onTimeImg from "../images/PhoneGroup.png"
import { Zoom, Fade }from "react-reveal";


const OnTime:React.FC = () => {
    // renders the countdown timer card in the landing page
    return (
        <div className='onTime'>
            <div className='onTime__width'>
                <div className='onTime__content'>
                    <div className='onTime__header'>
                        <h1><Zoom right cascade>EVERY SECOND COUNTS</Zoom></h1>
                        <div className='onTime__text'>
                            <h4>
                                <Fade left big cascade>
                                    In alx, every second counts. Get the value of every second as they pass
                                </Fade>
                            </h4>
                            </div>
                            <div className='onTime__svg'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="53" viewBox="0 0 237 193" fill="none">
                                    <rect y="178.957" width="288" height="17.1213" transform="rotate(-38.4169 0 178.957)" fill="#9EF7B1"/>
                                    <rect x="56" y="168.134" width="202.99" height="17.1213" transform="rotate(-38.4169 56 168.134)" fill="#83F6FD"/>
                                    <rect x="118" y="158.567" width="103.909" height="17.1213" transform="rotate(-38.4169 118 158.567)" fill="#F48484"/>
                                </svg>
                            </div>
                    </div>
                    <div className='onTime__body'>
                        <div className='onTime__inner'>
                        </div>
                        <Zoom bottom>
                            <div className='onTime__phone'>
                                <img src={onTimeImg} alt="mobile representation of alx-sasa" />
                                <img className='small__logo' src={smallLogo} alt="small alx-sasa logo" />
                            </div>
                        </Zoom>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OnTime
